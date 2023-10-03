# Underground Animal 'Sports' Championship - ARC API
Welcome to the README for the official ARC (Animal Radiance Championship) REST API

<img src="https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student/assets/132317396/26162f31-f91d-43d2-98db-d41da3d975b9" width="200" height="200">

To run the ARC REST API as a web service on Render: https://id607001-mintep1-project.onrender.com/

To read further on usage and documentation of this API:

### Table Of Contents

> [Seeding The DB](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student/tree/practical-project#seeding-the-db-with-prisma)

> [API Testing](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student/tree/practical-project#api-testing)

## Seeding The DB With Prisma
The program has a folder with all the seed data files for each table. Running the following script will reset and seed the database:
```bash
npm run reset
```
OR run the following command in the terminal:
```bash
npx prisma migrate reset -- --force
```
Resetting the DB will automatically seed the DB using the seed data once it has reset.

## API Testing
The ARC API allows for testing the database using the seeded data.
To test, run the following script in the terminal:
```bash
npm test
```
```bash
npm run test
```
OR the following command:
```bash
npx prisma migrate reset --force
npx mocha --timeout 10000 --exit
```

All the above options produce the same output.
Running the script will prompt the program to reset the database, automatically seeding it thereafter, and run each test in the test file.
