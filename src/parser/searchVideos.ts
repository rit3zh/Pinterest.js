import type { SearchResults } from "../interfaces";
import { toProgressiveVideoUrl, toSearchPin } from "./shared/pin";

/** Parses a `BaseSearchResource` video-scope response. */
export function parseSearchVideos(data: any): SearchResults {
  const results = data?.resource_response?.data?.results ?? [];

  return {
    bookmark: data?.resource_response?.bookmark,
    response: results.map((raw: any) => ({
      ...toSearchPin(raw),
      video: toProgressiveVideoUrl(raw?.videos?.video_list?.V_HLSV4?.url, "t4"),
    })),
  };
}
