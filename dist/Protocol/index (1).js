"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackageTypes_1 = require("./PackageTypes");
var aconcat = require("arraybuffer-concat");
// import Peer from Peer.
var Protobuf = require("./Protobuf").default;
var Protocol = /** @class */ (function () {
    function Protocol() {
        this.conns = [];
        this.listeners = [];
    }
    Protocol.prototype.add = function (conn) {
        var _this = this;
        conn.on("data", function (data) {
            // console.log("ondata", data);
            var type = new Uint8Array(data.slice(0, 1))[0];
            // console.log("recieved", type, this.listeners[type]);
            if (typeof _this.listeners[type] == typeof (function () { })) {
                var buf = new Uint8Array(data.slice(1));
                // console.log("called", PackageTypes[type], buf);
                var decoded = Protobuf.decoder["decode" + PackageTypes_1.PackageTypes[type]](buf);
                _this.listeners[type](decoded);
            }
        });
        this.conns.push(conn);
    };
    Protocol.prototype.on = function (event, callback) {
        // console.log("on", event);
        this.listeners[event] = callback;
    };
    Protocol.prototype.send = function (buff) {
        // console.log("send", buff);
        this.conns.forEach(function (conn) { return conn.send(buff); });
    };
    Protocol.prototype.AssignId = function (playerId) {
        var buf = Protobuf.encoder.encodeAssignId({ playerId: playerId });
        // console.log(buf);
        this.send(aconcat(new Uint8Array([PackageTypes_1.PackageTypes.AssignId]), buf));
    };
    Protocol.prototype.Build = function (playerId, uid, buildingType, targetX, targetY) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.Build]), Protobuf.encoder.encodeBuild({
            playerId: playerId,
            uid: uid,
            buildingType: buildingType,
            targetX: targetX,
            targetY: targetY
        })));
    };
    Protocol.prototype.Customize = function (Customization) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.Customize]), Protobuf.encoder.encodeCustomize(Customization)));
    };
    Protocol.prototype.EntityMove = function (uid, x, y, z, yaw, pitch, vx, vy, vz) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.EntityMove]), Protobuf.encoder.encodeEntityMove({
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
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.Message]), Protobuf.encoder.encodeMessage({ content: content })));
    };
    Protocol.prototype.MoveUnit = function (uid, targetX, targetY) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.MoveUnit]), Protobuf.encoder.encodeMoveUnit({ uid: uid, targetX: targetX, targetY: targetY })));
    };
    Protocol.prototype.StartGame = function () {
        this.send(PackageTypes_1.PackageTypes.StartGame + Protobuf.encoder.encodeStartGame());
    };
    Protocol.prototype.SetAnimation = function (uid, animType) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.SetAnimation]), Protobuf.encoder.encodeSetAnimation({ uid: uid, animType: animType })));
    };
    Protocol.prototype.TryAttack = function (sourceUid, targetUid) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TryAttack]), Protobuf.encoder.encodeTryAttack({ sourceUid: sourceUid, targetUid: targetUid })));
    };
    Protocol.prototype.TryBuild = function (x, y, buildingType) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TryBuild]), Protobuf.encoder.encodeTryBuild({ x: x, y: y, buildingType: buildingType })));
    };
    Protocol.prototype.TryCustomize = function (Customization) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TryCustomize]), Protobuf.encoder.encodeTryCustomize(Customization)));
    };
    Protocol.prototype.TryDefend = function (sourceUid, targetX, targetY) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TryDefend]), Protobuf.encoder.encodeTryDefend(sourceUid, targetX, targetY)));
    };
    Protocol.prototype.TryJoinLobby = function (username) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TryJoinLobby]), Protobuf.encoder.encodeTryJoinLobby({ username: username })));
    };
    Protocol.prototype.TrySetPolicy = function (policyId) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TrySetPolicy]), Protobuf.encoder.encodeTrySetPolicy({ policyId: policyId })));
    };
    Protocol.prototype.TryStartGame = function () {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.TryStartGame]), Protobuf.encoder.encodeTryStartGame()));
    };
    Protocol.prototype.UpdateHealth = function (uid, hp) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.UpdateHealth]), Protobuf.encoder.encodeUpdateHealth({ uid: uid, hp: hp })));
    };
    Protocol.prototype.UpdateLobby = function (playerId, username) {
        this.send(aconcat(new UInt8Array([PackageTypes_1.PackageTypes.UpdateLobby]), Protobuf.encoder.encodeUpdateLobby({ playerId: playerId, username: username })));
    };
    return Protocol;
}());
exports.Protocol = Protocol;
exports.default = Protocol;
