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
    static readonly T__26 = 27;
    static readonly T__27 = 28;
    static readonly T__28 = 29;
    static readonly T__29 = 30;
    static readonly T__30 = 31;
    static readonly T__31 = 32;
    static readonly T__32 = 33;
    static readonly T__33 = 34;
    static readonly T__34 = 35;
    static readonly T__35 = 36;
    static readonly T__36 = 37;
    static readonly T__37 = 38;
    static readonly T__38 = 39;
    static readonly T__39 = 40;
    static readonly T__40 = 41;
    static readonly T__41 = 42;
    static readonly T__42 = 43;
    static readonly T__43 = 44;
    static readonly T__44 = 45;
    static readonly T__45 = 46;
    static readonly T__46 = 47;
    static readonly T__47 = 48;
    static readonly T__48 = 49;
    static readonly T__49 = 50;
    static readonly T__50 = 51;
    static readonly MUL = 52;
    static readonly DIV = 53;
    static readonly ADD = 54;
    static readonly SUB = 55;
    static readonly MOD = 56;
    static readonly LOGICAL_AND = 57;
    static readonly LOGICAL_OR = 58;
    static readonly EQUALS = 59;
    static readonly NOT_EQUALS = 60;
    static readonly LESS = 61;
    static readonly LESS_EQUAL = 62;
    static readonly GREATER = 63;
    static readonly GREATER_EQUAL = 64;
    static readonly UNARY_ADD = 65;
    static readonly UNARY_SUB = 66;
    static readonly NOT = 67;
    static readonly VAR_ADDRESS = 68;
    static readonly WHITESPACE = 69;
    static readonly DECIMAL = 70;
    static readonly FRACTION = 71;
    static readonly CHAR = 72;
    static readonly STRING = 73;
    static readonly COMMENT = 74;
    static readonly LINE_COMMENT = 75;
    static readonly INCLUDE = 76;
    static readonly Identifier = 77;
    static readonly RULE_typeSpecifier = 0;
    static readonly RULE_typeQualifier = 1;
    static readonly RULE_typeQualifiers = 2;
    static readonly RULE_declarationSpecifier = 3;
    static readonly RULE_pointerPart = 4;
    static readonly RULE_pointer = 5;
    static readonly RULE_initialization = 6;
    static readonly RULE_initializationListPart = 7;
    static readonly RULE_initializationList = 8;
    static readonly RULE_binaryAssignmentOperator = 9;
    static readonly RULE_unaryAssignmentOperator = 10;
    static readonly RULE_casting = 11;
    static readonly RULE_binaryAssignment = 12;
    static readonly RULE_postfixAssignment = 13;
    static readonly RULE_prefixAssignment = 14;
    static readonly RULE_assignment = 15;
    static readonly RULE_assignmentList = 16;
    static readonly RULE_pointerValueAssignment = 17;
    static readonly RULE_array = 18;
    static readonly RULE_arrayInitialization = 19;
    static readonly RULE_arrayDeclaration = 20;
    static readonly RULE_arrayAccess = 21;
    static readonly RULE_arrayValueAssignment = 22;
    static readonly RULE_malloc = 23;
    static readonly RULE_sizeOfArgument = 24;
    static readonly RULE_sizeof = 25;
    static readonly RULE_free = 26;
    static readonly RULE_printHeap = 27;
    static readonly RULE_printStack = 28;
    static readonly RULE_printf = 29;
    static readonly RULE_variableAccess = 30;
    static readonly RULE_expression = 31;
    static readonly RULE_expressionStatement = 32;
    static readonly RULE_conditionalStatement = 33;
    static readonly RULE_switchStatement = 34;
    static readonly RULE_labeledStatement = 35;
    static readonly RULE_breakStatement = 36;
    static readonly RULE_compoundStatement = 37;
    static readonly RULE_sequenceStatement = 38;
    static readonly RULE_switchBodyList = 39;
    static readonly RULE_switchBodyStatement = 40;
    static readonly RULE_returnStatement = 41;
    static readonly RULE_loopInitial = 42;
    static readonly RULE_forLoop = 43;
    static readonly RULE_doWhileLoop = 44;
    static readonly RULE_whileLoop = 45;
    static readonly RULE_statement = 46;
    static readonly RULE_parameterDeclaration = 47;
    static readonly RULE_parameterList = 48;
    static readonly RULE_functionDeclaration = 49;
    static readonly RULE_argumentExpressionList = 50;
    static readonly RULE_functionApplication = 51;
    static readonly RULE_program = 52;
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
    typeSpecifier(): TypeSpecifierContext;
    typeQualifier(): TypeQualifierContext;
    typeQualifiers(): TypeQualifiersContext;
    declarationSpecifier(): DeclarationSpecifierContext;
    pointerPart(): PointerPartContext;
    pointer(): PointerContext;
    initialization(): InitializationContext;
    initializationListPart(): InitializationListPartContext;
    initializationList(): InitializationListContext;
    binaryAssignmentOperator(): BinaryAssignmentOperatorContext;
    unaryAssignmentOperator(): UnaryAssignmentOperatorContext;
    casting(): CastingContext;
    binaryAssignment(): BinaryAssignmentContext;
    postfixAssignment(): PostfixAssignmentContext;
    prefixAssignment(): PrefixAssignmentContext;
    assignment(): AssignmentContext;
    assignmentList(): AssignmentListContext;
    pointerValueAssignment(): PointerValueAssignmentContext;
    array(): ArrayContext;
    arrayInitialization(): ArrayInitializationContext;
    arrayDeclaration(): ArrayDeclarationContext;
    arrayAccess(): ArrayAccessContext;
    arrayValueAssignment(): ArrayValueAssignmentContext;
    malloc(): MallocContext;
    sizeOfArgument(): SizeOfArgumentContext;
    sizeof(): SizeofContext;
    free(): FreeContext;
    printHeap(): PrintHeapContext;
    printStack(): PrintStackContext;
    printf(): PrintfContext;
    variableAccess(): VariableAccessContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    expressionStatement(): ExpressionStatementContext;
    conditionalStatement(): ConditionalStatementContext;
    switchStatement(): SwitchStatementContext;
    labeledStatement(): LabeledStatementContext;
    breakStatement(): BreakStatementContext;
    compoundStatement(): CompoundStatementContext;
    sequenceStatement(): SequenceStatementContext;
    switchBodyList(): SwitchBodyListContext;
    switchBodyStatement(): SwitchBodyStatementContext;
    returnStatement(): ReturnStatementContext;
    loopInitial(): LoopInitialContext;
    forLoop(): ForLoopContext;
    doWhileLoop(): DoWhileLoopContext;
    whileLoop(): WhileLoopContext;
    statement(): StatementContext;
    parameterDeclaration(): ParameterDeclarationContext;
    parameterList(): ParameterListContext;
    functionDeclaration(): FunctionDeclarationContext;
    argumentExpressionList(): ArgumentExpressionListContext;
    functionApplication(): FunctionApplicationContext;
    program(): ProgramContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class TypeSpecifierContext extends ParserRuleContext {
    MUL(): TerminalNode[];
    MUL(i: number): TerminalNode;
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
export declare class TypeQualifiersContext extends ParserRuleContext {
    typeQualifier(): TypeQualifierContext[];
    typeQualifier(i: number): TypeQualifierContext;
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
export declare class PointerPartContext extends ParserRuleContext {
    _inner: ExpressionContext;
    expression(): ExpressionContext | undefined;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PointerContext extends ParserRuleContext {
    MUL(): TerminalNode[];
    MUL(i: number): TerminalNode;
    pointerPart(): PointerPartContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class InitializationContext extends ParserRuleContext {
    _qualifiers: TypeQualifiersContext;
    _value: ExpressionContext;
    typeSpecifier(): TypeSpecifierContext;
    Identifier(): TerminalNode;
    typeQualifiers(): TypeQualifiersContext;
    expression(): ExpressionContext | undefined;
    casting(): CastingContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class InitializationListPartContext extends ParserRuleContext {
    _value: ExpressionContext;
    Identifier(): TerminalNode;
    expression(): ExpressionContext | undefined;
    casting(): CastingContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class InitializationListContext extends ParserRuleContext {
    _qualifiers: TypeQualifiersContext;
    typeSpecifier(): TypeSpecifierContext;
    initializationListPart(): InitializationListPartContext[];
    initializationListPart(i: number): InitializationListPartContext;
    typeQualifiers(): TypeQualifiersContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class BinaryAssignmentOperatorContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class UnaryAssignmentOperatorContext extends ParserRuleContext {
    UNARY_ADD(): TerminalNode | undefined;
    UNARY_SUB(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class CastingContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class BinaryAssignmentContext extends ParserRuleContext {
    _operator: BinaryAssignmentOperatorContext;
    _value: ExpressionContext;
    Identifier(): TerminalNode;
    binaryAssignmentOperator(): BinaryAssignmentOperatorContext;
    expression(): ExpressionContext;
    casting(): CastingContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PostfixAssignmentContext extends ParserRuleContext {
    _operator: UnaryAssignmentOperatorContext;
    Identifier(): TerminalNode;
    unaryAssignmentOperator(): UnaryAssignmentOperatorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PrefixAssignmentContext extends ParserRuleContext {
    _operator: UnaryAssignmentOperatorContext;
    Identifier(): TerminalNode;
    unaryAssignmentOperator(): UnaryAssignmentOperatorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AssignmentContext extends ParserRuleContext {
    binaryAssignment(): BinaryAssignmentContext | undefined;
    prefixAssignment(): PrefixAssignmentContext | undefined;
    postfixAssignment(): PostfixAssignmentContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AssignmentListContext extends ParserRuleContext {
    assignment(): AssignmentContext[];
    assignment(i: number): AssignmentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PointerValueAssignmentContext extends ParserRuleContext {
    _operator: BinaryAssignmentOperatorContext;
    _value: ExpressionContext;
    pointer(): PointerContext;
    binaryAssignmentOperator(): BinaryAssignmentOperatorContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayInitializationContext extends ParserRuleContext {
    _qualifiers: TypeQualifiersContext;
    _value: ExpressionContext;
    typeSpecifier(): TypeSpecifierContext;
    Identifier(): TerminalNode;
    typeQualifiers(): TypeQualifiersContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayDeclarationContext extends ParserRuleContext {
    _qualifiers: TypeQualifiersContext;
    _size: ExpressionContext;
    typeSpecifier(): TypeSpecifierContext;
    Identifier(): TerminalNode;
    typeQualifiers(): TypeQualifiersContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayAccessContext extends ParserRuleContext {
    _name: Token;
    _index: ExpressionContext;
    Identifier(): TerminalNode;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayValueAssignmentContext extends ParserRuleContext {
    _operator: BinaryAssignmentOperatorContext;
    _value: ExpressionContext;
    arrayAccess(): ArrayAccessContext;
    binaryAssignmentOperator(): BinaryAssignmentOperatorContext;
    expression(): ExpressionContext;
    casting(): CastingContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class MallocContext extends ParserRuleContext {
    _size: ExpressionContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SizeOfArgumentContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    typeSpecifier(): TypeSpecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SizeofContext extends ParserRuleContext {
    _arg: SizeOfArgumentContext;
    sizeOfArgument(): SizeOfArgumentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class FreeContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PrintHeapContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PrintStackContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PrintfContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class VariableAccessContext extends ParserRuleContext {
    _index: ExpressionContext;
    Identifier(): TerminalNode;
    expression(): ExpressionContext | undefined;
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
export declare class CharContext extends ExpressionContext {
    CHAR(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class StringContext extends ExpressionContext {
    STRING(): TerminalNode;
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
export declare class ApplicationContext extends ExpressionContext {
    functionApplication(): FunctionApplicationContext;
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
export declare class AccessContext extends ExpressionContext {
    arrayAccess(): ArrayAccessContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class VarAddressContext extends ExpressionContext {
    _operator: Token;
    _right: VariableAccessContext;
    VAR_ADDRESS(): TerminalNode;
    variableAccess(): VariableAccessContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SizeOfOperatorContext extends ExpressionContext {
    sizeof(): SizeofContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class UnaryContext extends ExpressionContext {
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext;
    NOT(): TerminalNode | undefined;
    SUB(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AdditiveContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ADD(): TerminalNode | undefined;
    SUB(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class MultiplicativeContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    MUL(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class RelationalContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    GREATER(): TerminalNode | undefined;
    GREATER_EQUAL(): TerminalNode | undefined;
    LESS(): TerminalNode | undefined;
    LESS_EQUAL(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class EqualityContext extends ExpressionContext {
    _left: ExpressionContext;
    _operator: Token;
    _right: ExpressionContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQUALS(): TerminalNode | undefined;
    NOT_EQUALS(): TerminalNode | undefined;
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
export declare class PointerExpressionContext extends ExpressionContext {
    pointer(): PointerContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class AssignmentExpressionContext extends ExpressionContext {
    assignmentList(): AssignmentListContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayValueAssignmentExpressionContext extends ExpressionContext {
    arrayValueAssignment(): ArrayValueAssignmentContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class PointerValueAssignmentExpressionContext extends ExpressionContext {
    pointerValueAssignment(): PointerValueAssignmentContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class MallocExpressionContext extends ExpressionContext {
    malloc(): MallocContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class FreeExpressionContext extends ExpressionContext {
    free(): FreeContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArrayExpressionContext extends ExpressionContext {
    array(): ArrayContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class CommentExpressionContext extends ExpressionContext {
    COMMENT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LineCommentExpressionContext extends ExpressionContext {
    LINE_COMMENT(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class IncludeExpressionContext extends ExpressionContext {
    INCLUDE(): TerminalNode;
    constructor(ctx: ExpressionContext);
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ExpressionStatementContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ConditionalStatementContext extends ParserRuleContext {
    _condition: ExpressionContext;
    _truebody: CompoundStatementContext;
    _falsebody: CompoundStatementContext;
    expression(): ExpressionContext;
    compoundStatement(): CompoundStatementContext[];
    compoundStatement(i: number): CompoundStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SwitchStatementContext extends ParserRuleContext {
    _condition: ExpressionContext;
    _body: SwitchBodyStatementContext;
    expression(): ExpressionContext;
    switchBodyStatement(): SwitchBodyStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LabeledStatementContext extends ParserRuleContext {
    _condition: ExpressionContext;
    _body: StatementContext;
    expression(): ExpressionContext | undefined;
    statement(): StatementContext;
    breakStatement(): BreakStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class BreakStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class CompoundStatementContext extends ParserRuleContext {
    sequenceStatement(): SequenceStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SequenceStatementContext extends ParserRuleContext {
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SwitchBodyListContext extends ParserRuleContext {
    labeledStatement(): LabeledStatementContext[];
    labeledStatement(i: number): LabeledStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class SwitchBodyStatementContext extends ParserRuleContext {
    switchBodyList(): SwitchBodyListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ReturnStatementContext extends ParserRuleContext {
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class LoopInitialContext extends ParserRuleContext {
    initializationList(): InitializationListContext | undefined;
    expressionStatement(): ExpressionStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ForLoopContext extends ParserRuleContext {
    _initial: LoopInitialContext;
    _condition: ExpressionContext;
    _action: ExpressionContext;
    _body: CompoundStatementContext;
    loopInitial(): LoopInitialContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    compoundStatement(): CompoundStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class DoWhileLoopContext extends ParserRuleContext {
    _body: CompoundStatementContext;
    _condition: ExpressionContext;
    compoundStatement(): CompoundStatementContext;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class WhileLoopContext extends ParserRuleContext {
    _condition: ExpressionContext;
    _body: CompoundStatementContext;
    expression(): ExpressionContext;
    compoundStatement(): CompoundStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class StatementContext extends ParserRuleContext {
    expressionStatement(): ExpressionStatementContext | undefined;
    arrayInitialization(): ArrayInitializationContext | undefined;
    initialization(): InitializationContext | undefined;
    initializationList(): InitializationListContext | undefined;
    conditionalStatement(): ConditionalStatementContext | undefined;
    compoundStatement(): CompoundStatementContext | undefined;
    switchStatement(): SwitchStatementContext | undefined;
    labeledStatement(): LabeledStatementContext | undefined;
    switchBodyStatement(): SwitchBodyStatementContext | undefined;
    functionDeclaration(): FunctionDeclarationContext | undefined;
    returnStatement(): ReturnStatementContext | undefined;
    breakStatement(): BreakStatementContext | undefined;
    arrayDeclaration(): ArrayDeclarationContext | undefined;
    forLoop(): ForLoopContext | undefined;
    doWhileLoop(): DoWhileLoopContext | undefined;
    whileLoop(): WhileLoopContext | undefined;
    printHeap(): PrintHeapContext | undefined;
    printStack(): PrintStackContext | undefined;
    printf(): PrintfContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ParameterDeclarationContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ParameterListContext extends ParserRuleContext {
    parameterDeclaration(): ParameterDeclarationContext[];
    parameterDeclaration(i: number): ParameterDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class FunctionDeclarationContext extends ParserRuleContext {
    typeSpecifier(): TypeSpecifierContext;
    Identifier(): TerminalNode;
    parameterList(): ParameterListContext;
    compoundStatement(): CompoundStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ArgumentExpressionListContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class FunctionApplicationContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    argumentExpressionList(): ArgumentExpressionListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
export declare class ProgramContext extends ParserRuleContext {
    functionDeclaration(): FunctionDeclarationContext[];
    functionDeclaration(i: number): FunctionDeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: CListener): void;
    exitRule(listener: CListener): void;
    accept<Result>(visitor: CVisitor<Result>): Result;
}
