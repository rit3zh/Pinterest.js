import type { SearchResults } from "./Search.Results";
import type { PinsType } from "./SearchOptions";

/** Related pins for a given pin, plus a bookmark for the next page. */
export type SuggestionsResult = SearchResults;

/** Pins matching a search, plus a bookmark for the next page. */
export type PinsSearchResult = SearchResults;

/** Mixed into any request that supports cursor pagination. */
export interface Paginated {
  /** Bookmark returned by a previous call, used to fetch the next page. */
  readonly bookmark?: string;
}

/** Mixed into any request that returns a page of pins. */
export interface PinPaged extends Paginated {
  /** Number of items to fetch. Defaults to 25. */
  readonly pageSize?: number;
  /** Whether Pinterest should normalize the feed payload. Defaults to `true`. */
  readonly normalizeFeed?: boolean;
}

export interface GetPinOptions {
  /** The pin's unique identifier. */
  readonly id: string;
}

export interface SearchPinsOptions extends Paginated {
  /** The search term. */
  readonly query: string;
  /** Restricts results to a pin type. Defaults to all pins. */
  readonly filter?: PinsType;
  /** Maximum number of pins to return. Defaults to 10. */
  readonly limit?: number;
}

export interface SearchBoardsOptions extends Paginated {
  /** The search term. */
  readonly query: string;
}

export interface GetAutoCompletionOptions {
  /** The partial search term to complete. */
  readonly query: string;
}

export interface GetSuggestionsOptions extends Paginated {
  /** The pin to find related content for. */
  readonly pinId: string;
}

export interface VisualSearchOptions extends Paginated {
  /** The pin to find visually similar content for. */
  readonly pinId: string;
}

/** Identifies a board by its ID and its `/user/board/` URL path. */
export interface GetBoardOptions extends Paginated {
  /** The board's unique identifier. */
  readonly id: string;
  /** The board's URL path, e.g. `/username/board-name/`. */
  readonly slashUrl: string;
}

/** Identifies a board's sections. Same shape as {@link GetBoardOptions}. */
export type GetBoardSectionsOptions = GetBoardOptions;

export interface GetBoardPinsOptions extends PinPaged {
  /** The board's unique identifier. */
  readonly id: string;
  /** The board's URL path, e.g. `/username/board-name/`. */
  readonly slug: string;
}

/** Identifies a section's pins; `id` is the section ID rather than the board's. */
export type GetBoardSectionPinsOptions = GetBoardPinsOptions;

export interface GetCommentsOptions {
  /** The pin's unique identifier. */
  readonly pinId: string;
  /** The pin's aggregated ID, which comments are keyed by. */
  readonly aggregatedPinId: string;
  /** Number of comments to fetch. Defaults to 20. */
  readonly pageSize?: number;
}
