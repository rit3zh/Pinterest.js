/**
 * Represents a pinner on Pinterest with optional parameters.
 */
export interface IPinner {
  /** Pinterest unique identifier for the pinner */
  id?: string;
  /** Username of the pinner on Pinterest */
  username?: string;
  /** Full name of the pinner */
  fullName?: string;
  /** URL of the pinner's avatar image */
  avatarURL?: string;
  /** Number of followers the pinner has on Pinterest */
  followers?: number;
}

/**
 * Represents options for date formatting related to Pinterest content.
 */
export interface DateOptions {
  /** Formatted version of the date (e.g., "December 5, 2024") */
  formatted?: string;
  /** Initial date value in string format (e.g., "2024-12-05") */
  initial?: string;
}

/**
 * Represents a search result on Pinterest with optional parameters.
 */
export interface ISearch {
  /** Unique identifier for the search result on Pinterest */
  id?: string;
  /** Title of the Pinterest content (Pin, Board, etc.) */
  title?: string;
  /** Description of the Pinterest content */
  description?: string;
  /** Date information for the Pinterest content in `DateOptions` format */
  date?: DateOptions;
  /** Type of the search result (e.g., "Pin", "Board", "Video") */
  type?: string;
  /** The pinner associated with the search result */
  pinner?: IPinner;
  /** URL to an image related to the Pinterest search result */
  imageURL?: string;
  /** URL to a video related to the Pinterest search result, or undefined if no video */
  video?: string | undefined;
  /** Link associated with the pin */
  link?: string;
}
