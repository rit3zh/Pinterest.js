import parseBoardData from "../parser/parser.getBoard";
import request from "../fetch/request";
import { Api } from "../api/api";
import type { IOptions } from "../interfaces/index";

/**
 * Fetches board data based on the provided options and parses it.
 *
 * @param options - The options for the board, including id, slashurl, and bookmark.
 * @returns A promise that resolves to the parsed board data.
 * @throws Error if either 'id' or 'slashurl' is not specified in the options.
 */
export async function getBoard(options: IOptions) {
  const { id, slashurl, bookmark } = options;

  // Ensure that both 'id' and 'slashurl' are provided
  if (!id) throw Error("No id specified.");
  if (!slashurl) throw Error("No slash url specified.");

  // Define the parameters for the API request
  const params = {
    source_url: `${slashurl}`, // The URL of the board
    data: {
      options: {
        board_id: id, // The board ID
        board_url: slashurl, // The board URL
        currentFilter: -1, // Filter to apply to the board
        field_set_key: "profile_grid_item", // Field set key for the board
        filter_section_pins: true, // Whether to filter section pins
        sort: "default", // Sort order for the pins
        layout: "default", // Layout type for the board
        page_size: 25, // Number of items per page
        redux_normalize_feed: true, // Normalizes the feed data
        bookmarks: [bookmark], // Bookmarks to filter by
      },
      context: {}, // Additional context data for the request
    },
  };

  // Construct the full URL for the API request
  const URL: string = `${
    Api.baseURL
  }/resource/BoardResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  // Send the GET request to fetch the board data
  const data = await request.get(URL, {
    "x-pinterest-pws-handler": "www/[username]/[slug].js",
  });

  // Parse and return the fetched data
  return parseBoardData(data);
}
