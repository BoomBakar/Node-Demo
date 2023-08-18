const Director = require('../models/directors');
const validateDirector = require('../validator/validateDirector');

const directorController = {
    getAll: async (req, res) => {
        try{
            const directors = await Director.find();
            res.status(200).send(directors);
        }
        catch(err){
            console.log(err);
        }
    }
    ,
    getById: async (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        try{
            const director = await Director.findById(req.params.id);
            if (!director) return res.status(404).send('The director with the given ID was not found.');
            res.status(200).send(director);
        }
        catch(err){
            console.log(err);
        }
    },
    add: async (req, res) => {
        const { error } = validateDirector(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        try{
            const {name, age} = req.body;
            const newDirector = new Director({
                name,
                age
            });
            const director = await newDirector.save();
            res.status(200).send(director);

        }catch(err){
            console.log(err);
        }
    },
    update: async (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        const { error } = validateDirector(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        try{
            const {name, age} = req.body;
            const director = await Director.findByIdAndUpdate(req.params.id, {
                name,
                age
            }, {new: true});
            if (!director) return res.status(404).send('The director with the given ID was not found.');
            res.status(200).send(director);
        }
        catch(err){
            console.log(err);
        }
    },
    delete: async (req, res) => {
        error = req.params.id.length < 24;
        if (error) return res.status(400).send('Invalid ID.');
        try{
            const director = await Director.findByIdAndRemove(req.params.id);
            if (!director) return res.status(404).send('The director with the given ID was not found.');
            res.status(200).send(director);
        }
        catch(err){
            console.log(err);
        }
    }
}


module.exports = directorController;