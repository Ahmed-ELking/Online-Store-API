### Build A Storefront Backend

This is a backend API build in Nodejs for an online store. It exposes a RESTful API that will be used by the frontend developer on the frontend.

The database schema and and API route information can be found in the REQUIREMENT.md

### Installation Instructions
This section contains all the packages used in this project and how to install them.

 npm install

### Packages

Here are all the packages that I installed.

# express
npm i  express 
npm i -D @types/express

# typescript
npm i -D typescript
npm i -D @types/node

# nodemon
npm i -D nodemon @types/nodemon
npm i ts-node -g

# dotenv
npm i dotenv
npm i -D @types/dotenv

# pg 
npm i pg
npm i -D @types/pg

# postgres
npm i postgres

# db-migrate
npm i -g db-migrate db-migrate-pg
npm i -D @types/db-migrate

# cors
npm i cors
npm i -D @types/cors

# bcrypt
npm i bcrypt 
npm i -D @types/bcrypt

# jsonwebtoken
npm i jsonwebtoken 
npm i -D @types/jsonwebtoken

# jasmine
npm i -D jasmine jasmine-spec-reporter jasmine-ts @types/jasmine

# supertest
npm i -D supertest @types/supertest

# fs
npm i fs

### Set up Database

# Create Databases
We shall create the dev and test database.

# connect to the default postgres database as the server's root user psql -U postgres
- In psql run the following commands to create a user:

 CREATE USER full_stack_user WITH PASSWORD '123';


- In psql run the following commands to create the dev and test database: 

CREATE DATABASE full_stack_dev;

CREATE DATABASE full_stack_dev_test;

# Connect to the databases and grant all privileges: 

Grant for dev database

\c full_stack_dev

GRANT ALL PRIVILEGES ON DATABASE full_stack_dev TO full_stack_user;

Grant for test database

\c full_stack_dev_test

GRANT ALL PRIVILEGES ON DATABASE full_stack_dev_test TO full_stack_user;

# Migrate Database
Navigate to the root directory and run the command below to migrate the database

npm run up


### Environment Variables Set up 

Bellow are the environmental variables that needs to be set in a .env file. This is the default setting that I used for development, but you can change it to what works for you.

POSTGRES_HOST=localhost
POSTGRES_DB=full_stack_dev
POSTGRES_TEST_DB=full_stack_dev_test
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=123
ENV=test
BCRYPT_PASSWORD=your_secret_password
SALT_ROUNDS=10
TOKEN_SECRET=ahmed123

### Start App

 npm run start

 # Running Ports
After start up, the server will start on port 5000 and the database on port 5432

# Endpoint Access
All endpoints are described in the REQUIREMENT.md file.

# Token and Authentication
Tokens are passed along with the http header as

Authorization   Bearer <token>

# Testing
Run test with

npm run test

It sets the environment to test, migrates up tables for the test database, run the test then migrate down all the tables for the test database.

# Building 
to transbile the typescripts files to js files in build file

npm run build