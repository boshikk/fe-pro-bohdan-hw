class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  personInfo() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const dan = new Person("Bohdan Dmytrenko", 27);
const helen = new Person("Olena Dmytrenko", 51);

console.log(dan.personInfo(), helen.personInfo());
