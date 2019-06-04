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

exports.deleteGenre = (genre_id) => {
  const queryString = 'DELETE FROM `Genres` WHERE genre_id = "' + genre_id + '" ';
  
  return new Promise((resolve, reject) => {
    db.query(queryString, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve('SUCCESSFULLY DELETED!');
      }
    })
  })
}

exports.addGenre = (genre_name) => {
  const queryString = 'INSERT INTO `Genres` (genre_name) VALUES ("' + genre_name + '")';
  
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