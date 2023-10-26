function userPortrait() {
  const userBirthYear = Number(prompt("What year were you born?"));
  if (!userBirthYear) {
    alert(
      "That's so sad that you don't want to tell us about your year of birth ;("
    );
  }
  const userCity = prompt("Where do you live?");
  if (!userCity) {
    alert(
      "That's so sad that you don't want to tell us about the city you live in ;("
    );
  }
  const userFavoriteSport = prompt("What's your favorite kind of sport?");
  if (!userFavoriteSport) {
    alert(
      "That's so sad that you don't want to tell us about your favorite sport ;("
    );
  }
  const currentYear = 2023;
  const userAge = currentYear - userBirthYear;
  return alert(
    `${userAge}
You live in the ${
      userCity === "Kyiv" || userCity === "Washington" || userCity === "London"
        ? "capital"
        : "city"
    } ${userCity}.
${
  userFavoriteSport === "soccer"
    ? "Cool! You wanna be like Christiano Ronaldo?"
    : userFavoriteSport === "basketball"
    ? "Cool! You wanna be like Michael Jordan?"
    : userFavoriteSport === "tennis"
    ? "Cool! You wanna be like Novak Djokovic?"
    : ""
}`
  );
}

userPortrait();
