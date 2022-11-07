"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc = exports.regExpDeDuplicate = exports.format = exports.regExpSplit = exports.regExpStr = void 0;
exports.regExpStr = /[\w$_]/g;
exports.regExpSplit = /[(\s\.,;]+/g;
const format = (str, formatter) => str.replaceAll(/\$\{(\w+)\}/g, (...args) => formatter[args[1] || ""]);
exports.format = format;
exports.regExpDeDuplicate = /([\s\S]{1,3}?)\1+/g;
const calc = (str) => {
    const regExpMath = /[\d(]+[ \d\-+()*\/]+[\d)]+/g;
    return str.replace(regExpMath, s => eval(s));
};
exports.calc = calc;
