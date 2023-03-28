import { CLexer } from '../lang/CLexer'

import {
  AdditiveContext,
  AssignmentContext,
  CompoundStatementContext,
  CParser,
  DecimalContext,
  DeclarationContext,
  DeclarationSpecifierContext,
  DeclaratorContext,
  EqualityContext,
  ExpressionContext,
  ExpressionStatementContext,
  FractionContext,
  FunctionApplicationContext,
  FunctionDeclarationContext,
  IdentifierContext,
  InitializationContext,
  LogicalAndContext,
  LogicalOrContext,
  MultiplicativeContext,
  ParameterDeclarationContext,
  ParameterListContext,
  PointerContext,
  ProgramContext,
  RelationalContext,
  TypeQualifierContext,
  TypeSpecifierContext,
  VarAddressContext,
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
  visitPointer(ctx: PointerContext): cTree.Pointer {
    return {
      type: 'Pointer',
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

  visitVarAddress(ctx: VarAddressContext): cTree.VariableAddress {
    return {
      type: 'VariableAddress',
      name: ctx.Identifier().text,
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
      typeSpecifier: this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier()),
      typeQualifiers: this.typeGenerator.visitChildren(ctx._qualifiers),
      declarator: this.expressionGenerator.visitDeclarator(ctx.declarator()),
    }
  }

  visitInitialization(
    ctx: InitializationContext
  ): cTree.VariableInitialization {
    return {
      type: 'VariableInitialization',
      typeSpecifier: this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier()),
      typeQualifiers: this.typeGenerator.visitChildren(ctx._qualifiers),
      declarator: this.expressionGenerator.visitDeclarator(ctx.declarator()),
      value: this.expressionGenerator.visit(ctx._value),
    }
  }
  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): cTree.ParameterDeclaration {
    return {
      type: 'ParameterDeclaration',
      typeSpecifier: this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier()),
      // typeSequence: this.typeGenerator.visitChildren(
      //   ctx.declarationSpecifiers()
      // ),
      declarator: this.expressionGenerator.visitDeclarator(ctx.declarator()),
    }
  }

  visitCompoundStatement(ctx: CompoundStatementContext): cTree.Statement {
    const childStatements = ctx.blockItemList()?.children
    return {
      type: 'SequenceStatement',
      statements: childStatements
        ? childStatements.map((child) => this.visit(child))
        : [],
    }
  }

  visitFunctionDeclaration(
    ctx: FunctionDeclarationContext
  ): cTree.FunctionDeclaration {
    const name = ctx.Identifier().text

    const body = this.visit(ctx.compoundStatement())
    console.log(JSON.stringify(body, null, 2))
    const params = ctx.parameterList().children || []
    const formals = params.reduce((acc: cTree.Statement[], p) => {
      if (p.text !== ',') {
        acc.push(p.accept(this))
      }
      return acc
    }, [])
    return {
      type: 'FunctionDeclaration',
      name,
      body,
      formals,
    }
  }

  visitFunctionApplication(
    ctx: FunctionApplicationContext
  ): cTree.FunctionApplication {
    const name = ctx.Identifier().text

    const expressionArgs = ctx.argumentExpressionList().children || []
    console.log('expressionArgs', expressionArgs)
    return {
      type: 'FunctionApplication',
      name,
      args: expressionArgs.reduce((acc: Array<cTree.Expression>, expr) => {
        if (expr.text !== ',') {
          acc.push(this.expressionGenerator.visit(expr))
        }
        return acc
      }, []),
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
