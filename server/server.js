const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');

let app = express();

app.set('port', 4000);

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));