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