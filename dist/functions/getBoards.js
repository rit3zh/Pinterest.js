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
exports.getBoard = void 0;
const parser_getBoard_1 = __importDefault(require("../parser/parser.getBoard"));
const request_1 = __importDefault(require("../fetch/request"));
const api_1 = require("../api/api");
function getBoard(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, slashurl, bookmark } = options;
        if (!id)
            throw Error("No id specified.");
        if (!slashurl)
            throw Error("No slash url specified.");
        const params = {
            source_url: `${slashurl}`,
            data: {
                options: {
                    board_id: id,
                    board_url: slashurl,
                    currentFilter: -1,
                    field_set_key: "react_grid_pin",
                    filter_section_pins: true,
                    sort: "default",
                    layout: "default",
                    page_size: 25,
                    redux_normalize_feed: true,
                    bookmarks: [bookmark],
                },
                context: {},
            },
        };
        const URL = `${api_1.Api.baseURL}/resource/BoardFeedResource/get/?source_url=${encodeURIComponent(params.source_url)}&data=${encodeURIComponent(JSON.stringify(params.data))}`;
        const data = yield request_1.default.get(URL);
        return (0, parser_getBoard_1.default)(data);
    });
}
exports.getBoard = getBoard;
