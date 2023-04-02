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
VAR_ADDRESS: '&';
WHITESPACE: [ \r\n\t]+ -> skip;

DECIMAL: [0-9]+;
FRACTION: Fraction;
CHAR: '\'' Nondigit '\'';


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

typeSpecifier
 :   'void' '*'*
    |   'char' '*'*
    |   'unsigned char' '*'*
    |   'short' '*'*
    |   'unsigned short' '*'*
    |   'int' '*'*
    |   'unsigned int' '*'*
    |   'long' '*'*
    |   'unsigned long' '*'*
    |   'float' '*'*
    |   'double' '*'*
    ;

typeQualifier
    :   'const'
    |   'restrict'
    |   'volatile';

typeQualifiers: (typeQualifier+)?;

declarationSpecifier
    :   typeSpecifier
    |   typeQualifier;

Identifier
    :   Nondigit
        (   Nondigit
        |   Digit
        )*
    ;

// Pointer
//     :   '*'
//         Nondigit
//         (   Nondigit
//         |   Digit
//         )*
//     ;
pointer: 
    '*' ('*')* Identifier;

declarator :  Identifier;

declaration
    : qualifiers=typeQualifiers typeSpecifier declarator ';'
    ;

initialization
    : qualifiers=typeQualifiers typeSpecifier declarator '=' value=expression ';'
    ;

assignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|='
    ;

assignment
    : declarator operator=assignmentOperator value=expression;
pointerValueAssignment
    : pointer operator=assignmentOperator value=expression;
//arrayInitialization
//    :   typeSpecifier Identifier ('[' size=Digit ']')+ ';'
//    |   typeSpecifier Identifier '[' ']' '=' '{' elements=initializerList '}' ';'
//    |   'char' Identifier ('[' size=Digit ']')+ ';'
//    |   typeSpecifier '(' Pointer ')'
//    ;
//
//arrayAccess
//    :
//    ;

// initializerList
//     :   Digit
//     |   Digit ',' initializerList
//     ;

malloc
    : 'malloc' '(' size=expression ')'
    ;

sizeof
    : 'sizeof' '('  expr=expression | type=typeSpecifier ')'
    ;

expression
   : DECIMAL                                                    # Decimal
   | FRACTION                                                   # Fraction
   | CHAR                                                       # Char
   | Identifier                                                 # Identifier
   | functionApplication                                        # Application
   | '(' inner=expression ')'                                   # Parentheses
   | left=expression operator=(ADD | SUB) right=expression      # Additive
   | left=expression operator=(MUL | DIV | MOD ) right=expression  # Multiplicative
   | left=expression operator=(GREATER | GREATER_EQUAL | LESS | LESS_EQUAL) right=expression # Relational
   | left=expression operator=(EQUALS | NOT_EQUALS) right=expression  # Equality
   | left=expression operator=LOGICAL_AND right=expression      # LogicalAnd
   | left=expression operator=LOGICAL_OR right=expression       # LogicalOr
   | operator=VAR_ADDRESS right=Identifier                      # VarAddress
   | pointer                                                    # PointerExpression 
   | assignment                                                 # AssignmentExpression
   | pointerValueAssignment                                     # pointerValueAssignmentExpression
   | malloc                                                     # MallocExpression
   | sizeof                                                     # SizeOfOperator
   ;

expressionStatement
    :   expression ';'
    ;

conditionalStatement
    :   'if' '(' condition=expression ')' truebody=statement ('else' falsebody=statement)?
    ;

switchStatement
    :   'switch' '(' condition=expression ')' body=switchBodyStatement
    ;

labeledStatement
    :   'case' condition=expression ':' body=statement breakStatement?
    |   'default' ':' body=statement breakStatement?
    ;

breakStatement
    :   'break' ';'
    ;

compoundStatement
    :   '{' blockItemList? '}'
    ;

blockItemList
    :   statement+
    ;

switchBodyList
    :   labeledStatement*
    ;

switchBodyStatement
    :   '{' switchBodyList '}'
    ;

returnStatement
    : 'return' expression ';';
    
statement
    :   expressionStatement
    |   declaration
    |   initialization
    |   conditionalStatement
    |   compoundStatement
    |   switchStatement
    |   labeledStatement
    |   switchBodyStatement
    |   functionDeclaration
    |   returnStatement
    ;

parameterDeclaration
    :   typeSpecifier declarator
    ;

parameterList
    :   (parameterDeclaration (',' parameterDeclaration)*)?
    ;

functionDeclaration
    :   typeSpecifier Identifier '(' parameterList ')' compoundStatement
    ;

argumentExpressionList
    :   (expression (',' expression)*)?
    ;

functionApplication
    : Identifier '(' argumentExpressionList ')'
    ;

program 
    : functionDeclaration+;