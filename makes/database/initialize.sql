ALTER USER 'root'@'localhost' IDENTIFIED BY 'oyster';

CREATE DATABASE vulnerable_js_app;

USE vulnerable_js_app;

CREATE TABLE users (
  name VARCHAR(30),
  user_name VARCHAR(20),
  password VARCHAR(32),
  PRIMARY KEY (user_name)
);

INSERT INTO users (name, user_name, password)
VALUES ("Jane Doe", "janedoe", "dogfood");

INSERT INTO users (name, user_name, password)
VALUES ("Marjorie Allen", "marjorie", "firewall");

INSERT INTO users (name, user_name, password)
VALUES ("Timothee La Gall", "heavyelephant895", "ferret");

INSERT INTO users (name, user_name, password)
VALUES ("Eitel Kolbeck", "greensnake606", "loud");
