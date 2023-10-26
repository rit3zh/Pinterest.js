"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPins = void 0;
const api_1 = require("../api/api");
const request_1 = __importDefault(require("../fetch/request"));
const parser_search_1 = __importDefault(require("../parser/parser.search"));
function searchPins(query, bookMark) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            source_url: `/search/pins/?q=${query}&rs=typed`,
            data: {
                options: {
                    article: "",
                    appliedProductFilters: "---",
                    price_max: null,
                    price_min: null,
                    query: query,
                    scope: "pins",
                    auto_correction_disabled: "",
                    top_pin_id: "",
                    filters: "",
                    page_size: "7",
                    bookmarks: [bookMark],
                },
                context: {},
            },
        };
        const URL = `${api_1.Api.baseURL}/resource/BaseSearchResource/get/?source_url=${encodeURIComponent(params.source_url)}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
        const data = yield request_1.default.get(URL);
        return (0, parser_search_1.default)(data);
    });
}
exports.searchPins = searchPins;
