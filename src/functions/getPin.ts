import request from "../fetch/request";
import { PinV4Response } from "../interfaces";
import { parsePinV4 } from "../parser/parse.pin";

export async function getPin<T extends string>(id: T): Promise<PinV4Response> {
  const params = {
    source_url: `/pin/${id}/`,
    data: {
      options: {
        id: `${id}`,
        field_set_key: "auth_web_main_pin",
        noCache: true,
        fetch_visual_search_objects: true,
      },
      context: {},
    },
  };

  const URL: string = `https://in.pinterest.com/resource/PinResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  const data = await request.get(URL);
  return parsePinV4(data);
}
