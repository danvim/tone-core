"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var PackageType_1 = require("./PackageType");
exports.PackageType = PackageType_1.PackageType;
// tslint:disable-next-line:no-var-requires
var aconcat = require('arraybuffer-concat');
var Protocol = /** @class */ (function () {
    function Protocol() {
        this.conns = [];
        this.listeners = [];
    }
    Protocol.encode = function (packageType, object) {
        return aconcat(new Uint8Array([packageType]), PackageType_1.getPackageClass(packageType).encode(object).finish());
    };
    Protocol.decode = function (data) {
        var buf = data.slice(1);
        return PackageType_1.getPackageClass(new DataView(data).getUint8(0)).decode(new Uint8Array(buf));
    };
    Protocol.prototype.add = function (conn) {
        var _this = this;
        conn.on('data', function (data) {
            var packageType = new DataView(data).getUint8(0);
            if (typeof _this.listeners[packageType] === 'function') {
                _this.listeners[packageType](Protocol.decode(data), conn);
            }
        });
        this.conns.push(conn);
    };
    Protocol.prototype.on = function (packageType, callback) {
        this.listeners[packageType] = callback;
    };
    Protocol.prototype.emit = function (packageType, object) {
        this.send(Protocol.encode(packageType, object));
    };
    Protocol.prototype.send = function (buff) {
        this.conns.forEach(function (conn) { return conn.send(buff); });
    };
    Protocol.PackageType = PackageType_1.PackageType;
    return Protocol;
}());
exports.Protocol = Protocol;
__export(require("./messages"));
