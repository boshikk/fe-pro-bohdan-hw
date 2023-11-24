const colors = [
  "color-1",
  "color-2",
  "color-3",
  "color-4",
  "color-5",
  "color-6",
  "color-7",
  "color-8",
  "color-9",
  "color-10",
];

const users = [
  { name: "Slava", color: "color-4" },
  { name: "Lena", color: "color-7" },
];

const addUser = (userName) => {
  const usedColors = users.map((user) => user.color);

  const availableColors = colors.filter((color) => !usedColors.includes(color));

  if (availableColors.length > 0) {
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
    const newUser = { name: userName, color: randomColor };
    users.push(newUser);
  }
};

addUser("Dan");
addUser("Cindy");
addUser("Deborah");
addUser("James");
addUser("John");
addUser("Victor");
addUser("Vlad");
addUser("Sean");
addUser("Eren");
console.log(users);
