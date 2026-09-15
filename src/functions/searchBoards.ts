import { fetchResource, PwsHandler, toBookmarks } from "../core";
import type { ISearchBoardsResponse } from "../interfaces";
import { assertNonEmpty } from "../utils/assert";
import { parseSearchBoards } from "../parser/searchBoards";

/**
 * Searches Pinterest for boards.
 *
 * @param query - The search term.
 * @param bookmark - Optional pagination bookmark from a previous call.
 * @returns The matching boards and a bookmark for the next page.
 */
export async function searchBoards(
  query: string,
  bookmark?: string,
): Promise<ISearchBoardsResponse> {
  assertNonEmpty(query, "query");

  const data = await fetchResource({
    resource: "BaseSearchResource",
    sourceUrl: `/search/boards/?q=${encodeURIComponent(query)}&rs=content_type_filter`,
    handler: PwsHandler.IDEAS,
    options: {
      article: null,
      applied_filters: null,
      appliedProductFilters: "---",
      auto_correction_disabled: false,
      corpus: null,
      customized_rerank_type: null,
      filters: null,
      query,
      query_pin_sigs: null,
      redux_normalize_feed: true,
      rs: "content_type_filter",
      scope: "boards",
      source_id: null,
      bookmarks: toBookmarks(bookmark),
    },
  });

  return parseSearchBoards(data);
}
