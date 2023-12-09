const textField = document.getElementById("text-field");
const infoDiv = document.getElementById("info-div");

console.log(textField);
console.log(infoDiv);

textField.addEventListener("focus", () => (infoDiv.style.display = "block"));

textField.addEventListener("blur", () => (infoDiv.style.display = "none"));
