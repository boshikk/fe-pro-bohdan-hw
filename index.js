const smileys = ["😃", "😊", "😄", "😁", "😆"];
const smileyContainer = document.getElementById("smileyContainer");
const voteCountElement = document.getElementById("voteCount");

let voteCounts = Array(smileys.length).fill(0);

function updateUI() {
  smileyContainer.innerHTML = "";
  voteCounts.forEach((count, index) => {
    const smileyDiv = document.createElement("div");
    smileyDiv.classList.add("smiley");
    smileyDiv.textContent = smileys[index];
    smileyDiv.addEventListener("click", () => castVote(index));
    smileyContainer.appendChild(smileyDiv);
  });

  voteCountElement.innerHTML = "";
  voteCounts.forEach((count, index) => {
    const countDiv = document.createElement("div");
    countDiv.textContent = `Votes for ${smileys[index]}: ${count}`;
    voteCountElement.appendChild(countDiv);
  });
}

function castVote(index) {
  voteCounts[index]++;
  updateUI();
}

updateUI();
