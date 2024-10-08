import { searchPins, suggestions, searchBoards } from "../functions";
import { SearchOptions } from "../interfaces";

export class Pinterest {
  public static async pins(query: string, options?: SearchOptions) {
    if (!query) throw Error("No query specified");
    const data = await searchPins(query, options);
    return data;
  }
  public static async board(query: string, bookmark?: string) {
    if (!query) throw Error("No query specified");
    const data = await searchBoards(query, bookmark);
    return data;
  }

  public static async suggestions(id: string, bookmark?: string) {
    if (!id) throw Error("No id specified");
    const data = await suggestions(id, bookmark);
    return data;
  }
  public async suggestions(id: string, bookmark?: string) {
    if (!id) throw Error("No id specified");
    const data = await suggestions(id, bookmark);
    return data;
  }
  public async pins(query: string, options?: SearchOptions) {
    if (!query) throw Error("No query specified");
    const data = await searchPins(query, options);
    return data;
  }

  public async board(query: string, bookmark?: string) {
    if (!query) throw Error("No query specified");
    const data = await searchBoards(query, bookmark);
    return data;
  }
}
