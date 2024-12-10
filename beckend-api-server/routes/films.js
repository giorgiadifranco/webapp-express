const express = require('express');
const router = express.Router();

const MovieControllers = require('../controllers/MovieControllers')


//rotta per tutti i libri

router.get('/', MovieControllers.index)

router.get('/:id', MovieControllers.show);


module.exports = router;