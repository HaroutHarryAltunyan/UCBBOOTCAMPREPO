-- Inserting data into businesses
INSERT INTO businesses (business_id, business_name) VALUES
(1, 'Prosser Lankovitch Products'),
(2, 'Ripley Enterprises'),
(3, 'Gormenghast, Inc.'),
(4, 'Nullhammer Corporation');

SELECT * FROM businesses;

INSERT INTO locations (location_id, location_name, location_manager, business_id) VALUES
(101, 'Annapolis, MD', 'Rita Ivanov', 1),
(102, 'Los Angeles, CA', 'Aaron Kamara', 2),
(103, 'Lincoln, NB', 'Farahd Mohamed', 3),
(104, 'Saskatchewan, CA', 'Amara Marquez', 4);