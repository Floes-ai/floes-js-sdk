import { FloesSDK } from ".";
import { config } from "./config";
import { Embed } from "./interfaces/embed";
import "./styles/floes-sdk.scss";

export class Builder {
  private iframeLoaded = false;

  constructor(
    private readonly floesSDK: FloesSDK,
    private readonly embed: Embed
  ) {
    this.init();
  }

  private init(): void {
    this.buildStyling();

    this.buildOpenChatButton();

    this.buildChatOverlay();

    this.bindEvents();
  }

  private bindEvents(): void {
    document.querySelector('[data-floes-open-chat]')?.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector('[data-floes-chat-overlay]')?.classList.add('floes-chat-overlay--open');

      this.buildIframe();

      this.floesSDK.emit('chatOpened');
    });

    document.querySelector('[data-floes-close-chat]')?.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector('[data-floes-chat-overlay]')?.classList.remove('floes-chat-overlay--open');

      this.floesSDK.emit('chatClosed');
    });
  }

  private buildStyling(): void {
    // Load custom css variables from embed
    document.body.insertAdjacentHTML(
      'beforeend',
      `<style>
        :root {
          --floes-background-color: ${this.embed.assistant.bodyColor};
          --floes-text-color: ${this.embed.assistant.textColor};
        }
      </style>`
    );
  }

  private buildOpenChatButton(): void {
    const template = `
      <div class="floes-chat-button">
        <button class="floes-chat-button__open" type="button" aria-label="Open chat" data-floes-open-chat="">
        </button>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', template);
  }

  private buildChatOverlay(): void {
    const template = `
      <div class="floes-chat-overlay" data-floes-chat-overlay="">
        <button class="floes-chat-overlay__close" type="button" aria-label="Close chat" data-floes-close-chat=""></button>

        <div class="floes-chat-overlay__chat" data-floes-chat-container="">
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', template);
  }

  private buildIframe(): void {
    if (this.iframeLoaded) {
      return;
    }

    const iframe = document.createElement('iframe');

    iframe.src = `${config.embedLocation}embed/?token=${this.floesSDK.embedToken}`;
    iframe.classList.add('floes-chat-overlay__iframe');
    iframe.addEventListener('load', () => {
      this.iframeLoaded = true;
    });

    document.querySelector('[data-floes-chat-container]')?.appendChild(iframe);
  }
}
