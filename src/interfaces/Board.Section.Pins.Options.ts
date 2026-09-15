/** Identifies a board (or board section) feed, plus paging settings. */
export interface IBoardSectionPinsOptions {
  /** The board's URL path, e.g. `/username/board-name/`. */
  slug: string;
  /** The board or section ID. */
  id: string;
  /** Bookmark returned by a previous call, used to fetch the next page. */
  bookmark?: string;
  /** Number of items to fetch. Defaults to 25. */
  pageSize?: number;
  /** Whether Pinterest should normalize the feed payload. Defaults to `true`. */
  normalizeFeed?: boolean;
}
