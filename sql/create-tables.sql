DROP DATABASE IF EXISTS catland;
--------------------------------------------------------------------------
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
CREATE DATABASE catland;
-- for creating the roles table only
CREATE TABLE roles (
  _id SERIAL PRIMARY KEY,
  role varchar(100)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

-- for creating the users table
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  username varchar(70) UNIQUE,
  password VARCHAR(255),
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  email VARCHAR(70),
  role_id int references roles(_id)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
-- for creating the ratings table
CREATE TABLE ratings (
  _id SERIAL PRIMARY KEY,
  age int,
  cuddly int,
  playful int,
  clean int,  
  dog_friendly boolean
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

-- for creating the cats table
CREATE TABLE cats (
  _id SERIAL PRIMARY KEY,
  picture VARCHAR(255),
  name VARCHAR(255),
  ratings_id int references ratings(_id)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 