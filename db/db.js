const connection = require('./connection'),


class DB {
constructor(connection){
    this.connection = connection
}

findAllEmployees() {
    this.connection.query(
        "SELECT * FROM employee", (err, res) => {
            if (err) throw err;
            console.table(res);
            mainOptions();
        }
    )
}

findAllDepartments() {
    this.connection.query(
        "SELECT * FROM employee.deparments", (err, res) => {
            if (err) throw err;
            console.table(res);
            mainOptions();
        }
    )
}

findAllRoles() {
    this.connection.query(
        "SELECT * FROM role", (err, res) => {
            if (err) throw err;
            console.table(res);
            mainOptions();
        }
    )
}

};
module.exports = new DB(connection)