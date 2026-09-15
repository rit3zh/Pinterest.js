import { formatNumberWithLabel } from "../externals";
import type {
  PinV4Board,
  PinV4CarouselSlot,
  PinV4Images,
  PinV4Response,
} from "../interfaces";
import { toTitle } from "./shared/pin";

/** Index of the "like" bucket within Pinterest's `reaction_counts` map. */
const LIKE_REACTION = 1;

/** Picks the pin's playable video, preferring the plain MP4 over the story HLS. */
function toVideoUrl(raw: any): string | undefined {
  return (
    raw?.videos?.video_list?.["V_720P"]?.url ??
    raw?.story_pin_data?.pages?.[0]?.blocks?.[0]?.video?.video_list
      ?.V_HLSV3_MOBILE?.url
  );
}

function toImages(raw: any): PinV4Images {
  return {
    lg: raw?.images?.["600x315"]?.url,
    md: raw?.images?.["564x"]?.url,
    xl: raw?.images?.["736x"]?.url,
    og: raw?.images?.orig?.url,
  };
}

function toBoard(raw: any): PinV4Board {
  return {
    name: raw?.name,
    id: raw?.id,
    imageThumbnail: raw?.image_thumbnail_url,
    url: raw?.url,
    description: raw?.description,
    privacy: raw?.privacy,
    isCollaborative: raw?.is_collaborative,
    layout: raw?.layout,
    pinThumbnailUrls: raw?.pin_thumbnail_urls,
    owner: {
      id: raw?.owner?.id,
      username: raw?.owner?.username,
      fullName: raw?.owner?.full_name,
      imageMediumUrl: raw?.owner?.image_medium_url,
      isVerifiedMerchant: raw?.owner?.is_verified_merchant,
    },
  };
}

function toCarousel(raw: any): PinV4CarouselSlot[] | undefined {
  return raw?.carousel_data?.carousel_slots?.map((slot: any) => ({
    image: slot?.images?.["736x"]?.url,
    title: slot?.title,
    details: slot?.details,
    id: slot?.id,
  }));
}

/** Parses a `PinResource` response into a single pin. */
export function parsePinV4(data: any): PinV4Response {
  const raw = data?.resource_response?.data;
  const reactionCount = raw?.reaction_counts?.[LIKE_REACTION] ?? 0;

  return {
    id: raw?.id,
    title: toTitle(raw),
    description: raw?.description,
    link: raw?.link,
    category: raw?.category,
    createdAt: raw?.created_at,
    images: toImages(raw),
    video: toVideoUrl(raw),
    carousel: toCarousel(raw),
    board: toBoard(raw?.board),
    creator: {
      fullName: raw?.pinner?.full_name,
      username: raw?.pinner?.username,
      image: raw?.pinner?.image_medium_url,
    },
    aggregatedPinId: raw?.aggregated_pin_data?.id,
    saves: raw?.aggregated_pin_data?.aggregated_stats?.saves,
    reactions: {
      label: formatNumberWithLabel(reactionCount),
      numbers: reactionCount,
    },
    commentCount: raw?.comment_count,
    shareCount: raw?.share_count,
    repinCount: raw?.repin_count,
    favorites: raw?.favorite_user_count,
  };
}
