import { type CommentsResultResponse } from "../interfaces";
export function parseCommentsResponse(
  data: any
): CommentsResultResponse[] {
  const { resource_response } = data;
  const response = resource_response?.data?.map((result) => ({
    text: result.text,
    createdAt: result.created_at,
    user: {
      username: result.user.username,
      displayName: result?.user.full_name,
      image: result.user.image_medium_url,
      id: result.user.id,
    },
    details: result.details,
    likes: result.like_count,
    tags: result.tags,
    image: result?.images?.map((i) => i?.originals?.url) as string[],
  }));
  return response;
}