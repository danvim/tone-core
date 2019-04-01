"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../lib/helper");
describe('UPPER_SNAKE2UpperCamel', function () {
    it('with _', function () {
        expect(helper_1.UPPER_SNAKE2UpperCamel('HELLO_WORLD')).toBe('HelloWorld');
    });
    it('no _', function () {
        expect(helper_1.UPPER_SNAKE2UpperCamel('HELLO')).toBe('Hello');
    });
});
