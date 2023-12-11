const routerMovies = require("express").Router();
const {
  getMovies,
  createMovie,
  deleteMovieById,
  likeMovie,
  dislikeMovie,
} = require("../controllers/movie");
const { validateMovie } = require("../validator/validator");

routerMovies.get("/", getMovies);
routerMovies.post("/", validateMovie, createMovie);
routerMovies.delete("/:movieId", deleteMovieById);
routerMovies.put("/:movieId/likes", likeMovie);
routerMovies.delete("/:movieId/likes", dislikeMovie);

module.exports = routerMovies;
