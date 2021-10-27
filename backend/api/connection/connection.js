const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tooR',
    database: 'forwardsca'
});

connection.connect( err => {
    if(err) {
        console.error(err);
        return
    } else {
        console.log('Database connected');
    }
});

module.exports = connection;