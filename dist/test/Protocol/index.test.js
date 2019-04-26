"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const peerjs = require("peerjs-nodejs");
var Protocol_1 = require("../../lib/Protocol");
describe('Protocol', function () {
    it('Protocol', function () {
        var protocol = new Protocol_1.Protocol();
        expect(1).toBe(1);
    });
    it('Protocl.encode', function () {
        var buf = Protocol_1.Protocol.encode(Protocol_1.PackageType.TRY_JOIN_LOBBY, { username: 'hi' });
        global.console.log(buf);
        expect(buf).toBeTruthy();
    });
    it('Protocol.encode', function () {
        var buf = Protocol_1.Protocol.encode(Protocol_1.PackageType.START_GAME, {});
        global.console.log(buf);
        expect(buf).toBeTruthy();
    });
});
