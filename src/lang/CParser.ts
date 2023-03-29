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
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly MUL = 42;
	public static readonly DIV = 43;
	public static readonly ADD = 44;
	public static readonly SUB = 45;
	public static readonly MOD = 46;
	public static readonly LOGICAL_AND = 47;
	public static readonly LOGICAL_OR = 48;
	public static readonly EQUALS = 49;
	public static readonly NOT_EQUALS = 50;
	public static readonly LESS = 51;
	public static readonly LESS_EQUAL = 52;
	public static readonly GREATER = 53;
	public static readonly GREATER_EQUAL = 54;
	public static readonly POSTFIX_ADD = 55;
	public static readonly VAR_ADDRESS = 56;
	public static readonly WHITESPACE = 57;
	public static readonly DECIMAL = 58;
	public static readonly FRACTION = 59;
	public static readonly CHAR = 60;
	public static readonly Identifier = 61;
	public static readonly Pointer = 62;
	public static readonly Digit = 63;
	public static readonly RULE_typeSpecifier = 0;
	public static readonly RULE_typeQualifier = 1;
	public static readonly RULE_typeQualifiers = 2;
	public static readonly RULE_declarationSpecifier = 3;
	public static readonly RULE_declarator = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_initialization = 6;
	public static readonly RULE_assignmentOperator = 7;
	public static readonly RULE_assignment = 8;
	public static readonly RULE_initializerList = 9;
	public static readonly RULE_malloc = 10;
	public static readonly RULE_sizeof = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_expressionStatement = 13;
	public static readonly RULE_conditionalStatement = 14;
	public static readonly RULE_switchStatement = 15;
	public static readonly RULE_labeledStatement = 16;
	public static readonly RULE_breakStatement = 17;
	public static readonly RULE_compoundStatement = 18;
	public static readonly RULE_blockItemList = 19;
	public static readonly RULE_switchBodyList = 20;
	public static readonly RULE_switchBodyStatement = 21;
	public static readonly RULE_returnStatement = 22;
	public static readonly RULE_statement = 23;
	public static readonly RULE_parameterDeclaration = 24;
	public static readonly RULE_parameterList = 25;
	public static readonly RULE_functionDeclaration = 26;
	public static readonly RULE_argumentExpressionList = 27;
	public static readonly RULE_functionApplication = 28;
	public static readonly RULE_program = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"typeSpecifier", "typeQualifier", "typeQualifiers", "declarationSpecifier", 
		"declarator", "declaration", "initialization", "assignmentOperator", "assignment", 
		"initializerList", "malloc", "sizeof", "expression", "expressionStatement", 
		"conditionalStatement", "switchStatement", "labeledStatement", "breakStatement", 
		"compoundStatement", "blockItemList", "switchBodyList", "switchBodyStatement", 
		"returnStatement", "statement", "parameterDeclaration", "parameterList", 
		"functionDeclaration", "argumentExpressionList", "functionApplication", 
		"program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'char'", "'unsigned char'", "'short'", "'unsigned short'", 
		"'int'", "'unsigned int'", "'long'", "'unsigned long'", "'float'", "'double'", 
		"'const'", "'restrict'", "'volatile'", "';'", "'='", "'*='", "'/='", "'%='", 
		"'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "','", "'malloc'", 
		"'('", "')'", "'sizeof'", "'if'", "'else'", "'switch'", "'case'", "':'", 
		"'default'", "'break'", "'{'", "'}'", "'return'", "'*'", "'/'", "'+'", 
		"'-'", "'%'", "'&&'", "'||'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
		"'++'", "'&'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"MUL", "DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR", "EQUALS", 
		"NOT_EQUALS", "LESS", "LESS_EQUAL", "GREATER", "GREATER_EQUAL", "POSTFIX_ADD", 
		"VAR_ADDRESS", "WHITESPACE", "DECIMAL", "FRACTION", "CHAR", "Identifier", 
		"Pointer", "Digit",
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
	public typeSpecifier(): TypeSpecifierContext {
		let _localctx: TypeSpecifierContext = new TypeSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CParser.RULE_typeSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
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
		this.enterRule(_localctx, 2, CParser.RULE_typeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
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
	public typeQualifiers(): TypeQualifiersContext {
		let _localctx: TypeQualifiersContext = new TypeQualifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CParser.RULE_typeQualifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13))) !== 0)) {
				{
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 64;
					this.typeQualifier();
					}
					}
					this.state = 67;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13))) !== 0));
				}
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
			this.state = 73;
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
				this.state = 71;
				this.typeSpecifier();
				}
				break;
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
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
			this.state = 75;
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			_localctx._qualifiers = this.typeQualifiers();
			this.state = 78;
			this.typeSpecifier();
			this.state = 79;
			this.declarator();
			this.state = 80;
			this.match(CParser.T__14);
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
		this.enterRule(_localctx, 12, CParser.RULE_initialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_localctx._qualifiers = this.typeQualifiers();
			this.state = 83;
			this.typeSpecifier();
			this.state = 84;
			this.declarator();
			this.state = 85;
			this.match(CParser.T__15);
			this.state = 86;
			_localctx._value = this.expression(0);
			this.state = 87;
			this.match(CParser.T__14);
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
			this.state = 89;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__15) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22) | (1 << CParser.T__23) | (1 << CParser.T__24) | (1 << CParser.T__25))) !== 0))) {
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
			this.state = 91;
			this.match(CParser.Identifier);
			this.state = 92;
			_localctx._operator = this.assignmentOperator();
			this.state = 93;
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
		this.enterRule(_localctx, 18, CParser.RULE_initializerList);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.match(CParser.Digit);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.match(CParser.Digit);
				this.state = 97;
				this.match(CParser.T__26);
				this.state = 98;
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
	// @RuleVersion(0)
	public malloc(): MallocContext {
		let _localctx: MallocContext = new MallocContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CParser.RULE_malloc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(CParser.T__27);
			this.state = 102;
			this.match(CParser.T__28);
			this.state = 103;
			_localctx._size = this.expression(0);
			this.state = 104;
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
	public sizeof(): SizeofContext {
		let _localctx: SizeofContext = new SizeofContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CParser.RULE_sizeof);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__30:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.match(CParser.T__30);
				this.state = 107;
				this.match(CParser.T__28);
				this.state = 108;
				_localctx._expr = this.expression(0);
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
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				_localctx._type = this.typeSpecifier();
				this.state = 110;
				this.match(CParser.T__29);
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
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, CParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new DecimalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 115;
				this.match(CParser.DECIMAL);
				}
				break;

			case 2:
				{
				_localctx = new FractionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 116;
				this.match(CParser.FRACTION);
				}
				break;

			case 3:
				{
				_localctx = new CharContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				this.match(CParser.CHAR);
				}
				break;

			case 4:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(CParser.Identifier);
				}
				break;

			case 5:
				{
				_localctx = new PointerContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 119;
				this.match(CParser.Pointer);
				}
				break;

			case 6:
				{
				_localctx = new ApplicationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 120;
				this.functionApplication();
				}
				break;

			case 7:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 121;
				this.match(CParser.T__28);
				this.state = 122;
				(_localctx as ParenthesesContext)._inner = this.expression(0);
				this.state = 123;
				this.match(CParser.T__29);
				}
				break;

			case 8:
				{
				_localctx = new VarAddressContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 125;
				(_localctx as VarAddressContext)._operator = this.match(CParser.VAR_ADDRESS);
				this.state = 126;
				(_localctx as VarAddressContext)._right = this.match(CParser.Identifier);
				}
				break;

			case 9:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.assignment();
				}
				break;

			case 10:
				{
				_localctx = new MallocExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				this.malloc();
				}
				break;

			case 11:
				{
				_localctx = new SizeOfOperatorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 129;
				this.sizeof();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 152;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 150;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 132;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 133;
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
						this.state = 134;
						(_localctx as AdditiveContext)._right = this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 135;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 136;
						(_localctx as MultiplicativeContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CParser.MUL - 42)) | (1 << (CParser.DIV - 42)) | (1 << (CParser.MOD - 42)))) !== 0))) {
							(_localctx as MultiplicativeContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 137;
						(_localctx as MultiplicativeContext)._right = this.expression(10);
						}
						break;

					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 138;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 139;
						(_localctx as RelationalContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (CParser.LESS - 51)) | (1 << (CParser.LESS_EQUAL - 51)) | (1 << (CParser.GREATER - 51)) | (1 << (CParser.GREATER_EQUAL - 51)))) !== 0))) {
							(_localctx as RelationalContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 140;
						(_localctx as RelationalContext)._right = this.expression(9);
						}
						break;

					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 141;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 142;
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
						this.state = 143;
						(_localctx as EqualityContext)._right = this.expression(8);
						}
						break;

					case 5:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 144;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 145;
						(_localctx as LogicalAndContext)._operator = this.match(CParser.LOGICAL_AND);
						this.state = 146;
						(_localctx as LogicalAndContext)._right = this.expression(7);
						}
						break;

					case 6:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 147;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 148;
						(_localctx as LogicalOrContext)._operator = this.match(CParser.LOGICAL_OR);
						this.state = 149;
						(_localctx as LogicalOrContext)._right = this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
		this.enterRule(_localctx, 26, CParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.expression(0);
			this.state = 156;
			this.match(CParser.T__14);
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
		this.enterRule(_localctx, 28, CParser.RULE_conditionalStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(CParser.T__31);
			this.state = 159;
			this.match(CParser.T__28);
			this.state = 160;
			_localctx._condition = this.expression(0);
			this.state = 161;
			this.match(CParser.T__29);
			this.state = 162;
			_localctx._truebody = this.statement();
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 163;
				this.match(CParser.T__32);
				this.state = 164;
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
		this.enterRule(_localctx, 30, CParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(CParser.T__33);
			this.state = 168;
			this.match(CParser.T__28);
			this.state = 169;
			_localctx._condition = this.expression(0);
			this.state = 170;
			this.match(CParser.T__29);
			this.state = 171;
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
		this.enterRule(_localctx, 32, CParser.RULE_labeledStatement);
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__34:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 173;
				this.match(CParser.T__34);
				this.state = 174;
				_localctx._condition = this.expression(0);
				this.state = 175;
				this.match(CParser.T__35);
				this.state = 176;
				_localctx._body = this.statement();
				this.state = 178;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.breakStatement();
					}
					break;
				}
				}
				break;
			case CParser.T__36:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(CParser.T__36);
				this.state = 181;
				this.match(CParser.T__35);
				this.state = 182;
				_localctx._body = this.statement();
				this.state = 184;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 183;
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
		this.enterRule(_localctx, 34, CParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(CParser.T__37);
			this.state = 189;
			this.match(CParser.T__14);
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
		this.enterRule(_localctx, 36, CParser.RULE_compoundStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(CParser.T__38);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__27) | (1 << CParser.T__28) | (1 << CParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.T__31 - 32)) | (1 << (CParser.T__33 - 32)) | (1 << (CParser.T__34 - 32)) | (1 << (CParser.T__36 - 32)) | (1 << (CParser.T__38 - 32)) | (1 << (CParser.T__40 - 32)) | (1 << (CParser.VAR_ADDRESS - 32)) | (1 << (CParser.DECIMAL - 32)) | (1 << (CParser.FRACTION - 32)) | (1 << (CParser.CHAR - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Pointer - 32)))) !== 0)) {
				{
				this.state = 192;
				this.blockItemList();
				}
			}

			this.state = 195;
			this.match(CParser.T__39);
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
		this.enterRule(_localctx, 38, CParser.RULE_blockItemList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 197;
				this.statement();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__27) | (1 << CParser.T__28) | (1 << CParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CParser.T__31 - 32)) | (1 << (CParser.T__33 - 32)) | (1 << (CParser.T__34 - 32)) | (1 << (CParser.T__36 - 32)) | (1 << (CParser.T__38 - 32)) | (1 << (CParser.T__40 - 32)) | (1 << (CParser.VAR_ADDRESS - 32)) | (1 << (CParser.DECIMAL - 32)) | (1 << (CParser.FRACTION - 32)) | (1 << (CParser.CHAR - 32)) | (1 << (CParser.Identifier - 32)) | (1 << (CParser.Pointer - 32)))) !== 0));
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
		this.enterRule(_localctx, 40, CParser.RULE_switchBodyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__34 || _la === CParser.T__36) {
				{
				{
				this.state = 202;
				this.labeledStatement();
				}
				}
				this.state = 207;
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
		this.enterRule(_localctx, 42, CParser.RULE_switchBodyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(CParser.T__38);
			this.state = 209;
			this.switchBodyList();
			this.state = 210;
			this.match(CParser.T__39);
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(CParser.T__40);
			this.state = 213;
			this.expression(0);
			this.state = 214;
			this.match(CParser.T__14);
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
		this.enterRule(_localctx, 46, CParser.RULE_statement);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this.initialization();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 219;
				this.conditionalStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 220;
				this.compoundStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 221;
				this.switchStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 222;
				this.labeledStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 223;
				this.switchBodyStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 224;
				this.functionDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 225;
				this.returnStatement();
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
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CParser.RULE_parameterDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.typeSpecifier();
			this.state = 229;
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
		this.enterRule(_localctx, 50, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10))) !== 0)) {
				{
				this.state = 231;
				this.parameterDeclaration();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__26) {
					{
					{
					this.state = 232;
					this.match(CParser.T__26);
					this.state = 233;
					this.parameterDeclaration();
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
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
		this.enterRule(_localctx, 52, CParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.typeSpecifier();
			this.state = 242;
			this.match(CParser.Identifier);
			this.state = 243;
			this.match(CParser.T__28);
			this.state = 244;
			this.parameterList();
			this.state = 245;
			this.match(CParser.T__29);
			this.state = 246;
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
	public argumentExpressionList(): ArgumentExpressionListContext {
		let _localctx: ArgumentExpressionListContext = new ArgumentExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__27) | (1 << CParser.T__28) | (1 << CParser.T__30))) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (CParser.VAR_ADDRESS - 56)) | (1 << (CParser.DECIMAL - 56)) | (1 << (CParser.FRACTION - 56)) | (1 << (CParser.CHAR - 56)) | (1 << (CParser.Identifier - 56)) | (1 << (CParser.Pointer - 56)))) !== 0)) {
				{
				this.state = 248;
				this.expression(0);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__26) {
					{
					{
					this.state = 249;
					this.match(CParser.T__26);
					this.state = 250;
					this.expression(0);
					}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
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
	public functionApplication(): FunctionApplicationContext {
		let _localctx: FunctionApplicationContext = new FunctionApplicationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CParser.RULE_functionApplication);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(CParser.Identifier);
			this.state = 259;
			this.match(CParser.T__28);
			this.state = 260;
			this.argumentExpressionList();
			this.state = 261;
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 263;
				this.functionDeclaration();
				}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10))) !== 0));
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
		case 12:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u010F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x06\x04D\n\x04\r\x04\x0E\x04E\x05\x04H\n\x04\x03\x05\x03\x05" +
		"\x05\x05L\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\vf\n\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\rs\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x85\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x99\n" +
		"\x0E\f\x0E\x0E\x0E\x9C\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xA8\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x05\x12\xB5\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xBB\n\x12\x05" +
		"\x12\xBD\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\xC4\n\x14" +
		"\x03\x14\x03\x14\x03\x15\x06\x15\xC9\n\x15\r\x15\x0E\x15\xCA\x03\x16\x07" +
		"\x16\xCE\n\x16\f\x16\x0E\x16\xD1\v\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xE5\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xED\n\x1B\f\x1B\x0E\x1B\xF0" +
		"\v\x1B\x05\x1B\xF2\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\xFE\n\x1D\f\x1D\x0E\x1D\u0101" +
		"\v\x1D\x05\x1D\u0103\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1F\x06\x1F\u010B\n\x1F\r\x1F\x0E\x1F\u010C\x03\x1F\x02\x02\x03\x1A " +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\n\x03\x02\x03\r" +
		"\x03\x02\x0E\x10\x03\x02?@\x03\x02\x12\x1C\x03\x02./\x04\x02,-00\x03\x02" +
		"58\x03\x0234\x02\u011A\x02>\x03\x02\x02\x02\x04@\x03\x02\x02\x02\x06G" +
		"\x03\x02\x02\x02\bK\x03\x02\x02\x02\nM\x03\x02\x02\x02\fO\x03\x02\x02" +
		"\x02\x0ET\x03\x02\x02\x02\x10[\x03\x02\x02\x02\x12]\x03\x02\x02\x02\x14" +
		"e\x03\x02\x02\x02\x16g\x03\x02\x02\x02\x18r\x03\x02\x02\x02\x1A\x84\x03" +
		"\x02\x02\x02\x1C\x9D\x03\x02\x02\x02\x1E\xA0\x03\x02\x02\x02 \xA9\x03" +
		"\x02\x02\x02\"\xBC\x03\x02\x02\x02$\xBE\x03\x02\x02\x02&\xC1\x03\x02\x02" +
		"\x02(\xC8\x03\x02\x02\x02*\xCF\x03\x02\x02\x02,\xD2\x03\x02\x02\x02.\xD6" +
		"\x03\x02\x02\x020\xE4\x03\x02\x02\x022\xE6\x03\x02\x02\x024\xF1\x03\x02" +
		"\x02\x026\xF3\x03\x02\x02\x028\u0102\x03\x02\x02\x02:\u0104\x03\x02\x02" +
		"\x02<\u010A\x03\x02\x02\x02>?\t\x02\x02\x02?\x03\x03\x02\x02\x02@A\t\x03" +
		"\x02\x02A\x05\x03\x02\x02\x02BD\x05\x04\x03\x02CB\x03\x02\x02\x02DE\x03" +
		"\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GC\x03" +
		"\x02\x02\x02GH\x03\x02\x02\x02H\x07\x03\x02\x02\x02IL\x05\x02\x02\x02" +
		"JL\x05\x04\x03\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\t\x03\x02\x02" +
		"\x02MN\t\x04\x02\x02N\v\x03\x02\x02\x02OP\x05\x06\x04\x02PQ\x05\x02\x02" +
		"\x02QR\x05\n\x06\x02RS\x07\x11\x02\x02S\r\x03\x02\x02\x02TU\x05\x06\x04" +
		"\x02UV\x05\x02\x02\x02VW\x05\n\x06\x02WX\x07\x12\x02\x02XY\x05\x1A\x0E" +
		"\x02YZ\x07\x11\x02\x02Z\x0F\x03\x02\x02\x02[\\\t\x05\x02\x02\\\x11\x03" +
		"\x02\x02\x02]^\x07?\x02\x02^_\x05\x10\t\x02_`\x05\x1A\x0E\x02`\x13\x03" +
		"\x02\x02\x02af\x07A\x02\x02bc\x07A\x02\x02cd\x07\x1D\x02\x02df\x05\x14" +
		"\v\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02f\x15\x03\x02\x02\x02gh\x07" +
		"\x1E\x02\x02hi\x07\x1F\x02\x02ij\x05\x1A\x0E\x02jk\x07 \x02\x02k\x17\x03" +
		"\x02\x02\x02lm\x07!\x02\x02mn\x07\x1F\x02\x02ns\x05\x1A\x0E\x02op\x05" +
		"\x02\x02\x02pq\x07 \x02\x02qs\x03\x02\x02\x02rl\x03\x02\x02\x02ro\x03" +
		"\x02\x02\x02s\x19\x03\x02\x02\x02tu\b\x0E\x01\x02u\x85\x07<\x02\x02v\x85" +
		"\x07=\x02\x02w\x85\x07>\x02\x02x\x85\x07?\x02\x02y\x85\x07@\x02\x02z\x85" +
		"\x05:\x1E\x02{|\x07\x1F\x02\x02|}\x05\x1A\x0E\x02}~\x07 \x02\x02~\x85" +
		"\x03\x02\x02\x02\x7F\x80\x07:\x02\x02\x80\x85\x07?\x02\x02\x81\x85\x05" +
		"\x12\n\x02\x82\x85\x05\x16\f\x02\x83\x85\x05\x18\r\x02\x84t\x03\x02\x02" +
		"\x02\x84v\x03\x02\x02\x02\x84w\x03\x02\x02\x02\x84x\x03\x02\x02\x02\x84" +
		"y\x03\x02\x02\x02\x84z\x03\x02\x02\x02\x84{\x03\x02\x02\x02\x84\x7F\x03" +
		"\x02\x02\x02\x84\x81\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03" +
		"\x02\x02\x02\x85\x9A\x03\x02\x02\x02\x86\x87\f\f\x02\x02\x87\x88\t\x06" +
		"\x02\x02\x88\x99\x05\x1A\x0E\r\x89\x8A\f\v\x02\x02\x8A\x8B\t\x07\x02\x02" +
		"\x8B\x99\x05\x1A\x0E\f\x8C\x8D\f\n\x02\x02\x8D\x8E\t\b\x02\x02\x8E\x99" +
		"\x05\x1A\x0E\v\x8F\x90\f\t\x02\x02\x90\x91\t\t\x02\x02\x91\x99\x05\x1A" +
		"\x0E\n\x92\x93\f\b\x02\x02\x93\x94\x071\x02\x02\x94\x99\x05\x1A\x0E\t" +
		"\x95\x96\f\x07\x02\x02\x96\x97\x072\x02\x02\x97\x99\x05\x1A\x0E\b\x98" +
		"\x86\x03\x02\x02\x02\x98\x89\x03\x02\x02\x02\x98\x8C\x03\x02\x02\x02\x98" +
		"\x8F\x03\x02\x02\x02\x98\x92\x03\x02\x02\x02\x98\x95\x03\x02\x02\x02\x99" +
		"\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B" +
		"\x1B\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\x9E\x05\x1A\x0E\x02\x9E" +
		"\x9F\x07\x11\x02\x02\x9F\x1D\x03\x02\x02\x02\xA0\xA1\x07\"\x02\x02\xA1" +
		"\xA2\x07\x1F\x02\x02\xA2\xA3\x05\x1A\x0E\x02\xA3\xA4\x07 \x02\x02\xA4" +
		"\xA7\x050\x19\x02\xA5\xA6\x07#\x02\x02\xA6\xA8\x050\x19\x02\xA7\xA5\x03" +
		"\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x1F\x03\x02\x02\x02\xA9\xAA\x07" +
		"$\x02\x02\xAA\xAB\x07\x1F\x02\x02\xAB\xAC\x05\x1A\x0E\x02\xAC\xAD\x07" +
		" \x02\x02\xAD\xAE\x05,\x17\x02\xAE!\x03\x02\x02\x02\xAF\xB0\x07%\x02\x02" +
		"\xB0\xB1\x05\x1A\x0E\x02\xB1\xB2\x07&\x02\x02\xB2\xB4\x050\x19\x02\xB3" +
		"\xB5\x05$\x13\x02\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5" +
		"\xBD\x03\x02\x02\x02\xB6\xB7\x07\'\x02\x02\xB7\xB8\x07&\x02\x02\xB8\xBA" +
		"\x050\x19\x02\xB9\xBB\x05$\x13\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03" +
		"\x02\x02\x02\xBB\xBD\x03\x02\x02\x02\xBC\xAF\x03\x02\x02\x02\xBC\xB6\x03" +
		"\x02\x02\x02\xBD#\x03\x02\x02\x02\xBE\xBF\x07(\x02\x02\xBF\xC0\x07\x11" +
		"\x02\x02\xC0%\x03\x02\x02\x02\xC1\xC3\x07)\x02\x02\xC2\xC4\x05(\x15\x02" +
		"\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5\xC6\x07*\x02\x02\xC6\'\x03\x02\x02\x02\xC7\xC9\x050\x19\x02\xC8\xC7" +
		"\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB)\x03\x02\x02\x02\xCC\xCE\x05\"\x12\x02\xCD\xCC\x03" +
		"\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03" +
		"\x02\x02\x02\xD0+\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x07" +
		")\x02\x02\xD3\xD4\x05*\x16\x02\xD4\xD5\x07*\x02\x02\xD5-\x03\x02\x02\x02" +
		"\xD6\xD7\x07+\x02\x02\xD7\xD8\x05\x1A\x0E\x02\xD8\xD9\x07\x11\x02\x02" +
		"\xD9/\x03\x02\x02\x02\xDA\xE5\x05\x1C\x0F\x02\xDB\xE5\x05\f\x07\x02\xDC" +
		"\xE5\x05\x0E\b\x02\xDD\xE5\x05\x1E\x10\x02\xDE\xE5\x05&\x14\x02\xDF\xE5" +
		"\x05 \x11\x02\xE0\xE5\x05\"\x12\x02\xE1\xE5\x05,\x17\x02\xE2\xE5\x056" +
		"\x1C\x02\xE3\xE5\x05.\x18\x02\xE4\xDA\x03\x02\x02\x02\xE4\xDB\x03\x02" +
		"\x02\x02\xE4\xDC\x03\x02\x02\x02\xE4\xDD\x03\x02\x02\x02\xE4\xDE\x03\x02" +
		"\x02\x02\xE4\xDF\x03\x02\x02\x02\xE4\xE0\x03\x02\x02\x02\xE4\xE1\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02\x02\xE51\x03\x02" +
		"\x02\x02\xE6\xE7\x05\x02\x02\x02\xE7\xE8\x05\n\x06\x02\xE83\x03\x02\x02" +
		"\x02\xE9\xEE\x052\x1A\x02\xEA\xEB\x07\x1D\x02\x02\xEB\xED\x052\x1A\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02" +
		"\xEE\xEF\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03\x02\x02\x02" +
		"\xF1\xE9\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF25\x03\x02\x02\x02" +
		"\xF3\xF4\x05\x02\x02\x02\xF4\xF5\x07?\x02\x02\xF5\xF6\x07\x1F\x02\x02" +
		"\xF6\xF7\x054\x1B\x02\xF7\xF8\x07 \x02\x02\xF8\xF9\x05&\x14\x02\xF97\x03" +
		"\x02\x02\x02\xFA\xFF\x05\x1A\x0E\x02\xFB\xFC\x07\x1D\x02\x02\xFC\xFE\x05" +
		"\x1A\x0E\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD" +
		"\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0103\x03\x02\x02\x02" +
		"\u0101\xFF\x03\x02\x02\x02\u0102\xFA\x03\x02\x02\x02\u0102\u0103\x03\x02" +
		"\x02\x02\u01039\x03\x02\x02\x02\u0104\u0105\x07?\x02\x02\u0105\u0106\x07" +
		"\x1F\x02\x02\u0106\u0107\x058\x1D\x02\u0107\u0108\x07 \x02\x02\u0108;" +
		"\x03\x02\x02\x02\u0109\u010B\x056\x1C\x02\u010A\u0109\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03" +
		"\x02\x02\x02\u010D=\x03\x02\x02\x02\x17EGKer\x84\x98\x9A\xA7\xB4\xBA\xBC" +
		"\xC3\xCA\xCF\xE4\xEE\xF1\xFF\u0102\u010C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
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


export class TypeQualifiersContext extends ParserRuleContext {
	public typeQualifier(): TypeQualifierContext[];
	public typeQualifier(i: number): TypeQualifierContext;
	public typeQualifier(i?: number): TypeQualifierContext | TypeQualifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeQualifierContext);
		} else {
			return this.getRuleContext(i, TypeQualifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_typeQualifiers; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterTypeQualifiers) {
			listener.enterTypeQualifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitTypeQualifiers) {
			listener.exitTypeQualifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitTypeQualifiers) {
			return visitor.visitTypeQualifiers(this);
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


export class DeclarationContext extends ParserRuleContext {
	public _qualifiers!: TypeQualifiersContext;
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public typeQualifiers(): TypeQualifiersContext {
		return this.getRuleContext(0, TypeQualifiersContext);
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
	public _qualifiers!: TypeQualifiersContext;
	public _value!: ExpressionContext;
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public declarator(): DeclaratorContext {
		return this.getRuleContext(0, DeclaratorContext);
	}
	public typeQualifiers(): TypeQualifiersContext {
		return this.getRuleContext(0, TypeQualifiersContext);
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


export class MallocContext extends ParserRuleContext {
	public _size!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_malloc; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMalloc) {
			listener.enterMalloc(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMalloc) {
			listener.exitMalloc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMalloc) {
			return visitor.visitMalloc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeofContext extends ParserRuleContext {
	public _expr!: ExpressionContext;
	public _type!: TypeSpecifierContext;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public typeSpecifier(): TypeSpecifierContext | undefined {
		return this.tryGetRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_sizeof; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSizeof) {
			listener.enterSizeof(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSizeof) {
			listener.exitSizeof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSizeof) {
			return visitor.visitSizeof(this);
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
export class CharContext extends ExpressionContext {
	public CHAR(): TerminalNode { return this.getToken(CParser.CHAR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterChar) {
			listener.enterChar(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitChar) {
			listener.exitChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitChar) {
			return visitor.visitChar(this);
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
export class VarAddressContext extends ExpressionContext {
	public _operator!: Token;
	public _right!: Token;
	public VAR_ADDRESS(): TerminalNode { return this.getToken(CParser.VAR_ADDRESS, 0); }
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterVarAddress) {
			listener.enterVarAddress(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitVarAddress) {
			listener.exitVarAddress(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitVarAddress) {
			return visitor.visitVarAddress(this);
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
export class MallocExpressionContext extends ExpressionContext {
	public malloc(): MallocContext {
		return this.getRuleContext(0, MallocContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterMallocExpression) {
			listener.enterMallocExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitMallocExpression) {
			listener.exitMallocExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitMallocExpression) {
			return visitor.visitMallocExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SizeOfOperatorContext extends ExpressionContext {
	public sizeof(): SizeofContext {
		return this.getRuleContext(0, SizeofContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSizeOfOperator) {
			listener.enterSizeOfOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSizeOfOperator) {
			listener.exitSizeOfOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSizeOfOperator) {
			return visitor.visitSizeOfOperator(this);
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


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
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
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
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


export class ParameterDeclarationContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
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
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
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


export class ArgumentExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_argumentExpressionList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArgumentExpressionList) {
			listener.enterArgumentExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArgumentExpressionList) {
			listener.exitArgumentExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArgumentExpressionList) {
			return visitor.visitArgumentExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionApplicationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public argumentExpressionList(): ArgumentExpressionListContext {
		return this.getRuleContext(0, ArgumentExpressionListContext);
	}
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
	public functionDeclaration(): FunctionDeclarationContext[];
	public functionDeclaration(i: number): FunctionDeclarationContext;
	public functionDeclaration(i?: number): FunctionDeclarationContext | FunctionDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDeclarationContext);
		} else {
			return this.getRuleContext(i, FunctionDeclarationContext);
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


