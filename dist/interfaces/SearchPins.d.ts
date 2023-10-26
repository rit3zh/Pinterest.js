export interface IPinner {
    id?: string;
    username?: string;
    fullName?: string;
    avatarURL?: string;
    followers?: number;
}
export interface DateOptions {
    formatted?: string;
    initial?: string;
}
export interface ISearch {
    id?: string;
    title?: string;
    date?: DateOptions;
    type?: string;
    pinner?: IPinner;
    imageURL?: string;
}
//# sourceMappingURL=SearchPins.d.ts.map