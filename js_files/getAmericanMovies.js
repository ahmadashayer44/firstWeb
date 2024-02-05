let moviesForAmerica;
let moviesForTurkish;
let moviesForArabic;

const storedArr1 = JSON.parse(localStorage.getItem("arr1")) || [];
const storedArr2 = JSON.parse(localStorage.getItem("arr2")) || [];
const storedArr3 = JSON.parse(localStorage.getItem("arr3")) || [];

document.addEventListener("DOMContentLoaded", function () {
  moviesForAmerica = document.getElementById("moviesAmerican");
  moviesForTurkish = document.getElementById("moviesTurkish");
  moviesForArabic = document.getElementById("moviesArabic");
  const apiKey = "94b116e0";
  const imdbIds = [
    "tt0816692",
    "tt0167261",
    "tt0434409",
    "tt1877830",
    "tt10160976",
    "tt7366338",
    "tt2911666",
    "tt0468569",
    "tt22687790",
    ,
    "tt7462410",
    "tt0482571",
    "tt1345836",
    "tt7286456",
  ].concat(storedArr1);
  const imdbIds2 = [
    "tt7431994",
    "tt6051216",
    "tt3565486",
    "tt23334464",
    "tt14779804",
    "tt4320258",
    "tt1795096",
  ].concat(storedArr2);
  const imdbIds3 = [
    "tt0075143",
    "tt2063241",
    "tt3084150",
    "tt3109706",
    "tt3109682",
    "tt3109692",
    "tt9077108",
    "tt4588194",
  ].concat(storedArr3);
  const fetchMovieDetails = async (imdbId) => {
    const apiUrl = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const movieData = await response.json();
      return movieData;
    } catch (error) {
      console.error(
        `Error fetching data for IMDb ID ${imdbId}: ${error.message}`
      );
      return null;
    }
  };

  const fetchAllMovies = async (imdbIds) => {
    const allMovieDetails = [];

    for (const imdbId of imdbIds) {
      const movieData = await fetchMovieDetails(imdbId);
      if (movieData) {
        allMovieDetails.push(movieData);
      }
    }

    return allMovieDetails;
  };

  fetchAllMovies(imdbIds)
    .then((movies) => {
      for (const movie of movies) {
        const movieDiv = document.createElement("div");
        const detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `
    <link rel="stylesheet" href="../css_files/allMovies.css">    
    <div class="movieContainer">
    <img class="moviePoster" src="${movie.Poster}">
    <div class="deitails">
      <h2 class="movieTitle">${movie.Title}</h2>
    </div>
  </div>
  
  
      
     `;
        movieDiv.appendChild(detailsDiv);

        movieDiv.onclick = function () {
          moviePage(movie);
        };
        moviesForAmerica.appendChild(movieDiv);
      }
    })

    .catch((error) => {
      console.error("Error fetching movie details:", error);
    });

  fetchAllMovies(imdbIds2)
    .then((movies) => {
      for (const movie of movies) {
        const movieDiv = document.createElement("div");
        const detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `
      <link rel="stylesheet" href="../css_files/allMovies.css">    
      <div class="movieContainer">
      <img class="moviePoster" src="${movie.Poster}">
      <div class="deitails">
        <h2 class="movieTitle">${movie.Title}</h2>
      </div>
    </div>
       `;
        movieDiv.appendChild(detailsDiv);
        movieDiv.onclick = function () {
          moviePage(movie);
        };
        moviesForTurkish.appendChild(movieDiv);
      }
    })

    .catch((error) => {
      console.error("Error fetching movie details:", error);
    });

  fetchAllMovies(imdbIds3)
    .then((movies) => {
      for (const movie of movies) {
        const movieDiv = document.createElement("div");
        const detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `
        <link rel="stylesheet" href="../css_files/allMovies.css">    
        <div class="movieContainer">
        <img class="moviePoster" src="${movie.Poster}">
        <div class="deitails">
          <h2 class="movieTitle">${movie.Title}</h2>
        </div>
      </div>
         `;
        movieDiv.appendChild(detailsDiv);
        movieDiv.onclick = function () {
          moviePage(movie);
        };
        moviesForArabic.appendChild(movieDiv);
      }
    })

    .catch((error) => {
      console.error("Error fetching movie details:", error);
    });

  let searchButton = document.getElementById("search1");
  let searchButton2 = document.getElementById("search2");
  let searchButton3 = document.getElementById("search3");

  searchButton2.addEventListener("click", function () {
    searchMovies2();
  });

  searchButton2.addEventListener("input", function () {
    searchMovies2();
  });

  searchButton3.addEventListener("click", function () {
    searchMovies3();
  });

  searchButton3.addEventListener("input", function () {
    searchMovies3();
  });

  function searchMovies2() {
    const searchQuery = searchButton2.value.trim().toLowerCase();
    const movieContainers =
      moviesForTurkish.querySelectorAll(".movieContainer");

    movieContainers.forEach((container) => {
      const title = container
        .querySelector(".movieTitle")
        .textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  function searchMovies3() {
    const searchQuery = searchButton3.value.trim().toLowerCase();
    const movieContainers = moviesForArabic.querySelectorAll(".movieContainer");

    movieContainers.forEach((container) => {
      const title = container
        .querySelector(".movieTitle")
        .textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  searchButton.addEventListener("click", function () {
    searchMovies();
  });

  searchButton.addEventListener("input", function () {
    searchMovies();
  });

  function searchMovies() {
    const searchQuery = searchButton.value.trim().toLowerCase();
    const movieContainers =
      moviesForAmerica.querySelectorAll(".movieContainer");

    movieContainers.forEach((container) => {
      const title = container
        .querySelector(".movieTitle")
        .textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }
});

function rightAScroll() {
  moviesForAmerica.scrollLeft += 300;
}
function leftAScroll() {
  moviesForAmerica.scrollLeft -= 300;
}
function rightADoubleScroll2() {
  moviesForAmerica.scrollLeft += 900;
}

function leftADoubleScroll2() {
  moviesForAmerica.scrollLeft -= 900;
}

function rightTScroll() {
  moviesForTurkish.scrollLeft += 300;
}
function leftTScroll() {
  moviesForTurkish.scrollLeft -= 300;
}
function rightTDoubleScroll2() {
  moviesForTurkish.scrollLeft += 900;
}

function leftTDoubleScroll2() {
  moviesForTurkish.scrollLeft -= 900;
}

function rightArScroll() {
  moviesForArabic.scrollLeft += 300;
}
function leftArScroll() {
  moviesForArabic.scrollLeft -= 300;
}
function rightArDoubleScroll2() {
  moviesForArabic.scrollLeft += 900;
}

function leftArDoubleScroll2() {
  moviesForArabic.scrollLeft -= 900;
}

function moviePage(movie) {
  const url = `detailsForMovie.html?imdbID=${movie.imdbID}`;
  window.location.href = url;
}
