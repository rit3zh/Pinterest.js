"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseBoards(data) {
    var _a;
    const root = data.resource_response;
    const bookmark = root === null || root === void 0 ? void 0 : root.bookmark;
    const results = (_a = root === null || root === void 0 ? void 0 : root.data) === null || _a === void 0 ? void 0 : _a.results;
    const array = [];
    results.map((response, index, _) => {
        const name = response === null || response === void 0 ? void 0 : response.name;
        const id = response === null || response === void 0 ? void 0 : response.id;
        const type = response === null || response === void 0 ? void 0 : response.type;
        const thumbnailURL = response === null || response === void 0 ? void 0 : response.image_thumbnail_url;
        const thumbnailImagesURL = response === null || response === void 0 ? void 0 : response.pin_thumbnail_urls;
        const coverURL = response === null || response === void 0 ? void 0 : response.image_cover_hd_url;
        const slashURL = response === null || response === void 0 ? void 0 : response.url;
        const pinCount = response === null || response === void 0 ? void 0 : response.pin_count;
        const owner = response === null || response === void 0 ? void 0 : response.owner;
        array.push({
            id,
            name,
            coverURL,
            thumbnailURL,
            thumbnailImagesURL,
            slashURL,
            pinCount,
            type,
            owner: {
                id: owner === null || owner === void 0 ? void 0 : owner.id,
                username: owner === null || owner === void 0 ? void 0 : owner.username,
                fullName: owner === null || owner === void 0 ? void 0 : owner.full_name,
                avatarURL: owner === null || owner === void 0 ? void 0 : owner.image_large_url,
                followers: owner === null || owner === void 0 ? void 0 : owner.follower_count,
            },
        });
    });
    return {
        bookmark,
        response: array,
    };
}
exports.default = parseBoards;
