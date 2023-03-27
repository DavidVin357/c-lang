// Generated from C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DecimalContext } from "./CParser";
import { FractionContext } from "./CParser";
import { IdentifierContext } from "./CParser";
import { ParenthesesContext } from "./CParser";
import { AdditionContext } from "./CParser";
import { SubtractionContext } from "./CParser";
import { MultiplicationContext } from "./CParser";
import { DivisionContext } from "./CParser";
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
import { ConditionalStatementContext } from "./CParser";
import { CompoundStatementContext } from "./CParser";
import { StatementContext } from "./CParser";
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
	 * Enter a parse tree produced by the `Addition`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `Addition`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `Subtraction`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubtraction?: (ctx: SubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `Subtraction`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubtraction?: (ctx: SubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `Multiplication`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiplication`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `Modular`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterModular?: (ctx: ModularContext) => void;
	/**
	 * Exit a parse tree produced by the `Modular`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitModular?: (ctx: ModularContext) => void;

	/**
	 * Enter a parse tree produced by the `Equal`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by the `Equal`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;

	/**
	 * Enter a parse tree produced by the `Greater`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGreater?: (ctx: GreaterContext) => void;
	/**
	 * Exit a parse tree produced by the `Greater`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGreater?: (ctx: GreaterContext) => void;

	/**
	 * Enter a parse tree produced by the `GreaterEqual`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGreaterEqual?: (ctx: GreaterEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `GreaterEqual`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGreaterEqual?: (ctx: GreaterEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `Less`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLess?: (ctx: LessContext) => void;
	/**
	 * Exit a parse tree produced by the `Less`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLess?: (ctx: LessContext) => void;

	/**
	 * Enter a parse tree produced by the `LessEqual`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLessEqual?: (ctx: LessEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `LessEqual`
	 * labeled alternative in `CParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLessEqual?: (ctx: LessEqualContext) => void;

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

