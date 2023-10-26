import type { BoardDataResponse, BoardResults } from "../interfaces/index";

export default function parseBoardData(data: any): BoardResults {
  const root = data?.resource_response;
  const bookmark = root?.bookmark;
  const results = root?.data;
  const array: BoardDataResponse[] = [];

  results.map((response: any, index?: number, _?: any) => {
    const id = response?.id;
    const type = response?.type;
    const title = !response?.title ? response?.grid_title : response?.title;
    const image = response?.images.orig?.url;
    const nativeCreator = response?.native_creator;
    array.push({
      id,
      title,
      type,
      image,
      nativeCreator: {
        id: nativeCreator?.id,
        username: nativeCreator?.username,
        fullName: nativeCreator?.full_name,
        avatarURL: nativeCreator?.image_xlarge_url,
        type: nativeCreator?.type,
      },
    });
  });
  return {
    bookmark,
    response: array,
  };
}
