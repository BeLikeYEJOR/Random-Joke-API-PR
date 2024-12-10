require("dotenv").config();

const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = process.env.APIKEY;

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    });
};

btn.addEventListener("click", getJoke);
