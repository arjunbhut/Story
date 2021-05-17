import mysql from 'mysql';

export  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'story'
})

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MysqlServer");
});
