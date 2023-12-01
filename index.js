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
const vlad = new User(2, "Vlad", 14);
const bohdan = new User(3, "Bohdan", 30);

const usersArr = [dan, vlad, bohdan];

const usersObj = usersArr.reduce((obj, user) => {
  obj[user.id] = user;
  return obj;
}, {});

console.log(usersObj);

const sortUsers = (obj, sortParam) => {
  const sortedUsers = Object.values(obj).sort((a, b) => {
    if (sortParam === "age") {
      return a.age - b.age;
    } else if (sortParam === "name") {
      return a.name.localeCompare(b.name);
    } else return 0;
  });

  return sortedUsers;
};

const sortedUsersByAge = sortUsers(usersObj, "age");
console.log(sortedUsersByAge);

const sortedUsersByName = sortUsers(usersObj, "name");
console.log(sortedUsersByName);
