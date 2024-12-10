const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&idRange=0-318";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    });
};

btn.addEventListener("click", getJoke);
