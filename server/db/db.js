// const mysql= require('mysql2');
// const connection =mysql.createConnection({
//     host: process.env.DBHOST,
//     user: process.env.DBUSER,
//     password: process.env.DBPASSWORD,
//     database:process.env.DBNAME,
// });
// connection.connect((err)=>{
//     if(err) throw err;
//     console.log('Connected to MYSQL Database');
// });

// module.exports = connection;
// const mysql = require('mysql2/promise');
const mysql = require('mysql2/promise'); 
const db = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;