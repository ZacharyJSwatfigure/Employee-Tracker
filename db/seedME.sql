USE employees_db;

INSERT INTO Department (name)
VALUES('Project Management'),
    ('Front End Development'),
    ('Back End Development'),
    ('Sales');

INSERT INTO Role 
    (title, salary,department_id)
VALUES 
    ('Front End Engineer', 75000, 2),
    ('Front End Lead', 105000, 2),

    ('Back End Engineer', 77500, 3),
    ('Back End Lead', 130000, 3),

    ('Project Lead', 150000, 1),
    ('Project Coordinator', 115000,1),

    ('Accountant', 75000,4),
    ('Sales Representative', 45000, 4);

INSERT INTO Employee 
    (first_name,last_name,role_id, manager_id)
VALUES 
    ('Master', 'Chief', 1, NULL),
    ('Hello', 'Kitty', 2, NULL),
    ('Jimmy', 'Nuetron', 3, NULL),
    ('Samurai', 'Jack', 4, NULL);