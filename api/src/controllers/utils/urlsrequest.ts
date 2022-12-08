import "dotenv/config";
const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const requestURLS = {
  fetchRandomMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}`,
  fetchImage: IMAGE_URL,
  fetchMoviebyId: `${BASE_URL}/movie/`,
};

export default requestURLS;
