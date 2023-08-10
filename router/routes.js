const express = require('express');
const router = express.Router();
const validateMovie = require('../validator/validateMovie');
const movies = require('../models/movies');


router.get('/', (req, res) => {
    console.log(req);
    res.send('Working!');
});
//Get request for all movies
router.get('/movies', (req, res) => {
    //console.log(res);
    res.send(movies);
});
//Get request for a specific movie
router.get('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.status(200).send(movie);
});
//Post request to add a movie
router.post('/movies', (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        year: req.body.year
    };
    movies.push(movie);
    res.status(200).send(movie);
});
//Put request to update a movie
router.put('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    movie.title = req.body.title;
    movie.year = req.body.year;
    res.status(200).send(movie);
});
//Delete request to delete a movie
router.delete('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.status(200).send(movie);
});


module.exports = router;