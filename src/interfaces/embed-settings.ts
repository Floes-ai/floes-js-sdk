/** One tappable suggestion, shown before the visitor has typed anything. */
export interface QuickAction {
  /** What the visitor reads on the chip. */
  label: string;
  /** What gets sent when they tap it. Defaults to the label. */
  message?: string;
}

/**
 * Per-placement overrides for the chat, handed to the embed through the
 * iframe URL. Anything left out falls back to the assistant's own settings,
 * so a host only states what it wants to differ on this page.
 */
export interface EmbedSettings {
  /** Opening line, replacing the assistant's welcome message. */
  welcomeMessage?: string;
  /** Label of the button that opens the conversation. */
  buttonText?: string;
  /** Small text under the assistant name in the header. */
  subtitle?: string;
  /** Message the start button sends on the visitor's behalf. */
  defaultMessage?: string;
  /** Up to six suggestions offered alongside the start button. */
  quickActions?: (QuickAction | string)[];
}
