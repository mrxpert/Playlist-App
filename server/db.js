const mysql = require('mysql');

//let connection = mysql.createConnection({
//  host    : 'localhost',
//  user    : 'root',
//  password: '',
//  database: 'playlist_database'
//});

let connection = mysql.createConnection({
  host    : 'www.db4free.net',
  user    : 'coderoach',
  password: 'coderoach',
  database: 'coderoach'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('[OK] DB is connected');
});

module.exports = connection;