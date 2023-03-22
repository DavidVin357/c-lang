"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const CLexer_1 = require("../lang/CLexer");
const CParser_1 = require("../lang/CParser");
const antlr4ts_1 = require("antlr4ts");
class ExpressionGenerator {
    visitDecimal(ctx) {
        return {
            type: 'Literal',
            value: parseInt(ctx.text),
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
    visitIdentifier(ctx) {
        return {
            type: 'Identifier',
            name: ctx.text,
        };
    }
    visitAddition(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '+',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitSubtraction(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '-',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitMultiplication(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '*',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitDivision(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '/',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitModular(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '%',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitEqual(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '==',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitGreater(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '>',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitGreaterEqual(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '>=',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitLess(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '<',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
        };
    }
    visitLessEqual(ctx) {
        return {
            type: 'BinaryExpression',
            operator: '<=',
            left: this.visit(ctx._left),
            right: this.visit(ctx._right),
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
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(node) {
        const expressions = [];
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
        for (let i = 0; i < node.childCount; i++) {
            types.push(node.getChild(i).accept(this));
        }
        return {
            type: 'TypeSequence',
            types,
        };
    }
    visitTerminal(node) {
        return node.accept(this);
    }
    visitErrorNode(node) {
        throw new Error('invalid type');
    }
}
function convertExpression(expression) {
    const generator = new ExpressionGenerator();
    return expression.accept(generator);
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
        program = convertExpression(tree);
        return program;
    }
    catch (error) {
        throw error;
    }
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map