const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url = "https://randomjokeapi.vercel.app/random-joke";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    });
};

btn.addEventListener("click", getJoke);
