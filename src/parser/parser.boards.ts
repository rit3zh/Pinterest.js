import type { IBoardPinsResponse } from "../interfaces/index";

export default function parseBoards(data: any): IBoardPinsResponse {
  const root = data.resource_response;
  const bookmark = root?.bookmark;
  const results = root?.data;

  const response = results?.map((response: any, index?: number, _?: any) => {
    const title = response?.title || response?.grid_title || "";
    const pinner = response?.pinner;
    const id = response?.id;
    const aggregatedPinId = response?.aggregated_pin_data?.id || "";
    const image = response?.images?.orig?.url || "";
    const video = response?.videos?.video_list["V_720P"]?.url;
    const description = response?.description || "";
    const user = {
      name: pinner?.full_name,
      username: pinner?.username,
      image: pinner?.image_xlarge_url,
      id: pinner?.id,
      nodeId: pinner?.node_id,
      type: pinner?.type,
    };

    return {
      title,
      id,
      aggregatedPinId,
      image,
      video,
      description,
      user,
    };
  });
  return {
    bookmark,
    response,
  };
}
