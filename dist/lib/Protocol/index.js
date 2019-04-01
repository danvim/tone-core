"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var PackageType_1 = require("./PackageType");
exports.PackageType = PackageType_1.PackageType;
var helper_1 = require("../helper");
// tslint:disable-next-line:no-var-requires
var aconcat = require('arraybuffer-concat');
// import Peer from Peer.
// tslint:disable-next-line:no-var-requires
var Protobuf = require('./Protobuf').default;
var Protocol = /** @class */ (function () {
    function Protocol() {
        this.conns = [];
        this.listeners = [];
    }
    Protocol.encode = function (event, object) {
        var buf = Protobuf.encoder['encode' + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](object);
        return aconcat(new Uint8Array([event]), buf);
    };
    Protocol.decode = function (data) {
        var event = new Uint8Array(data.slice(0, 1))[0];
        var buf = new Uint8Array(data.slice(1));
        return Protobuf.decoder['decode' + helper_1.UPPER_SNAKE2UpperCamel(PackageType_1.PackageType[event])](buf);
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
    Protocol.PackageType = PackageType_1.PackageType;
    return Protocol;
}());
exports.Protocol = Protocol;
__export(require("./messages"));
