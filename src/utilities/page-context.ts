export type FloesContext = Record<string, unknown>;

/**
 * Read what the current page says about itself.
 *
 * Deliberately limited to metadata the page already publishes to crawlers and
 * link previews. Anything beyond that -- cart contents, the signed-in plan, a
 * product id -- is the host site's to pass explicitly via `setContext`.
 */
export function collectPageContext(): FloesContext {
  if (typeof document === "undefined") {
    return {};
  }

  const description = document
    .querySelector('meta[name="description"]')
    ?.getAttribute("content");

  const context: FloesContext = {
    url: window.location.href,
    title: document.title,
  };

  if (description) {
    context.description = description;
  }

  const language = document.documentElement.lang || navigator.language;
  if (language) {
    context.language = language;
  }

  return context;
}
