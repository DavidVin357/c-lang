"use strict";
// Generated from src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class CLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return CLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(CLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "C.g4"; }
    // @Override
    get ruleNames() { return CLexer.ruleNames; }
    // @Override
    get serializedATN() { return CLexer._serializedATN; }
    // @Override
    get channelNames() { return CLexer.channelNames; }
    // @Override
    get modeNames() { return CLexer.modeNames; }
    static get _ATN() {
        if (!CLexer.__ATN) {
            CLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CLexer._serializedATN));
        }
        return CLexer.__ATN;
    }
}
CLexer.T__0 = 1;
CLexer.T__1 = 2;
CLexer.T__2 = 3;
CLexer.T__3 = 4;
CLexer.T__4 = 5;
CLexer.T__5 = 6;
CLexer.T__6 = 7;
CLexer.T__7 = 8;
CLexer.T__8 = 9;
CLexer.T__9 = 10;
CLexer.T__10 = 11;
CLexer.T__11 = 12;
CLexer.T__12 = 13;
CLexer.T__13 = 14;
CLexer.T__14 = 15;
CLexer.T__15 = 16;
CLexer.T__16 = 17;
CLexer.T__17 = 18;
CLexer.T__18 = 19;
CLexer.T__19 = 20;
CLexer.T__20 = 21;
CLexer.T__21 = 22;
CLexer.T__22 = 23;
CLexer.T__23 = 24;
CLexer.T__24 = 25;
CLexer.T__25 = 26;
CLexer.T__26 = 27;
CLexer.T__27 = 28;
CLexer.T__28 = 29;
CLexer.T__29 = 30;
CLexer.T__30 = 31;
CLexer.T__31 = 32;
CLexer.T__32 = 33;
CLexer.T__33 = 34;
CLexer.T__34 = 35;
CLexer.T__35 = 36;
CLexer.T__36 = 37;
CLexer.T__37 = 38;
CLexer.T__38 = 39;
CLexer.T__39 = 40;
CLexer.T__40 = 41;
CLexer.T__41 = 42;
CLexer.T__42 = 43;
CLexer.T__43 = 44;
CLexer.T__44 = 45;
CLexer.T__45 = 46;
CLexer.T__46 = 47;
CLexer.T__47 = 48;
CLexer.T__48 = 49;
CLexer.T__49 = 50;
CLexer.T__50 = 51;
CLexer.MUL = 52;
CLexer.DIV = 53;
CLexer.ADD = 54;
CLexer.SUB = 55;
CLexer.MOD = 56;
CLexer.LOGICAL_AND = 57;
CLexer.LOGICAL_OR = 58;
CLexer.EQUALS = 59;
CLexer.NOT_EQUALS = 60;
CLexer.LESS = 61;
CLexer.LESS_EQUAL = 62;
CLexer.GREATER = 63;
CLexer.GREATER_EQUAL = 64;
CLexer.UNARY_ADD = 65;
CLexer.UNARY_SUB = 66;
CLexer.NOT = 67;
CLexer.VAR_ADDRESS = 68;
CLexer.WHITESPACE = 69;
CLexer.DECIMAL = 70;
CLexer.FRACTION = 71;
CLexer.CHAR = 72;
CLexer.STRING = 73;
CLexer.COMMENT = 74;
CLexer.LINE_COMMENT = 75;
CLexer.INCLUDE = 76;
CLexer.Identifier = 77;
// tslint:disable:no-trailing-whitespace
CLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
CLexer.modeNames = [
    "DEFAULT_MODE",
];
CLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
    "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
    "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24",
    "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32",
    "T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40",
    "T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48",
    "T__49", "T__50", "MUL", "DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR",
    "EQUALS", "NOT_EQUALS", "LESS", "LESS_EQUAL", "GREATER", "GREATER_EQUAL",
    "UNARY_ADD", "UNARY_SUB", "NOT", "VAR_ADDRESS", "WHITESPACE", "DECIMAL",
    "FRACTION", "CHAR", "STRING", "COMMENT", "LINE_COMMENT", "INCLUDE", "Nondigit",
    "Digit", "Fraction", "Identifier",
];
CLexer._LITERAL_NAMES = [
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
CLexer._SYMBOLIC_NAMES = [
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
CLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CLexer._LITERAL_NAMES, CLexer._SYMBOLIC_NAMES, []);
CLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02O\u023F\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
    "\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
    "\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
    "\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
    "\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03" +
    "\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
    "\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
    " \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03" +
    "$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03" +
    "\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03" +
    "(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03" +
    ")\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
    ",\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03.\x03.\x03/\x03/\x03" +
    "/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x031\x031\x03" +
    "1\x031\x031\x031\x031\x032\x032\x032\x032\x033\x033\x033\x034\x034\x03" +
    "4\x034\x034\x034\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03" +
    ":\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03" +
    "?\x03?\x03?\x03@\x03@\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03C\x03" +
    "D\x03D\x03E\x03E\x03F\x06F\u01E3\nF\rF\x0EF\u01E4\x03F\x03F\x03G\x06G" +
    "\u01EA\nG\rG\x0EG\u01EB\x03H\x03H\x03I\x03I\x03I\x03I\x03J\x03J\x07J\u01F6" +
    "\nJ\fJ\x0EJ\u01F9\vJ\x03J\x03J\x03K\x03K\x03K\x03K\x07K\u0201\nK\fK\x0E" +
    "K\u0204\vK\x03K\x03K\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x07L\u020F\nL" +
    "\fL\x0EL\u0212\vL\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
    "M\x03M\x07M\u0220\nM\fM\x0EM\u0223\vM\x03M\x03M\x03N\x03N\x03O\x06O\u022A" +
    "\nO\rO\x0EO\u022B\x03P\x05P\u022F\nP\x03P\x03P\x03P\x03P\x03P\x05P\u0236" +
    "\nP\x03Q\x03Q\x03Q\x07Q\u023B\nQ\fQ\x0EQ\u023E\vQ\x04\u01F7\u0202\x02" +
    "\x02R\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b" +
    "\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
    "\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
    "\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02" +
    "\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(" +
    "O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02" +
    "4g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02" +
    "@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02" +
    "H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02\x02\x9D" +
    "\x02\x02\x9F\x02\x02\xA1\x02O\x03\x02\x06\x05\x02\v\f\x0F\x0F\"\"\x03" +
    "\x022;\x04\x02\f\f\x0F\x0F\x05\x02C\\aac|\x02\u0246\x02\x03\x03\x02\x02" +
    "\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
    "\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
    "\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
    "\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
    "\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
    "\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
    "\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
    "\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
    "\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
    "\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
    "\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
    "K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
    "\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
    "\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
    "\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02" +
    "\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02" +
    "m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02" +
    "\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02" +
    "\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02" +
    "\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02" +
    "\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02" +
    "\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02" +
    "\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02" +
    "\x99\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x03\xA3\x03\x02\x02\x02\x05" +
    "\xA8\x03\x02\x02\x02\x07\xAD\x03\x02\x02\x02\t\xBB\x03\x02\x02\x02\v\xC1" +
    "\x03\x02\x02\x02\r\xD0\x03\x02\x02\x02\x0F\xD4\x03\x02\x02\x02\x11\xE1" +
    "\x03\x02\x02\x02\x13\xE6\x03\x02\x02\x02\x15\xF4\x03\x02\x02\x02\x17\xFA" +
    "\x03\x02\x02\x02\x19\u0101\x03\x02\x02\x02\x1B\u0107\x03\x02\x02\x02\x1D" +
    "\u0110\x03\x02\x02\x02\x1F\u0119\x03\x02\x02\x02!\u011B\x03\x02\x02\x02" +
    "#\u011D\x03\x02\x02\x02%\u011F\x03\x02\x02\x02\'\u0121\x03\x02\x02\x02" +
    ")\u0123\x03\x02\x02\x02+\u0126\x03\x02\x02\x02-\u0129\x03\x02\x02\x02" +
    "/\u012C\x03\x02\x02\x021\u012F\x03\x02\x02\x023\u0132\x03\x02\x02\x02" +
    "5\u0136\x03\x02\x02\x027\u013A\x03\x02\x02\x029\u013D\x03\x02\x02\x02" +
    ";\u0140\x03\x02\x02\x02=\u0143\x03\x02\x02\x02?\u0145\x03\x02\x02\x02" +
    "A\u0147\x03\x02\x02\x02C\u0149\x03\x02\x02\x02E\u014B\x03\x02\x02\x02" +
    "G\u014E\x03\x02\x02\x02I\u0155\x03\x02\x02\x02K\u015C\x03\x02\x02\x02" +
    "M\u0161\x03\x02\x02\x02O\u016C\x03\x02\x02\x02Q\u0178\x03\x02\x02\x02" +
    "S\u017F\x03\x02\x02\x02U\u0182\x03\x02\x02\x02W\u0187\x03\x02\x02\x02" +
    "Y\u018E\x03\x02\x02\x02[\u0193\x03\x02\x02\x02]\u0195\x03\x02\x02\x02" +
    "_\u019D\x03\x02\x02\x02a\u01A3\x03\x02\x02\x02c\u01AA\x03\x02\x02\x02" +
    "e\u01AE\x03\x02\x02\x02g\u01B1\x03\x02\x02\x02i\u01B7\x03\x02\x02\x02" +
    "k\u01B9\x03\x02\x02\x02m\u01BB\x03\x02\x02\x02o\u01BD\x03\x02\x02\x02" +
    "q\u01BF\x03\x02\x02\x02s\u01C1\x03\x02\x02\x02u\u01C4\x03\x02\x02\x02" +
    "w\u01C7\x03\x02\x02\x02y\u01CA\x03\x02\x02\x02{\u01CD\x03\x02\x02\x02" +
    "}\u01CF\x03\x02\x02\x02\x7F\u01D2\x03\x02\x02\x02\x81\u01D4\x03\x02\x02" +
    "\x02\x83\u01D7\x03\x02\x02\x02\x85\u01DA\x03\x02\x02\x02\x87\u01DD\x03" +
    "\x02\x02\x02\x89\u01DF\x03\x02\x02\x02\x8B\u01E2\x03\x02\x02\x02\x8D\u01E9" +
    "\x03\x02\x02\x02\x8F\u01ED\x03\x02\x02\x02\x91\u01EF\x03\x02\x02\x02\x93" +
    "\u01F3\x03\x02\x02\x02\x95\u01FC\x03\x02\x02\x02\x97\u020A\x03\x02\x02" +
    "\x02\x99\u0215\x03\x02\x02\x02\x9B\u0226\x03\x02\x02\x02\x9D\u0229\x03" +
    "\x02\x02\x02\x9F\u0235\x03\x02\x02\x02\xA1\u0237\x03\x02\x02\x02\xA3\xA4" +
    "\x07x\x02\x02\xA4\xA5\x07q\x02\x02\xA5\xA6\x07k\x02\x02\xA6\xA7\x07f\x02" +
    "\x02\xA7\x04\x03\x02\x02\x02\xA8\xA9\x07e\x02\x02\xA9\xAA\x07j\x02\x02" +
    "\xAA\xAB\x07c\x02\x02\xAB\xAC\x07t\x02\x02\xAC\x06\x03\x02\x02\x02\xAD" +
    "\xAE\x07w\x02\x02\xAE\xAF\x07p\x02\x02\xAF\xB0\x07u\x02\x02\xB0\xB1\x07" +
    "k\x02\x02\xB1\xB2\x07i\x02\x02\xB2\xB3\x07p\x02\x02\xB3\xB4\x07g\x02\x02" +
    "\xB4\xB5\x07f\x02\x02\xB5\xB6\x07\"\x02\x02\xB6\xB7\x07e\x02\x02\xB7\xB8" +
    "\x07j\x02\x02\xB8\xB9\x07c\x02\x02\xB9\xBA\x07t\x02\x02\xBA\b\x03\x02" +
    "\x02\x02\xBB\xBC\x07u\x02\x02\xBC\xBD\x07j\x02\x02\xBD\xBE\x07q\x02\x02" +
    "\xBE\xBF\x07t\x02\x02\xBF\xC0\x07v\x02\x02\xC0\n\x03\x02\x02\x02\xC1\xC2" +
    "\x07w\x02\x02\xC2\xC3\x07p\x02\x02\xC3\xC4\x07u\x02\x02\xC4\xC5\x07k\x02" +
    "\x02\xC5\xC6\x07i\x02\x02\xC6\xC7\x07p\x02\x02\xC7\xC8\x07g\x02\x02\xC8" +
    "\xC9\x07f\x02\x02\xC9\xCA\x07\"\x02\x02\xCA\xCB\x07u\x02\x02\xCB\xCC\x07" +
    "j\x02\x02\xCC\xCD\x07q\x02\x02\xCD\xCE\x07t\x02\x02\xCE\xCF\x07v\x02\x02" +
    "\xCF\f\x03\x02\x02\x02\xD0\xD1\x07k\x02\x02\xD1\xD2\x07p\x02\x02\xD2\xD3" +
    "\x07v\x02\x02\xD3\x0E\x03\x02\x02\x02\xD4\xD5\x07w\x02\x02\xD5\xD6\x07" +
    "p\x02\x02\xD6\xD7\x07u\x02\x02\xD7\xD8\x07k\x02\x02\xD8\xD9\x07i\x02\x02" +
    "\xD9\xDA\x07p\x02\x02\xDA\xDB\x07g\x02\x02\xDB\xDC\x07f\x02\x02\xDC\xDD" +
    "\x07\"\x02\x02\xDD\xDE\x07k\x02\x02\xDE\xDF\x07p\x02\x02\xDF\xE0\x07v" +
    "\x02\x02\xE0\x10\x03\x02\x02\x02\xE1\xE2\x07n\x02\x02\xE2\xE3\x07q\x02" +
    "\x02\xE3\xE4\x07p\x02\x02\xE4\xE5\x07i\x02\x02\xE5\x12\x03\x02\x02\x02" +
    "\xE6\xE7\x07w\x02\x02\xE7\xE8\x07p\x02\x02\xE8\xE9\x07u\x02\x02\xE9\xEA" +
    "\x07k\x02\x02\xEA\xEB\x07i\x02\x02\xEB\xEC\x07p\x02\x02\xEC\xED\x07g\x02" +
    "\x02\xED\xEE\x07f\x02\x02\xEE\xEF\x07\"\x02\x02\xEF\xF0\x07n\x02\x02\xF0" +
    "\xF1\x07q\x02\x02\xF1\xF2\x07p\x02\x02\xF2\xF3\x07i\x02\x02\xF3\x14\x03" +
    "\x02\x02\x02\xF4\xF5\x07h\x02\x02\xF5\xF6\x07n\x02\x02\xF6\xF7\x07q\x02" +
    "\x02\xF7\xF8\x07c\x02\x02\xF8\xF9\x07v\x02\x02\xF9\x16\x03\x02\x02\x02" +
    "\xFA\xFB\x07f\x02\x02\xFB\xFC\x07q\x02\x02\xFC\xFD\x07w\x02\x02\xFD\xFE" +
    "\x07d\x02\x02\xFE\xFF\x07n\x02\x02\xFF\u0100\x07g\x02\x02\u0100\x18\x03" +
    "\x02\x02\x02\u0101\u0102\x07e\x02\x02\u0102\u0103\x07q\x02\x02\u0103\u0104" +
    "\x07p\x02\x02\u0104\u0105\x07u\x02\x02\u0105\u0106\x07v\x02\x02\u0106" +
    "\x1A\x03\x02\x02\x02\u0107\u0108\x07t\x02\x02\u0108\u0109\x07g\x02\x02" +
    "\u0109\u010A\x07u\x02\x02\u010A\u010B\x07v\x02\x02\u010B\u010C\x07t\x02" +
    "\x02\u010C\u010D\x07k\x02\x02\u010D\u010E\x07e\x02\x02\u010E\u010F\x07" +
    "v\x02\x02\u010F\x1C\x03\x02\x02\x02\u0110\u0111\x07x\x02\x02\u0111\u0112" +
    "\x07q\x02\x02\u0112\u0113\x07n\x02\x02\u0113\u0114\x07c\x02\x02\u0114" +
    "\u0115\x07v\x02\x02\u0115\u0116\x07k\x02\x02\u0116\u0117\x07n\x02\x02" +
    "\u0117\u0118\x07g\x02\x02\u0118\x1E\x03\x02\x02\x02\u0119\u011A\x07*\x02" +
    "\x02\u011A \x03\x02\x02\x02\u011B\u011C\x07+\x02\x02\u011C\"\x03\x02\x02" +
    "\x02\u011D\u011E\x07?\x02\x02\u011E$\x03\x02\x02\x02\u011F\u0120\x07=" +
    "\x02\x02\u0120&\x03\x02\x02\x02\u0121\u0122\x07.\x02\x02\u0122(\x03\x02" +
    "\x02\x02\u0123\u0124\x07,\x02\x02\u0124\u0125\x07?\x02\x02\u0125*\x03" +
    "\x02\x02\x02\u0126\u0127\x071\x02\x02\u0127\u0128\x07?\x02\x02\u0128," +
    "\x03\x02\x02\x02\u0129\u012A\x07\'\x02\x02\u012A\u012B\x07?\x02\x02\u012B" +
    ".\x03\x02\x02\x02\u012C\u012D\x07-\x02\x02\u012D\u012E\x07?\x02\x02\u012E" +
    "0\x03\x02\x02\x02\u012F\u0130\x07/\x02\x02\u0130\u0131\x07?\x02\x02\u0131" +
    "2\x03\x02\x02\x02\u0132\u0133\x07>\x02\x02\u0133\u0134\x07>\x02\x02\u0134" +
    "\u0135\x07?\x02\x02\u01354\x03\x02\x02\x02\u0136\u0137\x07@\x02\x02\u0137" +
    "\u0138\x07@\x02\x02\u0138\u0139\x07?\x02\x02\u01396\x03\x02\x02\x02\u013A" +
    "\u013B\x07(\x02\x02\u013B\u013C\x07?\x02\x02\u013C8\x03\x02\x02\x02\u013D" +
    "\u013E\x07`\x02\x02\u013E\u013F\x07?\x02\x02\u013F:\x03\x02\x02\x02\u0140" +
    "\u0141\x07~\x02\x02\u0141\u0142\x07?\x02\x02\u0142<\x03\x02\x02\x02\u0143" +
    "\u0144\x07}\x02\x02\u0144>\x03\x02\x02\x02\u0145\u0146\x07\x7F\x02\x02" +
    "\u0146@\x03\x02\x02\x02\u0147\u0148\x07]\x02\x02\u0148B\x03\x02\x02\x02" +
    "\u0149\u014A\x07_\x02\x02\u014AD\x03\x02\x02\x02\u014B\u014C\x07]\x02" +
    "\x02\u014C\u014D\x07_\x02\x02\u014DF\x03\x02\x02\x02\u014E\u014F\x07o" +
    "\x02\x02\u014F\u0150\x07c\x02\x02\u0150\u0151\x07n\x02\x02\u0151\u0152" +
    "\x07n\x02\x02\u0152\u0153\x07q\x02\x02\u0153\u0154\x07e\x02\x02\u0154" +
    "H\x03\x02\x02\x02\u0155\u0156\x07u\x02\x02\u0156\u0157\x07k\x02\x02\u0157" +
    "\u0158\x07|\x02\x02\u0158\u0159\x07g\x02\x02\u0159\u015A\x07q\x02\x02" +
    "\u015A\u015B\x07h\x02\x02\u015BJ\x03\x02\x02\x02\u015C\u015D\x07h\x02" +
    "\x02\u015D\u015E\x07t\x02\x02\u015E\u015F\x07g\x02\x02\u015F\u0160\x07" +
    "g\x02\x02\u0160L\x03\x02\x02\x02\u0161\u0162\x07r\x02\x02\u0162\u0163" +
    "\x07t\x02\x02\u0163\u0164\x07k\x02\x02\u0164\u0165\x07p\x02\x02\u0165" +
    "\u0166\x07v\x02\x02\u0166\u0167\x07a\x02\x02\u0167\u0168\x07j\x02\x02" +
    "\u0168\u0169\x07g\x02\x02\u0169\u016A\x07c\x02\x02\u016A\u016B\x07r\x02" +
    "\x02\u016BN\x03\x02\x02\x02\u016C\u016D\x07r\x02\x02\u016D\u016E\x07t" +
    "\x02\x02\u016E\u016F\x07k\x02\x02\u016F\u0170\x07p\x02\x02\u0170\u0171" +
    "\x07v\x02\x02\u0171\u0172\x07a\x02\x02\u0172\u0173\x07u\x02\x02\u0173" +
    "\u0174\x07v\x02\x02\u0174\u0175\x07c\x02\x02\u0175\u0176\x07e\x02\x02" +
    "\u0176\u0177\x07m\x02\x02\u0177P\x03\x02\x02\x02\u0178\u0179\x07r\x02" +
    "\x02\u0179\u017A\x07t\x02\x02\u017A\u017B\x07k\x02\x02\u017B\u017C\x07" +
    "p\x02\x02\u017C\u017D\x07v\x02\x02\u017D\u017E\x07h\x02\x02\u017ER\x03" +
    "\x02\x02\x02\u017F\u0180\x07k\x02\x02\u0180\u0181\x07h\x02\x02\u0181T" +
    "\x03\x02\x02\x02\u0182\u0183\x07g\x02\x02\u0183\u0184\x07n\x02\x02\u0184" +
    "\u0185\x07u\x02\x02\u0185\u0186\x07g\x02\x02\u0186V\x03\x02\x02\x02\u0187" +
    "\u0188\x07u\x02\x02\u0188\u0189\x07y\x02\x02\u0189\u018A\x07k\x02\x02" +
    "\u018A\u018B\x07v\x02\x02\u018B\u018C\x07e\x02\x02\u018C\u018D\x07j\x02" +
    "\x02\u018DX\x03\x02\x02\x02\u018E\u018F\x07e\x02\x02\u018F\u0190\x07c" +
    "\x02\x02\u0190\u0191\x07u\x02\x02\u0191\u0192\x07g\x02\x02\u0192Z\x03" +
    "\x02\x02\x02\u0193\u0194\x07<\x02\x02\u0194\\\x03\x02\x02\x02\u0195\u0196" +
    "\x07f\x02\x02\u0196\u0197\x07g\x02\x02\u0197\u0198\x07h\x02\x02\u0198" +
    "\u0199\x07c\x02\x02\u0199\u019A\x07w\x02\x02\u019A\u019B\x07n\x02\x02" +
    "\u019B\u019C\x07v\x02\x02\u019C^\x03\x02\x02\x02\u019D\u019E\x07d\x02" +
    "\x02\u019E\u019F\x07t\x02\x02\u019F\u01A0\x07g\x02\x02\u01A0\u01A1\x07" +
    "c\x02\x02\u01A1\u01A2\x07m\x02\x02\u01A2`\x03\x02\x02\x02\u01A3\u01A4" +
    "\x07t\x02\x02\u01A4\u01A5\x07g\x02\x02\u01A5\u01A6\x07v\x02\x02\u01A6" +
    "\u01A7\x07w\x02\x02\u01A7\u01A8\x07t\x02\x02\u01A8\u01A9\x07p\x02\x02" +
    "\u01A9b\x03\x02\x02\x02\u01AA\u01AB\x07h\x02\x02\u01AB\u01AC\x07q\x02" +
    "\x02\u01AC\u01AD\x07t\x02\x02\u01ADd\x03\x02\x02\x02\u01AE\u01AF\x07f" +
    "\x02\x02\u01AF\u01B0\x07q\x02\x02\u01B0f\x03\x02\x02\x02\u01B1\u01B2\x07" +
    "y\x02\x02\u01B2\u01B3\x07j\x02\x02\u01B3\u01B4\x07k\x02\x02\u01B4\u01B5" +
    "\x07n\x02\x02\u01B5\u01B6\x07g\x02\x02\u01B6h\x03\x02\x02\x02\u01B7\u01B8" +
    "\x07,\x02\x02\u01B8j\x03\x02\x02\x02\u01B9\u01BA\x071\x02\x02\u01BAl\x03" +
    "\x02\x02\x02\u01BB\u01BC\x07-\x02\x02\u01BCn\x03\x02\x02\x02\u01BD\u01BE" +
    "\x07/\x02\x02\u01BEp\x03\x02\x02\x02\u01BF\u01C0\x07\'\x02\x02\u01C0r" +
    "\x03\x02\x02\x02\u01C1\u01C2\x07(\x02\x02\u01C2\u01C3\x07(\x02\x02\u01C3" +
    "t\x03\x02\x02\x02\u01C4\u01C5\x07~\x02\x02\u01C5\u01C6\x07~\x02\x02\u01C6" +
    "v\x03\x02\x02\x02\u01C7\u01C8\x07?\x02\x02\u01C8\u01C9\x07?\x02\x02\u01C9" +
    "x\x03\x02\x02\x02\u01CA\u01CB\x07#\x02\x02\u01CB\u01CC\x07?\x02\x02\u01CC" +
    "z\x03\x02\x02\x02\u01CD\u01CE\x07>\x02\x02\u01CE|\x03\x02\x02\x02\u01CF" +
    "\u01D0\x07>\x02\x02\u01D0\u01D1\x07?\x02\x02\u01D1~\x03\x02\x02\x02\u01D2" +
    "\u01D3\x07@\x02\x02\u01D3\x80\x03\x02\x02\x02\u01D4\u01D5\x07@\x02\x02" +
    "\u01D5\u01D6\x07?\x02\x02\u01D6\x82\x03\x02\x02\x02\u01D7\u01D8\x07-\x02" +
    "\x02\u01D8\u01D9\x07-\x02\x02\u01D9\x84\x03\x02\x02\x02\u01DA\u01DB\x07" +
    "/\x02\x02\u01DB\u01DC\x07/\x02\x02\u01DC\x86\x03\x02\x02\x02\u01DD\u01DE" +
    "\x07#\x02\x02\u01DE\x88\x03\x02\x02\x02\u01DF\u01E0\x07(\x02\x02\u01E0" +
    "\x8A\x03\x02\x02\x02\u01E1\u01E3\t\x02\x02\x02\u01E2\u01E1\x03\x02\x02" +
    "\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
    "\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\bF\x02\x02\u01E7" +
    "\x8C\x03\x02\x02\x02\u01E8\u01EA\t\x03\x02\x02\u01E9\u01E8\x03\x02\x02" +
    "\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC" +
    "\x03\x02\x02\x02\u01EC\x8E\x03\x02\x02\x02\u01ED\u01EE\x05\x9FP\x02\u01EE" +
    "\x90\x03\x02\x02\x02\u01EF\u01F0\x07)\x02\x02\u01F0\u01F1\v\x02\x02\x02" +
    "\u01F1\u01F2\x07)\x02\x02\u01F2\x92\x03\x02\x02\x02\u01F3\u01F7\x07$\x02" +
    "\x02\u01F4\u01F6\v\x02\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6\u01F9" +
    "\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02" +
    "\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA\u01FB\x07" +
    "$\x02\x02\u01FB\x94\x03\x02\x02\x02\u01FC\u01FD\x071\x02\x02\u01FD\u01FE" +
    "\x07,\x02\x02\u01FE\u0202\x03\x02\x02\x02\u01FF\u0201\v\x02\x02\x02\u0200" +
    "\u01FF\x03\x02\x02\x02\u0201\u0204\x03\x02\x02\x02\u0202\u0203\x03\x02" +
    "\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0205\x03\x02\x02\x02\u0204" +
    "\u0202\x03\x02\x02\x02\u0205\u0206\x07,\x02\x02\u0206\u0207\x071\x02\x02" +
    "\u0207\u0208\x03\x02\x02\x02\u0208\u0209\bK\x02\x02\u0209\x96\x03\x02" +
    "\x02\x02\u020A\u020B\x071\x02\x02\u020B\u020C\x071\x02\x02\u020C\u0210" +
    "\x03\x02\x02\x02\u020D\u020F\n\x04\x02\x02\u020E\u020D\x03\x02\x02\x02" +
    "\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03" +
    "\x02\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213" +
    "\u0214\bL\x02\x02\u0214\x98\x03\x02\x02\x02\u0215\u0216\x07%\x02\x02\u0216" +
    "\u0217\x07k\x02\x02\u0217\u0218\x07p\x02\x02\u0218\u0219\x07e\x02\x02" +
    "\u0219\u021A\x07n\x02\x02\u021A\u021B\x07w\x02\x02\u021B\u021C\x07f\x02" +
    "\x02\u021C\u021D\x07g\x02\x02\u021D\u0221\x03\x02\x02\x02\u021E\u0220" +
    "\n\x04\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02" +
    "\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x03" +
    "\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0225\bM\x02\x02\u0225" +
    "\x9A\x03\x02\x02\x02\u0226\u0227\t\x05\x02\x02\u0227\x9C\x03\x02\x02\x02" +
    "\u0228\u022A\t\x03\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A\u022B\x03" +
    "\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C" +
    "\x9E\x03\x02\x02\x02\u022D\u022F\x05\x9DO\x02\u022E\u022D\x03\x02\x02" +
    "\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230\u0231" +
    "\x070\x02\x02\u0231\u0236\x05\x9DO\x02\u0232\u0233\x05\x9DO\x02\u0233" +
    "\u0234\x070\x02\x02\u0234\u0236\x03\x02\x02\x02\u0235\u022E\x03\x02\x02" +
    "\x02\u0235\u0232\x03\x02\x02\x02\u0236\xA0\x03\x02\x02\x02\u0237\u023C" +
    "\x05\x9BN\x02\u0238\u023B\x05\x9BN\x02\u0239\u023B\x05\x9DO\x02\u023A" +
    "\u0238\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023B\u023E\x03\x02" +
    "\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D" +
    "\xA2\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\x0E\x02\u01E4\u01EB\u01F7" +
    "\u0202\u0210\u0221\u022B\u022E\u0235\u023A\u023C\x03\b\x02\x02";
exports.CLexer = CLexer;
//# sourceMappingURL=CLexer.js.map