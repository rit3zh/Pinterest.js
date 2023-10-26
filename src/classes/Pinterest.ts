import { searchPins, suggestions } from "../functions";

export default class Pinterest {
  public static async pins(query: string, bookmark?: string) {
    if (!query) throw Error("No query specified");
    const data = await searchPins(query, bookmark);
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
  async pins(query: string, bookmark?: string) {
    if (!query) throw Error("No query specified");
    const data = await searchPins(query, bookmark);
    return data;
  }
}
