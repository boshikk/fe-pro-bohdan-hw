function hoursToSeconds() {
  const ammountHours = Number(prompt("How many hours?"));
  const ammountSeconds = `There are ${
    ammountHours * 3600
  } seconds in ${ammountHours} ${ammountHours === 1 ? "hour" : "hours"}`;
  return ammountSeconds;
}

alert(hoursToSeconds());
