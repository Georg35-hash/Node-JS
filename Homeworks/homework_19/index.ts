const sumEvenNumbers = (arr: number[]): number => {
  return arr.reduce((acc, num) => acc + num, 0)
}

interface IStringToBooleanFunction {
  (str: string): boolean
}
const checkEmptyStr: IStringToBooleanFunction = (str: string): boolean => {
  return str.length > 0 ? true : false
}

type CompareStrings = {
  (str1: string, str2: string): boolean
}
const checkStr: CompareStrings = (str1: string, str2: string): boolean => {
  return str1 === str2 ? true : false
}

function getLastElem<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}

function makeTriple<T>(value1: T, value2: T, value3: T): T[] {
  return [value1, value2, value3]
}
