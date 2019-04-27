const express = require('express');
const morgan = require('morgan');
const db = require('./db');

let app = express();

app.set('port', 4000);

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));