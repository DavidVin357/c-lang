import { CLexer } from '../lang/CLexer'

import {
  AdditiveContext,
  CompoundStatementContext,
  ConditionalStatementContext,
  CParser,
  DecimalContext,
  ExpressionStatementContext,
  FractionContext,
  IdentifierContext,
  LabeledStatementContext,
  LogicalAndContext,
  LogicalOrContext,
  ProgramContext,
  SwitchBodyStatementContext,
  SwitchStatementContext,
  TypeQualifierContext,
  TypeSpecifierContext,
  EqualityContext,
  FunctionApplicationContext,
  FunctionDeclarationContext,
  ReturnStatementContext,
  InitializationContext,
  MultiplicativeContext,
  ParameterDeclarationContext,
  RelationalContext,
  VarAddressContext,
  CharContext,
  MallocContext,
  SizeofContext,
  PointerContext,
  PointerValueAssignmentContext,
  ArrayInitializationContext,
  ArrayContext,
  ArrayAccessContext,
  ArrayDeclarationContext,
  ArrayValueAssignmentContext,
  ParenthesesContext,
  FreeContext,
  PrintHeapContext,
  StringContext,
  ForLoopContext,
  DoWhileLoopContext,
  WhileLoopContext,
  BinaryAssignmentContext,
  PostfixAssignmentContext,
  PrefixAssignmentContext,
  PrintStackContext,
  InitializationListContext,
  SequenceStatementContext,
  PrintfContext,
  LoopInitialContext,
  UnaryContext,
  BreakStatementContext,
  AssignmentListContext,
} from '../lang/CParser'
import { CVisitor } from '../lang/CVisitor'

import * as cTree from '../cTree'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { getTypeSize } from '../interpreter/helpers'
import { checkOperator } from '../errors/errors'

class ExpressionGenerator implements CVisitor<cTree.Expression> {
  typeGenerator = new TypeGenerator()

  // Primitives
  visitDecimal(ctx: DecimalContext): cTree.Literal {
    return {
      type: 'Literal',
      value: ctx.text.length < 16 ? parseInt(ctx.text) : BigInt(ctx.text),
      raw: ctx.text,
    }
  }

  visitFraction(ctx: FractionContext): cTree.Literal {
    return {
      type: 'Literal',
      value: parseFloat(ctx.text),
      raw: ctx.text,
    }
  }

  visitChar(ctx: CharContext): cTree.Literal {
    return {
      type: 'Literal',
      value: ctx.text.replace("'", '').charCodeAt(0),
      raw: ctx.text,
    }
  }

  // Functions and variables
  visitIdentifier(ctx: IdentifierContext): cTree.Identifier {
    return {
      type: 'Identifier',
      name: ctx.text,
    }
  }

  visitBinaryAssignment(ctx: BinaryAssignmentContext): cTree.BinaryAssignment {
    const castingType = ctx.casting()?.typeSpecifier()
    return {
      type: 'BinaryAssignment',
      identifier: ctx.Identifier().text,
      castingType: castingType
        ? this.typeGenerator.visitTypeSpecifier(castingType)
        : null,
      operator: ctx._operator.text,
      value: this.visit(ctx._value),
    }
  }

  visitPostfixAssignment(ctx: PostfixAssignmentContext): cTree.UnaryAssignment {
    return {
      type: 'PostfixAssignment',
      operator: ctx._operator.text,
      identifier: ctx.Identifier().text,
    }
  }

  visitPrefixAssignment(ctx: PrefixAssignmentContext): cTree.UnaryAssignment {
    return {
      type: 'PrefixAssignment',
      operator: ctx._operator.text,
      identifier: ctx.Identifier().text,
    }
  }

  visitAssignmentList(ctx: AssignmentListContext): cTree.AsignmentList {
    return {
      type: 'AssignmentList',
      assignments: ctx.assignment().map((a) => this.visit(a)),
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

  // Arrays
  visitArray(ctx: ArrayContext): cTree.cArray {
    return {
      type: 'Array',
      value: ctx.expression().map((e) => this.visit(e)),
      length: ctx.expression().length,
      typeSpecifier: '[]',
    }
  }

  visitArrayAccess(ctx: ArrayAccessContext): cTree.arrayAccess {
    if (!ctx._index.text || !ctx._name.text) {
      throw Error('Parsing error: array access')
    }
    return {
      type: 'ArrayAccess',
      name: ctx._name.text,
      index: this.visit(ctx._index),
    }
  }

  visitArrayValueAssignment(
    ctx: ArrayValueAssignmentContext
  ): cTree.ArrayValueAssignment {
    const castingType = ctx.casting()?.typeSpecifier()
    const left = this.visitArrayAccess(ctx.arrayAccess())
    return {
      left: left,
      type: 'ArrayValueAssignment',
      identifier: left.name,
      index: left.index,
      castingType: castingType
        ? this.typeGenerator.visitTypeSpecifier(castingType)
        : null,
      operator: ctx._operator.text,
      value: this.visit(ctx._value),
    }
  }

  visitString(ctx: StringContext): cTree.cArray {
    const str = ctx.STRING().text
    const charArr: cTree.Literal[] = str
      .replaceAll('"', '')
      .split('')
      .map((c) => ({
        type: 'Literal',
        value: c.charCodeAt(0),
        typeSpecifier: 'char',
        raw: c,
      }))

    charArr.push({
      type: 'Literal',
      value: 48,
      typeSpecifier: 'char',
      raw: '\0',
    })

    return {
      type: 'Array',
      value: charArr,
      typeSpecifier: 'char[]',
      length: str.length,
    }
  }

  // Binary operations
  visitAdditive(ctx: AdditiveContext): cTree.BinaryExpression {
    if (!ctx._operator.text) throw Error("Operator doesn't not exist")
    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitMultiplicative(ctx: MultiplicativeContext): cTree.Expression {
    if (!ctx._operator.text) throw Error("Operator doesn't not exist")

    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }
  visitEquality(ctx: EqualityContext): cTree.BinaryExpression {
    if (!ctx._operator.text) throw Error("Operator doesn't not exist")

    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitRelational(ctx: RelationalContext): cTree.BinaryExpression {
    if (!ctx._operator.text) throw Error("Operator doesn't not exist")

    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text,
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitParentheses(ctx: ParenthesesContext): cTree.ParenthesesExpression {
    return {
      type: 'ParenthesesExpression',
      value: this.visit(ctx._inner),
    }
  }

  visitLogicalAnd(ctx: LogicalAndContext): cTree.BinaryExpression {
    return {
      type: 'BinaryExpression',
      operator: '&&',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitLogicalOr(ctx: LogicalOrContext): cTree.BinaryExpression {
    return {
      type: 'BinaryExpression',
      operator: '||',
      left: this.visit(ctx._left),
      right: this.visit(ctx._right),
    }
  }

  visitUnary(ctx: UnaryContext): cTree.UnaryExpression {
    if (!ctx._operator.text) throw Error("Operator doesn't not exist")

    return {
      type: 'UnaryExpression',
      operator: ctx._operator.text,
      right: this.visit(ctx._right),
    }
  }

  // Memory management
  visitVarAddress(ctx: VarAddressContext): cTree.VariableAddress {
    const index = ctx.variableAccess()._index
    return {
      type: 'VariableAddress',
      name: ctx.variableAccess().Identifier().text,
      index: index
        ? this.visit(index)
        : {
            type: 'Literal',
            value: 0,
          },
    }
  }
  visitPointer(ctx: PointerContext): cTree.PointerExpression {
    const pointers = ctx.MUL()
    const name = ctx.pointerPart().Identifier()?.text
    const addressExpression = ctx.pointerPart()._inner
    const address = addressExpression && this.visit(addressExpression)

    return {
      type: 'PointerExpression',
      name,
      address,
      multiplicity: pointers.length,
    }
  }

  visitMalloc(ctx: MallocContext): cTree.Malloc {
    return {
      type: 'Malloc',
      size: this.visit(ctx._size),
    }
  }

  visitFree(ctx: FreeContext): cTree.Free {
    const name = ctx.Identifier().text
    return {
      type: 'Free',
      name,
    }
  }

  visitSizeof(ctx: SizeofContext): cTree.SizeOf {
    const expression = ctx._arg.expression()
    const typeSpecifier = ctx._arg.typeSpecifier()
    if (expression) {
      return {
        type: 'SizeOf',
        arg: this.visit(expression),
      }
    } else if (typeSpecifier) {
      return {
        type: 'SizeOf',
        arg: this.typeGenerator.visitTypeSpecifier(typeSpecifier),
      }
    } else {
      throw new Error('Only type or expression is accepted')
    }
  }

  visitPointerValueAssignment(
    ctx: PointerValueAssignmentContext
  ): cTree.Expression {
    return {
      type: 'PointerValueAssignment',
      pointer: this.visitPointer(ctx.pointer()),
      operator: ctx._operator.text,
      value: this.visit(ctx._value),
    }
  }

  // Visitor basics
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

  // Expression Statement
  visitExpressionStatement(
    ctx: ExpressionStatementContext
  ): cTree.ExpressionStatement {
    return {
      type: 'ExpressionStatement',
      expression: new ExpressionGenerator().visit(ctx.expression()),
    }
  }

  visitArrayDeclaration(ctx: ArrayDeclarationContext): cTree.ArrayDeclaration {
    return {
      type: 'ArrayDeclaration',
      typeSpecifier: {
        type: 'typeSpecifier',
        value:
          this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier()).value +
          '[]',
      },
      typeQualifiers: this.typeGenerator.visitChildren(ctx._qualifiers),
      identifier: ctx.Identifier().text,
      size: this.expressionGenerator.visit(ctx._size),
    }
  }

  visitInitialization(
    ctx: InitializationContext
  ): cTree.VariableInitialization {
    const castingType = ctx.casting()?.typeSpecifier()
    const typeSpecifier = this.typeGenerator.visitTypeSpecifier(
      ctx.typeSpecifier()
    )
    const typeQualifiers = this.typeGenerator.visitChildren(ctx._qualifiers)

    return {
      type: 'VariableInitialization',
      castingType:
        castingType && this.typeGenerator.visitTypeSpecifier(castingType),
      typeSpecifier,
      typeQualifiers,
      identifier: ctx.Identifier().text,
      value: ctx._value && this.expressionGenerator.visit(ctx._value),
    }
  }

  visitInitializationList(
    ctx: InitializationListContext
  ): cTree.VariableInitializationList {
    const typeSpecifier = this.typeGenerator.visitTypeSpecifier(
      ctx.typeSpecifier()
    )
    const typeQualifiers = this.typeGenerator.visitChildren(ctx._qualifiers)

    const initializations: cTree.VariableInitialization[] = ctx
      .initializationListPart()
      .map((i) => {
        const expression = i.expression()
        return {
          type: 'VariableInitialization',
          typeSpecifier,
          typeQualifiers,
          identifier: i.Identifier().text,
          value: expression && this.expressionGenerator.visit(expression),
        }
      })
    return {
      type: 'VariableInitializationList',
      initializations,
    }
  }

  visitArrayInitialization(
    ctx: ArrayInitializationContext
  ): cTree.VariableInitialization {
    const array = this.expressionGenerator.visit(ctx._value)
    const typeSpecifier = this.typeGenerator.visitTypeSpecifier(
      ctx.typeSpecifier()
    ).value
    return {
      type: 'VariableInitialization',
      typeSpecifier: {
        type: 'typeSpecifier',
        value: typeSpecifier + '[]',
      },
      typeQualifiers: this.typeGenerator.visitChildren(ctx._qualifiers),
      identifier: ctx.Identifier().text,
      value: array,
    }
  }

  // Functions
  visitFunctionDeclaration(
    ctx: FunctionDeclarationContext
  ): cTree.FunctionDeclaration {
    const name = ctx.Identifier().text
    const typeSpecifier = ctx.typeSpecifier().text
    const body = this.visitCompoundStatement(ctx.compoundStatement())
    const params = ctx.parameterList().parameterDeclaration()
    const formals = params.map((p) => this.visitParameterDeclaration(p))

    return {
      type: 'FunctionDeclaration',
      name,
      typeSpecifier,
      body,
      formals,
    }
  }

  visitParameterDeclaration(
    ctx: ParameterDeclarationContext
  ): cTree.ParameterDeclaration {
    const isArray = ctx.text.includes('[]')
    const type = this.typeGenerator.visitTypeSpecifier(ctx.typeSpecifier())
    if (isArray) type.value += '[]'
    return {
      type: 'ParameterDeclaration',
      typeSpecifier: type,
      identifier: ctx.Identifier().text,
    }
  }
  visitSequenceStatement(
    ctx: SequenceStatementContext
  ): cTree.SequenceStatement {
    const childStatements = ctx.statement()
    return {
      type: 'SequenceStatement',
      statements: childStatements
        ? childStatements.map((child) => this.visit(child))
        : [],
    }
  }

  visitCompoundStatement(
    ctx: CompoundStatementContext
  ): cTree.SequenceStatement {
    const sequenceStatement = ctx.sequenceStatement()
    return sequenceStatement
      ? this.visitSequenceStatement(sequenceStatement)
      : {
          type: 'SequenceStatement',
          statements: [],
        }
  }

  visitReturnStatement(ctx: ReturnStatementContext): cTree.ReturnStatement {
    return {
      type: 'ReturnStatement',
      value: this.expressionGenerator.visit(ctx.expression()),
    }
  }

  // Conditionals
  visitSwitchStatement(ctx: SwitchStatementContext): cTree.SwitchStatement {
    return {
      type: 'SwitchStatement',
      condition: this.expressionGenerator.visit(ctx._condition),
      body: this.visitSwitchBodyStatement(ctx._body),
    }
  }

  visitSwitchBodyStatement(
    ctx: SwitchBodyStatementContext
  ): cTree.SwitchBodyStatement {
    const labeledStatements = ctx.switchBodyList().labeledStatement()
    return {
      type: 'SwitchBodyStatement',
      statements: labeledStatements.map((ls) => this.visitLabeledStatement(ls)),
    }
  }

  visitLabeledStatement(ctx: LabeledStatementContext): cTree.LabeledStatement {
    return {
      type: 'LabeledStatement',
      condition: ctx._condition
        ? new ExpressionGenerator().visit(ctx._condition)
        : null,
      body: new StatementGenerator().visit(ctx._body),
      hasBreak: !!ctx.breakStatement(),
    }
  }

  visitConditionalStatement(
    ctx: ConditionalStatementContext
  ): cTree.ConditionalStatement {
    const statementGen = new StatementGenerator()
    const falsebody = ctx._falsebody ? statementGen.visit(ctx._falsebody) : null
    return {
      type: 'ConditionalStatement',
      condition: new ExpressionGenerator().visit(ctx._condition),
      truebody: statementGen.visit(ctx._truebody),
      falsebody: falsebody,
    }
  }

  // IO operations
  visitPrintHeap(ctx: PrintHeapContext): cTree.PrintMemory {
    return {
      type: 'PrintHeap',
    }
  }

  visitPrintStack(ctx: PrintStackContext): cTree.PrintMemory {
    return {
      type: 'PrintStack',
    }
  }

  visitPrintf(ctx: PrintfContext): cTree.Printf {
    const expressions = ctx
      .expression()
      .map((e) => this.expressionGenerator.visit(e))
    return {
      type: 'Printf',
      args: ctx.expression().map((e) => this.expressionGenerator.visit(e)),
    }
  }
  // Loops
  visitBreakStatement(ctx: BreakStatementContext): cTree.BreakStatement {
    return {
      type: 'BreakStatement',
    }
  }
  visitLoopInitial(ctx: LoopInitialContext): cTree.Statement {
    return this.visitChildren(ctx)
  }
  visitForLoop(ctx: ForLoopContext): cTree.ForLoop {
    return {
      type: 'ForLoop',
      initial: this.visit(ctx._initial),
      condition: this.expressionGenerator.visit(ctx._condition),
      action: this.expressionGenerator.visit(ctx._action),
      body: this.visit(ctx._body),
    }
  }

  visitWhileLoop(ctx: WhileLoopContext): cTree.WhileLoop {
    return {
      type: 'WhileLoop',
      condition: this.expressionGenerator.visit(ctx._condition),
      body: this.visit(ctx._body),
    }
  }

  visitDoWhileLoop(ctx: DoWhileLoopContext): cTree.DoWhileLoop {
    return {
      type: 'DoWhileLoop',
      condition: this.expressionGenerator.visit(ctx._condition),
      body: this.visit(ctx._body),
    }
  }

  // Visitor basics
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
