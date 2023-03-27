import { CLexer } from '../lang/CLexer'

import {
  AdditionContext,
  AssignmentContext, CompoundStatementContext, ConditionalStatementContext,
  CParser,
  DecimalContext,
  DeclarationContext,
  DivisionContext,
  EqualContext,
  ExpressionContext,
  ExpressionStatementContext,
  FractionContext,
  GreaterContext,
  GreaterEqualContext,
  IdentifierContext,
  LessContext,
  LessEqualContext,
  LogicalAndContext,
  LogicalOrContext,
  ModularContext,
  MultiplicationContext,
  ProgramContext,
  SubtractionContext,
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

  visitAddition(ctx: AdditionContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '+',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitSubtraction(ctx: SubtractionContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '-',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitMultiplication(ctx: MultiplicationContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '*',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitDivision(ctx: DivisionContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '/',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitModular(ctx: ModularContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '%',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitEqual(ctx: EqualContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '==',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitGreater(ctx: GreaterContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '>',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitGreaterEqual(ctx: GreaterEqualContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '>=',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitLess(ctx: LessContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '<',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitLessEqual(ctx: LessEqualContext): cTree.Expression {
    return {
      type: 'BinaryExpression',
      operator: '<=',
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
    for (let i = 0; i < node.childCount; i++) {
      types.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceType',
      value: types,
    }
  }
  visitTerminal(node: TerminalNode): cTree.Type {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): cTree.Type {
    throw new Error('invalid type')
  }
}

class StatementGenerator implements CVisitor<cTree.Statement> {
  visitDeclaration(ctx: DeclarationContext): cTree.VariableDeclaration {
    console.log("VISITING DECLARATION")
    const typeGenerator = new TypeGenerator()
    return {
      type: 'VariableDeclaration',
      typeSequence: typeGenerator.visitChildren(ctx._specifiers),
      identifier: {
        type: 'Identifier',
        name: ctx.Identifier().text,
      },
      value: new ExpressionGenerator().visit(ctx._value),
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

  visitConditionalStatement(ctx: ConditionalStatementContext): cTree.ConditionalStatement {
    console.log("VISITING CONDITIONAL STATEMENT")
    const statementGen = new StatementGenerator()
    const falsebody = ctx._falsebody ? statementGen.visit(ctx._falsebody) : null;
    return {
      type: 'ConditionalStatement',
      condition: new ExpressionGenerator().visit(ctx._condition),
      truebody: statementGen.visit(ctx._truebody),
      falsebody: falsebody,
    }
  }

  visitCompoundStatement(ctx: CompoundStatementContext): cTree.CompoundStatement {
    console.log('VISITING COMPOUND STATEMENT')
    return {
      type: "CompoundStatement",
      statements: new StatementGenerator().visitChildren(ctx._statements),
      //new StatementGenerator().visit(ctx._statements)
    }
  }


  visit(tree: ParseTree): cTree.Statement {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): cTree.SequenceStatement {
    const statements: cTree.Statement[] = []
    // if (node.childCount == 1) {
    //   return this.visit(node.getChild(0)) {
    //     type: 'SequenceStatement',
    //     this.visit(node.getChild(0)),
    //   }
    // }
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
  console.log('body', JSON.stringify(body, null, 2))
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
