const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');

let app = express();

app.set('port', 4000);

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});