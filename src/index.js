// sortable
import { initSortable } from "./plugins/init_sortable"

// stimulus
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

window.Stimulus = Application.start();
const context = require.context("./controllers", true, /\.js$/);
// eslint-disable-next-line no-undef
Stimulus.load(definitionsFromContext(context));

// declarações de funções
const list = document.querySelector("#results");

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movieTag = `<li class="list-group-item border-0">
    <img src="${result.Poster}" alt="" width="100">
    </li>`;
    list.insertAdjacentHTML("beforeend", movieTag);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const form = document.querySelector("#search-form");

// execuções
initSortable();
fetchMovies("matrix"); // on 1st page load

// cria um watcher, ele vai observar a ação do
// usuário - quando ele submit, vou executar
form.addEventListener("submit", (event) => {
  event.preventDefault();
  list.innerHTML = "";
  const input = document.querySelector("#search-input");
  fetchMovies(input.value);
});
