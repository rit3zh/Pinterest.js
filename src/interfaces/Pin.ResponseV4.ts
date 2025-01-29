/**
 * Represents the different image sizes for a pin.
 */
export interface PinV4Images {
  /** Large image URL */
  lg?: string;

  /** Medium image URL */
  md?: string;

  /** Extra-large image URL */
  xl?: string;

  /** Original image URL */
  og?: string;
}

/**
 * Represents user reactions to a pin.
 */
export interface PinV4Reactions {
  /** Text label for reactions (e.g., "Likes") */
  label?: string;

  /** Number of reactions */
  numbers?: number;
}

/**
 * Represents the owner of the board where the pin belongs.
 */
export interface PinV4BoardOwner {
  /** Owner's ID */
  id?: string;

  /** Owner's username */
  username?: string;

  /** Owner's full name */
  fullName?: string;

  /** URL for the owner's medium-sized profile image */
  imageMediumUrl?: string;

  /** Whether the owner is a verified merchant */
  isVerifiedMerchant?: boolean;
}

/**
 * Represents the board associated with a pin.
 */
export interface PinV4Board {
  /** Name of the board */
  name?: string;

  /** Board's unique ID */
  id?: string;

  /** Thumbnail image for the board */
  imageThumbnail?: string;

  /** URL of the board */
  url?: string;

  /** Description of the board */
  description?: string;

  /** Privacy setting of the board (e.g., "Public" or "Private") */
  privacy?: string;

  /** Whether the board is collaborative */
  isCollaborative?: boolean;

  /** Layout type of the board (e.g., grid) */
  layout?: string;

  /** URLs of thumbnails for pins on the board */
  pinThumbnailUrls?: string[];

  /** Owner of the board */
  owner?: PinV4BoardOwner;
}

/**
 * Represents the creator of the pin.
 */
export interface PinV4Creator {
  /** Full name of the creator */
  fullName?: string;

  /** Username of the creator */
  username?: string;

  /** Profile image URL of the creator */
  image?: string;
}

/**
 * Represents a slot in a pin's carousel (set of images or videos).
 */
export interface PinV4CarouselSlot {
  /** Image URL for the carousel slot */
  image?: string;

  /** Title for the carousel slot */
  title?: string;

  /** Details or description for the carousel slot */
  details?: string;

  /** ID of the carousel slot */
  id?: string;
}

/**
 * Represents the response structure for pin data.
 */
export interface PinV4Response {
  /** Title of the pin */
  title?: string;

  /** Images associated with the pin */
  images?: PinV4Images;

  /** Pin's unique ID */
  id?: string;

  /** Video URL associated with the pin */
  video?: string;

  /** Aggregated pin ID (if applicable) */
  aggregatedPinId?: string;

  /** Number of saves (pins) for the pin */
  saves?: number;

  /** Reactions to the pin */
  reactions?: PinV4Reactions;

  /** Number of comments on the pin */
  commentCount?: number;

  /** Category of the pin */
  category?: string;

  /** The board to which the pin belongs */
  board?: PinV4Board;

  /** The creator of the pin */
  creator?: PinV4Creator;

  /** Description of the pin */
  description?: string;

  /** Creation date of the pin */
  createdAt?: string;

  /** Number of shares */
  shareCount?: number;

  /** Number of repins */
  repinCount?: number;

  /** Number of favorites */
  favorites?: number;

  /** Carousel slots associated with the pin */
  carousel?: PinV4CarouselSlot[];

  /** Link associated with the pin */
  link?: null | string;
}
