// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly MUL = 33;
	public static readonly DIV = 34;
	public static readonly ADD = 35;
	public static readonly SUB = 36;
	public static readonly MOD = 37;
	public static readonly LOGICAL_AND = 38;
	public static readonly LOGICAL_OR = 39;
	public static readonly EQUALS = 40;
	public static readonly NOT_EQUALS = 41;
	public static readonly LESS = 42;
	public static readonly LESS_EQUAL = 43;
	public static readonly GREATER = 44;
	public static readonly GREATER_EQUAL = 45;
	public static readonly POSTFIX_ADD = 46;
	public static readonly WHITESPACE = 47;
	public static readonly DECIMAL = 48;
	public static readonly FRACTION = 49;
	public static readonly Identifier = 50;
	public static readonly Pointer = 51;
	public static readonly RULE_declarationSpecifiers = 0;
	public static readonly RULE_typeSpecifier = 1;
	public static readonly RULE_typeQualifier = 2;
	public static readonly RULE_declarationSpecifier = 3;
	public static readonly RULE_declarator = 4;
	public static readonly RULE_initialization = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_assignmentOperator = 7;
	public static readonly RULE_assignment = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_expressionStatement = 10;
	public static readonly RULE_statement = 11;
	public static readonly RULE_blockItemList = 12;
	public static readonly RULE_compoundStatement = 13;
	public static readonly RULE_parameterDeclaration = 14;
	public static readonly RULE_parameterList = 15;
	public static readonly RULE_functionDeclaration = 16;
	public static readonly RULE_functionApplication = 17;
	public static readonly RULE_program = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"declarationSpecifiers", "typeSpecifier", "typeQualifier", "declarationSpecifier", 
		"declarator", "initialization", "declaration", "assignmentOperator", "assignment", 
		"expression", "expressionStatement", "statement", "blockItemList", "compoundStatement", 
		"parameterDeclaration", "parameterList", "functionDeclaration", "functionApplication", 
		"program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'char'", "'unsigned char'", "'short'", "'unsigned short'", 
		"'int'", "'unsigned int'", "'long'", "'unsigned long'", "'float'", "'double'", 
		"'const'", "'restrict'", "'volatile'", "'='", "';'", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'('", "')'", 
		"'{'", "'}'", "','", "':'", "'*'", "'/'", "'+'", "'-'", "'%'", "'&&'", 
		"'||'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'++'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "MUL", "DIV", "ADD", 
		"SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR", "EQUALS", "NOT_EQUALS", "LESS", 
		"LESS_EQUAL", "GREATER", "GREATER_EQUAL", "POSTFIX_ADD", "WHITESPACE", 
		"DECIMAL", "FRACTION", "Identifier", "Pointer",
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
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 40;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CParser.T__11:
				case CParser.T__12:
				case CParser.T__13:
					{
					this.state = 38;
					this.typeQualifier();
					}
					break;
				case CParser.T__0:
				case CParser.T__1:
				case CParser.T__2:
				case CParser.T__3:
				case CParser.T__4:
				case CParser.T__5:
				case CParser.T__6:
				case CParser.T__7:
				case CParser.T__8:
				case CParser.T__9:
				case CParser.T__10:
					{
					this.state = 39;
					this.typeSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13))) !== 0));
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
			this.state = 44;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10))) !== 0))) {
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
			this.state = 46;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13))) !== 0))) {
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
			this.state = 50;
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
			case CParser.T__9:
			case CParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.typeSpecifier();
				}
				break;
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
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
	public declarator(): DeclaratorContext {
		let _localctx: DeclaratorContext = new DeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			_la = this._input.LA(1);
			if (!(_la === CParser.Identifier || _la === CParser.Pointer)) {
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
	public initialization(): InitializationContext {
		let _localctx: InitializationContext = new InitializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_initialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			_localctx._specifiers = this.declarationSpecifiers();
			this.state = 55;
			this.declarator();
			this.state = 56;
			this.match(CParser.T__14);
			this.state = 57;
			_localctx._value = this.expression(0);
			this.state = 58;
			this.match(CParser.T__15);
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
		this.enterRule(_localctx, 12, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			_localctx._specifiers = this.declarationSpecifiers();
			this.state = 61;
			this.declarator();
			this.state = 62;
			this.match(CParser.T__15);
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
		this.enterRule(_localctx, 14, CParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__14) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22) | (1 << CParser.T__23) | (1 << CParser.T__24) | (1 << CParser.T__25))) !== 0))) {
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
		this.enterRule(_localctx, 16, CParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(CParser.Identifier);
			this.state = 67;
			_localctx._operator = this.assignmentOperator();
			this.state = 68;
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				_localctx = new DecimalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 71;
				this.match(CParser.DECIMAL);
				}
				break;

			case 2:
				{
				_localctx = new FractionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 72;
				this.match(CParser.FRACTION);
				}
				break;

			case 3:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 73;
				this.match(CParser.Identifier);
				}
				break;

			case 4:
				{
				_localctx = new ApplicationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.functionApplication();
				}
				break;

			case 5:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 75;
				this.match(CParser.T__26);
				this.state = 76;
				(_localctx as ParenthesesContext)._inner = this.expression(0);
				this.state = 77;
				this.match(CParser.T__27);
				}
				break;

			case 6:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 79;
				this.assignment();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 102;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 100;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 82;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 83;
						(_localctx as AdditiveContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CParser.ADD || _la === CParser.SUB)) {
							(_localctx as AdditiveContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 84;
						(_localctx as AdditiveContext)._right = this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 85;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 86;
						(_localctx as MultiplicativeContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CParser.MUL - 33)) | (1 << (CParser.DIV - 33)) | (1 << (CParser.MOD - 33)))) !== 0))) {
							(_localctx as MultiplicativeContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 87;
						(_localctx as MultiplicativeContext)._right = this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 88;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 89;
						(_localctx as RelationalContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CParser.LESS - 42)) | (1 << (CParser.LESS_EQUAL - 42)) | (1 << (CParser.GREATER - 42)) | (1 << (CParser.GREATER_EQUAL - 42)))) !== 0))) {
							(_localctx as RelationalContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 90;
						(_localctx as RelationalContext)._right = this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 91;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 92;
						(_localctx as EqualityContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === CParser.EQUALS || _la === CParser.NOT_EQUALS)) {
							(_localctx as EqualityContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 93;
						(_localctx as EqualityContext)._right = this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 94;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 95;
						(_localctx as LogicalAndContext)._operator = this.match(CParser.LOGICAL_AND);
						this.state = 96;
						(_localctx as LogicalAndContext)._right = this.expression(4);
						}
						break;

					case 6:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 97;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 98;
						(_localctx as LogicalOrContext)._operator = this.match(CParser.LOGICAL_OR);
						this.state = 99;
						(_localctx as LogicalOrContext)._right = this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 104;
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
			this.state = 105;
			this.expression(0);
			this.state = 106;
			this.match(CParser.T__15);
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
		this.enterRule(_localctx, 22, CParser.RULE_statement);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 108;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 110;
				this.initialization();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 111;
				this.functionDeclaration();
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
	public blockItemList(): BlockItemListContext {
		let _localctx: BlockItemListContext = new BlockItemListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 114;
				this.statement();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__26))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CParser.DECIMAL - 48)) | (1 << (CParser.FRACTION - 48)) | (1 << (CParser.Identifier - 48)))) !== 0));
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
		this.enterRule(_localctx, 26, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(CParser.T__28);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__26))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CParser.DECIMAL - 48)) | (1 << (CParser.FRACTION - 48)) | (1 << (CParser.Identifier - 48)))) !== 0)) {
				{
				this.state = 120;
				this.blockItemList();
				}
			}

			this.state = 123;
			this.match(CParser.T__29);
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
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_parameterDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.declarationSpecifiers();
			this.state = 126;
			this.declarator();
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.parameterDeclaration();
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__30) {
				{
				{
				this.state = 129;
				this.match(CParser.T__30);
				this.state = 130;
				this.parameterDeclaration();
				}
				}
				this.state = 135;
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13))) !== 0)) {
				{
				this.state = 136;
				this.declarationSpecifiers();
				}
			}

			this.state = 139;
			this.match(CParser.Identifier);
			this.state = 140;
			this.match(CParser.T__26);
			this.state = 141;
			this.parameterList();
			this.state = 142;
			this.match(CParser.T__27);
			this.state = 143;
			this.compoundStatement();
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
	public functionApplication(): FunctionApplicationContext {
		let _localctx: FunctionApplicationContext = new FunctionApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CParser.RULE_functionApplication);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(CParser.Identifier);
			this.state = 146;
			this.match(CParser.T__26);
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.Identifier:
			case CParser.Pointer:
				{
				this.state = 147;
				this.declarator();
				}
				break;
			case CParser.DECIMAL:
				{
				this.state = 148;
				this.match(CParser.DECIMAL);
				}
				break;
			case CParser.FRACTION:
				{
				this.state = 149;
				this.match(CParser.FRACTION);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 152;
			this.match(CParser.T__27);
			this.state = 153;
			this.match(CParser.T__31);
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
		this.enterRule(_localctx, 36, CParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 155;
				this.statement();
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__26))) !== 0) || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CParser.DECIMAL - 48)) | (1 << (CParser.FRACTION - 48)) | (1 << (CParser.Identifier - 48)))) !== 0));
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
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x035\xA3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x06\x02+\n\x02\r\x02\x0E\x02" +
		",\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x055\n\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vS\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x07\vg\n\v\f\v\x0E\vj\v\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r" +
		"\x03\r\x05\rs\n\r\x03\x0E\x06\x0Ev\n\x0E\r\x0E\x0E\x0Ew\x03\x0F\x03\x0F" +
		"\x05\x0F|\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\x86\n\x11\f\x11\x0E\x11\x89\v\x11\x03\x12\x05\x12\x8C" +
		"\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\x99\n\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x06\x14\x9F\n\x14\r\x14\x0E\x14\xA0\x03\x14\x02\x02\x03\x14\x15\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\n\x03" +
		"\x02\x03\r\x03\x02\x0E\x10\x03\x0245\x04\x02\x11\x11\x13\x1C\x03\x02%" +
		"&\x04\x02#$\'\'\x03\x02,/\x03\x02*+\x02\xA7\x02*\x03\x02\x02\x02\x04." +
		"\x03\x02\x02\x02\x060\x03\x02\x02\x02\b4\x03\x02\x02\x02\n6\x03\x02\x02" +
		"\x02\f8\x03\x02\x02\x02\x0E>\x03\x02\x02\x02\x10B\x03\x02\x02\x02\x12" +
		"D\x03\x02\x02\x02\x14R\x03\x02\x02\x02\x16k\x03\x02\x02\x02\x18r\x03\x02" +
		"\x02\x02\x1Au\x03\x02\x02\x02\x1Cy\x03\x02\x02\x02\x1E\x7F\x03\x02\x02" +
		"\x02 \x82\x03\x02\x02\x02\"\x8B\x03\x02\x02\x02$\x93\x03\x02\x02\x02&" +
		"\x9E\x03\x02\x02\x02(+\x05\x06\x04\x02)+\x05\x04\x03\x02*(\x03\x02\x02" +
		"\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02" +
		"\x02-\x03\x03\x02\x02\x02./\t\x02\x02\x02/\x05\x03\x02\x02\x0201\t\x03" +
		"\x02\x021\x07\x03\x02\x02\x0225\x05\x04\x03\x0235\x05\x06\x04\x0242\x03" +
		"\x02\x02\x0243\x03\x02\x02\x025\t\x03\x02\x02\x0267\t\x04\x02\x027\v\x03" +
		"\x02\x02\x0289\x05\x02\x02\x029:\x05\n\x06\x02:;\x07\x11\x02\x02;<\x05" +
		"\x14\v\x02<=\x07\x12\x02\x02=\r\x03\x02\x02\x02>?\x05\x02\x02\x02?@\x05" +
		"\n\x06\x02@A\x07\x12\x02\x02A\x0F\x03\x02\x02\x02BC\t\x05\x02\x02C\x11" +
		"\x03\x02\x02\x02DE\x074\x02\x02EF\x05\x10\t\x02FG\x05\x14\v\x02G\x13\x03" +
		"\x02\x02\x02HI\b\v\x01\x02IS\x072\x02\x02JS\x073\x02\x02KS\x074\x02\x02" +
		"LS\x05$\x13\x02MN\x07\x1D\x02\x02NO\x05\x14\v\x02OP\x07\x1E\x02\x02PS" +
		"\x03\x02\x02\x02QS\x05\x12\n\x02RH\x03\x02\x02\x02RJ\x03\x02\x02\x02R" +
		"K\x03\x02\x02\x02RL\x03\x02\x02\x02RM\x03\x02\x02\x02RQ\x03\x02\x02\x02" +
		"Sh\x03\x02\x02\x02TU\f\t\x02\x02UV\t\x06\x02\x02Vg\x05\x14\v\nWX\f\b\x02" +
		"\x02XY\t\x07\x02\x02Yg\x05\x14\v\tZ[\f\x07\x02\x02[\\\t\b\x02\x02\\g\x05" +
		"\x14\v\b]^\f\x06\x02\x02^_\t\t\x02\x02_g\x05\x14\v\x07`a\f\x05\x02\x02" +
		"ab\x07(\x02\x02bg\x05\x14\v\x06cd\f\x04\x02\x02de\x07)\x02\x02eg\x05\x14" +
		"\v\x05fT\x03\x02\x02\x02fW\x03\x02\x02\x02fZ\x03\x02\x02\x02f]\x03\x02" +
		"\x02\x02f`\x03\x02\x02\x02fc\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02" +
		"\x02\x02hi\x03\x02\x02\x02i\x15\x03\x02\x02\x02jh\x03\x02\x02\x02kl\x05" +
		"\x14\v\x02lm\x07\x12\x02\x02m\x17\x03\x02\x02\x02ns\x05\x16\f\x02os\x05" +
		"\x0E\b\x02ps\x05\f\x07\x02qs\x05\"\x12\x02rn\x03\x02\x02\x02ro\x03\x02" +
		"\x02\x02rp\x03\x02\x02\x02rq\x03\x02\x02\x02s\x19\x03\x02\x02\x02tv\x05" +
		"\x18\r\x02ut\x03\x02\x02\x02vw\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03" +
		"\x02\x02\x02x\x1B\x03\x02\x02\x02y{\x07\x1F\x02\x02z|\x05\x1A\x0E\x02" +
		"{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x07 \x02\x02" +
		"~\x1D\x03\x02\x02\x02\x7F\x80\x05\x02\x02\x02\x80\x81\x05\n\x06\x02\x81" +
		"\x1F\x03\x02\x02\x02\x82\x87\x05\x1E\x10\x02\x83\x84\x07!\x02\x02\x84" +
		"\x86\x05\x1E\x10\x02\x85\x83\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87" +
		"\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88!\x03\x02\x02\x02\x89" +
		"\x87\x03\x02\x02\x02\x8A\x8C\x05\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8B" +
		"\x8C\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x074\x02\x02\x8E" +
		"\x8F\x07\x1D\x02\x02\x8F\x90\x05 \x11\x02\x90\x91\x07\x1E\x02\x02\x91" +
		"\x92\x05\x1C\x0F\x02\x92#\x03\x02\x02\x02\x93\x94\x074\x02\x02\x94\x98" +
		"\x07\x1D\x02\x02\x95\x99\x05\n\x06\x02\x96\x99\x072\x02\x02\x97\x99\x07" +
		"3\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x97\x03" +
		"\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x07\x1E\x02\x02\x9B\x9C\x07" +
		"\"\x02\x02\x9C%\x03\x02\x02\x02\x9D\x9F\x05\x18\r\x02\x9E\x9D\x03\x02" +
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02" +
		"\x02\x02\xA1\'\x03\x02\x02\x02\x0F*,4Rfhrw{\x87\x8B\x98\xA0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class DeclarationSpecifiersContext extends ParserRuleContext {
	public typeQualifier(): TypeQualifierContext[];
	public typeQualifier(i: number): TypeQualifierContext;
	public typeQualifier(i?: number): TypeQualifierContext | TypeQualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeQualifierContext);
		} else {
			return this.getRuleContext(i, TypeQualifierContext);
		}
	}
	public typeSpecifier(): TypeSpecifierContext[];
	public typeSpecifier(i: number): TypeSpecifierContext;
	public typeSpecifier(i?: number): TypeSpecifierContext | TypeSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeSpecifierContext);
		} else {
			return this.getRuleContext(i, TypeSpecifierContext);
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


export class DeclaratorContext extends ParserRuleContext {
	public Pointer(): TerminalNode | undefined { return this.tryGetToken(CParser.Pointer, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_declarator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDeclarator) {
			listener.enterDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDeclarator) {
			listener.exitDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDeclarator) {
			return visitor.visitDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializationContext extends ParserRuleContext {
	public _specifiers!: DeclarationSpecifiersContext;
	public _value!: ExpressionContext;
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
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


export class DeclarationContext extends ParserRuleContext {
	public _specifiers!: DeclarationSpecifiersContext;
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
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
export class ApplicationContext extends ExpressionContext {
	public functionApplication(): FunctionApplicationContext {
		return this.getRuleContext(0, FunctionApplicationContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterApplication) {
			listener.enterApplication(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitApplication) {
			listener.exitApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitApplication) {
			return visitor.visitApplication(this);
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
export class AdditiveContext extends ExpressionContext {
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
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(CParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAdditive) {
			listener.enterAdditive(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAdditive) {
			listener.exitAdditive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAdditive) {
			return visitor.visitAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeContext extends ExpressionContext {
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
	public MUL(): TerminalNode | undefined { return this.tryGetToken(CParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(CParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMultiplicative) {
			listener.enterMultiplicative(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMultiplicative) {
			listener.exitMultiplicative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMultiplicative) {
			return visitor.visitMultiplicative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalContext extends ExpressionContext {
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
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(CParser.GREATER, 0); }
	public GREATER_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CParser.GREATER_EQUAL, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(CParser.LESS, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(CParser.LESS_EQUAL, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterRelational) {
			listener.enterRelational(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitRelational) {
			listener.exitRelational(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitRelational) {
			return visitor.visitRelational(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityContext extends ExpressionContext {
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
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(CParser.EQUALS, 0); }
	public NOT_EQUALS(): TerminalNode | undefined { return this.tryGetToken(CParser.NOT_EQUALS, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterEquality) {
			listener.enterEquality(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitEquality) {
			listener.exitEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitEquality) {
			return visitor.visitEquality(this);
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


export class StatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public initialization(): InitializationContext | undefined {
		return this.tryGetRuleContext(0, InitializationContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
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


export class ParameterDeclarationContext extends ParserRuleContext {
	public declarationSpecifiers(): DeclarationSpecifiersContext {
		return this.getRuleContext(0, DeclarationSpecifiersContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public declarationSpecifiers(): DeclarationSpecifiersContext | undefined {
		return this.tryGetRuleContext(0, DeclarationSpecifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionApplicationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public declarator(): DeclaratorContext | undefined {
		return this.tryGetRuleContext(0, DeclaratorContext);
	}
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CParser.DECIMAL, 0); }
	public FRACTION(): TerminalNode | undefined { return this.tryGetToken(CParser.FRACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_functionApplication; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFunctionApplication) {
			listener.enterFunctionApplication(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFunctionApplication) {
			listener.exitFunctionApplication(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFunctionApplication) {
			return visitor.visitFunctionApplication(this);
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


