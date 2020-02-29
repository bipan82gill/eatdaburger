var connection = require("../config/connection");

function  createQmarks(num) {
    var arr = [];
    for(var i= 0; i<num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translateSql(obj) {
    var arr =[];
    for(var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf(" ")>=0){
                value = "'"+ value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
    selectAll : function(table , cb){
        var dbquery = "SELECT * FROM "+ table + ";";
        
        connection.query(dbquery, function(err, res){
            if(err){
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var dbquery = "INSERT INTO "+ 
        table + 
        "(" + 
        cols.toString()+ 
        "VALUES("+
         createQmarks(vals.length) +
         ");";
         console.log(dbquery);

    connection.query(dbquery, function(err, res){
        if(err){
            throw err;
        }
            cb(res);
        });
    },
    updateOne: function(table, objColsVals, condition, cb){
        var dbquery = "UPDATE" +
         table + 
         "SET  "+
         translateSql(objColsVals)+
         "WHERE"+
         condition;
         console.log(dbquery);

    connection.query(dbquery, function(err, res){
        if(err){
            throw err;
        }
            cb(res);
        });
    },
    deleteOne: function(table, condition, cb){
        var dbquery = "DELETE FROM"+
        table +
        "WHERE" +
        condition;
        console.log(dbquery);

    connection.query(dbquery, function(err, res){
        if(err){
            throw err;
        }
            cb(res);
        });
    }
}
module.exports = orm;