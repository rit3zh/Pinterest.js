import type { ISearchBoardsResponse } from "../interfaces/index";

export default function searchBoardsParser(data: any): ISearchBoardsResponse {
  const root = data.resource_response;
  const bookmark = root?.bookmark;
  const results = root?.data?.results;

  const res = results?.map((response: any, index?: number, _?: any) => {
    const name = response?.name;
    const id = response?.id;
    const type = response?.type;
    const thumbnailURL = response?.image_thumbnail_url;
    const thumbnailImagesURL = response?.pin_thumbnail_urls;
    const coverURL = response?.image_cover_hd_url;
    const slashURL = response?.url;
    const pinCount = response?.pin_count;
    const pinner = response?.owner;
    const user = {
      name: pinner?.full_name,
      username: pinner?.username,
      image: pinner?.image_large_url,
      id: pinner?.id,
      nodeId: pinner?.node_id,
      type: pinner?.type,
    };

    return {
      name,
      id,
      type,
      thumbnailURL,
      thumbnailImagesURL,
      coverURL,
      slashURL,
      pinCount,
      user,
    };
  });
  return {
    bookmark,
    response: res,
  };
}
