"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protobuf = require("protobufjs");
var fs_1 = require("fs");
var initState = 0;
var initDonePromise;
var decoder = {};
var encoder = {};
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(initState === 1)) return [3 /*break*/, 2];
                    return [4 /*yield*/, awaitInitDone()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    if (initState === 2) {
                        return [2 /*return*/];
                    }
                    initState = 1;
                    items = fs_1.readdirSync(__dirname + '/proto/');
                    initDonePromise = Promise.all(items
                        .map(function (item) {
                        var m = item.match(/(.+).proto$/);
                        if (m && m[1]) {
                            return m[1];
                        }
                        else {
                            return null;
                        }
                    })
                        .filter(function (l) { return l !== null; })
                        // @ts-ignore
                        .map(loadProto));
                    return [4 /*yield*/, initDonePromise];
                case 3:
                    _a.sent();
                    initState = 2;
                    return [2 /*return*/];
            }
        });
    });
}
function loadProto(name) {
    return __awaiter(this, void 0, void 0, function () {
        var root, Message_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, protobuf.load(__dirname + "/proto/" + name + ".proto")];
                case 1:
                    root = _a.sent();
                    Message_1 = root.lookupType(name);
                    encoder['encode' + name] = function (object) {
                        // console.log(buf, Message.decode(buf));
                        return Message_1.encode(Message_1.create(object)).finish();
                    };
                    decoder['decode' + name] = function (buffer) { return Message_1.decode(buffer); };
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    (global || window).console.log(name, e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
init();
var awaitInitDone = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(initState === 0)) return [3 /*break*/, 2];
                return [4 /*yield*/, init()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (!(initState === 1)) return [3 /*break*/, 4];
                return [4 /*yield*/, initDonePromise];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
var getInitState = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, initState];
    });
}); };
exports.default = {
    init: init,
    decoder: decoder,
    encoder: encoder,
    awaitInitDone: awaitInitDone,
    getInitState: getInitState,
    initState: initState,
};
