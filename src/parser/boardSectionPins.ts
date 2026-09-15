import type { IBoardSectionPins } from "../interfaces";

/** Parses a `BoardSectionPinsResource` response into a section's pins. */
export function parseBoardSectionPins(data: any): IBoardSectionPins {
  const root = data?.resource_response;
  const pins: any[] = root?.data ?? [];

  return {
    bookmark: root?.bookmark,
    pins: pins
      .filter((pin) => typeof pin?.title === "string")
      .map((pin) => {
        const board = pin?.board;
        const owner = board?.owner;
        const videoList =
          pin?.story_pin_data?.pages?.[0]?.blocks?.[0]?.video?.video_list ?? {};

        return {
          title: pin.title,
          isDownstreamPromotion: pin?.is_downstream_promotion || false,
          id: pin?.id || "",
          image: pin?.images?.orig?.url || "",
          board: {
            id: board?.id || "",
            nodeId: board?.node_id || "",
            name: board?.name || "",
            owner: {
              id: owner?.id || "",
              nodeId: owner?.node_id || "",
              username: owner?.username || "",
              image: owner?.image_xlarge_url,
              fullName: owner?.full_name,
              lastName: owner?.last_name,
              firstName: owner?.first_name,
              avatarColorIndex: owner?.avatar_color_index,
              type: owner?.type,
            },
            isCollaborative: board?.is_collaborative || false,
            url: board?.url || "",
            type: board?.type || "",
          },
          aggregatedPinId: pin?.aggregated_pin_data?.id || "",
          description: pin?.description || "",
          reactionsCount: pin?.reaction_counts,
          videos: Object.values(videoList)[0],
        };
      }),
  } as IBoardSectionPins;
}
