import {
  DEFAULT_PAGE_SIZE,
  fetchResource,
  PwsHandler,
  toBookmarks,
} from "../core";
import type {
  IBoardPinsResponse,
  IBoardSectionPinsOptions,
} from "../interfaces";
import { parseBoardPins } from "../parser/boardPins";
import { assertNonEmpty } from "../utils/assert";

/**
 * Fetches the pins in a board's main feed.
 *
 * @param options - The board's `id` and `slug`, plus optional paging settings.
 * @returns The board's pins and a bookmark for the next page.
 */
export async function getBoardPins(
  options: IBoardSectionPinsOptions,
): Promise<IBoardPinsResponse> {
  const {
    slug,
    id,
    normalizeFeed = true,
    pageSize = DEFAULT_PAGE_SIZE,
    bookmark,
  } = options;
  assertNonEmpty(id, "id");
  assertNonEmpty(slug, "slug");

  const data = await fetchResource({
    resource: "BoardFeedResource",
    sourceUrl: slug,
    handler: PwsHandler.BOARD,
    options: {
      board_id: id,
      board_url: slug,
      bookmarks: toBookmarks(bookmark),
      page_size: pageSize,
      redux_normalize_feed: normalizeFeed,
      currentFilter: -1,
      field_set_key: "react_grid_pin",
      filter_section_pins: true,
      sort: "default",
      layout: "default",
    },
  });

  return parseBoardPins(data);
}
