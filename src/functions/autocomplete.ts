import request from "../fetch/request";
import { Api } from "../api/api";
import { parseAutoCompletion } from "../parser/parse.autocomplete";

/**
 * Fetches auto-completion suggestions for a given query.
 *
 * @param query - The search term to retrieve auto-completion suggestions for.
 * @returns A promise that resolves to the parsed auto-completion data.
 */
export async function getAutoCompletion<T extends string>(query: T) {
  // Defines the parameters for the auto-completion request
  const urlParams = {
    source_url: "/",
    data: {
      options: {
        pin_scope: "pins", // Scope for the pins to filter suggestions
        count: 20, // Number of suggestions to return
        term: query, // The search term for auto-completion
      },
      context: {}, // Optional context for the request
    },
  };

  // Encodes the URL parameters to send in the request
  const queryParams = new URLSearchParams({
    source_url: urlParams.source_url,
    data: JSON.stringify(urlParams.data),
  });

  // Constructs the full URL for the API request
  const url = `${
    Api.baseURL
  }/resource/AdvancedTypeaheadResource/get/?${queryParams.toString()}`;

  // Sends the GET request to fetch the auto-completion data
  const data = await request.get(url, {
    "x-pinterest-pws-handler": "www/[username]/[slug].js",
  });

  // Parses and returns the data after fetching it
  return parseAutoCompletion(data);
}
