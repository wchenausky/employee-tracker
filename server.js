const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
// const connection = require("./db/connection");
const express = require("express");
const app = express();
var PORT = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employees",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected as id" + connection.threadId);
});

const mainOptions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View all Employees by Role",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((res) => {
      console.log("test");
      switch (res.options) {
        case "View All Employees":
          findAllEmployees();
          break;
        case "View all Employees by Department":
          findAllDepartments();
          break;
        case "View all Employees by Role":
          findAllRoles();
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
        case "Exit":
          connection.end();
          break;
      }
    });
};

mainOptions();

function findAllEmployees() {
  connection.query("SELECT * FROM employee", (err, res) => {
    console.log(res);
    if (err) throw err;
    console.table(res);
    mainOptions();
  });
}

function findAllRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    mainOptions();
  });
}

function findAllDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    mainOptions();
  });
}

function addEmployee() {
  inquirer
    .prompt([
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
        type: "input",
        name: "role",
        message: "What is the employee's role ID?",
      },
      {
        type: "input",
        name: "managerID",
        message: "Who is the employee's manager's ID?",
      },
    ])
    .then((res) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: res.first,
          last_name: res.last,
          role_id: res.role,
          manager_id: res.managerID,
        },
        (err) => {
          if (err) throw err;
          console.log("You added a new Employee");
          mainOptions();
        }
      );
    });
}

function addRole() {
  return inquirer
    .prompt([
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
    .then((res) => {
      connection.query("INSERT INTO role SET ?", {
        title: res.role,
        salary: res.salary,
        department_id: res.roleID,
      });
      console.log("You added a new role");
      mainOptions();
    });
}

function addDepartment() {
  return inquirer
    .prompt({
      type: "input",
      name: "department",
      message: "What is the name of the Department?",
    })
    .then((res) => {
      connection.query("INSERT INTO department SET ?", {
        name: res.department,
      });
      console.log("Department Added");
      mainOptions();
    });
}

const updateRole = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);

    const employees = res.map((emp) => ({
      name: `${emp.first_name} ${emp.last_name}`,
      value: `${emp.id}`,
    }));
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.table(res);
      const roles = res.map((rol) => ({
        name: `${rol.title}`,
        value: `${rol.id}`,
      }));

      inquirer
        .prompt([
          {
            type: "list",
            name: "employeeList",
            message: "Which employee do you want to update?",
            choices: employees,
          },
          {
            type: "list",
            name: "roleId",
            message: "What is the employees new role ID?",
            choices: roles,
          },
        ])
        .then((res) => {
          console.log(res);
          connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [res.roleId, res.employeeList],
            (err, res) => {
              if (err) throw err;
              console.log("The employee's role was successfully updated"),
                mainOptions();
            }
          );
        });
    });
  });
};

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
});

// function updateEmployee() {
//     findAllEmployees()
// };
