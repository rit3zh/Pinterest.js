import { IBoards } from "./Search.Boards";

export interface BoardResponse {
  bookmark?: string;
  response?: IBoards[];
}
