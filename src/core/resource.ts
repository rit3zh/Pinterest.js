import request from "../fetch/request";
import { PINTEREST_BASE_URL, type PwsHandler } from "./constants";

/** Arbitrary JSON payload returned by a Pinterest resource endpoint. */
export type RawResponse = any;

export interface ResourceRequest {
  /** Resource name, e.g. `"PinResource"` or `"BoardFeedResource"`. */
  resource: string;
  /** The web route the request pretends to originate from. */
  sourceUrl: string;
  /** The resource-specific `options` bag. */
  options: Record<string, unknown>;
  /** Route handler header Pinterest expects for `sourceUrl`. */
  handler: PwsHandler;
  /** Origin override; defaults to {@link PINTEREST_BASE_URL}. */
  baseUrl?: string;
}

/**
 * Builds the URL for a Pinterest `/resource/<name>/get/` call.
 *
 * Every endpoint shares the same shape: a `source_url` query parameter plus a
 * JSON-encoded `data` bag holding `options` and an (always empty) `context`.
 */
export function buildResourceUrl({
  resource,
  sourceUrl,
  options,
  baseUrl = PINTEREST_BASE_URL,
}: Omit<ResourceRequest, "handler">): string {
  const data = encodeURIComponent(JSON.stringify({ options, context: {} }));
  const source = encodeURIComponent(sourceUrl);
  return `${baseUrl}/resource/${resource}/get/?source_url=${source}&data=${data}`;
}

/**
 * Performs a Pinterest resource call and returns the raw JSON body.
 *
 * Parsing is left to the caller so each endpoint can own its own shape.
 */
export async function fetchResource(
  req: ResourceRequest,
): Promise<RawResponse> {
  return request.get(buildResourceUrl(req), {
    "x-pinterest-pws-handler": req.handler,
  });
}

/**
 * Wraps an optional pagination bookmark in the array shape Pinterest expects,
 * so a missing bookmark requests the first page instead of sending `[null]`.
 */
export function toBookmarks(bookmark?: string): string[] {
  return bookmark ? [bookmark] : [];
}
