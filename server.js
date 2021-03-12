const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");


const mainOptions = () => {
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
        "Add Department",
        "Add Role",
        "Remove Employee", //delete
        "Update Employee Role",
        "Update Employee Manager",// delete
      ],
    },
  ])
  .then((res) =>{
      console.log("test")
      switch(res.mainOptions) {
          case "View All Employees":
              findAllEmployees();
              break;
        case "View all Employees by Department":
            findAllDepartment();
            break;
        case "View all Employees by Role":
            findAllRole();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Add Role":
            addRole();
            break;
        case "Update Employee Role":
            updateRole();
            break;
            case:
      }
  })
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
  ])
};

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
  ])
};

function addDepartment() {
  return inquirer.prompt({
      type: "input",
      name: "department",
      message: "What is the name of the Department?",
})
.then((res) => {
    connection.query('INSERT INTO department SET ?', {
        dept_name: res.addDepartment
    });
    console.log("---- Department added ---- ");
mainOptions();
})
};


function updateEmployee() {
    findAllEmployees()
};
