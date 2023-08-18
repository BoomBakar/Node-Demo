const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');


//Get request for all directors
router.get('/directors', directorController.getAll);
//Get request for a specific director
router.get('/directors/:id', directorController.getById);
//Post request to add a director
router.post('/directors', directorController.add);
//Put request to update a director
router.put('/directors/:id', directorController.update);
//Delete request to delete a director
router.delete('/directors/:id', directorController.delete);


module.exports = router;