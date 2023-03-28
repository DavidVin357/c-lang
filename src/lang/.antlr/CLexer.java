// Generated from /home/avin357/CS4215/C-Lang/src/lang/C.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, MUL=33, DIV=34, ADD=35, SUB=36, MOD=37, LOGICAL_AND=38, LOGICAL_OR=39, 
		EQUALS=40, NOT_EQUALS=41, LESS=42, LESS_EQUAL=43, GREATER=44, GREATER_EQUAL=45, 
		POSTFIX_ADD=46, VAR_ADDRESS=47, WHITESPACE=48, DECIMAL=49, FRACTION=50, 
		CHAR=51, Identifier=52, Pointer=53;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
			"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "MUL", 
			"DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR", "EQUALS", "NOT_EQUALS", 
			"LESS", "LESS_EQUAL", "GREATER", "GREATER_EQUAL", "POSTFIX_ADD", "VAR_ADDRESS", 
			"WHITESPACE", "DECIMAL", "FRACTION", "CHAR", "Nondigit", "Digit", "Fraction", 
			"Identifier", "Pointer"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'void'", "'char'", "'unsigned char'", "'short'", "'unsigned short'", 
			"'int'", "'unsigned int'", "'long'", "'unsigned long'", "'float'", "'double'", 
			"'const'", "'restrict'", "'volatile'", "'='", "';'", "'*='", "'/='", 
			"'%='", "'+='", "'-='", "'<<='", "'>>='", "'&='", "'^='", "'|='", "'('", 
			"')'", "'return'", "'{'", "'}'", "','", "'*'", "'/'", "'+'", "'-'", "'%'", 
			"'&&'", "'||'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'++'", 
			"'&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "MUL", "DIV", "ADD", 
			"SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR", "EQUALS", "NOT_EQUALS", "LESS", 
			"LESS_EQUAL", "GREATER", "GREATER_EQUAL", "POSTFIX_ADD", "VAR_ADDRESS", 
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


	public CLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "C.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\67\u0177\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\3\2\3\2\3\2\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\21"+
		"\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\26"+
		"\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\32"+
		"\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3"+
		"\'\3\'\3(\3(\3(\3)\3)\3)\3*\3*\3*\3+\3+\3,\3,\3,\3-\3-\3.\3.\3.\3/\3/"+
		"\3/\3\60\3\60\3\61\6\61\u0145\n\61\r\61\16\61\u0146\3\61\3\61\3\62\6\62"+
		"\u014c\n\62\r\62\16\62\u014d\3\63\3\63\3\64\3\64\3\64\3\64\3\65\3\65\3"+
		"\66\6\66\u0159\n\66\r\66\16\66\u015a\3\67\5\67\u015e\n\67\3\67\3\67\3"+
		"\67\3\67\3\67\5\67\u0165\n\67\38\38\38\78\u016a\n8\f8\168\u016d\138\3"+
		"9\39\39\39\79\u0173\n9\f9\169\u0176\139\2\2:\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26"+
		"+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S"+
		"+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\2k\2m\2o\66q\67\3\2\5\5\2\13\f\17\17"+
		"\"\"\3\2\62;\5\2C\\aac|\2\u017c\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2"+
		"\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2"+
		"\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2"+
		"\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O"+
		"\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2"+
		"\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2"+
		"\2o\3\2\2\2\2q\3\2\2\2\3s\3\2\2\2\5x\3\2\2\2\7}\3\2\2\2\t\u008b\3\2\2"+
		"\2\13\u0091\3\2\2\2\r\u00a0\3\2\2\2\17\u00a4\3\2\2\2\21\u00b1\3\2\2\2"+
		"\23\u00b6\3\2\2\2\25\u00c4\3\2\2\2\27\u00ca\3\2\2\2\31\u00d1\3\2\2\2\33"+
		"\u00d7\3\2\2\2\35\u00e0\3\2\2\2\37\u00e9\3\2\2\2!\u00eb\3\2\2\2#\u00ed"+
		"\3\2\2\2%\u00f0\3\2\2\2\'\u00f3\3\2\2\2)\u00f6\3\2\2\2+\u00f9\3\2\2\2"+
		"-\u00fc\3\2\2\2/\u0100\3\2\2\2\61\u0104\3\2\2\2\63\u0107\3\2\2\2\65\u010a"+
		"\3\2\2\2\67\u010d\3\2\2\29\u010f\3\2\2\2;\u0111\3\2\2\2=\u0118\3\2\2\2"+
		"?\u011a\3\2\2\2A\u011c\3\2\2\2C\u011e\3\2\2\2E\u0120\3\2\2\2G\u0122\3"+
		"\2\2\2I\u0124\3\2\2\2K\u0126\3\2\2\2M\u0128\3\2\2\2O\u012b\3\2\2\2Q\u012e"+
		"\3\2\2\2S\u0131\3\2\2\2U\u0134\3\2\2\2W\u0136\3\2\2\2Y\u0139\3\2\2\2["+
		"\u013b\3\2\2\2]\u013e\3\2\2\2_\u0141\3\2\2\2a\u0144\3\2\2\2c\u014b\3\2"+
		"\2\2e\u014f\3\2\2\2g\u0151\3\2\2\2i\u0155\3\2\2\2k\u0158\3\2\2\2m\u0164"+
		"\3\2\2\2o\u0166\3\2\2\2q\u016e\3\2\2\2st\7x\2\2tu\7q\2\2uv\7k\2\2vw\7"+
		"f\2\2w\4\3\2\2\2xy\7e\2\2yz\7j\2\2z{\7c\2\2{|\7t\2\2|\6\3\2\2\2}~\7w\2"+
		"\2~\177\7p\2\2\177\u0080\7u\2\2\u0080\u0081\7k\2\2\u0081\u0082\7i\2\2"+
		"\u0082\u0083\7p\2\2\u0083\u0084\7g\2\2\u0084\u0085\7f\2\2\u0085\u0086"+
		"\7\"\2\2\u0086\u0087\7e\2\2\u0087\u0088\7j\2\2\u0088\u0089\7c\2\2\u0089"+
		"\u008a\7t\2\2\u008a\b\3\2\2\2\u008b\u008c\7u\2\2\u008c\u008d\7j\2\2\u008d"+
		"\u008e\7q\2\2\u008e\u008f\7t\2\2\u008f\u0090\7v\2\2\u0090\n\3\2\2\2\u0091"+
		"\u0092\7w\2\2\u0092\u0093\7p\2\2\u0093\u0094\7u\2\2\u0094\u0095\7k\2\2"+
		"\u0095\u0096\7i\2\2\u0096\u0097\7p\2\2\u0097\u0098\7g\2\2\u0098\u0099"+
		"\7f\2\2\u0099\u009a\7\"\2\2\u009a\u009b\7u\2\2\u009b\u009c\7j\2\2\u009c"+
		"\u009d\7q\2\2\u009d\u009e\7t\2\2\u009e\u009f\7v\2\2\u009f\f\3\2\2\2\u00a0"+
		"\u00a1\7k\2\2\u00a1\u00a2\7p\2\2\u00a2\u00a3\7v\2\2\u00a3\16\3\2\2\2\u00a4"+
		"\u00a5\7w\2\2\u00a5\u00a6\7p\2\2\u00a6\u00a7\7u\2\2\u00a7\u00a8\7k\2\2"+
		"\u00a8\u00a9\7i\2\2\u00a9\u00aa\7p\2\2\u00aa\u00ab\7g\2\2\u00ab\u00ac"+
		"\7f\2\2\u00ac\u00ad\7\"\2\2\u00ad\u00ae\7k\2\2\u00ae\u00af\7p\2\2\u00af"+
		"\u00b0\7v\2\2\u00b0\20\3\2\2\2\u00b1\u00b2\7n\2\2\u00b2\u00b3\7q\2\2\u00b3"+
		"\u00b4\7p\2\2\u00b4\u00b5\7i\2\2\u00b5\22\3\2\2\2\u00b6\u00b7\7w\2\2\u00b7"+
		"\u00b8\7p\2\2\u00b8\u00b9\7u\2\2\u00b9\u00ba\7k\2\2\u00ba\u00bb\7i\2\2"+
		"\u00bb\u00bc\7p\2\2\u00bc\u00bd\7g\2\2\u00bd\u00be\7f\2\2\u00be\u00bf"+
		"\7\"\2\2\u00bf\u00c0\7n\2\2\u00c0\u00c1\7q\2\2\u00c1\u00c2\7p\2\2\u00c2"+
		"\u00c3\7i\2\2\u00c3\24\3\2\2\2\u00c4\u00c5\7h\2\2\u00c5\u00c6\7n\2\2\u00c6"+
		"\u00c7\7q\2\2\u00c7\u00c8\7c\2\2\u00c8\u00c9\7v\2\2\u00c9\26\3\2\2\2\u00ca"+
		"\u00cb\7f\2\2\u00cb\u00cc\7q\2\2\u00cc\u00cd\7w\2\2\u00cd\u00ce\7d\2\2"+
		"\u00ce\u00cf\7n\2\2\u00cf\u00d0\7g\2\2\u00d0\30\3\2\2\2\u00d1\u00d2\7"+
		"e\2\2\u00d2\u00d3\7q\2\2\u00d3\u00d4\7p\2\2\u00d4\u00d5\7u\2\2\u00d5\u00d6"+
		"\7v\2\2\u00d6\32\3\2\2\2\u00d7\u00d8\7t\2\2\u00d8\u00d9\7g\2\2\u00d9\u00da"+
		"\7u\2\2\u00da\u00db\7v\2\2\u00db\u00dc\7t\2\2\u00dc\u00dd\7k\2\2\u00dd"+
		"\u00de\7e\2\2\u00de\u00df\7v\2\2\u00df\34\3\2\2\2\u00e0\u00e1\7x\2\2\u00e1"+
		"\u00e2\7q\2\2\u00e2\u00e3\7n\2\2\u00e3\u00e4\7c\2\2\u00e4\u00e5\7v\2\2"+
		"\u00e5\u00e6\7k\2\2\u00e6\u00e7\7n\2\2\u00e7\u00e8\7g\2\2\u00e8\36\3\2"+
		"\2\2\u00e9\u00ea\7?\2\2\u00ea \3\2\2\2\u00eb\u00ec\7=\2\2\u00ec\"\3\2"+
		"\2\2\u00ed\u00ee\7,\2\2\u00ee\u00ef\7?\2\2\u00ef$\3\2\2\2\u00f0\u00f1"+
		"\7\61\2\2\u00f1\u00f2\7?\2\2\u00f2&\3\2\2\2\u00f3\u00f4\7\'\2\2\u00f4"+
		"\u00f5\7?\2\2\u00f5(\3\2\2\2\u00f6\u00f7\7-\2\2\u00f7\u00f8\7?\2\2\u00f8"+
		"*\3\2\2\2\u00f9\u00fa\7/\2\2\u00fa\u00fb\7?\2\2\u00fb,\3\2\2\2\u00fc\u00fd"+
		"\7>\2\2\u00fd\u00fe\7>\2\2\u00fe\u00ff\7?\2\2\u00ff.\3\2\2\2\u0100\u0101"+
		"\7@\2\2\u0101\u0102\7@\2\2\u0102\u0103\7?\2\2\u0103\60\3\2\2\2\u0104\u0105"+
		"\7(\2\2\u0105\u0106\7?\2\2\u0106\62\3\2\2\2\u0107\u0108\7`\2\2\u0108\u0109"+
		"\7?\2\2\u0109\64\3\2\2\2\u010a\u010b\7~\2\2\u010b\u010c\7?\2\2\u010c\66"+
		"\3\2\2\2\u010d\u010e\7*\2\2\u010e8\3\2\2\2\u010f\u0110\7+\2\2\u0110:\3"+
		"\2\2\2\u0111\u0112\7t\2\2\u0112\u0113\7g\2\2\u0113\u0114\7v\2\2\u0114"+
		"\u0115\7w\2\2\u0115\u0116\7t\2\2\u0116\u0117\7p\2\2\u0117<\3\2\2\2\u0118"+
		"\u0119\7}\2\2\u0119>\3\2\2\2\u011a\u011b\7\177\2\2\u011b@\3\2\2\2\u011c"+
		"\u011d\7.\2\2\u011dB\3\2\2\2\u011e\u011f\7,\2\2\u011fD\3\2\2\2\u0120\u0121"+
		"\7\61\2\2\u0121F\3\2\2\2\u0122\u0123\7-\2\2\u0123H\3\2\2\2\u0124\u0125"+
		"\7/\2\2\u0125J\3\2\2\2\u0126\u0127\7\'\2\2\u0127L\3\2\2\2\u0128\u0129"+
		"\7(\2\2\u0129\u012a\7(\2\2\u012aN\3\2\2\2\u012b\u012c\7~\2\2\u012c\u012d"+
		"\7~\2\2\u012dP\3\2\2\2\u012e\u012f\7?\2\2\u012f\u0130\7?\2\2\u0130R\3"+
		"\2\2\2\u0131\u0132\7#\2\2\u0132\u0133\7?\2\2\u0133T\3\2\2\2\u0134\u0135"+
		"\7>\2\2\u0135V\3\2\2\2\u0136\u0137\7>\2\2\u0137\u0138\7?\2\2\u0138X\3"+
		"\2\2\2\u0139\u013a\7@\2\2\u013aZ\3\2\2\2\u013b\u013c\7@\2\2\u013c\u013d"+
		"\7?\2\2\u013d\\\3\2\2\2\u013e\u013f\7-\2\2\u013f\u0140\7-\2\2\u0140^\3"+
		"\2\2\2\u0141\u0142\7(\2\2\u0142`\3\2\2\2\u0143\u0145\t\2\2\2\u0144\u0143"+
		"\3\2\2\2\u0145\u0146\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147\3\2\2\2\u0147"+
		"\u0148\3\2\2\2\u0148\u0149\b\61\2\2\u0149b\3\2\2\2\u014a\u014c\t\3\2\2"+
		"\u014b\u014a\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u014b\3\2\2\2\u014d\u014e"+
		"\3\2\2\2\u014ed\3\2\2\2\u014f\u0150\5m\67\2\u0150f\3\2\2\2\u0151\u0152"+
		"\7)\2\2\u0152\u0153\5i\65\2\u0153\u0154\7)\2\2\u0154h\3\2\2\2\u0155\u0156"+
		"\t\4\2\2\u0156j\3\2\2\2\u0157\u0159\t\3\2\2\u0158\u0157\3\2\2\2\u0159"+
		"\u015a\3\2\2\2\u015a\u0158\3\2\2\2\u015a\u015b\3\2\2\2\u015bl\3\2\2\2"+
		"\u015c\u015e\5k\66\2\u015d\u015c\3\2\2\2\u015d\u015e\3\2\2\2\u015e\u015f"+
		"\3\2\2\2\u015f\u0160\7\60\2\2\u0160\u0165\5k\66\2\u0161\u0162\5k\66\2"+
		"\u0162\u0163\7\60\2\2\u0163\u0165\3\2\2\2\u0164\u015d\3\2\2\2\u0164\u0161"+
		"\3\2\2\2\u0165n\3\2\2\2\u0166\u016b\5i\65\2\u0167\u016a\5i\65\2\u0168"+
		"\u016a\5k\66\2\u0169\u0167\3\2\2\2\u0169\u0168\3\2\2\2\u016a\u016d\3\2"+
		"\2\2\u016b\u0169\3\2\2\2\u016b\u016c\3\2\2\2\u016cp\3\2\2\2\u016d\u016b"+
		"\3\2\2\2\u016e\u016f\7,\2\2\u016f\u0174\5i\65\2\u0170\u0173\5i\65\2\u0171"+
		"\u0173\5k\66\2\u0172\u0170\3\2\2\2\u0172\u0171\3\2\2\2\u0173\u0176\3\2"+
		"\2\2\u0174\u0172\3\2\2\2\u0174\u0175\3\2\2\2\u0175r\3\2\2\2\u0176\u0174"+
		"\3\2\2\2\f\2\u0146\u014d\u015a\u015d\u0164\u0169\u016b\u0172\u0174\3\b"+
		"\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}