import { Api } from "../api/api";
import request from "../fetch/request";
import searchParser from "../parser/parser.search";
import { ISearch, SearchOptions } from "../interfaces/index";
import { parseSearchVideos } from "../parser/parse.videosSearch";

export interface ISearchResponse {
  response?: ISearch[];
  bookmark?: string;
}

export async function searchPins(
  query: string,
  options?: SearchOptions
): Promise<ISearchResponse> {
  if (!query) throw Error("No query specified");

  if (typeof options?.filter === "string" && options?.filter === "videos") {
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

    const data = await request.get(URL);
    return parseSearchVideos(data);
  } else {
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

    const data = await request.get(URL);
    return searchParser(data);
  }
}
