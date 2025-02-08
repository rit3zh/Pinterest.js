import request from "../fetch/request";
import type { PinV4Response } from "../interfaces";
import { parsePinV4 } from "../parser/parse.pin";

/**
 * Fetches a pin by its ID from Pinterest.
 *
 * @param id - The unique identifier of the pin to fetch.
 *
 * @returns A promise that resolves to the pin data (`PinV4Response`).
 */
export async function getPin<T extends string>(id: T): Promise<PinV4Response> {
  // Define the parameters for the API request
  const params = {
    source_url: `/pin/${id}/`, // URL for the specific pin
    data: {
      options: {
        id: `${id}`, // Pin ID
        field_set_key: "auth_web_main_pin", // The set of fields to fetch
        noCache: true, // Avoid caching the response
        fetch_visual_search_objects: true, // Include visual search objects in the response
      },
      context: {}, // Additional context for the request
    },
  };

  // Construct the URL for the API request
  const URL: string = `https://in.pinterest.com/resource/PinResource/get/?source_url=${encodeURIComponent(
    params.source_url
  )}&data=${encodeURIComponent(JSON.stringify(params.data))}`;

  // Send the GET request and fetch the pin data
  const data = await request.get(URL);

  // Parse and return the pin data
  return parsePinV4(data);
}
