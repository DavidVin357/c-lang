import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { DecimalContext } from "./CParser";
import { FractionContext } from "./CParser";
import { CharContext } from "./CParser";
import { StringContext } from "./CParser";
import { IdentifierContext } from "./CParser";
import { ApplicationContext } from "./CParser";
import { ParenthesesContext } from "./CParser";
import { AccessContext } from "./CParser";
import { VarAddressContext } from "./CParser";
import { SizeOfOperatorContext } from "./CParser";
import { UnaryContext } from "./CParser";
import { AdditiveContext } from "./CParser";
import { MultiplicativeContext } from "./CParser";
import { RelationalContext } from "./CParser";
import { EqualityContext } from "./CParser";
import { LogicalAndContext } from "./CParser";
import { LogicalOrContext } from "./CParser";
import { PointerExpressionContext } from "./CParser";
import { AssignmentExpressionContext } from "./CParser";
import { ArrayValueAssignmentExpressionContext } from "./CParser";
import { PointerValueAssignmentExpressionContext } from "./CParser";
import { MallocExpressionContext } from "./CParser";
import { FreeExpressionContext } from "./CParser";
import { ArrayExpressionContext } from "./CParser";
import { CommentExpressionContext } from "./CParser";
import { LineCommentExpressionContext } from "./CParser";
import { IncludeExpressionContext } from "./CParser";
import { TypeSpecifierContext } from "./CParser";
import { TypeQualifierContext } from "./CParser";
import { TypeQualifiersContext } from "./CParser";
import { DeclarationSpecifierContext } from "./CParser";
import { PointerPartContext } from "./CParser";
import { PointerContext } from "./CParser";
import { InitializationContext } from "./CParser";
import { InitializationListPartContext } from "./CParser";
import { InitializationListContext } from "./CParser";
import { BinaryAssignmentOperatorContext } from "./CParser";
import { UnaryAssignmentOperatorContext } from "./CParser";
import { CastingContext } from "./CParser";
import { BinaryAssignmentContext } from "./CParser";
import { PostfixAssignmentContext } from "./CParser";
import { PrefixAssignmentContext } from "./CParser";
import { AssignmentContext } from "./CParser";
import { AssignmentListContext } from "./CParser";
import { PointerValueAssignmentContext } from "./CParser";
import { ArrayContext } from "./CParser";
import { ArrayInitializationContext } from "./CParser";
import { ArrayDeclarationContext } from "./CParser";
import { ArrayAccessContext } from "./CParser";
import { ArrayValueAssignmentContext } from "./CParser";
import { MallocContext } from "./CParser";
import { SizeOfArgumentContext } from "./CParser";
import { SizeofContext } from "./CParser";
import { FreeContext } from "./CParser";
import { PrintHeapContext } from "./CParser";
import { PrintStackContext } from "./CParser";
import { PrintfContext } from "./CParser";
import { VariableAccessContext } from "./CParser";
import { ExpressionContext } from "./CParser";
import { ExpressionStatementContext } from "./CParser";
import { ConditionalStatementContext } from "./CParser";
import { SwitchStatementContext } from "./CParser";
import { LabeledStatementContext } from "./CParser";
import { BreakStatementContext } from "./CParser";
import { CompoundStatementContext } from "./CParser";
import { SequenceStatementContext } from "./CParser";
import { SwitchBodyListContext } from "./CParser";
import { SwitchBodyStatementContext } from "./CParser";
import { ReturnStatementContext } from "./CParser";
import { LoopInitialContext } from "./CParser";
import { ForLoopContext } from "./CParser";
import { DoWhileLoopContext } from "./CParser";
import { WhileLoopContext } from "./CParser";
import { StatementContext } from "./CParser";
import { ParameterDeclarationContext } from "./CParser";
import { ParameterListContext } from "./CParser";
import { FunctionDeclarationContext } from "./CParser";
import { ArgumentExpressionListContext } from "./CParser";
import { FunctionApplicationContext } from "./CParser";
import { ProgramContext } from "./CParser";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `CParser`.
 */
export interface CListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by the `Decimal`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterDecimal?: (ctx: DecimalContext) => void;
    /**
     * Exit a parse tree produced by the `Decimal`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitDecimal?: (ctx: DecimalContext) => void;
    /**
     * Enter a parse tree produced by the `Fraction`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterFraction?: (ctx: FractionContext) => void;
    /**
     * Exit a parse tree produced by the `Fraction`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitFraction?: (ctx: FractionContext) => void;
    /**
     * Enter a parse tree produced by the `Char`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterChar?: (ctx: CharContext) => void;
    /**
     * Exit a parse tree produced by the `Char`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitChar?: (ctx: CharContext) => void;
    /**
     * Enter a parse tree produced by the `String`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterString?: (ctx: StringContext) => void;
    /**
     * Exit a parse tree produced by the `String`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitString?: (ctx: StringContext) => void;
    /**
     * Enter a parse tree produced by the `Identifier`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `Identifier`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `Application`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterApplication?: (ctx: ApplicationContext) => void;
    /**
     * Exit a parse tree produced by the `Application`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitApplication?: (ctx: ApplicationContext) => void;
    /**
     * Enter a parse tree produced by the `Parentheses`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterParentheses?: (ctx: ParenthesesContext) => void;
    /**
     * Exit a parse tree produced by the `Parentheses`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitParentheses?: (ctx: ParenthesesContext) => void;
    /**
     * Enter a parse tree produced by the `Access`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterAccess?: (ctx: AccessContext) => void;
    /**
     * Exit a parse tree produced by the `Access`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitAccess?: (ctx: AccessContext) => void;
    /**
     * Enter a parse tree produced by the `VarAddress`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterVarAddress?: (ctx: VarAddressContext) => void;
    /**
     * Exit a parse tree produced by the `VarAddress`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitVarAddress?: (ctx: VarAddressContext) => void;
    /**
     * Enter a parse tree produced by the `SizeOfOperator`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterSizeOfOperator?: (ctx: SizeOfOperatorContext) => void;
    /**
     * Exit a parse tree produced by the `SizeOfOperator`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitSizeOfOperator?: (ctx: SizeOfOperatorContext) => void;
    /**
     * Enter a parse tree produced by the `Unary`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterUnary?: (ctx: UnaryContext) => void;
    /**
     * Exit a parse tree produced by the `Unary`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitUnary?: (ctx: UnaryContext) => void;
    /**
     * Enter a parse tree produced by the `Additive`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterAdditive?: (ctx: AdditiveContext) => void;
    /**
     * Exit a parse tree produced by the `Additive`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitAdditive?: (ctx: AdditiveContext) => void;
    /**
     * Enter a parse tree produced by the `Multiplicative`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterMultiplicative?: (ctx: MultiplicativeContext) => void;
    /**
     * Exit a parse tree produced by the `Multiplicative`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitMultiplicative?: (ctx: MultiplicativeContext) => void;
    /**
     * Enter a parse tree produced by the `Relational`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterRelational?: (ctx: RelationalContext) => void;
    /**
     * Exit a parse tree produced by the `Relational`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitRelational?: (ctx: RelationalContext) => void;
    /**
     * Enter a parse tree produced by the `Equality`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterEquality?: (ctx: EqualityContext) => void;
    /**
     * Exit a parse tree produced by the `Equality`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitEquality?: (ctx: EqualityContext) => void;
    /**
     * Enter a parse tree produced by the `LogicalAnd`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Exit a parse tree produced by the `LogicalAnd`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Enter a parse tree produced by the `LogicalOr`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Exit a parse tree produced by the `LogicalOr`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Enter a parse tree produced by the `PointerExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterPointerExpression?: (ctx: PointerExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `PointerExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitPointerExpression?: (ctx: PointerExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ArrayValueAssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterArrayValueAssignmentExpression?: (ctx: ArrayValueAssignmentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ArrayValueAssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitArrayValueAssignmentExpression?: (ctx: ArrayValueAssignmentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `PointerValueAssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterPointerValueAssignmentExpression?: (ctx: PointerValueAssignmentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `PointerValueAssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitPointerValueAssignmentExpression?: (ctx: PointerValueAssignmentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `MallocExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterMallocExpression?: (ctx: MallocExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `MallocExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitMallocExpression?: (ctx: MallocExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `FreeExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterFreeExpression?: (ctx: FreeExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `FreeExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitFreeExpression?: (ctx: FreeExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ArrayExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ArrayExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `CommentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterCommentExpression?: (ctx: CommentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `CommentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitCommentExpression?: (ctx: CommentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `LineCommentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterLineCommentExpression?: (ctx: LineCommentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `LineCommentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitLineCommentExpression?: (ctx: LineCommentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `IncludeExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    enterIncludeExpression?: (ctx: IncludeExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `IncludeExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     */
    exitIncludeExpression?: (ctx: IncludeExpressionContext) => void;
    /**
     * Enter a parse tree produced by `CParser.typeSpecifier`.
     * @param ctx the parse tree
     */
    enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
    /**
     * Exit a parse tree produced by `CParser.typeSpecifier`.
     * @param ctx the parse tree
     */
    exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
    /**
     * Enter a parse tree produced by `CParser.typeQualifier`.
     * @param ctx the parse tree
     */
    enterTypeQualifier?: (ctx: TypeQualifierContext) => void;
    /**
     * Exit a parse tree produced by `CParser.typeQualifier`.
     * @param ctx the parse tree
     */
    exitTypeQualifier?: (ctx: TypeQualifierContext) => void;
    /**
     * Enter a parse tree produced by `CParser.typeQualifiers`.
     * @param ctx the parse tree
     */
    enterTypeQualifiers?: (ctx: TypeQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `CParser.typeQualifiers`.
     * @param ctx the parse tree
     */
    exitTypeQualifiers?: (ctx: TypeQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `CParser.declarationSpecifier`.
     * @param ctx the parse tree
     */
    enterDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => void;
    /**
     * Exit a parse tree produced by `CParser.declarationSpecifier`.
     * @param ctx the parse tree
     */
    exitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => void;
    /**
     * Enter a parse tree produced by `CParser.pointerPart`.
     * @param ctx the parse tree
     */
    enterPointerPart?: (ctx: PointerPartContext) => void;
    /**
     * Exit a parse tree produced by `CParser.pointerPart`.
     * @param ctx the parse tree
     */
    exitPointerPart?: (ctx: PointerPartContext) => void;
    /**
     * Enter a parse tree produced by `CParser.pointer`.
     * @param ctx the parse tree
     */
    enterPointer?: (ctx: PointerContext) => void;
    /**
     * Exit a parse tree produced by `CParser.pointer`.
     * @param ctx the parse tree
     */
    exitPointer?: (ctx: PointerContext) => void;
    /**
     * Enter a parse tree produced by `CParser.initialization`.
     * @param ctx the parse tree
     */
    enterInitialization?: (ctx: InitializationContext) => void;
    /**
     * Exit a parse tree produced by `CParser.initialization`.
     * @param ctx the parse tree
     */
    exitInitialization?: (ctx: InitializationContext) => void;
    /**
     * Enter a parse tree produced by `CParser.initializationListPart`.
     * @param ctx the parse tree
     */
    enterInitializationListPart?: (ctx: InitializationListPartContext) => void;
    /**
     * Exit a parse tree produced by `CParser.initializationListPart`.
     * @param ctx the parse tree
     */
    exitInitializationListPart?: (ctx: InitializationListPartContext) => void;
    /**
     * Enter a parse tree produced by `CParser.initializationList`.
     * @param ctx the parse tree
     */
    enterInitializationList?: (ctx: InitializationListContext) => void;
    /**
     * Exit a parse tree produced by `CParser.initializationList`.
     * @param ctx the parse tree
     */
    exitInitializationList?: (ctx: InitializationListContext) => void;
    /**
     * Enter a parse tree produced by `CParser.binaryAssignmentOperator`.
     * @param ctx the parse tree
     */
    enterBinaryAssignmentOperator?: (ctx: BinaryAssignmentOperatorContext) => void;
    /**
     * Exit a parse tree produced by `CParser.binaryAssignmentOperator`.
     * @param ctx the parse tree
     */
    exitBinaryAssignmentOperator?: (ctx: BinaryAssignmentOperatorContext) => void;
    /**
     * Enter a parse tree produced by `CParser.unaryAssignmentOperator`.
     * @param ctx the parse tree
     */
    enterUnaryAssignmentOperator?: (ctx: UnaryAssignmentOperatorContext) => void;
    /**
     * Exit a parse tree produced by `CParser.unaryAssignmentOperator`.
     * @param ctx the parse tree
     */
    exitUnaryAssignmentOperator?: (ctx: UnaryAssignmentOperatorContext) => void;
    /**
     * Enter a parse tree produced by `CParser.casting`.
     * @param ctx the parse tree
     */
    enterCasting?: (ctx: CastingContext) => void;
    /**
     * Exit a parse tree produced by `CParser.casting`.
     * @param ctx the parse tree
     */
    exitCasting?: (ctx: CastingContext) => void;
    /**
     * Enter a parse tree produced by `CParser.binaryAssignment`.
     * @param ctx the parse tree
     */
    enterBinaryAssignment?: (ctx: BinaryAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.binaryAssignment`.
     * @param ctx the parse tree
     */
    exitBinaryAssignment?: (ctx: BinaryAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.postfixAssignment`.
     * @param ctx the parse tree
     */
    enterPostfixAssignment?: (ctx: PostfixAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.postfixAssignment`.
     * @param ctx the parse tree
     */
    exitPostfixAssignment?: (ctx: PostfixAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.prefixAssignment`.
     * @param ctx the parse tree
     */
    enterPrefixAssignment?: (ctx: PrefixAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.prefixAssignment`.
     * @param ctx the parse tree
     */
    exitPrefixAssignment?: (ctx: PrefixAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.assignment`.
     * @param ctx the parse tree
     */
    enterAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.assignment`.
     * @param ctx the parse tree
     */
    exitAssignment?: (ctx: AssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.assignmentList`.
     * @param ctx the parse tree
     */
    enterAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Exit a parse tree produced by `CParser.assignmentList`.
     * @param ctx the parse tree
     */
    exitAssignmentList?: (ctx: AssignmentListContext) => void;
    /**
     * Enter a parse tree produced by `CParser.pointerValueAssignment`.
     * @param ctx the parse tree
     */
    enterPointerValueAssignment?: (ctx: PointerValueAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.pointerValueAssignment`.
     * @param ctx the parse tree
     */
    exitPointerValueAssignment?: (ctx: PointerValueAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.array`.
     * @param ctx the parse tree
     */
    enterArray?: (ctx: ArrayContext) => void;
    /**
     * Exit a parse tree produced by `CParser.array`.
     * @param ctx the parse tree
     */
    exitArray?: (ctx: ArrayContext) => void;
    /**
     * Enter a parse tree produced by `CParser.arrayInitialization`.
     * @param ctx the parse tree
     */
    enterArrayInitialization?: (ctx: ArrayInitializationContext) => void;
    /**
     * Exit a parse tree produced by `CParser.arrayInitialization`.
     * @param ctx the parse tree
     */
    exitArrayInitialization?: (ctx: ArrayInitializationContext) => void;
    /**
     * Enter a parse tree produced by `CParser.arrayDeclaration`.
     * @param ctx the parse tree
     */
    enterArrayDeclaration?: (ctx: ArrayDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `CParser.arrayDeclaration`.
     * @param ctx the parse tree
     */
    exitArrayDeclaration?: (ctx: ArrayDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `CParser.arrayAccess`.
     * @param ctx the parse tree
     */
    enterArrayAccess?: (ctx: ArrayAccessContext) => void;
    /**
     * Exit a parse tree produced by `CParser.arrayAccess`.
     * @param ctx the parse tree
     */
    exitArrayAccess?: (ctx: ArrayAccessContext) => void;
    /**
     * Enter a parse tree produced by `CParser.arrayValueAssignment`.
     * @param ctx the parse tree
     */
    enterArrayValueAssignment?: (ctx: ArrayValueAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.arrayValueAssignment`.
     * @param ctx the parse tree
     */
    exitArrayValueAssignment?: (ctx: ArrayValueAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.malloc`.
     * @param ctx the parse tree
     */
    enterMalloc?: (ctx: MallocContext) => void;
    /**
     * Exit a parse tree produced by `CParser.malloc`.
     * @param ctx the parse tree
     */
    exitMalloc?: (ctx: MallocContext) => void;
    /**
     * Enter a parse tree produced by `CParser.sizeOfArgument`.
     * @param ctx the parse tree
     */
    enterSizeOfArgument?: (ctx: SizeOfArgumentContext) => void;
    /**
     * Exit a parse tree produced by `CParser.sizeOfArgument`.
     * @param ctx the parse tree
     */
    exitSizeOfArgument?: (ctx: SizeOfArgumentContext) => void;
    /**
     * Enter a parse tree produced by `CParser.sizeof`.
     * @param ctx the parse tree
     */
    enterSizeof?: (ctx: SizeofContext) => void;
    /**
     * Exit a parse tree produced by `CParser.sizeof`.
     * @param ctx the parse tree
     */
    exitSizeof?: (ctx: SizeofContext) => void;
    /**
     * Enter a parse tree produced by `CParser.free`.
     * @param ctx the parse tree
     */
    enterFree?: (ctx: FreeContext) => void;
    /**
     * Exit a parse tree produced by `CParser.free`.
     * @param ctx the parse tree
     */
    exitFree?: (ctx: FreeContext) => void;
    /**
     * Enter a parse tree produced by `CParser.printHeap`.
     * @param ctx the parse tree
     */
    enterPrintHeap?: (ctx: PrintHeapContext) => void;
    /**
     * Exit a parse tree produced by `CParser.printHeap`.
     * @param ctx the parse tree
     */
    exitPrintHeap?: (ctx: PrintHeapContext) => void;
    /**
     * Enter a parse tree produced by `CParser.printStack`.
     * @param ctx the parse tree
     */
    enterPrintStack?: (ctx: PrintStackContext) => void;
    /**
     * Exit a parse tree produced by `CParser.printStack`.
     * @param ctx the parse tree
     */
    exitPrintStack?: (ctx: PrintStackContext) => void;
    /**
     * Enter a parse tree produced by `CParser.printf`.
     * @param ctx the parse tree
     */
    enterPrintf?: (ctx: PrintfContext) => void;
    /**
     * Exit a parse tree produced by `CParser.printf`.
     * @param ctx the parse tree
     */
    exitPrintf?: (ctx: PrintfContext) => void;
    /**
     * Enter a parse tree produced by `CParser.variableAccess`.
     * @param ctx the parse tree
     */
    enterVariableAccess?: (ctx: VariableAccessContext) => void;
    /**
     * Exit a parse tree produced by `CParser.variableAccess`.
     * @param ctx the parse tree
     */
    exitVariableAccess?: (ctx: VariableAccessContext) => void;
    /**
     * Enter a parse tree produced by `CParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `CParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `CParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.conditionalStatement`.
     * @param ctx the parse tree
     */
    enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.conditionalStatement`.
     * @param ctx the parse tree
     */
    exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.switchStatement`.
     * @param ctx the parse tree
     */
    enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.switchStatement`.
     * @param ctx the parse tree
     */
    exitSwitchStatement?: (ctx: SwitchStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.labeledStatement`.
     * @param ctx the parse tree
     */
    enterLabeledStatement?: (ctx: LabeledStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.labeledStatement`.
     * @param ctx the parse tree
     */
    exitLabeledStatement?: (ctx: LabeledStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.breakStatement`.
     * @param ctx the parse tree
     */
    enterBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.breakStatement`.
     * @param ctx the parse tree
     */
    exitBreakStatement?: (ctx: BreakStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.compoundStatement`.
     * @param ctx the parse tree
     */
    enterCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.compoundStatement`.
     * @param ctx the parse tree
     */
    exitCompoundStatement?: (ctx: CompoundStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.sequenceStatement`.
     * @param ctx the parse tree
     */
    enterSequenceStatement?: (ctx: SequenceStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.sequenceStatement`.
     * @param ctx the parse tree
     */
    exitSequenceStatement?: (ctx: SequenceStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.switchBodyList`.
     * @param ctx the parse tree
     */
    enterSwitchBodyList?: (ctx: SwitchBodyListContext) => void;
    /**
     * Exit a parse tree produced by `CParser.switchBodyList`.
     * @param ctx the parse tree
     */
    exitSwitchBodyList?: (ctx: SwitchBodyListContext) => void;
    /**
     * Enter a parse tree produced by `CParser.switchBodyStatement`.
     * @param ctx the parse tree
     */
    enterSwitchBodyStatement?: (ctx: SwitchBodyStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.switchBodyStatement`.
     * @param ctx the parse tree
     */
    exitSwitchBodyStatement?: (ctx: SwitchBodyStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.returnStatement`.
     * @param ctx the parse tree
     */
    enterReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.returnStatement`.
     * @param ctx the parse tree
     */
    exitReturnStatement?: (ctx: ReturnStatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.loopInitial`.
     * @param ctx the parse tree
     */
    enterLoopInitial?: (ctx: LoopInitialContext) => void;
    /**
     * Exit a parse tree produced by `CParser.loopInitial`.
     * @param ctx the parse tree
     */
    exitLoopInitial?: (ctx: LoopInitialContext) => void;
    /**
     * Enter a parse tree produced by `CParser.forLoop`.
     * @param ctx the parse tree
     */
    enterForLoop?: (ctx: ForLoopContext) => void;
    /**
     * Exit a parse tree produced by `CParser.forLoop`.
     * @param ctx the parse tree
     */
    exitForLoop?: (ctx: ForLoopContext) => void;
    /**
     * Enter a parse tree produced by `CParser.doWhileLoop`.
     * @param ctx the parse tree
     */
    enterDoWhileLoop?: (ctx: DoWhileLoopContext) => void;
    /**
     * Exit a parse tree produced by `CParser.doWhileLoop`.
     * @param ctx the parse tree
     */
    exitDoWhileLoop?: (ctx: DoWhileLoopContext) => void;
    /**
     * Enter a parse tree produced by `CParser.whileLoop`.
     * @param ctx the parse tree
     */
    enterWhileLoop?: (ctx: WhileLoopContext) => void;
    /**
     * Exit a parse tree produced by `CParser.whileLoop`.
     * @param ctx the parse tree
     */
    exitWhileLoop?: (ctx: WhileLoopContext) => void;
    /**
     * Enter a parse tree produced by `CParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `CParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `CParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    enterParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `CParser.parameterDeclaration`.
     * @param ctx the parse tree
     */
    exitParameterDeclaration?: (ctx: ParameterDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `CParser.parameterList`.
     * @param ctx the parse tree
     */
    enterParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Exit a parse tree produced by `CParser.parameterList`.
     * @param ctx the parse tree
     */
    exitParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Enter a parse tree produced by `CParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `CParser.functionDeclaration`.
     * @param ctx the parse tree
     */
    exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `CParser.argumentExpressionList`.
     * @param ctx the parse tree
     */
    enterArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `CParser.argumentExpressionList`.
     * @param ctx the parse tree
     */
    exitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `CParser.functionApplication`.
     * @param ctx the parse tree
     */
    enterFunctionApplication?: (ctx: FunctionApplicationContext) => void;
    /**
     * Exit a parse tree produced by `CParser.functionApplication`.
     * @param ctx the parse tree
     */
    exitFunctionApplication?: (ctx: FunctionApplicationContext) => void;
    /**
     * Enter a parse tree produced by `CParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `CParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
}
