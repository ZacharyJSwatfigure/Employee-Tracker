const inquirer = require('inquirer');
const mysql = require('mysql2');
const validator = require('validator');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db',
});

connection.connect();

