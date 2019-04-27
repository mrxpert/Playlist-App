const express = require('express');
const db = require('../db');
const router = express.Router();

const genre_controller = require('../controllers/genreController');

// GET request for list of all Genre items.
router.get('/', genre_controller.genre_list);

module.exports = router;