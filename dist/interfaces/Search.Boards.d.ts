export interface BoardOwner {
    id?: string;
    username?: string;
    fullName?: string;
    avatarURL?: string;
    followers?: number | string;
}
export interface IBoards {
    id?: string;
    name?: string;
    type?: string;
    thumbnailURL?: string;
    thumbnailImagesURL?: string[];
    coverURL?: string;
    slashURL?: string;
    pinCount?: string;
    owner?: BoardOwner;
}
//# sourceMappingURL=Search.Boards.d.ts.map