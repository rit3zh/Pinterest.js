import { fetchResource, PwsHandler } from "../core";
import type { AutoCompletionResponse } from "../interfaces";
import { parseAutoCompletion } from "../parser/autocomplete";
import { assertNonEmpty } from "../utils/assert";

/** Number of typeahead suggestions requested per call. */
const SUGGESTION_COUNT = 20;

/**
 * Fetches auto-completion suggestions for a search term.
 *
 * @param query - The partial search term to complete.
 * @returns The suggested queries, each with its label and Pinterest URL.
 */
export async function getAutoCompletion<T extends string>(
  query: T,
): Promise<AutoCompletionResponse[]> {
  assertNonEmpty(query, "query");

  const data = await fetchResource({
    resource: "AdvancedTypeaheadResource",
    sourceUrl: "/",
    handler: PwsHandler.BOARD,
    options: {
      pin_scope: "pins",
      count: SUGGESTION_COUNT,
      term: query,
    },
  });

  return parseAutoCompletion(data);
}
