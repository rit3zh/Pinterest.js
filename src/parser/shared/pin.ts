import { formatDate } from "../../externals";
import type { DateOptions, IPinner, ISearch } from "../../interfaces";

/** Date format shared by every parser that surfaces a `date.formatted` field. */
const DATE_FORMAT = "yyyy-MM-dd";

/**
 * Pinterest exposes a pin's title under one of two keys depending on the
 * surface it was returned from.
 */
export function toTitle(raw: any): string {
  return raw?.title || raw?.grid_title || "";
}

/** Normalizes the raw `pinner` block shared by pin, search and board payloads. */
export function toPinner(raw: any): IPinner {
  return {
    id: raw?.id,
    username: raw?.username,
    fullName: raw?.full_name,
    avatarURL: raw?.image_medium_url,
    followers: raw?.follower_count,
  };
}

/** Pairs the raw ISO timestamp with a `yyyy-MM-dd` rendering of it. */
export function toDate(rawDate: string): DateOptions {
  return {
    formatted: formatDate(new Date(rawDate), DATE_FORMAT),
    initial: rawDate,
  };
}

/**
 * Rewrites an HLS playlist URL into the progressive MP4 Pinterest serves
 * alongside it, which is directly downloadable.
 *
 * @param hlsUrl - The `V_HLSV4` playlist URL, if present.
 * @param variant - Quality suffix Pinterest uses for the MP4 rendition.
 * @returns The MP4 URL, or `undefined` when there is no video.
 */
export function toProgressiveVideoUrl(
  hlsUrl: string | undefined,
  variant: "t4" | "t5",
): string | undefined {
  return hlsUrl
    ?.replace("/hls/", "/hevcMp4V2/")
    ?.replace(".m3u8", `_${variant}.mp4`);
}

/**
 * Maps the fields every pin-grid payload has in common. Callers layer on the
 * surface-specific extras (video, link, description).
 */
export function toSearchPin(raw: any): ISearch {
  return {
    id: raw?.id,
    title: toTitle(raw),
    pinner: toPinner(raw?.pinner),
    date: toDate(raw?.created_at),
    type: raw?.type,
    imageURL: `${raw?.images?.orig?.url}`,
  };
}
