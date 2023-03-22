import * as cTree from '../cTree';
import { Value } from '../types';
export type Evaluator<T extends cTree.Node> = (node: T) => Value;
export declare function evaluate(node: cTree.Node): any;
export declare function actualValue(exp: cTree.Node): any;
