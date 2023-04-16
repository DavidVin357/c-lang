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
STRING: '"' (.)*? '"';

COMMENT
    : '/*' .*? '*/' -> skip
;
LINE_COMMENT
    : '//' ~[\r\n]* -> skip
;
INCLUDE
    :
    '#include' ~[\r\n]* -> skip;

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
pointerPart
    : '(' inner=expression')' 
    | Identifier; 
    
pointer: 
    '*' ('*')* pointerPart;


initialization
    : qualifiers=typeQualifiers typeSpecifier Identifier ('=' casting? value=expression)? ';';

initializationListPart
    : Identifier ('=' casting? value=expression)?
    ;

initializationList
    : qualifiers=typeQualifiers typeSpecifier initializationListPart
      (',' initializationListPart)* ';'
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

// e.g., a++
postfixAssignment
    : Identifier operator=unaryAssignmentOperator
    ;

// e.g., ++a
prefixAssignment
    : operator=unaryAssignmentOperator Identifier
    ;

assignment:
    binaryAssignment | prefixAssignment | postfixAssignment;
    
assignmentList
    : assignment (',' assignment)*
    ; 

// e.g., *h = 43 or *(h++) = 23
pointerValueAssignment
    : pointer operator=binaryAssignmentOperator value=expression
    ;

array
    : '{' expression (',' expression)* '}'
    |  STRING
    ;

// int arr[5] = ... or int arr[] = ... 
arrayInitialization:
    qualifiers=typeQualifiers typeSpecifier Identifier ('[' expression ']' | '[]') '=' value=expression ';';

// int arr[5]; 
arrayDeclaration:
    qualifiers=typeQualifiers typeSpecifier Identifier '['size=expression']' ';';

// e.g. arr[2]
arrayAccess:
    name=Identifier '[' index=expression ']';

// arr[2] = ...
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

printf: 'printf' '(' expression (',' expression)*')' ';';


variableAccess
    : Identifier ('[' index=expression ']')?;   

expression
   : DECIMAL                                                    # Decimal
   | FRACTION                                                   # Fraction
   | CHAR                                                       # Char
   | STRING                                                     # String
   | Identifier                                                 # Identifier
   | functionApplication                                        # Application
   | '(' inner=expression ')'                                   # Parentheses
   | arrayAccess                                                # Access
   | operator=VAR_ADDRESS right=variableAccess                  # VarAddress
   | sizeof                                                     # SizeOfOperator
   | operator=(NOT | SUB) right=expression                      # Unary
   | left=expression operator=(ADD | SUB) right=expression      # Additive
   | left=expression operator=(MUL | DIV | MOD ) right=expression  # Multiplicative
   | left=expression operator=(GREATER | GREATER_EQUAL | LESS | LESS_EQUAL) right=expression # Relational
   | left=expression operator=(EQUALS | NOT_EQUALS) right=expression  # Equality
   | left=expression operator=LOGICAL_AND right=expression      # LogicalAnd
   | left=expression operator=LOGICAL_OR right=expression       # LogicalOr
   | pointer                                                    # PointerExpression 
   | assignmentList                                             # AssignmentExpression
   | arrayValueAssignment                                       # ArrayValueAssignmentExpression
   | pointerValueAssignment                                     # PointerValueAssignmentExpression
   | malloc                                                     # MallocExpression
   | free                                                       # FreeExpression
   | array                                                      # ArrayExpression 
   | COMMENT                                                    # CommentExpression
   | LINE_COMMENT                                               # LineCommentExpression
   | INCLUDE                                                    # IncludeExpression
   ;

expressionStatement
    :   expression ';'
    ;

conditionalStatement
    :   'if' '(' condition=expression ')' truebody=compoundStatement ('else' falsebody=compoundStatement)?
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
    :   '{' sequenceStatement '}'
    ;

sequenceStatement
    :   statement*
    ;

switchBodyList
    :   labeledStatement*
    ;

switchBodyStatement
    :   '{' switchBodyList '}'
    ;

returnStatement
    : 'return' expression ';';

loopInitial
    :
    initializationList | expressionStatement
    ;

forLoop
    :   'for' '(' initial=loopInitial condition=expression ';' action=expression ')' body=compoundStatement
    ;
doWhileLoop
    :   'do' body=compoundStatement 'while' '(' condition=expression ')'
    ;
whileLoop
    :   'while' '(' condition=expression ')' body=compoundStatement
    ;


statement
    :   expressionStatement
    |   arrayInitialization
    |   initialization
    |   initializationList
    |   conditionalStatement
    |   compoundStatement
    |   switchStatement
    |   labeledStatement
    |   switchBodyStatement
    |   functionDeclaration
    |   returnStatement
    |   breakStatement
    |   arrayDeclaration
    |   forLoop
    |   doWhileLoop
    |   whileLoop
    |   printHeap
    |   printStack
    |   printf
    ;

parameterDeclaration
    :   typeSpecifier Identifier '[]'?
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
