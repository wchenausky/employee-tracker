const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "employees",
});
connection.connect();
module.exports = connection;
