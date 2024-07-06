import { ISearch, SearchOptions } from "../interfaces/index";
export interface ISearchResponse {
    response?: ISearch[];
    bookmark?: string;
}
export declare function searchPins(query: string, options?: SearchOptions): Promise<ISearchResponse>;
//# sourceMappingURL=searchPins.d.ts.map