"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.divide = function (x, y) {
        return x / y;
    };
    Calculator.prototype.sub = function (x, y) {
        return x - y;
    };
    Calculator.prototype.mul = function (x, y) {
        return x * y;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
;
