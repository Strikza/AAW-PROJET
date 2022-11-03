DROP DATABASE IF EXISTS db_zoo;
CREATE DATABASE db_zoo;

DROP TABLE IF EXISTS Animal;
CREATE TABLE Animal (
    id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    imageURL VARCHAR(255) NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO Animal (id, name, description, imageURL) VALUES (1, 'Test', 'Description aleatoire', 'testimgurl');

SELECT * FROM Animal;