"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StubDataChannel_1 = require("./StubDataChannel");
var uuid = require("uuid/v4");
var StubConn = /** @class */ (function () {
    function StubConn() {
        this.dataChannel = new StubDataChannel_1.StubDataChannel();
        this.label = uuid();
        this.open = true;
        this.peer = uuid();
        this.reliable = true;
        this.serialization = 'none';
        this.type = 'none';
        this.buffSize = 1000;
        this.onData = [];
    }
    StubConn.prototype.connect = function (p) {
        this.partner = p;
        p.partner = this;
        if (this.onOpen) {
            this.onOpen();
        }
        if (p.onOpen) {
            p.onOpen();
        }
    };
    StubConn.prototype.disconnect = function () {
        if (this.onClose) {
            this.onClose();
        }
        if (this.partner) {
            if (this.partner.onClose) {
                this.partner.onClose();
            }
            this.partner.partner = undefined;
        }
        this.partner = undefined;
    };
    StubConn.prototype.send = function (data) {
        if (this.onSend) {
            this.onSend(data);
        }
        if (this.partner) {
            this.partner.onData.forEach(function (cb) { return cb(data); });
        }
    };
    StubConn.prototype.close = function () {
        if (this.onClose) {
            this.onClose();
        }
    };
    StubConn.prototype.on = function (event, cb) {
        if (event === 'data') {
            this.onData.push(cb);
        }
        else if (event === 'close') {
            this.onClose = cb;
        }
        else if (event === 'open') {
            if (this.partner) {
                cb();
            }
            else {
                this.onOpen = cb;
            }
        }
    };
    StubConn.prototype.off = function (event, fn, once) {
        if (event === 'data') {
            this.onData = this.onData.filter(function (cb) { return cb !== fn; });
        }
        else if (event == 'close') {
            this.onClose = undefined;
        }
    };
    return StubConn;
}());
exports.StubConn = StubConn;
