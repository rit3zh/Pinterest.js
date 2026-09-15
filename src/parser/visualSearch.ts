import type { IVisualResult, IVisuals } from "../interfaces";

/** The crop and signature a `VisualLiveSearchResource` call searches from. */
export interface VisualSearchSeed {
  crop: { x?: number; y?: number; w?: number; h?: number };
  signature?: string;
}

/** Reads the detected visual object and image signature from a `PinResource` response. */
export function parseVisualSearchSeed(data: any): VisualSearchSeed {
  const pin = data?.resource_response?.data;
  const object = pin?.visual_objects?.[0];

  return {
    crop: { x: object?.x, y: object?.y, w: object?.w, h: object?.h },
    signature: pin?.image_signature,
  };
}

function toVisual(raw: any): IVisuals {
  return {
    altText: raw?.alt_text || raw?.auto_alt_text || "No description available",
    pinner: {
      fullName: raw?.pinner?.full_name || "Unknown",
      imageURL: raw?.pinner?.image_large_url || null,
      id: raw?.pinner?.id || "N/A",
      username: raw?.pinner?.username || "Anonymous",
    },
    board: {
      name: raw?.board?.name || "Untitled",
      url: raw?.board?.url || "N/A",
      thumbnailURL: raw?.board?.image_thumbnail_url || null,
    },
    images: {
      small: raw?.images?.["136x136"]?.url || null,
      medium: raw?.images?.["236x"]?.url || null,
      large: raw?.images?.["736x"]?.url || null,
      original: raw?.images?.orig?.url || null,
    },
    pinData: {
      title: raw?.title || "No title",
      description:
        raw?.description || raw?.grid_description || "No description",
      dominantColor: raw?.dominant_color || "Unknown",
      createdAt: raw?.created_at || "Unknown date",
      imageSignature: raw?.image_signature || "Unknown",
      link: raw?.link || "No link available",
      isVideo: raw?.is_video || false,
      reactionCounts: raw?.reaction_counts || { "1": 0 },
      commentsCount: raw?.comment_count || 0,
      repinCount: raw?.repin_count || 0,
    },
    storyData: {
      storyId: raw?.story_pin_data_id || null,
      storyNodeId: raw?.story_pin_data?.node_id || null,
      totalVideoDuration: raw?.story_pin_data?.total_video_duration || 0,
      pages: raw?.story_pin_data?.pages?.length || 0,
    },
  };
}

/** Parses a `VisualLiveSearchResource` response into similar pins. */
export function parseVisualSearch(data: any): IVisualResult {
  const root = data?.resource_response;

  return {
    bookmark: root?.bookmark,
    visuals: (root?.data?.results ?? []).map(toVisual),
  };
}
