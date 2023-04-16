let output = ''

const logPrintf = (str: string) => {
  output = output.concat(str)
}
const getOutput = () => {
  return output
}
const clearOuput = () => {
  output = ''
}
export { logPrintf, getOutput, clearOuput }
