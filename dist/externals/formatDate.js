"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date, format) {
    const pad = (n) => (n < 10 ? "0" + n : n.toString());
    const formattedDate = format
        .replace(/yyyy/g, date.getFullYear().toString())
        .replace(/MM/g, pad(date.getMonth() + 1))
        .replace(/dd/g, pad(date.getDate()))
        .replace(/HH/g, pad(date.getHours()))
        .replace(/mm/g, pad(date.getMinutes()))
        .replace(/ss/g, pad(date.getSeconds()));
    return formattedDate;
}
exports.formatDate = formatDate;
