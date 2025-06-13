type Admin = {
  name: string
  permissions: string[]
}
type User = {
  name: string
  email: string
}
type AdminUser = Admin & User

interface IEngine {
  type: string
  horsepower: number
}
interface ICar extends IEngine {
  make: string
  model: string
  year?: number
}
function getObjData(obj: ICar): void {
  console.log(
    `type: ${obj.type}, horsepower: ${obj.horsepower}, make: ${
      obj.make
    }, model: ${obj.model}, ${obj.year ? `, year: ${obj.year}` : ''}`
  )
}

interface IProduct {
  name: string
  price: number
}
function calculateDiscount(obj: IProduct, discount: number): number {
  return (obj.price * (100 - discount)) / 100
}

interface IEmployee {
  name: string
  salary: number
}
const employeesArr: IEmployee[] = []
function getAllSalary(arr: IEmployee[]) {
  return arr.map(item => item.salary)
}

interface IPerson {
  firstName: string
  lastName: string
  grade: number
}
const student: IPerson = {
  firstName: 'John',
  lastName: 'Smit',
  grade: 100,
}
function getStudentData(obj: IPerson): void {
  console.log(`name: ${obj.firstName} ${obj.lastName}, grade: ${obj.grade}`)
}

interface IConcatStrings {
  (str1: string, str2: string): string
}
const concatStrings: IConcatStrings = (str1, str2) => {
  return str1 + str2
}
