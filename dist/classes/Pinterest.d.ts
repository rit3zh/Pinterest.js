export default class Pinterest {
    static pins(query: string, bookmark?: string): Promise<import("../interfaces").SearchResults>;
    static suggestions(id: string, bookmark?: string): Promise<import("../interfaces").SearchResults>;
    suggestions(id: string, bookmark?: string): Promise<import("../interfaces").SearchResults>;
    pins(query: string, bookmark?: string): Promise<import("../interfaces").SearchResults>;
}
//# sourceMappingURL=Pinterest.d.ts.map