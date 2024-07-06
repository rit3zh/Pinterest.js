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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pinterest = void 0;
const functions_1 = require("../functions");
class Pinterest {
    static pins(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!query)
                throw Error("No query specified");
            const data = yield (0, functions_1.searchPins)(query, options);
            return data;
        });
    }
    static board(query, bookmark) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!query)
                throw Error("No query specified");
            const data = yield (0, functions_1.searchBoards)(query, bookmark);
            return data;
        });
    }
    static suggestions(id, bookmark) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw Error("No id specified");
            const data = yield (0, functions_1.suggestions)(id, bookmark);
            return data;
        });
    }
    suggestions(id, bookmark) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw Error("No id specified");
            const data = yield (0, functions_1.suggestions)(id, bookmark);
            return data;
        });
    }
    pins(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!query)
                throw Error("No query specified");
            const data = yield (0, functions_1.searchPins)(query, options);
            return data;
        });
    }
    board(query, bookmark) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!query)
                throw Error("No query specified");
            const data = yield (0, functions_1.searchBoards)(query, bookmark);
            return data;
        });
    }
}
exports.Pinterest = Pinterest;
