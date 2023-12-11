const routerMovies = require('express').Router();
const {
  getMovies, createMovie, deleteMovieById, likeMovie, dislikeMovie,
} = require('../controllers/movie');
const {
  validateMovie, validateMovieId,
} = require('../validator/validator');

routerMovies.get('/', getMovies);
routerMovies.post('/', validateMovie, createMovie);
routerMovies.delete('/:movieId', validateMovieId, deleteMovieById);
routerMovies.put('/:movieId/likes', validateMovieId, likeMovie);
routerMovies.delete('/:movieId/likes', validateMovieId, dislikeMovie);

module.exports = routerMovies;
