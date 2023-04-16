export type Literal = {
  type: 'Literal'
  value: string | number | bigint
  raw?: string
  typeSpecifier?: string
}

export type Identifier = {
  type: 'Identifier'
  name: string
}

export type Pointer = {
  type: 'Pointer'
  name: string
}

export type PointerExpression = {
  type: 'PointerExpression'
  name: string
  multiplicity: number
}

export type VariableAddress = {
  type: 'VariableAddress'
  name: string
}

export type AssignmentOperator =
  | '='
  | '+='
  | '-='
  | '*='
  | '/='
  | '%='
  | '<<='
  | '>>='
  | '|='
  | '^='
  | '&='

export type BinaryOperator =
  | '=='
  | '!='
  | '<'
  | '<='
  | '>'
  | '>='
  | '<<'
  | '>>'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '|'
  | '||'
  | '^'
  | '&'
  | '&&'

export type BinaryAssignment = {
  type: 'BinaryAssignment'
  operator: string
  castingType: TypeSpecifier | null
  identifier: string
  value: Expression
}

export type UnaryAssignment = {
  type: 'PostfixAssignment' | 'PrefixAssignment'
  operator: string
  identifier: string
}

export type ArrayValueAssignment = {
  type: 'ArrayValueAssignment'
  left: arrayAccess
  index: Expression
  operator?: string
  castingType: TypeSpecifier | null
  identifier: string
  value: Expression
}

export type PointerValueAssignment = {
  type: 'PointerValueAssignment'
  operator?: string
  pointer: PointerExpression
  value: Expression
}

export type BinaryExpression = {
  type: 'BinaryExpression'
  operator?: string
  left: Expression
  right: Expression
}

export type PostfixExpression = {
  type: 'PostfixExpression'
  operator?: string
  left: Expression
}
export type PrefixExpression = {
  type: 'PrefixExpression'
  operator?: string
  right: Expression
}

export type ParenthesesExpression = {
  type: 'ParenthesesExpression'
  value: Expression
}

export type SequenceExpression = {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export type Malloc = {
  type: 'Malloc'
  size: Expression
}

export type Free = {
  type: 'Free'
  name: string
}

export type SizeOf = {
  type: 'SizeOf'
  arg: Expression | TypeSpecifier
}

export type PrintMemory = {
  type: 'PrintHeap' | 'PrintStack'
}

export type Print = {
  type: 'Print'
  value: Expression
}

export type cArray = {
  type: 'Array'
  value: Expression[]
  typeSpecifier?: string
  length: number
}

export type arrayAccess = {
  type: 'ArrayAccess'
  name: string
  index: Expression
}

export interface ExpressionMap {
  Literal: Literal
  Identifier: Identifier
  VariableAddress: VariableAddress
  BinaryAssignment: BinaryAssignment
  UnaryAssignment: UnaryAssignment
  BinaryExpression: BinaryExpression
  PostfixExpression: PostfixExpression
  PrefixExpression: PrefixExpression
  ParenthesesExpression: ParenthesesExpression
  FunctionApplication: FunctionApplication
  Malloc: Malloc
  SizeOf: SizeOf
  Free: Free
  SequenceExpression: SequenceExpression
  PointerExpression: PointerExpression
  PointerValueAssignment: PointerValueAssignment
  cArray: cArray
  arrayAccess: arrayAccess
  ArrayValueAssignment: ArrayValueAssignment
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export type TypeQualifier = {
  type: 'typeQualifier'
  value: string
}

export type TypeSpecifier = {
  type: 'typeSpecifier'
  value: string
}
export type SequenceType = {
  type: 'SequenceType'
  value: Array<Type>
}
export type Type = TypeQualifier | TypeSpecifier | SequenceType

// Statements
export type VariableDeclaration = {
  type: 'VariableDeclaration'
  typeSpecifier: TypeSpecifier
  typeQualifiers: SequenceType
  identifiers: string[]
}

export type VariableInitialization = {
  type: 'VariableInitialization'
  typeSpecifier: TypeSpecifier
  typeQualifiers: SequenceType
  castingType?: TypeSpecifier
  identifier: string
  value?: Expression
}

export type VariableInitializationList = {
  type: 'VariableInitializationList'
  initializations: VariableInitialization[]
}

export type ParameterDeclaration = {
  type: 'ParameterDeclaration'
  typeSpecifier: TypeSpecifier
  identifier: string
}

export type SequenceStatement = {
  type: 'SequenceStatement'
  statements: Array<Statement>
}

export type ExpressionStatement = {
  type: 'ExpressionStatement'
  expression: Expression
}

export type ConditionalStatement = {
  type: 'ConditionalStatement'
  condition: Expression
  truebody: Statement
  falsebody: Statement | null
}

export type SwitchStatement = {
  type: 'SwitchStatement'
  condition: Expression
  body: SwitchBodyStatement
}

export type SwitchBodyStatement = {
  type: 'SwitchBodyStatement'
  statements: Array<LabeledStatement>
}

export type LabeledStatement = {
  type: 'LabeledStatement'
  condition: Expression | null
  body: Statement
  hasBreak: boolean
}

export type ArrayDeclaration = {
  type: 'ArrayDeclaration'
  typeSpecifier: TypeSpecifier
  typeQualifiers: SequenceType
  identifier: string
  size: number
}

export type ForLoop = {
  type: 'ForLoop'
  initial: VariableInitialization
  condition: Expression
  action: Statement
  body: Statement
}

export type WhileLoop = {
  type: 'WhileLoop'
  condition: Expression
  body: Statement
}

export type DoWhileLoop = {
  type: 'DoWhileLoop'
  condition: Expression
  body: Statement
}

export interface StatementMap {
  VariableDeclaration: VariableDeclaration
  VariableInitialization: VariableInitialization
  VariableInitializationList: VariableInitializationList
  ExpressionStatement: ExpressionStatement
  SequenceStatement: SequenceStatement
  ConditionalStatement: ConditionalStatement
  SwitchStatement: SwitchStatement
  SwitchBodyStatement: SwitchBodyStatement
  LabeledStatement: LabeledStatement
  ParameterDeclaration: ParameterDeclaration
  ReturnStatement: ReturnStatement
  FunctionDeclaration: FunctionDeclaration
  ArrayDeclaration: ArrayDeclaration
  PrintMemory: PrintMemory
  Print: Print
  ForLoop: ForLoop
  DoWhileLoop: DoWhileLoop
  WhileLoop: WhileLoop
}

export type Statement = StatementMap[keyof StatementMap]

export type FunctionDeclaration = {
  type: 'FunctionDeclaration'
  typeSpecifier: string
  name: string
  body: SequenceStatement
  formals: Array<ParameterDeclaration>
}
export type FunctionStorage = {
  typeSpecifier: string
  body: SequenceStatement
  formals: {
    name: string
    typeSpecifier: string
  }[]
}
export type ReturnStatement = {
  type: 'ReturnStatement'
  value: Expression
}

export type FunctionApplication = {
  type: 'FunctionApplication'
  name: string
  args: Array<Expression>
}

export type Program = {
  type: 'Program'
  functionDeclarations: FunctionDeclaration[]
}

interface NodeMap {
  Expression: Expression
  Identifier: Identifier
  Literal: Literal
  TypeSpecifier: TypeSpecifier
  Statement: Statement
  Program: Program
}

export type Node = NodeMap[keyof NodeMap]
