const db = require('../db');

exports.getAll = (done) => {
  const queryString = 'SELECT * FROM `Genres`';
  db.query(queryString, (err, rows) => {
    if (err)
      return done(err);
    done(null, rows);
  })
}