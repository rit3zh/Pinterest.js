import { Api } from "../api/api";
import request from "../fetch/request";
import parseSuggestions from "../parser/parser.suggestions";

export async function suggestions(id: string, bookmark?: string) {
  const params = {
    source_url: `/pin/${id}/`,
    data: {
      options: {
        pin_id: `${id}`,
        context_pin_ids: [],
        page_size: 12,
        search_query: "",
        source: "deep_linking",
        top_level_source: "deep_linking",
        top_level_source_depth: 1,
        is_pdp: false,
        bookmarks: [bookmark],
      },
      context: {},
    },
  };
  const URL: string = `${
    Api.baseURL
  }/resource/RelatedModulesResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  const data = await request.get(URL);
  return parseSuggestions(data);
}
