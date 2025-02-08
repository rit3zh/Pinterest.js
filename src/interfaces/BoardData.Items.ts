export interface CollaboratingUser {
  id?: string;
  username?: string;
  fullName?: string;
  image?: string;
  verified?: boolean;
}

export interface CoverPin {
  url?: string;
  id?: string;
  crop?: number[];
  size?: number[];
  scale?: number;
  timestamp?: number;
  signature?: string;
}

/**
 * Represents the results of a board query, including an optional bookmark and response data.
 */
export interface BoardResults {
  title?: string;
  description?: string;
  id?: string;
  nodeId?: string;
  type?: string;
  url?: string;
  followerCount?: number;
  pinCount?: number;
  sectionCount?: number;
  collaboratorCount?: number;
  collaboratingUsers?: CollaboratingUser[];
  coverImage?: string;
  coverPin?: CoverPin;
  slug?: string;
  createdAt?: string;
  isCollaborative?: boolean;
}
