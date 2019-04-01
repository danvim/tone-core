"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XyzEuler = /** @class */ (function () {
    function XyzEuler(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(XyzEuler, "origin", {
        get: function () {
            return new XyzEuler(0, 0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XyzEuler.prototype, "asArray", {
        get: function () {
            return [this.x, this.y, this.z];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(XyzEuler.prototype, "asString", {
        get: function () {
            return this.asArray.join(',');
        },
        enumerable: true,
        configurable: true
    });
    XyzEuler.fromArray = function (a) {
        return new (XyzEuler.bind.apply(XyzEuler, [void 0].concat(a)))();
    };
    XyzEuler.fromString = function (s) {
        var a = s.split(',').map(function (i) { return parseInt(i, 10); });
        return XyzEuler.fromArray([a[0], a[1], a[2]]);
    };
    XyzEuler.prototype.add = function (coords) {
        this.x += coords.x;
        this.y += coords.y;
        this.z += coords.z;
        return this;
    };
    XyzEuler.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    };
    return XyzEuler;
}());
exports.default = XyzEuler;
