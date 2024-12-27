import { Assistant } from "./assistant";

export interface Embed {
  embedToken: string;
  domain: string;
  assistant: Assistant;
}
