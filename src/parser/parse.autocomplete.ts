import { Api } from "../api/api";
import type { AutoCompletionResponse } from "../interfaces";

export function parseAutoCompletion(rawData: any) {
  const root = rawData.resource_response;
  const data = root?.data;
  const items = data?.items;

  const arrayToPush: AutoCompletionResponse[] = [];
  items.map((item: any) => {
    if (item?.type !== "query") return undefined;
    const query = item?.query;
    const label = item?.label;
    const index = item?.resultIndex;
    const url = Api.baseURL + item.url;
    arrayToPush.push({
      index,
      label,
      query,
      url,
    });
  });
  return arrayToPush;
}
