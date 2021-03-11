  
USE jobsDB;

INSERT INTO department (dept_name)
VALUES 
("Engineering"),
("Legal"),
("Sales"),
("Finanace")


INSERT INTO role (title, salary, department_id)
VALUES 
("Software Engineer", 150,000, 3),
("Lead Developer", 80,000, 3),
("Sales Lead", 65,000, 4),
("Sales Person", 30,00, 4),
("Laawyer", 175,000, 2),
("Legal Team Lead", 70,000, 2),
("Accountant", 95,000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Marisa", "NeSmith", 1, null),
("William", "Chenausky", 2, null),
("Emily", "Johnson", 3, null),
("Eric", "Smith", 4, null),
("Mike", "Jones", 5, null);
