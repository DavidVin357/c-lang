import { CLexer } from '../lang/CLexer'

import {
  AdditiveContext,
  AssignmentContext,
  CompoundStatementContext,
  CParser,
  DecimalContext,
  DeclarationContext,
  DeclaratorContext,
  EqualityContext,
  ExpressionContext,
  ExpressionStatementContext,
  FractionContext,
  FunctionDeclarationContext,
  IdentifierContext,
  InitializationContext,
  LogicalAndContext,
  LogicalOrContext,
  MultiplicativeContext,
  ParameterDeclarationContext,
  ProgramContext,
  RelationalContext,
  TypeQualifierContext,
  TypeSpecifierContext,
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'

import * as cTree from '../cTree'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { CharStreams, CommonTokenStream } from 'antlr4ts'

class ExpressionGenerator implements CVisitor<cTree.Expression> {
  visitDecimal(ctx: DecimalContext): cTree.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
    }
  }

  visitFraction(ctx: FractionContext): cTree.Expression {
    return {
      type: 'Literal',
      value: parseFloat(ctx.text),
      raw: ctx.text,
    }
  }

  visitIdentifier(ctx: IdentifierContext): cTree.Expression {
    return {
      type: 'Identifier',
      name: ctx.text,
    }
  }

  visitDeclarator(ctx: DeclaratorContext): cTree.Declarator {
    const name = ctx.text.replace('*', '')
    return {
      type: ctx.text.startsWith('*') ? 'Pointer' : 'Identifier',
      name,
    }
  }

  visitAdditive(ctx: AdditiveContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitMultiplicative(ctx: MultiplicativeContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }
  visitEqual(ctx: EqualityContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitGreater(ctx: RelationalContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }
  visitLogicalAnd(ctx: LogicalAndContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '&&',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitLogicalOr(ctx: LogicalOrContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '||',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitAssignment(ctx: AssignmentContext): cTree.Expression {
    return {
      type: 'AssignmentExpression',
      name: ctx.Identifier().text,
      operator: ctx._operator.text,
      value: this.visit(ctx._value),
    }
  }

  visit(tree: ParseTree): cTree.Expression {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): cTree.Expression {
    const expressions: cTree.Expression[] = []
    if (node.childCount === 1) {
      return this.visit(node.getChild(0))
    }
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions,
    }
  }
  visitTerminal(node: TerminalNode): cTree.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): cTree.Expression {
    throw new Error('invalid expression')
  }
}

class TypeGenerator implements CVisitor<cTree.Type> {
  visitTypeQualifier(ctx: TypeQualifierContext): cTree.TypeQualifier {
    return { type: 'typeQualifier', value: ctx.text }
  }

  visitTypeSpecifier(ctx: TypeSpecifierContext): cTree.TypeSpecifier {
    return { type: 'typeSpecifier', value: ctx.text }
  }

  visit(tree: ParseTree): cTree.Type {
    return tree.accept(this)
  }
  visitChildren(node: RuleNode): cTree.SequenceType {
    const types: cTree.Type[] = []
    if (node.childCount == 1) {
      types.push(this.visit(node.getChild(0)))
    } else {
      for (let i = 0; i < node.childCount; i++) {
        types.push(node.getChild(i).accept(this))
      }
    }

    return {
      type: 'SequenceType',
      value: types,
    }
  }
  visitTerminal(node: TerminalNode): cTree.Type {
    console.log(node.text)
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): cTree.Type {
    throw new Error('invalid type')
  }
}

class StatementGenerator implements CVisitor<cTree.Statement> {
  typeGenerator = new TypeGenerator()
  expressionGenerator = new ExpressionGenerator()

  visitDeclaration(ctx: DeclarationContext): cTree.VariableDeclaration {
    return {
      type: 'VariableDeclaration',
      typeSequence: this.typeGenerator.visitChildren(ctx._specifiers),
      declarator: this.expressionGenerator.visitDeclarator(ctx.declarator()),
    }
  }

  visitInitialization(
    ctx: InitializationContext
  ): cTree.VariableInitialization {
    return {
      type: 'VariableInitialization',
      typeSequence: this.typeGenerator.visitChildren(ctx._specifiers),
      declarator: this.expressionGenerator.visitDeclarator(ctx.declarator()),
      value: this.typeGenerator.visit(ctx._value),
    }
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): cTree.ParameterDeclaration {
    return {
      type: 'ParameterDeclaration',
      typeSequence: this.typeGenerator.visitChildren(
        ctx.declarationSpecifiers()
      ),
      name: ctx.declarator().text,
    }
  }
  visitCompoundStatement(ctx: CompoundStatementContext): cTree.Statement {
    const childStatements = ctx.blockItemList()?.children
    return {
      type: 'SequenceStatement',
      statements: childStatements
        ? childStatements?.map((child) => child.accept(this))
        : [],
    }
  }

  visitFunctionDeclaration(
    ctx: FunctionDeclarationContext
  ): cTree.FunctionDeclaration {
    const name = ctx.Identifier().text
    console.log('name', name)

    const body = this.visit(ctx.compoundStatement())
    console.log('body', body)

    const params = ctx.parameterList().children
    const args = params ? params.map((child) => child.accept(this)) : []
    console.log('args', JSON.stringify(args, null, 2))

    return {
      type: 'FunctionDeclaration',
      name,
      body,
      args,
    }
  }
  visitExpressionStatement(
    ctx: ExpressionStatementContext
  ): cTree.ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: new ExpressionGenerator().visit(ctx.expression()),
    }
  }

  visit(tree: ParseTree): cTree.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): cTree.Statement {
    const statements: cTree.Statement[] = []
    if (node.childCount == 1) {
      return this.visit(node.getChild(0))
    }
    for (let i = 0; i < node.childCount; i++) {
      statements.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceStatement',
      statements,
    }
  }
  visitTerminal(node: TerminalNode): cTree.Statement {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): cTree.Statement {
    throw new Error('invalid statement')
  }
}

function convertExpression(expression: ExpressionContext): cTree.Expression {
  const generator = new ExpressionGenerator()
  return expression.accept(generator)
}

function convertProgram(program: ProgramContext): cTree.Program {
  const generator = new StatementGenerator()
  const children = program.children
  const body = children?.map((child) => child.accept(generator))
  return {
    type: 'Program',
    body: body || [],
  }
}

export function parse(source: string) {
  let program: cTree.Program | undefined

  const inputStream = CharStreams.fromString(source)
  const lexer = new CLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new CParser(tokenStream)
  parser.buildParseTree = true
  try {
    const tree = parser.program()
    program = convertProgram(tree)
    return program
  } catch (error) {
    throw error
  }
}
