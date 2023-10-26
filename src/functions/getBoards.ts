import parseBoardData from "../parser/parser.getBoard";
import request from "../fetch/request";
import { Api } from "../api/api";
import type { IOptions } from "../interfaces/index";

export async function getBoard(options: IOptions) {
  const { id, slashurl, bookmark } = options;
  if (!id) throw Error("No id specified.");
  if (!slashurl) throw Error("No slash url specified.");
  const params = {
    source_url: `${slashurl}`,
    data: {
      options: {
        board_id: id,
        board_url: slashurl,
        currentFilter: -1,
        field_set_key: "react_grid_pin",
        filter_section_pins: true,
        sort: "default",
        layout: "default",
        page_size: 25,
        redux_normalize_feed: true,
        bookmarks: [bookmark],
      },
      context: {},
    },
  };

  const URL: string = `${
    Api.baseURL
  }/resource/BoardFeedResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
  const data = await request.get(URL);
  return parseBoardData(data);
}
