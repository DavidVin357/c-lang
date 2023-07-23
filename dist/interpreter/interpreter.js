"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualValue = exports.evaluate = exports.evaluateArray = exports.printStack = void 0;
const helpers_1 = require("./helpers");
const operators_1 = require("../utils/operators");
const table_1 = require("table");
const helpers_2 = require("./helpers");
const printf = require('printf');
// Code segment (stores function instructions)
const CODE = {};
// Environment segment
const ENVIRONMENT = [{}];
const extendEnvironment = (name, address, typeSpecifier, typeQualifiers, size) => {
    const lastIndex = ENVIRONMENT.length - 1;
    ENVIRONMENT[lastIndex][name] = Object.assign({ address,
        typeSpecifier,
        typeQualifiers }, (size && { size }));
};
const getEnvironmentValue = (name) => {
    for (let i = ENVIRONMENT.length - 1; i >= 0; i--) {
        const currentFrame = ENVIRONMENT[i];
        if (currentFrame[name])
            return currentFrame[name];
    }
    return {
        address: getRandomStackAddress(),
        typeSpecifier: 'int',
        typeQualifiers: null,
        size: 4,
    };
};
// C program memory
const megabyte = Math.pow(2, 20);
const buffer = new ArrayBuffer(20 * megabyte);
const MEMORY = new DataView(buffer);
const memoryAllocateBasic = (value, type, freeIndex) => {
    if ((0, helpers_2.isPointerType)(type)) {
        MEMORY.setFloat64(freeIndex, value);
        return 8;
    }
    if ((0, helpers_1.isArrayType)(type)) {
        let size = 0;
        let index = freeIndex;
        const valueType = type.replace('[]', '');
        value.forEach((v) => {
            size += memoryAllocateBasic(v.value, valueType, index);
            index += (0, helpers_2.getTypeSize)(valueType);
        });
        return size;
    }
    switch (type) {
        case 'char' || 'signed char':
            MEMORY.setInt8(freeIndex, value);
            return 1;
        case 'unsigned char':
            MEMORY.setUint8(freeIndex, value);
            return 1;
        case 'int':
            MEMORY.setInt32(freeIndex, value);
            return 4;
        case 'unsigned int':
            MEMORY.setUint32(freeIndex, value);
            return 4;
        case 'short':
            MEMORY.setInt16(freeIndex, value);
            return 2;
        case 'unsigned short':
            MEMORY.setUint16(freeIndex, value);
            return 2;
        case 'long':
            MEMORY.setBigInt64(freeIndex, BigInt(value));
            return 8;
        case 'unsigned long':
            MEMORY.setBigUint64(freeIndex, BigInt(value));
            return 8;
        // Floating Point types
        case 'float':
        case 'double':
            MEMORY.setFloat64(freeIndex, value);
            return 8;
        default:
            throw Error('not a primitive type (allocation)');
    }
};
const memoryRetrieveBasic = (index, type) => {
    if ((0, helpers_2.isPointerType)(type)) {
        return MEMORY.getFloat64(index);
    }
    switch (type) {
        case 'char':
        case 'signed char':
            return MEMORY.getInt8(index);
        case 'unsigned char':
            return MEMORY.getInt8(index);
        case 'int':
            return MEMORY.getInt32(index);
        case 'unsigned int':
            return MEMORY.getUint32(index);
        case 'short':
            return MEMORY.getInt16(index);
        case 'unsigned short':
            return MEMORY.getUint16(index);
        case 'long':
            return Number(MEMORY.getBigInt64(index));
        case 'unsigned long':
            return Number(MEMORY.getBigUint64(index));
        // Floating Point types
        case 'float':
        case 'double':
            return MEMORY.getFloat64(index);
        default:
            throw Error('not a primitive type (retrieve)');
    }
};
// STACK Operations
const STACK_TOP = buffer.byteLength;
const STACK_BOTTOM = buffer.byteLength / 2;
let stackFree = STACK_BOTTOM;
const pushOnStack = (value, type) => {
    const address = stackFree;
    const size = memoryAllocateBasic(value, type, stackFree);
    stackFree += size;
    return address;
};
const getRandomStackAddress = () => (0, helpers_1.getRandom)(STACK_BOTTOM, STACK_TOP);
const isInStack = (address) => {
    return STACK_BOTTOM <= address && address < STACK_TOP;
};
// HEAP Operations
class HeapMemoryNode {
    constructor(start, end, next) {
        this.start = HEAP_BOTTOM;
        this.end = HEAP_TOP;
        this.next = null;
        this.start = start;
        this.end = end;
        this.next = next;
    }
}
const HEAP_TOP = buffer.byteLength / 2;
const HEAP_BOTTOM = 0;
let heapFreeNode = new HeapMemoryNode(HEAP_BOTTOM, HEAP_TOP, null);
const isInHeap = (address) => {
    return HEAP_BOTTOM <= address && address < HEAP_TOP;
};
const allocateHeapMemory = (size, node) => {
    if (node == null) {
        throw Error('No heap memory available');
    }
    if (node.end - node.start < size) {
        return allocateHeapMemory(size, node.next);
    }
    else if (node.end - node.start === size) {
        heapFreeNode = node.next;
        return node.start;
    }
    else {
        const address = node.start;
        node.start += size;
        return address;
    }
};
const freeMemory = (address, size) => {
    if (!isInHeap(address)) {
        throw Error('provided pointer is not in the heap!');
    }
    let memoryNode;
    if (heapFreeNode.start === address + size) {
        memoryNode = new HeapMemoryNode(address, heapFreeNode.end, heapFreeNode.next);
        heapFreeNode = memoryNode;
    }
    if (heapFreeNode.end === address) {
        memoryNode = new HeapMemoryNode(heapFreeNode.start, address + size, heapFreeNode.next);
        heapFreeNode = memoryNode;
        return;
    }
    memoryNode = new HeapMemoryNode(address, address + size, heapFreeNode);
    heapFreeNode = memoryNode;
};
const evaluators = {
    Literal: function (node) {
        return {
            value: node.value,
            typeSpecifier: null,
        };
    },
    BinaryExpression: function (node) {
        const { typeSpecifier: leftType, value: leftValue } = evaluate(node.left);
        const { typeSpecifier: rightType, value: rightValue } = evaluate(node.right);
        // Pointer Arithmetics: replace with (type * value) if one of the elements is pointer
        if ((0, helpers_2.isPointerType)(leftType) && !(0, helpers_2.isPointerType)(rightType)) {
            const typeSize = (0, helpers_2.getTypeSize)((0, helpers_2.getPointerValueType)(leftType));
            return {
                value: (0, operators_1.evaluateBinaryExpression)(leftValue, rightValue * typeSize, node.operator),
                typeSpecifier: leftType,
            };
        }
        if ((0, helpers_2.isPointerType)(rightType) && !(0, helpers_2.isPointerType)(leftType)) {
            const typeSize = (0, helpers_2.getTypeSize)((0, helpers_2.getPointerValueType)(rightType));
            return {
                value: (0, operators_1.evaluateBinaryExpression)(leftValue * typeSize, rightValue, node.operator),
                typeSpecifier: rightType,
            };
        }
        return {
            value: (0, operators_1.evaluateBinaryExpression)(leftValue, rightValue, node.operator),
            typeSpecifier: (0, helpers_2.isPointerType)(leftType) ? leftType : rightType,
        };
    },
    UnaryExpression: function (node) {
        const right = actualValue(node.right);
        return {
            value: (0, operators_1.evaluateUnaryExpression)(right, node.operator),
            typeSpecifier: null,
        };
    },
    Array: function (node) {
        const value = node.value.map((e) => evaluate(e));
        return {
            typeSpecifier: node.typeSpecifier,
            value,
            length: node.value.length,
        };
    },
    ParenthesesExpression: function (node) {
        return {
            value: actualValue(node.value),
            typeSpecifier: null,
        };
    },
    Identifier: function (node) {
        const name = node.name;
        const address = getEnvironmentValue(name).address;
        const typeSpecifier = getEnvironmentValue(name).typeSpecifier;
        const size = getEnvironmentValue(name).size;
        return {
            value: (0, helpers_1.isArrayType)(typeSpecifier)
                ? address
                : memoryRetrieveBasic(address, typeSpecifier),
            typeSpecifier,
            size,
        };
    },
    // int v = 12;
    VariableInitialization: function (node) {
        const name = node.identifier;
        const leftType = node.typeSpecifier.value;
        let { typeSpecifier: rightType, size, value, length: arrLength, } = node.value
            ? evaluate(node.value)
            : {
                typeSpecifier: leftType,
                size: (0, helpers_2.getTypeSize)(leftType),
                value: 0,
                length: 0,
            };
        if (arrLength) {
            size = arrLength * (0, helpers_2.getTypeSize)(leftType.replace('[]', ''));
        }
        // Casting of types
        if (node.castingType) {
            rightType = node.castingType.value;
        }
        if (((0, helpers_2.isPointerType)(rightType) || (0, helpers_2.isPointerType)(leftType)) &&
            !(rightType === null || rightType === void 0 ? void 0 : rightType.includes('void')) &&
            rightType !== leftType) {
            // dispatchWarning(
            //   `initialization of ${leftType} from incompatible pointer type ${rightType}`
            // )
        }
        const typeQualifiers = node.typeQualifiers.value.map((t) => t.value);
        const address = pushOnStack(value, leftType);
        extendEnvironment(name, address, leftType, typeQualifiers, size);
    },
    VariableInitializationList: function (node) {
        node.initializations.map((i) => evaluate(i));
    },
    // v = 45;
    BinaryAssignment: function (node) {
        const name = node.identifier;
        const { address: leftAddress, typeSpecifier: leftType } = getEnvironmentValue(name);
        let { typeSpecifier: rightType, value: rightValue, size, } = evaluate(node.value);
        // Casting of types
        if (node.castingType) {
            rightType = node.castingType.value;
        }
        const leftValue = memoryRetrieveBasic(leftAddress, leftType);
        if (((0, helpers_2.isPointerType)(rightType) || (0, helpers_2.isPointerType)(leftType)) &&
            !(rightType === null || rightType === void 0 ? void 0 : rightType.includes('void')) &&
            !(0, helpers_1.isArrayType)(rightType) &&
            rightType !== leftType) {
            (0, helpers_2.dispatchWarning)(`assignment to ${leftType} from incompatible pointer type ${rightType}`);
        }
        const value = (0, operators_1.evaluateAssignmentExpression)(node.operator, leftValue, rightValue);
        const lastIndex = ENVIRONMENT.length - 1;
        if (size) {
            ENVIRONMENT[lastIndex][name].size = size;
        }
        memoryAllocateBasic(value, leftType, leftAddress);
    },
    // v++ or v--
    PostfixAssignment: function (node) {
        const name = node.identifier;
        const { address: leftAddress, typeSpecifier: leftType } = getEnvironmentValue(name);
        const isPointer = (0, helpers_2.isPointerType)(leftType);
        const typeSize = isPointer ? (0, helpers_2.getTypeSize)((0, helpers_2.getPointerValueType)(leftType)) : 1;
        const leftValue = memoryRetrieveBasic(leftAddress, leftType);
        let newValue;
        newValue = (0, operators_1.evaluateUnaryExpression)(leftValue, node.operator, isPointer, typeSize);
        memoryAllocateBasic(newValue, leftType, leftAddress);
        return {
            value: leftValue,
            typeSpecifier: leftType,
        };
    },
    AssignmentList: function (node) {
        const assignments = node.assignments.map((i) => evaluate(i));
        return assignments[assignments.length - 1];
    },
    // ++v or --v
    PrefixAssignment: function (node) {
        const name = node.identifier;
        const { address: rightAddress, typeSpecifier: rightType } = getEnvironmentValue(name);
        const isPointer = (0, helpers_2.isPointerType)(rightType);
        const typeSize = isPointer ? (0, helpers_2.getTypeSize)((0, helpers_2.getPointerValueType)(rightType)) : 1;
        const rightValue = memoryRetrieveBasic(rightAddress, rightType);
        const newValue = (0, operators_1.evaluateUnaryExpression)(rightValue, node.operator, isPointer, typeSize);
        memoryAllocateBasic(newValue, rightType, rightAddress);
        return {
            value: memoryRetrieveBasic(rightAddress, rightType),
            typeSpecifier: rightType,
        };
    },
    // *p = 34;
    PointerValueAssignment: function (node) {
        const { value: leftValue, address: leftAddress, typeSpecifier: leftType, } = evaluate(node.pointer);
        const { value: rightValue, typeSpecifier: rightType } = evaluate(node.value);
        if (((0, helpers_2.isPointerType)(leftType) || (0, helpers_2.isPointerType)(rightType)) &&
            !(rightType === null || rightType === void 0 ? void 0 : rightType.includes('void')) &&
            !(0, helpers_1.isArrayType)(rightType) &&
            leftType !== rightType) {
            (0, helpers_2.dispatchWarning)(`assignment to ${leftType} from incompatible pointer type ${rightType}`);
        }
        const value = (0, operators_1.evaluateAssignmentExpression)(node.operator, leftValue, rightValue);
        memoryAllocateBasic(value, leftType, leftAddress);
    },
    // arr[i] = x
    ArrayValueAssignment: function (node) {
        const name = node.identifier;
        const { address, typeSpecifier } = getEnvironmentValue(name);
        // Get arrStart from pointer or local variable
        const arrStart = (0, helpers_2.isPointerType)(typeSpecifier)
            ? memoryRetrieveBasic(address, typeSpecifier)
            : address;
        const { typeSpecifier: leftType, value: leftValue } = evaluate(node.left);
        const accessIndex = actualValue(node.index);
        const addr = arrStart + accessIndex * (0, helpers_2.getTypeSize)(leftType);
        let { typeSpecifier: rightType, value: rightValue } = evaluate(node.value);
        // Casting of types
        if (node.castingType) {
            rightType = node.castingType.value;
        }
        if (((0, helpers_2.isPointerType)(rightType) || (0, helpers_2.isPointerType)(leftType)) &&
            rightType !== leftType) {
            (0, helpers_2.dispatchWarning)(`assignment to ${leftType} from incompatible pointer type ${rightType}`);
        }
        const value = (0, operators_1.evaluateAssignmentExpression)(node.operator, leftValue, rightValue);
        memoryAllocateBasic(value, leftType, addr);
    },
    ReturnStatement(node) {
        const result = evaluate(node.value);
        return {
            value: result,
            type: 'return',
        };
    },
    BreakStatement(node) {
        return {
            type: 'break',
        };
    },
    FunctionApplication(node) {
        const frameStart = stackFree;
        // Get name, function type, formals and arguments
        const name = node.name;
        const functionType = CODE[name].typeSpecifier;
        const formals = CODE[name].formals;
        const args = node.args;
        // Set new environment frame
        ENVIRONMENT.push({});
        // Allocate arguments on the stack
        formals.forEach((formal, index) => {
            const name = formal.name;
            const typeSpecifier = formal.typeSpecifier;
            let { value, size } = evaluate(args[index]);
            if ((0, helpers_1.isArrayType)(typeSpecifier)) {
                let array = [];
                const type = typeSpecifier.replace('[]', '');
                for (let i = value; i < value + size; i += (0, helpers_2.getTypeSize)(type)) {
                    array.push({ value: memoryRetrieveBasic(i, type) });
                }
                value = array;
            }
            const address = pushOnStack(value, typeSpecifier);
            extendEnvironment(name, address, typeSpecifier, [], size);
        });
        // Execute body
        const statements = CODE[name].body.statements;
        let result = undefined;
        for (const s of statements) {
            result = evaluate(s);
            if ((result === null || result === void 0 ? void 0 : result.type) === 'return') {
                result = result.value;
                if ((0, helpers_2.isPointerType)(result.typeSpecifier) && isInStack(result.value)) {
                    (0, helpers_2.dispatchWarning)(`function returns address of local variable `);
                }
                // Remove stack frame
                stackFree = frameStart;
                // Remove environment frame
                ENVIRONMENT.pop();
                if ((result === null || result === void 0 ? void 0 : result.typeSpecifier) && result.typeSpecifier !== functionType) {
                    (0, helpers_2.dispatchWarning)(`returning ${result.typeSpecifier} from a function with return type ${functionType}`);
                }
                return result;
            }
        }
        // Warning : returning different type
        if ((result === null || result === void 0 ? void 0 : result.typeSpecifier) && result.typeSpecifier !== functionType) {
            (0, helpers_2.dispatchWarning)(`returning ${result.typeSpecifier} from a function with return type ${functionType}`);
        }
        return { value: result === null || result === void 0 ? void 0 : result.value, typeSpecifier: functionType };
    },
    // *ptr, **ptr, ***ptr ...
    PointerExpression: function (node) {
        const name = node.name;
        const pointerAddressExpression = node.address && evaluate(node.address);
        let address;
        let type = '';
        // Special case for *(p+4) type of pointer (pointer arithmetic)
        if (pointerAddressExpression) {
            address = pointerAddressExpression.value;
            type = pointerAddressExpression.typeSpecifier; // type of pointer
            if (!(0, helpers_2.isPointerType)(type))
                throw Error('given expression is not a pointer');
            return {
                value: memoryRetrieveBasic(address, (0, helpers_2.getPointerValueType)(type)),
                typeSpecifier: type.slice(0, -1),
                address,
            };
        }
        // Otherwise, if *p
        if (name) {
            address = getEnvironmentValue(name).address; // address of pointer
            type = getEnvironmentValue(name).typeSpecifier; // type of pointer
        }
        if (!(0, helpers_2.isPointerType)(type))
            throw Error('given expression is not a pointer');
        // Check if [**..]var corresponds to its [**..] type
        if (type.split('*').length - 1 < node.multiplicity) {
            throw new Error(`${name} of type ${type} is not compatible with ${'*'.repeat(node.multiplicity)}${name}`);
        }
        let pointersNumber = node.multiplicity;
        do {
            address = memoryRetrieveBasic(address, type);
            type = type.slice(0, -1); // remove last '*'
            pointersNumber -= 1;
        } while (pointersNumber > 0);
        return {
            value: memoryRetrieveBasic(address, type),
            typeSpecifier: type,
            address,
        };
    },
    ArrayAccess: function (node) {
        const name = node.name;
        const { address, typeSpecifier } = getEnvironmentValue(name);
        // Get arrStart from pointer or local variable
        const arrStart = (0, helpers_2.isPointerType)(typeSpecifier)
            ? memoryRetrieveBasic(address, typeSpecifier)
            : address;
        const type = (0, helpers_2.isPointerType)(typeSpecifier)
            ? (0, helpers_2.getPointerValueType)(typeSpecifier)
            : (0, helpers_1.getArrayValueType)(typeSpecifier);
        const typeSize = (0, helpers_2.getTypeSize)(type);
        const accessIndex = actualValue(node.index);
        const idx = arrStart + accessIndex * typeSize;
        // retrieve memory using the memoryRetrieveBasic
        const value = memoryRetrieveBasic(idx, type);
        return {
            value,
            typeSpecifier: type,
        };
    },
    // &v
    VariableAddress: function (node) {
        const name = node.name;
        // Default 0 (for &a), other for &a[index]
        const index = actualValue(node.index);
        const typeSpecifier = getEnvironmentValue(name).typeSpecifier;
        const address = getEnvironmentValue(name).address + index * (0, helpers_2.getTypeSize)(typeSpecifier);
        return { value: address, typeSpecifier: typeSpecifier + '*' };
    },
    // malloc(num)
    Malloc: function (node) {
        const size = evaluate(node.size).value;
        if (!(typeof size === 'number'))
            throw new Error('invalid size argument');
        return {
            value: allocateHeapMemory(size, heapFreeNode),
            typeSpecifier: 'void*',
            size,
        };
    },
    // free(num)
    Free: function (node) {
        const envValue = getEnvironmentValue(node.name);
        const typeSpecifier = envValue.typeSpecifier;
        const pointerAddress = envValue.address;
        const size = envValue.size || (0, helpers_2.getTypeSize)((0, helpers_2.getPointerValueType)(typeSpecifier));
        const address = memoryRetrieveBasic(pointerAddress, typeSpecifier);
        freeMemory(address, size);
        const lastIndex = ENVIRONMENT.length - 1;
        // remove freed variable from the environment
        delete ENVIRONMENT[lastIndex][node.name];
        // remove any other variable which holds the freed address
        for (let key in ENVIRONMENT[lastIndex]) {
            if (ENVIRONMENT[lastIndex][key].address === address) {
                delete ENVIRONMENT[lastIndex][key];
            }
        }
    },
    // sizeof(type|expr)
    SizeOf: function (node) {
        // argument is type
        if (node.arg.type === 'typeSpecifier') {
            return {
                value: (0, helpers_2.getTypeSize)(node.arg.value),
                typeSpecifier: 'unsigned long',
            };
        }
        const { value, typeSpecifier, size } = evaluate(node.arg);
        if (size) {
            return {
                value: size,
                typeSpecifier: 'unsigned long',
            };
        }
        else if (typeSpecifier) {
            return {
                value: (0, helpers_2.getTypeSize)(typeSpecifier),
                typeSpecifier: 'unsigned long',
            };
        }
        else {
            return {
                value: (0, helpers_2.getLiteralSize)(value),
                typeSpecifier: 'unsigned long',
            };
        }
    },
    PrintHeap: function (node) {
        printHeap();
    },
    PrintStack: function (node) {
        printStack();
    },
    Printf: function (node) {
        const args = node.args.map((arg) => {
            const v = evaluate(arg);
            const isArray = 
            // Evaluate and stringify array
            (0, helpers_1.isArrayType)(v.typeSpecifier) || v.typeSpecifier === 'char*';
            // Evaluate and stringify array
            if (isArray) {
                const typeSpecifier = v.typeSpecifier;
                const size = (v === null || v === void 0 ? void 0 : v.size) || v.length * (0, helpers_2.getTypeSize)(typeSpecifier);
                const result = evaluateArray({ value: v.value, size, typeSpecifier });
                return result;
            }
            const result = evaluate(arg);
            return result.typeSpecifier === 'char'
                ? String.fromCharCode(result.value)
                : result.value;
        });
        try {
            let output = '';
            if (args.length > 1) {
                output = `${printf(...args)}`;
            }
            else {
                output = `${args[0]}`;
            }
            (0, helpers_1.dispatchPrint)(output);
        }
        catch (e) {
            console.log('ERROR', e);
            throw new Error('Invalid printf argument');
        }
    },
    // STATEMENTS
    ExpressionStatement: function (node) {
        return evaluate(node.expression);
    },
    ConditionalStatement: function (node) {
        const condition = actualValue(node.condition);
        if (condition) {
            return evaluate(node.truebody);
        }
        else {
            if (node.falsebody != null) {
                return evaluate(node.falsebody);
            }
        }
    },
    SwitchStatement: function (node) {
        const condition = evaluate(node.condition);
        if (!Number.isInteger(condition.value)) {
            throw new Error('switch condition is not an integer');
        }
        return evaluateSwitchBody(node.body.statements, condition.value);
    },
    ForLoop: function (node) {
        evaluate(node.initial);
        let condition = evaluate(node.condition);
        while (condition.value) {
            const result = evaluate(node.body);
            if ((result === null || result === void 0 ? void 0 : result.type) === 'return' || (result === null || result === void 0 ? void 0 : result.type) === 'break') {
                return result;
            }
            evaluate(node.action);
            condition = evaluate(node.condition);
        }
    },
    WhileLoop: function (node) {
        let condition = evaluate(node.condition);
        while (condition.value) {
            const result = evaluate(node.body);
            if ((result === null || result === void 0 ? void 0 : result.type) === 'return' || (result === null || result === void 0 ? void 0 : result.type) === 'break') {
                return result;
            }
            condition = evaluate(node.condition);
        }
    },
    DoWhileLoop: function (node) {
        let condition = evaluate(node.condition);
        evaluate(node.body);
        while (condition.value) {
            const result = evaluate(node.body);
            if ((result === null || result === void 0 ? void 0 : result.type) === 'return' || (result === null || result === void 0 ? void 0 : result.type) === 'break') {
                return result;
            }
            condition = evaluate(node.condition);
        }
    },
    SequenceStatement: function (node) {
        let result;
        for (const instr of node.statements) {
            result = evaluate(instr);
            if ((result === null || result === void 0 ? void 0 : result.type) === 'return' || (result === null || result === void 0 ? void 0 : result.type) === 'break') {
                return result;
            }
        }
        return result;
    },
    // Declarations
    // int v;
    VariableDeclaration: function (node) {
        const typeSpecifier = node.typeSpecifier.value;
        const typeQualifiers = node.typeQualifiers.value.map((t) => t.value);
        for (const name of node.identifiers) {
            const address = pushOnStack(null, typeSpecifier);
            extendEnvironment(name, address, typeSpecifier, typeQualifiers);
        }
    },
    // char [] arr;
    ArrayDeclaration: function (node) {
        const name = node.identifier;
        const type = node.typeSpecifier.value;
        let value = [];
        const size = actualValue(node.size) * (0, helpers_2.getTypeSize)((0, helpers_1.getArrayValueType)(type));
        for (let i = 0; i < size; i++) {
            value.push(0);
        }
        const typeQualifiers = node.typeQualifiers.value.map((t) => t.value);
        const address = pushOnStack(value, type);
        extendEnvironment(name, address, type, typeQualifiers, size);
    },
    // int func() {...};
    FunctionDeclaration(node) {
        const name = node.name;
        const typeSpecifier = node.typeSpecifier;
        CODE[name] = {
            typeSpecifier,
            body: node.body,
            formals: node.formals.map((formal) => ({
                name: formal.identifier,
                typeSpecifier: formal.typeSpecifier.value,
            })),
        };
    },
    Program: function (node) {
        node.functionDeclarations.forEach((f) => evaluate(f));
        const program = {
            type: 'FunctionApplication',
            name: 'main',
            args: [],
        };
        const res = evaluate(program);
        return res.value;
    },
};
function evaluateSwitchBody(statements, switchCon) {
    let defaultCount = 0;
    let defaultBody;
    for (let i = 0; i < statements.length; i++) {
        // handle cases
        const statement = statements[i];
        if (statement.condition != null) {
            const condition = evaluate(statement.condition);
            // check matching case
            if (condition.value === switchCon) {
                const res = evaluate(statement.body);
                // if the statement has a break, return the result
                if (statement.hasBreak) {
                    return res;
                }
                // otherwise, execute until statement with break
                for (let j = i + 1; j < statements.length; j++) {
                    const statement = statements[j];
                    const res = evaluate(statement.body);
                    if (statement.hasBreak)
                        break;
                }
                return;
            }
        }
        else {
            // default case
            defaultCount += 1;
            if (defaultCount > 1) {
                throw new Error('error: multiple default labels in one switch');
            }
            defaultBody = statement.body;
        }
    }
    // no matching case found, execute default body
    if (defaultBody) {
        return evaluate(defaultBody);
    }
}
const printHeap = () => {
    const columnNames = [['ADDRESS', 'TYPE', 'VALUE']];
    const nodes = [];
    for (let frame of ENVIRONMENT) {
        const pointers = Object.values(frame).filter((v) => (0, helpers_2.isPointerType)(v.typeSpecifier));
        for (const p of pointers) {
            const address = memoryRetrieveBasic(p.address, p.typeSpecifier);
            if (isInHeap(address)) {
                let type = p.typeSpecifier.slice(0, -1);
                const typeSize = (0, helpers_2.getTypeSize)(type);
                let value;
                if (p.size && p.size > typeSize) {
                    value = [];
                    for (let i = 0; i < p.size; i += typeSize) {
                        value.push(memoryRetrieveBasic(address + i, type));
                    }
                    type += '[]';
                    value = '[' + value.toString() + ']';
                }
                else {
                    value = memoryRetrieveBasic(address, type);
                }
                const heapNode = [address, type, value];
                nodes.push(heapNode);
            }
        }
    }
    const config = {
        header: {
            content: 'HEAP MEMORY',
        },
    };
    (0, helpers_2.dispathchTable)((0, table_1.table)(columnNames.concat(nodes.sort((a, b) => a[0] - b[0])), config));
};
function printStack() {
    const columnNames = [['ADDRESS', 'NAME', 'TYPE', 'VALUE']];
    let nodes = [];
    for (let frame of ENVIRONMENT) {
        const identifiers = Object.entries(frame);
        for (let [identifier, variable] of identifiers) {
            const address = variable.address;
            if (!isInStack(address))
                continue;
            const typeSpecifier = variable.typeSpecifier;
            if ((0, helpers_1.isArrayType)(typeSpecifier)) {
                const value = evaluateArray({
                    value: variable.address,
                    size: variable.size || 0,
                    typeSpecifier: variable.typeSpecifier,
                });
                const stackNode = [address, identifier, typeSpecifier, value];
                nodes.push(stackNode);
            }
            else {
                const value = memoryRetrieveBasic(address, typeSpecifier);
                const stackNode = [address, identifier, typeSpecifier, value];
                nodes.push(stackNode);
            }
        }
    }
    const config = {
        header: {
            content: 'RUNTIME STACK',
        },
    };
    (0, helpers_2.dispathchTable)((0, table_1.table)(columnNames.concat(nodes.sort((a, b) => a[0] - b[0])), config));
    nodes = [];
}
exports.printStack = printStack;
function evaluateArray({ value, size, typeSpecifier, }) {
    if (!typeSpecifier) {
        throw Error("Type of array doesn't exist");
    }
    let valueType = typeSpecifier;
    if ((0, helpers_1.isArrayType)(typeSpecifier)) {
        valueType = (0, helpers_1.getArrayValueType)(typeSpecifier);
    }
    if ((0, helpers_2.isPointerType)(typeSpecifier)) {
        valueType = (0, helpers_2.getPointerValueType)(typeSpecifier);
    }
    let result = [];
    let address;
    // Array is given as address
    if (typeof value === 'number') {
        address = value;
        for (let i = address; i < address + size; i += (0, helpers_2.getTypeSize)(valueType)) {
            if (valueType === 'char') {
                result.push(String.fromCharCode(memoryRetrieveBasic(i, valueType)));
            }
            else {
                result.push(memoryRetrieveBasic(i, valueType));
            }
        }
        return valueType === 'char' ? result.slice(0, -1).join('') : result;
    }
    // Array given as literal
    if (valueType === 'char') {
        result = value.map((v) => String.fromCharCode(v.value));
    }
    else {
        result = value.map((v) => v.value);
    }
    return valueType === 'char' ? result.slice(0, -1).join('') : result;
}
exports.evaluateArray = evaluateArray;
function evaluate(node) {
    const result = evaluators[node.type](node);
    return result;
}
exports.evaluate = evaluate;
function actualValue(exp) {
    const evalResult = evaluate(exp);
    return evalResult.value;
}
exports.actualValue = actualValue;
//# sourceMappingURL=interpreter.js.map