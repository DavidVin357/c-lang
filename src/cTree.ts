export type Literal = {
  type: 'Literal'
  value: string | number
  raw?: string | undefined
}

export type Identifier = {
  type: 'Identifier'
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
  operator: string
  name: string
  value: Expression
}

export type BinaryExpression = {
  type: 'BinaryExpression'
  operator: BinaryOperator
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
  AssignmentExpression: AssignmentExpression
  BinaryExpression: BinaryExpression
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

// Statements
export type VariableDeclaration = {
  type: 'VariableDeclaration'
  typeSequence: SequenceType
  identifier: Identifier
  value: any
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

export type ConditionalStatement = {
  type: 'ConditionalStatement'
  condition: Expression
  truebody: Statement
  falsebody: Statement | null
}

export type CompoundStatement = {
  type: 'CompoundStatement'
  statements: SequenceStatement
}

export interface StatementMap {
  VariableDeclaration: VariableDeclaration
  ExpressionStatement: ExpressionStatement
  SequenceStatement: SequenceStatement
  ConditionalStatement: ConditionalStatement
  CompoundStatement: CompoundStatement
}

export type Statement = StatementMap[keyof StatementMap]

export type Program = {
  type: 'Program'
  body: Array<Statement>
}

interface NodeMap {
  Expression: Expression
  Identifier: Identifier
  Literal: Literal
  Statement: Statement
  Program: Program
}

export type Node = NodeMap[keyof NodeMap]
