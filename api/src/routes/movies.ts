import express, { type Request } from "express";
import {
  getMovieById,
  getMoviesPerPage,
} from "../controllers/movies.controller";

const router = express.Router();

router.get("/", async (req: any, res) => {
  let { page } = req.query;
  const allMovies = await getMoviesPerPage(page);
  res.status(200).send(allMovies);
});

router.get("/:id", async (req: any, res) => {
  let { id } = req.params;
  const movieById = await getMovieById(id);
  res.status(200).send(movieById);
});

export { router };
