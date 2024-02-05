let container = document.createElement("div");
const urlParams = new URLSearchParams(window.location.search);
const imdbID = urlParams.get("imdbID");
const apiKey = "94b116e0";
let iframe;
let thirdDiv;

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

const fetchMovie = async (imdbId) => {
  const movieData = await fetchMovieDetails(imdbId);

  return movieData;
};

fetchMovie(imdbID)
  .then((movie) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTg2ODFiYjk0ZmVjMTQ4OGI4ZGM0YzNmMDk2OTcxYSIsInN1YiI6IjY0ZmEyNjM1ZmZjOWRlMDBlMTM0MDUyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XA3yzZ9E-yjV9Acc-52KDdpJH-vm77rRaQYziP5V3C0",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${movie.imdbID}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const trailerKeys = response.results
          .filter((video) => video.type === "Trailer")
          .map((video) => video.key);
        const trailerKey = response.results.find(
          (video) => video.type === "Trailer"
        )?.key;
        return (trailer = `https://www.youtube.com/embed/${trailerKey}`);
      })
      .then(function (trailer) {
        iframe = document.createElement("iframe");
        iframe.src = trailer;
        iframe.width = "530";
        iframe.height = "398";
        iframe.frameborder = "0";
        thirdDiv.appendChild(iframe);
      })
      .catch((err) => console.error(err));

    console.log(movie);

    document.body.style.backgroundImage = `url(${movie.Poster})`;

    let posterImg = document.createElement("img");
    posterImg.src = movie.Poster;
    posterImg.className = "poster";

    let awards = document.createElement("h2");
    awards.textContent = movie.Awards;
    awards.className = "awards";

    let actorsParagraph = document.createElement("p");
    actorsParagraph.textContent = "Actors " + movie.Actors;
    actorsParagraph.className = "actors";

    let plotParagraph = document.createElement("h3");
    plotParagraph.textContent = movie.Plot;
    plotParagraph.className = "plot";

    let title = document.createElement("h2");
    title.textContent = `${movie.Title}`;
    title.className = "title";

    let imdbRatingParagraph = document.createElement("h3");
    imdbRatingParagraph.textContent = movie.imdbRating + "/10";
    imdbRatingParagraph.className = "rating";

    let time = document.createElement("h2");
    time.textContent = movie.Runtime;
    time.className = "time";

    let year = document.createElement("h2");
    year.textContent = movie.Year;
    year.className = "year";

    let rated = document.createElement("h2");
    rated.textContent = movie.Rated;
    rated.className = "rated";

    let director = document.createElement("h2");
    director.textContent = movie.Director;
    director.className = "director";

    let votes = document.createElement("h2");
    votes.textContent = movie.imdbVotes;
    votes.className = "votes";

    let writers = document.createElement("h2");
    writers.textContent = movie.Writer;
    writers.className = "writers";

    document.body.appendChild(container);
    let firstDiv = document.createElement("div");
    firstDiv.appendChild(title);
    let secDiv = document.createElement("div");
    secDiv.className = "secDiv";
    let pForSec = document.createElement("p");
    pForSec.textContent = "Rating";
    pForSec.className = "pForSec";
    secDiv.appendChild(pForSec);
    secDiv.appendChild(imdbRatingParagraph);

    firstDiv.appendChild(secDiv);
    firstDiv.className = "firstDiv";
    container.append(firstDiv);

    thirdDiv = document.createElement("div");
    thirdDiv.className = "thirdDiv";

    let forthDiv = document.createElement("div");
    forthDiv.className = "forthDiv";
    forthDiv.appendChild(year);
    forthDiv.appendChild(rated);
    forthDiv.appendChild(time);
    thirdDiv.appendChild(forthDiv);
    const favButton = document.createElement("button");
    favButton.id = movie.imdbID;
    favButton.textContent = "+";
    favButton.title = "add to favorite";
    thirdDiv.appendChild(favButton);
    thirdDiv.appendChild(posterImg);
    container.appendChild(thirdDiv);
    container.appendChild(plotParagraph);
    let fiveDiv = document.createElement("div");
    fiveDiv.className = "fiveDiv";
    let spanForDirector = document.createElement("span");
    spanForDirector.textContent = "Director: ";
    spanForDirector.className = "spanForDirector";
    fiveDiv.appendChild(spanForDirector);
    fiveDiv.appendChild(director);
    container.appendChild(fiveDiv);

    let sixDiv = document.createElement("div");
    sixDiv.className = "sixDiv";
    let spanForWriters = document.createElement("span");
    spanForWriters.textContent = "Writers: ";
    spanForWriters.className = "spanForWriters";
    sixDiv.appendChild(spanForWriters);
    sixDiv.appendChild(writers);
    container.appendChild(sixDiv);

    let sevenDiv = document.createElement("div");
    sevenDiv.className = "sevenDiv";
    let spanForAwards = document.createElement("span");
    spanForAwards.textContent = "Awards: ";
    spanForAwards.className = "spanForAwards";
    sevenDiv.appendChild(spanForAwards);
    sevenDiv.appendChild(awards);
    container.appendChild(sevenDiv);

    favButton.addEventListener("click", function () {
      fetch("../js_files/addToFavorites.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `movieID=${movie.imdbID}&movieName=${movie.Title}`,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.success) {
            alert("Movie added to favorites!");
          } else {
            alert("Already Added!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  })

  .catch((error) => {
    console.error("Error fetching movie details:", error);
  });
