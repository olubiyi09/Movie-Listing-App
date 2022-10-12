const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f9aa19b900022a3a9043627ed80246af&page=1";

const searchAPI =
  "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=f9aa19b900022a3a9043627ed80246af&query=";

const imgPATH = "https://image.tmdb.org/t/p/w1280/";

let moviesDiv = document.querySelector(".movies");
let form = document.querySelector("form");
let input = document.querySelector(".search");

getMovies(apiUrl);
async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  displayMovies(data.results);
}

// Display Movies
function displayMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
    <img src="${imgPATH + movie.poster_path}" alt="" />
    <div class="details">
      <h2 class="title">Nobody${movie.title}</h2>
      <p class="rate">Rating: <span class="rating">${
        movie.vote_average
      }</span></p>
      <p class="overview">${movie.overview}</p>
    </div> 
    `;

    moviesDiv.appendChild(div);
  });
}

// search
form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesDiv.innerHTML = "";

  const inputValue = input.value;

  if (inputValue) {
    getMovies(searchAPI + inputValue);

    input.value = "";
  }
});
