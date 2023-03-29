import { CLexer } from '../lang/CLexer'

import {
  AdditiveContext,
  AssignmentContext, CompoundStatementContext, ConditionalStatementContext,
  CParser,
  DecimalContext,
  DeclarationContext,
  DeclaratorContext,
  ExpressionContext,
  ExpressionStatementContext,
  FractionContext,
  IdentifierContext, LabeledStatementContext,
  LogicalAndContext,
  LogicalOrContext,
  ProgramContext,
  SwitchBodyStatementContext, SwitchStatementContext,
  TypeQualifierContext,
  TypeSpecifierContext,
  EqualityContext,
  FunctionApplicationContext,
  FunctionDeclarationContext,
  ReturnStatementContext,
  InitializationContext,
  MultiplicativeContext,
  ParameterDeclarationContext,
  PointerContext,
  RelationalContext,
  VarAddressContext,
  CharContext,
  MallocContext,
  SizeofContext,
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

  visitChar(ctx: CharContext): cTree.Expression {
    return {
      type: 'Literal',
      value: ctx.text.replace("'", '').charCodeAt(0),
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

  visitFunctionApplication(
      ctx: FunctionApplicationContext
  ): cTree.FunctionApplication {
    const name = ctx.Identifier().text
    const expressionArgs = ctx.argumentExpressionList().expression()
    const args = expressionArgs.map((ea) => this.visit(ea))

    return {
      type: 'FunctionApplication',
      name,
      args,
    }
  }
  visitMalloc(ctx: MallocContext): cTree.Malloc {
    return {
      type: 'Malloc',
      size: this.visit(ctx._size),
    }
  }

  visitSizeOf(ctx: SizeofContext): cTree.SizeOf {
    return {
      type: 'SizeOf',
      arg: ctx._expr
          ? this.visit(ctx._expr)
          : new TypeGenerator().visitTypeSpecifier(ctx._type),
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

  visitExpressionStatement(
    ctx: ExpressionStatementContext
  ): cTree.ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: new ExpressionGenerator().visit(ctx.expression()),
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

  visitCompoundStatement(ctx: CompoundStatementContext): cTree.SequenceStatement {
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

    const body = this.visitCompoundStatement(ctx.compoundStatement())
    const params = ctx.parameterList().parameterDeclaration()
    const formals = params.map((p) => this.visitParameterDeclaration(p))

    return {
      type: 'FunctionDeclaration',
      name,
      body,
      formals,
    }
  }

  visitReturnStatement(ctx: ReturnStatementContext): cTree.ReturnStatement {
    return {
      type: 'ReturnStatement',
      value: this.expressionGenerator.visit(ctx.expression()),
    }
  }

  visitSwitchStatement(ctx: SwitchStatementContext): cTree.SwitchStatement {
    return {
      type: 'SwitchStatement',
      condition: new ExpressionGenerator().visit(ctx._condition),
      body: this.visitSwitchBodyStatement(ctx._body)
    }
  }

  visitSwitchBodyStatement(ctx: SwitchBodyStatementContext): cTree.SwitchBodyStatement {
    const labeledStatements = ctx.switchBodyList().labeledStatement()
    return {
      type: "SwitchBodyStatement",
      statements: labeledStatements.map(ls => this.visitLabeledStatement(ls))
    }
  }

  visitLabeledStatement(ctx: LabeledStatementContext): cTree.LabeledStatement {
    return {
      type: "LabeledStatement",
      condition: ctx._condition ? new ExpressionGenerator().visit(ctx._condition) : null,
      body: new StatementGenerator().visit(ctx._body),
      hasBreak: !!ctx.breakStatement()
    }
  }

  visitConditionalStatement(ctx: ConditionalStatementContext): cTree.ConditionalStatement {
    const statementGen = new StatementGenerator()
    const falsebody = ctx._falsebody ? statementGen.visit(ctx._falsebody) : null;
    return {
      type: 'ConditionalStatement',
      condition: new ExpressionGenerator().visit(ctx._condition),
      truebody: statementGen.visit(ctx._truebody),
      falsebody: falsebody,
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
  const functions = program.functionDeclaration()
  // const body = children?.map((child) => child.accept(generator))
  return {
    type: 'Program',
    functionDeclarations: functions.map((f) =>
        new StatementGenerator().visitFunctionDeclaration(f)
    ),
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
