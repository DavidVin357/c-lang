import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { DecimalContext } from "./CParser";
import { FractionContext } from "./CParser";
import { IdentifierContext } from "./CParser";
import { ParenthesesContext } from "./CParser";
import { MultiplicationContext } from "./CParser";
import { DivisionContext } from "./CParser";
import { AdditionContext } from "./CParser";
import { SubtractionContext } from "./CParser";
import { ModularContext } from "./CParser";
import { EqualContext } from "./CParser";
import { GreaterContext } from "./CParser";
import { GreaterEqualContext } from "./CParser";
import { LessContext } from "./CParser";
import { LessEqualContext } from "./CParser";
import { LogicalAndContext } from "./CParser";
import { LogicalOrContext } from "./CParser";
import { AssignmentExpressionContext } from "./CParser";
import { DeclarationSpecifiersContext } from "./CParser";
import { TypeSpecifierContext } from "./CParser";
import { TypeQualifierContext } from "./CParser";
import { DeclarationSpecifierContext } from "./CParser";
import { DeclarationContext } from "./CParser";
import { InitializationContext } from "./CParser";
import { AssignmentOperatorContext } from "./CParser";
import { AssignmentContext } from "./CParser";
import { ExpressionContext } from "./CParser";
import { ExpressionStatementContext } from "./CParser";
import { BlockItemContext } from "./CParser";
import { BlockItemListContext } from "./CParser";
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
     * Visit a parse tree produced by the `Identifier`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `Parentheses`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParentheses?: (ctx: ParenthesesContext) => Result;
    /**
     * Visit a parse tree produced by the `Multiplication`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplication?: (ctx: MultiplicationContext) => Result;
    /**
     * Visit a parse tree produced by the `Division`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDivision?: (ctx: DivisionContext) => Result;
    /**
     * Visit a parse tree produced by the `Addition`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddition?: (ctx: AdditionContext) => Result;
    /**
     * Visit a parse tree produced by the `Subtraction`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtraction?: (ctx: SubtractionContext) => Result;
    /**
     * Visit a parse tree produced by the `Modular`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModular?: (ctx: ModularContext) => Result;
    /**
     * Visit a parse tree produced by the `Equal`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqual?: (ctx: EqualContext) => Result;
    /**
     * Visit a parse tree produced by the `Greater`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreater?: (ctx: GreaterContext) => Result;
    /**
     * Visit a parse tree produced by the `GreaterEqual`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreaterEqual?: (ctx: GreaterEqualContext) => Result;
    /**
     * Visit a parse tree produced by the `Less`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLess?: (ctx: LessContext) => Result;
    /**
     * Visit a parse tree produced by the `LessEqual`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLessEqual?: (ctx: LessEqualContext) => Result;
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
     * Visit a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `CParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.declarationSpecifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => Result;
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
     * Visit a parse tree produced by `CParser.declarationSpecifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclarationSpecifier?: (ctx: DeclarationSpecifierContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclaration?: (ctx: DeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.initialization`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitialization?: (ctx: InitializationContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.assignmentOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.assignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment?: (ctx: AssignmentContext) => Result;
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
     * Visit a parse tree produced by `CParser.blockItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockItem?: (ctx: BlockItemContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.blockItemList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockItemList?: (ctx: BlockItemListContext) => Result;
    /**
     * Visit a parse tree produced by `CParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
}
