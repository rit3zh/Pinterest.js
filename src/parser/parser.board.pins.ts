import type { RawBoardSectionPins } from "../types/raw";
import type { IBoardSectionPins } from "../interfaces/";
export function parseBoardSectionPinsParser<T>(body?: any): IBoardSectionPins {
  const client = body?.resource_response;
  const bookmark = client?.bookmark;
  const data = client?.data || [];

  const pins = data?.map((pin: any) => {
    const title = pin?.title || "";
    const isDownstreamPromotion = pin?.is_downstream_promotion || false;
    const id = pin?.id || "";
    const image = pin.images?.orig?.url || "";

    const board = {
      id: pin?.board?.id || "",
      nodeId: pin?.board?.node_id || "",
      name: pin?.board?.name || "",
      owner: {
        id: pin?.board?.owner?.id || "",
        nodeId: pin?.board?.owner?.node_id || "",
        username: pin?.board?.owner.username || "",
        image: pin.board?.owner?.image_xlarge_url,
        fullName: pin.board?.owner?.full_name,
        lastName: pin.board?.owner?.last_name,
        firstName: pin.board?.owner?.first_name,
        avatarColorIndex: pin.board?.owner?.avatar_color_index,
        type: pin.board?.owner?.type,
      },
      isCollaborative: pin?.board?.is_collaborative || false,
      url: pin?.board?.url || "",
      type: pin?.board?.type || "",
    };
    const aggregatedPinId = pin?.aggregated_pin_data?.id || "";
    const description = pin?.description || "";
    const reactionsCount = pin?.reaction_counts;
    const videoList =
      pin?.story_pin_data?.pages[0]?.blocks[0]?.video?.video_list || {};

    const videos =
      Object.keys(videoList!).map(
        (key) => videoList![key as keyof typeof videoList]
      )[0] || undefined;

    return {
      title,
      isDownstreamPromotion,
      id,
      board,
      aggregatedPinId,
      description,
      reactionsCount,
      videos,
      image,
    };
  }) as any;

  return {
    bookmark,
    pins: pins!.filter((pin: any) => typeof pin?.title === "string"),
  };
}
