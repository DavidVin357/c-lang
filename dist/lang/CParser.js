"use strict";
// Generated from ./src/lang/C.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramContext = exports.BlockItemListContext = exports.BlockItemContext = exports.ExpressionStatementContext = exports.AssignmentExpressionContext = exports.LogicalOrContext = exports.LogicalAndContext = exports.LessEqualContext = exports.LessContext = exports.GreaterEqualContext = exports.GreaterContext = exports.EqualContext = exports.ModularContext = exports.SubtractionContext = exports.AdditionContext = exports.DivisionContext = exports.MultiplicationContext = exports.ParenthesesContext = exports.IdentifierContext = exports.FractionContext = exports.DecimalContext = exports.ExpressionContext = exports.AssignmentContext = exports.AssignmentOperatorContext = exports.InitializationContext = exports.DeclarationContext = exports.DeclarationSpecifierContext = exports.TypeQualifierContext = exports.TypeSpecifierContext = exports.DeclarationSpecifiersContext = exports.CParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class CParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return CParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "C.g4"; }
    // @Override
    get ruleNames() { return CParser.ruleNames; }
    // @Override
    get serializedATN() { return CParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(CParser._ATN, this);
    }
    // @RuleVersion(0)
    declarationSpecifiers() {
        let _localctx = new DeclarationSpecifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, CParser.RULE_declarationSpecifiers);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 26;
                            this.declarationSpecifier();
                        }
                    }
                    this.state = 29;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeSpecifier() {
        let _localctx = new TypeSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, CParser.RULE_typeSpecifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeQualifier() {
        let _localctx = new TypeQualifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, CParser.RULE_typeQualifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 33;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declarationSpecifier() {
        let _localctx = new DeclarationSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, CParser.RULE_declarationSpecifier);
        try {
            this.state = 37;
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
                        this.state = 35;
                        this.typeSpecifier();
                    }
                    break;
                case CParser.T__9:
                case CParser.T__10:
                case CParser.T__11:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 36;
                        this.typeQualifier();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, CParser.RULE_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 39;
                _localctx._specifiers = this.declarationSpecifiers();
                this.state = 40;
                this.match(CParser.Identifier);
                this.state = 41;
                this.match(CParser.T__12);
                this.state = 42;
                _localctx._value = this.expression(0);
                this.state = 43;
                this.match(CParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    initialization() {
        let _localctx = new InitializationContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, CParser.RULE_initialization);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                _localctx._specifiers = this.declarationSpecifiers();
                this.state = 46;
                this.match(CParser.Identifier);
                this.state = 47;
                this.match(CParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignmentOperator() {
        let _localctx = new AssignmentOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, CParser.RULE_assignmentOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__12) | (1 << CParser.T__14) | (1 << CParser.T__15) | (1 << CParser.T__16) | (1 << CParser.T__17) | (1 << CParser.T__18) | (1 << CParser.T__19) | (1 << CParser.T__20) | (1 << CParser.T__21) | (1 << CParser.T__22) | (1 << CParser.T__23))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, CParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                this.match(CParser.Identifier);
                this.state = 52;
                _localctx._operator = this.assignmentOperator();
                this.state = 53;
                _localctx._value = this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 16;
        this.enterRecursionRule(_localctx, 16, CParser.RULE_expression, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 64;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                    case 1:
                        {
                            _localctx = new DecimalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 56;
                            this.match(CParser.DECIMAL);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new FractionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 57;
                            this.match(CParser.FRACTION);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new IdentifierContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 58;
                            this.match(CParser.Identifier);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 59;
                            this.match(CParser.T__24);
                            this.state = 60;
                            _localctx._inner = this.expression(0);
                            this.state = 61;
                            this.match(CParser.T__25);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new AssignmentExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 63;
                            this.assignment();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 104;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 102;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicationContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 66;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 67;
                                        _localctx._operator = this.match(CParser.MUL);
                                        this.state = 68;
                                        _localctx._right = this.expression(14);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new DivisionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 69;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 70;
                                        _localctx._operator = this.match(CParser.DIV);
                                        this.state = 71;
                                        _localctx._right = this.expression(13);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new AdditionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 72;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 73;
                                        _localctx._operator = this.match(CParser.ADD);
                                        this.state = 74;
                                        _localctx._right = this.expression(12);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new SubtractionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 75;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 76;
                                        _localctx._operator = this.match(CParser.SUB);
                                        this.state = 77;
                                        _localctx._right = this.expression(11);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ModularContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 78;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 79;
                                        _localctx._operator = this.match(CParser.MOD);
                                        this.state = 80;
                                        _localctx._right = this.expression(10);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new EqualContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 81;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 82;
                                        _localctx._operator = this.match(CParser.EQUALS);
                                        this.state = 83;
                                        _localctx._right = this.expression(9);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new GreaterContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 84;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 85;
                                        _localctx._operator = this.match(CParser.GREATER);
                                        this.state = 86;
                                        _localctx._right = this.expression(8);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new GreaterEqualContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 87;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 88;
                                        _localctx._operator = this.match(CParser.GREATER_EQUAL);
                                        this.state = 89;
                                        _localctx._right = this.expression(7);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new LessContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 90;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 91;
                                        _localctx._operator = this.match(CParser.LESS);
                                        this.state = 92;
                                        _localctx._right = this.expression(6);
                                    }
                                    break;
                                case 10:
                                    {
                                        _localctx = new LessEqualContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 93;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 94;
                                        _localctx._operator = this.match(CParser.LESS_EQUAL);
                                        this.state = 95;
                                        _localctx._right = this.expression(5);
                                    }
                                    break;
                                case 11:
                                    {
                                        _localctx = new LogicalAndContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 96;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 97;
                                        _localctx._operator = this.match(CParser.LOGICAL_AND);
                                        this.state = 98;
                                        _localctx._right = this.expression(4);
                                    }
                                    break;
                                case 12:
                                    {
                                        _localctx = new LogicalOrContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, CParser.RULE_expression);
                                        this.state = 99;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 100;
                                        _localctx._operator = this.match(CParser.LOGICAL_OR);
                                        this.state = 101;
                                        _localctx._right = this.expression(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 106;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionStatement() {
        let _localctx = new ExpressionStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, CParser.RULE_expressionStatement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 108;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (CParser.T__24 - 25)) | (1 << (CParser.DECIMAL - 25)) | (1 << (CParser.FRACTION - 25)) | (1 << (CParser.Identifier - 25)))) !== 0)) {
                    {
                        this.state = 107;
                        this.expression(0);
                    }
                }
                this.state = 110;
                this.match(CParser.T__13);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockItem() {
        let _localctx = new BlockItemContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, CParser.RULE_blockItem);
        try {
            this.state = 115;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 112;
                        this.expressionStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 113;
                        this.declaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 114;
                        this.initialization();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    blockItemList() {
        let _localctx = new BlockItemListContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, CParser.RULE_blockItemList);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 117;
                            this.blockItem();
                        }
                    }
                    this.state = 120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CParser.T__0) | (1 << CParser.T__1) | (1 << CParser.T__2) | (1 << CParser.T__3) | (1 << CParser.T__4) | (1 << CParser.T__5) | (1 << CParser.T__6) | (1 << CParser.T__7) | (1 << CParser.T__8) | (1 << CParser.T__9) | (1 << CParser.T__10) | (1 << CParser.T__11) | (1 << CParser.T__13) | (1 << CParser.T__24))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CParser.DECIMAL - 41)) | (1 << (CParser.FRACTION - 41)) | (1 << (CParser.Identifier - 41)))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, CParser.RULE_program);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 122;
                this.blockItemList();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 8:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!CParser.__ATN) {
            CParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CParser._serializedATN));
        }
        return CParser.__ATN;
    }
}
CParser.T__0 = 1;
CParser.T__1 = 2;
CParser.T__2 = 3;
CParser.T__3 = 4;
CParser.T__4 = 5;
CParser.T__5 = 6;
CParser.T__6 = 7;
CParser.T__7 = 8;
CParser.T__8 = 9;
CParser.T__9 = 10;
CParser.T__10 = 11;
CParser.T__11 = 12;
CParser.T__12 = 13;
CParser.T__13 = 14;
CParser.T__14 = 15;
CParser.T__15 = 16;
CParser.T__16 = 17;
CParser.T__17 = 18;
CParser.T__18 = 19;
CParser.T__19 = 20;
CParser.T__20 = 21;
CParser.T__21 = 22;
CParser.T__22 = 23;
CParser.T__23 = 24;
CParser.T__24 = 25;
CParser.T__25 = 26;
CParser.MUL = 27;
CParser.DIV = 28;
CParser.ADD = 29;
CParser.SUB = 30;
CParser.MOD = 31;
CParser.LOGICAL_AND = 32;
CParser.LOGICAL_OR = 33;
CParser.EQUALS = 34;
CParser.LESS = 35;
CParser.LESS_EQUAL = 36;
CParser.GREATER = 37;
CParser.GREATER_EQUAL = 38;
CParser.POSTFIX_ADD = 39;
CParser.WHITESPACE = 40;
CParser.DECIMAL = 41;
CParser.FRACTION = 42;
CParser.Identifier = 43;
CParser.RULE_declarationSpecifiers = 0;
CParser.RULE_typeSpecifier = 1;
CParser.RULE_typeQualifier = 2;
CParser.RULE_declarationSpecifier = 3;
CParser.RULE_declaration = 4;
CParser.RULE_initialization = 5;
CParser.RULE_assignmentOperator = 6;
CParser.RULE_assignment = 7;
CParser.RULE_expression = 8;
CParser.RULE_expressionStatement = 9;
CParser.RULE_blockItem = 10;
CParser.RULE_blockItemList = 11;
CParser.RULE_program = 12;
// tslint:disable:no-trailing-whitespace
CParser.ruleNames = [
    "declarationSpecifiers", "typeSpecifier", "typeQualifier", "declarationSpecifier",
    "declaration", "initialization", "assignmentOperator", "assignment", "expression",
    "expressionStatement", "blockItem", "blockItemList", "program",
];
CParser._LITERAL_NAMES = [
    undefined, "'void'", "'char'", "'short'", "'int'", "'long'", "'float'",
    "'double'", "'signed'", "'unsigned'", "'const'", "'restrict'", "'volatile'",
    "'='", "';'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='",
    "'&='", "'^='", "'|='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", "'%'",
    "'&&'", "'||'", "'=='", "'<'", "'<='", "'>'", "'>='", "'++'",
];
CParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "MUL",
    "DIV", "ADD", "SUB", "MOD", "LOGICAL_AND", "LOGICAL_OR", "EQUALS", "LESS",
    "LESS_EQUAL", "GREATER", "GREATER_EQUAL", "POSTFIX_ADD", "WHITESPACE",
    "DECIMAL", "FRACTION", "Identifier",
];
CParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CParser._LITERAL_NAMES, CParser._SYMBOLIC_NAMES, []);
CParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\x7F\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x03\x02\x06\x02\x1E\n\x02\r\x02\x0E\x02\x1F\x03\x03\x03\x03" +
    "\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05(\n\x05\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
    "\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x05\nC\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x07\ni\n\n\f\n\x0E\nl\v\n\x03\v\x05\vo\n\v\x03\v\x03\v" +
    "\x03\f\x03\f\x03\f\x05\fv\n\f\x03\r\x06\ry\n\r\r\r\x0E\rz\x03\x0E\x03" +
    "\x0E\x03\x0E\x02\x02\x03\x12\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
    "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x05\x03" +
    "\x02\x03\v\x03\x02\f\x0E\x04\x02\x0F\x0F\x11\x1A\x02\x87\x02\x1D\x03\x02" +
    "\x02\x02\x04!\x03\x02\x02\x02\x06#\x03\x02\x02\x02\b\'\x03\x02\x02\x02" +
    "\n)\x03\x02\x02\x02\f/\x03\x02\x02\x02\x0E3\x03\x02\x02\x02\x105\x03\x02" +
    "\x02\x02\x12B\x03\x02\x02\x02\x14n\x03\x02\x02\x02\x16u\x03\x02\x02\x02" +
    "\x18x\x03\x02\x02\x02\x1A|\x03\x02\x02\x02\x1C\x1E\x05\b\x05\x02\x1D\x1C" +
    "\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F " +
    "\x03\x02\x02\x02 \x03\x03\x02\x02\x02!\"\t\x02\x02\x02\"\x05\x03\x02\x02" +
    "\x02#$\t\x03\x02\x02$\x07\x03\x02\x02\x02%(\x05\x04\x03\x02&(\x05\x06" +
    "\x04\x02\'%\x03\x02\x02\x02\'&\x03\x02\x02\x02(\t\x03\x02\x02\x02)*\x05" +
    "\x02\x02\x02*+\x07-\x02\x02+,\x07\x0F\x02\x02,-\x05\x12\n\x02-.\x07\x10" +
    "\x02\x02.\v\x03\x02\x02\x02/0\x05\x02\x02\x0201\x07-\x02\x0212\x07\x10" +
    "\x02\x022\r\x03\x02\x02\x0234\t\x04\x02\x024\x0F\x03\x02\x02\x0256\x07" +
    "-\x02\x0267\x05\x0E\b\x0278\x05\x12\n\x028\x11\x03\x02\x02\x029:\b\n\x01" +
    "\x02:C\x07+\x02\x02;C\x07,\x02\x02<C\x07-\x02\x02=>\x07\x1B\x02\x02>?" +
    "\x05\x12\n\x02?@\x07\x1C\x02\x02@C\x03\x02\x02\x02AC\x05\x10\t\x02B9\x03" +
    "\x02\x02\x02B;\x03\x02\x02\x02B<\x03\x02\x02\x02B=\x03\x02\x02\x02BA\x03" +
    "\x02\x02\x02Cj\x03\x02\x02\x02DE\f\x0F\x02\x02EF\x07\x1D\x02\x02Fi\x05" +
    "\x12\n\x10GH\f\x0E\x02\x02HI\x07\x1E\x02\x02Ii\x05\x12\n\x0FJK\f\r\x02" +
    "\x02KL\x07\x1F\x02\x02Li\x05\x12\n\x0EMN\f\f\x02\x02NO\x07 \x02\x02Oi" +
    "\x05\x12\n\rPQ\f\v\x02\x02QR\x07!\x02\x02Ri\x05\x12\n\fST\f\n\x02\x02" +
    "TU\x07$\x02\x02Ui\x05\x12\n\vVW\f\t\x02\x02WX\x07\'\x02\x02Xi\x05\x12" +
    "\n\nYZ\f\b\x02\x02Z[\x07(\x02\x02[i\x05\x12\n\t\\]\f\x07\x02\x02]^\x07" +
    "%\x02\x02^i\x05\x12\n\b_`\f\x06\x02\x02`a\x07&\x02\x02ai\x05\x12\n\x07" +
    "bc\f\x05\x02\x02cd\x07\"\x02\x02di\x05\x12\n\x06ef\f\x04\x02\x02fg\x07" +
    "#\x02\x02gi\x05\x12\n\x05hD\x03\x02\x02\x02hG\x03\x02\x02\x02hJ\x03\x02" +
    "\x02\x02hM\x03\x02\x02\x02hP\x03\x02\x02\x02hS\x03\x02\x02\x02hV\x03\x02" +
    "\x02\x02hY\x03\x02\x02\x02h\\\x03\x02\x02\x02h_\x03\x02\x02\x02hb\x03" +
    "\x02\x02\x02he\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03" +
    "\x02\x02\x02k\x13\x03\x02\x02\x02lj\x03\x02\x02\x02mo\x05\x12\n\x02nm" +
    "\x03\x02\x02\x02no\x03\x02\x02\x02op\x03\x02\x02\x02pq\x07\x10\x02\x02" +
    "q\x15\x03\x02\x02\x02rv\x05\x14\v\x02sv\x05\n\x06\x02tv\x05\f\x07\x02" +
    "ur\x03\x02\x02\x02us\x03\x02\x02\x02ut\x03\x02\x02\x02v\x17\x03\x02\x02" +
    "\x02wy\x05\x16\f\x02xw\x03\x02\x02\x02yz\x03\x02\x02\x02zx\x03\x02\x02" +
    "\x02z{\x03\x02\x02\x02{\x19\x03\x02\x02\x02|}\x05\x18\r\x02}\x1B\x03\x02" +
    "\x02\x02\n\x1F\'Bhjnuz";
exports.CParser = CParser;
class DeclarationSpecifiersContext extends ParserRuleContext_1.ParserRuleContext {
    declarationSpecifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(DeclarationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, DeclarationSpecifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_declarationSpecifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclarationSpecifiers) {
            listener.enterDeclarationSpecifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclarationSpecifiers) {
            listener.exitDeclarationSpecifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclarationSpecifiers) {
            return visitor.visitDeclarationSpecifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationSpecifiersContext = DeclarationSpecifiersContext;
class TypeSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_typeSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeSpecifier) {
            listener.enterTypeSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeSpecifier) {
            listener.exitTypeSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeSpecifier) {
            return visitor.visitTypeSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeSpecifierContext = TypeSpecifierContext;
class TypeQualifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_typeQualifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeQualifier) {
            listener.enterTypeQualifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeQualifier) {
            listener.exitTypeQualifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeQualifier) {
            return visitor.visitTypeQualifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeQualifierContext = TypeQualifierContext;
class DeclarationSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    typeSpecifier() {
        return this.tryGetRuleContext(0, TypeSpecifierContext);
    }
    typeQualifier() {
        return this.tryGetRuleContext(0, TypeQualifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_declarationSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclarationSpecifier) {
            listener.enterDeclarationSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclarationSpecifier) {
            listener.exitDeclarationSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclarationSpecifier) {
            return visitor.visitDeclarationSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationSpecifierContext = DeclarationSpecifierContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    Identifier() { return this.getToken(CParser.Identifier, 0); }
    declarationSpecifiers() {
        return this.getRuleContext(0, DeclarationSpecifiersContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class InitializationContext extends ParserRuleContext_1.ParserRuleContext {
    Identifier() { return this.getToken(CParser.Identifier, 0); }
    declarationSpecifiers() {
        return this.getRuleContext(0, DeclarationSpecifiersContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_initialization; }
    // @Override
    enterRule(listener) {
        if (listener.enterInitialization) {
            listener.enterInitialization(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInitialization) {
            listener.exitInitialization(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInitialization) {
            return visitor.visitInitialization(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InitializationContext = InitializationContext;
class AssignmentOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_assignmentOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentOperatorContext = AssignmentOperatorContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    Identifier() { return this.getToken(CParser.Identifier, 0); }
    assignmentOperator() {
        return this.getRuleContext(0, AssignmentOperatorContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_assignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class DecimalContext extends ExpressionContext {
    DECIMAL() { return this.getToken(CParser.DECIMAL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDecimal) {
            listener.enterDecimal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecimal) {
            listener.exitDecimal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecimal) {
            return visitor.visitDecimal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecimalContext = DecimalContext;
class FractionContext extends ExpressionContext {
    FRACTION() { return this.getToken(CParser.FRACTION, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFraction) {
            listener.enterFraction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFraction) {
            listener.exitFraction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFraction) {
            return visitor.visitFraction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FractionContext = FractionContext;
class IdentifierContext extends ExpressionContext {
    Identifier() { return this.getToken(CParser.Identifier, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class ParenthesesContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesesContext = ParenthesesContext;
class MultiplicationContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MUL() { return this.getToken(CParser.MUL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplication) {
            listener.enterMultiplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplication) {
            listener.exitMultiplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplication) {
            return visitor.visitMultiplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicationContext = MultiplicationContext;
class DivisionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    DIV() { return this.getToken(CParser.DIV, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDivision) {
            listener.enterDivision(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDivision) {
            listener.exitDivision(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDivision) {
            return visitor.visitDivision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DivisionContext = DivisionContext;
class AdditionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ADD() { return this.getToken(CParser.ADD, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAddition) {
            listener.enterAddition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAddition) {
            listener.exitAddition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAddition) {
            return visitor.visitAddition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditionContext = AdditionContext;
class SubtractionContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    SUB() { return this.getToken(CParser.SUB, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSubtraction) {
            listener.enterSubtraction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSubtraction) {
            listener.exitSubtraction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubtraction) {
            return visitor.visitSubtraction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubtractionContext = SubtractionContext;
class ModularContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MOD() { return this.getToken(CParser.MOD, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterModular) {
            listener.enterModular(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModular) {
            listener.exitModular(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModular) {
            return visitor.visitModular(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModularContext = ModularContext;
class EqualContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    EQUALS() { return this.getToken(CParser.EQUALS, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterEqual) {
            listener.enterEqual(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqual) {
            listener.exitEqual(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqual) {
            return visitor.visitEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualContext = EqualContext;
class GreaterContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    GREATER() { return this.getToken(CParser.GREATER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGreater) {
            listener.enterGreater(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGreater) {
            listener.exitGreater(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGreater) {
            return visitor.visitGreater(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GreaterContext = GreaterContext;
class GreaterEqualContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    GREATER_EQUAL() { return this.getToken(CParser.GREATER_EQUAL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterGreaterEqual) {
            listener.enterGreaterEqual(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGreaterEqual) {
            listener.exitGreaterEqual(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGreaterEqual) {
            return visitor.visitGreaterEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GreaterEqualContext = GreaterEqualContext;
class LessContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LESS() { return this.getToken(CParser.LESS, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLess) {
            listener.enterLess(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLess) {
            listener.exitLess(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLess) {
            return visitor.visitLess(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LessContext = LessContext;
class LessEqualContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LESS_EQUAL() { return this.getToken(CParser.LESS_EQUAL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLessEqual) {
            listener.enterLessEqual(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLessEqual) {
            listener.exitLessEqual(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLessEqual) {
            return visitor.visitLessEqual(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LessEqualContext = LessEqualContext;
class LogicalAndContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LOGICAL_AND() { return this.getToken(CParser.LOGICAL_AND, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLogicalAnd) {
            listener.enterLogicalAnd(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLogicalAnd) {
            listener.exitLogicalAnd(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalAnd) {
            return visitor.visitLogicalAnd(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogicalAndContext = LogicalAndContext;
class LogicalOrContext extends ExpressionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LOGICAL_OR() { return this.getToken(CParser.LOGICAL_OR, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLogicalOr) {
            listener.enterLogicalOr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLogicalOr) {
            listener.exitLogicalOr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalOr) {
            return visitor.visitLogicalOr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogicalOrContext = LogicalOrContext;
class AssignmentExpressionContext extends ExpressionContext {
    assignment() {
        return this.getRuleContext(0, AssignmentContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentExpressionContext = AssignmentExpressionContext;
class ExpressionStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_expressionStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionStatementContext = ExpressionStatementContext;
class BlockItemContext extends ParserRuleContext_1.ParserRuleContext {
    expressionStatement() {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    }
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    initialization() {
        return this.tryGetRuleContext(0, InitializationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_blockItem; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockItem) {
            listener.enterBlockItem(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockItem) {
            listener.exitBlockItem(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockItem) {
            return visitor.visitBlockItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockItemContext = BlockItemContext;
class BlockItemListContext extends ParserRuleContext_1.ParserRuleContext {
    blockItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockItemContext);
        }
        else {
            return this.getRuleContext(i, BlockItemContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_blockItemList; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlockItemList) {
            listener.enterBlockItemList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlockItemList) {
            listener.exitBlockItemList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlockItemList) {
            return visitor.visitBlockItemList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockItemListContext = BlockItemListContext;
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    blockItemList() {
        return this.getRuleContext(0, BlockItemListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return CParser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
//# sourceMappingURL=CParser.js.map