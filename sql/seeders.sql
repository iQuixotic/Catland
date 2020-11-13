INSERT INTO roles VALUES(1, 'admin');
INSERT INTO roles VALUES(2, 'manager');
INSERT INTO roles VALUES(3, 'default user');

INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (5, 4, 9, 6, true);
INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (7, 3, 9, 10, true);
INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (5, 4, 9, 6, false);
INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (5, 4, 3, 0, true);
INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (3, 8, 1, 6, true);
INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (3, 3, 8, 7, true);
INSERT INTO ratings (age, cuddly, playful, clean, dog_friendly) VALUES (5, 2, 10, 6, false);

-- -- for seeding the user table
INSERT INTO users (username, password, first_name, last_name, email, role_id)
    VALUES ('financialLarry', 'finfin', 'Larry', 'Finance', 'fromto@yahoo.com', 1);
INSERT INTO users (username, password, first_name, last_name, email, role_id)
    VALUES ('adminJim', 'adminadmin', 'Jim', 'Admin', 'electionguy_434@yahoo.com', 2);
INSERT INTO users (username, password, first_name, last_name, email, role_id)
    VALUES ('defaultDan', 'defaultdefault', 'Dan', 'Default', 'secretsquirrel96@yahoo.com', 3);
INSERT INTO users (username, password, first_name, last_name, email, role_id)
    VALUES ('user_04', 'patpat', 'Patrick', 'Byrde', 'patkumuji@yahoo.com', 3);
INSERT INTO users (username, password, first_name, last_name, email, role_id)
    VALUES ('sandra', 'sarasara', 'Thommas', 'Ato', 'shirleyj@yahoo.com', 1);

INSERT INTO cats (picture, name, ratings_id)
    VALUES ('http://cat.com', 'Sandra', 1);
INSERT INTO cats (picture, name, ratings_id)
    VALUES ('http://catt.com', 'Prescott', 2);
INSERT INTO cats (picture, name, ratings_id)
    VALUES ('http://catr.com', 'Shirley', 3);
INSERT INTO cats (picture, name, ratings_id)
    VALUES ('http://catd.com', 'Monokuma', 4);
INSERT INTO cats (picture, name, ratings_id)
    VALUES ('http://cats.com', 'Cranky', 5);