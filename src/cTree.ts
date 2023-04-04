import {ArrayAccessContext} from "./lang/CParser";

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

export type PointerExpression = {
  type: 'PointerExpression'
  name: string
  multiplicity: number
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

export type Assignment = {
  type: 'Assignment'
  operator?: string
  castingType: TypeSpecifier | null
  identifier: string
  value: Expression
}

export type ArrayAssignment = {
  type: 'ArrayAssignment'
  left: arrayAccess
  index: number
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

export type SequenceExpression = {
  type: 'SequenceExpression'
  expressions: Array<Expression>
}

export type Malloc = {
  type: 'Malloc'
  size: Expression
}

export type SizeOf = {
  type: 'SizeOf'
  arg: Expression | TypeSpecifier
}

export type cArray = {
  type: 'Array'
  value: Expression[]
}

export type arrayAccess = {
  type: 'ArrayAccess'
  name: string
  index: number
}

export interface ExpressionMap {
  Literal: Literal
  Identifier: Identifier
  Declarator: Declarator
  VariableAddress: VariableAddress
  Assignment: Assignment
  BinaryExpression: BinaryExpression
  FunctionApplication: FunctionApplication
  Malloc: Malloc
  SizeOf: SizeOf
  SequenceExpression: SequenceExpression
  PointerExpression: PointerExpression
  PointerValueAssignment: PointerValueAssignment
  cArray: cArray
  arrayAccess: arrayAccess
  arrayAssignment: ArrayAssignment

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
  identifier: string
}

export type VariableInitialization = {
  type: 'VariableInitialization'
  typeSpecifier: TypeSpecifier
  typeQualifiers: SequenceType
  castingType: TypeSpecifier | null
  identifier: string
  value: Expression
}

export type ParameterDeclaration = {
  type: 'ParameterDeclaration'
  typeSpecifier: TypeSpecifier
  identifier: string
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

export interface StatementMap {
  VariableDeclaration: VariableDeclaration
  VariableInitialization: VariableInitialization
  ExpressionStatement: ExpressionStatement
  SequenceStatement: SequenceStatement
  ConditionalStatement: ConditionalStatement
  SwitchStatement: SwitchStatement
  SwitchBodyStatement: SwitchBodyStatement
  LabeledStatement: LabeledStatement
  ParameterDeclaration: ParameterDeclaration
  ReturnStatement: ReturnStatement
  FunctionDeclaration: FunctionDeclaration
  Block: Block
  ArrayDeclaration: ArrayDeclaration
}

export type Statement = StatementMap[keyof StatementMap]

export type Block = {
  type: 'Block'
  body: SequenceStatement
}

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
