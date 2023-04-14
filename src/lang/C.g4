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
UNARY_ADD: '++';
UNARY_SUB: '--';
NOT: '!';
VAR_ADDRESS: '&';
WHITESPACE: [ \r\n\t]+ -> skip;

DECIMAL: [0-9]+;
FRACTION: Fraction;

CHAR: '\'' . '\'';
STRING: '"' .*? '"';


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
    :   Nondigit (Nondigit|Digit)*
    ;

pointer: 
    '*' ('*')* Identifier;

declaration
    : qualifiers=typeQualifiers typeSpecifier Identifier ';'
    ;

initialization
    : qualifiers=typeQualifiers typeSpecifier Identifier '=' casting? value=expression ';'
    ;

binaryAssignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|='
    ;
unaryAssignmentOperator
    : UNARY_ADD | UNARY_SUB;

casting: '(' typeSpecifier ')';

binaryAssignment
    : Identifier operator=binaryAssignmentOperator casting? value=expression
    ;

postfixAssignment
    : Identifier operator=unaryAssignmentOperator
    ;

prefixAssignment
    : operator=unaryAssignmentOperator Identifier
    ;

assignment:
    binaryAssignment | prefixAssignment | postfixAssignment;
    
// e.g., *h = 43
pointerValueAssignment
    : pointer operator=binaryAssignmentOperator value=expression
    ;

array
    : '{' expression (',' expression)* '}'
    |  STRING
    ;

arrayInitialization:
    qualifiers=typeQualifiers typeSpecifier Identifier '['size=DECIMAL?']' '=' value=expression ';';

arrayDeclaration:
    qualifiers = typeQualifiers typeSpecifier Identifier '['size=DECIMAL']' ';';

arrayAccess:
    name=Identifier '[' index=expression ']';

arrayValueAssignment:
    arrayAccess operator=binaryAssignmentOperator casting? value=expression;

malloc
    : 'malloc' '(' size=expression ')'
    ;

sizeOfArgument:
    expression | typeSpecifier;
sizeof
    : 'sizeof' '(' arg=sizeOfArgument ')'
    ;

free: 
    'free' '(' Identifier ')';

printHeap: 'print_heap' '(' ')' ';';

printStack: 'print_stack' '(' ')' ';';

print: 'print' '(' value=expression ')' ';';

expression
   : DECIMAL                                                    # Decimal
   | FRACTION                                                   # Fraction
   | CHAR                                                       # Char
   | STRING                                                     # String
   | Identifier                                                 # Identifier
   | functionApplication                                        # Application
   | '(' inner=expression ')'                                   # Parentheses
   | arrayAccess                                                # Access
   | operator=VAR_ADDRESS right=Identifier                      # VarAddress
   | sizeof                                                     # SizeOfOperator
   | left=expression operator=(ADD | SUB) right=expression      # Additive
   | left=expression operator=(MUL | DIV | MOD ) right=expression  # Multiplicative
   | left=expression operator=(GREATER | GREATER_EQUAL | LESS | LESS_EQUAL) right=expression # Relational
   | left=expression operator=(EQUALS | NOT_EQUALS) right=expression  # Equality
   | left=expression operator=LOGICAL_AND right=expression      # LogicalAnd
   | left=expression operator=LOGICAL_OR right=expression       # LogicalOr
   | pointer                                                    # PointerExpression 
   | assignment                                                 # AssignmentExpression
   | arrayValueAssignment                                       # ArrayValueAssignmentExpression
   | pointerValueAssignment                                     # PointerValueAssignmentExpression
   | malloc                                                     # MallocExpression
   | free                                                       # FreeExpression
   | array                                                      # ArrayExpression 
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

forLoop
    :   'for' '(' initial=initialization condition=expression ';' action=statement ')' body=statement
    ;
doWhileLoop
    :   'do' body=statement 'while' '(' condition=expression ')'
    ;
whileLoop
    :   'while' '(' condition=expression ')' body=statement
    ;
    
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
    |   arrayInitialization
    |   arrayDeclaration
    |   forLoop
    |   doWhileLoop
    |   whileLoop
    |   printHeap
    |   printStack
    |   print
    ;

parameterDeclaration
    :   typeSpecifier Identifier
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
