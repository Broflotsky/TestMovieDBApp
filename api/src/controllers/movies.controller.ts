import { Movies, MovieId } from "../../types";
import requestURLS from "./utils/urlsrequest";
import "dotenv/config";

const API_KEY = process.env.API_KEY;

export const getMoviesPerPage = async (page: number): Promise<Movies[]> => {
  const data = await fetch(`${requestURLS.fetchRandomMovies}&page=${page}`);
  const movies = await data.json();
  const results = movies.results as Movies[];
  const moviesResult = results.map((item) => {
    return {
      ...item,
      backdrop_path: `${requestURLS.fetchImage + item.backdrop_path}`,
      poster_path: `${requestURLS.fetchImage + item.poster_path}`,
    };
  });
  return moviesResult;
};

export const getMovieById = async (id: number): Promise<MovieId> => {
  const data = await fetch(
    `${requestURLS.fetchMoviebyId + id}?api_key=${API_KEY}`
  );
  const movies = await data.json();
  const moviesResult = {
    ...movies,
    backdrop_path: `${requestURLS.fetchImage + movies.backdrop_path}`,
    poster_path: `${requestURLS.fetchImage + movies.poster_path}`,
  };
  return moviesResult;
};
