"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messages = require("./messages");
var helper_1 = require("../helper");
var PackageType;
(function (PackageType) {
    PackageType[PackageType["ATTACK"] = 0] = "ATTACK";
    PackageType[PackageType["BUILD"] = 1] = "BUILD";
    PackageType[PackageType["CUSTOMIZE"] = 2] = "CUSTOMIZE";
    PackageType[PackageType["CHAT"] = 3] = "CHAT";
    PackageType[PackageType["MOVE_ENTITY"] = 4] = "MOVE_ENTITY";
    PackageType[PackageType["SET_ANIMATION"] = 5] = "SET_ANIMATION";
    PackageType[PackageType["SPAWN_ENTITY"] = 6] = "SPAWN_ENTITY";
    PackageType[PackageType["START_GAME"] = 7] = "START_GAME";
    PackageType[PackageType["TRY_ATTACK"] = 8] = "TRY_ATTACK";
    PackageType[PackageType["TRY_BUILD"] = 9] = "TRY_BUILD";
    PackageType[PackageType["TRY_CUSTOMIZE"] = 10] = "TRY_CUSTOMIZE";
    PackageType[PackageType["TRY_DEFEND"] = 11] = "TRY_DEFEND";
    PackageType[PackageType["TRY_JOIN_LOBBY"] = 12] = "TRY_JOIN_LOBBY";
    PackageType[PackageType["TRY_SET_JOB"] = 13] = "TRY_SET_JOB";
    PackageType[PackageType["TRY_SET_POLICY"] = 14] = "TRY_SET_POLICY";
    PackageType[PackageType["TRY_START_GAME"] = 15] = "TRY_START_GAME";
    PackageType[PackageType["UPDATE_HEALTH"] = 16] = "UPDATE_HEALTH";
    PackageType[PackageType["UPDATE_JOB"] = 17] = "UPDATE_JOB";
    PackageType[PackageType["UPDATE_LOBBY"] = 18] = "UPDATE_LOBBY";
    PackageType[PackageType["UPDATE_TILES"] = 19] = "UPDATE_TILES";
})(PackageType = exports.PackageType || (exports.PackageType = {}));
function getPackageClass(packageType) {
    var className = helper_1.UPPER_SNAKE2UpperCamel(PackageType[packageType]) + 'Message';
    return messages[className];
}
exports.getPackageClass = getPackageClass;
