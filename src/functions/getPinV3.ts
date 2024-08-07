import { Api } from "../api/api";
import request from "../fetch/request";
import { parseSpecificScriptTags } from "../parser/parser.tags";
import { parsePinData } from "../parser/parse.pin_v3";
import type { ParsedPinData } from "../interfaces";

/**
 * @deprecated
 */
export async function getPinV3(id: string): Promise<ParsedPinData> {
  const requestCall = await request.getText(Api.baseURL + `/pin/${id}`);
  const response = requestCall;
  const parseScriptAllScriptTags = parseSpecificScriptTags(response);
  const scriptFormValidation = parseScriptAllScriptTags[0];
  const JSONConversion = JSON.parse(scriptFormValidation);
  const data = parsePinData(JSONConversion);
  return { ...data };
}
