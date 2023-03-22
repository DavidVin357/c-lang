"use strict";
/*
    This file contains definitions of some interfaces and classes that are used in Source (such as
    error-related classes).
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.disallowedTypes = exports.Variant = exports.Chapter = exports.ErrorSeverity = exports.ErrorType = void 0;
var ErrorType;
(function (ErrorType) {
    ErrorType["SYNTAX"] = "Syntax";
    ErrorType["TYPE"] = "Type";
    ErrorType["RUNTIME"] = "Runtime";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
var ErrorSeverity;
(function (ErrorSeverity) {
    ErrorSeverity["WARNING"] = "Warning";
    ErrorSeverity["ERROR"] = "Error";
})(ErrorSeverity = exports.ErrorSeverity || (exports.ErrorSeverity = {}));
var Chapter;
(function (Chapter) {
    Chapter[Chapter["CALC"] = 1] = "CALC";
})(Chapter = exports.Chapter || (exports.Chapter = {}));
var Variant;
(function (Variant) {
    Variant["DEFAULT"] = "calc";
})(Variant = exports.Variant || (exports.Variant = {}));
exports.disallowedTypes = [
    'bigint',
    'never',
    'object',
    'symbol',
    'unknown',
];
//# sourceMappingURL=types.js.map