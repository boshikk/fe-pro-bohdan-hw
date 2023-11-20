class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const dan = new Person("Bohdan Dmytrenko", "male");
const helen = new Person("Olena Dmytrenko", "female");
const dean = new Person("Dean Winchester", "male");

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
console.log(apartment1);

apartment1.addResident(helen);
console.log(apartment1);

const apartment2 = new Apartment();
apartment2.addResident(dean);
console.log(apartment2);
