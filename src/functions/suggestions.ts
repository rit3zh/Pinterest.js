import { fetchResource, PwsHandler, toBookmarks } from "../core";
import type { SearchResults } from "../interfaces";
import { parseSuggestions } from "../parser/suggestions";
import { assertNonEmpty } from "../utils/assert";

/** Number of related pins requested per call. */
const SUGGESTION_PAGE_SIZE = 12;

/**
 * Fetches pins related to a given pin.
 *
 * @param id - The pin to find related content for.
 * @param bookmark - Optional pagination bookmark from a previous call.
 * @returns The related pins and a bookmark for the next page.
 */
export async function suggestions<T extends string>(
  id: T,
  bookmark?: string,
): Promise<SearchResults> {
  assertNonEmpty(id, "id");

  const data = await fetchResource({
    resource: "RelatedModulesResource",
    sourceUrl: `/pin/${id}/`,
    handler: PwsHandler.PIN,
    options: {
      pin_id: id,
      context_pin_ids: [],
      page_size: SUGGESTION_PAGE_SIZE,
      search_query: "",
      source: "deep_linking",
      top_level_source: "deep_linking",
      top_level_source_depth: 1,
      is_pdp: false,
      bookmarks: toBookmarks(bookmark),
    },
  });

  return parseSuggestions(data);
}
