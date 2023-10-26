"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseBoardData(data) {
    const root = data === null || data === void 0 ? void 0 : data.resource_response;
    const bookmark = root === null || root === void 0 ? void 0 : root.bookmark;
    const results = root === null || root === void 0 ? void 0 : root.data;
    const array = [];
    results.map((response, index, _) => {
        var _a;
        const id = response === null || response === void 0 ? void 0 : response.id;
        const type = response === null || response === void 0 ? void 0 : response.type;
        const title = !(response === null || response === void 0 ? void 0 : response.title) ? response === null || response === void 0 ? void 0 : response.grid_title : response === null || response === void 0 ? void 0 : response.title;
        const image = (_a = response === null || response === void 0 ? void 0 : response.images.orig) === null || _a === void 0 ? void 0 : _a.url;
        const nativeCreator = response === null || response === void 0 ? void 0 : response.native_creator;
        array.push({
            id,
            title,
            type,
            image,
            nativeCreator: {
                id: nativeCreator === null || nativeCreator === void 0 ? void 0 : nativeCreator.id,
                username: nativeCreator === null || nativeCreator === void 0 ? void 0 : nativeCreator.username,
                fullName: nativeCreator === null || nativeCreator === void 0 ? void 0 : nativeCreator.full_name,
                avatarURL: nativeCreator === null || nativeCreator === void 0 ? void 0 : nativeCreator.image_xlarge_url,
                type: nativeCreator === null || nativeCreator === void 0 ? void 0 : nativeCreator.type,
            },
        });
    });
    return {
        bookmark,
        response: array,
    };
}
exports.default = parseBoardData;
