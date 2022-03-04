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

function runEmployees() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'create department',
                'create roles',
                'create employees',
                'Update employee roles',
                'Update employee manager',
                'View employee by manager',
                'Exit'
            ]

        }).then(answer => {

            switch (answer.option) {
                case "View all created departments":
                    viewAllDepartments();
                    break;

                case "View all current roles":
                    viewAllRoles();
                    break;

                case "View all current employees":
                    viewAllEmployees();
                    break;

                case "create department":
                    addDepartment();
                    break;

                case "create roles":
                    addRoles();
                    break;

                case "create employees":
                    addEmployee();
                    break;

                case "Update employee's roles":
                    updateEmployeeRole();
                    break;

                case "Update employee's manager":
                    updateManager()
                    break;

                case "View employees by their manager":
                    viewEmployeeByManager()
                    break;

                case "Exit":
                    connection.end();
                    console.log('Bye bye!');
                    break;
            }
        })
}

// function viewAllDepartments()

function viewAllDepartments() {
    connection.query(
        'SELECT * FROM Department', (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res)
            runEmployees();
        }
    )
}

// function viewAllRoles()

// function viewAllEmployees()

// function addDepartment()

// function addRoles()

// function selectRole()

// function selectManager() 

// function addEmployee() 

// function updateEmployeeRole()

// function updateManager()

// function viewEmployeeByManager()

runEmployees();