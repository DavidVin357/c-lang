"use strict";
// Variable determining chapter of Source is contained in this file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureGlobalEnvironmentExist = exports.createEmptyContext = exports.createGlobalEnvironment = exports.EnvTreeNode = exports.EnvTree = exports.LazyBuiltIn = void 0;
const types_1 = require("./types");
class LazyBuiltIn {
    constructor(func, evaluateArgs) {
        this.func = func;
        this.evaluateArgs = evaluateArgs;
    }
}
exports.LazyBuiltIn = LazyBuiltIn;
class EnvTree {
    constructor() {
        this._root = null;
        this.map = new Map();
    }
    get root() {
        return this._root;
    }
    insert(environment) {
        const tailEnvironment = environment.tail;
        if (tailEnvironment === null) {
            if (this._root === null) {
                this._root = new EnvTreeNode(environment, null);
                this.map.set(environment, this._root);
            }
        }
        else {
            const parentNode = this.map.get(tailEnvironment);
            if (parentNode) {
                const childNode = new EnvTreeNode(environment, parentNode);
                parentNode.addChild(childNode);
                this.map.set(environment, childNode);
            }
        }
    }
    getTreeNode(environment) {
        return this.map.get(environment);
    }
}
exports.EnvTree = EnvTree;
class EnvTreeNode {
    constructor(environment, parent) {
        this.environment = environment;
        this.parent = parent;
        this._children = [];
    }
    get children() {
        return this._children;
    }
    resetChildren(newChildren) {
        this.clearChildren();
        this.addChildren(newChildren);
        newChildren.forEach((c) => (c.parent = this));
    }
    clearChildren() {
        this._children = [];
    }
    addChildren(newChildren) {
        this._children.push(...newChildren);
    }
    addChild(newChild) {
        this._children.push(newChild);
        return newChild;
    }
}
exports.EnvTreeNode = EnvTreeNode;
const createEmptyRuntime = () => ({
    break: false,
    debuggerOn: true,
    isRunning: false,
    environmentTree: new EnvTree(),
    environments: [],
    value: undefined,
    nodes: [],
});
const createGlobalEnvironment = () => ({
    tail: null,
    name: 'global',
    head: {},
    id: '-1',
});
exports.createGlobalEnvironment = createGlobalEnvironment;
const createEmptyContext = (variant, externalSymbols, externalContext) => {
    return {
        externalSymbols,
        errors: [],
        externalContext,
        runtime: createEmptyRuntime(),
        numberOfOuterEnvironments: 1,
        prelude: null,
        executionMethod: 'auto',
        variant,
        moduleContexts: {},
        unTypecheckedCode: [],
        previousCode: [],
    };
};
exports.createEmptyContext = createEmptyContext;
const ensureGlobalEnvironmentExist = (context) => {
    if (!context.runtime) {
        context.runtime = createEmptyRuntime();
    }
    if (!context.runtime.environments) {
        context.runtime.environments = [];
    }
    if (!context.runtime.environmentTree) {
        context.runtime.environmentTree = new EnvTree();
    }
    if (context.runtime.environments.length === 0) {
        const globalEnvironment = (0, exports.createGlobalEnvironment)();
        context.runtime.environments.push(globalEnvironment);
        context.runtime.environmentTree.insert(globalEnvironment);
    }
};
exports.ensureGlobalEnvironmentExist = ensureGlobalEnvironmentExist;
const createContext = (variant = types_1.Variant.DEFAULT, externalSymbols = [], externalContext) => {
    const context = (0, exports.createEmptyContext)(variant, externalSymbols, externalContext);
    return context;
};
exports.default = createContext;
//# sourceMappingURL=createContext.js.map