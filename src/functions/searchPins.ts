import { fetchResource, PwsHandler, toBookmarks } from "../core";
import type { SearchOptions, SearchResults } from "../interfaces";
import { assertNonEmpty } from "../utils/assert";
import { parseSearch } from "../parser/search";
import { parseSearchVideos } from "../parser/searchVideos";

/** Number of pins requested when the caller doesn't specify a limit. */
const DEFAULT_LIMIT = 10;

/**
 * Searches Pinterest for pins.
 *
 * Passing `filter: "videos"` narrows the search to video pins, which are
 * returned with a directly downloadable MP4 URL.
 *
 * @param query - The search term.
 * @param options - Optional filter, limit and pagination bookmark.
 * @returns The matching pins and a bookmark for the next page.
 */
export async function searchPins(
  query: string,
  options?: SearchOptions,
): Promise<SearchResults> {
  assertNonEmpty(query, "query");

  const isVideoSearch = options?.filter === "videos";

  const data = await fetchResource({
    resource: "BaseSearchResource",
    sourceUrl: `/search/pins/?q=${encodeURIComponent(query)}&rs=typed`,
    handler: PwsHandler.IDEAS,
    options: {
      article: "",
      appliedProductFilters: "---",
      price_max: null,
      price_min: null,
      query,
      scope: isVideoSearch ? "videos" : "pins",
      auto_correction_disabled: "",
      top_pin_id: "",
      filters: "",
      page_size: options?.limit ?? DEFAULT_LIMIT,
      bookmarks: toBookmarks(options?.bookmark),
    },
  });

  return isVideoSearch ? parseSearchVideos(data) : parseSearch(data);
}
