class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const dan = new Human("Bohdan Dmytrenko", "male");
const helen = new Human("Olena Dmytrenko", "female");

console.log(dan, helen);
