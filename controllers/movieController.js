const Movie = require('../models/movies');
const validateMovie = require('../validator/validateMovie');

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
            const movie = await Movie.findById(req.params.id).populate('director');
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
        er = req.params.id.length < 24;
        if (er) return res.status(400).send('Invalid ID.');
       
        try{
            const {title, yearReleased} = req.body;
            const movie = await Movie.findByIdAndUpdate(req.params.id, {
                title,
                yearReleased
            }, {new: true});
            if (!movie) return res.status(404).send('The movie with the given ID was not found.');
            res.status(200).send(movie);
        }
        catch(err){
            console.log(err);
        }
    },
    delete: async (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        try{
            const movie = await Movie.findByIdAndRemove(req.params.id);
            if (!movie) return res.status(404).send('The director with the given ID was not found.');
            res.status(200).send(movie);
        }
        catch(err){
            console.log(err);
        }
    }
};

module.exports = movieController;