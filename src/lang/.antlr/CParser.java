// Generated from /home/avin357/c-lang/src/lang/C.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, MUL=52, DIV=53, 
		ADD=54, SUB=55, MOD=56, LOGICAL_AND=57, LOGICAL_OR=58, EQUALS=59, NOT_EQUALS=60, 
		LESS=61, LESS_EQUAL=62, GREATER=63, GREATER_EQUAL=64, UNARY_ADD=65, UNARY_SUB=66, 
		NOT=67, VAR_ADDRESS=68, WHITESPACE=69, DECIMAL=70, FRACTION=71, CHAR=72, 
		STRING=73, COMMENT=74, LINE_COMMENT=75, INCLUDE=76, Identifier=77;
	public static final int
		RULE_typeSpecifier = 0, RULE_typeQualifier = 1, RULE_typeQualifiers = 2, 
		RULE_declarationSpecifier = 3, RULE_pointerPart = 4, RULE_pointer = 5, 
		RULE_initialization = 6, RULE_initializationListPart = 7, RULE_initializationList = 8, 
		RULE_binaryAssignmentOperator = 9, RULE_unaryAssignmentOperator = 10, 
		RULE_casting = 11, RULE_binaryAssignment = 12, RULE_postfixAssignment = 13, 
		RULE_prefixAssignment = 14, RULE_assignment = 15, RULE_assignmentList = 16, 
		RULE_pointerValueAssignment = 17, RULE_array = 18, RULE_arrayInitialization = 19, 
		RULE_arrayDeclaration = 20, RULE_arrayAccess = 21, RULE_arrayValueAssignment = 22, 
		RULE_malloc = 23, RULE_sizeOfArgument = 24, RULE_sizeof = 25, RULE_free = 26, 
		RULE_printHeap = 27, RULE_printStack = 28, RULE_printf = 29, RULE_variableAccess = 30, 
		RULE_expression = 31, RULE_expressionStatement = 32, RULE_conditionalStatement = 33, 
		RULE_switchStatement = 34, RULE_labeledStatement = 35, RULE_breakStatement = 36, 
		RULE_compoundStatement = 37, RULE_sequenceStatement = 38, RULE_switchBodyList = 39, 
		RULE_switchBodyStatement = 40, RULE_returnStatement = 41, RULE_loopInitial = 42, 
		RULE_forLoop = 43, RULE_doWhileLoop = 44, RULE_whileLoop = 45, RULE_statement = 46, 
		RULE_parameterDeclaration = 47, RULE_parameterList = 48, RULE_functionDeclaration = 49, 
		RULE_argumentExpressionList = 50, RULE_functionApplication = 51, RULE_program = 52;
	private static String[] makeRuleNames() {
		return new String[] {
			"typeSpecifier", "typeQualifier", "typeQualifiers", "declarationSpecifier", 
			"pointerPart", "pointer", "initialization", "initializationListPart", 
			"initializationList", "binaryAssignmentOperator", "unaryAssignmentOperator", 
			"casting", "binaryAssignment", "postfixAssignment", "prefixAssignment", 
			"assignment", "assignmentList", "pointerValueAssignment", "array", "arrayInitialization", 
			"arrayDeclaration", "arrayAccess", "arrayValueAssignment", "malloc", 
			"sizeOfArgument", "sizeof", "free", "printHeap", "printStack", "printf", 
			"variableAccess", "expression", "expressionStatement", "conditionalStatement", 
			"switchStatement", "labeledStatement", "breakStatement", "compoundStatement", 
			"sequenceStatement", "switchBodyList", "switchBodyStatement", "returnStatement", 
			"loopInitial", "forLoop", "doWhileLoop", "whileLoop", "statement", "parameterDeclaration", 
			"parameterList", "functionDeclaration", "argumentExpressionList", "functionApplication", 
			"program"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'void'", "'char'", "'unsigned char'", "'short'", "'unsigned short'", 
			"'int'", "'unsigned int'", "'long'", "'unsigned long'", "'float'", "'double'", 
			"'const'", "'restrict'", "'volatile'", "'('", "')'", "'='", "';'", "','", 
			"'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", 
			"'|='", "'{'", "'}'", "'['", "']'", "'[]'", "'malloc'", "'sizeof'", "'free'", 
			"'print_heap'", "'print_stack'", "'printf'", "'if'", "'else'", "'switch'", 
			"'case'", "':'", "'default'", "'break'", "'return'", "'for'", "'do'", 
			"'while'", "'*'", "'/'", "'+'", "'-'", "'%'", "'&&'", "'||'", "'=='", 
			"'!='", "'<'", "'<='", "'>'", "'>='", "'++'", "'--'", "'!'", "'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, "MUL", "DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", 
			"LOGICAL_OR", "EQUALS", "NOT_EQUALS", "LESS", "LESS_EQUAL", "GREATER", 
			"GREATER_EQUAL", "UNARY_ADD", "UNARY_SUB", "NOT", "VAR_ADDRESS", "WHITESPACE", 
			"DECIMAL", "FRACTION", "CHAR", "STRING", "COMMENT", "LINE_COMMENT", "INCLUDE", 
			"Identifier"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class TypeSpecifierContext extends ParserRuleContext {
		public List<TerminalNode> MUL() { return getTokens(CParser.MUL); }
		public TerminalNode MUL(int i) {
			return getToken(CParser.MUL, i);
		}
		public TypeSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeSpecifier; }
	}

	public final TypeSpecifierContext typeSpecifier() throws RecognitionException {
		TypeSpecifierContext _localctx = new TypeSpecifierContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_typeSpecifier);
		int _la;
		try {
			setState(183);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(106);
				match(T__0);
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(107);
					match(MUL);
					}
					}
					setState(112);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__1:
				enterOuterAlt(_localctx, 2);
				{
				setState(113);
				match(T__1);
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(114);
					match(MUL);
					}
					}
					setState(119);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__2:
				enterOuterAlt(_localctx, 3);
				{
				setState(120);
				match(T__2);
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(121);
					match(MUL);
					}
					}
					setState(126);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 4);
				{
				setState(127);
				match(T__3);
				setState(131);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(128);
					match(MUL);
					}
					}
					setState(133);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__4:
				enterOuterAlt(_localctx, 5);
				{
				setState(134);
				match(T__4);
				setState(138);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(135);
					match(MUL);
					}
					}
					setState(140);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 6);
				{
				setState(141);
				match(T__5);
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(142);
					match(MUL);
					}
					}
					setState(147);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 7);
				{
				setState(148);
				match(T__6);
				setState(152);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(149);
					match(MUL);
					}
					}
					setState(154);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 8);
				{
				setState(155);
				match(T__7);
				setState(159);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(156);
					match(MUL);
					}
					}
					setState(161);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 9);
				{
				setState(162);
				match(T__8);
				setState(166);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(163);
					match(MUL);
					}
					}
					setState(168);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 10);
				{
				setState(169);
				match(T__9);
				setState(173);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(170);
					match(MUL);
					}
					}
					setState(175);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 11);
				{
				setState(176);
				match(T__10);
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==MUL) {
					{
					{
					setState(177);
					match(MUL);
					}
					}
					setState(182);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeQualifierContext extends ParserRuleContext {
		public TypeQualifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeQualifier; }
	}

	public final TypeQualifierContext typeQualifier() throws RecognitionException {
		TypeQualifierContext _localctx = new TypeQualifierContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_typeQualifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__12) | (1L << T__13))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeQualifiersContext extends ParserRuleContext {
		public List<TypeQualifierContext> typeQualifier() {
			return getRuleContexts(TypeQualifierContext.class);
		}
		public TypeQualifierContext typeQualifier(int i) {
			return getRuleContext(TypeQualifierContext.class,i);
		}
		public TypeQualifiersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeQualifiers; }
	}

	public final TypeQualifiersContext typeQualifiers() throws RecognitionException {
		TypeQualifiersContext _localctx = new TypeQualifiersContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_typeQualifiers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__12) | (1L << T__13))) != 0)) {
				{
				setState(188); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(187);
					typeQualifier();
					}
					}
					setState(190); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__12) | (1L << T__13))) != 0) );
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationSpecifierContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TypeQualifierContext typeQualifier() {
			return getRuleContext(TypeQualifierContext.class,0);
		}
		public DeclarationSpecifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarationSpecifier; }
	}

	public final DeclarationSpecifierContext declarationSpecifier() throws RecognitionException {
		DeclarationSpecifierContext _localctx = new DeclarationSpecifierContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declarationSpecifier);
		try {
			setState(196);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
				enterOuterAlt(_localctx, 1);
				{
				setState(194);
				typeSpecifier();
				}
				break;
			case T__11:
			case T__12:
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(195);
				typeQualifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PointerPartContext extends ParserRuleContext {
		public ExpressionContext inner;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public PointerPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pointerPart; }
	}

	public final PointerPartContext pointerPart() throws RecognitionException {
		PointerPartContext _localctx = new PointerPartContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_pointerPart);
		try {
			setState(203);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
				enterOuterAlt(_localctx, 1);
				{
				setState(198);
				match(T__14);
				setState(199);
				((PointerPartContext)_localctx).inner = expression(0);
				setState(200);
				match(T__15);
				}
				break;
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(202);
				match(Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PointerContext extends ParserRuleContext {
		public List<TerminalNode> MUL() { return getTokens(CParser.MUL); }
		public TerminalNode MUL(int i) {
			return getToken(CParser.MUL, i);
		}
		public PointerPartContext pointerPart() {
			return getRuleContext(PointerPartContext.class,0);
		}
		public PointerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pointer; }
	}

	public final PointerContext pointer() throws RecognitionException {
		PointerContext _localctx = new PointerContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_pointer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			match(MUL);
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MUL) {
				{
				{
				setState(206);
				match(MUL);
				}
				}
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(212);
			pointerPart();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializationContext extends ParserRuleContext {
		public TypeQualifiersContext qualifiers;
		public ExpressionContext value;
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TypeQualifiersContext typeQualifiers() {
			return getRuleContext(TypeQualifiersContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CastingContext casting() {
			return getRuleContext(CastingContext.class,0);
		}
		public InitializationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initialization; }
	}

	public final InitializationContext initialization() throws RecognitionException {
		InitializationContext _localctx = new InitializationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_initialization);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
			((InitializationContext)_localctx).qualifiers = typeQualifiers();
			setState(215);
			typeSpecifier();
			setState(216);
			match(Identifier);
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__16) {
				{
				setState(217);
				match(T__16);
				setState(219);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(218);
					casting();
					}
					break;
				}
				setState(221);
				((InitializationContext)_localctx).value = expression(0);
				}
			}

			setState(224);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializationListPartContext extends ParserRuleContext {
		public ExpressionContext value;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CastingContext casting() {
			return getRuleContext(CastingContext.class,0);
		}
		public InitializationListPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializationListPart; }
	}

	public final InitializationListPartContext initializationListPart() throws RecognitionException {
		InitializationListPartContext _localctx = new InitializationListPartContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_initializationListPart);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			match(Identifier);
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__16) {
				{
				setState(227);
				match(T__16);
				setState(229);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
				case 1:
					{
					setState(228);
					casting();
					}
					break;
				}
				setState(231);
				((InitializationListPartContext)_localctx).value = expression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InitializationListContext extends ParserRuleContext {
		public TypeQualifiersContext qualifiers;
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public List<InitializationListPartContext> initializationListPart() {
			return getRuleContexts(InitializationListPartContext.class);
		}
		public InitializationListPartContext initializationListPart(int i) {
			return getRuleContext(InitializationListPartContext.class,i);
		}
		public TypeQualifiersContext typeQualifiers() {
			return getRuleContext(TypeQualifiersContext.class,0);
		}
		public InitializationListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initializationList; }
	}

	public final InitializationListContext initializationList() throws RecognitionException {
		InitializationListContext _localctx = new InitializationListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_initializationList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			((InitializationListContext)_localctx).qualifiers = typeQualifiers();
			setState(235);
			typeSpecifier();
			setState(236);
			initializationListPart();
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(237);
				match(T__18);
				setState(238);
				initializationListPart();
				}
				}
				setState(243);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(244);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinaryAssignmentOperatorContext extends ParserRuleContext {
		public BinaryAssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryAssignmentOperator; }
	}

	public final BinaryAssignmentOperatorContext binaryAssignmentOperator() throws RecognitionException {
		BinaryAssignmentOperatorContext _localctx = new BinaryAssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_binaryAssignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__16) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23) | (1L << T__24) | (1L << T__25) | (1L << T__26) | (1L << T__27) | (1L << T__28))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryAssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode UNARY_ADD() { return getToken(CParser.UNARY_ADD, 0); }
		public TerminalNode UNARY_SUB() { return getToken(CParser.UNARY_SUB, 0); }
		public UnaryAssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryAssignmentOperator; }
	}

	public final UnaryAssignmentOperatorContext unaryAssignmentOperator() throws RecognitionException {
		UnaryAssignmentOperatorContext _localctx = new UnaryAssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_unaryAssignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			_la = _input.LA(1);
			if ( !(_la==UNARY_ADD || _la==UNARY_SUB) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CastingContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public CastingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_casting; }
	}

	public final CastingContext casting() throws RecognitionException {
		CastingContext _localctx = new CastingContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_casting);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			match(T__14);
			setState(251);
			typeSpecifier();
			setState(252);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinaryAssignmentContext extends ParserRuleContext {
		public BinaryAssignmentOperatorContext operator;
		public ExpressionContext value;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public BinaryAssignmentOperatorContext binaryAssignmentOperator() {
			return getRuleContext(BinaryAssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CastingContext casting() {
			return getRuleContext(CastingContext.class,0);
		}
		public BinaryAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binaryAssignment; }
	}

	public final BinaryAssignmentContext binaryAssignment() throws RecognitionException {
		BinaryAssignmentContext _localctx = new BinaryAssignmentContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_binaryAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			match(Identifier);
			setState(255);
			((BinaryAssignmentContext)_localctx).operator = binaryAssignmentOperator();
			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(256);
				casting();
				}
				break;
			}
			setState(259);
			((BinaryAssignmentContext)_localctx).value = expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PostfixAssignmentContext extends ParserRuleContext {
		public UnaryAssignmentOperatorContext operator;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public UnaryAssignmentOperatorContext unaryAssignmentOperator() {
			return getRuleContext(UnaryAssignmentOperatorContext.class,0);
		}
		public PostfixAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfixAssignment; }
	}

	public final PostfixAssignmentContext postfixAssignment() throws RecognitionException {
		PostfixAssignmentContext _localctx = new PostfixAssignmentContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_postfixAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			match(Identifier);
			setState(262);
			((PostfixAssignmentContext)_localctx).operator = unaryAssignmentOperator();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrefixAssignmentContext extends ParserRuleContext {
		public UnaryAssignmentOperatorContext operator;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public UnaryAssignmentOperatorContext unaryAssignmentOperator() {
			return getRuleContext(UnaryAssignmentOperatorContext.class,0);
		}
		public PrefixAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefixAssignment; }
	}

	public final PrefixAssignmentContext prefixAssignment() throws RecognitionException {
		PrefixAssignmentContext _localctx = new PrefixAssignmentContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_prefixAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			((PrefixAssignmentContext)_localctx).operator = unaryAssignmentOperator();
			setState(265);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public BinaryAssignmentContext binaryAssignment() {
			return getRuleContext(BinaryAssignmentContext.class,0);
		}
		public PrefixAssignmentContext prefixAssignment() {
			return getRuleContext(PrefixAssignmentContext.class,0);
		}
		public PostfixAssignmentContext postfixAssignment() {
			return getRuleContext(PostfixAssignmentContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_assignment);
		try {
			setState(270);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(267);
				binaryAssignment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(268);
				prefixAssignment();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(269);
				postfixAssignment();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentListContext extends ParserRuleContext {
		public List<AssignmentContext> assignment() {
			return getRuleContexts(AssignmentContext.class);
		}
		public AssignmentContext assignment(int i) {
			return getRuleContext(AssignmentContext.class,i);
		}
		public AssignmentListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentList; }
	}

	public final AssignmentListContext assignmentList() throws RecognitionException {
		AssignmentListContext _localctx = new AssignmentListContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assignmentList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			assignment();
			setState(277);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(273);
					match(T__18);
					setState(274);
					assignment();
					}
					} 
				}
				setState(279);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PointerValueAssignmentContext extends ParserRuleContext {
		public BinaryAssignmentOperatorContext operator;
		public ExpressionContext value;
		public PointerContext pointer() {
			return getRuleContext(PointerContext.class,0);
		}
		public BinaryAssignmentOperatorContext binaryAssignmentOperator() {
			return getRuleContext(BinaryAssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PointerValueAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pointerValueAssignment; }
	}

	public final PointerValueAssignmentContext pointerValueAssignment() throws RecognitionException {
		PointerValueAssignmentContext _localctx = new PointerValueAssignmentContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_pointerValueAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			pointer();
			setState(281);
			((PointerValueAssignmentContext)_localctx).operator = binaryAssignmentOperator();
			setState(282);
			((PointerValueAssignmentContext)_localctx).value = expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode STRING() { return getToken(CParser.STRING, 0); }
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_array);
		int _la;
		try {
			setState(296);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__29:
				enterOuterAlt(_localctx, 1);
				{
				setState(284);
				match(T__29);
				setState(285);
				expression(0);
				setState(290);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__18) {
					{
					{
					setState(286);
					match(T__18);
					setState(287);
					expression(0);
					}
					}
					setState(292);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(293);
				match(T__30);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(295);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayInitializationContext extends ParserRuleContext {
		public TypeQualifiersContext qualifiers;
		public ExpressionContext value;
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TypeQualifiersContext typeQualifiers() {
			return getRuleContext(TypeQualifiersContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArrayInitializationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayInitialization; }
	}

	public final ArrayInitializationContext arrayInitialization() throws RecognitionException {
		ArrayInitializationContext _localctx = new ArrayInitializationContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_arrayInitialization);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			((ArrayInitializationContext)_localctx).qualifiers = typeQualifiers();
			setState(299);
			typeSpecifier();
			setState(300);
			match(Identifier);
			setState(306);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__31:
				{
				setState(301);
				match(T__31);
				setState(302);
				expression(0);
				setState(303);
				match(T__32);
				}
				break;
			case T__33:
				{
				setState(305);
				match(T__33);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(308);
			match(T__16);
			setState(309);
			((ArrayInitializationContext)_localctx).value = expression(0);
			setState(310);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayDeclarationContext extends ParserRuleContext {
		public TypeQualifiersContext qualifiers;
		public ExpressionContext size;
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public TypeQualifiersContext typeQualifiers() {
			return getRuleContext(TypeQualifiersContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArrayDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayDeclaration; }
	}

	public final ArrayDeclarationContext arrayDeclaration() throws RecognitionException {
		ArrayDeclarationContext _localctx = new ArrayDeclarationContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_arrayDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(312);
			((ArrayDeclarationContext)_localctx).qualifiers = typeQualifiers();
			setState(313);
			typeSpecifier();
			setState(314);
			match(Identifier);
			setState(315);
			match(T__31);
			setState(316);
			((ArrayDeclarationContext)_localctx).size = expression(0);
			setState(317);
			match(T__32);
			setState(318);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayAccessContext extends ParserRuleContext {
		public Token name;
		public ExpressionContext index;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArrayAccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayAccess; }
	}

	public final ArrayAccessContext arrayAccess() throws RecognitionException {
		ArrayAccessContext _localctx = new ArrayAccessContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_arrayAccess);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			((ArrayAccessContext)_localctx).name = match(Identifier);
			setState(321);
			match(T__31);
			setState(322);
			((ArrayAccessContext)_localctx).index = expression(0);
			setState(323);
			match(T__32);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayValueAssignmentContext extends ParserRuleContext {
		public BinaryAssignmentOperatorContext operator;
		public ExpressionContext value;
		public ArrayAccessContext arrayAccess() {
			return getRuleContext(ArrayAccessContext.class,0);
		}
		public BinaryAssignmentOperatorContext binaryAssignmentOperator() {
			return getRuleContext(BinaryAssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CastingContext casting() {
			return getRuleContext(CastingContext.class,0);
		}
		public ArrayValueAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayValueAssignment; }
	}

	public final ArrayValueAssignmentContext arrayValueAssignment() throws RecognitionException {
		ArrayValueAssignmentContext _localctx = new ArrayValueAssignmentContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_arrayValueAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			arrayAccess();
			setState(326);
			((ArrayValueAssignmentContext)_localctx).operator = binaryAssignmentOperator();
			setState(328);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(327);
				casting();
				}
				break;
			}
			setState(330);
			((ArrayValueAssignmentContext)_localctx).value = expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MallocContext extends ParserRuleContext {
		public ExpressionContext size;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public MallocContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_malloc; }
	}

	public final MallocContext malloc() throws RecognitionException {
		MallocContext _localctx = new MallocContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_malloc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			match(T__34);
			setState(333);
			match(T__14);
			setState(334);
			((MallocContext)_localctx).size = expression(0);
			setState(335);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SizeOfArgumentContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public SizeOfArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeOfArgument; }
	}

	public final SizeOfArgumentContext sizeOfArgument() throws RecognitionException {
		SizeOfArgumentContext _localctx = new SizeOfArgumentContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_sizeOfArgument);
		try {
			setState(339);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__14:
			case T__29:
			case T__34:
			case T__35:
			case T__36:
			case MUL:
			case SUB:
			case UNARY_ADD:
			case UNARY_SUB:
			case NOT:
			case VAR_ADDRESS:
			case DECIMAL:
			case FRACTION:
			case CHAR:
			case STRING:
			case COMMENT:
			case LINE_COMMENT:
			case INCLUDE:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(337);
				expression(0);
				}
				break;
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
				enterOuterAlt(_localctx, 2);
				{
				setState(338);
				typeSpecifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SizeofContext extends ParserRuleContext {
		public SizeOfArgumentContext arg;
		public SizeOfArgumentContext sizeOfArgument() {
			return getRuleContext(SizeOfArgumentContext.class,0);
		}
		public SizeofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeof; }
	}

	public final SizeofContext sizeof() throws RecognitionException {
		SizeofContext _localctx = new SizeofContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_sizeof);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(341);
			match(T__35);
			setState(342);
			match(T__14);
			setState(343);
			((SizeofContext)_localctx).arg = sizeOfArgument();
			setState(344);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FreeContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public FreeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_free; }
	}

	public final FreeContext free() throws RecognitionException {
		FreeContext _localctx = new FreeContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_free);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			match(T__36);
			setState(347);
			match(T__14);
			setState(348);
			match(Identifier);
			setState(349);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintHeapContext extends ParserRuleContext {
		public PrintHeapContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printHeap; }
	}

	public final PrintHeapContext printHeap() throws RecognitionException {
		PrintHeapContext _localctx = new PrintHeapContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_printHeap);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(T__37);
			setState(352);
			match(T__14);
			setState(353);
			match(T__15);
			setState(354);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintStackContext extends ParserRuleContext {
		public PrintStackContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printStack; }
	}

	public final PrintStackContext printStack() throws RecognitionException {
		PrintStackContext _localctx = new PrintStackContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_printStack);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(356);
			match(T__38);
			setState(357);
			match(T__14);
			setState(358);
			match(T__15);
			setState(359);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrintfContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PrintfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printf; }
	}

	public final PrintfContext printf() throws RecognitionException {
		PrintfContext _localctx = new PrintfContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_printf);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(T__39);
			setState(362);
			match(T__14);
			setState(363);
			expression(0);
			setState(368);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__18) {
				{
				{
				setState(364);
				match(T__18);
				setState(365);
				expression(0);
				}
				}
				setState(370);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(371);
			match(T__15);
			setState(372);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableAccessContext extends ParserRuleContext {
		public ExpressionContext index;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableAccessContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableAccess; }
	}

	public final VariableAccessContext variableAccess() throws RecognitionException {
		VariableAccessContext _localctx = new VariableAccessContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_variableAccess);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(Identifier);
			setState(379);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
			case 1:
				{
				setState(375);
				match(T__31);
				setState(376);
				((VariableAccessContext)_localctx).index = expression(0);
				setState(377);
				match(T__32);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AccessContext extends ExpressionContext {
		public ArrayAccessContext arrayAccess() {
			return getRuleContext(ArrayAccessContext.class,0);
		}
		public AccessContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class StringContext extends ExpressionContext {
		public TerminalNode STRING() { return getToken(CParser.STRING, 0); }
		public StringContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayValueAssignmentExpressionContext extends ExpressionContext {
		public ArrayValueAssignmentContext arrayValueAssignment() {
			return getRuleContext(ArrayValueAssignmentContext.class,0);
		}
		public ArrayValueAssignmentExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalOrContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LOGICAL_OR() { return getToken(CParser.LOGICAL_OR, 0); }
		public LogicalOrContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(CParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CParser.SUB, 0); }
		public AdditiveContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(CParser.MOD, 0); }
		public MultiplicativeContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierContext extends ExpressionContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public IdentifierContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DecimalContext extends ExpressionContext {
		public TerminalNode DECIMAL() { return getToken(CParser.DECIMAL, 0); }
		public DecimalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AssignmentExpressionContext extends ExpressionContext {
		public AssignmentListContext assignmentList() {
			return getRuleContext(AssignmentListContext.class,0);
		}
		public AssignmentExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CharContext extends ExpressionContext {
		public TerminalNode CHAR() { return getToken(CParser.CHAR, 0); }
		public CharContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IncludeExpressionContext extends ExpressionContext {
		public TerminalNode INCLUDE() { return getToken(CParser.INCLUDE, 0); }
		public IncludeExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalAndContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LOGICAL_AND() { return getToken(CParser.LOGICAL_AND, 0); }
		public LogicalAndContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FreeExpressionContext extends ExpressionContext {
		public FreeContext free() {
			return getRuleContext(FreeContext.class,0);
		}
		public FreeExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode EQUALS() { return getToken(CParser.EQUALS, 0); }
		public TerminalNode NOT_EQUALS() { return getToken(CParser.NOT_EQUALS, 0); }
		public EqualityContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class VarAddressContext extends ExpressionContext {
		public Token operator;
		public VariableAccessContext right;
		public TerminalNode VAR_ADDRESS() { return getToken(CParser.VAR_ADDRESS, 0); }
		public VariableAccessContext variableAccess() {
			return getRuleContext(VariableAccessContext.class,0);
		}
		public VarAddressContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesContext extends ExpressionContext {
		public ExpressionContext inner;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesesContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SizeOfOperatorContext extends ExpressionContext {
		public SizeofContext sizeof() {
			return getRuleContext(SizeofContext.class,0);
		}
		public SizeOfOperatorContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MallocExpressionContext extends ExpressionContext {
		public MallocContext malloc() {
			return getRuleContext(MallocContext.class,0);
		}
		public MallocExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode GREATER() { return getToken(CParser.GREATER, 0); }
		public TerminalNode GREATER_EQUAL() { return getToken(CParser.GREATER_EQUAL, 0); }
		public TerminalNode LESS() { return getToken(CParser.LESS, 0); }
		public TerminalNode LESS_EQUAL() { return getToken(CParser.LESS_EQUAL, 0); }
		public RelationalContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FractionContext extends ExpressionContext {
		public TerminalNode FRACTION() { return getToken(CParser.FRACTION, 0); }
		public FractionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryContext extends ExpressionContext {
		public Token operator;
		public ExpressionContext right;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode NOT() { return getToken(CParser.NOT, 0); }
		public TerminalNode SUB() { return getToken(CParser.SUB, 0); }
		public UnaryContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PointerExpressionContext extends ExpressionContext {
		public PointerContext pointer() {
			return getRuleContext(PointerContext.class,0);
		}
		public PointerExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PointerValueAssignmentExpressionContext extends ExpressionContext {
		public PointerValueAssignmentContext pointerValueAssignment() {
			return getRuleContext(PointerValueAssignmentContext.class,0);
		}
		public PointerValueAssignmentExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LineCommentExpressionContext extends ExpressionContext {
		public TerminalNode LINE_COMMENT() { return getToken(CParser.LINE_COMMENT, 0); }
		public LineCommentExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CommentExpressionContext extends ExpressionContext {
		public TerminalNode COMMENT() { return getToken(CParser.COMMENT, 0); }
		public CommentExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArrayExpressionContext extends ExpressionContext {
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public ArrayExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ApplicationContext extends ExpressionContext {
		public FunctionApplicationContext functionApplication() {
			return getRuleContext(FunctionApplicationContext.class,0);
		}
		public ApplicationContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 62;
		enterRecursionRule(_localctx, 62, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(408);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(382);
				match(DECIMAL);
				}
				break;
			case 2:
				{
				_localctx = new FractionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(383);
				match(FRACTION);
				}
				break;
			case 3:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(384);
				match(CHAR);
				}
				break;
			case 4:
				{
				_localctx = new StringContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(385);
				match(STRING);
				}
				break;
			case 5:
				{
				_localctx = new IdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(386);
				match(Identifier);
				}
				break;
			case 6:
				{
				_localctx = new ApplicationContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(387);
				functionApplication();
				}
				break;
			case 7:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(388);
				match(T__14);
				setState(389);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(390);
				match(T__15);
				}
				break;
			case 8:
				{
				_localctx = new AccessContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(392);
				arrayAccess();
				}
				break;
			case 9:
				{
				_localctx = new VarAddressContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(393);
				((VarAddressContext)_localctx).operator = match(VAR_ADDRESS);
				setState(394);
				((VarAddressContext)_localctx).right = variableAccess();
				}
				break;
			case 10:
				{
				_localctx = new SizeOfOperatorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(395);
				sizeof();
				}
				break;
			case 11:
				{
				_localctx = new UnaryContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(396);
				((UnaryContext)_localctx).operator = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==SUB || _la==NOT) ) {
					((UnaryContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(397);
				((UnaryContext)_localctx).right = expression(17);
				}
				break;
			case 12:
				{
				_localctx = new PointerExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(398);
				pointer();
				}
				break;
			case 13:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(399);
				assignmentList();
				}
				break;
			case 14:
				{
				_localctx = new ArrayValueAssignmentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(400);
				arrayValueAssignment();
				}
				break;
			case 15:
				{
				_localctx = new PointerValueAssignmentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(401);
				pointerValueAssignment();
				}
				break;
			case 16:
				{
				_localctx = new MallocExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(402);
				malloc();
				}
				break;
			case 17:
				{
				_localctx = new FreeExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(403);
				free();
				}
				break;
			case 18:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(404);
				array();
				}
				break;
			case 19:
				{
				_localctx = new CommentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(405);
				match(COMMENT);
				}
				break;
			case 20:
				{
				_localctx = new LineCommentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(406);
				match(LINE_COMMENT);
				}
				break;
			case 21:
				{
				_localctx = new IncludeExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(407);
				match(INCLUDE);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(430);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(428);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
					case 1:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						((AdditiveContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(410);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(411);
						((AdditiveContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
							((AdditiveContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(412);
						((AdditiveContext)_localctx).right = expression(17);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicativeContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(413);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(414);
						((MultiplicativeContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
							((MultiplicativeContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(415);
						((MultiplicativeContext)_localctx).right = expression(16);
						}
						break;
					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						((RelationalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(416);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(417);
						((RelationalContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 61)) & ~0x3f) == 0 && ((1L << (_la - 61)) & ((1L << (LESS - 61)) | (1L << (LESS_EQUAL - 61)) | (1L << (GREATER - 61)) | (1L << (GREATER_EQUAL - 61)))) != 0)) ) {
							((RelationalContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(418);
						((RelationalContext)_localctx).right = expression(15);
						}
						break;
					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						((EqualityContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(419);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(420);
						((EqualityContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==EQUALS || _la==NOT_EQUALS) ) {
							((EqualityContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(421);
						((EqualityContext)_localctx).right = expression(14);
						}
						break;
					case 5:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						((LogicalAndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(422);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(423);
						((LogicalAndContext)_localctx).operator = match(LOGICAL_AND);
						setState(424);
						((LogicalAndContext)_localctx).right = expression(13);
						}
						break;
					case 6:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						((LogicalOrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(425);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(426);
						((LogicalOrContext)_localctx).operator = match(LOGICAL_OR);
						setState(427);
						((LogicalOrContext)_localctx).right = expression(12);
						}
						break;
					}
					} 
				}
				setState(432);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			expression(0);
			setState(434);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalStatementContext extends ParserRuleContext {
		public ExpressionContext condition;
		public CompoundStatementContext truebody;
		public CompoundStatementContext falsebody;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<CompoundStatementContext> compoundStatement() {
			return getRuleContexts(CompoundStatementContext.class);
		}
		public CompoundStatementContext compoundStatement(int i) {
			return getRuleContext(CompoundStatementContext.class,i);
		}
		public ConditionalStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalStatement; }
	}

	public final ConditionalStatementContext conditionalStatement() throws RecognitionException {
		ConditionalStatementContext _localctx = new ConditionalStatementContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_conditionalStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(436);
			match(T__40);
			setState(437);
			match(T__14);
			setState(438);
			((ConditionalStatementContext)_localctx).condition = expression(0);
			setState(439);
			match(T__15);
			setState(440);
			((ConditionalStatementContext)_localctx).truebody = compoundStatement();
			setState(443);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__41) {
				{
				setState(441);
				match(T__41);
				setState(442);
				((ConditionalStatementContext)_localctx).falsebody = compoundStatement();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public ExpressionContext condition;
		public SwitchBodyStatementContext body;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SwitchBodyStatementContext switchBodyStatement() {
			return getRuleContext(SwitchBodyStatementContext.class,0);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			match(T__42);
			setState(446);
			match(T__14);
			setState(447);
			((SwitchStatementContext)_localctx).condition = expression(0);
			setState(448);
			match(T__15);
			setState(449);
			((SwitchStatementContext)_localctx).body = switchBodyStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabeledStatementContext extends ParserRuleContext {
		public ExpressionContext condition;
		public StatementContext body;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public LabeledStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labeledStatement; }
	}

	public final LabeledStatementContext labeledStatement() throws RecognitionException {
		LabeledStatementContext _localctx = new LabeledStatementContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_labeledStatement);
		try {
			setState(464);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__43:
				enterOuterAlt(_localctx, 1);
				{
				setState(451);
				match(T__43);
				setState(452);
				((LabeledStatementContext)_localctx).condition = expression(0);
				setState(453);
				match(T__44);
				setState(454);
				((LabeledStatementContext)_localctx).body = statement();
				setState(456);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
				case 1:
					{
					setState(455);
					breakStatement();
					}
					break;
				}
				}
				break;
			case T__45:
				enterOuterAlt(_localctx, 2);
				{
				setState(458);
				match(T__45);
				setState(459);
				match(T__44);
				setState(460);
				((LabeledStatementContext)_localctx).body = statement();
				setState(462);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(461);
					breakStatement();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(466);
			match(T__46);
			setState(467);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompoundStatementContext extends ParserRuleContext {
		public SequenceStatementContext sequenceStatement() {
			return getRuleContext(SequenceStatementContext.class,0);
		}
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_compoundStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(469);
			match(T__29);
			setState(470);
			sequenceStatement();
			setState(471);
			match(T__30);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SequenceStatementContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public SequenceStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sequenceStatement; }
	}

	public final SequenceStatementContext sequenceStatement() throws RecognitionException {
		SequenceStatementContext _localctx = new SequenceStatementContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_sequenceStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(476);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__29) | (1L << T__34) | (1L << T__35) | (1L << T__36) | (1L << T__37) | (1L << T__38) | (1L << T__39) | (1L << T__40) | (1L << T__42) | (1L << T__43) | (1L << T__45) | (1L << T__46) | (1L << T__47) | (1L << T__48) | (1L << T__49) | (1L << T__50) | (1L << MUL) | (1L << SUB))) != 0) || ((((_la - 65)) & ~0x3f) == 0 && ((1L << (_la - 65)) & ((1L << (UNARY_ADD - 65)) | (1L << (UNARY_SUB - 65)) | (1L << (NOT - 65)) | (1L << (VAR_ADDRESS - 65)) | (1L << (DECIMAL - 65)) | (1L << (FRACTION - 65)) | (1L << (CHAR - 65)) | (1L << (STRING - 65)) | (1L << (COMMENT - 65)) | (1L << (LINE_COMMENT - 65)) | (1L << (INCLUDE - 65)) | (1L << (Identifier - 65)))) != 0)) {
				{
				{
				setState(473);
				statement();
				}
				}
				setState(478);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchBodyListContext extends ParserRuleContext {
		public List<LabeledStatementContext> labeledStatement() {
			return getRuleContexts(LabeledStatementContext.class);
		}
		public LabeledStatementContext labeledStatement(int i) {
			return getRuleContext(LabeledStatementContext.class,i);
		}
		public SwitchBodyListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchBodyList; }
	}

	public final SwitchBodyListContext switchBodyList() throws RecognitionException {
		SwitchBodyListContext _localctx = new SwitchBodyListContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_switchBodyList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(482);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__43 || _la==T__45) {
				{
				{
				setState(479);
				labeledStatement();
				}
				}
				setState(484);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchBodyStatementContext extends ParserRuleContext {
		public SwitchBodyListContext switchBodyList() {
			return getRuleContext(SwitchBodyListContext.class,0);
		}
		public SwitchBodyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchBodyStatement; }
	}

	public final SwitchBodyStatementContext switchBodyStatement() throws RecognitionException {
		SwitchBodyStatementContext _localctx = new SwitchBodyStatementContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_switchBodyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(485);
			match(T__29);
			setState(486);
			switchBodyList();
			setState(487);
			match(T__30);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(489);
			match(T__47);
			setState(490);
			expression(0);
			setState(491);
			match(T__17);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LoopInitialContext extends ParserRuleContext {
		public InitializationListContext initializationList() {
			return getRuleContext(InitializationListContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public LoopInitialContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loopInitial; }
	}

	public final LoopInitialContext loopInitial() throws RecognitionException {
		LoopInitialContext _localctx = new LoopInitialContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_loopInitial);
		try {
			setState(495);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case T__1:
			case T__2:
			case T__3:
			case T__4:
			case T__5:
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
			case T__11:
			case T__12:
			case T__13:
				enterOuterAlt(_localctx, 1);
				{
				setState(493);
				initializationList();
				}
				break;
			case T__14:
			case T__29:
			case T__34:
			case T__35:
			case T__36:
			case MUL:
			case SUB:
			case UNARY_ADD:
			case UNARY_SUB:
			case NOT:
			case VAR_ADDRESS:
			case DECIMAL:
			case FRACTION:
			case CHAR:
			case STRING:
			case COMMENT:
			case LINE_COMMENT:
			case INCLUDE:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(494);
				expressionStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForLoopContext extends ParserRuleContext {
		public LoopInitialContext initial;
		public ExpressionContext condition;
		public ExpressionContext action;
		public CompoundStatementContext body;
		public LoopInitialContext loopInitial() {
			return getRuleContext(LoopInitialContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public ForLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forLoop; }
	}

	public final ForLoopContext forLoop() throws RecognitionException {
		ForLoopContext _localctx = new ForLoopContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_forLoop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(497);
			match(T__48);
			setState(498);
			match(T__14);
			setState(499);
			((ForLoopContext)_localctx).initial = loopInitial();
			setState(500);
			((ForLoopContext)_localctx).condition = expression(0);
			setState(501);
			match(T__17);
			setState(502);
			((ForLoopContext)_localctx).action = expression(0);
			setState(503);
			match(T__15);
			setState(504);
			((ForLoopContext)_localctx).body = compoundStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DoWhileLoopContext extends ParserRuleContext {
		public CompoundStatementContext body;
		public ExpressionContext condition;
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DoWhileLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhileLoop; }
	}

	public final DoWhileLoopContext doWhileLoop() throws RecognitionException {
		DoWhileLoopContext _localctx = new DoWhileLoopContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_doWhileLoop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(506);
			match(T__49);
			setState(507);
			((DoWhileLoopContext)_localctx).body = compoundStatement();
			setState(508);
			match(T__50);
			setState(509);
			match(T__14);
			setState(510);
			((DoWhileLoopContext)_localctx).condition = expression(0);
			setState(511);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileLoopContext extends ParserRuleContext {
		public ExpressionContext condition;
		public CompoundStatementContext body;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public WhileLoopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileLoop; }
	}

	public final WhileLoopContext whileLoop() throws RecognitionException {
		WhileLoopContext _localctx = new WhileLoopContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_whileLoop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			match(T__50);
			setState(514);
			match(T__14);
			setState(515);
			((WhileLoopContext)_localctx).condition = expression(0);
			setState(516);
			match(T__15);
			setState(517);
			((WhileLoopContext)_localctx).body = compoundStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public ArrayInitializationContext arrayInitialization() {
			return getRuleContext(ArrayInitializationContext.class,0);
		}
		public InitializationContext initialization() {
			return getRuleContext(InitializationContext.class,0);
		}
		public InitializationListContext initializationList() {
			return getRuleContext(InitializationListContext.class,0);
		}
		public ConditionalStatementContext conditionalStatement() {
			return getRuleContext(ConditionalStatementContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public LabeledStatementContext labeledStatement() {
			return getRuleContext(LabeledStatementContext.class,0);
		}
		public SwitchBodyStatementContext switchBodyStatement() {
			return getRuleContext(SwitchBodyStatementContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ArrayDeclarationContext arrayDeclaration() {
			return getRuleContext(ArrayDeclarationContext.class,0);
		}
		public ForLoopContext forLoop() {
			return getRuleContext(ForLoopContext.class,0);
		}
		public DoWhileLoopContext doWhileLoop() {
			return getRuleContext(DoWhileLoopContext.class,0);
		}
		public WhileLoopContext whileLoop() {
			return getRuleContext(WhileLoopContext.class,0);
		}
		public PrintHeapContext printHeap() {
			return getRuleContext(PrintHeapContext.class,0);
		}
		public PrintStackContext printStack() {
			return getRuleContext(PrintStackContext.class,0);
		}
		public PrintfContext printf() {
			return getRuleContext(PrintfContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_statement);
		try {
			setState(538);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,42,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(519);
				expressionStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(520);
				arrayInitialization();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(521);
				initialization();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(522);
				initializationList();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(523);
				conditionalStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(524);
				compoundStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(525);
				switchStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(526);
				labeledStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(527);
				switchBodyStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(528);
				functionDeclaration();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(529);
				returnStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(530);
				breakStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(531);
				arrayDeclaration();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(532);
				forLoop();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(533);
				doWhileLoop();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(534);
				whileLoop();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(535);
				printHeap();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(536);
				printStack();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(537);
				printf();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterDeclarationContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public ParameterDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterDeclaration; }
	}

	public final ParameterDeclarationContext parameterDeclaration() throws RecognitionException {
		ParameterDeclarationContext _localctx = new ParameterDeclarationContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_parameterDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(540);
			typeSpecifier();
			setState(541);
			match(Identifier);
			setState(543);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__33) {
				{
				setState(542);
				match(T__33);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterDeclarationContext> parameterDeclaration() {
			return getRuleContexts(ParameterDeclarationContext.class);
		}
		public ParameterDeclarationContext parameterDeclaration(int i) {
			return getRuleContext(ParameterDeclarationContext.class,i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(553);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0)) {
				{
				setState(545);
				parameterDeclaration();
				setState(550);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__18) {
					{
					{
					setState(546);
					match(T__18);
					setState(547);
					parameterDeclaration();
					}
					}
					setState(552);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public CompoundStatementContext compoundStatement() {
			return getRuleContext(CompoundStatementContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(555);
			typeSpecifier();
			setState(556);
			match(Identifier);
			setState(557);
			match(T__14);
			setState(558);
			parameterList();
			setState(559);
			match(T__15);
			setState(560);
			compoundStatement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ArgumentExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentExpressionList; }
	}

	public final ArgumentExpressionListContext argumentExpressionList() throws RecognitionException {
		ArgumentExpressionListContext _localctx = new ArgumentExpressionListContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_argumentExpressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 15)) & ~0x3f) == 0 && ((1L << (_la - 15)) & ((1L << (T__14 - 15)) | (1L << (T__29 - 15)) | (1L << (T__34 - 15)) | (1L << (T__35 - 15)) | (1L << (T__36 - 15)) | (1L << (MUL - 15)) | (1L << (SUB - 15)) | (1L << (UNARY_ADD - 15)) | (1L << (UNARY_SUB - 15)) | (1L << (NOT - 15)) | (1L << (VAR_ADDRESS - 15)) | (1L << (DECIMAL - 15)) | (1L << (FRACTION - 15)) | (1L << (CHAR - 15)) | (1L << (STRING - 15)) | (1L << (COMMENT - 15)) | (1L << (LINE_COMMENT - 15)) | (1L << (INCLUDE - 15)) | (1L << (Identifier - 15)))) != 0)) {
				{
				setState(562);
				expression(0);
				setState(567);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__18) {
					{
					{
					setState(563);
					match(T__18);
					setState(564);
					expression(0);
					}
					}
					setState(569);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionApplicationContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public ArgumentExpressionListContext argumentExpressionList() {
			return getRuleContext(ArgumentExpressionListContext.class,0);
		}
		public FunctionApplicationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionApplication; }
	}

	public final FunctionApplicationContext functionApplication() throws RecognitionException {
		FunctionApplicationContext _localctx = new FunctionApplicationContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_functionApplication);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(572);
			match(Identifier);
			setState(573);
			match(T__14);
			setState(574);
			argumentExpressionList();
			setState(575);
			match(T__15);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramContext extends ParserRuleContext {
		public List<FunctionDeclarationContext> functionDeclaration() {
			return getRuleContexts(FunctionDeclarationContext.class);
		}
		public FunctionDeclarationContext functionDeclaration(int i) {
			return getRuleContext(FunctionDeclarationContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(578); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(577);
				functionDeclaration();
				}
				}
				setState(580); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 31:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 16);
		case 1:
			return precpred(_ctx, 15);
		case 2:
			return precpred(_ctx, 14);
		case 3:
			return precpred(_ctx, 13);
		case 4:
			return precpred(_ctx, 12);
		case 5:
			return precpred(_ctx, 11);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3O\u0249\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\3\2\3\2\7\2o\n\2\f\2\16\2r\13\2\3\2\3\2\7\2v\n"+
		"\2\f\2\16\2y\13\2\3\2\3\2\7\2}\n\2\f\2\16\2\u0080\13\2\3\2\3\2\7\2\u0084"+
		"\n\2\f\2\16\2\u0087\13\2\3\2\3\2\7\2\u008b\n\2\f\2\16\2\u008e\13\2\3\2"+
		"\3\2\7\2\u0092\n\2\f\2\16\2\u0095\13\2\3\2\3\2\7\2\u0099\n\2\f\2\16\2"+
		"\u009c\13\2\3\2\3\2\7\2\u00a0\n\2\f\2\16\2\u00a3\13\2\3\2\3\2\7\2\u00a7"+
		"\n\2\f\2\16\2\u00aa\13\2\3\2\3\2\7\2\u00ae\n\2\f\2\16\2\u00b1\13\2\3\2"+
		"\3\2\7\2\u00b5\n\2\f\2\16\2\u00b8\13\2\5\2\u00ba\n\2\3\3\3\3\3\4\6\4\u00bf"+
		"\n\4\r\4\16\4\u00c0\5\4\u00c3\n\4\3\5\3\5\5\5\u00c7\n\5\3\6\3\6\3\6\3"+
		"\6\3\6\5\6\u00ce\n\6\3\7\3\7\7\7\u00d2\n\7\f\7\16\7\u00d5\13\7\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\b\5\b\u00de\n\b\3\b\5\b\u00e1\n\b\3\b\3\b\3\t\3\t\3"+
		"\t\5\t\u00e8\n\t\3\t\5\t\u00eb\n\t\3\n\3\n\3\n\3\n\3\n\7\n\u00f2\n\n\f"+
		"\n\16\n\u00f5\13\n\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\5\16\u0104\n\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\20\3\21\3\21"+
		"\3\21\5\21\u0111\n\21\3\22\3\22\3\22\7\22\u0116\n\22\f\22\16\22\u0119"+
		"\13\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\7\24\u0123\n\24\f\24\16"+
		"\24\u0126\13\24\3\24\3\24\3\24\5\24\u012b\n\24\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\5\25\u0135\n\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26"+
		"\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\5\30\u014b"+
		"\n\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\32\3\32\5\32\u0156\n\32\3\33"+
		"\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35"+
		"\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3\37\3\37\3\37\7\37\u0171\n\37\f\37"+
		"\16\37\u0174\13\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \5 \u017e\n \3!\3!\3!"+
		"\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!"+
		"\3!\5!\u019b\n!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!\3!"+
		"\7!\u01af\n!\f!\16!\u01b2\13!\3\"\3\"\3\"\3#\3#\3#\3#\3#\3#\3#\5#\u01be"+
		"\n#\3$\3$\3$\3$\3$\3$\3%\3%\3%\3%\3%\5%\u01cb\n%\3%\3%\3%\3%\5%\u01d1"+
		"\n%\5%\u01d3\n%\3&\3&\3&\3\'\3\'\3\'\3\'\3(\7(\u01dd\n(\f(\16(\u01e0\13"+
		"(\3)\7)\u01e3\n)\f)\16)\u01e6\13)\3*\3*\3*\3*\3+\3+\3+\3+\3,\3,\5,\u01f2"+
		"\n,\3-\3-\3-\3-\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/"+
		"\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60"+
		"\3\60\3\60\3\60\3\60\3\60\5\60\u021d\n\60\3\61\3\61\3\61\5\61\u0222\n"+
		"\61\3\62\3\62\3\62\7\62\u0227\n\62\f\62\16\62\u022a\13\62\5\62\u022c\n"+
		"\62\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\7\64\u0238\n\64"+
		"\f\64\16\64\u023b\13\64\5\64\u023d\n\64\3\65\3\65\3\65\3\65\3\65\3\66"+
		"\6\66\u0245\n\66\r\66\16\66\u0246\3\66\2\3@\67\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhj\2\n\3"+
		"\2\16\20\4\2\23\23\26\37\3\2CD\4\299EE\3\289\4\2\66\67::\3\2?B\3\2=>\2"+
		"\u0276\2\u00b9\3\2\2\2\4\u00bb\3\2\2\2\6\u00c2\3\2\2\2\b\u00c6\3\2\2\2"+
		"\n\u00cd\3\2\2\2\f\u00cf\3\2\2\2\16\u00d8\3\2\2\2\20\u00e4\3\2\2\2\22"+
		"\u00ec\3\2\2\2\24\u00f8\3\2\2\2\26\u00fa\3\2\2\2\30\u00fc\3\2\2\2\32\u0100"+
		"\3\2\2\2\34\u0107\3\2\2\2\36\u010a\3\2\2\2 \u0110\3\2\2\2\"\u0112\3\2"+
		"\2\2$\u011a\3\2\2\2&\u012a\3\2\2\2(\u012c\3\2\2\2*\u013a\3\2\2\2,\u0142"+
		"\3\2\2\2.\u0147\3\2\2\2\60\u014e\3\2\2\2\62\u0155\3\2\2\2\64\u0157\3\2"+
		"\2\2\66\u015c\3\2\2\28\u0161\3\2\2\2:\u0166\3\2\2\2<\u016b\3\2\2\2>\u0178"+
		"\3\2\2\2@\u019a\3\2\2\2B\u01b3\3\2\2\2D\u01b6\3\2\2\2F\u01bf\3\2\2\2H"+
		"\u01d2\3\2\2\2J\u01d4\3\2\2\2L\u01d7\3\2\2\2N\u01de\3\2\2\2P\u01e4\3\2"+
		"\2\2R\u01e7\3\2\2\2T\u01eb\3\2\2\2V\u01f1\3\2\2\2X\u01f3\3\2\2\2Z\u01fc"+
		"\3\2\2\2\\\u0203\3\2\2\2^\u021c\3\2\2\2`\u021e\3\2\2\2b\u022b\3\2\2\2"+
		"d\u022d\3\2\2\2f\u023c\3\2\2\2h\u023e\3\2\2\2j\u0244\3\2\2\2lp\7\3\2\2"+
		"mo\7\66\2\2nm\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2q\u00ba\3\2\2\2rp\3"+
		"\2\2\2sw\7\4\2\2tv\7\66\2\2ut\3\2\2\2vy\3\2\2\2wu\3\2\2\2wx\3\2\2\2x\u00ba"+
		"\3\2\2\2yw\3\2\2\2z~\7\5\2\2{}\7\66\2\2|{\3\2\2\2}\u0080\3\2\2\2~|\3\2"+
		"\2\2~\177\3\2\2\2\177\u00ba\3\2\2\2\u0080~\3\2\2\2\u0081\u0085\7\6\2\2"+
		"\u0082\u0084\7\66\2\2\u0083\u0082\3\2\2\2\u0084\u0087\3\2\2\2\u0085\u0083"+
		"\3\2\2\2\u0085\u0086\3\2\2\2\u0086\u00ba\3\2\2\2\u0087\u0085\3\2\2\2\u0088"+
		"\u008c\7\7\2\2\u0089\u008b\7\66\2\2\u008a\u0089\3\2\2\2\u008b\u008e\3"+
		"\2\2\2\u008c\u008a\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u00ba\3\2\2\2\u008e"+
		"\u008c\3\2\2\2\u008f\u0093\7\b\2\2\u0090\u0092\7\66\2\2\u0091\u0090\3"+
		"\2\2\2\u0092\u0095\3\2\2\2\u0093\u0091\3\2\2\2\u0093\u0094\3\2\2\2\u0094"+
		"\u00ba\3\2\2\2\u0095\u0093\3\2\2\2\u0096\u009a\7\t\2\2\u0097\u0099\7\66"+
		"\2\2\u0098\u0097\3\2\2\2\u0099\u009c\3\2\2\2\u009a\u0098\3\2\2\2\u009a"+
		"\u009b\3\2\2\2\u009b\u00ba\3\2\2\2\u009c\u009a\3\2\2\2\u009d\u00a1\7\n"+
		"\2\2\u009e\u00a0\7\66\2\2\u009f\u009e\3\2\2\2\u00a0\u00a3\3\2\2\2\u00a1"+
		"\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\u00ba\3\2\2\2\u00a3\u00a1\3\2"+
		"\2\2\u00a4\u00a8\7\13\2\2\u00a5\u00a7\7\66\2\2\u00a6\u00a5\3\2\2\2\u00a7"+
		"\u00aa\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ba\3\2"+
		"\2\2\u00aa\u00a8\3\2\2\2\u00ab\u00af\7\f\2\2\u00ac\u00ae\7\66\2\2\u00ad"+
		"\u00ac\3\2\2\2\u00ae\u00b1\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0\3\2"+
		"\2\2\u00b0\u00ba\3\2\2\2\u00b1\u00af\3\2\2\2\u00b2\u00b6\7\r\2\2\u00b3"+
		"\u00b5\7\66\2\2\u00b4\u00b3\3\2\2\2\u00b5\u00b8\3\2\2\2\u00b6\u00b4\3"+
		"\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00ba\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b9"+
		"l\3\2\2\2\u00b9s\3\2\2\2\u00b9z\3\2\2\2\u00b9\u0081\3\2\2\2\u00b9\u0088"+
		"\3\2\2\2\u00b9\u008f\3\2\2\2\u00b9\u0096\3\2\2\2\u00b9\u009d\3\2\2\2\u00b9"+
		"\u00a4\3\2\2\2\u00b9\u00ab\3\2\2\2\u00b9\u00b2\3\2\2\2\u00ba\3\3\2\2\2"+
		"\u00bb\u00bc\t\2\2\2\u00bc\5\3\2\2\2\u00bd\u00bf\5\4\3\2\u00be\u00bd\3"+
		"\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1"+
		"\u00c3\3\2\2\2\u00c2\u00be\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\7\3\2\2\2"+
		"\u00c4\u00c7\5\2\2\2\u00c5\u00c7\5\4\3\2\u00c6\u00c4\3\2\2\2\u00c6\u00c5"+
		"\3\2\2\2\u00c7\t\3\2\2\2\u00c8\u00c9\7\21\2\2\u00c9\u00ca\5@!\2\u00ca"+
		"\u00cb\7\22\2\2\u00cb\u00ce\3\2\2\2\u00cc\u00ce\7O\2\2\u00cd\u00c8\3\2"+
		"\2\2\u00cd\u00cc\3\2\2\2\u00ce\13\3\2\2\2\u00cf\u00d3\7\66\2\2\u00d0\u00d2"+
		"\7\66\2\2\u00d1\u00d0\3\2\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d1\3\2\2\2"+
		"\u00d3\u00d4\3\2\2\2\u00d4\u00d6\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d7"+
		"\5\n\6\2\u00d7\r\3\2\2\2\u00d8\u00d9\5\6\4\2\u00d9\u00da\5\2\2\2\u00da"+
		"\u00e0\7O\2\2\u00db\u00dd\7\23\2\2\u00dc\u00de\5\30\r\2\u00dd\u00dc\3"+
		"\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e1\5@!\2\u00e0"+
		"\u00db\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e3\7\24"+
		"\2\2\u00e3\17\3\2\2\2\u00e4\u00ea\7O\2\2\u00e5\u00e7\7\23\2\2\u00e6\u00e8"+
		"\5\30\r\2\u00e7\u00e6\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\3\2\2\2"+
		"\u00e9\u00eb\5@!\2\u00ea\u00e5\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\21\3"+
		"\2\2\2\u00ec\u00ed\5\6\4\2\u00ed\u00ee\5\2\2\2\u00ee\u00f3\5\20\t\2\u00ef"+
		"\u00f0\7\25\2\2\u00f0\u00f2\5\20\t\2\u00f1\u00ef\3\2\2\2\u00f2\u00f5\3"+
		"\2\2\2\u00f3\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00f6\3\2\2\2\u00f5"+
		"\u00f3\3\2\2\2\u00f6\u00f7\7\24\2\2\u00f7\23\3\2\2\2\u00f8\u00f9\t\3\2"+
		"\2\u00f9\25\3\2\2\2\u00fa\u00fb\t\4\2\2\u00fb\27\3\2\2\2\u00fc\u00fd\7"+
		"\21\2\2\u00fd\u00fe\5\2\2\2\u00fe\u00ff\7\22\2\2\u00ff\31\3\2\2\2\u0100"+
		"\u0101\7O\2\2\u0101\u0103\5\24\13\2\u0102\u0104\5\30\r\2\u0103\u0102\3"+
		"\2\2\2\u0103\u0104\3\2\2\2\u0104\u0105\3\2\2\2\u0105\u0106\5@!\2\u0106"+
		"\33\3\2\2\2\u0107\u0108\7O\2\2\u0108\u0109\5\26\f\2\u0109\35\3\2\2\2\u010a"+
		"\u010b\5\26\f\2\u010b\u010c\7O\2\2\u010c\37\3\2\2\2\u010d\u0111\5\32\16"+
		"\2\u010e\u0111\5\36\20\2\u010f\u0111\5\34\17\2\u0110\u010d\3\2\2\2\u0110"+
		"\u010e\3\2\2\2\u0110\u010f\3\2\2\2\u0111!\3\2\2\2\u0112\u0117\5 \21\2"+
		"\u0113\u0114\7\25\2\2\u0114\u0116\5 \21\2\u0115\u0113\3\2\2\2\u0116\u0119"+
		"\3\2\2\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118#\3\2\2\2\u0119"+
		"\u0117\3\2\2\2\u011a\u011b\5\f\7\2\u011b\u011c\5\24\13\2\u011c\u011d\5"+
		"@!\2\u011d%\3\2\2\2\u011e\u011f\7 \2\2\u011f\u0124\5@!\2\u0120\u0121\7"+
		"\25\2\2\u0121\u0123\5@!\2\u0122\u0120\3\2\2\2\u0123\u0126\3\2\2\2\u0124"+
		"\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0127\3\2\2\2\u0126\u0124\3\2"+
		"\2\2\u0127\u0128\7!\2\2\u0128\u012b\3\2\2\2\u0129\u012b\7K\2\2\u012a\u011e"+
		"\3\2\2\2\u012a\u0129\3\2\2\2\u012b\'\3\2\2\2\u012c\u012d\5\6\4\2\u012d"+
		"\u012e\5\2\2\2\u012e\u0134\7O\2\2\u012f\u0130\7\"\2\2\u0130\u0131\5@!"+
		"\2\u0131\u0132\7#\2\2\u0132\u0135\3\2\2\2\u0133\u0135\7$\2\2\u0134\u012f"+
		"\3\2\2\2\u0134\u0133\3\2\2\2\u0135\u0136\3\2\2\2\u0136\u0137\7\23\2\2"+
		"\u0137\u0138\5@!\2\u0138\u0139\7\24\2\2\u0139)\3\2\2\2\u013a\u013b\5\6"+
		"\4\2\u013b\u013c\5\2\2\2\u013c\u013d\7O\2\2\u013d\u013e\7\"\2\2\u013e"+
		"\u013f\5@!\2\u013f\u0140\7#\2\2\u0140\u0141\7\24\2\2\u0141+\3\2\2\2\u0142"+
		"\u0143\7O\2\2\u0143\u0144\7\"\2\2\u0144\u0145\5@!\2\u0145\u0146\7#\2\2"+
		"\u0146-\3\2\2\2\u0147\u0148\5,\27\2\u0148\u014a\5\24\13\2\u0149\u014b"+
		"\5\30\r\2\u014a\u0149\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014c\3\2\2\2"+
		"\u014c\u014d\5@!\2\u014d/\3\2\2\2\u014e\u014f\7%\2\2\u014f\u0150\7\21"+
		"\2\2\u0150\u0151\5@!\2\u0151\u0152\7\22\2\2\u0152\61\3\2\2\2\u0153\u0156"+
		"\5@!\2\u0154\u0156\5\2\2\2\u0155\u0153\3\2\2\2\u0155\u0154\3\2\2\2\u0156"+
		"\63\3\2\2\2\u0157\u0158\7&\2\2\u0158\u0159\7\21\2\2\u0159\u015a\5\62\32"+
		"\2\u015a\u015b\7\22\2\2\u015b\65\3\2\2\2\u015c\u015d\7\'\2\2\u015d\u015e"+
		"\7\21\2\2\u015e\u015f\7O\2\2\u015f\u0160\7\22\2\2\u0160\67\3\2\2\2\u0161"+
		"\u0162\7(\2\2\u0162\u0163\7\21\2\2\u0163\u0164\7\22\2\2\u0164\u0165\7"+
		"\24\2\2\u01659\3\2\2\2\u0166\u0167\7)\2\2\u0167\u0168\7\21\2\2\u0168\u0169"+
		"\7\22\2\2\u0169\u016a\7\24\2\2\u016a;\3\2\2\2\u016b\u016c\7*\2\2\u016c"+
		"\u016d\7\21\2\2\u016d\u0172\5@!\2\u016e\u016f\7\25\2\2\u016f\u0171\5@"+
		"!\2\u0170\u016e\3\2\2\2\u0171\u0174\3\2\2\2\u0172\u0170\3\2\2\2\u0172"+
		"\u0173\3\2\2\2\u0173\u0175\3\2\2\2\u0174\u0172\3\2\2\2\u0175\u0176\7\22"+
		"\2\2\u0176\u0177\7\24\2\2\u0177=\3\2\2\2\u0178\u017d\7O\2\2\u0179\u017a"+
		"\7\"\2\2\u017a\u017b\5@!\2\u017b\u017c\7#\2\2\u017c\u017e\3\2\2\2\u017d"+
		"\u0179\3\2\2\2\u017d\u017e\3\2\2\2\u017e?\3\2\2\2\u017f\u0180\b!\1\2\u0180"+
		"\u019b\7H\2\2\u0181\u019b\7I\2\2\u0182\u019b\7J\2\2\u0183\u019b\7K\2\2"+
		"\u0184\u019b\7O\2\2\u0185\u019b\5h\65\2\u0186\u0187\7\21\2\2\u0187\u0188"+
		"\5@!\2\u0188\u0189\7\22\2\2\u0189\u019b\3\2\2\2\u018a\u019b\5,\27\2\u018b"+
		"\u018c\7F\2\2\u018c\u019b\5> \2\u018d\u019b\5\64\33\2\u018e\u018f\t\5"+
		"\2\2\u018f\u019b\5@!\23\u0190\u019b\5\f\7\2\u0191\u019b\5\"\22\2\u0192"+
		"\u019b\5.\30\2\u0193\u019b\5$\23\2\u0194\u019b\5\60\31\2\u0195\u019b\5"+
		"\66\34\2\u0196\u019b\5&\24\2\u0197\u019b\7L\2\2\u0198\u019b\7M\2\2\u0199"+
		"\u019b\7N\2\2\u019a\u017f\3\2\2\2\u019a\u0181\3\2\2\2\u019a\u0182\3\2"+
		"\2\2\u019a\u0183\3\2\2\2\u019a\u0184\3\2\2\2\u019a\u0185\3\2\2\2\u019a"+
		"\u0186\3\2\2\2\u019a\u018a\3\2\2\2\u019a\u018b\3\2\2\2\u019a\u018d\3\2"+
		"\2\2\u019a\u018e\3\2\2\2\u019a\u0190\3\2\2\2\u019a\u0191\3\2\2\2\u019a"+
		"\u0192\3\2\2\2\u019a\u0193\3\2\2\2\u019a\u0194\3\2\2\2\u019a\u0195\3\2"+
		"\2\2\u019a\u0196\3\2\2\2\u019a\u0197\3\2\2\2\u019a\u0198\3\2\2\2\u019a"+
		"\u0199\3\2\2\2\u019b\u01b0\3\2\2\2\u019c\u019d\f\22\2\2\u019d\u019e\t"+
		"\6\2\2\u019e\u01af\5@!\23\u019f\u01a0\f\21\2\2\u01a0\u01a1\t\7\2\2\u01a1"+
		"\u01af\5@!\22\u01a2\u01a3\f\20\2\2\u01a3\u01a4\t\b\2\2\u01a4\u01af\5@"+
		"!\21\u01a5\u01a6\f\17\2\2\u01a6\u01a7\t\t\2\2\u01a7\u01af\5@!\20\u01a8"+
		"\u01a9\f\16\2\2\u01a9\u01aa\7;\2\2\u01aa\u01af\5@!\17\u01ab\u01ac\f\r"+
		"\2\2\u01ac\u01ad\7<\2\2\u01ad\u01af\5@!\16\u01ae\u019c\3\2\2\2\u01ae\u019f"+
		"\3\2\2\2\u01ae\u01a2\3\2\2\2\u01ae\u01a5\3\2\2\2\u01ae\u01a8\3\2\2\2\u01ae"+
		"\u01ab\3\2\2\2\u01af\u01b2\3\2\2\2\u01b0\u01ae\3\2\2\2\u01b0\u01b1\3\2"+
		"\2\2\u01b1A\3\2\2\2\u01b2\u01b0\3\2\2\2\u01b3\u01b4\5@!\2\u01b4\u01b5"+
		"\7\24\2\2\u01b5C\3\2\2\2\u01b6\u01b7\7+\2\2\u01b7\u01b8\7\21\2\2\u01b8"+
		"\u01b9\5@!\2\u01b9\u01ba\7\22\2\2\u01ba\u01bd\5L\'\2\u01bb\u01bc\7,\2"+
		"\2\u01bc\u01be\5L\'\2\u01bd\u01bb\3\2\2\2\u01bd\u01be\3\2\2\2\u01beE\3"+
		"\2\2\2\u01bf\u01c0\7-\2\2\u01c0\u01c1\7\21\2\2\u01c1\u01c2\5@!\2\u01c2"+
		"\u01c3\7\22\2\2\u01c3\u01c4\5R*\2\u01c4G\3\2\2\2\u01c5\u01c6\7.\2\2\u01c6"+
		"\u01c7\5@!\2\u01c7\u01c8\7/\2\2\u01c8\u01ca\5^\60\2\u01c9\u01cb\5J&\2"+
		"\u01ca\u01c9\3\2\2\2\u01ca\u01cb\3\2\2\2\u01cb\u01d3\3\2\2\2\u01cc\u01cd"+
		"\7\60\2\2\u01cd\u01ce\7/\2\2\u01ce\u01d0\5^\60\2\u01cf\u01d1\5J&\2\u01d0"+
		"\u01cf\3\2\2\2\u01d0\u01d1\3\2\2\2\u01d1\u01d3\3\2\2\2\u01d2\u01c5\3\2"+
		"\2\2\u01d2\u01cc\3\2\2\2\u01d3I\3\2\2\2\u01d4\u01d5\7\61\2\2\u01d5\u01d6"+
		"\7\24\2\2\u01d6K\3\2\2\2\u01d7\u01d8\7 \2\2\u01d8\u01d9\5N(\2\u01d9\u01da"+
		"\7!\2\2\u01daM\3\2\2\2\u01db\u01dd\5^\60\2\u01dc\u01db\3\2\2\2\u01dd\u01e0"+
		"\3\2\2\2\u01de\u01dc\3\2\2\2\u01de\u01df\3\2\2\2\u01dfO\3\2\2\2\u01e0"+
		"\u01de\3\2\2\2\u01e1\u01e3\5H%\2\u01e2\u01e1\3\2\2\2\u01e3\u01e6\3\2\2"+
		"\2\u01e4\u01e2\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5Q\3\2\2\2\u01e6\u01e4"+
		"\3\2\2\2\u01e7\u01e8\7 \2\2\u01e8\u01e9\5P)\2\u01e9\u01ea\7!\2\2\u01ea"+
		"S\3\2\2\2\u01eb\u01ec\7\62\2\2\u01ec\u01ed\5@!\2\u01ed\u01ee\7\24\2\2"+
		"\u01eeU\3\2\2\2\u01ef\u01f2\5\22\n\2\u01f0\u01f2\5B\"\2\u01f1\u01ef\3"+
		"\2\2\2\u01f1\u01f0\3\2\2\2\u01f2W\3\2\2\2\u01f3\u01f4\7\63\2\2\u01f4\u01f5"+
		"\7\21\2\2\u01f5\u01f6\5V,\2\u01f6\u01f7\5@!\2\u01f7\u01f8\7\24\2\2\u01f8"+
		"\u01f9\5@!\2\u01f9\u01fa\7\22\2\2\u01fa\u01fb\5L\'\2\u01fbY\3\2\2\2\u01fc"+
		"\u01fd\7\64\2\2\u01fd\u01fe\5L\'\2\u01fe\u01ff\7\65\2\2\u01ff\u0200\7"+
		"\21\2\2\u0200\u0201\5@!\2\u0201\u0202\7\22\2\2\u0202[\3\2\2\2\u0203\u0204"+
		"\7\65\2\2\u0204\u0205\7\21\2\2\u0205\u0206\5@!\2\u0206\u0207\7\22\2\2"+
		"\u0207\u0208\5L\'\2\u0208]\3\2\2\2\u0209\u021d\5B\"\2\u020a\u021d\5(\25"+
		"\2\u020b\u021d\5\16\b\2\u020c\u021d\5\22\n\2\u020d\u021d\5D#\2\u020e\u021d"+
		"\5L\'\2\u020f\u021d\5F$\2\u0210\u021d\5H%\2\u0211\u021d\5R*\2\u0212\u021d"+
		"\5d\63\2\u0213\u021d\5T+\2\u0214\u021d\5J&\2\u0215\u021d\5*\26\2\u0216"+
		"\u021d\5X-\2\u0217\u021d\5Z.\2\u0218\u021d\5\\/\2\u0219\u021d\58\35\2"+
		"\u021a\u021d\5:\36\2\u021b\u021d\5<\37\2\u021c\u0209\3\2\2\2\u021c\u020a"+
		"\3\2\2\2\u021c\u020b\3\2\2\2\u021c\u020c\3\2\2\2\u021c\u020d\3\2\2\2\u021c"+
		"\u020e\3\2\2\2\u021c\u020f\3\2\2\2\u021c\u0210\3\2\2\2\u021c\u0211\3\2"+
		"\2\2\u021c\u0212\3\2\2\2\u021c\u0213\3\2\2\2\u021c\u0214\3\2\2\2\u021c"+
		"\u0215\3\2\2\2\u021c\u0216\3\2\2\2\u021c\u0217\3\2\2\2\u021c\u0218\3\2"+
		"\2\2\u021c\u0219\3\2\2\2\u021c\u021a\3\2\2\2\u021c\u021b\3\2\2\2\u021d"+
		"_\3\2\2\2\u021e\u021f\5\2\2\2\u021f\u0221\7O\2\2\u0220\u0222\7$\2\2\u0221"+
		"\u0220\3\2\2\2\u0221\u0222\3\2\2\2\u0222a\3\2\2\2\u0223\u0228\5`\61\2"+
		"\u0224\u0225\7\25\2\2\u0225\u0227\5`\61\2\u0226\u0224\3\2\2\2\u0227\u022a"+
		"\3\2\2\2\u0228\u0226\3\2\2\2\u0228\u0229\3\2\2\2\u0229\u022c\3\2\2\2\u022a"+
		"\u0228\3\2\2\2\u022b\u0223\3\2\2\2\u022b\u022c\3\2\2\2\u022cc\3\2\2\2"+
		"\u022d\u022e\5\2\2\2\u022e\u022f\7O\2\2\u022f\u0230\7\21\2\2\u0230\u0231"+
		"\5b\62\2\u0231\u0232\7\22\2\2\u0232\u0233\5L\'\2\u0233e\3\2\2\2\u0234"+
		"\u0239\5@!\2\u0235\u0236\7\25\2\2\u0236\u0238\5@!\2\u0237\u0235\3\2\2"+
		"\2\u0238\u023b\3\2\2\2\u0239\u0237\3\2\2\2\u0239\u023a\3\2\2\2\u023a\u023d"+
		"\3\2\2\2\u023b\u0239\3\2\2\2\u023c\u0234\3\2\2\2\u023c\u023d\3\2\2\2\u023d"+
		"g\3\2\2\2\u023e\u023f\7O\2\2\u023f\u0240\7\21\2\2\u0240\u0241\5f\64\2"+
		"\u0241\u0242\7\22\2\2\u0242i\3\2\2\2\u0243\u0245\5d\63\2\u0244\u0243\3"+
		"\2\2\2\u0245\u0246\3\2\2\2\u0246\u0244\3\2\2\2\u0246\u0247\3\2\2\2\u0247"+
		"k\3\2\2\2\63pw~\u0085\u008c\u0093\u009a\u00a1\u00a8\u00af\u00b6\u00b9"+
		"\u00c0\u00c2\u00c6\u00cd\u00d3\u00dd\u00e0\u00e7\u00ea\u00f3\u0103\u0110"+
		"\u0117\u0124\u012a\u0134\u014a\u0155\u0172\u017d\u019a\u01ae\u01b0\u01bd"+
		"\u01ca\u01d0\u01d2\u01de\u01e4\u01f1\u021c\u0221\u0228\u022b\u0239\u023c"+
		"\u0246";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}