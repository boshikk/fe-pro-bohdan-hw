class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const dan = new Person("Bohdan Dmytrenko", "male");
const helen = new Person("Olena Dmytrenko", "female");
const dean = new Person("Dean Winchester", "male");
const sam = new Person("Sam Winchester", "male");

class Apartment {
  constructor() {
    this.residents = [];
  }
  addResident(person) {
    if (person instanceof Person) {
      this.residents.push(person);
    }
  }
}

const apartment1 = new Apartment();
apartment1.addResident(dan);

apartment1.addResident(helen);

const apartment2 = new Apartment();
apartment2.addResident(dean);

const apartment3 = new Apartment();
apartment3.addResident(sam);

class Building {
  constructor(maxNumberOfAppartments) {
    this.apartmentsArray = [];
    this.maxNumberOfAppartments = maxNumberOfAppartments;
  }
  addAppartment(apartment) {
    if (this.apartmentsArray.length < this.maxNumberOfAppartments) {
      this.apartmentsArray.push(apartment);
    } else {
      console.log("There aren't any free apartments!");
    }
  }
}

const building1 = new Building(2);
console.log(building1);

building1.addAppartment(apartment1);
console.log(building1);
building1.addAppartment(apartment2);
console.log(building1);
building1.addAppartment(apartment3);
