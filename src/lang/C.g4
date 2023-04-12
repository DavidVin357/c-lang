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
CHAR: '\'' (Digit|Nondigit|WHITESPACE) '\'';
STRING: '"' (Digit|Nondigit|WHITESPACE)+ '"';


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

assignmentOperator
    :   '=' | '*=' | '/=' | '%=' | '+=' | '-=' | '<<=' | '>>=' | '&=' | '^=' | '|='
    ;
casting: '(' typeSpecifier ')';

assignment
    : Identifier operator=assignmentOperator casting? value=expression
    ;

// e.g., *h = 43
pointerValueAssignment
    : pointer operator=assignmentOperator value=expression
    ;

array
    : '{' expression (',' expression)* '}'
    |  STRING
    ;

arrayInitialization:
    qualifiers=typeQualifiers typeSpecifier Identifier '['size=DECIMAL']' '=' value=expression ';';

arrayDeclaration:
    qualifiers = typeQualifiers typeSpecifier Identifier '['size=DECIMAL']' ';';

arrayAccess:
    Identifier '[' DECIMAL ']';

arrayAssignment:
    arrayAccess operator=assignmentOperator casting? value=expression;

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

expression
   : DECIMAL                                                    # Decimal
   | FRACTION                                                   # Fraction
   | CHAR                                                       # Char
   | STRING                                                     # String
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
   | arrayAssignment                                            # ArrayAssignmentExpression
   | pointerValueAssignment                                     # PointerValueAssignmentExpression
   | malloc                                                     # MallocExpression
   | sizeof                                                     # SizeOfOperator
   | free                                                       # FreeExpression
   | array                                                      # ArrayExpression 
   | arrayAccess                                                # Access
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
    :   'for' '(' initial=initialization condition=expression ';' incr=assignment ')' body=statement
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
    |   printHeap
    |   forLoop
    |   doWhileLoop
    |   whileLoop
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
