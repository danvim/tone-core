"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cartesian = /** @class */ (function () {
    function Cartesian(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Cartesian, "origin", {
        get: function () {
            return new Cartesian(0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cartesian.prototype, "asArray", {
        get: function () {
            return [this.x, this.y];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cartesian.prototype, "asString", {
        get: function () {
            return this.asArray.join(',');
        },
        enumerable: true,
        configurable: true
    });
    Cartesian.fromArray = function (a) {
        return new (Cartesian.bind.apply(Cartesian, [void 0].concat(a)))();
    };
    Cartesian.fromString = function (s) {
        var a = s.split(',').map(function (i) { return parseInt(i, 10); });
        return Cartesian.fromArray([a[0], a[1]]);
    };
    Cartesian.prototype.add = function (coords) {
        this.x += coords.x;
        this.y += coords.y;
        return this;
    };
    Cartesian.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
        return this;
    };
    Cartesian.prototype.euclideanDistance = function (t) {
        return Math.sqrt(Math.pow((this.x - t.x), 2) + Math.pow((this.y - t.y), 2));
    };
    Cartesian.prototype.tileDistance = function (t) {
        return this.x - t.x + (this.y - t.y);
    };
    Cartesian.prototype.added = function (coord) {
        var ret = new Cartesian(this.x, this.y);
        return ret.add(coord);
    };
    Cartesian.prototype.scaled = function (n) {
        var ret = new Cartesian(this.x, this.y);
        return ret.scale(n);
    };
    Cartesian.prototype.norm = function () {
        return this.euclideanDistance(Cartesian.origin);
    };
    Cartesian.prototype.normalize = function () {
        return this.scale(1 / this.norm());
    };
    Cartesian.prototype.normalized = function () {
        var ret = new Cartesian(this.x, this.y);
        return ret.normalize();
    };
    Cartesian.prototype.clone = function () {
        return new Cartesian(this.x, this.y);
    };
    Cartesian.neighbors = [
        new Cartesian(-1, -1),
        new Cartesian(0, -1),
        new Cartesian(1, -1),
        new Cartesian(-1, 0),
        new Cartesian(1, 0),
        new Cartesian(-1, 1),
        new Cartesian(0, 1),
        new Cartesian(1, 1),
    ];
    return Cartesian;
}());
exports.default = Cartesian;
