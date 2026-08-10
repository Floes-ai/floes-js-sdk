# floes-js-sdk

## Chat settings per page

The same assistant is often embedded across pages that want a different
opening. Pass overrides when you construct the SDK and they are applied on top
of the assistant's own settings — anything left out keeps its configured value.

```js
new window.FloesSDK("your-embed-token", {
  welcomeMessage: "Questions about our pricing? Ask away.",
  quickActions: [
    "What does the Business plan cost?",
    { label: "Book a demo", message: "I would like to book a demo." },
  ],
});
```

A quick action given as a plain string uses that string as both the chip label
and the message it sends. Up to six are shown; the rest are ignored.

Supported keys: `welcomeMessage`, `buttonText`, `subtitle`, `defaultMessage`,
`quickActions`.

### Without the SDK

Plain `<iframe>` embeds carry the same settings in the `settings` query
parameter, as base64url-encoded JSON:

```js
const settings = btoa(JSON.stringify({ welcomeMessage: "Hi there" }))
  .replace(/\+/g, "-")
  .replace(/\//g, "_")
  .replace(/=+$/, "");
```

```html
<iframe src="https://app.floes.ai/embed/?token=TOKEN&settings=eyJ3ZWxjb21lTWVzc2FnZSI6IkhpIHRoZXJlIn0"></iframe>
```

These settings come from the page, not from your Floes account, so treat them
as presentation only: they change what the widget says, never what the
assistant is allowed to do. Text that is too long is truncated and malformed
values fall back to the assistant's own settings.
