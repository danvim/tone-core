"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HexCube_1 = require("./HexCube");
var Cartesian_1 = require("./Cartesian");
var Axial = /** @class */ (function () {
    function Axial(q, r) {
        this.q = q;
        this.r = r;
    }
    Object.defineProperty(Axial, "origin", {
        get: function () {
            return new Axial(0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axial.prototype, "asArray", {
        get: function () {
            return [this.q, this.r];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Axial.prototype, "asString", {
        get: function () {
            return this.asArray.join(',');
        },
        enumerable: true,
        configurable: true
    });
    Axial.fromArray = function (a) {
        return new (Axial.bind.apply(Axial, [void 0].concat(a)))();
    };
    Axial.fromString = function (s) {
        var a = s.split(',').map(function (i) { return parseInt(i, 10); });
        return Axial.fromArray([a[0], a[1]]);
    };
    Axial.prototype.toHexCube = function () {
        return new HexCube_1.default(this.q, -this.q - this.r, this.r);
    };
    Axial.prototype.toCartesian = function (size) {
        var x = size * (Math.sqrt(3) * this.q + Math.sqrt(3) / 2 * this.r);
        var y = size * (3 / 2 * this.r);
        return new Cartesian_1.default(x, y);
    };
    Axial.prototype.add = function (axial) {
        this.q += axial.q;
        this.r += axial.r;
        return this;
    };
    Axial.prototype.scale = function (n) {
        this.q *= n;
        this.r *= n;
        return this;
    };
    Axial.prototype.tileDistance = function (t) {
        return (Math.abs(this.q - t.q) + Math.abs(this.q + this.r - t.q - t.r) + Math.abs(this.r - t.r)) / 2;
    };
    Axial.neighbors = [
        new Axial(+1, 0), new Axial(+1, -1), new Axial(0, -1),
        new Axial(-1, 0), new Axial(-1, +1), new Axial(0, +1),
    ];
    return Axial;
}());
exports.default = Axial;
