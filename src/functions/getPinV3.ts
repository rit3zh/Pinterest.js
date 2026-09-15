import { PINTEREST_BASE_URL } from "../core";
import request from "../fetch/request";
import type { ParsedPinData } from "../interfaces";
import { parsePinData } from "../parser/pinV3";
import { parseSpecificScriptTags } from "../parser/scriptTags";
import { assertNonEmpty } from "../utils/assert";

/**
 * Fetches pin data by scraping the pin page's embedded Relay payload.
 *
 * @deprecated Use {@link getPin} instead; this scrapes HTML and is brittle.
 *
 * @param id - The unique identifier of the pin.
 * @returns The parsed pin data.
 */
export async function getPinV3(id: string): Promise<ParsedPinData> {
  assertNonEmpty(id, "id");

  const html = await request.getText(`${PINTEREST_BASE_URL}/pin/${id}`);
  const [payload] = parseSpecificScriptTags(html);

  if (!payload) {
    throw new Error(`[pinterest.js] No pin payload found for id "${id}"`);
  }

  return parsePinData(JSON.parse(payload));
}
