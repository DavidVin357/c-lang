export type Literal = {
  type: 'Literal'
  value: string | number
  raw?: string | undefined
}

export type Identifier = {
  type: 'Identifier'
  name: string
}

export type Pointer = {
  type: 'Pointer'
  name: string
}

export type VariableAddress = {
  type: 'VariableAddress'
  name: string
}

export type Declarator = {
  type: 'Pointer' | 'Identifier'
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

export type AssignmentExpression = {
  type: 'AssignmentExpression'
  operator?: string
  name: string
  value: Expression
}

export type BinaryExpression = {
  type: 'BinaryExpression'
  operator?: string
  left: Expression
  right: Expression
}

export type SequenceExpression = {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export interface ExpressionMap {
  Literal: Literal
  Identifier: Identifier
  Declarator: Declarator
  VariableAddress: VariableAddress
  AssignmentExpression: AssignmentExpression
  BinaryExpression: BinaryExpression
  FunctionApplication: FunctionApplication
  SequenceExpression: SequenceExpression
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
// export interface TypeMap {
//   TypeQualifier: TypeQualifier
//   TypeSpecifier: TypeSpecifier
//   SequenceType: SequenceType
// }

// export type Type = TypeMap[keyof TypeMap]

// Statements
export type VariableDeclaration = {
  type: 'VariableDeclaration'
  typeSpecifier: TypeSpecifier
  typeQualifiers: SequenceType
  declarator: Declarator
}

export type VariableInitialization = {
  type: 'VariableInitialization'
  typeSpecifier: TypeSpecifier
  typeQualifiers: SequenceType
  declarator: Declarator
  value: any
}

export type ParameterDeclaration = {
  type: 'ParameterDeclaration'
  typeSpecifier: TypeSpecifier
  declarator: Declarator
}

export type Declaration = VariableDeclaration

export type SequenceStatement = {
  type: 'SequenceStatement'
  statements: Array<Statement>
}

export type ExpressionStatement = {
  type: 'ExpressionStatement'
  expression: Expression
}

export interface StatementMap {
  VariableDeclaration: VariableDeclaration
  VariableInitialization: VariableInitialization
  ParameterDeclaration: ParameterDeclaration
  ReturnStatement: ReturnStatement
  FunctionDeclaration: FunctionDeclaration
  ExpressionStatement: ExpressionStatement
  SequenceStatement: SequenceStatement
  Block: Block
}

export type Statement = StatementMap[keyof StatementMap]
export type Block = {
  type: 'Block'
  body: SequenceStatement
}
export type FunctionDeclaration = {
  type: 'FunctionDeclaration'
  name: string
  body: SequenceStatement
  formals: Array<ParameterDeclaration>
}
export type FunctionStorage = {
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
  Statement: Statement
  Program: Program
}

export type Node = NodeMap[keyof NodeMap]
