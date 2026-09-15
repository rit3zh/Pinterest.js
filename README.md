<p align="center">
  <img src="./assets/pinterest-logo.png" alt="App Mockup" width=200>
    <p align="center">

<p align="center">
  <a href="https://github.com/rit3zh/pinterest.js" target="_blank">
    <img src="http://forthebadge.com/images/badges/built-with-love.svg" alt="Built With Love">
  </a>
</p>

<p align="center">
  <a href="https://github.com/rit3zh/pinterest.js" target="_blank">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Maintained">
  </a>
  <a href="https://github.com/TrishCX/Pinterest.js/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License">
  </a>
  <a href="https://www.npmjs.com/package/pinterest.js" target="_blank">
    <img src="https://img.shields.io/npm/v/pinterest.js.svg" alt="npm version">
  </a>
</p>

<p align="center">
  <a href="https://www.buymeacoffee.com/rit3zh" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me a Coffee">
  </a>
</p>

<div align="center">

# Pinterest.js 📌

**Pinterest.js** is a versatile and efficient JavaScript library that allows you to get information from [Pinterest](https://pinterest.com).

</div>

## Release Notes 📝

- **New `PinterestClient` class** — every endpoint behind one object, each taking a single options bag.
- **Fixed search pagination** — `searchPins` now returns the bookmark for the *next* page.
- **Search queries are URL-encoded**, so terms like `"cats & dogs"` work.
- **Clear errors** — non-2xx responses and missing required options now throw descriptive errors.
- **More resilient parsers** — missing fields in Pinterest's responses no longer crash.
- **`visualSearch` supports `bookmark`.**
- **Breaking:** `SearchOptions` no longer has the unused `search` field.

> ⚠️ **Known issue:** Pinterest currently returns `404` for visual search, so
> `visualSearch` throws until the endpoint is updated.

## Key Features 🚀

- **Extremely fast 💡**
- **Zero dependencies 📦**
- **Lightweight 🎁**
- **Fully typed with TypeScript 🧩**
- **Built with 🤍**

## Installation 🛠️

To install Pinterest.js as an npm package, use the following command in your project directory:

```bash
npm install pinterest.js
```

## Usage 🧑‍💻

Every endpoint is available on `PinterestClient`, which takes a single options
object per call:

```ts
import { PinterestClient } from "pinterest.js";

const client = new PinterestClient();

const pin = await client.getPin({ id: "710302172523483897" });
console.log(pin.title, pin.images.og);
```

CommonJS works the same way:

```js
const { PinterestClient } = require("pinterest.js");
```

> Requires Node.js 18+ (uses the built-in `fetch`).

### API 📚

| Method | Options | Returns |
| --- | --- | --- |
| `getPin` | `{ id }` | A single pin: images, video, board, creator and stats |
| `searchPins` | `{ query, filter?, limit?, bookmark? }` | Matching pins (`filter: "videos"` for video pins) |
| `searchBoards` | `{ query, bookmark? }` | Matching boards |
| `getAutoCompletion` | `{ query }` | Typeahead suggestions for a partial term |
| `getSuggestions` | `{ pinId, bookmark? }` | Pins related to a given pin |
| `visualSearch` | `{ pinId, bookmark? }` | Pins that look visually similar to a pin |
| `getComments` | `{ pinId, aggregatedPinId, pageSize? }` | Comments on a pin |
| `getBoard` | `{ id, slashUrl, bookmark? }` | A board's metadata |
| `getBoardPins` | `{ id, slug, pageSize?, bookmark? }` | The pins in a board's main feed |
| `getBoardSections` | `{ id, slashUrl, bookmark? }` | A board's sections |
| `getBoardSectionPins` | `{ id, slug, pageSize?, bookmark? }` | The pins inside one section |

The standalone functions are also exported directly if you prefer them over the
client:

```ts
import { getPin, searchPins } from "pinterest.js";
```

### Errors ⚠️

Methods throw a `TypeError` when a required option is missing or empty, and an
`Error` when Pinterest responds with a non-2xx status.

### Pagination 📄

Any method that returns a list also returns a `bookmark`. Pass it back on the
next call to get the following page:

```ts
const page = await client.searchPins({ query: "wallpapers", limit: 25 });
const more = await client.searchPins({
  query: "wallpapers",
  limit: 25,
  bookmark: page.bookmark,
});
```

## Projects Using Pinterest.js 🌟

Here are some amazing projects built using Pinterest.js:

- [React Native Wallpaper App](https://github.com/rit3zh/react-native-wallpaper-app): A sleek and modern wallpaper app built with React Native, allowing users to explore and set beautiful wallpapers sourced from Pinterest.

## Contribution 🤝

We welcome contributions from the community. If you find any issues or have ideas for enhancements, feel free to open an issue or create a pull request on our [GitHub repository](https://github.com/TrishCX/Pinterest.js).

## License 📜

Pinterest.js is licensed under the [MIT License](https://github.com/TrishCX/Pinterest.js/blob/main/LICENSE), making it open and accessible for developers to use and modify in their projects.
