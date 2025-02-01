-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

\c customers_db;

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_orders(
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    order_details TEXT,
    FOREIGN KEY(customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);