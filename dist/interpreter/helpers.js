"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchPrint = exports.dispathchTable = exports.dispatchWarning = exports.isArrayType = exports.isPointerType = exports.getArrayValueType = exports.getPointerValueType = exports.getLiteralSize = exports.getTypeSize = exports.getRandom = void 0;
const logger_1 = require("../logger");
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};
exports.getRandom = getRandom;
// Types
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
const LONG_MAX = BigInt(9223372036854775807);
const LONG_MIN = BigInt(-9223372036854775808);
const ULONG_MAX = BigInt(18446744073709551615);
function isInt(val) {
    return (Number(val) === val && val % 1 === 0 && val <= INT_MAX && val >= INT_MIN);
}
function isLong(val) {
    return val <= LONG_MAX && val >= LONG_MIN;
}
function isULong(val) {
    return val <= ULONG_MAX && (val > LONG_MAX || val < LONG_MIN);
}
function isFractional(n) {
    return Number(n) === n && n % 1 !== 0;
}
const getLiteralSize = (val) => {
    let value = val;
    if (val < Number.MAX_SAFE_INTEGER || val > Number.MAX_SAFE_INTEGER) {
        value = BigInt(val);
    }
    if (isInt(value))
        return 4;
    if (isFractional(value))
        return 8;
    if (isLong(value))
        return 8;
    if (isULong(value))
        return 16;
    throw Error('Not a primitive type');
};
exports.getLiteralSize = getLiteralSize;
const getTypeSize = (type) => {
    if (!type) {
        return 0;
    }
    if (type.includes('*')) {
        return 8;
    }
    switch (type) {
        case 'char' || 'signed char':
            return 1;
        case 'unsigned char':
            return 1;
        case 'int':
            return 4;
        case 'unsigned int':
            return 4;
        case 'short':
            return 2;
        case 'unsigned short':
            return 2;
        case 'long':
            return 8;
        case 'unsigned long':
            return 8;
        // Floating Point types
        case 'float':
        case 'double':
            return 8;
        default:
            return 0;
    }
};
exports.getTypeSize = getTypeSize;
const isPointerType = (typeSpecifier) => {
    if (typeof typeSpecifier === 'string' && typeSpecifier.includes('*')) {
        return true;
    }
    return false;
};
exports.isPointerType = isPointerType;
const isArrayType = (typeSpecifier) => {
    if (typeof typeSpecifier === 'string' && typeSpecifier.includes('[]')) {
        return true;
    }
    return false;
};
exports.isArrayType = isArrayType;
const getPointerValueType = (type) => type.slice(0, type.length - 1);
exports.getPointerValueType = getPointerValueType;
const getArrayValueType = (type) => type.replace('[]', '');
exports.getArrayValueType = getArrayValueType;
// I/O
const dispatchWarning = (message) => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('warning', {
            detail: {
                message,
            },
        }));
    }
    else {
        console.log('Warning:');
        console.warn(message);
    }
};
exports.dispatchWarning = dispatchWarning;
const dispathchTable = (table) => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('table', {
            detail: {
                message: table,
            },
        }));
    }
    else {
        console.log(table);
    }
};
exports.dispathchTable = dispathchTable;
const dispatchPrint = (output) => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('printf', {
            detail: {
                message: output,
            },
        }));
    }
    else {
        process.stdout.write(output);
    }
    (0, logger_1.logPrintf)(output);
};
exports.dispatchPrint = dispatchPrint;
//# sourceMappingURL=helpers.js.map