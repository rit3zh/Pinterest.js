import { Api } from "../api/api";
import request from "../fetch/request";
import type { IBoardSectionPinsOptions } from "../interfaces/index";
import parseBoards from "../parser/parser.boards";

export async function getBoardPins<T extends IBoardSectionPinsOptions>(
  options: T
) {
  const {
    slug,
    id,
    normalizeFeed = options?.normalizeFeed ?? true,
    pageSize = options?.pageSize ?? 25,
    bookmark = options?.bookmark ?? "",
  } = options;

  // Ensure that both 'id' and 'slug' are provided
  if (!id) throw Error("No id specified.");
  if (!slug) throw Error("No slash url specified.");

  // Define the parameters for the API request
  const params = {
    source_url: `${slug}`, // The URL of the board
    data: {
      options: {
        board_id: id,
        board_url: slug,
        bookmarks: [bookmark],
        page_size: pageSize,
        redux_normalize_feed: normalizeFeed,
        currentFilter: -1,
        field_set_key: "react_grid_pin",
        filter_section_pins: true,
        sort: "default",
        layout: "default",
      },
      context: {}, // Additional context data for the request
    },
  };
  // Construct the full URL for the API request
  const URL: string = `${
    Api.baseURL
  }/resource/BoardFeedResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
  // Send the GET request to fetch the board data
  const data = await request.get(URL, {
    "x-pinterest-pws-handler": "www/[username]/[slug].js",
  });
  return parseBoards(data);
}
