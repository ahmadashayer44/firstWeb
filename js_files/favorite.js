document.addEventListener("DOMContentLoaded", function () {
  let moviesForFav = document.getElementById("movies");
  const apiKey = "94b116e0";

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

  fetch("../js_files/retrieveToFavorite.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.imdbIds) {
        return fetchAllMovies(data.imdbIds);
      }
    })
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
              </div>`;
        movieDiv.appendChild(detailsDiv);
        movieDiv.onclick = function () {
          moviePage(movie);
        };
        moviesForFav.appendChild(movieDiv);
      }
    })
    .catch((error) => {
      console.error("Error fetching movie details:", error);
    });
  window.moviesForFav = moviesForFav;
});
function rightAScroll() {
  moviesForFav.scrollLeft += 300;
}
function leftAScroll() {
  moviesForFav.scrollLeft -= 300;
}
function rightADoubleScroll2() {
  moviesForFav.scrollLeft += 900;
}

function leftADoubleScroll2() {
  moviesForFav.scrollLeft -= 900;
}
