const displayData = () => {
  const form = document.forms["registrationForm"];
  const userDataDiv = document.getElementById("userData");
  userDataDiv.innerHTML = "<h2>User Data:</h2>";

  const formData = {
    "First Name": form.elements["firstName"].value,
    "Last Name": form.elements["lastName"].value,
    "Date of Birth": form.elements["birthdate"].value,
    Gender:
      document.querySelector(`input[name="gender"]:checked`)?.value ||
      "Not mentioned",
    City: form.elements["city"].value,
    Address: form.elements["address"].value,
    Languages: getSelectedLanguages(),
  };

  const table = document.createElement("table");

  for (const [key, value] of Object.entries(formData)) {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = key;
    cell2.textContent = value;
  }

  userDataDiv.appendChild(table);

  console.log(form.elements);
};

const getSelectedLanguages = () => {
  const selectedLanguages = [];
  const checkboxes = document.querySelectorAll(
    `input[name="languages"]:checked`
  );
  checkboxes.forEach((checkbox) => {
    selectedLanguages.push(checkbox.value);
  });
  return selectedLanguages.length > 0
    ? selectedLanguages.join(", ")
    : "Not mentioned";
};

document.getElementById("saveButton").addEventListener("click", displayData);
