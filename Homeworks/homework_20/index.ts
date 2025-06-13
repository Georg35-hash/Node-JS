class Animal {
  constructor(public name: string, public species: string) {
    this.name = name
    this.species = species
  }
  sound(): void {
    console.log('The animal makes a sound')
  }
}

class Dog extends Animal {
  constructor(name: string, species: string, public breed: string) {
    super(name, species)
    this.breed = breed
  }
  sound(): void {
    console.log('The dog barks')
  }
}

class Library {
  static totalBooks = 0

  addBook(): void {
    Library.totalBooks += 1
  }
}

const lib1 = new Library()
const lib2 = new Library()

lib1.addBook() // +1
lib1.addBook() // +1
lib2.addBook() // +1

console.log(Library.totalBooks) // 3

class Vehicle {
  constructor(public make: string, public model: string) {
    this.make = make
    this.model = model
  }
}
class Motorcycle extends Vehicle {
  constructor(make: string, model: string, public type: string) {
    super(make, model)
    this.type = type
  }
}
const moto = new Motorcycle('Yamaha', 'MT-07', 'Sport')

console.log(moto.make) // "Yamaha"
console.log(moto.model) // "MT-07"
console.log(moto.type) // "Sport"
