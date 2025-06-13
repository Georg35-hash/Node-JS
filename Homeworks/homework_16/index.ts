function greetUser(name: string): void {
  console.log(`Hello, ${name}`)
}

interface IPerson {
  name: string
  age: number
  city: string
}

function printPersonInfo(obj: IPerson): void {
  console.log(`Имя: ${obj.name}, Возраст: ${obj.age}, Город: ${obj.city}`)
}

function squareNumber(num: number): number {
  return num ** 2
}

function isEven(num: number): boolean {
  return num % 2 === 0 ? true : false
}

interface IStudent {
  name: string
  grade: number
}

function printStudentInfo(obj: IStudent): void {
  console.log(`Студент: ${obj.name}, Оценка: ${obj.grade}`)
}

function logMessage(str: string): void {
  console.log(str)
}
