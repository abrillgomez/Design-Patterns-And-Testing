class Vehicle {
  constructor(brand, year, color) {
    this.brand = brand
    this.year = year
    this.color = color
    this.isRunning = false
  }

  honk() {
    console.log("Beep bepp")
  }
}

class Car extends Vehicle {
  constructor(brand, year, color, wheelCount) {
    super(brand, year, color)
    this.wheelCount = wheelCount
  }

  startEngines() {
    this.isRunning = true
  }

  stopEngines() {
    this.isRunning = false
  }
}

class Bike extends Vehicle {
  constructor(brand, year, color) {
    super()
    this.brand = brand
    this.year = year
    this.color = color
  }
}

const myBike = new Bike('Philco', 2001, 'Blue')
myBike.honk()

const myCar = new Car('Toyota', 2003, 'Black')
myCar.startEngines()
myCar.stopEngines()
myCar.honk()