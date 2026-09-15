import { fetchResource, PINTEREST_IN_BASE_URL, PwsHandler } from "../core";
import type { PinV4Response } from "../interfaces";
import { parsePinV4 } from "../parser/pin";
import { assertNonEmpty } from "../utils/assert";

/**
 * Fetches a single pin by its ID.
 *
 * @param id - The unique identifier of the pin.
 * @returns The pin's details, including images, board, creator and stats.
 */
export async function getPin(id: string): Promise<PinV4Response> {
  assertNonEmpty(id, "id");

  const data = await fetchResource({
    resource: "PinResource",
    sourceUrl: `/pin/${id}/`,
    handler: PwsHandler.PIN,
    baseUrl: PINTEREST_IN_BASE_URL,
    options: {
      id,
      field_set_key: "auth_web_main_pin",
      noCache: true,
      fetch_visual_search_objects: true,
    },
  });

  return parsePinV4(data);
}
