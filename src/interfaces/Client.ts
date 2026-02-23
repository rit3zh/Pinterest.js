import type { ISearch } from "./SearchPins";
import type { PinsType } from "./SearchOptions";

export interface SuggestionsResult {
  readonly bookmark: string;
  readonly response: ISearch[];
}

export interface PinsSearchResult {
  readonly response?: ISearch[];
  readonly bookmark?: string;
}

export interface GetPinOptions {
  readonly id: string;
}

export interface SearchPinsOptions {
  readonly query: string;
  readonly bookmark?: string;
  readonly filter?: PinsType;
  readonly limit?: number;
}

export interface SearchBoardsOptions {
  readonly query: string;
  readonly bookmark?: string;
}

export interface GetAutoCompletionOptions {
  readonly query: string;
}

export interface GetSuggestionsOptions {
  readonly pinId: string;
  readonly bookmark?: string;
}

export interface VisualSearchOptions {
  readonly pinId: string;
  readonly bookmark?: string;
}

export interface GetBoardOptions {
  readonly id: string;
  readonly slashUrl: string;
  readonly bookmark?: string;
}

export interface GetBoardPinsOptions {
  readonly id: string;
  readonly slug: string;
  readonly bookmark?: string;
  readonly pageSize?: number;
  readonly normalizeFeed?: boolean;
}

export interface GetBoardSectionsOptions {
  readonly id: string;
  readonly slashUrl: string;
  readonly bookmark?: string;
}

export interface GetBoardSectionPinsOptions {
  readonly id: string;
  readonly slug: string;
  readonly bookmark?: string;
  readonly pageSize?: number;
  readonly normalizeFeed?: boolean;
}

export interface GetCommentsOptions {
  readonly pinId: string;
  readonly aggregatedPinId: string;
  readonly pageSize?: number;
}
