const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employees'
});

connection.connect((err)=>{
if(err) throw err;
console.log("connected to mysql");
})

module.exports=connection;

