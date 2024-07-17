export interface PinImageSpec {
  url: string;
  height?: number;
  width?: number;
  dominantColor?: string | null;
  type?: string | null;
}

export interface VideoUrls {
  videoUrls: string[];
  id: string;
  entityId: string;
  videoList: { __typename: string; vHLSV4: object; v720P: object };
}

export interface PinResponseBoardOwner {
  entityId: string;
  id: string;
}

export interface Board {
  collaboratedByMe: boolean;
  collaboratorPermissions: string | null;
  entityId: string;
  isCollaborative: boolean;
  owner: PinResponseBoardOwner;
  url: string;
  id: string;
  followedByMe: boolean;
}

export interface Pinner {
  domainUrl: string | null;
  domainVerified: boolean;
  entityId: string;
  id: string;
  username: string;
  connectionType: string;
  fullName: string;
  explicitlyFollowedByMe: boolean;
  blockedByMe: boolean;
}

export interface PinRichSummary {
  typeName: string;
  displayName: string;
}

export interface RichMetadata {
  __typename: string;
  article: { __typename: string };
  products: any;
  recipe: any;
  tutorial: any;
  description: string;
  title: string;
}

export interface PinJoin {
  seoBreadcrumbs: object[];
  visualAnnotation: string[];
}

export interface Attribution {
  fullName: string;
  id: string;
}

export interface DomainUser {
  __typename: string;
  id: string;
  username: string;
  fullName: string;
  imageMediumUrl: string;
}

export interface LinkDomain {
  name: string;
  officialUser: DomainUser;
  id: string;
}

export interface NativePinCreator {
  __typename: string;
  id: string;
  username: string;
  fullName: string;
}

export interface ThirdPartyPinOwner {
  __typename: string;
  id: string;
}

export interface MusicAttribution {}

export interface ImageResponse {
  url: string;
  imageSpec_236x: PinImageSpec | null;
  imageSpec_474x: PinImageSpec | null;
  imageSpec_736x: PinImageSpec | null;
  imageSpec_orig: PinImageSpec | null;
}
export interface ParsedPinData {
  title?: string;
  description?: string;
  hexColor?: string;
  image?: ImageResponse;
  link?: string;
  createdAt?: string;
  domain?: string;
  isPromoted?: boolean;
  board?: Board | null;
  videos?: VideoUrls | null;
  pinner?: Pinner | null;
  richSummary?: PinRichSummary | null;
  richMetadata?: RichMetadata | null;
  pinJoin?: PinJoin | null;
  closeupAttribution?: Attribution | null;
  linkDomain?: LinkDomain | null;
  nativeCreator?: NativePinCreator | null;
  recommendationReason?: string | null;
  thirdPartyPinOwner?: ThirdPartyPinOwner | null;
  trackedLink?: string | null;
  trackingParams?: string;
  closeupUnifiedDescription?: string;
  category?: string;
  isUnsafe?: boolean;
  musicAttributions?: MusicAttribution[];
  entityId?: string;
  id?: string;
}
