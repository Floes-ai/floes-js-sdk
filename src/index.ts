import { Builder } from "./builder";
import { Embed } from "./interfaces/embed";
import { EmbedService } from "./utilities/embed.service";
import { FloesContext, collectPageContext } from "./utilities/page-context";

export class FloesSDK {
  private embed?: Embed;
  private builder?: Builder;
  private listeners: {event: string, callback: () => void}[] = [];
  private customContext: FloesContext = {};

  constructor(
    public readonly embedToken: string,
  ) {
    this.init();
  }

  private async init(): Promise<void> {
    const embed = await (new EmbedService()).get(this.embedToken)
      .catch((error => error));

    if (embed instanceof Error) {
      throw embed;
    }

    this.embed = embed;

    this.setupBuilder();
  }

  private setupBuilder(): void {
    this.builder = new Builder(this, this.embed as Embed);
  }

  /**
   * Describe the page the visitor is on, so the assistant can answer about it.
   *
   * Values are merged into whatever was set before, alongside the page's own
   * url, title, description and language which are collected automatically.
   * Call it again on navigation to keep the assistant current:
   *
   *   floes.setContext({ productId: 'SKU-123', plan: 'business' });
   *
   * Pass null to clear everything set this way.
   */
  public setContext(context: FloesContext | null): void {
    this.customContext = context ? { ...this.customContext, ...context } : {};
    this.builder?.sendContext();
  }

  /** The automatic page context merged with anything set via setContext. */
  public getContext(): FloesContext {
    return { ...collectPageContext(), ...this.customContext };
  }

  public emit(event: string): void {
    this.listeners
      .filter(listener => listener.event === event)
      .forEach(listener => listener.callback());
  }

  public addListener(event: string, callback: () => void): void {
    this.listeners.push({event, callback});
  }

  public removeListener(event: string, callback: () => void): void {
    this.listeners = this.listeners.filter(listener => listener.event !== event || listener.callback !== callback);
  }
}

(window as any).FloesSDK = FloesSDK;
