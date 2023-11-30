class User {
  id;
  name;
  age;
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const dan = new User(1, "Bohdan", 27);
const vlad = new User(2, "Vlad", 27);
const bohdan = new User(3, "Bohdan", 30);

const usersArr = [dan, vlad, bohdan];

const usersObj = usersArr.reduce((obj, user) => {
  obj[user.id] = user;
  return obj;
}, {});

console.log(usersObj);
