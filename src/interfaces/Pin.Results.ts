export interface ImageSpec {
  dominantColor: string | null;
  height: number;
  type: string | null;
  url: string;
  width: number;
}

export interface PinBoardOwner {
  entityId: string;
  id: string;
}

export interface PinBoard {
  collaboratedByMe: boolean;
  collaboratorPermissions: string | null;
  entityId: string;
  isCollaborative: boolean;
  owner: PinBoardOwner;
  url: string;
  id: string;
  followedByMe: boolean;
}

export interface RichSummary {
  typeName: string;
  displayName: string;
}

export interface PinData {
  description: string;
  dominantColor: string;
  embed: any;
  gridDescription: string;
  gridTitle: string;
  imageSpec_236x: ImageSpec;
  imageSignature: string;
  isEligibleForPdp: boolean;
  richSummary: RichSummary;
  storyPinDataId: any;
  videos: any;
  board: PinBoard;
  closeupAttribution: { fullName: string; id: string };
  createdAt: string;
  domain: string;
  imageSpec_136x136: ImageSpec;
  images: { url: string };
  isDownstreamPromotion: boolean;
  isEligibleForAggregatedComments: boolean;
  isPromoted: boolean;
  isV1IdeaPin: any;
  pinJoin: {
    seoBreadcrumbs: any[];
    visualAnnotation: string[];
  };
  link: string;
  linkDomain: {
    name: string;
    officialUser: {
      __typename: string;
      id: string;
      username: string;
      fullName: string;
      imageMediumUrl: string;
    };
    id: string;
  };
  linkUserWebsite: any;
  mobileLink: any;
  nativeCreator: {
    __typename: string;
    id: string;
    username: string;
    fullName: string;
  };
  pinnedToBoard: any;
  pinner: {
    domainUrl: any;
    domainVerified: boolean;
    entityId: string;
    id: string;
    username: string;
    connectionType: string;
    fullName: string;
    explicitlyFollowedByMe: boolean;
    blockedByMe: boolean;
  };
  promoter: any;
  promotedIsRemovable: boolean;
  recommendationReason: any;
  richMetadata: {
    __typename: string;
    article: { __typename: string };
    products: any;
    recipe: any;
    tutorial: any;
    description: string;
    title: string;
  };
  section: any;
  shouldOpenInStream: boolean;
  storyPinData: any;
  thirdPartyPinOwner: any;
  trackedLink: string;
  trackingParams: string;
  isOosProduct: boolean;
  isStaleProduct: boolean;
  shoppingFlags: any[];
  closeupUnifiedDescription: string;
  closeupDescription: string;
  category: string;
  imageSpec_236: { url: string };
  imageSpec_474: { url: string };
  imageSpec_736: { url: string };
  isUnsafe: boolean;
  originPinner: {
    username: string;
    id: string;
    fullName: string;
  };
  title: string;
  imageSpec_orig: {
    __typename: string;
    url: string;
  };
  imageLargeUrl: string;
  descriptionHtml: string;
  altText: any;
  autoAltText: any;
  isHidden: boolean;
  shuffle: any;
  imageSpec_60x60: { url: string };
  imageSpec_170x: { url: string };
  imageSpec_474x: { url: string };
  imageSpec_564x: { url: string };
  imageSpec_736x: { url: string };
  imageSpec_600x315: { url: string };
  shouldMute: boolean;
  musicAttributions: any[];
  entityId: string;
  mediaAttribution: any;
  id: string;
}

export interface Response {
  data: {
    v3GetPinQuery: {
      data: PinData;
    };
  };
}

export interface Data {
  response: Response;
}
