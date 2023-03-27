grammar C;

/*
 * Tokens (terminal)
 */
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
MOD: '%';
LOGICAL_AND: '&&';
LOGICAL_OR: '||';
EQUALS: '==';
LESS : '<';
LESS_EQUAL : '<=';
GREATER : '>';
GREATER_EQUAL : '>=';
POSTFIX_ADD: '++';

WHITESPACE: [ \r\n\t]+ -> skip;
DECIMAL: [0-9]+;
FRACTION: Fraction;



fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]+
    ;

fragment
Fraction
    :   Digit? '.' Digit
    |   Digit '.'
    ;

declarationSpecifiers
    : declarationSpecifier+;

typeSpecifier
    :   'void'
    |   'char'
    |   'short'
    |   'int'
    |   'long'
    |   'float'
    |   'double'
    |   'signed'
    |   'unsigned';

typeQualifier
    :   'const'
    |   'restrict'
    |   'volatile';

declarationSpecifier
    :   typeSpecifier
    |   typeQualifier;

Identifier
    :   Nondigit
        (   Nondigit
        |   Digit
        )*
    ;

declaration
    : specifiers=declarationSpecifiers Identifier '=' value=expression ';'
    ;

initialization
    : specifiers=declarationSpecifiers Identifier ';'
    ;

assignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|='
    ;

assignment
    : Identifier operator=assignmentOperator value=expression;


expression
   : DECIMAL                                                    # Decimal
   | FRACTION                                                   # Fraction
   | Identifier                                                 # Identifier
   | '(' inner=expression ')'                                   # Parentheses
   | left=expression operator=ADD right=expression              # Addition
   | left=expression operator=SUB right=expression              # Subtraction
   | left=expression operator=MUL right=expression              # Multiplication
   | left=expression operator=DIV right=expression              # Division
   | left=expression operator=MOD right=expression              # Modular
   | left=expression operator=EQUALS right=expression           # Equal
   | left=expression operator=GREATER right=expression          # Greater
   | left=expression operator=GREATER_EQUAL right=expression    # GreaterEqual
   | left=expression operator=LESS right=expression             # Less 
   | left=expression operator=LESS_EQUAL right=expression       # LessEqual
   | left=expression operator=LOGICAL_AND right=expression      # LogicalAnd
   | left=expression operator=LOGICAL_OR right=expression       # LogicalOr
   | assignment                                                 # AssignmentExpression
   ;

expressionStatement
    :   expression ';'
    ;

conditionalStatement
    :   'if' '(' condition=expression ')' truebody=statement ('else' falsebody=statement)?
    ;

compoundStatement
    :   '{' statements=statement? '}'
    ;
    
statement
    :   expressionStatement
    |   declaration
    |   conditionalStatement
    |   compoundStatement
    ;

program 
    : statement+;