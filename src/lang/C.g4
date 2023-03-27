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
NOT_EQUALS: '!=';
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
    : (typeQualifier | typeSpecifier)+;

typeSpecifier
    :   'void'
    |   'char'
    |   'unsigned char'
    |   'short'
    |   'unsigned short'
    |   'int'
    |   'unsigned int'
    |   'long'
    |   'unsigned long'
    |   'float'
    |   'double'
    ;

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
Pointer
    :   '*' 
        Nondigit
        (   Nondigit
        |   Digit
        )*
    ;
declarator : Pointer | Identifier;

initialization
    : specifiers=declarationSpecifiers declarator '=' value=expression ';'
    ;

declaration
    : specifiers=declarationSpecifiers declarator ';'
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
   | functionApplication                                        # Application
   | '(' inner=expression ')'                                   # Parentheses
   | left=expression operator=(ADD | SUB) right=expression      # Additive
   | left=expression operator=(MUL | DIV | MOD ) right=expression  # Multiplicative
   | left=expression operator=(GREATER | GREATER_EQUAL | LESS | LESS_EQUAL) right=expression # Relational	
   | left=expression operator=(EQUALS | NOT_EQUALS) right=expression  # Equality		
   | left=expression operator=LOGICAL_AND right=expression      # LogicalAnd
   | left=expression operator=LOGICAL_OR right=expression       # LogicalOr
   | assignment                                                 # AssignmentExpression
   ;

expressionStatement
    :   expression ';'
    ;
    
statement
    :   expressionStatement
    |   declaration
    |   initialization
    |   functionDeclaration
    ;

blockItemList
    :   statement+
    ;

compoundStatement
    :   '{' blockItemList? '}'
    ;

parameterDeclaration
    :   declarationSpecifiers declarator
    ;
    
parameterList
    :   parameterDeclaration (',' parameterDeclaration)*
    ;

functionDeclaration
    :   declarationSpecifiers? Identifier '(' parameterList ')' compoundStatement
    ;
functionApplication
    : Identifier '(' (declarator | DECIMAL | FRACTION) ')' ':'
    ;

program 
    : statement+;