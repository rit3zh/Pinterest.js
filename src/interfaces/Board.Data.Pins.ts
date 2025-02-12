/**
 * Represents the owner of a Pinterest board.
 * This is typically the return type when fetching board owner details.
 */
interface BoardOwner {
  /** Unique identifier for the board owner */
  id?: string;
  /** Username of the board owner on Pinterest */
  username?: string;
  /** Full name of the board owner */
  fullName?: string;
  /** URL to the avatar image of the board owner */
  avatarURL?: string;
  /** Number of followers the board owner has, can be a string or number */
  followers?: number | string;
}

/**
 * Represents a Pinterest board.
 * This is typically the return type when fetching board details.
 */
export interface IBoards {
  title?: string;
  user?: User;
  id?: string;
  aggregatedPinId?: string;
  image?: string;
  video?: string;
  description?: string;
}

interface User {
  name?: string;
  username?: string;
  image?: string;
  id?: string;
  nodeId?: string;
  type?: string;
}

export interface IBoardPinsResponse {
  bookmark: string;
  response: IBoards[];
}
