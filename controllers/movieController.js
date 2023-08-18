const Movie = require('../models/movies');
const Director = require('../models/directors');    
const validateMovie = require('../validator/validateMovie');
const validateDirector = require('../validator/validateDirector');

const movieController = {
    getAll: async (req, res) => {
        
        try{
            const movies = await Movie.find();
            res.status(200).send(movies);
        }
        catch(err){
            console.log(err);
        }
        
    },
    getById: async (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        try{
            const movie = await Movie.findById(req.params.id);
            if (!movie) return res.status(404).send('The movie with the given ID was not found.');
            res.status(200).send(movie);

        }
        catch(err){
            console.log(err);
        } 
    },
    add: async (req, res) => {
        
        const { error } = validateMovie(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        try{
            const {title, yearReleased, director} = req.body;
            const newMovie = new Movie({
                title,
                yearReleased,
                director
            });
            const movie = await newMovie.save();
            res.status(200).send(movie);
        }catch(err){
            console.log(err);
        }
    },
    update: async (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        const { error } = validateMovie(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        try{   

        }
        catch(err){
            console.log(err);
        }
    },
    delete: (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        const movie = movies.find(m => m.id === parseInt(req.params.id));
        if (!movie) return res.status(404).send('The movie with the given ID was not found.');
        const index = movies.indexOf(movie);
        movies.splice(index, 1);
        res.status(200).send(movie);
    }
};

module.exports = movieController;