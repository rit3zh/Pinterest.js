/**
 * Pinterest's public web origin. Used for every resource call unless a request
 * explicitly needs a regional mirror.
 */
export const PINTEREST_BASE_URL = "https://pinterest.com";

/**
 * Regional mirror. A few endpoints (pins, comments) are only reliably reachable
 * through it, so those calls opt in via `baseUrl`.
 */
export const PINTEREST_IN_BASE_URL = "https://in.pinterest.com";

/**
 * Pinterest rejects resource calls that don't look like they came from one of
 * its own web routes, so each request declares the route it is emulating.
 */
export const PwsHandler = {
  PIN: "www/pin/[id].js",
  PIN_VISUAL_SEARCH: "www/pin/[id]/visual-search.js",
  IDEAS: "www/ideas/[interest]/[id].js",
  BOARD: "www/[username]/[slug].js",
  BOARD_SECTION: "www/[username]/[slug]/[section_slug].js",
} as const;

export type PwsHandler = (typeof PwsHandler)[keyof typeof PwsHandler];

/** Default number of items requested when a caller doesn't specify one. */
export const DEFAULT_PAGE_SIZE = 25;
