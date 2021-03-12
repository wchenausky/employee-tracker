const mysql = require("mysql");
const inquirer = repuire('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "employees",
});
connection.connect(err => {
  if(err) throw err;
  console.log("Connected as id" + connection.threadId)
});
module.exports = connection;
