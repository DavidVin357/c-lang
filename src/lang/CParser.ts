// Generated from C.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CListener } from "./CListener";
import { CVisitor } from "./CVisitor";


export class CParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly MUL = 37;
	public static readonly DIV = 38;
	public static readonly ADD = 39;
	public static readonly SUB = 40;
	public static readonly MOD = 41;
	public static readonly LOGICAL_AND = 42;
	public static readonly LOGICAL_OR = 43;
	public static readonly EQUALS = 44;
	public static readonly LESS = 45;
	public static readonly LESS_EQUAL = 46;
	public static readonly GREATER = 47;
	public static readonly GREATER_EQUAL = 48;
	public static readonly POSTFIX_ADD = 49;
	public static readonly WHITESPACE = 50;
	public static readonly DECIMAL = 51;
	public static readonly FRACTION = 52;
	public static readonly Identifier = 53;
	public static readonly Pointer = 54;
	public static readonly Digit = 55;
	public static readonly RULE_declarationSpecifiers = 0;
	public static readonly RULE_typeSpecifier = 1;
	public static readonly RULE_typeQualifier = 2;
	public static readonly RULE_declarationSpecifier = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_initialization = 5;
	public static readonly RULE_assignmentOperator = 6;
	public static readonly RULE_assignment = 7;
	public static readonly RULE_initializerList = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_expressionStatement = 10;
	public static readonly RULE_conditionalStatement = 11;
	public static readonly RULE_switchStatement = 12;
	public static readonly RULE_labeledStatement = 13;
	public static readonly RULE_breakStatement = 14;
	public static readonly RULE_compoundStatement = 15;
	public static readonly RULE_blockItemList = 16;
	public static readonly RULE_switchBodyList = 17;
	public static readonly RULE_switchBodyStatement = 18;
	public static readonly RULE_statement = 19;
	public static readonly RULE_program = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"declarationSpecifiers", "typeSpecifier", "typeQualifier", "declarationSpecifier", 
		"declaration", "initialization", "assignmentOperator", "assignment", "initializerList", 
		"expression", "expressionStatement", "conditionalStatement", "switchStatement", 
		"labeledStatement", "breakStatement", "compoundStatement", "blockItemList", 
		"switchBodyList", "switchBodyStatement", "statement", "program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'char'", "'short'", "'int'", "'long'", "'float'", 
		"'double'", "'signed'", "'unsigned'", "'const'", "'restrict'", "'volatile'", 
		"'='", "';'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
		"'&='", "'^='", "'|='", "','", "'('", "')'", "'if'", "'else'", "'switch'", 
		"'case'", "':'", "'default'", "'break'", "'{'", "'}'", "'*'", "'/'", "'+'", 
		"'-'", "'%'", "'&&'", "'||'", "'=='", "'<'", "'<='", "'>'", "'>='", "'++'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "MUL", "DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", 
		"LOGICAL_OR", "EQUALS", "LESS", "LESS_EQUAL", "GREATER", "GREATER_EQUAL", 
		"POSTFIX_ADD", "WHITESPACE", "DECIMAL", "FRACTION", "Identifier", "Pointer", 
		"Digit",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "C.g4"; }

	// @Override
	public get ruleNames(): string[] { return CParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CParser._ATN, this);
	}
	// @RuleVersion(0)
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		let _localctx: DeclarationSpecifiersContext = new DeclarationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_declarationSpecifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 42;
				this.declarationSpecifier();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeQualifier(): TypeQualifierContext {
		let _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CParser.RULE_typeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationSpecifier(): DeclarationSpecifierContext {
		let _localctx: DeclarationSpecifierContext = new DeclarationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CParser.RULE_declarationSpecifier);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
			case CParser.T__1:
			case CParser.T__2:
			case CParser.T__3:
			case CParser.T__4:
			case CParser.T__5:
			case CParser.T__6:
			case CParser.T__7:
			case CParser.T__8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.typeSpecifier();
				}
				break;
			case CParser.T__9:
			case CParser.T__10:
			case CParser.T__11:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 52;
				this.typeQualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			_localctx._specifiers = this.declarationSpecifiers();
			this.state = 56;
			this.match(CParser.Identifier);
			this.state = 57;
			this.match(CParser.T__12);
			this.state = 58;
			_localctx._value = this.expression(0);
			this.state = 59;
			this.match(CParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initialization(): InitializationContext {
		let _localctx: InitializationContext = new InitializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_initialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			_localctx._specifiers = this.declarationSpecifiers();
			this.state = 62;
			this.match(CParser.Identifier);
			this.state = 63;
			this.match(CParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__12) | (1 << CParser.T__14) | (1 << CParser.T__15) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22) | (1 << CParser.T__23))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(CParser.Identifier);
			this.state = 68;
			_localctx._operator = this.assignmentOperator();
			this.state = 69;
			_localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initializerList(): InitializerListContext {
		let _localctx: InitializerListContext = new InitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CParser.RULE_initializerList);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.match(CParser.Digit);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.match(CParser.Digit);
				this.state = 73;
				this.match(CParser.T__24);
				this.state = 74;
				this.initializerList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, CParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				_localctx = new DecimalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 78;
				this.match(CParser.DECIMAL);
				}
				break;

			case 2:
				{
				_localctx = new FractionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 79;
				this.match(CParser.FRACTION);
				}
				break;

			case 3:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(CParser.Identifier);
				}
				break;

			case 4:
				{
				_localctx = new PointerContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 81;
				this.match(CParser.Pointer);
				}
				break;

			case 5:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 82;
				this.match(CParser.T__25);
				this.state = 83;
				(_localctx as ParenthesesContext)._inner = this.expression(0);
				this.state = 84;
				this.match(CParser.T__26);
				}
				break;

			case 6:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 86;
				this.assignment();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 127;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 125;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 89;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 90;
						(_localctx as AdditionContext)._operator = this.match(CParser.ADD);
						this.state = 91;
						(_localctx as AdditionContext)._right = this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as SubtractionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 93;
						(_localctx as SubtractionContext)._operator = this.match(CParser.SUB);
						this.state = 94;
						(_localctx as SubtractionContext)._right = this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicationContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 95;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 96;
						(_localctx as MultiplicationContext)._operator = this.match(CParser.MUL);
						this.state = 97;
						(_localctx as MultiplicationContext)._right = this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as DivisionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 99;
						(_localctx as DivisionContext)._operator = this.match(CParser.DIV);
						this.state = 100;
						(_localctx as DivisionContext)._right = this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new ModularContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ModularContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 101;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 102;
						(_localctx as ModularContext)._operator = this.match(CParser.MOD);
						this.state = 103;
						(_localctx as ModularContext)._right = this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 104;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 105;
						(_localctx as EqualContext)._operator = this.match(CParser.EQUALS);
						this.state = 106;
						(_localctx as EqualContext)._right = this.expression(9);
						}
						break;

					case 7:
						{
						_localctx = new GreaterContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 107;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 108;
						(_localctx as GreaterContext)._operator = this.match(CParser.GREATER);
						this.state = 109;
						(_localctx as GreaterContext)._right = this.expression(8);
						}
						break;

					case 8:
						{
						_localctx = new GreaterEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as GreaterEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 110;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 111;
						(_localctx as GreaterEqualContext)._operator = this.match(CParser.GREATER_EQUAL);
						this.state = 112;
						(_localctx as GreaterEqualContext)._right = this.expression(7);
						}
						break;

					case 9:
						{
						_localctx = new LessContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LessContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 113;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 114;
						(_localctx as LessContext)._operator = this.match(CParser.LESS);
						this.state = 115;
						(_localctx as LessContext)._right = this.expression(6);
						}
						break;

					case 10:
						{
						_localctx = new LessEqualContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LessEqualContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 116;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 117;
						(_localctx as LessEqualContext)._operator = this.match(CParser.LESS_EQUAL);
						this.state = 118;
						(_localctx as LessEqualContext)._right = this.expression(5);
						}
						break;

					case 11:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 119;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 120;
						(_localctx as LogicalAndContext)._operator = this.match(CParser.LOGICAL_AND);
						this.state = 121;
						(_localctx as LogicalAndContext)._right = this.expression(4);
						}
						break;

					case 12:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 122;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 123;
						(_localctx as LogicalOrContext)._operator = this.match(CParser.LOGICAL_OR);
						this.state = 124;
						(_localctx as LogicalOrContext)._right = this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.expression(0);
			this.state = 131;
			this.match(CParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalStatement(): ConditionalStatementContext {
		let _localctx: ConditionalStatementContext = new ConditionalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CParser.RULE_conditionalStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(CParser.T__27);
			this.state = 134;
			this.match(CParser.T__25);
			this.state = 135;
			_localctx._condition = this.expression(0);
			this.state = 136;
			this.match(CParser.T__26);
			this.state = 137;
			_localctx._truebody = this.statement();
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 138;
				this.match(CParser.T__28);
				this.state = 139;
				_localctx._falsebody = this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(CParser.T__29);
			this.state = 143;
			this.match(CParser.T__25);
			this.state = 144;
			_localctx._condition = this.expression(0);
			this.state = 145;
			this.match(CParser.T__26);
			this.state = 146;
			_localctx._body = this.switchBodyStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CParser.RULE_labeledStatement);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__30:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 148;
				this.match(CParser.T__30);
				this.state = 149;
				_localctx._condition = this.expression(0);
				this.state = 150;
				this.match(CParser.T__31);
				this.state = 151;
				_localctx._body = this.statement();
				this.state = 153;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 152;
					this.breakStatement();
					}
					break;
				}
				}
				break;
			case CParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.match(CParser.T__32);
				this.state = 156;
				this.match(CParser.T__31);
				this.state = 157;
				_localctx._body = this.statement();
				this.state = 159;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 158;
					this.breakStatement();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(CParser.T__33);
			this.state = 164;
			this.match(CParser.T__13);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compoundStatement(): CompoundStatementContext {
		let _localctx: CompoundStatementContext = new CompoundStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(CParser.T__34);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__25) | (1 << CParser.T__27) | (1 << CParser.T__29) | (1 << CParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CParser.T__32 - 33)) | (1 << (CParser.T__34 - 33)) | (1 << (CParser.DECIMAL - 33)) | (1 << (CParser.FRACTION - 33)) | (1 << (CParser.Identifier - 33)) | (1 << (CParser.Pointer - 33)))) !== 0)) {
				{
				this.state = 167;
				this.blockItemList();
				}
			}

			this.state = 170;
			this.match(CParser.T__35);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 172;
				this.statement();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__25) | (1 << CParser.T__27) | (1 << CParser.T__29) | (1 << CParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CParser.T__32 - 33)) | (1 << (CParser.T__34 - 33)) | (1 << (CParser.DECIMAL - 33)) | (1 << (CParser.FRACTION - 33)) | (1 << (CParser.Identifier - 33)) | (1 << (CParser.Pointer - 33)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBodyList(): SwitchBodyListContext {
		let _localctx: SwitchBodyListContext = new SwitchBodyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CParser.RULE_switchBodyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__30 || _la === CParser.T__32) {
				{
				{
				this.state = 177;
				this.labeledStatement();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBodyStatement(): SwitchBodyStatementContext {
		let _localctx: SwitchBodyStatementContext = new SwitchBodyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CParser.RULE_switchBodyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(CParser.T__34);
			this.state = 184;
			this.switchBodyList();
			this.state = 185;
			this.match(CParser.T__35);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CParser.RULE_statement);
		try {
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 189;
				this.conditionalStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 190;
				this.compoundStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 191;
				this.switchStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 192;
				this.labeledStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 193;
				this.switchBodyStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 196;
				this.statement();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__25) | (1 << CParser.T__27) | (1 << CParser.T__29) | (1 << CParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CParser.T__32 - 33)) | (1 << (CParser.T__34 - 33)) | (1 << (CParser.DECIMAL - 33)) | (1 << (CParser.FRACTION - 33)) | (1 << (CParser.Identifier - 33)) | (1 << (CParser.Pointer - 33)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 4);

		case 10:
			return this.precpred(this._ctx, 3);

		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\xCC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x06\x02." +
		"\n\x02\r\x02\x0E\x02/\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x05\x058\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x05\nN\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\vZ\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\x80\n\v\f\v\x0E\v\x83\v\v\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\x8F\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\x9C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA2" +
		"\n\x0F\x05\x0F\xA4\n\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11" +
		"\xAB\n\x11\x03\x11\x03\x11\x03\x12\x06\x12\xB0\n\x12\r\x12\x0E\x12\xB1" +
		"\x03\x13\x07\x13\xB5\n\x13\f\x13\x0E\x13\xB8\v\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\xC5\n\x15\x03\x16\x06\x16\xC8\n\x16\r\x16\x0E\x16\xC9\x03\x16\x02" +
		"\x02\x03\x14\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02\x02\x05\x03\x02\x03\v\x03\x02\f\x0E\x04\x02\x0F\x0F" +
		"\x11\x1A\x02\xD8\x02-\x03\x02\x02\x02\x041\x03\x02\x02\x02\x063\x03\x02" +
		"\x02\x02\b7\x03\x02\x02\x02\n9\x03\x02\x02\x02\f?\x03\x02\x02\x02\x0E" +
		"C\x03\x02\x02\x02\x10E\x03\x02\x02\x02\x12M\x03\x02\x02\x02\x14Y\x03\x02" +
		"\x02\x02\x16\x84\x03\x02\x02\x02\x18\x87\x03\x02\x02\x02\x1A\x90\x03\x02" +
		"\x02\x02\x1C\xA3\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02 \xA8\x03\x02" +
		"\x02\x02\"\xAF\x03\x02\x02\x02$\xB6\x03\x02\x02\x02&\xB9\x03\x02\x02\x02" +
		"(\xC4\x03\x02\x02\x02*\xC7\x03\x02\x02\x02,.\x05\b\x05\x02-,\x03\x02\x02" +
		"\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\x03\x03\x02" +
		"\x02\x0212\t\x02\x02\x022\x05\x03\x02\x02\x0234\t\x03\x02\x024\x07\x03" +
		"\x02\x02\x0258\x05\x04\x03\x0268\x05\x06\x04\x0275\x03\x02\x02\x0276\x03" +
		"\x02\x02\x028\t\x03\x02\x02\x029:\x05\x02\x02\x02:;\x077\x02\x02;<\x07" +
		"\x0F\x02\x02<=\x05\x14\v\x02=>\x07\x10\x02\x02>\v\x03\x02\x02\x02?@\x05" +
		"\x02\x02\x02@A\x077\x02\x02AB\x07\x10\x02\x02B\r\x03\x02\x02\x02CD\t\x04" +
		"\x02\x02D\x0F\x03\x02\x02\x02EF\x077\x02\x02FG\x05\x0E\b\x02GH\x05\x14" +
		"\v\x02H\x11\x03\x02\x02\x02IN\x079\x02\x02JK\x079\x02\x02KL\x07\x1B\x02" +
		"\x02LN\x05\x12\n\x02MI\x03\x02\x02\x02MJ\x03\x02\x02\x02N\x13\x03\x02" +
		"\x02\x02OP\b\v\x01\x02PZ\x075\x02\x02QZ\x076\x02\x02RZ\x077\x02\x02SZ" +
		"\x078\x02\x02TU\x07\x1C\x02\x02UV\x05\x14\v\x02VW\x07\x1D\x02\x02WZ\x03" +
		"\x02\x02\x02XZ\x05\x10\t\x02YO\x03\x02\x02\x02YQ\x03\x02\x02\x02YR\x03" +
		"\x02\x02\x02YS\x03\x02\x02\x02YT\x03\x02\x02\x02YX\x03\x02\x02\x02Z\x81" +
		"\x03\x02\x02\x02[\\\f\x0F\x02\x02\\]\x07)\x02\x02]\x80\x05\x14\v\x10^" +
		"_\f\x0E\x02\x02_`\x07*\x02\x02`\x80\x05\x14\v\x0Fab\f\r\x02\x02bc\x07" +
		"\'\x02\x02c\x80\x05\x14\v\x0Ede\f\f\x02\x02ef\x07(\x02\x02f\x80\x05\x14" +
		"\v\rgh\f\v\x02\x02hi\x07+\x02\x02i\x80\x05\x14\v\fjk\f\n\x02\x02kl\x07" +
		".\x02\x02l\x80\x05\x14\v\vmn\f\t\x02\x02no\x071\x02\x02o\x80\x05\x14\v" +
		"\npq\f\b\x02\x02qr\x072\x02\x02r\x80\x05\x14\v\tst\f\x07\x02\x02tu\x07" +
		"/\x02\x02u\x80\x05\x14\v\bvw\f\x06\x02\x02wx\x070\x02\x02x\x80\x05\x14" +
		"\v\x07yz\f\x05\x02\x02z{\x07,\x02\x02{\x80\x05\x14\v\x06|}\f\x04\x02\x02" +
		"}~\x07-\x02\x02~\x80\x05\x14\v\x05\x7F[\x03\x02\x02\x02\x7F^\x03\x02\x02" +
		"\x02\x7Fa\x03\x02\x02\x02\x7Fd\x03\x02\x02\x02\x7Fg\x03\x02\x02\x02\x7F" +
		"j\x03\x02\x02\x02\x7Fm\x03\x02\x02\x02\x7Fp\x03\x02\x02\x02\x7Fs\x03\x02" +
		"\x02\x02\x7Fv\x03\x02\x02\x02\x7Fy\x03\x02\x02\x02\x7F|\x03\x02\x02\x02" +
		"\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02" +
		"\x82\x15\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x05\x14\v\x02" +
		"\x85\x86\x07\x10\x02\x02\x86\x17\x03\x02\x02\x02\x87\x88\x07\x1E\x02\x02" +
		"\x88\x89\x07\x1C\x02\x02\x89\x8A\x05\x14\v\x02\x8A\x8B\x07\x1D\x02\x02" +
		"\x8B\x8E\x05(\x15\x02\x8C\x8D\x07\x1F\x02\x02\x8D\x8F\x05(\x15\x02\x8E" +
		"\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x19\x03\x02\x02\x02\x90" +
		"\x91\x07 \x02\x02\x91\x92\x07\x1C\x02\x02\x92\x93\x05\x14\v\x02\x93\x94" +
		"\x07\x1D\x02\x02\x94\x95\x05&\x14\x02\x95\x1B\x03\x02\x02\x02\x96\x97" +
		"\x07!\x02\x02\x97\x98\x05\x14\v\x02\x98\x99\x07\"\x02\x02\x99\x9B\x05" +
		"(\x15\x02\x9A\x9C\x05\x1E\x10\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03" +
		"\x02\x02\x02\x9C\xA4\x03\x02\x02\x02\x9D\x9E\x07#\x02\x02\x9E\x9F\x07" +
		"\"\x02\x02\x9F\xA1\x05(\x15\x02\xA0\xA2\x05\x1E\x10\x02\xA1\xA0\x03\x02" +
		"\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\x96\x03\x02" +
		"\x02\x02\xA3\x9D\x03\x02\x02\x02\xA4\x1D\x03\x02\x02\x02\xA5\xA6\x07$" +
		"\x02\x02\xA6\xA7\x07\x10\x02\x02\xA7\x1F\x03\x02\x02\x02\xA8\xAA\x07%" +
		"\x02\x02\xA9\xAB\x05\"\x12\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x07&\x02\x02\xAD!\x03\x02\x02" +
		"\x02\xAE\xB0\x05(\x15\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02" +
		"\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2#\x03\x02\x02" +
		"\x02\xB3\xB5\x05\x1C\x0F\x02\xB4\xB3\x03\x02\x02\x02\xB5\xB8\x03\x02\x02" +
		"\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7%\x03\x02\x02" +
		"\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBA\x07%\x02\x02\xBA\xBB\x05$\x13\x02" +
		"\xBB\xBC\x07&\x02\x02\xBC\'\x03\x02\x02\x02\xBD\xC5\x05\x16\f\x02\xBE" +
		"\xC5\x05\n\x06\x02\xBF\xC5\x05\x18\r\x02\xC0\xC5\x05 \x11\x02\xC1\xC5" +
		"\x05\x1A\x0E\x02\xC2\xC5\x05\x1C\x0F\x02\xC3\xC5\x05&\x14\x02\xC4\xBD" +
		"\x03\x02\x02\x02\xC4\xBE\x03\x02\x02\x02\xC4\xBF\x03\x02\x02\x02\xC4\xC0" +
		"\x03\x02\x02\x02\xC4\xC1\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC3" +
		"\x03\x02\x02\x02\xC5)\x03\x02\x02\x02\xC6\xC8\x05(\x15\x02\xC7\xC6\x03" +
		"\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03" +
		"\x02\x02\x02\xCA+\x03\x02\x02\x02\x11/7MY\x7F\x81\x8E\x9B\xA1\xA3\xAA" +
		"\xB1\xB6\xC4\xC9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class DeclarationSpecifiersContext extends ParserRuleContext {
	public declarationSpecifier(): DeclarationSpecifierContext[];
	public declarationSpecifier(i: number): DeclarationSpecifierContext;
	public declarationSpecifier(i?: number): DeclarationSpecifierContext | DeclarationSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationSpecifierContext);
		} else {
			return this.getRuleContext(i, DeclarationSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifiers; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationSpecifiers) {
			listener.enterDeclarationSpecifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationSpecifiers) {
			listener.exitDeclarationSpecifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifiers) {
			return visitor.visitDeclarationSpecifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSpecifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeSpecifier) {
			listener.enterTypeSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeSpecifier) {
			listener.exitTypeSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeSpecifier) {
			return visitor.visitTypeSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeQualifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeQualifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeQualifier) {
			listener.enterTypeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeQualifier) {
			listener.exitTypeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeQualifier) {
			return visitor.visitTypeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationSpecifierContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	public typeQualifier(): TypeQualifierContext | undefined {
		return this.tryGetRuleContext(0, TypeQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarationSpecifier; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarationSpecifier) {
			listener.enterDeclarationSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarationSpecifier) {
			listener.exitDeclarationSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarationSpecifier) {
			return visitor.visitDeclarationSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public _specifiers!: DeclarationSpecifiersContext;
	public _value!: ExpressionContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializationContext extends ParserRuleContext {
	public _specifiers!: DeclarationSpecifiersContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initialization; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitialization) {
			listener.enterInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitialization) {
			listener.exitInitialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitialization) {
			return visitor.visitInitialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public _operator!: AssignmentOperatorContext;
	public _value!: ExpressionContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializerListContext extends ParserRuleContext {
	public Digit(): TerminalNode { return this.getToken(CParser.Digit, 0); }
	public initializerList(): InitializerListContext | undefined {
		return this.tryGetRuleContext(0, InitializerListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializerList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializerList) {
			listener.enterInitializerList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializerList) {
			listener.exitInitializerList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializerList) {
			return visitor.visitInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalContext extends ExpressionContext {
	public DECIMAL(): TerminalNode { return this.getToken(CParser.DECIMAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDecimal) {
			listener.enterDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDecimal) {
			listener.exitDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDecimal) {
			return visitor.visitDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FractionContext extends ExpressionContext {
	public FRACTION(): TerminalNode { return this.getToken(CParser.FRACTION, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFraction) {
			listener.enterFraction(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFraction) {
			listener.exitFraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFraction) {
			return visitor.visitFraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointerContext extends ExpressionContext {
	public Pointer(): TerminalNode { return this.getToken(CParser.Pointer, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointer) {
			listener.enterPointer(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointer) {
			listener.exitPointer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointer) {
			return visitor.visitPointer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesContext extends ExpressionContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParentheses) {
			listener.enterParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParentheses) {
			listener.exitParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParentheses) {
			return visitor.visitParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode { return this.getToken(CParser.ADD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAddition) {
			listener.enterAddition(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAddition) {
			listener.exitAddition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAddition) {
			return visitor.visitAddition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubtractionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SUB(): TerminalNode { return this.getToken(CParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSubtraction) {
			listener.enterSubtraction(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSubtraction) {
			listener.exitSubtraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSubtraction) {
			return visitor.visitSubtraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicationContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode { return this.getToken(CParser.MUL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplication) {
			listener.enterMultiplication(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplication) {
			listener.exitMultiplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplication) {
			return visitor.visitMultiplication(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivisionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(CParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDivision) {
			listener.enterDivision(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDivision) {
			listener.exitDivision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDivision) {
			return visitor.visitDivision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ModularContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(CParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterModular) {
			listener.enterModular(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitModular) {
			listener.exitModular(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitModular) {
			return visitor.visitModular(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EQUALS(): TerminalNode { return this.getToken(CParser.EQUALS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEqual) {
			listener.enterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEqual) {
			listener.exitEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEqual) {
			return visitor.visitEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATER(): TerminalNode { return this.getToken(CParser.GREATER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGreater) {
			listener.enterGreater(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGreater) {
			listener.exitGreater(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGreater) {
			return visitor.visitGreater(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GreaterEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GREATER_EQUAL(): TerminalNode { return this.getToken(CParser.GREATER_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterGreaterEqual) {
			listener.enterGreaterEqual(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitGreaterEqual) {
			listener.exitGreaterEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitGreaterEqual) {
			return visitor.visitGreaterEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS(): TerminalNode { return this.getToken(CParser.LESS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLess) {
			listener.enterLess(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLess) {
			listener.exitLess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLess) {
			return visitor.visitLess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LessEqualContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LESS_EQUAL(): TerminalNode { return this.getToken(CParser.LESS_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLessEqual) {
			listener.enterLessEqual(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLessEqual) {
			listener.exitLessEqual(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLessEqual) {
			return visitor.visitLessEqual(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOGICAL_AND(): TerminalNode { return this.getToken(CParser.LOGICAL_AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalAnd) {
			listener.enterLogicalAnd(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalAnd) {
			listener.exitLogicalAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalAnd) {
			return visitor.visitLogicalAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LOGICAL_OR(): TerminalNode { return this.getToken(CParser.LOGICAL_OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLogicalOr) {
			listener.enterLogicalOr(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLogicalOr) {
			listener.exitLogicalOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLogicalOr) {
			return visitor.visitLogicalOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends ExpressionContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalStatementContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _truebody!: StatementContext;
	public _falsebody!: StatementContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_conditionalStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitConditionalStatement) {
			return visitor.visitConditionalStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _body!: SwitchBodyStatementContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchBodyStatement(): SwitchBodyStatementContext {
		return this.getRuleContext(0, SwitchBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _body!: StatementContext;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_labeledStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundStatementContext extends ParserRuleContext {
	public blockItemList(): BlockItemListContext | undefined {
		return this.tryGetRuleContext(0, BlockItemListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_compoundStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCompoundStatement) {
			listener.enterCompoundStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCompoundStatement) {
			listener.exitCompoundStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCompoundStatement) {
			return visitor.visitCompoundStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockItemListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_blockItemList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBlockItemList) {
			listener.enterBlockItemList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBlockItemList) {
			listener.exitBlockItemList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBlockItemList) {
			return visitor.visitBlockItemList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBodyListContext extends ParserRuleContext {
	public labeledStatement(): LabeledStatementContext[];
	public labeledStatement(i: number): LabeledStatementContext;
	public labeledStatement(i?: number): LabeledStatementContext | LabeledStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LabeledStatementContext);
		} else {
			return this.getRuleContext(i, LabeledStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_switchBodyList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSwitchBodyList) {
			listener.enterSwitchBodyList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSwitchBodyList) {
			listener.exitSwitchBodyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSwitchBodyList) {
			return visitor.visitSwitchBodyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBodyStatementContext extends ParserRuleContext {
	public switchBodyList(): SwitchBodyListContext {
		return this.getRuleContext(0, SwitchBodyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_switchBodyStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSwitchBodyStatement) {
			listener.enterSwitchBodyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSwitchBodyStatement) {
			listener.exitSwitchBodyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSwitchBodyStatement) {
			return visitor.visitSwitchBodyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public conditionalStatement(): ConditionalStatementContext | undefined {
		return this.tryGetRuleContext(0, ConditionalStatementContext);
	}
	public compoundStatement(): CompoundStatementContext | undefined {
		return this.tryGetRuleContext(0, CompoundStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public switchBodyStatement(): SwitchBodyStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchBodyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_statement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_program; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

