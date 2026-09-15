import type { SearchResults } from "../interfaces";
import { toProgressiveVideoUrl, toSearchPin } from "./shared/pin";

/** Parses a `RelatedModulesResource` response into related pins. */
export function parseSuggestions(data: any): SearchResults {
  const root = data?.resource_response;

  return {
    bookmark: root?.bookmark,
    response: (root?.data ?? []).map((raw: any) => ({
      ...toSearchPin(raw),
      video: toProgressiveVideoUrl(raw?.videos?.video_list?.V_HLSV4?.url, "t5"),
    })),
  };
}
