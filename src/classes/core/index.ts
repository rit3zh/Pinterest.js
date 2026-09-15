import type {
  AutoCompletionResponse,
  BoardResults,
  CommentsResultResponse,
  GetAutoCompletionOptions,
  GetBoardOptions,
  GetBoardPinsOptions,
  GetBoardSectionPinsOptions,
  GetBoardSectionsOptions,
  GetCommentsOptions,
  GetPinOptions,
  GetSuggestionsOptions,
  IBoardPinsResponse,
  IBoardSectionPins,
  IBoardSections,
  ISearchBoardsResponse,
  IVisualResult,
  PinsSearchResult,
  PinV4Response,
  SearchBoardsOptions,
  SearchPinsOptions,
  SuggestionsResult,
  VisualSearchOptions,
} from "../../interfaces";
import { getAutoCompletion } from "../../functions/getAutoCompletion";
import { getBoard } from "../../functions/getBoard";
import { getBoardPins } from "../../functions/getBoardPins";
import { getBoardSection } from "../../functions/getBoardSection";
import { getBoardSectionPins } from "../../functions/getBoardSectionPins";
import { getComments } from "../../functions/getComments";
import { getPin } from "../../functions/getPin";
import { searchBoards } from "../../functions/searchBoards";
import { searchPins } from "../../functions/searchPins";
import { suggestions } from "../../functions/suggestions";
import { visualSearch } from "../../functions/visualSearch";

/**
 * The library's main entry point: every Pinterest endpoint behind a single
 * object, each taking one options bag with consistently camelCased keys.
 *
 * @example
 * ```ts
 * const client = new PinterestClient();
 * const pin = await client.getPin({ id: "710302172523483897" });
 * ```
 */
export class PinterestClient {
  /** Fetches a single pin by ID. */
  async getPin(options: GetPinOptions): Promise<PinV4Response> {
    return getPin(options.id);
  }

  /** Searches for pins, optionally narrowed to videos. */
  async searchPins(options: SearchPinsOptions): Promise<PinsSearchResult> {
    return searchPins(options.query, {
      bookmark: options.bookmark,
      filter: options.filter,
      limit: options.limit,
    });
  }

  /** Searches for boards. */
  async searchBoards(
    options: SearchBoardsOptions,
  ): Promise<ISearchBoardsResponse> {
    return searchBoards(options.query, options.bookmark);
  }

  /** Fetches typeahead suggestions for a partial search term. */
  async getAutoCompletion(
    options: GetAutoCompletionOptions,
  ): Promise<AutoCompletionResponse[]> {
    return getAutoCompletion(options.query);
  }

  /** Fetches pins related to a given pin. */
  async getSuggestions(
    options: GetSuggestionsOptions,
  ): Promise<SuggestionsResult> {
    return suggestions(options.pinId, options.bookmark);
  }

  /** Finds pins that look visually similar to a given pin. */
  async visualSearch(options: VisualSearchOptions): Promise<IVisualResult> {
    return visualSearch({ id: options.pinId, bookmark: options.bookmark });
  }

  /** Fetches the comments on a pin. */
  async getComments(
    options: GetCommentsOptions,
  ): Promise<CommentsResultResponse[]> {
    return getComments({
      id: options.pinId,
      aggregatedPinId: options.aggregatedPinId,
      pageSize: options.pageSize,
    });
  }

  /** Fetches a board's metadata. */
  async getBoard(options: GetBoardOptions): Promise<BoardResults> {
    return getBoard({
      id: options.id,
      slashurl: options.slashUrl,
      bookmark: options.bookmark,
    });
  }

  /** Fetches the pins in a board's main feed. */
  async getBoardPins(
    options: GetBoardPinsOptions,
  ): Promise<IBoardPinsResponse> {
    return getBoardPins({
      id: options.id,
      slug: options.slug,
      bookmark: options.bookmark,
      pageSize: options.pageSize,
      normalizeFeed: options.normalizeFeed,
    });
  }

  /** Fetches a board's sections. */
  async getBoardSections(
    options: GetBoardSectionsOptions,
  ): Promise<IBoardSections> {
    return getBoardSection({
      id: options.id,
      slashurl: options.slashUrl,
      bookmark: options.bookmark,
    });
  }

  /** Fetches the pins inside a single board section. */
  async getBoardSectionPins(
    options: GetBoardSectionPinsOptions,
  ): Promise<IBoardSectionPins> {
    return getBoardSectionPins({
      id: options.id,
      slug: options.slug,
      bookmark: options.bookmark,
      pageSize: options.pageSize,
      normalizeFeed: options.normalizeFeed,
    });
  }
}
