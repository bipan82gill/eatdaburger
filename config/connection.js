var mysql = require("mysql");
connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"burgers_db"
});

connection.connect(function(err){
    if(err){
        console.error("error connection: "+ err.stack);
        return;
    }
        console.log("connection as id: " + connection.threadId);
});