import { SourceLocation } from 'acorn';
import * as es from 'estree';
import { EnvTree } from './createContext';
/**
 * Defines functions that act as built-ins, but might rely on
 * different implementations. e.g display() in a web application.
 */
export interface CustomBuiltIns {
    rawDisplay: (value: Value, str: string, externalContext: any) => Value;
    prompt: (value: Value, str: string, externalContext: any) => string | null;
    alert: (value: Value, str: string, externalContext: any) => void;
    visualiseList: (list: any, externalContext: any) => void;
}
export declare enum ErrorType {
    SYNTAX = "Syntax",
    TYPE = "Type",
    RUNTIME = "Runtime"
}
export declare enum ErrorSeverity {
    WARNING = "Warning",
    ERROR = "Error"
}
export interface SourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    location: es.SourceLocation;
    explain(): string;
    elaborate(): string;
}
export interface Rule<T extends es.Node> {
    name: string;
    disableForVariants?: Variant[];
    checkers: {
        [name: string]: (node: T, ancestors: es.Node[]) => SourceError[];
    };
}
export interface Comment {
    type: 'Line' | 'Block';
    value: string;
    start: number;
    end: number;
    loc: SourceLocation | undefined;
}
export type ExecutionMethod = 'native' | 'interpreter' | 'auto';
export declare enum Chapter {
    CALC = 1
}
export declare enum Variant {
    DEFAULT = "calc"
}
export interface Language {
    chapter: Chapter;
    variant: Variant;
}
export type ValueWrapper = LetWrapper | ConstWrapper;
export interface LetWrapper {
    kind: 'let';
    getValue: () => Value;
    assignNewValue: <T>(newValue: T) => T;
}
export interface ConstWrapper {
    kind: 'const';
    getValue: () => Value;
}
export interface Context<T = any> {
    /** The external symbols that exist in the Context. */
    externalSymbols: string[];
    /** All the errors gathered */
    errors: SourceError[];
    /** Runtime Sepecific state */
    runtime: {
        break: boolean;
        debuggerOn: boolean;
        isRunning: boolean;
        environmentTree: EnvTree;
        environments: Environment[];
        nodes: es.Node[];
    };
    numberOfOuterEnvironments: number;
    prelude: string | null;
    /**
     * Used for storing external properties.
     * For e.g, this can be used to store some application-related
     * context for use in your own built-in functions (like `display(a)`)
     */
    externalContext?: T;
    /**
     * Describes the language processor to be used for evaluation
     */
    executionMethod: ExecutionMethod;
    /**
     * Describes the strategy / paradigm to be used for evaluation
     * Examples: lazy, concurrent or nondeterministic
     */
    variant: Variant;
    /**
     * Contains the evaluated code that has not yet been typechecked.
     */
    unTypecheckedCode: string[];
    /**
     * Storage container for module specific information and state
     */
    moduleContexts: {
        [name: string]: ModuleContext;
    };
    /**
     * Code previously executed in this context
     */
    previousCode: string[];
}
export type ModuleContext = {
    state: null | any;
    tabs: null | any[];
};
export interface BlockFrame {
    type: string;
    loc?: es.SourceLocation | null;
    enclosingLoc?: es.SourceLocation | null;
    children: (DefinitionNode | BlockFrame)[];
}
export interface DefinitionNode {
    name: string;
    type: string;
    loc?: es.SourceLocation | null;
}
export interface Frame {
    [name: string]: any;
}
export type Value = any;
export type AllowedDeclarations = 'const' | 'let';
export interface Environment {
    id: string;
    name: string;
    tail: Environment | null;
    callExpression?: es.CallExpression;
    head: Frame;
    thisContext?: Value;
}
export interface Thunk {
    value: any;
    isMemoized: boolean;
    f: () => any;
}
export interface Error {
    status: 'error';
}
export interface Finished {
    status: 'finished';
    context: Context;
    value: Value;
}
export interface Suspended {
    status: 'suspended';
    it: IterableIterator<Value>;
    scheduler: Scheduler;
    context: Context;
}
export type SuspendedNonDet = Omit<Suspended, 'status'> & {
    status: 'suspended-non-det';
} & {
    value: Value;
};
export type Result = Suspended | SuspendedNonDet | Finished | Error;
export interface Scheduler {
    run(it: IterableIterator<Value>, context: Context): Promise<Result>;
}
export interface Directive extends es.ExpressionStatement {
    type: 'ExpressionStatement';
    expression: es.Literal;
    directive: string;
}
/** For use in the substituter, to differentiate between a function declaration in the expression position,
 * which has an id, as opposed to function expressions.
 */
export interface FunctionDeclarationExpression extends es.FunctionExpression {
    id: es.Identifier;
    body: es.BlockStatement;
}
/**
 * For use in the substituter: call expressions can be reduced into an expression if the block
 * only contains a single return statement; or a block, but has to be in the expression position.
 * This is NOT compliant with the ES specifications, just as an intermediate step during substitutions.
 */
export interface BlockExpression extends es.BaseExpression {
    type: 'BlockExpression';
    body: es.Statement[];
}
export type substituterNodes = es.Node | BlockExpression;
export type ContiguousArrayElementExpression = Exclude<es.ArrayExpression['elements'][0], null>;
export type ContiguousArrayElements = ContiguousArrayElementExpression[];
export type PrimitiveType = 'boolean' | 'null' | 'number' | 'string' | 'undefined';
export type TSAllowedTypes = 'any' | 'void';
export declare const disallowedTypes: readonly ["bigint", "never", "object", "symbol", "unknown"];
export type TSDisallowedTypes = typeof disallowedTypes[number];
export type TSBasicType = PrimitiveType | TSAllowedTypes | TSDisallowedTypes;
export type NodeWithInferredType<T extends es.Node> = InferredType & T;
export type FuncDeclWithInferredTypeAnnotation = NodeWithInferredType<es.FunctionDeclaration> & TypedFuncDecl;
export type InferredType = Untypable | Typed | NotYetTyped;
export interface TypedFuncDecl {
    functionInferredType?: Type;
}
export interface Untypable {
    typability?: 'Untypable';
    inferredType?: Type;
}
export interface NotYetTyped {
    typability?: 'NotYetTyped';
    inferredType?: Type;
}
export interface Typed {
    typability?: 'Typed';
    inferredType?: Type;
}
export type Constraint = 'none' | 'addable';
export type Type = Primitive | Variable | FunctionType | List | Pair | SArray | UnionType | LiteralType;
export interface Primitive {
    kind: 'primitive';
    name: PrimitiveType | TSAllowedTypes;
    value?: string | number | boolean;
}
export interface Variable {
    kind: 'variable';
    name: string;
    constraint: Constraint;
}
export interface FunctionType {
    kind: 'function';
    parameterTypes: Type[];
    returnType: Type;
}
export interface List {
    kind: 'list';
    elementType: Type;
    typeAsPair?: Pair;
}
export interface Pair {
    kind: 'pair';
    headType: Type;
    tailType: Type;
}
export interface SArray {
    kind: 'array';
    elementType: Type;
}
export interface UnionType {
    kind: 'union';
    types: Type[];
}
export interface LiteralType {
    kind: 'literal';
    value: string | number | boolean;
}
export type BindableType = Type | ForAll | PredicateType;
export interface ForAll {
    kind: 'forall';
    polyType: Type;
}
export interface PredicateType {
    kind: 'predicate';
    ifTrueType: Type | ForAll;
}
export type PredicateTest = {
    node: NodeWithInferredType<es.CallExpression>;
    ifTrueType: Type | ForAll;
    argVarName: string;
};
/**
 * Each element in the TypeEnvironment array represents a different scope
 * (e.g. first element is the global scope, last element is the closest).
 * Within each scope, variable types/declaration kinds, as well as type aliases, are stored.
 */
export type TypeEnvironment = {
    typeMap: Map<string, BindableType>;
    declKindMap: Map<string, AllowedDeclarations>;
    typeAliasMap: Map<string, Type>;
}[];
