const mysql = require('mysql2/promise')

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_send_bot',
    namedPlaceholders: true
};

const db = mysql.createPool(dbConfig);

module.exports = db 