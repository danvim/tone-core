"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Protocol_1 = require("./Protocol");
exports.Protocol = Protocol_1.default;
var Coordinates_1 = require("./Coordinates");
exports.Coordinates = Coordinates_1.default;
var Game_1 = require("./Game");
exports.Game = Game_1.default;
exports.default = __assign({}, Protocol_1.default, Coordinates_1.default, Game_1.default);
module.exports = __assign({}, Protocol_1.default, Coordinates_1.default, Game_1.default);
exports.ToneCore = {
    Protocol: Protocol_1.default,
    Coordinates: Coordinates_1.default,
    Game: Game_1.default,
};
