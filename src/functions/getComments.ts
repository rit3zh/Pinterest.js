import request from "../fetch/request";
import { CommentsResultResponse } from "../interfaces";
import { parseCommentsResponse } from "../parser/parse.comments";

interface IOptions {
  id: string;
  aggregatedPinId: string;
  pageSize?: number;
}

export async function getComments(
  options: IOptions
): Promise<CommentsResultResponse[]> {
  const params = {
    source_url: `/pin/${options.id}/`,
    data: {
      options: {
        aggregated_pin_id: options.aggregatedPinId,
        comment_featured_ids: [],
        page_size: options?.pageSize || 20,
        redux_normalize_feed: true,
        is_reversed: false,
      },
      context: {},
    },
  };

  const URL: string = `https://in.pinterest.com/resource/UnifiedCommentsResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  const data = await request.get(URL);
  return parseCommentsResponse(data);
}
