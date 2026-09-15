import { fetchResource, PINTEREST_IN_BASE_URL, PwsHandler } from "../core";
import type { CommentsResultResponse } from "../interfaces";
import { parseCommentsResponse } from "../parser/comments";
import { assertNonEmpty } from "../utils/assert";

/** Default number of comments returned when the caller doesn't specify one. */
const DEFAULT_COMMENT_PAGE_SIZE = 20;

export interface GetCommentsParams {
  /** The pin's unique identifier. */
  id: string;
  /** The pin's aggregated ID, which is what comments are keyed by. */
  aggregatedPinId: string;
  /** Number of comments to fetch. Defaults to 20. */
  pageSize?: number;
}

/**
 * Fetches the comments on a pin.
 *
 * @param options - The pin's IDs and an optional page size.
 * @returns The comments, newest first.
 */
export async function getComments(
  options: GetCommentsParams,
): Promise<CommentsResultResponse[]> {
  const { id, aggregatedPinId, pageSize = DEFAULT_COMMENT_PAGE_SIZE } = options;
  assertNonEmpty(id, "id");
  assertNonEmpty(aggregatedPinId, "aggregatedPinId");

  const data = await fetchResource({
    resource: "UnifiedCommentsResource",
    sourceUrl: `/pin/${id}/`,
    handler: PwsHandler.PIN,
    baseUrl: PINTEREST_IN_BASE_URL,
    options: {
      aggregated_pin_id: aggregatedPinId,
      comment_featured_ids: [],
      page_size: pageSize,
      redux_normalize_feed: true,
      is_reversed: false,
    },
  });

  return parseCommentsResponse(data);
}
