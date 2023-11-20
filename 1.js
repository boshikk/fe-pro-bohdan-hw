class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const dan = new Person("Bohdan Dmytrenko", "male");
const helen = new Person("Olena Dmytrenko", "female");

console.log(dan, helen);
