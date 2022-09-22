const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '10021998',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected!');
});