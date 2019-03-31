"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UPPER_SNAKE2UpperCamel(UPPER_SNAKE) {
    return UPPER_SNAKE.split("_")
        .map(function (w) { return w[0].toUpperCase() + w.substr(1).toLowerCase(); })
        .join("");
}
exports.UPPER_SNAKE2UpperCamel = UPPER_SNAKE2UpperCamel;
