import { Data, ImageResponse, ParsedPinData } from "../interfaces";

export function parsePinData(data: Data) {
  const { response } = data;
  const _data = response?.data;
  const v3GetPinQuery = _data?.v3GetPinQuery?.data;

  const title = v3GetPinQuery?.gridTitle || "";
  const description = v3GetPinQuery?.gridDescription || "";
  const hexColor = v3GetPinQuery?.dominantColor || "";
  const image: ImageResponse = {
    url: v3GetPinQuery?.images?.url || "",
    imageSpec_236x: v3GetPinQuery?.imageSpec_236x || null,
    imageSpec_474x: v3GetPinQuery?.imageSpec_474x || null,
    imageSpec_736x: v3GetPinQuery?.imageSpec_736x || null,
    imageSpec_orig: v3GetPinQuery?.imageSpec_orig || null,
  };
  const link = v3GetPinQuery?.link || "";
  const createdAt = v3GetPinQuery?.createdAt || "";
  const domain = v3GetPinQuery?.domain || "";
  const isPromoted = v3GetPinQuery?.isPromoted || false;
  const board = v3GetPinQuery?.board || null;
  const videos = v3GetPinQuery?.videos || null;
  const pinner = v3GetPinQuery?.pinner || null;
  const richSummary = v3GetPinQuery?.richSummary || null;
  const richMetadata = v3GetPinQuery?.richMetadata || null;
  const pinJoin = v3GetPinQuery?.pinJoin || null;

  const closeupAttribution = v3GetPinQuery?.closeupAttribution || null;
  const linkDomain = v3GetPinQuery?.linkDomain || null;
  const nativeCreator = v3GetPinQuery?.nativeCreator || null;
  const recommendationReason = v3GetPinQuery?.recommendationReason || null;
  const thirdPartyPinOwner = v3GetPinQuery?.thirdPartyPinOwner || null;
  const trackedLink = v3GetPinQuery?.trackedLink || null;
  const trackingParams = v3GetPinQuery?.trackingParams || "";
  const closeupUnifiedDescription =
    v3GetPinQuery?.closeupUnifiedDescription || "";
  const category = v3GetPinQuery?.category || "";
  const isUnsafe = v3GetPinQuery?.isUnsafe || false;
  const musicAttributions = v3GetPinQuery?.musicAttributions || [];
  const entityId = v3GetPinQuery?.entityId || "";
  const id = v3GetPinQuery?.id || "";
  const parsedData: ParsedPinData = {
    title,
    description,
    hexColor,
    image,
    link,
    createdAt,
    domain,
    isPromoted,
    board,
    videos,
    pinner,
    richSummary,
    richMetadata,
    pinJoin,
    closeupAttribution,
    linkDomain,
    nativeCreator,
    recommendationReason,
    thirdPartyPinOwner,
    trackedLink,
    trackingParams,
    closeupUnifiedDescription,
    category,
    isUnsafe,
    musicAttributions,
    entityId,
    id,
  };
  return parsedData;
}
