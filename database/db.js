const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3308,
  database: 'asignacion_citas',
});

connection.connect((error) => {
  if (error) {
    console.error(`The connection error is ${error}`);
    return;
  }
  console.log('Connected successfully to DB asignacion_citas');
});

module.exports = connection;
