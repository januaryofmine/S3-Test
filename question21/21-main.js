const axios = require("axios");

const url = "https://jsonmock.hackerrank.com/api/movies";

const getRawData = async ({ searchTitle, page }) => {
  const movieRes = await axios.get(
    `${url}/search/?Title=${searchTitle}&page=${page}`
  );
  const { data: movies, total_pages } = movieRes.data;
  return { movies, total_pages };
};

/**
 * Get Movie Titles by Title
 * @param {any} {searchTitle}
 * @returns {string}: sorted titles contain searchTitle string
 */
const getMovieTitles = async ({ searchTitle }) => {
  console.log(`Start get movies`);
  try {
    let { movies: movieList, total_pages } = await getRawData({
      searchTitle,
      page: 1,
    });

    // Fetch all movie match requirements
    let i = 2;
    while (i <= total_pages) {
      const { movies } = await getRawData({ searchTitle, page: i });
      movieList = movieList.concat(movies);
      i++;
    }

    // Map Movie Data Array to Title Movie Array
    movieList = movieList.map((movie) => movie.Title);

    // Sort ASC
    movieList = movieList.sort((nameA, nameB) => nameA.localeCompare(nameB));
    console.log(`End get movies`);
    return movieList;
  } catch (error) {
    console.log(`Error get movies`);
    console.log(error);
    return { error };
  }
};

getMovieTitles({ searchTitle: "Waterworld" }).then((rs) => console.log(rs));
