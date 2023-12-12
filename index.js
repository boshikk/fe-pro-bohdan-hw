document.getElementById("saveButton").addEventListener("click", displayData);

function displayData() {
  const form = document.getElementById("registrationForm");
  const userDataDiv = document.getElementById("userData");
  userDataDiv.innerHTML = "<h2>User Data:</h2>";

  const formData = {
    "First Name": document.getElementById("firstName").value,
    "Last Name": document.getElementById("lastName").value,
    "Date of Birth": document.getElementById("birthdate").value,
    Gender:
      document.querySelector(`input[name="gender"]:checked`)?.value ||
      "Not mentioned",
    City: document.getElementById("city").value,
    Address: document.getElementById("address").value,
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
}

function getSelectedLanguages() {
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
}
