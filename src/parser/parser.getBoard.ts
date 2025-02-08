import type { BoardResults } from "../interfaces/index";
import { BoardDataResponseRaw } from "../types/raw";

export default function parseBoardData(
  data: BoardDataResponseRaw
): BoardResults {
  const root = data?.resource_response;

  const response = root?.data;
  const title = response?.name || "";
  const description = response?.description || "";
  const id = response?.id || "";
  const nodeId = response?.node_id || "";
  const url = response?.url || "";
  const followerCount = response?.follower_count || 0;
  const pinCount = response?.pin_count || 0;
  const sectionCount = response?.section_count || 0;
  const collaboratorCount = response?.collaborator_count || 0;
  const collaboratingUsers =
    response?.collaborating_users.map((user) => {
      return {
        username: user?.username,
        fullName: user?.full_name,
        image: user?.image_medium_url,
        id: user?.id,
        verified: user?.is_verified_merchant,
      };
    }) || [];
  const coverImage = response?.cover_images["222x"].url || "";
  const coverPin = {
    url: response?.cover_pin?.image_url,
    id: response?.cover_pin?.pin_id,
    crop: response?.cover_pin?.crop,
    size: response?.cover_pin?.size,
    scale: response?.cover_pin?.scale,
    timestamp: response?.cover_pin?.timestamp,
    signature: response?.cover_pin?.image_signature,
  };
  const slug = response?.url || "";
  const createdAt = response?.created_at || "";
  const type = response?.type || "";
  const isCollaborative = response?.is_collaborative || false;

  return {
    title,
    description,
    id,
    nodeId,
    url,
    followerCount,
    pinCount,
    sectionCount,
    collaboratorCount,
    collaboratingUsers,
    coverImage,
    coverPin,
    slug,
    createdAt,
    type,
    isCollaborative,
  };
}
