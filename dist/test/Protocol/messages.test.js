"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protobuf = require("protobufjs");
var AttackMessage_1 = require("../../lib/Protocol/messages/AttackMessage");
var Game_1 = require("../../lib/Game");
var Coordinates_1 = require("../../lib/Coordinates");
var messages_1 = require("../../lib/Protocol/messages");
var AxialMessage_1 = require("../../lib/Protocol/messages/submessages/AxialMessage");
describe('typescript decorators', function () {
    it('AttackMessage', function () {
        // language=PROTO
        var proto = "\n    syntax = \"proto3\";\n    message AttackMessage {\n      string sourceUid = 1;\n      string targetUid = 2;\n    }\n    ";
        var root = protobuf.parse(proto).root;
        var protoType = root.lookupType('AttackMessage');
        var content = {
            sourceUid: 'k',
            targetUid: 'm',
        };
        var protoTypeMessage = protoType.create(content);
        var decoratorTypeMessage = AttackMessage_1.default.create(content);
        global.console.log(protoTypeMessage);
        expect(protoTypeMessage).toEqual(decoratorTypeMessage);
    });
    it('BuildMessage', function () {
        // language=PROTO
        var proto = "\n    syntax = \"proto3\";\n    message AxialMessage {\n      int32 q = 1;\n      int32 r = 2;\n    }\n    message BuildMessage {\n      int32 playerId = 1;\n      string uid = 2;\n      int32 buildingType = 3;\n      repeated AxialMessage axialCoords = 4;\n      uint32 progress = 5;\n    }\n    ";
        var root = protobuf.parse(proto).root;
        var protoType = root.lookupType('BuildMessage');
        var content = {
            playerId: 0,
            uid: 'k',
            buildingType: Game_1.BuildingType.RECLAIMATOR,
            axialCoords: [{ q: 1, r: 2 }],
            progress: 6,
        };
        var protoTypeMessage = protoType.create(content);
        var decoratorTypeMessage = messages_1.BuildMessage.create(content);
        global.console.log(protoTypeMessage);
        expect(protoTypeMessage).toEqual(decoratorTypeMessage);
    });
    it('Reconstruct Axial from AxialMessage', function () {
        var q = 1;
        var r = 2;
        var axialMessage = AxialMessage_1.default.create({ q: q, r: r });
        var axial = new Coordinates_1.Axial(q, r);
        expect(AxialMessage_1.default.fromObject(axialMessage.toJSON()).toAxial()).toEqual(axial);
    });
});
