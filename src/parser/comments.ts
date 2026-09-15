import type { CommentsResultResponse } from "../interfaces";

/** Parses a `UnifiedCommentsResource` response into comments. */
export function parseCommentsResponse(data: any): CommentsResultResponse[] {
  const comments: any[] = data?.resource_response?.data ?? [];

  return comments.map((comment) => ({
    text: comment?.text,
    createdAt: comment?.created_at,
    user: {
      username: comment?.user?.username,
      displayName: comment?.user?.full_name,
      image: comment?.user?.image_medium_url,
      id: comment?.user?.id,
    },
    details: comment?.details,
    likes: comment?.like_count,
    tags: comment?.tags,
    image: comment?.images?.map((image: any) => image?.originals?.url),
  }));
}
