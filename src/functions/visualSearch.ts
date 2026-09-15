import { fetchResource, PwsHandler, toBookmarks } from "../core";
import type { IVisualOptions, IVisualResult } from "../interfaces";
import {
  parseVisualSearch,
  parseVisualSearchSeed,
} from "../parser/visualSearch";
import { assertNonEmpty } from "../utils/assert";

/** Crop source Pinterest uses for a full-image (uncropped) visual search. */
const CROP_SOURCE = 5;

/**
 * Finds pins that look visually similar to a given pin.
 *
 * This takes two round trips: the first reads the pin's detected visual object
 * and image signature, the second searches using that crop.
 *
 * @param options - The pin `id` to search from, plus an optional bookmark.
 * @returns The visually similar pins and a bookmark for the next page.
 */
export async function visualSearch(
  options: IVisualOptions,
): Promise<IVisualResult> {
  const { id, bookmark } = options;
  assertNonEmpty(id, "id");

  const sourceUrl = `/pin/${id}/visual-search/?surfaceType=flashlight`;

  const pin = await fetchResource({
    resource: "PinResource",
    sourceUrl,
    handler: PwsHandler.PIN,
    options: {
      id,
      field_set_key: "detailed",
      fetch_visual_search_objects: true,
    },
  });

  const { crop, signature } = parseVisualSearchSeed(pin);

  const results = await fetchResource({
    resource: "VisualLiveSearchResource",
    sourceUrl,
    handler: PwsHandler.PIN_VISUAL_SEARCH,
    options: {
      categories: null,
      crop,
      crop_source: CROP_SOURCE,
      entry_source: "flashlight",
      image_signature: signature,
      is_shopping: false,
      pin_id: id,
      price_max: null,
      price_min: null,
      bookmarks: toBookmarks(bookmark),
    },
  });

  return parseVisualSearch(results);
}
