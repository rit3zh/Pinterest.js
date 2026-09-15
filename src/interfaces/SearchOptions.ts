/**
 * Represents the type of pins to search for.
 * Can either be "all" (all types of pins) or "videos" (only video pins).
 */
export type PinsType = "all" | "videos";

/**
 * Represents the options available for searching pins.
 * This is typically used when performing a pin search to define filters and limits.
 */
export interface SearchOptions {
  /** Optional bookmark or label associated with the search */
  bookmark?: string;
  /** Optional filter to specify the type of pins ("all" or "videos") */
  filter?: PinsType;
  /** Optional limit to specify the maximum number of results to return */
  limit?: number;
}
