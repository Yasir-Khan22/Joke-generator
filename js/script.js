const jokeElem = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  jokeElem.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeElem.textContent = `${item.joke}`;
      jokeElem.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();
