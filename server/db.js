const mysql = require('mysql');

let connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'playlist_database'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('[OK] DB is connected');
});

module.exports = connection;