DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
-- a business that has many offices in different locations
CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255)
);

CREATE TABLE locations (
    location_id INTEGER,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
    business_id INTEGER,
    FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
);