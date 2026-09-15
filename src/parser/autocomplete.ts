import { PINTEREST_BASE_URL } from "../core";
import type { AutoCompletionResponse } from "../interfaces";

/** Parses an `AdvancedTypeaheadResource` response, keeping only query rows. */
export function parseAutoCompletion(data: any): AutoCompletionResponse[] {
  const items: any[] = data?.resource_response?.data?.items ?? [];

  return items
    .filter((item) => item?.type === "query")
    .map((item) => ({
      index: item?.resultIndex,
      label: item?.label,
      query: item?.query,
      url: `${PINTEREST_BASE_URL}${item?.url}`,
    }));
}
