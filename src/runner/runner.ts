import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as cTree from '../cTree'

export function runInterpreter(code: string) {
  const program: cTree.Program | undefined = parse(code)

  const res = evaluate(program)

  return res
}
