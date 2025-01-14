const chalk = require('chalk');
const red = chalk.red
const yellow = chalk.yellow 
const green = chalk.green 

const mysql = require('mysql2/promise')

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_send_bot',
    namedPlaceholders: true
};

const db = mysql.createPool(dbConfig);

db.on("conection", () => 
    console.log(`${yellow("DATABASE ")} ${"CONECTED"}!`)
)
module.exports = db 