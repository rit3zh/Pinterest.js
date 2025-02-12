import { IBoards } from "./Board.Data.Pins";

/**
 * Represents the response data for board search, including optional pagination and board data.
 */
export interface BoardResponse {
  /** Optional bookmark for pagination or referencing specific data */
  bookmark?: string;

  /** Array of boards returned in the response */
  response?: IBoards[];
}
