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
exports.suggestions = void 0;
const api_1 = require("../api/api");
const request_1 = __importDefault(require("../fetch/request"));
const parser_suggestions_1 = __importDefault(require("../parser/parser.suggestions"));
function suggestions(id, bookmark) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            source_url: `/pin/${id}/`,
            data: {
                options: {
                    pin_id: `${id}`,
                    context_pin_ids: [],
                    page_size: 12,
                    search_query: "",
                    source: "deep_linking",
                    top_level_source: "deep_linking",
                    top_level_source_depth: 1,
                    is_pdp: false,
                    bookmarks: [bookmark],
                },
                context: {},
            },
        };
        const URL = `${api_1.Api.baseURL}/resource/RelatedModulesResource/get/?source_url=${encodeURIComponent(params.source_url)}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
        const data = yield request_1.default.get(URL);
        return (0, parser_suggestions_1.default)(data);
    });
}
exports.suggestions = suggestions;
