// Generated from src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly MUL = 52;
	public static readonly DIV = 53;
	public static readonly ADD = 54;
	public static readonly SUB = 55;
	public static readonly MOD = 56;
	public static readonly LOGICAL_AND = 57;
	public static readonly LOGICAL_OR = 58;
	public static readonly EQUALS = 59;
	public static readonly NOT_EQUALS = 60;
	public static readonly LESS = 61;
	public static readonly LESS_EQUAL = 62;
	public static readonly GREATER = 63;
	public static readonly GREATER_EQUAL = 64;
	public static readonly UNARY_ADD = 65;
	public static readonly UNARY_SUB = 66;
	public static readonly NOT = 67;
	public static readonly VAR_ADDRESS = 68;
	public static readonly WHITESPACE = 69;
	public static readonly DECIMAL = 70;
	public static readonly FRACTION = 71;
	public static readonly CHAR = 72;
	public static readonly STRING = 73;
	public static readonly COMMENT = 74;
	public static readonly LINE_COMMENT = 75;
	public static readonly INCLUDE = 76;
	public static readonly Identifier = 77;
	public static readonly RULE_typeSpecifier = 0;
	public static readonly RULE_typeQualifier = 1;
	public static readonly RULE_typeQualifiers = 2;
	public static readonly RULE_declarationSpecifier = 3;
	public static readonly RULE_pointerPart = 4;
	public static readonly RULE_pointer = 5;
	public static readonly RULE_initialization = 6;
	public static readonly RULE_initializationListPart = 7;
	public static readonly RULE_initializationList = 8;
	public static readonly RULE_binaryAssignmentOperator = 9;
	public static readonly RULE_unaryAssignmentOperator = 10;
	public static readonly RULE_casting = 11;
	public static readonly RULE_binaryAssignment = 12;
	public static readonly RULE_postfixAssignment = 13;
	public static readonly RULE_prefixAssignment = 14;
	public static readonly RULE_assignment = 15;
	public static readonly RULE_assignmentList = 16;
	public static readonly RULE_pointerValueAssignment = 17;
	public static readonly RULE_array = 18;
	public static readonly RULE_arrayInitialization = 19;
	public static readonly RULE_arrayDeclaration = 20;
	public static readonly RULE_arrayAccess = 21;
	public static readonly RULE_arrayValueAssignment = 22;
	public static readonly RULE_malloc = 23;
	public static readonly RULE_sizeOfArgument = 24;
	public static readonly RULE_sizeof = 25;
	public static readonly RULE_free = 26;
	public static readonly RULE_printHeap = 27;
	public static readonly RULE_printStack = 28;
	public static readonly RULE_printf = 29;
	public static readonly RULE_variableAccess = 30;
	public static readonly RULE_expression = 31;
	public static readonly RULE_expressionStatement = 32;
	public static readonly RULE_conditionalStatement = 33;
	public static readonly RULE_switchStatement = 34;
	public static readonly RULE_labeledStatement = 35;
	public static readonly RULE_breakStatement = 36;
	public static readonly RULE_compoundStatement = 37;
	public static readonly RULE_sequenceStatement = 38;
	public static readonly RULE_switchBodyList = 39;
	public static readonly RULE_switchBodyStatement = 40;
	public static readonly RULE_returnStatement = 41;
	public static readonly RULE_loopInitial = 42;
	public static readonly RULE_forLoop = 43;
	public static readonly RULE_doWhileLoop = 44;
	public static readonly RULE_whileLoop = 45;
	public static readonly RULE_statement = 46;
	public static readonly RULE_parameterDeclaration = 47;
	public static readonly RULE_parameterList = 48;
	public static readonly RULE_functionDeclaration = 49;
	public static readonly RULE_argumentExpressionList = 50;
	public static readonly RULE_functionApplication = 51;
	public static readonly RULE_program = 52;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"typeSpecifier", "typeQualifier", "typeQualifiers", "declarationSpecifier", 
		"pointerPart", "pointer", "initialization", "initializationListPart", 
		"initializationList", "binaryAssignmentOperator", "unaryAssignmentOperator", 
		"casting", "binaryAssignment", "postfixAssignment", "prefixAssignment", 
		"assignment", "assignmentList", "pointerValueAssignment", "array", "arrayInitialization", 
		"arrayDeclaration", "arrayAccess", "arrayValueAssignment", "malloc", "sizeOfArgument", 
		"sizeof", "free", "printHeap", "printStack", "printf", "variableAccess", 
		"expression", "expressionStatement", "conditionalStatement", "switchStatement", 
		"labeledStatement", "breakStatement", "compoundStatement", "sequenceStatement", 
		"switchBodyList", "switchBodyStatement", "returnStatement", "loopInitial", 
		"forLoop", "doWhileLoop", "whileLoop", "statement", "parameterDeclaration", 
		"parameterList", "functionDeclaration", "argumentExpressionList", "functionApplication", 
		"program",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'void'", "'char'", "'unsigned char'", "'short'", "'unsigned short'", 
		"'int'", "'unsigned int'", "'long'", "'unsigned long'", "'float'", "'double'", 
		"'const'", "'restrict'", "'volatile'", "'('", "')'", "'='", "';'", "','", 
		"'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", 
		"'|='", "'{'", "'}'", "'['", "']'", "'[]'", "'malloc'", "'sizeof'", "'free'", 
		"'print_heap'", "'print_stack'", "'printf'", "'if'", "'else'", "'switch'", 
		"'case'", "':'", "'default'", "'break'", "'return'", "'for'", "'do'", 
		"'while'", "'*'", "'/'", "'+'", "'-'", "'%'", "'&&'", "'||'", "'=='", 
		"'!='", "'<'", "'<='", "'>'", "'>='", "'++'", "'--'", "'!'", "'&'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "MUL", "DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", 
		"LOGICAL_OR", "EQUALS", "NOT_EQUALS", "LESS", "LESS_EQUAL", "GREATER", 
		"GREATER_EQUAL", "UNARY_ADD", "UNARY_SUB", "NOT", "VAR_ADDRESS", "WHITESPACE", 
		"DECIMAL", "FRACTION", "CHAR", "STRING", "COMMENT", "LINE_COMMENT", "INCLUDE", 
		"Identifier",
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
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.match(CParser.T__0);
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 107;
					this.match(CParser.MUL);
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.match(CParser.T__1);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 114;
					this.match(CParser.MUL);
					}
					}
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.match(CParser.T__2);
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 121;
					this.match(CParser.MUL);
					}
					}
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__3:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.match(CParser.T__3);
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 128;
					this.match(CParser.MUL);
					}
					}
					this.state = 133;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__4:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 134;
				this.match(CParser.T__4);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 135;
					this.match(CParser.MUL);
					}
					}
					this.state = 140;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__5:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 141;
				this.match(CParser.T__5);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 142;
					this.match(CParser.MUL);
					}
					}
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__6:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 148;
				this.match(CParser.T__6);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 149;
					this.match(CParser.MUL);
					}
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__7:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 155;
				this.match(CParser.T__7);
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 156;
					this.match(CParser.MUL);
					}
					}
					this.state = 161;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__8:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 162;
				this.match(CParser.T__8);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 163;
					this.match(CParser.MUL);
					}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__9:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 169;
				this.match(CParser.T__9);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 170;
					this.match(CParser.MUL);
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CParser.T__10:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 176;
				this.match(CParser.T__10);
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.MUL) {
					{
					{
					this.state = 177;
					this.match(CParser.MUL);
					}
					}
					this.state = 182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public typeQualifier(): TypeQualifierContext {
		let _localctx: TypeQualifierContext = new TypeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CParser.RULE_typeQualifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
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
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13))) !== 0)) {
				{
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 187;
					this.typeQualifier();
					}
					}
					this.state = 190;
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
			this.state = 196;
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
				this.state = 194;
				this.typeSpecifier();
				}
				break;
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__13:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
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
	public pointerPart(): PointerPartContext {
		let _localctx: PointerPartContext = new PointerPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CParser.RULE_pointerPart);
		try {
			this.state = 203;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 198;
				this.match(CParser.T__14);
				this.state = 199;
				_localctx._inner = this.expression(0);
				this.state = 200;
				this.match(CParser.T__15);
				}
				break;
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.match(CParser.Identifier);
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
	public pointer(): PointerContext {
		let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CParser.RULE_pointer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(CParser.MUL);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.MUL) {
				{
				{
				this.state = 206;
				this.match(CParser.MUL);
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 212;
			this.pointerPart();
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			_localctx._qualifiers = this.typeQualifiers();
			this.state = 215;
			this.typeSpecifier();
			this.state = 216;
			this.match(CParser.Identifier);
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.T__16) {
				{
				this.state = 217;
				this.match(CParser.T__16);
				this.state = 219;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 218;
					this.casting();
					}
					break;
				}
				this.state = 221;
				_localctx._value = this.expression(0);
				}
			}

			this.state = 224;
			this.match(CParser.T__17);
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
	public initializationListPart(): InitializationListPartContext {
		let _localctx: InitializationListPartContext = new InitializationListPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CParser.RULE_initializationListPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(CParser.Identifier);
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.T__16) {
				{
				this.state = 227;
				this.match(CParser.T__16);
				this.state = 229;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 228;
					this.casting();
					}
					break;
				}
				this.state = 231;
				_localctx._value = this.expression(0);
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
	public initializationList(): InitializationListContext {
		let _localctx: InitializationListContext = new InitializationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CParser.RULE_initializationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			_localctx._qualifiers = this.typeQualifiers();
			this.state = 235;
			this.typeSpecifier();
			this.state = 236;
			this.initializationListPart();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__18) {
				{
				{
				this.state = 237;
				this.match(CParser.T__18);
				this.state = 238;
				this.initializationListPart();
				}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 244;
			this.match(CParser.T__17);
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
	public binaryAssignmentOperator(): BinaryAssignmentOperatorContext {
		let _localctx: BinaryAssignmentOperatorContext = new BinaryAssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CParser.RULE_binaryAssignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__16) | (1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22) | (1 << CParser.T__23) | (1 << CParser.T__24) | (1 << CParser.T__25) | (1 << CParser.T__26) | (1 << CParser.T__27) | (1 << CParser.T__28))) !== 0))) {
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
	public unaryAssignmentOperator(): UnaryAssignmentOperatorContext {
		let _localctx: UnaryAssignmentOperatorContext = new UnaryAssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CParser.RULE_unaryAssignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			_la = this._input.LA(1);
			if (!(_la === CParser.UNARY_ADD || _la === CParser.UNARY_SUB)) {
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
	public casting(): CastingContext {
		let _localctx: CastingContext = new CastingContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CParser.RULE_casting);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.match(CParser.T__14);
			this.state = 251;
			this.typeSpecifier();
			this.state = 252;
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
	public binaryAssignment(): BinaryAssignmentContext {
		let _localctx: BinaryAssignmentContext = new BinaryAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CParser.RULE_binaryAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(CParser.Identifier);
			this.state = 255;
			_localctx._operator = this.binaryAssignmentOperator();
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.casting();
				}
				break;
			}
			this.state = 259;
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
	public postfixAssignment(): PostfixAssignmentContext {
		let _localctx: PostfixAssignmentContext = new PostfixAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CParser.RULE_postfixAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this.match(CParser.Identifier);
			this.state = 262;
			_localctx._operator = this.unaryAssignmentOperator();
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
	public prefixAssignment(): PrefixAssignmentContext {
		let _localctx: PrefixAssignmentContext = new PrefixAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CParser.RULE_prefixAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			_localctx._operator = this.unaryAssignmentOperator();
			this.state = 265;
			this.match(CParser.Identifier);
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
		this.enterRule(_localctx, 30, CParser.RULE_assignment);
		try {
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 267;
				this.binaryAssignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 268;
				this.prefixAssignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 269;
				this.postfixAssignment();
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
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CParser.RULE_assignmentList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.assignment();
			this.state = 277;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 273;
					this.match(CParser.T__18);
					this.state = 274;
					this.assignment();
					}
					}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
	public pointerValueAssignment(): PointerValueAssignmentContext {
		let _localctx: PointerValueAssignmentContext = new PointerValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CParser.RULE_pointerValueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.pointer();
			this.state = 281;
			_localctx._operator = this.binaryAssignmentOperator();
			this.state = 282;
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CParser.RULE_array);
		let _la: number;
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__29:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 284;
				this.match(CParser.T__29);
				this.state = 285;
				this.expression(0);
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__18) {
					{
					{
					this.state = 286;
					this.match(CParser.T__18);
					this.state = 287;
					this.expression(0);
					}
					}
					this.state = 292;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 293;
				this.match(CParser.T__30);
				}
				break;
			case CParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 295;
				this.match(CParser.STRING);
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
	public arrayInitialization(): ArrayInitializationContext {
		let _localctx: ArrayInitializationContext = new ArrayInitializationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CParser.RULE_arrayInitialization);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			_localctx._qualifiers = this.typeQualifiers();
			this.state = 299;
			this.typeSpecifier();
			this.state = 300;
			this.match(CParser.Identifier);
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__31:
				{
				this.state = 301;
				this.match(CParser.T__31);
				this.state = 302;
				this.expression(0);
				this.state = 303;
				this.match(CParser.T__32);
				}
				break;
			case CParser.T__33:
				{
				this.state = 305;
				this.match(CParser.T__33);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 308;
			this.match(CParser.T__16);
			this.state = 309;
			_localctx._value = this.expression(0);
			this.state = 310;
			this.match(CParser.T__17);
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
	public arrayDeclaration(): ArrayDeclarationContext {
		let _localctx: ArrayDeclarationContext = new ArrayDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CParser.RULE_arrayDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			_localctx._qualifiers = this.typeQualifiers();
			this.state = 313;
			this.typeSpecifier();
			this.state = 314;
			this.match(CParser.Identifier);
			this.state = 315;
			this.match(CParser.T__31);
			this.state = 316;
			_localctx._size = this.expression(0);
			this.state = 317;
			this.match(CParser.T__32);
			this.state = 318;
			this.match(CParser.T__17);
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
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CParser.RULE_arrayAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			_localctx._name = this.match(CParser.Identifier);
			this.state = 321;
			this.match(CParser.T__31);
			this.state = 322;
			_localctx._index = this.expression(0);
			this.state = 323;
			this.match(CParser.T__32);
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
	public arrayValueAssignment(): ArrayValueAssignmentContext {
		let _localctx: ArrayValueAssignmentContext = new ArrayValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CParser.RULE_arrayValueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.arrayAccess();
			this.state = 326;
			_localctx._operator = this.binaryAssignmentOperator();
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 327;
				this.casting();
				}
				break;
			}
			this.state = 330;
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
	public malloc(): MallocContext {
		let _localctx: MallocContext = new MallocContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CParser.RULE_malloc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(CParser.T__34);
			this.state = 333;
			this.match(CParser.T__14);
			this.state = 334;
			_localctx._size = this.expression(0);
			this.state = 335;
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
	public sizeOfArgument(): SizeOfArgumentContext {
		let _localctx: SizeOfArgumentContext = new SizeOfArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CParser.RULE_sizeOfArgument);
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__14:
			case CParser.T__29:
			case CParser.T__34:
			case CParser.T__35:
			case CParser.T__36:
			case CParser.MUL:
			case CParser.SUB:
			case CParser.UNARY_ADD:
			case CParser.UNARY_SUB:
			case CParser.NOT:
			case CParser.VAR_ADDRESS:
			case CParser.DECIMAL:
			case CParser.FRACTION:
			case CParser.CHAR:
			case CParser.STRING:
			case CParser.COMMENT:
			case CParser.LINE_COMMENT:
			case CParser.INCLUDE:
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 337;
				this.expression(0);
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
				this.state = 338;
				this.typeSpecifier();
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
	public sizeof(): SizeofContext {
		let _localctx: SizeofContext = new SizeofContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CParser.RULE_sizeof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.match(CParser.T__35);
			this.state = 342;
			this.match(CParser.T__14);
			this.state = 343;
			_localctx._arg = this.sizeOfArgument();
			this.state = 344;
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
	public free(): FreeContext {
		let _localctx: FreeContext = new FreeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CParser.RULE_free);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(CParser.T__36);
			this.state = 347;
			this.match(CParser.T__14);
			this.state = 348;
			this.match(CParser.Identifier);
			this.state = 349;
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
	public printHeap(): PrintHeapContext {
		let _localctx: PrintHeapContext = new PrintHeapContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CParser.RULE_printHeap);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.match(CParser.T__37);
			this.state = 352;
			this.match(CParser.T__14);
			this.state = 353;
			this.match(CParser.T__15);
			this.state = 354;
			this.match(CParser.T__17);
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
	public printStack(): PrintStackContext {
		let _localctx: PrintStackContext = new PrintStackContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CParser.RULE_printStack);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(CParser.T__38);
			this.state = 357;
			this.match(CParser.T__14);
			this.state = 358;
			this.match(CParser.T__15);
			this.state = 359;
			this.match(CParser.T__17);
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
	public printf(): PrintfContext {
		let _localctx: PrintfContext = new PrintfContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CParser.RULE_printf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(CParser.T__39);
			this.state = 362;
			this.match(CParser.T__14);
			this.state = 363;
			this.expression(0);
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__18) {
				{
				{
				this.state = 364;
				this.match(CParser.T__18);
				this.state = 365;
				this.expression(0);
				}
				}
				this.state = 370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 371;
			this.match(CParser.T__15);
			this.state = 372;
			this.match(CParser.T__17);
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
	public variableAccess(): VariableAccessContext {
		let _localctx: VariableAccessContext = new VariableAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CParser.RULE_variableAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(CParser.Identifier);
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 375;
				this.match(CParser.T__31);
				this.state = 376;
				_localctx._index = this.expression(0);
				this.state = 377;
				this.match(CParser.T__32);
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
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, CParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				_localctx = new DecimalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 382;
				this.match(CParser.DECIMAL);
				}
				break;

			case 2:
				{
				_localctx = new FractionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 383;
				this.match(CParser.FRACTION);
				}
				break;

			case 3:
				{
				_localctx = new CharContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 384;
				this.match(CParser.CHAR);
				}
				break;

			case 4:
				{
				_localctx = new StringContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 385;
				this.match(CParser.STRING);
				}
				break;

			case 5:
				{
				_localctx = new IdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 386;
				this.match(CParser.Identifier);
				}
				break;

			case 6:
				{
				_localctx = new ApplicationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 387;
				this.functionApplication();
				}
				break;

			case 7:
				{
				_localctx = new ParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 388;
				this.match(CParser.T__14);
				this.state = 389;
				(_localctx as ParenthesesContext)._inner = this.expression(0);
				this.state = 390;
				this.match(CParser.T__15);
				}
				break;

			case 8:
				{
				_localctx = new AccessContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 392;
				this.arrayAccess();
				}
				break;

			case 9:
				{
				_localctx = new VarAddressContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 393;
				(_localctx as VarAddressContext)._operator = this.match(CParser.VAR_ADDRESS);
				this.state = 394;
				(_localctx as VarAddressContext)._right = this.variableAccess();
				}
				break;

			case 10:
				{
				_localctx = new SizeOfOperatorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 395;
				this.sizeof();
				}
				break;

			case 11:
				{
				_localctx = new UnaryContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 396;
				(_localctx as UnaryContext)._operator = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CParser.SUB || _la === CParser.NOT)) {
					(_localctx as UnaryContext)._operator = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 397;
				(_localctx as UnaryContext)._right = this.expression(17);
				}
				break;

			case 12:
				{
				_localctx = new PointerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 398;
				this.pointer();
				}
				break;

			case 13:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 399;
				this.assignmentList();
				}
				break;

			case 14:
				{
				_localctx = new ArrayValueAssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 400;
				this.arrayValueAssignment();
				}
				break;

			case 15:
				{
				_localctx = new PointerValueAssignmentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 401;
				this.pointerValueAssignment();
				}
				break;

			case 16:
				{
				_localctx = new MallocExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 402;
				this.malloc();
				}
				break;

			case 17:
				{
				_localctx = new FreeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 403;
				this.free();
				}
				break;

			case 18:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 404;
				this.array();
				}
				break;

			case 19:
				{
				_localctx = new CommentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 405;
				this.match(CParser.COMMENT);
				}
				break;

			case 20:
				{
				_localctx = new LineCommentExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 406;
				this.match(CParser.LINE_COMMENT);
				}
				break;

			case 21:
				{
				_localctx = new IncludeExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 407;
				this.match(CParser.INCLUDE);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 430;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 428;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 410;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 411;
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
						this.state = 412;
						(_localctx as AdditiveContext)._right = this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 413;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 414;
						(_localctx as MultiplicativeContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (CParser.MUL - 52)) | (1 << (CParser.DIV - 52)) | (1 << (CParser.MOD - 52)))) !== 0))) {
							(_localctx as MultiplicativeContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 415;
						(_localctx as MultiplicativeContext)._right = this.expression(16);
						}
						break;

					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 416;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 417;
						(_localctx as RelationalContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (CParser.LESS - 61)) | (1 << (CParser.LESS_EQUAL - 61)) | (1 << (CParser.GREATER - 61)) | (1 << (CParser.GREATER_EQUAL - 61)))) !== 0))) {
							(_localctx as RelationalContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 418;
						(_localctx as RelationalContext)._right = this.expression(15);
						}
						break;

					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 419;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 420;
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
						this.state = 421;
						(_localctx as EqualityContext)._right = this.expression(14);
						}
						break;

					case 5:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalAndContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 422;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 423;
						(_localctx as LogicalAndContext)._operator = this.match(CParser.LOGICAL_AND);
						this.state = 424;
						(_localctx as LogicalAndContext)._right = this.expression(13);
						}
						break;

					case 6:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogicalOrContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
						this.state = 425;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 426;
						(_localctx as LogicalOrContext)._operator = this.match(CParser.LOGICAL_OR);
						this.state = 427;
						(_localctx as LogicalOrContext)._right = this.expression(12);
						}
						break;
					}
					}
				}
				this.state = 432;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
		this.enterRule(_localctx, 64, CParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.expression(0);
			this.state = 434;
			this.match(CParser.T__17);
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
		this.enterRule(_localctx, 66, CParser.RULE_conditionalStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(CParser.T__40);
			this.state = 437;
			this.match(CParser.T__14);
			this.state = 438;
			_localctx._condition = this.expression(0);
			this.state = 439;
			this.match(CParser.T__15);
			this.state = 440;
			_localctx._truebody = this.compoundStatement();
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.T__41) {
				{
				this.state = 441;
				this.match(CParser.T__41);
				this.state = 442;
				_localctx._falsebody = this.compoundStatement();
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
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(CParser.T__42);
			this.state = 446;
			this.match(CParser.T__14);
			this.state = 447;
			_localctx._condition = this.expression(0);
			this.state = 448;
			this.match(CParser.T__15);
			this.state = 449;
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
		this.enterRule(_localctx, 70, CParser.RULE_labeledStatement);
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.match(CParser.T__43);
				this.state = 452;
				_localctx._condition = this.expression(0);
				this.state = 453;
				this.match(CParser.T__44);
				this.state = 454;
				_localctx._body = this.statement();
				this.state = 456;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 455;
					this.breakStatement();
					}
					break;
				}
				}
				break;
			case CParser.T__45:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 458;
				this.match(CParser.T__45);
				this.state = 459;
				this.match(CParser.T__44);
				this.state = 460;
				_localctx._body = this.statement();
				this.state = 462;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 461;
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
		this.enterRule(_localctx, 72, CParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this.match(CParser.T__46);
			this.state = 467;
			this.match(CParser.T__17);
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
		this.enterRule(_localctx, 74, CParser.RULE_compoundStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(CParser.T__29);
			this.state = 470;
			this.sequenceStatement();
			this.state = 471;
			this.match(CParser.T__30);
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
	public sequenceStatement(): SequenceStatementContext {
		let _localctx: SequenceStatementContext = new SequenceStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CParser.RULE_sequenceStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__12) | (1 << CParser.T__13) | (1 << CParser.T__14) | (1 << CParser.T__29))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (CParser.T__34 - 35)) | (1 << (CParser.T__35 - 35)) | (1 << (CParser.T__36 - 35)) | (1 << (CParser.T__37 - 35)) | (1 << (CParser.T__38 - 35)) | (1 << (CParser.T__39 - 35)) | (1 << (CParser.T__40 - 35)) | (1 << (CParser.T__42 - 35)) | (1 << (CParser.T__43 - 35)) | (1 << (CParser.T__45 - 35)) | (1 << (CParser.T__46 - 35)) | (1 << (CParser.T__47 - 35)) | (1 << (CParser.T__48 - 35)) | (1 << (CParser.T__49 - 35)) | (1 << (CParser.T__50 - 35)) | (1 << (CParser.MUL - 35)) | (1 << (CParser.SUB - 35)) | (1 << (CParser.UNARY_ADD - 35)) | (1 << (CParser.UNARY_SUB - 35)))) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (CParser.NOT - 67)) | (1 << (CParser.VAR_ADDRESS - 67)) | (1 << (CParser.DECIMAL - 67)) | (1 << (CParser.FRACTION - 67)) | (1 << (CParser.CHAR - 67)) | (1 << (CParser.STRING - 67)) | (1 << (CParser.COMMENT - 67)) | (1 << (CParser.LINE_COMMENT - 67)) | (1 << (CParser.INCLUDE - 67)) | (1 << (CParser.Identifier - 67)))) !== 0)) {
				{
				{
				this.state = 473;
				this.statement();
				}
				}
				this.state = 478;
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
	public switchBodyList(): SwitchBodyListContext {
		let _localctx: SwitchBodyListContext = new SwitchBodyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CParser.RULE_switchBodyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CParser.T__43 || _la === CParser.T__45) {
				{
				{
				this.state = 479;
				this.labeledStatement();
				}
				}
				this.state = 484;
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
		this.enterRule(_localctx, 80, CParser.RULE_switchBodyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(CParser.T__29);
			this.state = 486;
			this.switchBodyList();
			this.state = 487;
			this.match(CParser.T__30);
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
		this.enterRule(_localctx, 82, CParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(CParser.T__47);
			this.state = 490;
			this.expression(0);
			this.state = 491;
			this.match(CParser.T__17);
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
	public loopInitial(): LoopInitialContext {
		let _localctx: LoopInitialContext = new LoopInitialContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CParser.RULE_loopInitial);
		try {
			this.state = 495;
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
			case CParser.T__11:
			case CParser.T__12:
			case CParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 493;
				this.initializationList();
				}
				break;
			case CParser.T__14:
			case CParser.T__29:
			case CParser.T__34:
			case CParser.T__35:
			case CParser.T__36:
			case CParser.MUL:
			case CParser.SUB:
			case CParser.UNARY_ADD:
			case CParser.UNARY_SUB:
			case CParser.NOT:
			case CParser.VAR_ADDRESS:
			case CParser.DECIMAL:
			case CParser.FRACTION:
			case CParser.CHAR:
			case CParser.STRING:
			case CParser.COMMENT:
			case CParser.LINE_COMMENT:
			case CParser.INCLUDE:
			case CParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 494;
				this.expressionStatement();
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
	public forLoop(): ForLoopContext {
		let _localctx: ForLoopContext = new ForLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CParser.RULE_forLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.match(CParser.T__48);
			this.state = 498;
			this.match(CParser.T__14);
			this.state = 499;
			_localctx._initial = this.loopInitial();
			this.state = 500;
			_localctx._condition = this.expression(0);
			this.state = 501;
			this.match(CParser.T__17);
			this.state = 502;
			_localctx._action = this.expression(0);
			this.state = 503;
			this.match(CParser.T__15);
			this.state = 504;
			_localctx._body = this.compoundStatement();
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
	public doWhileLoop(): DoWhileLoopContext {
		let _localctx: DoWhileLoopContext = new DoWhileLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CParser.RULE_doWhileLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(CParser.T__49);
			this.state = 507;
			_localctx._body = this.compoundStatement();
			this.state = 508;
			this.match(CParser.T__50);
			this.state = 509;
			this.match(CParser.T__14);
			this.state = 510;
			_localctx._condition = this.expression(0);
			this.state = 511;
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
	public whileLoop(): WhileLoopContext {
		let _localctx: WhileLoopContext = new WhileLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CParser.RULE_whileLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(CParser.T__50);
			this.state = 514;
			this.match(CParser.T__14);
			this.state = 515;
			_localctx._condition = this.expression(0);
			this.state = 516;
			this.match(CParser.T__15);
			this.state = 517;
			_localctx._body = this.compoundStatement();
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
		this.enterRule(_localctx, 92, CParser.RULE_statement);
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.expressionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.arrayInitialization();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 521;
				this.initialization();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 522;
				this.initializationList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 523;
				this.conditionalStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 524;
				this.compoundStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 525;
				this.switchStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 526;
				this.labeledStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 527;
				this.switchBodyStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 528;
				this.functionDeclaration();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 529;
				this.returnStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 530;
				this.breakStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 531;
				this.arrayDeclaration();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 532;
				this.forLoop();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 533;
				this.doWhileLoop();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 534;
				this.whileLoop();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 535;
				this.printHeap();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 536;
				this.printStack();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 537;
				this.printf();
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
		this.enterRule(_localctx, 94, CParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.typeSpecifier();
			this.state = 541;
			this.match(CParser.Identifier);
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CParser.T__33) {
				{
				this.state = 542;
				this.match(CParser.T__33);
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10))) !== 0)) {
				{
				this.state = 545;
				this.parameterDeclaration();
				this.state = 550;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__18) {
					{
					{
					this.state = 546;
					this.match(CParser.T__18);
					this.state = 547;
					this.parameterDeclaration();
					}
					}
					this.state = 552;
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
		this.enterRule(_localctx, 98, CParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.typeSpecifier();
			this.state = 556;
			this.match(CParser.Identifier);
			this.state = 557;
			this.match(CParser.T__14);
			this.state = 558;
			this.parameterList();
			this.state = 559;
			this.match(CParser.T__15);
			this.state = 560;
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
		this.enterRule(_localctx, 100, CParser.RULE_argumentExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & ((1 << (CParser.T__14 - 15)) | (1 << (CParser.T__29 - 15)) | (1 << (CParser.T__34 - 15)) | (1 << (CParser.T__35 - 15)) | (1 << (CParser.T__36 - 15)))) !== 0) || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (CParser.MUL - 52)) | (1 << (CParser.SUB - 52)) | (1 << (CParser.UNARY_ADD - 52)) | (1 << (CParser.UNARY_SUB - 52)) | (1 << (CParser.NOT - 52)) | (1 << (CParser.VAR_ADDRESS - 52)) | (1 << (CParser.DECIMAL - 52)) | (1 << (CParser.FRACTION - 52)) | (1 << (CParser.CHAR - 52)) | (1 << (CParser.STRING - 52)) | (1 << (CParser.COMMENT - 52)) | (1 << (CParser.LINE_COMMENT - 52)) | (1 << (CParser.INCLUDE - 52)) | (1 << (CParser.Identifier - 52)))) !== 0)) {
				{
				this.state = 562;
				this.expression(0);
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CParser.T__18) {
					{
					{
					this.state = 563;
					this.match(CParser.T__18);
					this.state = 564;
					this.expression(0);
					}
					}
					this.state = 569;
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
		this.enterRule(_localctx, 102, CParser.RULE_functionApplication);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.match(CParser.Identifier);
			this.state = 573;
			this.match(CParser.T__14);
			this.state = 574;
			this.argumentExpressionList();
			this.state = 575;
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
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 577;
				this.functionDeclaration();
				}
				}
				this.state = 580;
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
		case 31:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 16);

		case 1:
			return this.precpred(this._ctx, 15);

		case 2:
			return this.precpred(this._ctx, 14);

		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u0249\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x03\x02\x03\x02\x07\x02o\n\x02\f\x02\x0E\x02r\v\x02" +
		"\x03\x02\x03\x02\x07\x02v\n\x02\f\x02\x0E\x02y\v\x02\x03\x02\x03\x02\x07" +
		"\x02}\n\x02\f\x02\x0E\x02\x80\v\x02\x03\x02\x03\x02\x07\x02\x84\n\x02" +
		"\f\x02\x0E\x02\x87\v\x02\x03\x02\x03\x02\x07\x02\x8B\n\x02\f\x02\x0E\x02" +
		"\x8E\v\x02\x03\x02\x03\x02\x07\x02\x92\n\x02\f\x02\x0E\x02\x95\v\x02\x03" +
		"\x02\x03\x02\x07\x02\x99\n\x02\f\x02\x0E\x02\x9C\v\x02\x03\x02\x03\x02" +
		"\x07\x02\xA0\n\x02\f\x02\x0E\x02\xA3\v\x02\x03\x02\x03\x02\x07\x02\xA7" +
		"\n\x02\f\x02\x0E\x02\xAA\v\x02\x03\x02\x03\x02\x07\x02\xAE\n\x02\f\x02" +
		"\x0E\x02\xB1\v\x02\x03\x02\x03\x02\x07\x02\xB5\n\x02\f\x02\x0E\x02\xB8" +
		"\v\x02\x05\x02\xBA\n\x02\x03\x03\x03\x03\x03\x04\x06\x04\xBF\n\x04\r\x04" +
		"\x0E\x04\xC0\x05\x04\xC3\n\x04\x03\x05\x03\x05\x05\x05\xC7\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xCE\n\x06\x03\x07\x03\x07\x07" +
		"\x07\xD2\n\x07\f\x07\x0E\x07\xD5\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\b\xDE\n\b\x03\b\x05\b\xE1\n\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x05\t\xE8\n\t\x03\t\x05\t\xEB\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\xF2\n\n\f\n\x0E\n\xF5\v\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0104\n\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x05\x11\u0111\n\x11\x03\x12\x03\x12\x03\x12\x07\x12\u0116" +
		"\n\x12\f\x12\x0E\x12\u0119\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x07\x14\u0123\n\x14\f\x14\x0E\x14\u0126\v\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u012B\n\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0135\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u014B\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x05\x1A\u0156\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0171\n\x1F\f\x1F\x0E\x1F\u0174\v\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u017E\n \x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x05!\u019B\n" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x03!\x07!\u01AF\n!\f!\x0E!\u01B2\v!\x03\"\x03\"\x03\"" +
		"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u01BE\n#\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x05%\u01CB\n%\x03%\x03%\x03%\x03%" +
		"\x05%\u01D1\n%\x05%\u01D3\n%\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03" +
		"(\x07(\u01DD\n(\f(\x0E(\u01E0\v(\x03)\x07)\u01E3\n)\f)\x0E)\u01E6\v)\x03" +
		"*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x05,\u01F2\n,\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x030\x03" +
		"0\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u021D\n" +
		"0\x031\x031\x031\x051\u0222\n1\x032\x032\x032\x072\u0227\n2\f2\x0E2\u022A" +
		"\v2\x052\u022C\n2\x033\x033\x033\x033\x033\x033\x033\x034\x034\x034\x07" +
		"4\u0238\n4\f4\x0E4\u023B\v4\x054\u023D\n4\x035\x035\x035\x035\x035\x03" +
		"6\x066\u0245\n6\r6\x0E6\u0246\x036\x02\x02\x03@7\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02" +
		"P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02" +
		"\x02\n\x03\x02\x0E\x10\x04\x02\x13\x13\x16\x1F\x03\x02CD\x04\x0299EE\x03" +
		"\x0289\x04\x0267::\x03\x02?B\x03\x02=>\x02\u0276\x02\xB9\x03\x02\x02\x02" +
		"\x04\xBB\x03\x02\x02\x02\x06\xC2\x03\x02\x02\x02\b\xC6\x03\x02\x02\x02" +
		"\n\xCD\x03\x02\x02\x02\f\xCF\x03\x02\x02\x02\x0E\xD8\x03\x02\x02\x02\x10" +
		"\xE4\x03\x02\x02\x02\x12\xEC\x03\x02\x02\x02\x14\xF8\x03\x02\x02\x02\x16" +
		"\xFA\x03\x02\x02\x02\x18\xFC\x03\x02\x02\x02\x1A\u0100\x03\x02\x02\x02" +
		"\x1C\u0107\x03\x02\x02\x02\x1E\u010A\x03\x02\x02\x02 \u0110\x03\x02\x02" +
		"\x02\"\u0112\x03\x02\x02\x02$\u011A\x03\x02\x02\x02&\u012A\x03\x02\x02" +
		"\x02(\u012C\x03\x02\x02\x02*\u013A\x03\x02\x02\x02,\u0142\x03\x02\x02" +
		"\x02.\u0147\x03\x02\x02\x020\u014E\x03\x02\x02\x022\u0155\x03\x02\x02" +
		"\x024\u0157\x03\x02\x02\x026\u015C\x03\x02\x02\x028\u0161\x03\x02\x02" +
		"\x02:\u0166\x03\x02\x02\x02<\u016B\x03\x02\x02\x02>\u0178\x03\x02\x02" +
		"\x02@\u019A\x03\x02\x02\x02B\u01B3\x03\x02\x02\x02D\u01B6\x03\x02\x02" +
		"\x02F\u01BF\x03\x02\x02\x02H\u01D2\x03\x02\x02\x02J\u01D4\x03\x02\x02" +
		"\x02L\u01D7\x03\x02\x02\x02N\u01DE\x03\x02\x02\x02P\u01E4\x03\x02\x02" +
		"\x02R\u01E7\x03\x02\x02\x02T\u01EB\x03\x02\x02\x02V\u01F1\x03\x02\x02" +
		"\x02X\u01F3\x03\x02\x02\x02Z\u01FC\x03\x02\x02\x02\\\u0203\x03\x02\x02" +
		"\x02^\u021C\x03\x02\x02\x02`\u021E\x03\x02\x02\x02b\u022B\x03\x02\x02" +
		"\x02d\u022D\x03\x02\x02\x02f\u023C\x03\x02\x02\x02h\u023E\x03\x02\x02" +
		"\x02j\u0244\x03\x02\x02\x02lp\x07\x03\x02\x02mo\x076\x02\x02nm\x03\x02" +
		"\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\xBA\x03" +
		"\x02\x02\x02rp\x03\x02\x02\x02sw\x07\x04\x02\x02tv\x076\x02\x02ut\x03" +
		"\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x\xBA" +
		"\x03\x02\x02\x02yw\x03\x02\x02\x02z~\x07\x05\x02\x02{}\x076\x02\x02|{" +
		"\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02" +
		"\x02\x7F\xBA\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x85\x07\x06\x02" +
		"\x02\x82\x84\x076\x02\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03\x02\x02" +
		"\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\xBA\x03\x02\x02" +
		"\x02\x87\x85\x03\x02\x02\x02\x88\x8C\x07\x07\x02\x02\x89\x8B\x076\x02" +
		"\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C\x8A\x03\x02\x02" +
		"\x02\x8C\x8D\x03\x02\x02\x02\x8D\xBA\x03\x02\x02\x02\x8E\x8C\x03\x02\x02" +
		"\x02\x8F\x93\x07\b\x02\x02\x90\x92\x076\x02\x02\x91\x90\x03\x02\x02\x02" +
		"\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\xBA\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x9A\x07\t\x02\x02" +
		"\x97\x99\x076\x02\x02\x98\x97\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02" +
		"\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xBA\x03\x02\x02\x02" +
		"\x9C\x9A\x03\x02\x02\x02\x9D\xA1\x07\n\x02\x02\x9E\xA0\x076\x02\x02\x9F" +
		"\x9E\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1" +
		"\xA2\x03\x02\x02\x02\xA2\xBA\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4" +
		"\xA8\x07\v\x02\x02\xA5\xA7\x076\x02\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA" +
		"\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xBA" +
		"\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAF\x07\f\x02\x02\xAC\xAE" +
		"\x076\x02\x02\xAD\xAC\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xBA\x03\x02\x02\x02\xB1\xAF" +
		"\x03\x02\x02\x02\xB2\xB6\x07\r\x02\x02\xB3\xB5\x076\x02\x02\xB4\xB3\x03" +
		"\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03" +
		"\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB9l\x03" +
		"\x02\x02\x02\xB9s\x03\x02\x02\x02\xB9z\x03\x02\x02\x02\xB9\x81\x03\x02" +
		"\x02\x02\xB9\x88\x03\x02\x02\x02\xB9\x8F\x03\x02\x02\x02\xB9\x96\x03\x02" +
		"\x02\x02\xB9\x9D\x03\x02\x02\x02\xB9\xA4\x03\x02\x02\x02\xB9\xAB\x03\x02" +
		"\x02\x02\xB9\xB2\x03\x02\x02\x02\xBA\x03\x03\x02\x02\x02\xBB\xBC\t\x02" +
		"\x02\x02\xBC\x05\x03\x02\x02\x02\xBD\xBF\x05\x04\x03\x02\xBE\xBD\x03\x02" +
		"\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02" +
		"\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xBE\x03\x02\x02\x02\xC2\xC3\x03\x02" +
		"\x02\x02\xC3\x07\x03\x02\x02\x02\xC4\xC7\x05\x02\x02\x02\xC5\xC7\x05\x04" +
		"\x03\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\t\x03\x02" +
		"\x02\x02\xC8\xC9\x07\x11\x02\x02\xC9\xCA\x05@!\x02\xCA\xCB\x07\x12\x02" +
		"\x02\xCB\xCE\x03\x02\x02\x02\xCC\xCE\x07O\x02\x02\xCD\xC8\x03\x02\x02" +
		"\x02\xCD\xCC\x03\x02\x02\x02\xCE\v\x03\x02\x02\x02\xCF\xD3\x076\x02\x02" +
		"\xD0\xD2\x076\x02\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02" +
		"\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02" +
		"\xD5\xD3\x03\x02\x02\x02\xD6\xD7\x05\n\x06\x02\xD7\r\x03\x02\x02\x02\xD8" +
		"\xD9\x05\x06\x04\x02\xD9\xDA\x05\x02\x02\x02\xDA\xE0\x07O\x02\x02\xDB" +
		"\xDD\x07\x13\x02\x02\xDC\xDE\x05\x18\r\x02\xDD\xDC\x03\x02\x02\x02\xDD" +
		"\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x05@!\x02\xE0\xDB" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3" +
		"\x07\x14\x02\x02\xE3\x0F\x03\x02\x02\x02\xE4\xEA\x07O\x02\x02\xE5\xE7" +
		"\x07\x13\x02\x02\xE6\xE8\x05\x18\r\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8" +
		"\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x05@!\x02\xEA\xE5\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\x11\x03\x02\x02\x02\xEC\xED\x05" +
		"\x06\x04\x02\xED\xEE\x05\x02\x02\x02\xEE\xF3\x05\x10\t\x02\xEF\xF0\x07" +
		"\x15\x02\x02\xF0\xF2\x05\x10\t\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF5\x03" +
		"\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03" +
		"\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x07\x14\x02\x02\xF7\x13\x03" +
		"\x02\x02\x02\xF8\xF9\t\x03\x02\x02\xF9\x15\x03\x02\x02\x02\xFA\xFB\t\x04" +
		"\x02\x02\xFB\x17\x03\x02\x02\x02\xFC\xFD\x07\x11\x02\x02\xFD\xFE\x05\x02" +
		"\x02\x02\xFE\xFF\x07\x12\x02\x02\xFF\x19\x03\x02\x02\x02\u0100\u0101\x07" +
		"O\x02\x02\u0101\u0103\x05\x14\v\x02\u0102\u0104\x05\x18\r\x02\u0103\u0102" +
		"\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0106\x05@!\x02\u0106\x1B\x03\x02\x02\x02\u0107\u0108\x07O\x02" +
		"\x02\u0108\u0109\x05\x16\f\x02\u0109\x1D\x03\x02\x02\x02\u010A\u010B\x05" +
		"\x16\f\x02\u010B\u010C\x07O\x02\x02\u010C\x1F\x03\x02\x02\x02\u010D\u0111" +
		"\x05\x1A\x0E\x02\u010E\u0111\x05\x1E\x10\x02\u010F\u0111\x05\x1C\x0F\x02" +
		"\u0110\u010D\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u010F\x03" +
		"\x02\x02\x02\u0111!\x03\x02\x02\x02\u0112\u0117\x05 \x11\x02\u0113\u0114" +
		"\x07\x15\x02\x02\u0114\u0116\x05 \x11\x02\u0115\u0113\x03\x02\x02\x02" +
		"\u0116\u0119\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0118\x03" +
		"\x02\x02\x02\u0118#\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02\u011A" +
		"\u011B\x05\f\x07\x02\u011B\u011C\x05\x14\v\x02\u011C\u011D\x05@!\x02\u011D" +
		"%\x03\x02\x02\x02\u011E\u011F\x07 \x02\x02\u011F\u0124\x05@!\x02\u0120" +
		"\u0121\x07\x15\x02\x02\u0121\u0123\x05@!\x02\u0122\u0120\x03\x02\x02\x02" +
		"\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02\x02\x02\u0124\u0125\x03" +
		"\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0127" +
		"\u0128\x07!\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u012B\x07K\x02\x02" +
		"\u012A\u011E\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\'\x03\x02" +
		"\x02\x02\u012C\u012D\x05\x06\x04\x02\u012D\u012E\x05\x02\x02\x02\u012E" +
		"\u0134\x07O\x02\x02\u012F\u0130\x07\"\x02\x02\u0130\u0131\x05@!\x02\u0131" +
		"\u0132\x07#\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0135\x07$\x02\x02" +
		"\u0134\u012F\x03\x02\x02\x02\u0134\u0133\x03\x02\x02\x02\u0135\u0136\x03" +
		"\x02\x02\x02\u0136\u0137\x07\x13\x02\x02\u0137\u0138\x05@!\x02\u0138\u0139" +
		"\x07\x14\x02\x02\u0139)\x03\x02\x02\x02\u013A\u013B\x05\x06\x04\x02\u013B" +
		"\u013C\x05\x02\x02\x02\u013C\u013D\x07O\x02\x02\u013D\u013E\x07\"\x02" +
		"\x02\u013E\u013F\x05@!\x02\u013F\u0140\x07#\x02\x02\u0140\u0141\x07\x14" +
		"\x02\x02\u0141+\x03\x02\x02\x02\u0142\u0143\x07O\x02\x02\u0143\u0144\x07" +
		"\"\x02\x02\u0144\u0145\x05@!\x02\u0145\u0146\x07#\x02\x02\u0146-\x03\x02" +
		"\x02\x02\u0147\u0148\x05,\x17\x02\u0148\u014A\x05\x14\v\x02\u0149\u014B" +
		"\x05\x18\r\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x05@!\x02\u014D/\x03\x02\x02" +
		"\x02\u014E\u014F\x07%\x02\x02\u014F\u0150\x07\x11\x02\x02\u0150\u0151" +
		"\x05@!\x02\u0151\u0152\x07\x12\x02\x02\u01521\x03\x02\x02\x02\u0153\u0156" +
		"\x05@!\x02\u0154\u0156\x05\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155" +
		"\u0154\x03\x02\x02\x02\u01563\x03\x02\x02\x02\u0157\u0158\x07&\x02\x02" +
		"\u0158\u0159\x07\x11\x02\x02\u0159\u015A\x052\x1A\x02\u015A\u015B\x07" +
		"\x12\x02\x02\u015B5\x03\x02\x02\x02\u015C\u015D\x07\'\x02\x02\u015D\u015E" +
		"\x07\x11\x02\x02\u015E\u015F\x07O\x02\x02\u015F\u0160\x07\x12\x02\x02" +
		"\u01607\x03\x02\x02\x02\u0161\u0162\x07(\x02\x02\u0162\u0163\x07\x11\x02" +
		"\x02\u0163\u0164\x07\x12\x02\x02\u0164\u0165\x07\x14\x02\x02\u01659\x03" +
		"\x02\x02\x02\u0166\u0167\x07)\x02\x02\u0167\u0168\x07\x11\x02\x02\u0168" +
		"\u0169\x07\x12\x02\x02\u0169\u016A\x07\x14\x02\x02\u016A;\x03\x02\x02" +
		"\x02\u016B\u016C\x07*\x02\x02\u016C\u016D\x07\x11\x02\x02\u016D\u0172" +
		"\x05@!\x02\u016E\u016F\x07\x15\x02\x02\u016F\u0171\x05@!\x02\u0170\u016E" +
		"\x03\x02\x02\x02\u0171\u0174\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02" +
		"\u0172\u0173\x03\x02\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174\u0172\x03" +
		"\x02\x02\x02\u0175\u0176\x07\x12\x02\x02\u0176\u0177\x07\x14\x02\x02\u0177" +
		"=\x03\x02\x02\x02\u0178\u017D\x07O\x02\x02\u0179\u017A\x07\"\x02\x02\u017A" +
		"\u017B\x05@!\x02\u017B\u017C\x07#\x02\x02\u017C\u017E\x03\x02\x02\x02" +
		"\u017D\u0179\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E?\x03\x02" +
		"\x02\x02\u017F\u0180\b!\x01\x02\u0180\u019B\x07H\x02\x02\u0181\u019B\x07" +
		"I\x02\x02\u0182\u019B\x07J\x02\x02\u0183\u019B\x07K\x02\x02\u0184\u019B" +
		"\x07O\x02\x02\u0185\u019B\x05h5\x02\u0186\u0187\x07\x11\x02\x02\u0187" +
		"\u0188\x05@!\x02\u0188\u0189\x07\x12\x02\x02\u0189\u019B\x03\x02\x02\x02" +
		"\u018A\u019B\x05,\x17\x02\u018B\u018C\x07F\x02\x02\u018C\u019B\x05> \x02" +
		"\u018D\u019B\x054\x1B\x02\u018E\u018F\t\x05\x02\x02\u018F\u019B\x05@!" +
		"\x13\u0190\u019B\x05\f\x07\x02\u0191\u019B\x05\"\x12\x02\u0192\u019B\x05" +
		".\x18\x02\u0193\u019B\x05$\x13\x02\u0194\u019B\x050\x19\x02\u0195\u019B" +
		"\x056\x1C\x02\u0196\u019B\x05&\x14\x02\u0197\u019B\x07L\x02\x02\u0198" +
		"\u019B\x07M\x02\x02\u0199\u019B\x07N\x02\x02\u019A\u017F\x03\x02\x02\x02" +
		"\u019A\u0181\x03\x02\x02\x02\u019A\u0182\x03\x02\x02\x02\u019A\u0183\x03" +
		"\x02\x02\x02\u019A\u0184\x03\x02\x02\x02\u019A\u0185\x03\x02\x02\x02\u019A" +
		"\u0186\x03\x02\x02\x02\u019A\u018A\x03\x02\x02\x02\u019A\u018B\x03\x02" +
		"\x02\x02\u019A\u018D\x03\x02\x02\x02\u019A\u018E\x03\x02\x02\x02\u019A" +
		"\u0190\x03\x02\x02\x02\u019A\u0191\x03\x02\x02\x02\u019A\u0192\x03\x02" +
		"\x02\x02\u019A\u0193\x03\x02\x02\x02\u019A\u0194\x03\x02\x02\x02\u019A" +
		"\u0195\x03\x02\x02\x02\u019A\u0196\x03\x02\x02\x02\u019A\u0197\x03\x02" +
		"\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02\x02\u019B" +
		"\u01B0\x03\x02\x02\x02\u019C\u019D\f\x12\x02\x02\u019D\u019E\t\x06\x02" +
		"\x02\u019E\u01AF\x05@!\x13\u019F\u01A0\f\x11\x02\x02\u01A0\u01A1\t\x07" +
		"\x02\x02\u01A1\u01AF\x05@!\x12\u01A2\u01A3\f\x10\x02\x02\u01A3\u01A4\t" +
		"\b\x02\x02\u01A4\u01AF\x05@!\x11\u01A5\u01A6\f\x0F\x02\x02\u01A6\u01A7" +
		"\t\t\x02\x02\u01A7\u01AF\x05@!\x10\u01A8\u01A9\f\x0E\x02\x02\u01A9\u01AA" +
		"\x07;\x02\x02\u01AA\u01AF\x05@!\x0F\u01AB\u01AC\f\r\x02\x02\u01AC\u01AD" +
		"\x07<\x02\x02\u01AD\u01AF\x05@!\x0E\u01AE\u019C\x03\x02\x02\x02\u01AE" +
		"\u019F\x03\x02\x02\x02\u01AE\u01A2\x03\x02\x02\x02\u01AE\u01A5\x03\x02" +
		"\x02\x02\u01AE\u01A8\x03\x02\x02\x02\u01AE\u01AB\x03\x02\x02\x02\u01AF" +
		"\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1A\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01B4" +
		"\x05@!\x02\u01B4\u01B5\x07\x14\x02\x02\u01B5C\x03\x02\x02\x02\u01B6\u01B7" +
		"\x07+\x02\x02\u01B7\u01B8\x07\x11\x02\x02\u01B8\u01B9\x05@!\x02\u01B9" +
		"\u01BA\x07\x12\x02\x02\u01BA\u01BD\x05L\'\x02\u01BB\u01BC\x07,\x02\x02" +
		"\u01BC\u01BE\x05L\'\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BEE\x03\x02\x02\x02\u01BF\u01C0\x07-\x02\x02\u01C0\u01C1\x07" +
		"\x11\x02\x02\u01C1\u01C2\x05@!\x02\u01C2\u01C3\x07\x12\x02\x02\u01C3\u01C4" +
		"\x05R*\x02\u01C4G\x03\x02\x02\x02\u01C5\u01C6\x07.\x02\x02\u01C6\u01C7" +
		"\x05@!\x02\u01C7\u01C8\x07/\x02\x02\u01C8\u01CA\x05^0\x02\u01C9\u01CB" +
		"\x05J&\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01D3\x03\x02\x02\x02\u01CC\u01CD\x070\x02\x02\u01CD\u01CE\x07/\x02\x02" +
		"\u01CE\u01D0\x05^0\x02\u01CF\u01D1\x05J&\x02\u01D0\u01CF\x03\x02\x02\x02" +
		"\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01C5\x03" +
		"\x02\x02\x02\u01D2\u01CC\x03\x02\x02\x02\u01D3I\x03\x02\x02\x02\u01D4" +
		"\u01D5\x071\x02\x02\u01D5\u01D6\x07\x14\x02\x02\u01D6K\x03\x02\x02\x02" +
		"\u01D7\u01D8\x07 \x02\x02\u01D8\u01D9\x05N(\x02\u01D9\u01DA\x07!\x02\x02" +
		"\u01DAM\x03\x02\x02\x02\u01DB\u01DD\x05^0\x02\u01DC\u01DB\x03\x02\x02" +
		"\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF" +
		"\x03\x02\x02\x02\u01DFO\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1" +
		"\u01E3\x05H%\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02" +
		"\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5Q\x03\x02" +
		"\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01E8\x07 \x02\x02\u01E8\u01E9" +
		"\x05P)\x02\u01E9\u01EA\x07!\x02\x02\u01EAS\x03\x02\x02\x02\u01EB\u01EC" +
		"\x072\x02\x02\u01EC\u01ED\x05@!\x02\u01ED\u01EE\x07\x14\x02\x02\u01EE" +
		"U\x03\x02\x02\x02\u01EF\u01F2\x05\x12\n\x02\u01F0\u01F2\x05B\"\x02\u01F1" +
		"\u01EF\x03\x02\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F2W\x03\x02\x02" +
		"\x02\u01F3\u01F4\x073\x02\x02\u01F4\u01F5\x07\x11\x02\x02\u01F5\u01F6" +
		"\x05V,\x02\u01F6\u01F7\x05@!\x02\u01F7\u01F8\x07\x14\x02\x02\u01F8\u01F9" +
		"\x05@!\x02\u01F9\u01FA\x07\x12\x02\x02\u01FA\u01FB\x05L\'\x02\u01FBY\x03" +
		"\x02\x02\x02\u01FC\u01FD\x074\x02\x02\u01FD\u01FE\x05L\'\x02\u01FE\u01FF" +
		"\x075\x02\x02\u01FF\u0200\x07\x11\x02\x02\u0200\u0201\x05@!\x02\u0201" +
		"\u0202\x07\x12\x02\x02\u0202[\x03\x02\x02\x02\u0203\u0204\x075\x02\x02" +
		"\u0204\u0205\x07\x11\x02\x02\u0205\u0206\x05@!\x02\u0206\u0207\x07\x12" +
		"\x02\x02\u0207\u0208\x05L\'\x02\u0208]\x03\x02\x02\x02\u0209\u021D\x05" +
		"B\"\x02\u020A\u021D\x05(\x15\x02\u020B\u021D\x05\x0E\b\x02\u020C\u021D" +
		"\x05\x12\n\x02\u020D\u021D\x05D#\x02\u020E\u021D\x05L\'\x02\u020F\u021D" +
		"\x05F$\x02\u0210\u021D\x05H%\x02\u0211\u021D\x05R*\x02\u0212\u021D\x05" +
		"d3\x02\u0213\u021D\x05T+\x02\u0214\u021D\x05J&\x02\u0215\u021D\x05*\x16" +
		"\x02\u0216\u021D\x05X-\x02\u0217\u021D\x05Z.\x02\u0218\u021D\x05\\/\x02" +
		"\u0219\u021D\x058\x1D\x02\u021A\u021D\x05:\x1E\x02\u021B\u021D\x05<\x1F" +
		"\x02\u021C\u0209\x03\x02\x02\x02\u021C\u020A\x03\x02\x02\x02\u021C\u020B" +
		"\x03\x02\x02\x02\u021C\u020C\x03\x02\x02\x02\u021C\u020D\x03\x02\x02\x02" +
		"\u021C\u020E\x03\x02\x02\x02\u021C\u020F\x03\x02\x02\x02\u021C\u0210\x03" +
		"\x02\x02\x02\u021C\u0211\x03\x02\x02\x02\u021C\u0212\x03\x02\x02\x02\u021C" +
		"\u0213\x03\x02\x02\x02\u021C\u0214\x03\x02\x02\x02\u021C\u0215\x03\x02" +
		"\x02\x02\u021C\u0216\x03\x02\x02\x02\u021C\u0217\x03\x02\x02\x02\u021C" +
		"\u0218\x03\x02\x02\x02\u021C\u0219\x03\x02\x02\x02\u021C\u021A\x03\x02" +
		"\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D_\x03\x02\x02\x02\u021E\u021F" +
		"\x05\x02\x02\x02\u021F\u0221\x07O\x02\x02\u0220\u0222\x07$\x02\x02\u0221" +
		"\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222a\x03\x02\x02" +
		"\x02\u0223\u0228\x05`1\x02\u0224\u0225\x07\x15\x02\x02\u0225\u0227\x05" +
		"`1\x02\u0226\u0224\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226" +
		"\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02" +
		"\u022A\u0228\x03\x02\x02\x02\u022B\u0223\x03\x02\x02\x02\u022B\u022C\x03" +
		"\x02\x02\x02\u022Cc\x03\x02\x02\x02\u022D\u022E\x05\x02\x02\x02\u022E" +
		"\u022F\x07O";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u022F\u0230\x07\x11\x02\x02\u0230\u0231\x05b2\x02\u0231\u0232" +
		"\x07\x12\x02\x02\u0232\u0233\x05L\'\x02\u0233e\x03\x02\x02\x02\u0234\u0239" +
		"\x05@!\x02\u0235\u0236\x07\x15\x02\x02\u0236\u0238\x05@!\x02\u0237\u0235" +
		"\x03\x02\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02" +
		"\u0239\u023A\x03\x02\x02\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03" +
		"\x02\x02\x02\u023C\u0234\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D" +
		"g\x03\x02\x02\x02\u023E\u023F\x07O\x02\x02\u023F\u0240\x07\x11\x02\x02" +
		"\u0240\u0241\x05f4\x02\u0241\u0242\x07\x12\x02\x02\u0242i\x03\x02\x02" +
		"\x02\u0243\u0245\x05d3\x02\u0244\u0243\x03\x02\x02\x02\u0245\u0246\x03" +
		"\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247" +
		"k\x03\x02\x02\x023pw~\x85\x8C\x93\x9A\xA1\xA8\xAF\xB6\xB9\xC0\xC2\xC6" +
		"\xCD\xD3\xDD\xE0\xE7\xEA\xF3\u0103\u0110\u0117\u0124\u012A\u0134\u014A" +
		"\u0155\u0172\u017D\u019A\u01AE\u01B0\u01BD\u01CA\u01D0\u01D2\u01DE\u01E4" +
		"\u01F1\u021C\u0221\u0228\u022B\u0239\u023C\u0246";
	public static readonly _serializedATN: string = Utils.join(
		[
			CParser._serializedATNSegment0,
			CParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CParser.__ATN) {
			CParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
		}

		return CParser.__ATN;
	}

}

export class TypeSpecifierContext extends ParserRuleContext {
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.MUL);
		} else {
			return this.getToken(CParser.MUL, i);
		}
	}
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


export class PointerPartContext extends ParserRuleContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointerPart; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointerPart) {
			listener.enterPointerPart(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointerPart) {
			listener.exitPointerPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointerPart) {
			return visitor.visitPointerPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerContext extends ParserRuleContext {
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CParser.MUL);
		} else {
			return this.getToken(CParser.MUL, i);
		}
	}
	public pointerPart(): PointerPartContext {
		return this.getRuleContext(0, PointerPartContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointer; }
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


export class InitializationContext extends ParserRuleContext {
	public _qualifiers!: TypeQualifiersContext;
	public _value!: ExpressionContext;
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public typeQualifiers(): TypeQualifiersContext {
		return this.getRuleContext(0, TypeQualifiersContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public casting(): CastingContext | undefined {
		return this.tryGetRuleContext(0, CastingContext);
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


export class InitializationListPartContext extends ParserRuleContext {
	public _value!: ExpressionContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public casting(): CastingContext | undefined {
		return this.tryGetRuleContext(0, CastingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializationListPart; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializationListPart) {
			listener.enterInitializationListPart(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializationListPart) {
			listener.exitInitializationListPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializationListPart) {
			return visitor.visitInitializationListPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitializationListContext extends ParserRuleContext {
	public _qualifiers!: TypeQualifiersContext;
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public initializationListPart(): InitializationListPartContext[];
	public initializationListPart(i: number): InitializationListPartContext;
	public initializationListPart(i?: number): InitializationListPartContext | InitializationListPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitializationListPartContext);
		} else {
			return this.getRuleContext(i, InitializationListPartContext);
		}
	}
	public typeQualifiers(): TypeQualifiersContext {
		return this.getRuleContext(0, TypeQualifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_initializationList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterInitializationList) {
			listener.enterInitializationList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitInitializationList) {
			listener.exitInitializationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitInitializationList) {
			return visitor.visitInitializationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryAssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_binaryAssignmentOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBinaryAssignmentOperator) {
			listener.enterBinaryAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBinaryAssignmentOperator) {
			listener.exitBinaryAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBinaryAssignmentOperator) {
			return visitor.visitBinaryAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryAssignmentOperatorContext extends ParserRuleContext {
	public UNARY_ADD(): TerminalNode | undefined { return this.tryGetToken(CParser.UNARY_ADD, 0); }
	public UNARY_SUB(): TerminalNode | undefined { return this.tryGetToken(CParser.UNARY_SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_unaryAssignmentOperator; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnaryAssignmentOperator) {
			listener.enterUnaryAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnaryAssignmentOperator) {
			listener.exitUnaryAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnaryAssignmentOperator) {
			return visitor.visitUnaryAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastingContext extends ParserRuleContext {
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_casting; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCasting) {
			listener.enterCasting(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCasting) {
			listener.exitCasting(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCasting) {
			return visitor.visitCasting(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryAssignmentContext extends ParserRuleContext {
	public _operator!: BinaryAssignmentOperatorContext;
	public _value!: ExpressionContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public binaryAssignmentOperator(): BinaryAssignmentOperatorContext {
		return this.getRuleContext(0, BinaryAssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public casting(): CastingContext | undefined {
		return this.tryGetRuleContext(0, CastingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_binaryAssignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterBinaryAssignment) {
			listener.enterBinaryAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitBinaryAssignment) {
			listener.exitBinaryAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitBinaryAssignment) {
			return visitor.visitBinaryAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixAssignmentContext extends ParserRuleContext {
	public _operator!: UnaryAssignmentOperatorContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public unaryAssignmentOperator(): UnaryAssignmentOperatorContext {
		return this.getRuleContext(0, UnaryAssignmentOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_postfixAssignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPostfixAssignment) {
			listener.enterPostfixAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPostfixAssignment) {
			listener.exitPostfixAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPostfixAssignment) {
			return visitor.visitPostfixAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixAssignmentContext extends ParserRuleContext {
	public _operator!: UnaryAssignmentOperatorContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public unaryAssignmentOperator(): UnaryAssignmentOperatorContext {
		return this.getRuleContext(0, UnaryAssignmentOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_prefixAssignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrefixAssignment) {
			listener.enterPrefixAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrefixAssignment) {
			listener.exitPrefixAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrefixAssignment) {
			return visitor.visitPrefixAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public binaryAssignment(): BinaryAssignmentContext | undefined {
		return this.tryGetRuleContext(0, BinaryAssignmentContext);
	}
	public prefixAssignment(): PrefixAssignmentContext | undefined {
		return this.tryGetRuleContext(0, PrefixAssignmentContext);
	}
	public postfixAssignment(): PostfixAssignmentContext | undefined {
		return this.tryGetRuleContext(0, PostfixAssignmentContext);
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


export class AssignmentListContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_assignmentList; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAssignmentList) {
			listener.enterAssignmentList(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAssignmentList) {
			listener.exitAssignmentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAssignmentList) {
			return visitor.visitAssignmentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PointerValueAssignmentContext extends ParserRuleContext {
	public _operator!: BinaryAssignmentOperatorContext;
	public _value!: ExpressionContext;
	public pointer(): PointerContext {
		return this.getRuleContext(0, PointerContext);
	}
	public binaryAssignmentOperator(): BinaryAssignmentOperatorContext {
		return this.getRuleContext(0, BinaryAssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_pointerValueAssignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointerValueAssignment) {
			listener.enterPointerValueAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointerValueAssignment) {
			listener.exitPointerValueAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointerValueAssignment) {
			return visitor.visitPointerValueAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_array; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializationContext extends ParserRuleContext {
	public _qualifiers!: TypeQualifiersContext;
	public _value!: ExpressionContext;
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public typeQualifiers(): TypeQualifiersContext {
		return this.getRuleContext(0, TypeQualifiersContext);
	}
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
	public get ruleIndex(): number { return CParser.RULE_arrayInitialization; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArrayInitialization) {
			listener.enterArrayInitialization(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArrayInitialization) {
			listener.exitArrayInitialization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArrayInitialization) {
			return visitor.visitArrayInitialization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDeclarationContext extends ParserRuleContext {
	public _qualifiers!: TypeQualifiersContext;
	public _size!: ExpressionContext;
	public typeSpecifier(): TypeSpecifierContext {
		return this.getRuleContext(0, TypeSpecifierContext);
	}
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
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
	public get ruleIndex(): number { return CParser.RULE_arrayDeclaration; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArrayDeclaration) {
			listener.enterArrayDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArrayDeclaration) {
			listener.exitArrayDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArrayDeclaration) {
			return visitor.visitArrayDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public _name!: Token;
	public _index!: ExpressionContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_arrayAccess; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArrayAccess) {
			listener.enterArrayAccess(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArrayAccess) {
			listener.exitArrayAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayValueAssignmentContext extends ParserRuleContext {
	public _operator!: BinaryAssignmentOperatorContext;
	public _value!: ExpressionContext;
	public arrayAccess(): ArrayAccessContext {
		return this.getRuleContext(0, ArrayAccessContext);
	}
	public binaryAssignmentOperator(): BinaryAssignmentOperatorContext {
		return this.getRuleContext(0, BinaryAssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public casting(): CastingContext | undefined {
		return this.tryGetRuleContext(0, CastingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_arrayValueAssignment; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArrayValueAssignment) {
			listener.enterArrayValueAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArrayValueAssignment) {
			listener.exitArrayValueAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArrayValueAssignment) {
			return visitor.visitArrayValueAssignment(this);
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


export class SizeOfArgumentContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CParser.RULE_sizeOfArgument; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSizeOfArgument) {
			listener.enterSizeOfArgument(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSizeOfArgument) {
			listener.exitSizeOfArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSizeOfArgument) {
			return visitor.visitSizeOfArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SizeofContext extends ParserRuleContext {
	public _arg!: SizeOfArgumentContext;
	public sizeOfArgument(): SizeOfArgumentContext {
		return this.getRuleContext(0, SizeOfArgumentContext);
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


export class FreeContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_free; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFree) {
			listener.enterFree(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFree) {
			listener.exitFree(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFree) {
			return visitor.visitFree(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintHeapContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_printHeap; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrintHeap) {
			listener.enterPrintHeap(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrintHeap) {
			listener.exitPrintHeap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrintHeap) {
			return visitor.visitPrintHeap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStackContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_printStack; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrintStack) {
			listener.enterPrintStack(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrintStack) {
			listener.exitPrintStack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrintStack) {
			return visitor.visitPrintStack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintfContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CParser.RULE_printf; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPrintf) {
			listener.enterPrintf(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPrintf) {
			listener.exitPrintf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPrintf) {
			return visitor.visitPrintf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAccessContext extends ParserRuleContext {
	public _index!: ExpressionContext;
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_variableAccess; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterVariableAccess) {
			listener.enterVariableAccess(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitVariableAccess) {
			listener.exitVariableAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitVariableAccess) {
			return visitor.visitVariableAccess(this);
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
export class StringContext extends ExpressionContext {
	public STRING(): TerminalNode { return this.getToken(CParser.STRING, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
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
export class AccessContext extends ExpressionContext {
	public arrayAccess(): ArrayAccessContext {
		return this.getRuleContext(0, ArrayAccessContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterAccess) {
			listener.enterAccess(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitAccess) {
			listener.exitAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitAccess) {
			return visitor.visitAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarAddressContext extends ExpressionContext {
	public _operator!: Token;
	public _right!: VariableAccessContext;
	public VAR_ADDRESS(): TerminalNode { return this.getToken(CParser.VAR_ADDRESS, 0); }
	public variableAccess(): VariableAccessContext {
		return this.getRuleContext(0, VariableAccessContext);
	}
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
export class UnaryContext extends ExpressionContext {
	public _operator!: Token;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CParser.NOT, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(CParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterUnary) {
			listener.enterUnary(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitUnary) {
			listener.exitUnary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitUnary) {
			return visitor.visitUnary(this);
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
export class PointerExpressionContext extends ExpressionContext {
	public pointer(): PointerContext {
		return this.getRuleContext(0, PointerContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointerExpression) {
			listener.enterPointerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointerExpression) {
			listener.exitPointerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointerExpression) {
			return visitor.visitPointerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends ExpressionContext {
	public assignmentList(): AssignmentListContext {
		return this.getRuleContext(0, AssignmentListContext);
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
export class ArrayValueAssignmentExpressionContext extends ExpressionContext {
	public arrayValueAssignment(): ArrayValueAssignmentContext {
		return this.getRuleContext(0, ArrayValueAssignmentContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArrayValueAssignmentExpression) {
			listener.enterArrayValueAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArrayValueAssignmentExpression) {
			listener.exitArrayValueAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArrayValueAssignmentExpression) {
			return visitor.visitArrayValueAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointerValueAssignmentExpressionContext extends ExpressionContext {
	public pointerValueAssignment(): PointerValueAssignmentContext {
		return this.getRuleContext(0, PointerValueAssignmentContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterPointerValueAssignmentExpression) {
			listener.enterPointerValueAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitPointerValueAssignmentExpression) {
			listener.exitPointerValueAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitPointerValueAssignmentExpression) {
			return visitor.visitPointerValueAssignmentExpression(this);
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
export class FreeExpressionContext extends ExpressionContext {
	public free(): FreeContext {
		return this.getRuleContext(0, FreeContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterFreeExpression) {
			listener.enterFreeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitFreeExpression) {
			listener.exitFreeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitFreeExpression) {
			return visitor.visitFreeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CommentExpressionContext extends ExpressionContext {
	public COMMENT(): TerminalNode { return this.getToken(CParser.COMMENT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterCommentExpression) {
			listener.enterCommentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitCommentExpression) {
			listener.exitCommentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitCommentExpression) {
			return visitor.visitCommentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LineCommentExpressionContext extends ExpressionContext {
	public LINE_COMMENT(): TerminalNode { return this.getToken(CParser.LINE_COMMENT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLineCommentExpression) {
			listener.enterLineCommentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLineCommentExpression) {
			listener.exitLineCommentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLineCommentExpression) {
			return visitor.visitLineCommentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludeExpressionContext extends ExpressionContext {
	public INCLUDE(): TerminalNode { return this.getToken(CParser.INCLUDE, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterIncludeExpression) {
			listener.enterIncludeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitIncludeExpression) {
			listener.exitIncludeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitIncludeExpression) {
			return visitor.visitIncludeExpression(this);
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
	public _truebody!: CompoundStatementContext;
	public _falsebody!: CompoundStatementContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public compoundStatement(): CompoundStatementContext[];
	public compoundStatement(i: number): CompoundStatementContext;
	public compoundStatement(i?: number): CompoundStatementContext | CompoundStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CompoundStatementContext);
		} else {
			return this.getRuleContext(i, CompoundStatementContext);
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
	public sequenceStatement(): SequenceStatementContext {
		return this.getRuleContext(0, SequenceStatementContext);
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


export class SequenceStatementContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return CParser.RULE_sequenceStatement; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterSequenceStatement) {
			listener.enterSequenceStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitSequenceStatement) {
			listener.exitSequenceStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitSequenceStatement) {
			return visitor.visitSequenceStatement(this);
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


export class LoopInitialContext extends ParserRuleContext {
	public initializationList(): InitializationListContext | undefined {
		return this.tryGetRuleContext(0, InitializationListContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_loopInitial; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterLoopInitial) {
			listener.enterLoopInitial(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitLoopInitial) {
			listener.exitLoopInitial(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitLoopInitial) {
			return visitor.visitLoopInitial(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForLoopContext extends ParserRuleContext {
	public _initial!: LoopInitialContext;
	public _condition!: ExpressionContext;
	public _action!: ExpressionContext;
	public _body!: CompoundStatementContext;
	public loopInitial(): LoopInitialContext {
		return this.getRuleContext(0, LoopInitialContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_forLoop; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterForLoop) {
			listener.enterForLoop(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitForLoop) {
			listener.exitForLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitForLoop) {
			return visitor.visitForLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileLoopContext extends ParserRuleContext {
	public _body!: CompoundStatementContext;
	public _condition!: ExpressionContext;
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_doWhileLoop; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterDoWhileLoop) {
			listener.enterDoWhileLoop(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitDoWhileLoop) {
			listener.exitDoWhileLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitDoWhileLoop) {
			return visitor.visitDoWhileLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileLoopContext extends ParserRuleContext {
	public _condition!: ExpressionContext;
	public _body!: CompoundStatementContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public compoundStatement(): CompoundStatementContext {
		return this.getRuleContext(0, CompoundStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CParser.RULE_whileLoop; }
	// @Override
	public enterRule(listener: CListener): void {
		if (listener.enterWhileLoop) {
			listener.enterWhileLoop(this);
		}
	}
	// @Override
	public exitRule(listener: CListener): void {
		if (listener.exitWhileLoop) {
			listener.exitWhileLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CVisitor<Result>): Result {
		if (visitor.visitWhileLoop) {
			return visitor.visitWhileLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public arrayInitialization(): ArrayInitializationContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializationContext);
	}
	public initialization(): InitializationContext | undefined {
		return this.tryGetRuleContext(0, InitializationContext);
	}
	public initializationList(): InitializationListContext | undefined {
		return this.tryGetRuleContext(0, InitializationListContext);
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
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public arrayDeclaration(): ArrayDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ArrayDeclarationContext);
	}
	public forLoop(): ForLoopContext | undefined {
		return this.tryGetRuleContext(0, ForLoopContext);
	}
	public doWhileLoop(): DoWhileLoopContext | undefined {
		return this.tryGetRuleContext(0, DoWhileLoopContext);
	}
	public whileLoop(): WhileLoopContext | undefined {
		return this.tryGetRuleContext(0, WhileLoopContext);
	}
	public printHeap(): PrintHeapContext | undefined {
		return this.tryGetRuleContext(0, PrintHeapContext);
	}
	public printStack(): PrintStackContext | undefined {
		return this.tryGetRuleContext(0, PrintStackContext);
	}
	public printf(): PrintfContext | undefined {
		return this.tryGetRuleContext(0, PrintfContext);
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
	public Identifier(): TerminalNode { return this.getToken(CParser.Identifier, 0); }
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


