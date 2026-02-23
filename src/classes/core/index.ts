import type {
  AutoCompletionResponse,
  BoardResults,
  CommentsResultResponse,
  IBoardPinsResponse,
  IBoardSectionOptions,
  IBoardSectionPins,
  IBoardSectionPinsOptions,
  IBoardSections,
  IOptions,
  ISearchBoardsResponse,
  IVisualOptions,
  IVisualResult,
  PinV4Response,
  SearchOptions,
} from "../../interfaces";
import type {
  GetAutoCompletionOptions,
  GetBoardOptions,
  GetBoardPinsOptions,
  GetBoardSectionPinsOptions,
  GetBoardSectionsOptions,
  GetCommentsOptions,
  GetPinOptions,
  GetSuggestionsOptions,
  PinsSearchResult,
  SearchBoardsOptions,
  SearchPinsOptions,
  SuggestionsResult,
  VisualSearchOptions,
} from "../../interfaces/Client";
import { getAutoCompletion } from "../../functions/autocomplete";
import { getBoardPins } from "../../functions/getBoardPin";
import { getBoardSection } from "../../functions/getBoardSection";
import { getBoardSectionPins } from "../../functions/getBoardSectionPins";
import { getBoard } from "../../functions/getBoards";
import { getComments } from "../../functions/getComments";
import { getPin } from "../../functions/getPin";
import { searchBoards } from "../../functions/searchBoards";
import { searchPins } from "../../functions/searchPins";
import { suggestions } from "../../functions/suggestions";
import { visualSearch } from "../../functions/visualSearch";

function assertNonEmpty(value: string, label: string): void {
  if (!value || value.trim() === "") {
    throw new TypeError(
      `[PinterestClient] ${label} must be a non-empty string`,
    );
  }
}

export class PinterestClient {
  async getPin<T extends GetPinOptions>(options: T): Promise<PinV4Response> {
    assertNonEmpty(options.id, "id");
    return getPin(options.id);
  }

  async searchPins<T extends SearchPinsOptions>(
    options: T,
  ): Promise<PinsSearchResult> {
    assertNonEmpty(options.query, "query");
    const opts: SearchOptions = {
      search: options.query,
      bookmark: options.bookmark,
      filter: options.filter,
      limit: options.limit,
    };
    return searchPins(options.query, opts);
  }

  async searchBoards<T extends SearchBoardsOptions>(
    options: T,
  ): Promise<ISearchBoardsResponse> {
    assertNonEmpty(options.query, "query");
    return searchBoards(options.query, options.bookmark);
  }

  async getAutoCompletion<T extends GetAutoCompletionOptions>(
    options: T,
  ): Promise<AutoCompletionResponse[]> {
    assertNonEmpty(options.query, "query");
    return getAutoCompletion(options.query);
  }

  async getSuggestions<T extends GetSuggestionsOptions>(
    options: T,
  ): Promise<SuggestionsResult> {
    assertNonEmpty(options.pinId, "pinId");
    return suggestions(
      options.pinId,
      options.bookmark,
    ) as Promise<SuggestionsResult>;
  }

  async visualSearch<T extends VisualSearchOptions>(
    options: T,
  ): Promise<IVisualResult> {
    assertNonEmpty(options.pinId, "pinId");
    const opts: IVisualOptions = {
      id: options.pinId,
      bookmark: options.bookmark,
    };
    return visualSearch(opts);
  }

  async getComments<T extends GetCommentsOptions>(
    options: T,
  ): Promise<CommentsResultResponse[]> {
    assertNonEmpty(options.pinId, "pinId");
    assertNonEmpty(options.aggregatedPinId, "aggregatedPinId");
    return getComments({
      id: options.pinId,
      aggregatedPinId: options.aggregatedPinId,
      pageSize: options.pageSize,
    });
  }

  async getBoard<T extends GetBoardOptions>(options: T): Promise<BoardResults> {
    assertNonEmpty(options.id, "id");
    assertNonEmpty(options.slashUrl, "slashUrl");
    const opts: IOptions = {
      id: options.id,
      slashurl: options.slashUrl,
      bookmark: options.bookmark,
    };
    return getBoard(opts);
  }

  async getBoardPins<T extends GetBoardPinsOptions>(
    options: T,
  ): Promise<IBoardPinsResponse> {
    assertNonEmpty(options.id, "id");
    assertNonEmpty(options.slug, "slug");
    const opts: IBoardSectionPinsOptions = {
      id: options.id,
      slug: options.slug,
      bookmark: options.bookmark,
      pageSize: options.pageSize,
      normalizeFeed: options.normalizeFeed,
    };
    return getBoardPins(opts);
  }

  async getBoardSections<T extends GetBoardSectionsOptions>(
    options: T,
  ): Promise<IBoardSections> {
    assertNonEmpty(options.id, "id");
    assertNonEmpty(options.slashUrl, "slashUrl");
    const opts: IBoardSectionOptions = {
      id: options.id,
      slashurl: options.slashUrl,
      bookmark: options.bookmark,
    };
    return getBoardSection(opts);
  }

  async getBoardSectionPins<T extends GetBoardSectionPinsOptions>(
    options: T,
  ): Promise<IBoardSectionPins> {
    assertNonEmpty(options.id, "id");
    assertNonEmpty(options.slug, "slug");
    const opts: IBoardSectionPinsOptions = {
      id: options.id,
      slug: options.slug,
      bookmark: options.bookmark,
      pageSize: options.pageSize,
      normalizeFeed: options.normalizeFeed,
    };
    return getBoardSectionPins(opts);
  }
}
