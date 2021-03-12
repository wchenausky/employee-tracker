// const connection = require('./connection'),


// class DB {
// constructor(connection){
//     this.connection = connection
// }

// findAllEmployees() {
//     connection.query(
//         "SELECT * FROM employee", (err, res) => {
//             if (err) throw err;
//             console.table(res);
//             mainOptions();
//         }
//     )
// }

// findAllDepartments() {
//     connection.query(
//         "SELECT * FROM employee.deparments", (err, res) => {
//             if (err) throw err;
//             console.table(res);
//             mainOptions();
//         }
//     )
// }

// // findAllRoles() {
// //     connection.query(
// //         "SELECT * FROM role", (err, res) => {
// //             if (err) throw err;
// //             console.table(res);
// //             mainOptions();
// //         }
// //     )
// // }

// // };
// // module.exports = new DB(connection)