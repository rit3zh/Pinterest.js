export interface NativeCreator {
    id: string;
    username: string;
    fullName: string;
    avatarURL: string;
    type: string;
}
export interface BoardDataResponse {
    id?: string;
    type?: string;
    title?: string;
    image?: string;
    nativeCreator?: NativeCreator;
}
export interface BoardResults {
    bookmark?: string;
    response?: BoardDataResponse[];
}
//# sourceMappingURL=BoardData.Items.d.ts.map