import { Api } from "../api/api";
import request from "../fetch/request";
import { IBoardSectionOptions } from "../interfaces";
import { parseBoardSection } from "../parser/parse.boardSection";

export async function getBoardSection<T extends IBoardSectionOptions>(
  options: T
) {
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
        bookmarks: [bookmark], // Bookmarks to filter by
      },
      context: {}, // Additional context data for the request
    },
  };
  // Construct the full URL for the API request
  const URL: string = `${
    Api.baseURL
  }/resource/BoardSectionsResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
  // Make the API request
  const response = await request.get(URL, {
    "x-pinterest-pws-handler": "www/[username]/[slug].js",
  });
  return parseBoardSection(response);
}
