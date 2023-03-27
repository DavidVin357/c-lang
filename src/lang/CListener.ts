// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DecimalContext } from "./CParser";
import { FractionContext } from "./CParser";
import { IdentifierContext } from "./CParser";
import { ApplicationContext } from "./CParser";
import { ParenthesesContext } from "./CParser";
import { AdditiveContext } from "./CParser";
import { MultiplicativeContext } from "./CParser";
import { RelationalContext } from "./CParser";
import { EqualityContext } from "./CParser";
import { LogicalAndContext } from "./CParser";
import { LogicalOrContext } from "./CParser";
import { AssignmentExpressionContext } from "./CParser";
import { DeclarationSpecifiersContext } from "./CParser";
import { TypeSpecifierContext } from "./CParser";
import { TypeQualifierContext } from "./CParser";
import { DeclarationSpecifierContext } from "./CParser";
import { DeclaratorContext } from "./CParser";
import { InitializationContext } from "./CParser";
import { DeclarationContext } from "./CParser";
import { AssignmentOperatorContext } from "./CParser";
import { AssignmentContext } from "./CParser";
import { ExpressionContext } from "./CParser";
import { ExpressionStatementContext } from "./CParser";
import { StatementContext } from "./CParser";
import { BlockItemListContext } from "./CParser";
import { CompoundStatementContext } from "./CParser";
import { ParameterDeclarationContext } from "./CParser";
import { ParameterListContext } from "./CParser";
import { FunctionDeclarationContext } from "./CParser";
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
	 * Enter a parse tree produced by `CParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 */
	enterDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.declarationSpecifiers`.
	 * @param ctx the parse tree
	 */
	exitDeclarationSpecifiers?: (ctx: DeclarationSpecifiersContext) => void;

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
	 * Enter a parse tree produced by `CParser.declarator`.
	 * @param ctx the parse tree
	 */
	enterDeclarator?: (ctx: DeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.declarator`.
	 * @param ctx the parse tree
	 */
	exitDeclarator?: (ctx: DeclaratorContext) => void;

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
	 * Enter a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

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
	 * Enter a parse tree produced by `CParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	enterBlockItemList?: (ctx: BlockItemListContext) => void;
	/**
	 * Exit a parse tree produced by `CParser.blockItemList`.
	 * @param ctx the parse tree
	 */
	exitBlockItemList?: (ctx: BlockItemListContext) => void;

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

