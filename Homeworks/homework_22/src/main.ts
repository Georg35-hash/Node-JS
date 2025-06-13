import { LoanCalculator, TaxCalculator } from './finance'
import { generateFibonacci, generatePrimeNumbers } from './sequenceUtils'
import { capitalize, reverseString } from './stringUtils'
import { UserManagement } from './userManagement'



capitalize('abb')
reverseString('abc')


const loan = new LoanCalculator(100000, 5, 12)
console.log('Monthly loan payment:', loan.calculateMonthlyPayment().toFixed(2))

const tax = new TaxCalculator(13)
console.log('Tax on income 50000:', tax.calculateTax(50000).toFixed(2))



const admin = new UserManagement.Admin.AdminUser('Ivan', 'ivan@example.com')
console.log(admin.name, admin.email, admin.isSuperAdmin)

admin.promoteToSuperAdmin()
console.log(admin.isSuperAdmin) // true

admin.revokeSuperAdmin()
console.log(admin.isSuperAdmin) 



const fibonacciSequence = generateFibonacci(50)
console.log(`Fibonacci sequence up to ${50}:`, fibonacciSequence)

const primeNumbers = generatePrimeNumbers(50)
console.log(`Prime numbers up to ${50}:`, primeNumbers)
