const movies = require('../models/movies');
const validateMovie = require('../validator/validateMovie');

const movieController = {
    getAll: (req, res) => {
        res.send(movies);
    },
    getById: (req, res) => {
        const movie = movies.find(m => m.id === parseInt(req.params.id));
        if (!movie) return res.status(404).send('The movie with the given ID was not found.');
        res.status(200).send(movie);
    },
    add: (req, res) => {
        const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        year: req.body.year
    };
    movies.push(movie);
    res.status(200).send(movie);
    },
    update: (req, res) => {
        const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    movie.title = req.body.title;
    movie.year = req.body.year;
    res.status(200).send(movie);
    },
    delete: (req, res) => {
        const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.status(200).send(movie);
    }
};

module.exports = movieController;