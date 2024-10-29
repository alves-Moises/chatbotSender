const mysql = require('mysql2/promise')

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_send_bot'
};

const db = mysql.createPool(dbConfig);

module.exports = {db}