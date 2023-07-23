"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const CLexer_1 = require("../lang/CLexer");
const CParser_1 = require("../lang/CParser");
const antlr4ts_1 = require("antlr4ts");
class ExpressionGenerator {
    constructor() {
        this.typeGenerator = new TypeGenerator();
    }
    // Primitives
    visitDecimal(ctx) {
        return {
            type: 'Literal',
            value: ctx.text.length < 16 ? parseInt(ctx.text) : BigInt(ctx.text),
            raw: ctx.text,
        };
    }
    visitFraction(ctx) {
        return {
            type: 'Literal',
            value: parseFloat(ctx.text),
            raw: ctx.text,
        };
    }
    visitChar(ctx) {
        const char = ctx.text.replaceAll("'", '');
        return {
            type: 'Literal',
            value: char === '\0' ? 48 : char.charCodeAt(0),
            raw: ctx.text,
        };
    }
    // Variables and assignments
    visitIdentifier(ctx) {
        return {
            type: 'Identifier',
            name: ctx.text,
        };
    }
    visitBinaryAssignment(ctx) {
        var _a;
        const castingType = (_a = ctx.casting()) === null || _a === void 0 ? void 0 : _a.typeSpecifier();
        return {
            type: 'BinaryAssignment',
            identifier: ctx.Identifier().text,
            castingType: castingType
                ? this.typeGenerator.visitTypeSpecifier(castingType)
                : null,
            operator: ctx._operator.text,
            value: this.visit(ctx._value),
        };
    }
    visitPostfixAssignment(ctx) {
        return {
            type: 'PostfixAssignment',
            operator: ctx._operator.text,
            identifier: ctx.Identifier().text,
        };
    }
    visitPrefixAssignment(ctx) {
        return {
            type: 'PrefixAssignment',
            operator: ctx._operator.text,
            identifier: ctx.Identifier().text,
        };
    }
    visitAssignmentList(ctx) {
        return {
            type: 'AssignmentList',
            assignments: ctx.assignment().map((a) => this.visit(a)),
        };
    }
    // Function Application
    visitFunctionApplication(ctx) {
        const name = ctx.Identifier().text;
        const expressionArgs = ctx.argumentExpressionList().expression();
        const args = expressionArgs.map((ea) => this.visit(ea));
        return {
            type: 'FunctionApplication',
            name,
            args,
        };
    }
    // Arrays
    visitArray(ctx) {
        return {
            type: 'Array',
            value: ctx.expression().map((e) => this.visit(e)),
            length: ctx.expression().length,
            typeSpecifier: '[]',
        };
    }
    visitArrayAccess(ctx) {
        if (!ctx._index.text || !ctx._name.text) {
            throw Error('Parsing error: array access');
        }
        return {
            type: 'ArrayAccess',
            name: ctx._name.text,
            index: this.visit(ctx._index),
        };
    }
    visitArrayValueAssignment(ctx) {
        var _a;
        const castingType = (_a = ctx.casting()) === null || _a === void 0 ? void 0 : _a.typeSpecifier();
        const left = this.visitArrayAccess(ctx.arrayAccess());
        return {
            left: left,
            type: 'ArrayValueAssignment',
            identifier: left.name,
            index: left.index,
            castingType: castingType
                ? this.typeGenerator.visitTypeSpecifier(castingType)
                : null,
            operator: ctx._operator.text,
            value: this.visit(ctx._value),
        };
    }
    visitString(ctx) {
        const str = ctx.STRING().text;
        const chars = Array.from(str.replaceAll('"', ''));
        const charArr = [];
        for (let [i, char] of chars.entries()) {
            if (chars[i - 1] === '\\')
                continue;
            if (char === '\\' && chars[i + 1] == 'n') {
                charArr.push({
                    type: 'Literal',
                    value: `\n`.charCodeAt(0),
                    typeSpecifier: 'char',
                    raw: '\n',
                });
                continue;
            }
            charArr.push({
                type: 'Literal',
                value: char.charCodeAt(0),
                typeSpecifier: 'char',
                raw: char,
            });
        }
        charArr.push({
            type: 'Literal',
            value: 48,
            typeSpecifier: 'char',
            raw: '\0',
        });
        return {
            type: 'Array',
            value: charArr,
            typeSpecifier: 'char[]',
            length: str.length,
        };
    }
    // Binary operations
    visitAdditive(ctx) {
        if (!ctx._operator.text)
            throw Error("Operator doesn't not exist");
        return {
            type: 'BinaryExpression',
            operator: ctx._operator.text,
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitMultiplicative(ctx) {
        if (!ctx._operator.text)
            throw Error("Operator doesn't not exist");
        return {
            type: 'BinaryExpression',
            operator: ctx._operator.text,
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitEquality(ctx) {
        if (!ctx._operator.text)
            throw Error("Operator doesn't not exist");
        return {
            type: 'BinaryExpression',
            operator: ctx._operator.text,
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitRelational(ctx) {
        if (!ctx._operator.text)
            throw Error("Operator doesn't not exist");
        return {
            type: 'BinaryExpression',
            operator: ctx._operator.text,
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitParentheses(ctx) {
        return {
            type: 'ParenthesesExpression',
            value: this.visit(ctx._inner),
        };
    }
    visitLogicalAnd(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '&&',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitLogicalOr(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '||',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    // -a or !a
    visitUnary(ctx) {
        if (!ctx._operator.text)
            throw Error("Operator doesn't not exist");
        return {
            type: 'UnaryExpression',
            operator: ctx._operator.text,
            right: this.visit(ctx._right),
        };
    }
    // Memory management
    visitVarAddress(ctx) {
        const index = ctx.variableAccess()._index;
        return {
            type: 'VariableAddress',
            name: ctx.variableAccess().Identifier().text,
            index: index
                ? this.visit(index)
                : {
                    type: 'Literal',
                    value: 0,
                },
        };
    }
    visitPointer(ctx) {
        var _a;
        const pointers = ctx.MUL();
        const name = (_a = ctx.pointerPart().Identifier()) === null || _a === void 0 ? void 0 : _a.text;
        const addressExpression = ctx.pointerPart()._inner;
        const address = addressExpression && this.visit(addressExpression);
        return {
            type: 'PointerExpression',
            name,
            address,
            multiplicity: pointers.length,
        };
    }
    visitMalloc(ctx) {
        return {
            type: 'Malloc',
            size: this.visit(ctx._size),
        };
    }
    visitFree(ctx) {
        const name = ctx.Identifier().text;
        return {
            type: 'Free',
            name,
        };
    }
    visitSizeof(ctx) {
        const expression = ctx._arg.expression();
        const typeSpecifier = ctx._arg.typeSpecifier();
        if (expression) {
            return {
                type: 'SizeOf',
                arg: this.visit(expression),
            };
        }
        else if (typeSpecifier) {
            return {
                type: 'SizeOf',
                arg: this.typeGenerator.visitTypeSpecifier(typeSpecifier),
            };
        }
        else {
            throw new Error('Only type or expression is accepted');
        }
    }
    visitPointerValueAssignment(ctx) {
        return {
            type: 'PointerValueAssignment',
            pointer: this.visitPointer(ctx.pointer()),
            operator: ctx._operator.text,
            value: this.visit(ctx._value),
        };
    }
    // Visitor basics
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        const expressions = [];
        if (node.childCount === 1) {
            return this.visit(node.getChild(0));
        }
        for (let i = 0; i < node.childCount; i++) {
            expressions.push(node.getChild(i).accept(this));
        }
        return {
            type: 'SequenceExpression',
            expressions,
        };
    }
    visitTerminal(node) {
        return node.accept(this);
    }
    visitErrorNode(node) {
        throw new Error('invalid expression');
    }
}
class TypeGenerator {
    visitTypeQualifier(ctx) {
        return { type: 'typeQualifier', value: ctx.text };
    }
    visitTypeSpecifier(ctx) {
        return { type: 'typeSpecifier', value: ctx.text };
    }
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        const types = [];
        if (node.childCount == 1) {
            types.push(this.visit(node.getChild(0)));
        }
        else {
            for (let i = 0; i < node.childCount; i++) {
                types.push(node.getChild(i).accept(this));
            }
        }
        return {
            type: 'SequenceType',
            value: types,
        };
    }
    visitTerminal(node) {
        return node.accept(this);
    }
    visitErrorNode(node) {
        throw new Error('invalid type');
    }
}
class StatementGenerator {
    constructor() {
        this.typeGenerator = new TypeGenerator();
        this.expressionGenerator = new ExpressionGenerator();
    }
    // Expression Statement
    visitExpressionStatement(ctx) {
        return {
            type: 'ExpressionStatement',
            expression: new ExpressionGenerator().visit(ctx.expression()),
        };
    }
    // Declarations & initializations
    visitArrayDeclaration(ctx) {
        return {
            type: 'ArrayDeclaration',
            typeSpecifier: {
                type: 'typeSpecifier',
                value: this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier()).value +
                    '[]',
            },
            typeQualifiers: this.typeGenerator.visitChildren(ctx._qualifiers),
            identifier: ctx.Identifier().text,
            size: this.expressionGenerator.visit(ctx._size),
        };
    }
    visitInitialization(ctx) {
        var _a;
        const castingType = (_a = ctx.casting()) === null || _a === void 0 ? void 0 : _a.typeSpecifier();
        const typeSpecifier = this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier());
        const typeQualifiers = this.typeGenerator.visitChildren(ctx._qualifiers);
        return {
            type: 'VariableInitialization',
            castingType: castingType && this.typeGenerator.visitTypeSpecifier(castingType),
            typeSpecifier,
            typeQualifiers,
            identifier: ctx.Identifier().text,
            value: ctx._value && this.expressionGenerator.visit(ctx._value),
        };
    }
    visitInitializationList(ctx) {
        const typeSpecifier = this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier());
        const typeQualifiers = this.typeGenerator.visitChildren(ctx._qualifiers);
        const initializations = ctx
            .initializationListPart()
            .map((i) => {
            const expression = i.expression();
            return {
                type: 'VariableInitialization',
                typeSpecifier,
                typeQualifiers,
                identifier: i.Identifier().text,
                value: expression && this.expressionGenerator.visit(expression),
            };
        });
        return {
            type: 'VariableInitializationList',
            initializations,
        };
    }
    visitArrayInitialization(ctx) {
        const array = this.expressionGenerator.visit(ctx._value);
        const typeSpecifier = this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier()).value;
        return {
            type: 'VariableInitialization',
            typeSpecifier: {
                type: 'typeSpecifier',
                value: typeSpecifier + '[]',
            },
            typeQualifiers: this.typeGenerator.visitChildren(ctx._qualifiers),
            identifier: ctx.Identifier().text,
            value: array,
        };
    }
    // Function Declaration
    visitFunctionDeclaration(ctx) {
        const name = ctx.Identifier().text;
        const typeSpecifier = ctx.typeSpecifier().text;
        const body = this.visitCompoundStatement(ctx.compoundStatement());
        const params = ctx.parameterList().parameterDeclaration();
        const formals = params.map((p) => this.visitParameterDeclaration(p));
        return {
            type: 'FunctionDeclaration',
            name,
            typeSpecifier,
            body,
            formals,
        };
    }
    visitParameterDeclaration(ctx) {
        const isArray = ctx.text.includes('[]');
        const type = this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier());
        if (isArray)
            type.value += '[]';
        return {
            type: 'ParameterDeclaration',
            typeSpecifier: type,
            identifier: ctx.Identifier().text,
        };
    }
    visitSequenceStatement(ctx) {
        const childStatements = ctx.statement();
        return {
            type: 'SequenceStatement',
            statements: childStatements
                ? childStatements.map((child) => this.visit(child))
                : [],
        };
    }
    visitCompoundStatement(ctx) {
        const sequenceStatement = ctx.sequenceStatement();
        return sequenceStatement
            ? this.visitSequenceStatement(sequenceStatement)
            : {
                type: 'SequenceStatement',
                statements: [],
            };
    }
    visitReturnStatement(ctx) {
        return {
            type: 'ReturnStatement',
            value: this.expressionGenerator.visit(ctx.expression()),
        };
    }
    // Conditionals
    visitSwitchStatement(ctx) {
        return {
            type: 'SwitchStatement',
            condition: this.expressionGenerator.visit(ctx._condition),
            body: this.visitSwitchBodyStatement(ctx._body),
        };
    }
    visitSwitchBodyStatement(ctx) {
        const labeledStatements = ctx.switchBodyList().labeledStatement();
        return {
            type: 'SwitchBodyStatement',
            statements: labeledStatements.map((ls) => this.visitLabeledStatement(ls)),
        };
    }
    visitLabeledStatement(ctx) {
        return {
            type: 'LabeledStatement',
            condition: ctx._condition
                ? new ExpressionGenerator().visit(ctx._condition)
                : null,
            body: new StatementGenerator().visit(ctx._body),
            hasBreak: !!ctx.breakStatement(),
        };
    }
    visitConditionalStatement(ctx) {
        const statementGen = new StatementGenerator();
        const falsebody = ctx._falsebody ? statementGen.visit(ctx._falsebody) : null;
        return {
            type: 'ConditionalStatement',
            condition: new ExpressionGenerator().visit(ctx._condition),
            truebody: statementGen.visit(ctx._truebody),
            falsebody: falsebody,
        };
    }
    // IO operations
    visitPrintHeap(ctx) {
        return {
            type: 'PrintHeap',
        };
    }
    visitPrintStack(ctx) {
        return {
            type: 'PrintStack',
        };
    }
    visitPrintf(ctx) {
        const expressions = ctx
            .expression()
            .map((e) => this.expressionGenerator.visit(e));
        return {
            type: 'Printf',
            args: ctx.expression().map((e) => this.expressionGenerator.visit(e)),
        };
    }
    // Loops
    visitBreakStatement(ctx) {
        return {
            type: 'BreakStatement',
        };
    }
    visitLoopInitial(ctx) {
        return this.visitChildren(ctx);
    }
    visitForLoop(ctx) {
        return {
            type: 'ForLoop',
            initial: this.visit(ctx._initial),
            condition: this.expressionGenerator.visit(ctx._condition),
            action: this.expressionGenerator.visit(ctx._action),
            body: this.visit(ctx._body),
        };
    }
    visitWhileLoop(ctx) {
        return {
            type: 'WhileLoop',
            condition: this.expressionGenerator.visit(ctx._condition),
            body: this.visit(ctx._body),
        };
    }
    visitDoWhileLoop(ctx) {
        return {
            type: 'DoWhileLoop',
            condition: this.expressionGenerator.visit(ctx._condition),
            body: this.visit(ctx._body),
        };
    }
    // Visitor basics
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        const statements = [];
        if (node.childCount == 1) {
            return this.visit(node.getChild(0));
        }
        for (let i = 0; i < node.childCount; i++) {
            statements.push(node.getChild(i).accept(this));
        }
        return {
            type: 'SequenceStatement',
            statements,
        };
    }
    visitTerminal(node) {
        return node.accept(this);
    }
    visitErrorNode(node) {
        throw new Error('invalid statement');
    }
}
function convertProgram(program) {
    const functions = program.functionDeclaration();
    return {
        type: 'Program',
        functionDeclarations: functions.map((f) => new StatementGenerator().visitFunctionDeclaration(f)),
    };
}
function parse(source) {
    let program;
    const inputStream = antlr4ts_1.CharStreams.fromString(source);
    const lexer = new CLexer_1.CLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new CParser_1.CParser(tokenStream);
    parser.buildParseTree = true;
    try {
        const tree = parser.program();
        program = convertProgram(tree);
        return program;
    }
    catch (error) {
        throw Error('Parsing error!');
    }
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map