import request from "../fetch/request";
import { Api } from "../api/api";
import { parseAutoCompletion } from "../parser/parse.autocomplete";

export async function getAutoCompletion<T extends string>(query: T) {
  const urlParams = {
    source_url: "/",
    data: {
      options: {
        pin_scope: "pins",
        count: 20,
        term: query,
      },
      context: {},
    },
  };

  const queryParams = new URLSearchParams({
    source_url: urlParams.source_url,
    data: JSON.stringify(urlParams.data),
  });
  const url = `${
    Api.baseURL
  }/resource/AdvancedTypeaheadResource/get/?${queryParams.toString()}`;
  const data = await request.get(url);

  return parseAutoCompletion(data);
}
