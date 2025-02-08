import type { IBoardSections } from "../interfaces";

export function parseBoardSection<T>(body?: any): IBoardSections {
  const data = body?.resource_response!;
  const bookmark = data?.bookmark;
  const sections = data?.data || [];
  const mappedSections = sections.map((value: any, index: any) => ({
    title: value?.title || "",
    slug: value?.slug || "",
    pinCount: value?.pin_count || 0,
    type: value?.type || "",
    id: value?.id || "",
    user: {
      id: value?.user?.id || "",
      nodeId: value?.user?.node_id || "",
    },
    board: {
      id: value?.board?.id || "",
      nodeId: value?.board?.node_id || "",
    },

    previewPins: value?.preview_pins.map((pin: any) => ({
      title: pin?.title || "",
      isDownstreamPromotion: pin?.is_downstream_promotion || false,
      id: pin.id || "",
      isUploaded: pin?.is_uploaded || false,
      link: pin?.link || "",
      trackingParams: pin?.tracking_params || "",
      cacheableId: pin?.cacheable_id || "",
      description: pin?.description || "",
      createdAt: pin?.created_at || "",
      isPlayable: pin?.is_playable || false,
      isVideo: pin?.is_video || false,
      repinCount: pin?.repin_count || 0,
      type: pin?.type || "",
      trackedLink: pin?.tracked_link || "",
      priceCurrency: pin?.price_currency || "",
      imageLargeUrl: pin?.image_large_url || "",
      imageLargeSizePixels: pin?.image_large_size_pixels || "",
      imageLargeSizePoints: pin?.image_large_size_points || "",
      imageMediumSizePoints: pin?.image_medium_size_points || "",
      imageSquareSizePoints: pin?.image_square_size_points || "",
    })),
  }));
  return {
    bookmark,
    sections: mappedSections,
  };
}
