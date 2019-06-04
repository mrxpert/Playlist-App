const express = require('express');
const db = require('../db');
const router = express.Router();

const genre_controller = require('../controllers/genreController');

// GET request for list of all Genre items.
router.get('/', genre_controller.genre_list);

// GET request for one certain Genre.
router.get('/:id', genre_controller.genre_detail);

// DELETE request for one certain Genre 
router.delete('/:id', genre_controller.genre_delete);

// POST request for creating new Genre 
router.post('/add', genre_controller.genre_add);

// POST request for editing existing Genre
router.post('/edit/:id', genre_controller.genre_edit);

module.exports = router;