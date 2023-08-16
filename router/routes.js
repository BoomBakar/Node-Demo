const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


//Get request for all movies
router.get('/movies', movieController.getAllMovies);
//Get request for a specific movie
router.get('/movies/:id', movieController.getMovieById);
//Post request to add a movie
router.post('/movies', movieController.addMovie);
//Put request to update a movie
router.put('/movies/:id', movieController.updateMovie);
//Delete request to delete a movie
router.delete('/movies/:id', movieController.deleteMovie);


module.exports = router;