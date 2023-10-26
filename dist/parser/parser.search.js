"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const externals_1 = require("../externals");
function searchParser(data) {
    var _a, _b, _c;
    const root = data === null || data === void 0 ? void 0 : data.resource_response;
    const results = (_a = root === null || root === void 0 ? void 0 : root.data) === null || _a === void 0 ? void 0 : _a.results;
    const bookmark = (_c = (_b = data === null || data === void 0 ? void 0 : data.resource) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.bookmarks[0];
    const array = [];
    results.map((response, index, _) => {
        var _a, _b;
        const imageURL = `${(_b = (_a = response.images) === null || _a === void 0 ? void 0 : _a.orig) === null || _b === void 0 ? void 0 : _b.url}`;
        const title = !(response === null || response === void 0 ? void 0 : response.title)
            ? response === null || response === void 0 ? void 0 : response.grid_title
            : response === null || response === void 0 ? void 0 : response.title;
        const id = response === null || response === void 0 ? void 0 : response.id;
        const date = response === null || response === void 0 ? void 0 : response.created_at;
        const type = response === null || response === void 0 ? void 0 : response.type;
        const pinner = response === null || response === void 0 ? void 0 : response.pinner;
        const initialDate = new Date(date);
        const formattedDate = (0, externals_1.formatDate)(initialDate, "yyyy-MM-dd");
        array.push({
            id,
            title,
            pinner: {
                id: pinner === null || pinner === void 0 ? void 0 : pinner.id,
                username: pinner === null || pinner === void 0 ? void 0 : pinner.username,
                fullName: pinner === null || pinner === void 0 ? void 0 : pinner.full_name,
                avatarURL: pinner === null || pinner === void 0 ? void 0 : pinner.image_medium_url,
                followers: pinner === null || pinner === void 0 ? void 0 : pinner.follower_count,
            },
            date: {
                formatted: formattedDate,
                initial: date,
            },
            type: type,
            imageURL,
        });
    });
    return {
        bookmark,
        response: array,
    };
}
exports.default = searchParser;
