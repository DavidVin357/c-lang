// Generated from /home/avin357/CS4215/C-Lang/src/lang/C.g4 by ANTLR 4.9.2
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
		T__31=32, T__32=33, T__33=34, MUL=35, DIV=36, ADD=37, SUB=38, MOD=39, 
		LOGICAL_AND=40, LOGICAL_OR=41, EQUALS=42, NOT_EQUALS=43, LESS=44, LESS_EQUAL=45, 
		GREATER=46, GREATER_EQUAL=47, POSTFIX_ADD=48, VAR_ADDRESS=49, WHITESPACE=50, 
		DECIMAL=51, FRACTION=52, CHAR=53, Identifier=54, Pointer=55;
	public static final int
		RULE_typeSpecifier = 0, RULE_typeQualifier = 1, RULE_typeQualifiers = 2, 
		RULE_declarationSpecifier = 3, RULE_declarator = 4, RULE_initialization = 5, 
		RULE_declaration = 6, RULE_assignmentOperator = 7, RULE_assignment = 8, 
		RULE_malloc = 9, RULE_sizeof = 10, RULE_expression = 11, RULE_expressionStatement = 12, 
		RULE_returnStatement = 13, RULE_statement = 14, RULE_blockItemList = 15, 
		RULE_compoundStatement = 16, RULE_parameterDeclaration = 17, RULE_parameterList = 18, 
		RULE_functionDeclaration = 19, RULE_argumentExpressionList = 20, RULE_functionApplication = 21, 
		RULE_program = 22;
	private static String[] makeRuleNames() {
		return new String[] {
			"typeSpecifier", "typeQualifier", "typeQualifiers", "declarationSpecifier", 
			"declarator", "initialization", "declaration", "assignmentOperator", 
			"assignment", "malloc", "sizeof", "expression", "expressionStatement", 
			"returnStatement", "statement", "blockItemList", "compoundStatement", 
			"parameterDeclaration", "parameterList", "functionDeclaration", "argumentExpressionList", 
			"functionApplication", "program"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'void'", "'char'", "'unsigned char'", "'short'", "'unsigned short'", 
			"'int'", "'unsigned int'", "'long'", "'unsigned long'", "'float'", "'double'", 
			"'const'", "'restrict'", "'volatile'", "'='", "';'", "'*='", "'/='", 
			"'%='", "'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'malloc'", 
			"'('", "')'", "'sizeof'", "'return'", "'{'", "'}'", "','", "'*'", "'/'", 
			"'+'", "'-'", "'%'", "'&&'", "'||'", "'=='", "'!='", "'<'", "'<='", "'>'", 
			"'>='", "'++'", "'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "MUL", 
			"DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR", "EQUALS", "NOT_EQUALS", 
			"LESS", "LESS_EQUAL", "GREATER", "GREATER_EQUAL", "POSTFIX_ADD", "VAR_ADDRESS", 
			"WHITESPACE", "DECIMAL", "FRACTION", "CHAR", "Identifier", "Pointer"
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
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0)) ) {
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
			setState(48);
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
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__12) | (1L << T__13))) != 0)) {
				{
				setState(51); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(50);
					typeQualifier();
					}
					}
					setState(53); 
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
			setState(59);
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
				setState(57);
				typeSpecifier();
				}
				break;
			case T__11:
			case T__12:
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(58);
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

	public static class DeclaratorContext extends ParserRuleContext {
		public TerminalNode Pointer() { return getToken(CParser.Pointer, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public DeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declarator; }
	}

	public final DeclaratorContext declarator() throws RecognitionException {
		DeclaratorContext _localctx = new DeclaratorContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_declarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_la = _input.LA(1);
			if ( !(_la==Identifier || _la==Pointer) ) {
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

	public static class InitializationContext extends ParserRuleContext {
		public TypeQualifiersContext qualifiers;
		public ExpressionContext value;
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TypeQualifiersContext typeQualifiers() {
			return getRuleContext(TypeQualifiersContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public InitializationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_initialization; }
	}

	public final InitializationContext initialization() throws RecognitionException {
		InitializationContext _localctx = new InitializationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_initialization);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			((InitializationContext)_localctx).qualifiers = typeQualifiers();
			setState(64);
			typeSpecifier();
			setState(65);
			declarator();
			setState(66);
			match(T__14);
			setState(67);
			((InitializationContext)_localctx).value = expression(0);
			setState(68);
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

	public static class DeclarationContext extends ParserRuleContext {
		public TypeQualifiersContext qualifiers;
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public TypeQualifiersContext typeQualifiers() {
			return getRuleContext(TypeQualifiersContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			((DeclarationContext)_localctx).qualifiers = typeQualifiers();
			setState(71);
			typeSpecifier();
			setState(72);
			declarator();
			setState(73);
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

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__16) | (1L << T__17) | (1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21) | (1L << T__22) | (1L << T__23) | (1L << T__24) | (1L << T__25))) != 0)) ) {
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

	public static class AssignmentContext extends ParserRuleContext {
		public AssignmentOperatorContext operator;
		public ExpressionContext value;
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(Identifier);
			setState(78);
			((AssignmentContext)_localctx).operator = assignmentOperator();
			setState(79);
			((AssignmentContext)_localctx).value = expression(0);
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
		enterRule(_localctx, 18, RULE_malloc);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(T__26);
			setState(82);
			match(T__27);
			setState(83);
			((MallocContext)_localctx).size = expression(0);
			setState(84);
			match(T__28);
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
		public ExpressionContext expr;
		public TypeSpecifierContext type;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public SizeofContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sizeof; }
	}

	public final SizeofContext sizeof() throws RecognitionException {
		SizeofContext _localctx = new SizeofContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_sizeof);
		try {
			setState(92);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__29:
				enterOuterAlt(_localctx, 1);
				{
				setState(86);
				match(T__29);
				setState(87);
				match(T__27);
				setState(88);
				((SizeofContext)_localctx).expr = expression(0);
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
				setState(89);
				((SizeofContext)_localctx).type = typeSpecifier();
				setState(90);
				match(T__28);
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
	public static class MallocExpressionContext extends ExpressionContext {
		public MallocContext malloc() {
			return getRuleContext(MallocContext.class,0);
		}
		public MallocExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class SizeOfOperatorContext extends ExpressionContext {
		public SizeofContext sizeof() {
			return getRuleContext(SizeofContext.class,0);
		}
		public SizeOfOperatorContext(ExpressionContext ctx) { copyFrom(ctx); }
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
	public static class PointerContext extends ExpressionContext {
		public TerminalNode Pointer() { return getToken(CParser.Pointer, 0); }
		public PointerContext(ExpressionContext ctx) { copyFrom(ctx); }
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
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public AssignmentExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CharContext extends ExpressionContext {
		public TerminalNode CHAR() { return getToken(CParser.CHAR, 0); }
		public CharContext(ExpressionContext ctx) { copyFrom(ctx); }
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
	public static class ApplicationContext extends ExpressionContext {
		public FunctionApplicationContext functionApplication() {
			return getRuleContext(FunctionApplicationContext.class,0);
		}
		public ApplicationContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class VarAddressContext extends ExpressionContext {
		public Token operator;
		public Token right;
		public TerminalNode VAR_ADDRESS() { return getToken(CParser.VAR_ADDRESS, 0); }
		public TerminalNode Identifier() { return getToken(CParser.Identifier, 0); }
		public VarAddressContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesContext extends ExpressionContext {
		public ExpressionContext inner;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthesesContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(95);
				match(DECIMAL);
				}
				break;
			case 2:
				{
				_localctx = new FractionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(96);
				match(FRACTION);
				}
				break;
			case 3:
				{
				_localctx = new CharContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(97);
				match(CHAR);
				}
				break;
			case 4:
				{
				_localctx = new IdentifierContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(98);
				match(Identifier);
				}
				break;
			case 5:
				{
				_localctx = new PointerContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(99);
				match(Pointer);
				}
				break;
			case 6:
				{
				_localctx = new ApplicationContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(100);
				functionApplication();
				}
				break;
			case 7:
				{
				_localctx = new ParenthesesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(101);
				match(T__27);
				setState(102);
				((ParenthesesContext)_localctx).inner = expression(0);
				setState(103);
				match(T__28);
				}
				break;
			case 8:
				{
				_localctx = new VarAddressContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(105);
				((VarAddressContext)_localctx).operator = match(VAR_ADDRESS);
				setState(106);
				((VarAddressContext)_localctx).right = match(Identifier);
				}
				break;
			case 9:
				{
				_localctx = new AssignmentExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(107);
				assignment();
				}
				break;
			case 10:
				{
				_localctx = new MallocExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				malloc();
				}
				break;
			case 11:
				{
				_localctx = new SizeOfOperatorContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(109);
				sizeof();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(132);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(130);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
					case 1:
						{
						_localctx = new AdditiveContext(new ExpressionContext(_parentctx, _parentState));
						((AdditiveContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(112);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(113);
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
						setState(114);
						((AdditiveContext)_localctx).right = expression(11);
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicativeContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(115);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(116);
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
						setState(117);
						((MultiplicativeContext)_localctx).right = expression(10);
						}
						break;
					case 3:
						{
						_localctx = new RelationalContext(new ExpressionContext(_parentctx, _parentState));
						((RelationalContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(118);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(119);
						((RelationalContext)_localctx).operator = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LESS) | (1L << LESS_EQUAL) | (1L << GREATER) | (1L << GREATER_EQUAL))) != 0)) ) {
							((RelationalContext)_localctx).operator = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(120);
						((RelationalContext)_localctx).right = expression(9);
						}
						break;
					case 4:
						{
						_localctx = new EqualityContext(new ExpressionContext(_parentctx, _parentState));
						((EqualityContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(121);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(122);
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
						setState(123);
						((EqualityContext)_localctx).right = expression(8);
						}
						break;
					case 5:
						{
						_localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
						((LogicalAndContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(124);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(125);
						((LogicalAndContext)_localctx).operator = match(LOGICAL_AND);
						setState(126);
						((LogicalAndContext)_localctx).right = expression(7);
						}
						break;
					case 6:
						{
						_localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
						((LogicalOrContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(127);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(128);
						((LogicalOrContext)_localctx).operator = match(LOGICAL_OR);
						setState(129);
						((LogicalOrContext)_localctx).right = expression(6);
						}
						break;
					}
					} 
				}
				setState(134);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,6,_ctx);
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
		enterRule(_localctx, 24, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(135);
			expression(0);
			setState(136);
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
		enterRule(_localctx, 26, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(T__30);
			setState(139);
			expression(0);
			setState(140);
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

	public static class StatementContext extends ParserRuleContext {
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public InitializationContext initialization() {
			return getRuleContext(InitializationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_statement);
		try {
			setState(147);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(142);
				expressionStatement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(143);
				declaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(144);
				initialization();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(145);
				functionDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(146);
				returnStatement();
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

	public static class BlockItemListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockItemListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockItemList; }
	}

	public final BlockItemListContext blockItemList() throws RecognitionException {
		BlockItemListContext _localctx = new BlockItemListContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_blockItemList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(149);
				statement();
				}
				}
				setState(152); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__26) | (1L << T__27) | (1L << T__29) | (1L << T__30) | (1L << VAR_ADDRESS) | (1L << DECIMAL) | (1L << FRACTION) | (1L << CHAR) | (1L << Identifier) | (1L << Pointer))) != 0) );
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
		public BlockItemListContext blockItemList() {
			return getRuleContext(BlockItemListContext.class,0);
		}
		public CompoundStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compoundStatement; }
	}

	public final CompoundStatementContext compoundStatement() throws RecognitionException {
		CompoundStatementContext _localctx = new CompoundStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_compoundStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(T__31);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__26) | (1L << T__27) | (1L << T__29) | (1L << T__30) | (1L << VAR_ADDRESS) | (1L << DECIMAL) | (1L << FRACTION) | (1L << CHAR) | (1L << Identifier) | (1L << Pointer))) != 0)) {
				{
				setState(155);
				blockItemList();
				}
			}

			setState(158);
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

	public static class ParameterDeclarationContext extends ParserRuleContext {
		public TypeSpecifierContext typeSpecifier() {
			return getRuleContext(TypeSpecifierContext.class,0);
		}
		public DeclaratorContext declarator() {
			return getRuleContext(DeclaratorContext.class,0);
		}
		public ParameterDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterDeclaration; }
	}

	public final ParameterDeclarationContext parameterDeclaration() throws RecognitionException {
		ParameterDeclarationContext _localctx = new ParameterDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_parameterDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			typeSpecifier();
			setState(161);
			declarator();
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
		enterRule(_localctx, 36, RULE_parameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0)) {
				{
				setState(163);
				parameterDeclaration();
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__33) {
					{
					{
					setState(164);
					match(T__33);
					setState(165);
					parameterDeclaration();
					}
					}
					setState(170);
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
		enterRule(_localctx, 38, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			typeSpecifier();
			setState(174);
			match(Identifier);
			setState(175);
			match(T__27);
			setState(176);
			parameterList();
			setState(177);
			match(T__28);
			setState(178);
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
		enterRule(_localctx, 40, RULE_argumentExpressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__4) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10) | (1L << T__26) | (1L << T__27) | (1L << T__29) | (1L << VAR_ADDRESS) | (1L << DECIMAL) | (1L << FRACTION) | (1L << CHAR) | (1L << Identifier) | (1L << Pointer))) != 0)) {
				{
				setState(180);
				expression(0);
				setState(185);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__33) {
					{
					{
					setState(181);
					match(T__33);
					setState(182);
					expression(0);
					}
					}
					setState(187);
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
		enterRule(_localctx, 42, RULE_functionApplication);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(Identifier);
			setState(191);
			match(T__27);
			setState(192);
			argumentExpressionList();
			setState(193);
			match(T__28);
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
		enterRule(_localctx, 44, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(195);
				functionDeclaration();
				}
				}
				setState(198); 
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
		case 11:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 9);
		case 2:
			return precpred(_ctx, 8);
		case 3:
			return precpred(_ctx, 7);
		case 4:
			return precpred(_ctx, 6);
		case 5:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\39\u00cb\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2\3\2\3"+
		"\3\3\3\3\4\6\4\66\n\4\r\4\16\4\67\5\4:\n\4\3\5\3\5\5\5>\n\5\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\n\3\n"+
		"\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\5\f_\n\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\5\rq\n\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u0085"+
		"\n\r\f\r\16\r\u0088\13\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\20\5\20\u0096\n\20\3\21\6\21\u0099\n\21\r\21\16\21\u009a"+
		"\3\22\3\22\5\22\u009f\n\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\7\24"+
		"\u00a9\n\24\f\24\16\24\u00ac\13\24\5\24\u00ae\n\24\3\25\3\25\3\25\3\25"+
		"\3\25\3\25\3\25\3\26\3\26\3\26\7\26\u00ba\n\26\f\26\16\26\u00bd\13\26"+
		"\5\26\u00bf\n\26\3\27\3\27\3\27\3\27\3\27\3\30\6\30\u00c7\n\30\r\30\16"+
		"\30\u00c8\3\30\2\3\30\31\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&("+
		"*,.\2\n\3\2\3\r\3\2\16\20\3\289\4\2\21\21\23\34\3\2\'(\4\2%&))\3\2.\61"+
		"\3\2,-\2\u00d2\2\60\3\2\2\2\4\62\3\2\2\2\69\3\2\2\2\b=\3\2\2\2\n?\3\2"+
		"\2\2\fA\3\2\2\2\16H\3\2\2\2\20M\3\2\2\2\22O\3\2\2\2\24S\3\2\2\2\26^\3"+
		"\2\2\2\30p\3\2\2\2\32\u0089\3\2\2\2\34\u008c\3\2\2\2\36\u0095\3\2\2\2"+
		" \u0098\3\2\2\2\"\u009c\3\2\2\2$\u00a2\3\2\2\2&\u00ad\3\2\2\2(\u00af\3"+
		"\2\2\2*\u00be\3\2\2\2,\u00c0\3\2\2\2.\u00c6\3\2\2\2\60\61\t\2\2\2\61\3"+
		"\3\2\2\2\62\63\t\3\2\2\63\5\3\2\2\2\64\66\5\4\3\2\65\64\3\2\2\2\66\67"+
		"\3\2\2\2\67\65\3\2\2\2\678\3\2\2\28:\3\2\2\29\65\3\2\2\29:\3\2\2\2:\7"+
		"\3\2\2\2;>\5\2\2\2<>\5\4\3\2=;\3\2\2\2=<\3\2\2\2>\t\3\2\2\2?@\t\4\2\2"+
		"@\13\3\2\2\2AB\5\6\4\2BC\5\2\2\2CD\5\n\6\2DE\7\21\2\2EF\5\30\r\2FG\7\22"+
		"\2\2G\r\3\2\2\2HI\5\6\4\2IJ\5\2\2\2JK\5\n\6\2KL\7\22\2\2L\17\3\2\2\2M"+
		"N\t\5\2\2N\21\3\2\2\2OP\78\2\2PQ\5\20\t\2QR\5\30\r\2R\23\3\2\2\2ST\7\35"+
		"\2\2TU\7\36\2\2UV\5\30\r\2VW\7\37\2\2W\25\3\2\2\2XY\7 \2\2YZ\7\36\2\2"+
		"Z_\5\30\r\2[\\\5\2\2\2\\]\7\37\2\2]_\3\2\2\2^X\3\2\2\2^[\3\2\2\2_\27\3"+
		"\2\2\2`a\b\r\1\2aq\7\65\2\2bq\7\66\2\2cq\7\67\2\2dq\78\2\2eq\79\2\2fq"+
		"\5,\27\2gh\7\36\2\2hi\5\30\r\2ij\7\37\2\2jq\3\2\2\2kl\7\63\2\2lq\78\2"+
		"\2mq\5\22\n\2nq\5\24\13\2oq\5\26\f\2p`\3\2\2\2pb\3\2\2\2pc\3\2\2\2pd\3"+
		"\2\2\2pe\3\2\2\2pf\3\2\2\2pg\3\2\2\2pk\3\2\2\2pm\3\2\2\2pn\3\2\2\2po\3"+
		"\2\2\2q\u0086\3\2\2\2rs\f\f\2\2st\t\6\2\2t\u0085\5\30\r\ruv\f\13\2\2v"+
		"w\t\7\2\2w\u0085\5\30\r\fxy\f\n\2\2yz\t\b\2\2z\u0085\5\30\r\13{|\f\t\2"+
		"\2|}\t\t\2\2}\u0085\5\30\r\n~\177\f\b\2\2\177\u0080\7*\2\2\u0080\u0085"+
		"\5\30\r\t\u0081\u0082\f\7\2\2\u0082\u0083\7+\2\2\u0083\u0085\5\30\r\b"+
		"\u0084r\3\2\2\2\u0084u\3\2\2\2\u0084x\3\2\2\2\u0084{\3\2\2\2\u0084~\3"+
		"\2\2\2\u0084\u0081\3\2\2\2\u0085\u0088\3\2\2\2\u0086\u0084\3\2\2\2\u0086"+
		"\u0087\3\2\2\2\u0087\31\3\2\2\2\u0088\u0086\3\2\2\2\u0089\u008a\5\30\r"+
		"\2\u008a\u008b\7\22\2\2\u008b\33\3\2\2\2\u008c\u008d\7!\2\2\u008d\u008e"+
		"\5\30\r\2\u008e\u008f\7\22\2\2\u008f\35\3\2\2\2\u0090\u0096\5\32\16\2"+
		"\u0091\u0096\5\16\b\2\u0092\u0096\5\f\7\2\u0093\u0096\5(\25\2\u0094\u0096"+
		"\5\34\17\2\u0095\u0090\3\2\2\2\u0095\u0091\3\2\2\2\u0095\u0092\3\2\2\2"+
		"\u0095\u0093\3\2\2\2\u0095\u0094\3\2\2\2\u0096\37\3\2\2\2\u0097\u0099"+
		"\5\36\20\2\u0098\u0097\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u0098\3\2\2\2"+
		"\u009a\u009b\3\2\2\2\u009b!\3\2\2\2\u009c\u009e\7\"\2\2\u009d\u009f\5"+
		" \21\2\u009e\u009d\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0"+
		"\u00a1\7#\2\2\u00a1#\3\2\2\2\u00a2\u00a3\5\2\2\2\u00a3\u00a4\5\n\6\2\u00a4"+
		"%\3\2\2\2\u00a5\u00aa\5$\23\2\u00a6\u00a7\7$\2\2\u00a7\u00a9\5$\23\2\u00a8"+
		"\u00a6\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa\u00ab\3\2"+
		"\2\2\u00ab\u00ae\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad\u00a5\3\2\2\2\u00ad"+
		"\u00ae\3\2\2\2\u00ae\'\3\2\2\2\u00af\u00b0\5\2\2\2\u00b0\u00b1\78\2\2"+
		"\u00b1\u00b2\7\36\2\2\u00b2\u00b3\5&\24\2\u00b3\u00b4\7\37\2\2\u00b4\u00b5"+
		"\5\"\22\2\u00b5)\3\2\2\2\u00b6\u00bb\5\30\r\2\u00b7\u00b8\7$\2\2\u00b8"+
		"\u00ba\5\30\r\2\u00b9\u00b7\3\2\2\2\u00ba\u00bd\3\2\2\2\u00bb\u00b9\3"+
		"\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00bf\3\2\2\2\u00bd\u00bb\3\2\2\2\u00be"+
		"\u00b6\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf+\3\2\2\2\u00c0\u00c1\78\2\2\u00c1"+
		"\u00c2\7\36\2\2\u00c2\u00c3\5*\26\2\u00c3\u00c4\7\37\2\2\u00c4-\3\2\2"+
		"\2\u00c5\u00c7\5(\25\2\u00c6\u00c5\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00c6"+
		"\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9/\3\2\2\2\21\679=^p\u0084\u0086\u0095"+
		"\u009a\u009e\u00aa\u00ad\u00bb\u00be\u00c8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}