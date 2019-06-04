const Genre = require('../models/genre');

exports.genre_list = async (req, res) => {
  try {
    res.json(await Genre.getAll());
  } catch(err) {
    console.error(`something failed: ${err}`);
  }
};

exports.genre_detail = async (req, res) => {
  try {
    res.json(await Genre.getDetail(req.params.id));
  } catch(err) {
    console.error(`something failed: ${err}`);
  }
}

exports.genre_delete = async (req, res) => {
  try {
    res.send(await Genre.deleteGenre(req.params.id));
  } catch(err) {
    console.error(`something failed: ${err}`);
  }
}

exports.genre_add = async (req, res) => {
  try {
    res.json(await Genre.addGenre(req.body.genre_name));
  } catch(err) {
    console.error(`something failed with adding new genre: ${err}`);
  }
}