const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection") ;
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "exam",
  };

async function connectionCheck() {
    const connection = mysql.createConnection(dbinfo) ;

    await connection.connectAsync() ;

    console.log("Connection Established !!");

    await connection.endAsync() ;
}
/*connectionCheck() ;*/

async function addUser(user) {
    const connection = mysql.createConnection(dbinfo) ;
    await connection.connectAsync() ;
    let sql = `insert into message (text) values (?) ;` ;
    connection.queryAsync(sql,[user.text]) ;
    console.log("Record Added !!") ;
    await connection.endAsync() ;
}

const user1 = {
    text : 'Hello Universe'
} ;
const user2 = {
    text : 'Hello World'
} ; 
const user3 = {
    text : 'I am Fine'
} ;
/*addUser(user1);
addUser(user2);
addUser(user3);*/

async function dispAllMessages() {
    const connection = mysql.createConnection(dbinfo) ;
    await connection.connectAsync() ;
    let sql = `select * from message ;` ;
    const list = await connection.queryAsync(sql,[]) ;
    console.log("Display from DB all text messages Data!!") ;
    await connection.endAsync() ;
    console.log(list);
    return list ;
}
//console.log(dispAllMessages());

module.exports = {dispAllMessages , addUser};