import type { IBoardPinsResponse } from "../interfaces";
import { toTitle } from "./shared/pin";

/** Parses a `BoardFeedResource` response into a board's pins. */
export function parseBoardPins(data: any): IBoardPinsResponse {
  const root = data?.resource_response;

  return {
    bookmark: root?.bookmark,
    response: (root?.data ?? []).map((pin: any) => ({
      title: toTitle(pin),
      id: pin?.id,
      aggregatedPinId: pin?.aggregated_pin_data?.id || "",
      image: pin?.images?.orig?.url || "",
      video: pin?.videos?.video_list?.V_720P?.url,
      description: pin?.description || "",
      user: {
        name: pin?.pinner?.full_name,
        username: pin?.pinner?.username,
        image: pin?.pinner?.image_xlarge_url,
        id: pin?.pinner?.id,
        nodeId: pin?.pinner?.node_id,
        type: pin?.pinner?.type,
      },
    })),
  };
}
