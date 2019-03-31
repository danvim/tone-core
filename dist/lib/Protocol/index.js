"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackageType_1 = require("./PackageType");
exports.PackageType = PackageType_1.PackageType;
// tslint:disable-next-line:no-var-requires
var aconcat = require('arraybuffer-concat');
// import Peer from Peer.
// tslint:disable-next-line:no-var-requires
var Protobuf = require('./Protobuf').default;
var helper_1 = require("../helper");
var Protocol = /** @class */ (function () {
    function Protocol() {
        this.conns = [];
        this.listeners = [];
    }
    Protocol.encode = function (event, object) {
        var buf = Protobuf.encoder['encode' + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](object);
        return aconcat(new Uint8Array([event]), buf);
    };
    Protocol.prototype.add = function (conn) {
        var _this = this;
        conn.on('data', function (data) {
            var event = new Uint8Array(data.slice(0, 1))[0];
            if (typeof _this.listeners[event] === 'function') {
                var buf = new Uint8Array(data.slice(1));
                var decoded = Protobuf.decoder['decode' + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](buf);
                _this.listeners[event](decoded, conn);
            }
        });
        this.conns.push(conn);
    };
    Protocol.prototype.on = function (event, callback) {
        this.listeners[event] = callback;
    };
    Protocol.prototype.emit = function (event, object) {
        this.send(Protocol.encode(event, object));
    };
    Protocol.prototype.send = function (buff) {
        this.conns.forEach(function (conn) { return conn.send(buff); });
    };
    Protocol.prototype.decode = function (data) {
        var event = new Uint8Array(data.slice(0, 1))[0];
        var buf = new Uint8Array(data.slice(1));
        var decoded = Protobuf.decoder['decode' + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](buf);
        return decoded;
    };
    Protocol.prototype.Build = function (playerId, uid, buildingType, axialCoords) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.BUILD]), Protobuf.encoder.encodeBuild({
            playerId: playerId,
            uid: uid,
            buildingType: buildingType,
            axialCoords: axialCoords,
        })));
    };
    Protocol.prototype.Customize = function (Customization) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.CUSTOMIZE]), Protobuf.encoder.encodeCustomize(Customization)));
    };
    Protocol.prototype.MoveEntity = function (uid, x, y, z, yaw, pitch, vx, vy, vz) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.MOVE_ENTITY]), Protobuf.encoder.encodeMoveEntity({
            uid: uid,
            x: x,
            y: y,
            z: z,
            yaw: yaw,
            pitch: pitch,
            vx: vx,
            vy: vy,
            vz: vz,
        })));
    };
    Protocol.prototype.Message = function (content) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.MESSAGE]), Protobuf.encoder.encodeMessage({ content: content })));
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
    Protocol.prototype.TryBuild = function (axialCoords, buildingType) {
        this.send(aconcat(new Uint8Array([PackageType_1.PackageType.TRY_BUILD]), Protobuf.encoder.encodeTryBuild({ axialCoords: axialCoords, buildingType: buildingType })));
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
    Protocol.PackageType = PackageType_1.PackageType;
    return Protocol;
}());
exports.Protocol = Protocol;
