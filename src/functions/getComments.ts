import request from "../fetch/request";
import { CommentsResultResponse } from "../interfaces";
import { parseCommentsResponse } from "../parser/parse.comments";

interface IOptions {
  id: string; // Pin ID
  aggregatedPinId: string; // Aggregated Pin ID
  pageSize?: number; // Number of comments per page (optional)
}

/**
 * Fetches comments for a specific pin based on the provided options.
 *
 * @param options - The options object containing:
 *   - id: The unique identifier for the pin.
 *   - aggregatedPinId: The aggregated pin ID for the comments.
 *   - pageSize: The number of comments to fetch per page (defaults to 20).
 *
 * @returns A promise that resolves to an array of comment data (`CommentsResultResponse[]`).
 */
export async function getComments(
  options: IOptions
): Promise<CommentsResultResponse[]> {
  // Define the parameters for the API request
  const params = {
    source_url: `/pin/${options.id}/`, // Pin URL
    data: {
      options: {
        aggregated_pin_id: options.aggregatedPinId, // Aggregated Pin ID
        comment_featured_ids: [], // Featured comment IDs (empty array by default)
        page_size: options?.pageSize || 20, // Number of comments to fetch
        redux_normalize_feed: true, // Normalizes the feed data
        is_reversed: false, // Order of comments (false for newest first)
      },
      context: {}, // Additional context for the request
    },
  };

  // Construct the URL for the API request
  const URL: string = `https://in.pinterest.com/resource/UnifiedCommentsResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  // Send the GET request and fetch the data
  const data = await request.get(URL, {
    "x-pinterest-pws-handler": "www/pin/[id].js",
  });

  // Parse and return the comments data
  return parseCommentsResponse(data);
}
