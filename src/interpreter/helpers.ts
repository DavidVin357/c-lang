const INT_MAX = 2147483647
const INT_MIN = -2147483648
const LONG_MAX = 9223372036854775807n
const LONG_MIN = -9223372036854775808n

const ULONG_MAX = 18446744073709551615n

function isInt(val: number): boolean {
  return (
    Number(val) === val && val % 1 === 0 && val <= INT_MAX && val >= INT_MIN
  )
}
function isLong(val: bigint): boolean {
  console.log('long', val)
  return val <= LONG_MAX && val >= LONG_MIN
}
function isULong(val: bigint): boolean {
  return val <= ULONG_MAX && (val > LONG_MAX || val < LONG_MIN)
}

function isFractional(n: number) {
  return Number(n) === n && n % 1 !== 0
}

const getLiteralSize = (val: any) => {
  let value = val
  if (val < Number.MAX_SAFE_INTEGER || val > Number.MAX_SAFE_INTEGER) {
    value = BigInt(val)
  }
  if (isInt(value)) return 4
  if (isFractional(value)) return 8
  if (isLong(value)) return 8
  if (isULong(value)) return 16
  throw Error('Not a primitive type')
}

const getTypeSize = (type: string): number => {
  if (type.includes('*')) {
    return 8
  }

  switch (type) {
    case 'char' || 'signed char':
      return 1

    case 'unsigned char':
      return 1

    case 'int':
      return 4

    case 'unsigned int':
      return 4

    case 'short':
      return 2

    case 'unsigned short':
      return 2

    case 'long':
      return 8

    case 'unsigned long':
      return 8

    // Floating Point types
    case 'float':
    case 'double':
      return 8

    default:
      return 0
  }
}

const dispatchWarning = (message: string) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('warning', {
        detail: {
          message,
        },
      })
    )
  } else {
    console.log('Warning:')
    console.warn(message)
  }
}

const dispathchTable = (table: any) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('table', {
        detail: {
          message: table,
        },
      })
    )
  } else {
    console.log(table)
  }
}

export { getTypeSize, dispatchWarning, dispathchTable, getLiteralSize }
