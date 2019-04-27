const Genre = require('../models/genre');

exports.genre_list = (req, res) => {
  Genre.getAll((err, rows) => {
    if (err)
      return console.log(err);

    res.json(rows);
  })
};