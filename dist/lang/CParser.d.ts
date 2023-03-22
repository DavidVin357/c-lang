import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { CListener } from "./CListener";
import { CVisitor } from "./CVisitor";
export declare class CParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly T__12 = 13;
    static readonly T__13 = 14;
    static readonly T__14 = 15;
    static readonly T__15 = 16;
    static readonly T__16 = 17;
    static readonly T__17 = 18;
    static readonly T__18 = 19;
    static readonly T__19 = 20;
    static readonly T__20 = 21;
    static readonly T__21 = 22;
    static readonly T__22 = 23;
    static readonly T__23 = 24;
    static readonly T__24 = 25;
    static readonly T__25 = 26;
    static readonly MUL = 27;
    static readonly DIV = 28;
    static readonly ADD = 29;
    static readonly SUB = 30;
    static readonly MOD = 31;
    static readonly LOGICAL_AND = 32;
    static readonly LOGICAL_OR = 33;
    static readonly EQUALS = 34;
    static readonly LESS = 35;
    static readonly LESS_EQUAL = 36;
    static readonly GREATER = 37;
    static readonly GREATER_EQUAL = 38;
    static readonly POSTFIX_ADD = 39;
    static readonly WHITESPACE = 40;
    static readonly DECIMAL = 41;
    static readonly FRACTION = 42;
    static readonly Identifier = 43;
    static readonly RULE_declarationSpecifiers = 0;
    static readonly RULE_typeSpecifier = 1;
    static readonly RULE_typeQualifier = 2;
    static readonly RULE_declarationSpecifier = 3;
    static readonly RULE_declaration = 4;
    static readonly RULE_initialization = 5;
    static readonly RULE_assignmentOperator = 6;
    static readonly RULE_assignment = 7;
    static readonly RULE_expression = 8;
    static readonly RULE_expressionStatement = 9;
    static readonly RULE_blockItem = 10;
    static readonly RULE_blockItemList = 11;
    static readonly RULE_program = 12;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    declarationSpecifiers(): DeclarationSpecifiersContext;
    typeSpecifier(): TypeSpecifierContext;
    typeQualifier(): TypeQualifierContext;
    declarationSpecifier(): DeclarationSpecifierContext;
    declaration(): DeclarationContext;
    initialization(): InitializationContext;
    assignmentOperator(): AssignmentOperatorContext;
    assignment(): AssignmentContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    expressionStatement(): ExpressionStatementContext;
    blockItem(): BlockItemContext;
    blockItemList(): BlockItemListContext;
    program(): ProgramContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class DeclarationSpecifiersContext extends ParserRuleContext {
    declarationSpecifier(): DeclarationSpecifierContext[];
    declarationSpecifier(i: number): DeclarationSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class TypeSpecifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class TypeQualifierContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class DeclarationSpecifierContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext | undefined;
    typeQualifier(): TypeQualifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class DeclarationContext extends ParserRuleContext {
    _specifiers: DeclarationSpecifiersContext;
    _value: ExpressionContext;
    Identifier(): TerminalNode;
    declarationSpecifiers(): DeclarationSpecifiersContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class InitializationContext extends ParserRuleContext {
    _specifiers: DeclarationSpecifiersContext;
    Identifier(): TerminalNode;
    declarationSpecifiers(): DeclarationSpecifiersContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AssignmentOperatorContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AssignmentContext extends ParserRuleContext {
    _operator: AssignmentOperatorContext;
    _value: ExpressionContext;
    Identifier(): TerminalNode;
    assignmentOperator(): AssignmentOperatorContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class DecimalContext extends ExpressionContext {
    DECIMAL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class FractionContext extends ExpressionContext {
    FRACTION(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class IdentifierContext extends ExpressionContext {
    Identifier(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ParenthesesContext extends ExpressionContext {
    _inner: ExpressionContext;
    expression(): ExpressionContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class MultiplicationContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MUL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class DivisionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    DIV(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AdditionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ADD(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SubtractionContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    SUB(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ModularContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MOD(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class EqualContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQUALS(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class GreaterContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    GREATER(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class GreaterEqualContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    GREATER_EQUAL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LessContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LESS(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LessEqualContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LESS_EQUAL(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LogicalAndContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LOGICAL_AND(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LogicalOrContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LOGICAL_OR(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AssignmentExpressionContext extends ExpressionContext {
    assignment(): AssignmentContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ExpressionStatementContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class BlockItemContext extends ParserRuleContext {
    expressionStatement(): ExpressionStatementContext | undefined;
    declaration(): DeclarationContext | undefined;
    initialization(): InitializationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class BlockItemListContext extends ParserRuleContext {
    blockItem(): BlockItemContext[];
    blockItem(i: number): BlockItemContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ProgramContext extends ParserRuleContext {
    blockItemList(): BlockItemListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
