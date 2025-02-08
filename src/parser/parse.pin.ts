import { formatNumberWithLabel } from "../externals";
import { PinV4Response } from "../interfaces";

export function parsePinV4(data: any): PinV4Response {
  const { resource_response } = data;

  const response = resource_response?.data;

  const title = response?.title || (response?.grid_title as string);
  const images = {
    lg: response?.images["600x315"].url,
    md: response?.images["564x"].url,
    xl: response?.images["736x"].url,
    og: response?.images.orig.url as string,
  };
  const id = response.id;
  const video =
    (response?.videos?.video_list["V_720P"]?.url as string) ||
    response?.story_pin_data?.pages[0]?.blocks[0]?.video?.video_list
      ?.V_HLSV3_MOBILE?.url;

  const reactions = {
    label: formatNumberWithLabel(response?.reaction_counts?.[1]) as string,
    numbers: response?.reaction_counts?.[1] as number,
  };
  const commentCount = response.comment_count as number;
  const category = response?.category as string;
  const board = {
    name: response?.board.name as string,
    id: response?.board.id as string,
    imageThumbnail: response?.board.image_thumbnail_url as string,
    url: response?.board.url as string,
    description: response?.board.description as string,
    privacy: response?.board.privacy as string,
    isCollaborative: response?.board.is_collaborative as boolean,
    layout: response?.board.layout as string,
    pinThumbnailUrls: response?.board.pin_thumbnail_urls as string[],
    owner: {
      id: response?.board.owner.id as string,
      username: response?.board.owner.username as string,
      fullName: response?.board.owner.full_name as string,
      imageMediumUrl: response?.board.owner.image_medium_url as string,
      isVerifiedMerchant: response?.board.owner.is_verified_merchant as boolean,
    },
  };
  const aggregatedPinId = response?.aggregated_pin_data?.id;
  const creator = {
    fullName: response?.pinner.full_name as string,
    username: response?.pinner.username as string,
    image: response?.pinner.image_medium_url as string,
  };
  const description = response?.description as string;
  const createdAt = response?.created_at as string;
  const shareCount = response?.share_count as number;
  const saves = response?.aggregated_pin_data.aggregated_stats?.saves;
  const repinCount = response?.repin_count as number;
  const favorites = response.favorite_user_count as number;
  const carousel = response?.carousel_data?.carousel_slots.map(
    (_carouselData: any) => ({
      image: _carouselData.images["736x"]?.url as string,
      title: _carouselData.title as string,
      details: _carouselData?.details as string,
      id: _carouselData.id as string,
    })
  );
  const link = response?.link;
  return {
    title,
    video,
    carousel,
    aggregatedPinId,
    board,
    saves,
    category,
    commentCount,
    createdAt,
    creator,
    description,
    favorites,
    id,
    images,
    reactions,
    repinCount,
    shareCount,
    link,
  };
}
