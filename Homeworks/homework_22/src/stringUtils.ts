function capitalize(str: string): string {
  str[0]?.toLocaleUpperCase()
  return str
}
function reverseString(str: string): string {
  return str.split('').reverse().join('')
}

export { capitalize, reverseString }
