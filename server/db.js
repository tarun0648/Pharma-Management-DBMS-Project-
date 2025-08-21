var mysql = require('mysql2');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'tarun12345',
    database : 'pharmacy'
});

db.connect(err => {
    if(err) {
        console.log("Database connection error:", err.message);
        console.log("Please check your MySQL server is running and credentials are correct");
    } else {
        console.log("Connected to database successfully");
    }
});

// Handle connection errors
db.on('error', function(err) {
    console.log('Database error:', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.log('Database connection was closed. Reconnecting...');
        db.connect();
    } else {
        throw err;
    }
});

module.exports = db;