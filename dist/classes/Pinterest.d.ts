import { SearchOptions } from "../interfaces";
export declare class Pinterest {
    static pins(query: string, options?: SearchOptions): Promise<import("../functions").ISearchResponse>;
    static board(query: string, bookmark?: string): Promise<import("../interfaces").BoardResponse>;
    static suggestions(id: string, bookmark?: string): Promise<import("../interfaces").SearchResults>;
    suggestions(id: string, bookmark?: string): Promise<import("../interfaces").SearchResults>;
    pins(query: string, options?: SearchOptions): Promise<import("../functions").ISearchResponse>;
    board(query: string, bookmark?: string): Promise<import("../interfaces").BoardResponse>;
}
//# sourceMappingURL=Pinterest.d.ts.map