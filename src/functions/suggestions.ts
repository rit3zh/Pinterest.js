import { Api } from "../api/api";
import request from "../fetch/request";
import parseSuggestions from "../parser/parser.suggestions";

/**
 * Fetches related suggestions for a given pin ID.
 *
 * This function retrieves suggested pins related to a specific pin, useful for exploring similar content.
 *
 * @param id - The ID of the pin to fetch related suggestions for.
 * @param bookmark - Optional bookmark for pagination support.
 * @returns A promise that resolves to the parsed list of suggested pins.
 * @throws Error if no pin ID is specified.
 */
export async function suggestions<T extends string>(id: T, bookmark?: string) {
  if (!id) throw Error("No id specified");

  const params = {
    source_url: `/pin/${id}/`,
    data: {
      options: {
        pin_id: `${id}`,
        context_pin_ids: [],
        page_size: 12, // Default number of suggestions
        search_query: "",
        source: "deep_linking", // Source type for suggestion
        top_level_source: "deep_linking", // Specifies the source depth for the suggestions
        top_level_source_depth: 1, // Depth of the suggestion source
        is_pdp: false, // Product detail page flag
        bookmarks: [bookmark], // Optional bookmark for pagination
      },
      context: {},
    },
  };

  const URL: string = `${
    Api.baseURL
  }/resource/RelatedModulesResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  const data = await request.get(URL, {
    "x-pinterest-pws-handler": "www/pin/[id].js",
  });
  return parseSuggestions(data); // Parse and return the suggestions
}
