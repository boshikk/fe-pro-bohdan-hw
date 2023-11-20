class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age} years old`);
  }
}

const dan = new Person("Bohdan Dmytrenko", 27);
const helen = new Person("Olena Dmytrenko", 51);

class Car {
  constructor(brand, model, productionYear, numberPlate) {
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.numberPlate = numberPlate;
    this.owner = "";
  }

  setAnOwner(person) {
    if (person instanceof Person && person.age > 18) {
      this.owner = person;
    } else {
      console.log("This person is under 18! It is prohibited to drive a car!");
    }
  }

  displayInfo() {
    console.log(`Brand: ${this.brand},
Model: ${this.model}, 
Year: ${this.productionYear},
Number Plate: ${this.numberPlate}`);
    if (this.owner) {
      this.owner.personInfo();
    } else {
      console.log("No owner assigned!");
    }
  }
}

const tesla = new Car("Tesla", "Model 3", 2023, "AA3272");
console.log(tesla);
tesla.setAnOwner(dan);
console.log(tesla);
tesla.displayInfo();

const bmw = new Car("BMW", "X5", 2021, "AB1515");
console.log(bmw);
bmw.setAnOwner(helen);
console.log(bmw);
bmw.displayInfo();
