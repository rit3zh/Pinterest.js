import type { ISearchBoardsResponse } from "../interfaces";

/** Parses a `BaseSearchResource` board-scope response. */
export function parseSearchBoards(data: any): ISearchBoardsResponse {
  const root = data?.resource_response;

  return {
    bookmark: root?.bookmark,
    response: (root?.data?.results ?? []).map((board: any) => ({
      name: board?.name,
      id: board?.id,
      type: board?.type,
      thumbnailURL: board?.image_thumbnail_url,
      thumbnailImagesURL: board?.pin_thumbnail_urls,
      coverURL: board?.image_cover_hd_url,
      slashURL: board?.url,
      pinCount: board?.pin_count,
      user: {
        name: board?.owner?.full_name,
        username: board?.owner?.username,
        image: board?.owner?.image_large_url,
        id: board?.owner?.id,
        nodeId: board?.owner?.node_id,
        type: board?.owner?.type,
      },
    })),
  };
}
