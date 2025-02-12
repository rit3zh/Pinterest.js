import { Api } from "../api/api";
import request from "../fetch/request";
import type { ISearchBoardsResponse } from "../interfaces";
import parseBoards from "../parser/parser.boards";
import searchBoardsParser from "../parser/search.boards.parser";

/**
 * Searches for boards based on the given query and optional bookmark.
 *
 * This function fetches a list of boards matching the search query.
 *
 * @param query - The search term to find boards.
 * @param bookmark - An optional bookmark for pagination or filtering.
 * @returns A promise that resolves to the parsed board data (`BoardResponse`).
 * @throws Error if no query is specified.
 */
export async function searchBoards(
  query: string,
  bookmark?: string
): Promise<ISearchBoardsResponse> {
  if (!query) throw Error("No query specified");

  // Define the request parameters
  const params = {
    source_url: `/search/boards/?q=${query}&rs=content_type_filter`,
    data: {
      options: {
        article: null,
        applied_filters: null,
        appliedProductFilters: "---",
        auto_correction_disabled: false,
        corpus: null,
        customized_rerank_type: null,
        filters: null,
        query: query,
        query_pin_sigs: null,
        redux_normalize_feed: true,
        rs: "content_type_filter",
        scope: "boards",
        source_id: null,
        bookmarks: [bookmark],
      },
      context: {},
    },
  };

  // Construct the URL for the API request
  const URL: string = `${
    Api.baseURL
  }/resource/BaseSearchResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  // Make the API request
  const data = await request.get(URL);

  // Parse the response data and return it
  return searchBoardsParser(data);
}
