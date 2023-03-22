import createContext from './createContext';
import { Context } from './types';
export declare function interrupt(context: Context): void;
export declare function runInContext(code: string): Promise<any>;
export { createContext, Context };
