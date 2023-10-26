import { Api } from "../api/api";
import request from "../fetch/request";
import searchParser from "../parser/parser.search";

export async function searchPins(query: string, bookMark?: string | undefined) {
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
        page_size: "7",
        bookmarks: [bookMark],
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
