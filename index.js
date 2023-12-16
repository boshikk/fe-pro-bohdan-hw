const options = ["😊", "😄", "😃", "😁", "😆"];

const votingContainer = document.getElementById("voting-container");

// Initialize vote counts
const voteCounts = Array.from({ length: options.length }, () => 0);

// Create and render smiley elements with containers
options.forEach((option, index) => {
  const smileyContainer = document.createElement("div");
  smileyContainer.classList.add("smiley-container");

  const smileyElement = document.createElement("div");
  smileyElement.classList.add("smiley");
  smileyElement.textContent = option;
  smileyElement.addEventListener("click", () => vote(index));
  smileyContainer.appendChild(smileyElement);

  const voteCountElement = document.createElement("div");
  voteCountElement.classList.add("vote-count");
  voteCountElement.textContent = `Votes: ${voteCounts[index]}`;
  smileyContainer.appendChild(voteCountElement);

  votingContainer.appendChild(smileyContainer);
});

// Function to handle voting
function vote(index) {
  voteCounts[index]++;
  updateVoteCounts();
}

// Function to update vote counts
function updateVoteCounts() {
  const voteCountElements = document.querySelectorAll(".vote-count");
  voteCountElements.forEach((element, index) => {
    element.textContent = `Votes: ${voteCounts[index]}`;
  });
}
