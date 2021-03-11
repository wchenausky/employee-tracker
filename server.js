const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

function mainOptions() {
  inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees by Manager", //delete 
        "View all Employees by Role",
        "Add Employee",
        "Add Dempatment",
        "Add Role",
        "Remove Employee", //delete
        "Update Employee Role",
        "Update Employee Manager",// delete
      ],
    },
  ])
};
mainOptions()

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "last",
      message: "What is the employee's last name",
    },
    {
      type: "list",
      name: "role",
      message: "What is the employee's role?",
      choices: [
        "Sales Lead",
        "Salesperson",
        "Lead Engineer",
        "Software Engineer",
        "Lead Engineer",
        "Accountant",
        "Legal Team Lead",
        "Lawyer",
      ],
    },
    {
      type: "input",
      name: "manager",
      message: "Who is the employee's manager?",
    },
  ]);
}

function addRole() {
  return inquirer.prompt([
    {
      type: "input",
      name: "role",
      message: "What is the employee's role?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "input",
      name: "roleID",
      message: "What is the ID for the role?",
    },
  ]);
}

function addDepartment() {
  return inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What is the name of the Department?",
    },
  ]);
}
