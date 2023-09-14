"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var calc = new calculator_1.Calculator();
var result_add = calc.add(2, 3);
var result_div = calc.divide(10, 5);
var result_sub = calc.sub(3, 1);
var result_mul = calc.mul(5, 5);
console.log("result_add = ".concat(result_add, "\nresult_sub = ").concat(result_sub, "\nresult_mul = ").concat(result_mul));
