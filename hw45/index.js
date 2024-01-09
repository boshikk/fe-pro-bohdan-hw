const input = document.querySelector(".id");
const inputContainer = document.querySelector(".input-container");
const confirmButton = document.querySelector(".confirm-button");
const commentsButton = document.querySelector(".comments-button");
const resetButton = document.querySelector(".reset-button");
const paragraph = document.getElementsByTagName("p");

const postContainer = document.querySelector(".post-container");
commentsButton.addEventListener("click", (e) => {
  e.preventDefault();
});

let id;
let h1;
let p;

confirmButton.addEventListener("click", () => {
  id = input.value;

  const findPost = async () => {
    try {
      const responsePost = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const dataPost = await responsePost.json();
      console.log(dataPost);

      p = `
      <p class='post-content'><span class="post-span">${
        id !== 0 && id <= 100 && id ? "Post: " : ""
      }</span>${
        id > 100 || !id
          ? "I'M SORRY, INVALID INPUT. NUMBER HAVE TO BE 1-100"
          : dataPost.body
      }</p>`;

      h1 = `<h1 class="title-content"><span class="title-span">Title: </span>
      ${dataPost.title}</h1>`;

      if (id !== 0 && id <= 100 && id) {
        inputContainer.insertAdjacentHTML("beforeend", h1);
      }

      inputContainer.insertAdjacentHTML("beforeend", p);

      if (id > 100 || !id) {
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

commentsButton.addEventListener("click", () => {
  const getComments = async () => {
    try {
      const responseComments = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      const dataComments = await responseComments.json();
      console.log(dataComments);

      const commentsDiv = `<div class="comments">
      <p class="comment"><span>Name: </span>${dataComments.name}</p>
      <p class="comment"><span>Comment: </span>${dataComments.body}</p>
      <p class="comment"><span>Email: </span>${dataComments.email}</p>
      </div>`;

      inputContainer.insertAdjacentHTML("beforeend", commentsDiv);
      commentsButton.style.opacity = 0;
    } catch (err) {
      console.error(err);
    }
  };
  getComments();
});

const resetAll = () => {
  const titleContent = document.querySelector(".title-content");
  const postContent = document.querySelector(".post-content");
  const commentsContent = document.querySelector(".comments");

  if (titleContent) {
    titleContent.remove();
  }
  postContent.remove();

  commentsButton.style.opacity = 0;

  if (commentsContent) {
    commentsContent.remove();
  }

  input.value = "";
};

resetButton.addEventListener("click", resetAll);
