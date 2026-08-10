import { EmbedSettings } from "../interfaces/embed-settings";

/**
 * Pack settings into the single opaque `settings` query parameter the embed
 * reads. base64url keeps it safe to drop straight into a URL: no characters
 * that need escaping, and JSON's structure survives intact.
 *
 * Returns null when there is nothing to send, so callers can leave the
 * parameter off the URL entirely.
 */
export function encodeEmbedSettings(settings?: EmbedSettings | null): string | null {
  if (!settings || Object.keys(settings).length === 0) {
    return null;
  }

  let json: string;

  try {
    json = JSON.stringify(settings);
  } catch {
    // Circular or otherwise unserialisable: ship the embed without overrides
    // rather than not at all.
    return null;
  }

  const bytes = new TextEncoder().encode(json);
  let binary = '';

  for (let index = 0; index < bytes.length; index++) {
    binary += String.fromCharCode(bytes[index]);
  }

  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
