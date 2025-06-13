abstract class Animal {
  abstract makeSound(): void

  move(): void {
    console.log('The animal moves.')
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark')
  }
}
class Cat extends Animal {
  makeSound(): void {
    console.log('Meow')
  }
}
const animals: Animal[] = [new Dog(), new Cat()]
for (const animal of animals) {
  animal.makeSound()
}

////////////////////////////////////////

abstract class Shape {
  abstract calculateArea(): number
}
abstract class ColoredShape extends Shape {
  abstract color: string
}

class ColoredCircle extends ColoredShape {
  constructor(public radius: number, public color: string) {
    super()
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius
  }
}
class ColoredRectangle extends ColoredShape {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    super()
  }

  calculateArea(): number {
    return this.width * this.height
  }
}
const circle = new ColoredCircle(5, 'red')
const rectangle = new ColoredRectangle(4, 6, 'blue')

console.log(`Circle area: ${circle.calculateArea()}, color: ${circle.color}`)
console.log(
  `Rectangle area: ${rectangle.calculateArea()}, color: ${rectangle.color}`
)

/////////////////////////////////

abstract class Appliance {
  abstract turnOn(): void
  abstract turnOff(): void
}

class WashingMachine extends Appliance {
  turnOn() {
    console.log('Washing machine is on')
  }
  turnOff() {
    console.log('Washing machine is off')
  }
}
class Refrigerator extends Appliance {
  turnOn() {
    console.log('Refrigerator is on')
  }
  turnOff() {
    console.log('Refrigerator is off')
  }
}

const applianceArr: Appliance[] = [new WashingMachine(), new Refrigerator()]
for (const appliance of applianceArr) {
  appliance.turnOn()
  appliance.turnOff()
}

/////////////////////////////////

abstract class Account {
  abstract deposit(amount: number): void
  abstract withdraw(amount: number): void
}

class SavingsAccount extends Account {
  private balance: number = 0
  private interestRate: number

  constructor(interestRate: number) {
    super()
    this.interestRate = interestRate
  }

  deposit(amount: number): void {
    this.balance += amount
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount
    } else {
      console.log('Недостаточно средств')
    }
  }

  applyInterest(): void {
    this.balance += this.balance * (this.interestRate / 100)
  }
  getBalance(): number {
    return this.balance
  }
}
class CheckingAccount extends Account {
  private balance: number = 100
  private fee: number

  constructor(fee: number) {
    super()
    this.fee = fee
  }

  deposit(amount: number): void {
    this.balance += amount
  }

  withdraw(amount: number): void {
    const total = amount + (amount * this.fee) / 100
    if (total <= this.balance) {
      this.balance -= total
    } else {
      console.log('Недостаточно средств с учетом комиссии')
    }
  }

  getBalance(): number {
    return this.balance
  }
}

const savings = new SavingsAccount(5)
savings.deposit(1000)
savings.applyInterest()
console.log('Savings balance:', savings.getBalance())

const checking = new CheckingAccount(10)
checking.withdraw(100)
console.log('Checking balance:', checking.getBalance())

/////////////////////////////////

abstract class Media {
  abstract play(): void
}
class Audio extends Media {
  play() {
    console.log(`Playing audio`)
  }
}
class Video extends Media {
  play() {
    console.log(`Playing video`)
  }
}
const mediaArr: Media[] = [new Audio(), new Video()]
for (const media of mediaArr) {
  media.play()
}
