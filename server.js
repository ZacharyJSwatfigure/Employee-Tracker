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

function viewAllRoles() {
    connection.query(
        'select ro.title as Role_title, ro.salary as Salary , dept.name as DepartmentName from Role ro left join department as dept on dept.id = ro.department_id', (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res)
            runEmployees();
        }
    )
}

// function viewAllEmployees()


function viewAllEmployees() {
    const sql = 'Select emp.id as EmployeeID, concat(emp.first_name,"  ",emp.last_name ) as EmployeeName , ro.title as Job_tittle, ro.salary as Salary,dept.name as Department_Name,concat(emp2.first_name,"  ",emp2.last_name) as ManagerName from employees_db.employee as emp left join employees_db.employee as emp2 on emp2.id=emp.manager_id left join employees_db.Role as ro on emp.role_id=ro.id left join employees_db.department as dept on dept.id = ro.department_id';
    connection.query(
        sql, 
        (err, res) => {
            if (err) {
                throw err;
            }
            console.table(res)
            runEmployees();
        }

    )
}


// function addDepartment()

function addDepartment() {
    inquirer.prompt([

        {
            type: 'input',
            name: 'department',
            message: 'Please add a department name:'
        }

    ]).then(answer => {
        console.log(answer);
        connection.query('INSERT INTO department SET?', { name: answer.department }, (err, res) => {
            if (err) throw err;
            console.log('Added new department')
            runEmployees();
        });
    });
}

// function addRoles()

// function selectRole()

// function selectManager() 

// function addEmployee() 

// function updateEmployeeRole()

// function updateManager()

// function viewEmployeeByManager()

runEmployees();