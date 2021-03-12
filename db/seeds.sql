  
USE employees;

INSERT INTO department (name)
VALUES 
("Engineering"),
("Legal"),
("Sales"),
("Finance");


INSERT INTO role (title, salary, department_id)
VALUES 
("Software Engineer", 150000, 3),
("Lead Developer", 80000, 3),
("Sales Lead", 65000, 4),
("Sales Person", 3000, 4),
("Lawyer", 175000, 2),
("Legal Team Lead", 70000, 2),
("Accountant", 95000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Marisa", "NeSmith", 1, null),
("William", "Chenausky", 2, null),
("Emily", "Johnson", 3, null),
("Eric", "Smith", 4, null),
("Mike", "Jones", 5, null);
