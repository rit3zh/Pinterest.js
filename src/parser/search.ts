import type { SearchResults } from "../interfaces";
import { toSearchPin } from "./shared/pin";

/** Parses a `BaseSearchResource` pin-scope response. */
export function parseSearch(data: any): SearchResults {
  const results = data?.resource_response?.data?.results ?? [];

  return {
    bookmark: data?.resource_response?.bookmark,
    response: results.map((raw: any) => ({
      ...toSearchPin(raw),
      description: raw?.description,
      link: raw?.link,
    })),
  };
}
