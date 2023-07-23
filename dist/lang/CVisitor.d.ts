import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by the `Decimal`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimal?: (ctx: DecimalContext) => Result;
    /**
     * Visit a parse tree produced by the `Fraction`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFraction?: (ctx: FractionContext) => Result;
    /**
     * Visit a parse tree produced by the `Char`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitChar?: (ctx: CharContext) => Result;
    /**
     * Visit a parse tree produced by the `String`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString?: (ctx: StringContext) => Result;
    /**
     * Visit a parse tree produced by the `Identifier`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `Application`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApplication?: (ctx: ApplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `Parentheses`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParentheses?: (ctx: ParenthesesContext) => Result;
    /**
     * Visit a parse tree produced by the `Access`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccess?: (ctx: AccessContext) => Result;
    /**
     * Visit a parse tree produced by the `VarAddress`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVarAddress?: (ctx: VarAddressContext) => Result;
    /**
     * Visit a parse tree produced by the `SizeOfOperator`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSizeOfOperator?: (ctx: SizeOfOperatorContext) => Result;
    /**
     * Visit a parse tree produced by the `Unary`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary?: (ctx: UnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `Additive`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditive?: (ctx: AdditiveContext) => Result;
    /**
     * Visit a parse tree produced by the `Multiplicative`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicative?: (ctx: MultiplicativeContext) => Result;
    /**
     * Visit a parse tree produced by the `Relational`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelational?: (ctx: RelationalContext) => Result;
    /**
     * Visit a parse tree produced by the `Equality`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEquality?: (ctx: EqualityContext) => Result;
    /**
     * Visit a parse tree produced by the `LogicalAnd`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalAnd?: (ctx: LogicalAndContext) => Result;
    /**
     * Visit a parse tree produced by the `LogicalOr`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOr?: (ctx: LogicalOrContext) => Result;
    /**
     * Visit a parse tree produced by the `PointerExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPointerExpression?: (ctx: PointerExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ArrayValueAssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayValueAssignmentExpression?: (ctx: ArrayValueAssignmentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `PointerValueAssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPointerValueAssignmentExpression?: (ctx: PointerValueAssignmentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `MallocExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMallocExpression?: (ctx: MallocExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `FreeExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFreeExpression?: (ctx: FreeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ArrayExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `CommentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentExpression?: (ctx: CommentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `LineCommentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLineCommentExpression?: (ctx: LineCommentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `IncludeExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIncludeExpression?: (ctx: IncludeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.typeSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.typeQualifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeQualifier?: (ctx: TypeQualifierContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.typeQualifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeQualifiers?: (ctx: TypeQualifiersContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.declarationSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.pointerPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPointerPart?: (ctx: PointerPartContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.pointer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPointer?: (ctx: PointerContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.initialization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitialization?: (ctx: InitializationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.initializationListPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitializationListPart?: (ctx: InitializationListPartContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.initializationList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitializationList?: (ctx: InitializationListContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.binaryAssignmentOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryAssignmentOperator?: (ctx: BinaryAssignmentOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.unaryAssignmentOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryAssignmentOperator?: (ctx: UnaryAssignmentOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.casting`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCasting?: (ctx: CastingContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.binaryAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryAssignment?: (ctx: BinaryAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.postfixAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPostfixAssignment?: (ctx: PostfixAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.prefixAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrefixAssignment?: (ctx: PrefixAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.assignmentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentList?: (ctx: AssignmentListContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.pointerValueAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPointerValueAssignment?: (ctx: PointerValueAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.array`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray?: (ctx: ArrayContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.arrayInitialization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayInitialization?: (ctx: ArrayInitializationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.arrayDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayDeclaration?: (ctx: ArrayDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.arrayAccess`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayAccess?: (ctx: ArrayAccessContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.arrayValueAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayValueAssignment?: (ctx: ArrayValueAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.malloc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMalloc?: (ctx: MallocContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.sizeOfArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSizeOfArgument?: (ctx: SizeOfArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.sizeof`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSizeof?: (ctx: SizeofContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.free`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFree?: (ctx: FreeContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.printHeap`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintHeap?: (ctx: PrintHeapContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.printStack`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintStack?: (ctx: PrintStackContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.printf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintf?: (ctx: PrintfContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.variableAccess`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableAccess?: (ctx: VariableAccessContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.conditionalStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.switchStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.labeledStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.breakStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakStatement?: (ctx: BreakStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.compoundStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.sequenceStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSequenceStatement?: (ctx: SequenceStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.switchBodyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBodyList?: (ctx: SwitchBodyListContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.switchBodyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBodyStatement?: (ctx: SwitchBodyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.returnStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.loopInitial`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopInitial?: (ctx: LoopInitialContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.forLoop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForLoop?: (ctx: ForLoopContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.doWhileLoop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDoWhileLoop?: (ctx: DoWhileLoopContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.whileLoop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileLoop?: (ctx: WhileLoopContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.parameterDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.functionDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.argumentExpressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgumentExpressionList?: (ctx: ArgumentExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.functionApplication`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionApplication?: (ctx: FunctionApplicationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
}
