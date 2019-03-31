"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackageType_1 = require("./PackageType");
var aconcat = require("arraybuffer-concat");
// import Peer from Peer.
var Protobuf = require("./Protobuf").default;
var helper_1 = require("../helper");
var Protocol = /** @class */ (function () {
    function Protocol() {
        this.conns = [];
        this.listeners = [];
    }
    Protocol.prototype.add = function (conn) {
        var _this = this;
        conn.on("data", function (data) {
            // console.log("ondata", data);
            var event = new Uint8Array(data.slice(0, 1))[0];
            // console.log("recieved", type, this.listeners[type]);
            if (typeof _this.listeners[event] == typeof (function () { })) {
                var buf = new Uint8Array(data.slice(1));
                // console.log("called", PackageType[type], buf);
                // console.log(
                //   event,
                //   PackageType[event],
                //   "decode" + UPPER_SNAKE2UpperCamel(PackageType[event])
                // );
                var decoded = Protobuf.decoder["decode" + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](buf);
                _this.listeners[event](decoded);
            }
        });
        this.conns.push(conn);
    };
    Protocol.prototype.on = function (event, callback) {
        // console.log("on", event);
        this.listeners[event] = callback;
    };
    Protocol.prototype.emit = function (event, object) {
        // console.log(
        //   event,
        //   PackageType[event],
        //   "encode" + UPPER_SNAKE2UpperCamel(PackageType[event])
        // );
        var buf = Protobuf.encoder["encode" + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](object);
        this.send(aconcat(new Uint8Array([event]), buf));
    };
    Protocol.prototype.send = function (buff) {
        // console.log("send", buff);
        this.conns.forEach(function (conn) { return conn.send(buff); });
    };
    Protocol.prototype.AssignId = function (playerId) {
        var buf = Protobuf.encoder.encodeAssignId({ playerId: playerId });
        // console.log(buf);
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.ASSIGN_ID]), buf));
    };
    Protocol.prototype.Build = function (playerId, uid, buildingType, targetX, targetY) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.BUILD]), Protobuf.encoder.encodeBuild({
            playerId: playerId,
            uid: uid,
            buildingType: buildingType,
            targetX: targetX,
            targetY: targetY
        })));
    };
    Protocol.prototype.Customize = function (Customization) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.CUSTOMIZE]), Protobuf.encoder.encodeCustomize(Customization)));
    };
    Protocol.prototype.EntityMove = function (uid, x, y, z, yaw, pitch, vx, vy, vz) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.ENTITY_MOVE]), Protobuf.encoder.encodeEntityMove({
            uid: uid,
            x: x,
            y: y,
            z: z,
            yaw: yaw,
            pitch: pitch,
            vx: vx,
            vy: vy,
            vz: vz
        })));
    };
    Protocol.prototype.Message = function (content) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.MESSAGE]), Protobuf.encoder.encodeMessage({ content: content })));
    };
    Protocol.prototype.MoveUnit = function (uid, targetX, targetY) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.MOVE_UNIT]), Protobuf.encoder.encodeMoveUnit({ uid: uid, targetX: targetX, targetY: targetY })));
    };
    Protocol.prototype.StartGame = function () {
        this.send(PackageType_1.PackageType.START_GAME + Protobuf.encoder.encodeStartGame());
    };
    Protocol.prototype.SetAnimation = function (uid, animType) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.SET_ANIMATION]), Protobuf.encoder.encodeSetAnimation({ uid: uid, animType: animType })));
    };
    Protocol.prototype.TryAttack = function (sourceUid, targetUid) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_ATTACK]), Protobuf.encoder.encodeTryAttack({ sourceUid: sourceUid, targetUid: targetUid })));
    };
    Protocol.prototype.TryBuild = function (x, y, buildingType) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_BUILD]), Protobuf.encoder.encodeTryBuild({ x: x, y: y, buildingType: buildingType })));
    };
    Protocol.prototype.TryCustomize = function (Customization) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_CUSTOMIZE]), Protobuf.encoder.encodeTryCustomize(Customization)));
    };
    Protocol.prototype.TryDefend = function (sourceUid, targetX, targetY) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_DEFEND]), Protobuf.encoder.encodeTryDefend(sourceUid, targetX, targetY)));
    };
    Protocol.prototype.TryJoinLobby = function (username) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_JOIN_LOBBY]), Protobuf.encoder.encodeTryJoinLobby({ username: username })));
    };
    Protocol.prototype.TrySetPolicy = function (policyId) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_SET_POLICY]), Protobuf.encoder.encodeTrySetPolicy({ policyId: policyId })));
    };
    Protocol.prototype.TryStartGame = function () {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_START_GAME]), Protobuf.encoder.encodeTryStartGame()));
    };
    Protocol.prototype.UpdateHealth = function (uid, hp) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.UPDATE_HEALTH]), Protobuf.encoder.encodeUpdateHealth({ uid: uid, hp: hp })));
    };
    Protocol.prototype.UpdateLobby = function (playerId, username) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.UPDATE_LOBBY]), Protobuf.encoder.encodeUpdateLobby({ playerId: playerId, username: username })));
    };
    return Protocol;
}());
exports.Protocol = Protocol;
exports.default = Protocol;
