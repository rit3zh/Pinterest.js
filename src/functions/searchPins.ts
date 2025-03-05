import { Api } from "../api/api";
import request from "../fetch/request";
import searchParser from "../parser/parser.search";
import { ISearch, SearchOptions } from "../interfaces/index";
import { parseSearchVideos } from "../parser/parse.videosSearch";

interface ISearchResponse {
  response?: ISearch[];
  bookmark?: string;
}

/**
 * Searches for pins based on the query and optional filter options.
 *
 * The function handles two types of searches: general pin search and video-specific pin search.
 * If the `filter` option is set to "videos", it fetches video pins; otherwise, it fetches regular pins.
 *
 * @param query - The search term to find pins.
 * @param options - Optional settings for the search, such as filters, limit, and bookmarks.
 * @returns A promise that resolves to the search results, including pins or videos and pagination information.
 * @throws Error if no query is specified.
 */
export async function searchPins(
  query: string,
  options?: SearchOptions
): Promise<ISearchResponse> {
  if (!query) throw Error("No query specified");

  if (typeof options?.filter === "string" && options?.filter === "videos") {
    // If the filter is "videos", search for video pins
    const params = {
      source_url: `/search/pins/?q=${query}&rs=typed`,
      data: {
        options: {
          article: "",
          appliedProductFilters: "---",
          price_max: null,
          price_min: null,
          query: query,
          scope: "videos",
          auto_correction_disabled: "",
          top_pin_id: "",
          filters: "",
          page_size: !options?.limit ? 10 : options?.limit,
          bookmarks: [options?.bookmark],
        },
        context: {},
      },
    };

    const URL: string = `${
      Api.baseURL
    }/resource/BaseSearchResource/get/?source_url=${encodeURIComponent(
      params.source_url
    )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

    const data = await request.get(URL, {
      "x-pinterest-pws-handler": "www/ideas/[interest]/[id].js",
    });
    return parseSearchVideos(data); // Parse and return the video-specific search results
  } else {
    // For regular pin search
    const params = {
      source_url: `/search/pins/?q=${query}&rs=typed`,
      data: {
        options: {
          article: "",
          appliedProductFilters: "---",
          price_max: null,
          price_min: null,
          query: query,
          scope: "pins",
          auto_correction_disabled: "",
          top_pin_id: "",
          filters: "",
          page_size: !options?.limit ? 10 : options?.limit,
          bookmarks: [options?.bookmark],
        },
        context: {},
      },
    };

    const URL: string = `${
      Api.baseURL
    }/resource/BaseSearchResource/get/?source_url=${encodeURIComponent(
      params.source_url
    )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

    const data = await request.get(URL, {
      "x-pinterest-pws-handler": "www/ideas/[interest]/[id].js",
    });
    return searchParser(data); // Parse and return the regular search results
  }
}
