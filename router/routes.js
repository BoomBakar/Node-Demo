const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


//Get request for all movies
router.get('/movies', movieController.getAll);
//Get request for a specific movie
router.get('/movies/:id', movieController.getById);
//Post request to add a movie
router.post('/movies', movieController.add);
//Put request to update a movie
router.put('/movies/:id', movieController.update);
//Delete request to delete a movie
router.delete('/movies/:id', movieController.delete);


module.exports = router;