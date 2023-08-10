const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const validateMovie = require('./validator/validateMovie');
const movies = require('./models/movies');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Working!');
});
//Get request for all movies
app.get('/api/movies', (req, res) => {
    console.log(res);
    res.send(movies);
});
//Get request for a specific movie
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});
//Post request to add a movie
app.post('/api/movies', (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const movie = {
        id: movies.length + 1,
        title: req.body.title,
        year: req.body.year
    };
    movies.push(movie);
    res.send(movie);
});
//Put request to update a movie
app.put('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    movie.title = req.body.title;
    movie.year = req.body.year;
    res.send(movie);
});
//Delete request to delete a movie
app.delete('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    res.send(movie);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT || 3000}`);
});



//auth middleware
//routing separate
//req and res objects 
//validation -done
