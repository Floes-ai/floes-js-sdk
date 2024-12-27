import { Builder } from "./builder";
import { Embed } from "./interfaces/embed";
import { EmbedService } from "./utilities/embed.service";

export class FloesSDK {
  private embed?: Embed;
  private listeners: {event: string, callback: () => void}[] = [];

  constructor(
    private readonly embedToken: string,
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
    new Builder(this, this.embed as Embed);
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


// This is just for testings
const floesSDK = new FloesSDK('09607078-e5cc-4a9f-93cf-7988625cb24f');

floesSDK.addListener('chatOpened', () => {
  console.log('Chat opened');
});
