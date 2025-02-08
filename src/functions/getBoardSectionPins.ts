import type { IBoardSectionPinsOptions } from "../interfaces";
import { parseBoardSectionPinsParser } from "../parser/parser.board.pins";
import { Api } from "../api/api";
import request from "../fetch/request";

export async function getBoardSectionPins<T extends IBoardSectionPinsOptions>(
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
        currentFilter: -1,
        field_set_key: "react_grid_pin",
        is_own_profile_pins: false,
        page_size: pageSize,
        redux_normalize_feed: normalizeFeed,
        section_id: id,
        orbac_subject_id: "",
      },
      context: {}, // Additional context data for the request
    },
  };

  const s = {
    bookmarks: [],
    currentFilter: -1,
    field_set_key: "react_grid_pin",
    is_own_profile_pins: false,
    page_size: 25,
    redux_normalize_feed: true,
    section_id: "5300109701111925392",
    orbac_subject_id: "",
  };

  // Construct the full URL for the API request
  const URL: string = `${
    Api.baseURL
  }/resource/BoardSectionPinsResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
  // Send the GET request to fetch the board data
  const data = await request.get(URL);
  return parseBoardSectionPinsParser(data);
}
