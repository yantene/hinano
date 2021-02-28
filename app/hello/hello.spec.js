"use strict";
exports.__esModule = true;
var hello_1 = require("./hello");
describe("hello", function () {
    test("should say hello to yantene.", function () {
        var hello = new hello_1.Hello("yantene");
        expect(hello.greet()).toBe("Hello, yantene!");
    });
});
