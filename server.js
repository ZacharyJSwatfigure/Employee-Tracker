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

function runEmployees()

function viewAllDepartments()

function viewAllRoles()

function viewAllEmployees()

function addDepartment()

function addRoles()

function selectRole()

function selectManager() 

function addEmployee() 

function updateEmployeeRole()

function updateManager()