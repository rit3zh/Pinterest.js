import { fetchResource, PwsHandler, toBookmarks } from "../core";
import type { IBoardSectionOptions, IBoardSections } from "../interfaces";
import { parseBoardSections } from "../parser/boardSections";
import { assertNonEmpty } from "../utils/assert";

/**
 * Fetches the sections of a board.
 *
 * @param options - The board's `id` and `slashurl`, plus an optional bookmark.
 * @returns The board's sections, each with its preview pins.
 */
export async function getBoardSection(
  options: IBoardSectionOptions,
): Promise<IBoardSections> {
  const { id, slashurl, bookmark } = options;
  assertNonEmpty(id, "id");
  assertNonEmpty(slashurl, "slashurl");

  const data = await fetchResource({
    resource: "BoardSectionsResource",
    sourceUrl: slashurl,
    handler: PwsHandler.BOARD,
    options: {
      board_id: id,
      bookmarks: toBookmarks(bookmark),
    },
  });

  return parseBoardSections(data);
}
