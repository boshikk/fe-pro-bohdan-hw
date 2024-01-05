const input = document.querySelector(".id");
const inputContainer = document.querySelector(".input-container");
const confirmButton = document.querySelector(".confirm-button");
const commentsButton = document.querySelector(".comments-button");

commentsButton.addEventListener("click", (e) => {
  e.preventDefault();
});

confirmButton.addEventListener("click", () => {
  const id = input.value;
  console.log(id);

  const findPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      console.log(data);

      const html = `
    <p class='post-content'>${
      id > 100 ? "I'M SORRY, INVALID INPUT. NUMBER HAVE TO BE 1-100" : data.body
    }<p>`;

      inputContainer.insertAdjacentHTML("beforeend", html);

      if (id > 100) {
        commentsButton.style.opacity = 0;
      } else {
        commentsButton.style.opacity = 1;
      }
    } catch (err) {
      console.error(err);
    }
  };

  findPost();
});
