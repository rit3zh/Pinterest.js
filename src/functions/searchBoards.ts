import { Api } from "../api/api";
import request from "../fetch/request";
import type { BoardResponse } from "../interfaces";
import parseBoards from "../parser/parser.boards";

export async function searchBoards(
  query: string,
  bookmark?: string
): Promise<BoardResponse> {
  if (!query) throw Error("No query specified");
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

  const URL: string = `${
    Api.baseURL
  }/resource/BaseSearchResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  const data = await request.get(URL);
  return parseBoards(data);
}
