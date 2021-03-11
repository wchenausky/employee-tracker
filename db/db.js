const connection = require('./connection'),



class DB {
constructor(connection){
    this.connection = connection
}


findAllEmployees(){
    this.connection.query(
        ""
    )
}
}
module.exports = new DB(connection)