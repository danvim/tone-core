"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var protobufjs_1 = require("protobufjs");
var AxialMessage_1 = require("./submessages/AxialMessage");
var Game_1 = require("../../Game");
var TryBuildMessage = /** @class */ (function (_super) {
    __extends(TryBuildMessage, _super);
    function TryBuildMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        protobufjs_1.Field.d(1, AxialMessage_1.default, 'repeated')
    ], TryBuildMessage.prototype, "axialCoords", void 0);
    __decorate([
        protobufjs_1.Field.d(2, Game_1.BuildingType)
    ], TryBuildMessage.prototype, "buildingType", void 0);
    TryBuildMessage = __decorate([
        protobufjs_1.Type.d('TryBuildMessage')
    ], TryBuildMessage);
    return TryBuildMessage;
}(protobufjs_1.Message));
exports.default = TryBuildMessage;
