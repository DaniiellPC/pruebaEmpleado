CREATE DATABASE restapi;
CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    fullname TEXT,
    function TEXT 
);

INSERT INTO employee (fullname, funcion)
    VALUES ('Daniel Pulgarin', 'developer'),
        ('Alejandro Cruz', 'analyst');