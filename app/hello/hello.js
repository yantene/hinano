"use strict";
exports.__esModule = true;
exports.Hello = void 0;
var Hello = /** @class */ (function () {
    function Hello(name) {
        this.name = name;
    }
    Hello.prototype.greet = function () {
        return "Hello, " + this.name + "!";
    };
    return Hello;
}());
exports.Hello = Hello;
