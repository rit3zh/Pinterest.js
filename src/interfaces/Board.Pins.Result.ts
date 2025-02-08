export interface IBoardSectionPinsList {
  title?: string;
  isDownstreamPromotion?: boolean;
  id?: string;
  board?: IBoardSectionPinsBoard;
  aggregatedPinId?: string;
  description?: string;
  reactionsCount?: object | undefined;
  videos?: IBoardSectionPinsVideos[];
  image?: string;
}

export interface IBoardSectionPins {
  bookmark?: string;
  pins: IBoardSectionPinsList[];
}

export interface IBoardSectionPinsBoard {
  id?: string;
  nodeId?: string;
  name?: string;
  owner?: IBoardSectionPinsOwner;
  isCollaborative?: boolean;
  url?: string;
  type?: string;
}

export interface IBoardSectionPinsOwner {
  id?: string;
  nodeId?: string;
  username?: string;
  image?: string;
  fullName?: string;
  lastName?: string;
  firstName?: string;
  avatarColorIndex?: number;
  type?: string;
}

export interface IBoardSectionPinsVideos {
  width?: number;
  height?: number;
  duration?: number;
  url?: string;
  thumbnail: string;
  captions_urls: object | undefined;
}
