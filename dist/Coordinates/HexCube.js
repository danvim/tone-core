"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Axial_1 = require("./Axial");
var HexCube = /** @class */ (function () {
    function HexCube(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(HexCube, "origin", {
        get: function () {
            return new HexCube(0, 0, 0);
        },
        enumerable: true,
        configurable: true
    });
    HexCube.fromArray = function (a) {
        return new (HexCube.bind.apply(HexCube, [void 0].concat(a)))();
    };
    HexCube.fromString = function (s) {
        var a = s.split(",").map(function (i) { return parseInt(i); });
        return HexCube.fromArray([a[0], a[1], a[2]]);
    };
    HexCube.prototype.toAxial = function () {
        return new Axial_1.default(this.x, this.z);
    };
    Object.defineProperty(HexCube.prototype, "asArray", {
        get: function () {
            return [this.x, this.y, this.z];
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HexCube.prototype, "asString", {
        get: function () {
            return this.asArray.join(",");
        },
        enumerable: true,
        configurable: true
    });
    HexCube.prototype.add = function (hexCube) {
        this.x += hexCube.x;
        this.y += hexCube.y;
        this.z += hexCube.z;
        return this;
    };
    HexCube.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    };
    HexCube.prototype.tileDistance = function (t) {
        return (Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)) / 2;
    };
    HexCube.neighbors = [
        new HexCube(+1, -1, 0), new HexCube(+1, 0, -1), new HexCube(0, +1, -1),
        new HexCube(-1, +1, 0), new HexCube(-1, 0, +1), new HexCube(0, -1, +1),
    ];
    return HexCube;
}());
exports.default = HexCube;
