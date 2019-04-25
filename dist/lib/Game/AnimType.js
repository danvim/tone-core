"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimType;
(function (AnimType) {
    AnimType[AnimType["DEFAULT"] = 0] = "DEFAULT";
    AnimType[AnimType["ATTACKING"] = 1] = "ATTACKING";
    AnimType[AnimType["DEFENDING"] = 2] = "DEFENDING";
    AnimType[AnimType["TAKING_DAMAGE"] = 3] = "TAKING_DAMAGE";
    AnimType[AnimType["CARRYING"] = 4] = "CARRYING";
    AnimType[AnimType["PLACING"] = 5] = "PLACING";
    AnimType[AnimType["DYING"] = 6] = "DYING";
})(AnimType = exports.AnimType || (exports.AnimType = {}));
