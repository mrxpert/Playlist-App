const db = require('../db');

exports.getAll = () => {
  const queryString = 'SELECT * FROM `Genres`';

  return new Promise((resolve, reject) => {  db.query(queryString, (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows);
      }
    })
  });
};

exports.getDetail = (genre_id) => {
  const queryString = 'SELECT * FROM `Genres` WHERE genre_id = "' + genre_id + '" ';
  
  return new Promise((resolve, reject) => {
    db.query(queryString, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    })
  })
}