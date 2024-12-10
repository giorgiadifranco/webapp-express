const mysql = require('mysql2')
const connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT

});


connection.connect((err, res)=>{
    if(err) {
        console.log('Error connecting to database', err)
    } else {
        console.log('connected to db');
        
    }
})

module.exports = connection;


