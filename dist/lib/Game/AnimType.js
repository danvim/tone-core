"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimType;
(function (AnimType) {
    AnimType[AnimType["STILL"] = 0] = "STILL";
    AnimType[AnimType["MOVING"] = 1] = "MOVING";
    AnimType[AnimType["ATTACKING"] = 2] = "ATTACKING";
    AnimType[AnimType["DEFENDING"] = 3] = "DEFENDING";
    AnimType[AnimType["TAKING_DAMAGE"] = 4] = "TAKING_DAMAGE";
    AnimType[AnimType["CARRYING"] = 5] = "CARRYING";
    AnimType[AnimType["PLACING"] = 6] = "PLACING";
    AnimType[AnimType["DYING"] = 7] = "DYING";
})(AnimType = exports.AnimType || (exports.AnimType = {}));
