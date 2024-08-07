export interface PinV4Images {
  lg?: string;
  md?: string;
  xl?: string;
  og?: string;
}

export interface PinV4Reactions {
  label?: string;
  numbers?: number;
}

export interface PinV4BoardOwner {
  id?: string;
  username?: string;
  fullName?: string;
  imageMediumUrl?: string;
  isVerifiedMerchant?: boolean;
}

export interface PinV4Board {
  name?: string;
  id?: string;
  imageThumbnail?: string;
  url?: string;
  description?: string;
  privacy?: string;
  isCollaborative?: boolean;
  layout?: string;
  pinThumbnailUrls?: string[];
  owner?: PinV4BoardOwner;
}

export interface PinV4Creator {
  fullName?: string;
  username?: string;
  image?: string;
}

export interface PinV4CarouselSlot {
  image?: string;
  title?: string;
  details?: string;
  id?: string;
}

export interface PinV4Response {
  title?: string;
  images?: PinV4Images;
  id?: string;
  video?: string;
  aggregatedPinId?: string;
  reactions?: PinV4Reactions;
  commentCount?: number;
  category?: string;
  board?: PinV4Board;
  creator?: PinV4Creator;
  description?: string;
  createdAt?: string;
  shareCount?: number;
  repinCount?: number;
  favorites?: number;
  carousel?: PinV4CarouselSlot[];
}
