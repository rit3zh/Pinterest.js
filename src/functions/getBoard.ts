import {
  DEFAULT_PAGE_SIZE,
  fetchResource,
  PwsHandler,
  toBookmarks,
} from "../core";
import type { BoardResults, IOptions } from "../interfaces";
import { parseBoardData } from "../parser/board";
import { assertNonEmpty } from "../utils/assert";

/**
 * Fetches a board's metadata.
 *
 * @param options - The board's `id` and `slashurl`, plus an optional bookmark.
 * @returns The board's details, including cover images and collaborators.
 */
export async function getBoard(options: IOptions): Promise<BoardResults> {
  const { id, slashurl, bookmark } = options;
  assertNonEmpty(id, "id");
  assertNonEmpty(slashurl, "slashurl");

  const data = await fetchResource({
    resource: "BoardResource",
    sourceUrl: slashurl,
    handler: PwsHandler.BOARD,
    options: {
      board_id: id,
      board_url: slashurl,
      currentFilter: -1,
      field_set_key: "profile_grid_item",
      filter_section_pins: true,
      sort: "default",
      layout: "default",
      page_size: DEFAULT_PAGE_SIZE,
      redux_normalize_feed: true,
      bookmarks: toBookmarks(bookmark),
    },
  });

  return parseBoardData(data);
}
