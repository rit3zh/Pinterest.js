import type { IBoards, SearchResults } from "../interfaces/index";
import type { BoardResponse } from "../interfaces/index";

export default function parseBoards(data: any): BoardResponse {
  const root = data.resource_response;
  const bookmark = root?.bookmark;
  const results = root?.data?.results;
  const array: IBoards[] = [];
  results.map((response: any, index?: number, _?: any) => {
    const name: string = response?.name;
    const id: string = response?.id;
    const type: string = response?.type;
    const thumbnailURL: string = response?.image_thumbnail_url;
    const thumbnailImagesURL: string[] = response?.pin_thumbnail_urls;
    const coverURL: string = response?.image_cover_hd_url;
    const slashURL: string = response?.url;
    const pinCount: string = response?.pin_count;
    const owner = response?.owner;
    array.push({
      id,
      name,
      coverURL,
      thumbnailURL,
      thumbnailImagesURL,
      slashURL,
      pinCount,
      type,
      owner: {
        id: owner?.id,
        username: owner?.username,
        fullName: owner?.full_name,
        avatarURL: owner?.image_large_url,
        followers: owner?.follower_count,
      },
    });
  });
  return {
    bookmark,
    response: array,
  };
}
