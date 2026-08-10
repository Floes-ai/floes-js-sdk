import { FloesSDK } from ".";
import { config } from "./config";
import { Embed } from "./interfaces/embed";
import { encodeEmbedSettings } from "./utilities/embed-settings";
import "./styles/floes-sdk.scss";

/** Only ever post into the iframe that we created, at the origin we created it at. */
const EMBED_ORIGIN = new URL(config.embedLocation).origin;

export class Builder {
  private iframeLoaded = false;
  private iframe?: HTMLIFrameElement;
  private embedReady = false;

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

    this.watchNavigation();
  }

  private bindEvents(): void {
    [...document.querySelectorAll('[data-floes-open-chat]')].forEach((button) => {
      button?.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelector('[data-floes-chat-overlay]')?.classList.add('floes-chat-overlay--open');

        this.buildIframe();

        this.floesSDK.emit('chatOpened');
      });
    });

    [...document.querySelectorAll('[data-floes-close-chat]')].forEach((button) => {
      button?.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelector('[data-floes-chat-overlay]')?.classList.remove('floes-chat-overlay--open');

        this.floesSDK.emit('chatClosed');
      });
    });

    // The chat announces itself once it can receive context. Until then any
    // context we post would land before its listener is attached.
    window.addEventListener('message', (event: MessageEvent) => {
      if (event.origin !== EMBED_ORIGIN) {
        return;
      }
      if (event.source !== this.iframe?.contentWindow) {
        return;
      }
      if (event.data?.type !== 'floes:ready') {
        return;
      }
      this.embedReady = true;
      this.sendContext();
    });
  }

  /**
   * Keep context current on sites that navigate without a full page load.
   * pushState and replaceState fire no event of their own, so they are wrapped.
   */
  private watchNavigation(): void {
    const notify = () => this.sendContext();

    window.addEventListener('popstate', notify);

    (['pushState', 'replaceState'] as const).forEach((method) => {
      const original = history[method];
      history[method] = function (this: History, ...args: any[]) {
        const result = original.apply(this, args as any);
        notify();
        return result;
      } as typeof original;
    });
  }

  /** Post the current page context into the chat. No-op until the chat is ready. */
  public sendContext(): void {
    if (!this.embedReady || !this.iframe?.contentWindow) {
      return;
    }

    this.iframe.contentWindow.postMessage(
      {
        type: 'floes:context',
        context: this.floesSDK.getContext(),
      },
      EMBED_ORIGIN
    );
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

  /** `bold` / `minimal` -> a class the stylesheet keys off. `classic` adds nothing. */
  private styleClass(): string {
    const style = this.embed.assistant.styleVersion;

    return style && style !== 'classic' ? ` floes-style-${style}` : '';
  }

  private buildOpenChatButton(): void {
    const template = `
      <div class="floes-chat-button${this.styleClass()}">
        <button class="floes-chat-button__open" type="button" aria-label="Open chat" data-floes-open-chat="">
        </button>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', template);
  }

  private buildChatOverlay(): void {
    const template = `
      <div class="floes-chat-overlay${this.styleClass()}" data-floes-chat-overlay="">
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

    const settings = encodeEmbedSettings(this.floesSDK.settings);

    iframe.src =
      `${config.embedLocation}embed/?token=${encodeURIComponent(this.floesSDK.embedToken)}` +
      (settings ? `&settings=${settings}` : '');
    iframe.classList.add('floes-chat-overlay__iframe');
    iframe.addEventListener('load', () => {
      this.iframeLoaded = true;
    });

    this.iframe = iframe;

    document.querySelector('[data-floes-chat-container]')?.appendChild(iframe);
  }
}
