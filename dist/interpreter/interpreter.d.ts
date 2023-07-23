import * as cTree from '../cTree';
export declare function printStack(): void;
export declare function evaluateArray({ value, size, typeSpecifier, }: {
    value: any;
    size: number;
    typeSpecifier?: string;
}): any;
export declare function evaluate(node: cTree.Node): any;
export declare function actualValue(exp: cTree.Node): any;
