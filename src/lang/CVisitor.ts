// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DecimalContext } from "./CParser";
import { FractionContext } from "./CParser";
import { CharContext } from "./CParser";
import { IdentifierContext } from "./CParser";
import { PointerContext } from "./CParser";
import { ApplicationContext } from "./CParser";
import { ParenthesesContext } from "./CParser";
import { AdditiveContext } from "./CParser";
import { MultiplicativeContext } from "./CParser";
import { RelationalContext } from "./CParser";
import { EqualityContext } from "./CParser";
import { LogicalAndContext } from "./CParser";
import { LogicalOrContext } from "./CParser";
import { VarAddressContext } from "./CParser";
import { AssignmentExpressionContext } from "./CParser";
import { TypeSpecifierContext } from "./CParser";
import { TypeQualifierContext } from "./CParser";
import { TypeQualifiersContext } from "./CParser";
import { DeclarationSpecifierContext } from "./CParser";
import { DeclaratorContext } from "./CParser";
import { InitializationContext } from "./CParser";
import { DeclarationContext } from "./CParser";
import { AssignmentOperatorContext } from "./CParser";
import { AssignmentContext } from "./CParser";
import { ExpressionContext } from "./CParser";
import { ExpressionStatementContext } from "./CParser";
import { ReturnStatementContext } from "./CParser";
import { StatementContext } from "./CParser";
import { BlockItemListContext } from "./CParser";
import { CompoundStatementContext } from "./CParser";
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
	 * Visit a parse tree produced by the `Identifier`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `Pointer`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointer?: (ctx: PointerContext) => Result;

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
	 * Visit a parse tree produced by the `VarAddress`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAddress?: (ctx: VarAddressContext) => Result;

	/**
	 * Visit a parse tree produced by the `AssignmentExpression`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;

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
	 * Visit a parse tree produced by `CParser.declarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarator?: (ctx: DeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.initialization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitialization?: (ctx: InitializationContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

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
	 * Visit a parse tree produced by `CParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.blockItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockItemList?: (ctx: BlockItemListContext) => Result;

	/**
	 * Visit a parse tree produced by `CParser.compoundStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundStatement?: (ctx: CompoundStatementContext) => Result;

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

