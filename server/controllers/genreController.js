const Genre = require('../models/genre');

exports.genre_list = async (req, res) => {
  try {
    res.json(await Genre.getAll());
  } catch(err) {
    console.error(`something failed: ${err}`);
  }
};