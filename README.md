# Underground Animal 'Sports' Championship - ARC API

To run the ARC REST API as a web service on Render: https://id607001-mintep1-project.onrender.com/

To read further on usage and documentation of this API:

### Table Of Contents

[Postman Documentation](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#postman-documentation)

[Entity Relationship Diagram](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#entity-relationship-diagram)

[Environment Setup](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#environment-setup)

[Running the API Locally](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#running-the-rest-api-locally)

[Migrating the DB](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#migration)

[Resetting the DB](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#resetting-the-db)

[Running Prisma Studio](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#prisma-studio)

[Code Formatting](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#code-formatting-process)

## Postman Documentation
– A URL to your published REST API documentation.

//link here

## Entity Relationship Diagram

– An Entity Relationship Diagram (ERD) of your database.

//ss and desc here

## Environment Setup
After cloning the repository, open the repo in an IDE (VSCode is recommended here).

In a terminal, run the following commands
```bash
npm i
npm install @prisma/client@4.16.2
npm install prisma@4.16.2 --save-dev
npm install joi
npm install express-rate-limit
npm
```
These commands will install the necessary extensions and applications for running the API.
If you are working in VSCode or an IDE that has this function, ensure autosave is on while working.
Additionally, it is also recommended to install the prisma extension found on VSCode for readability.

## Running the REST API locally

In the terminal, run the following command to run the API

```bash
npm run dev
```
And paste this link in your browser of choice: **localhost:3000/api/**

## Migration

To create AND apply a migration for this API, run the following script:
```bash
npm run migrate
```
OR the full command:
```bash
npx prisma migrate dev
```

Both of these options will perform the same task. 

Once entered, the program will then ask the user to enter a name for the migration. Entering one is up to the user, however it is recommended to press enter instead.
Sometimes, an error such as "cannot create a shadowbase" or "server disconnected" will show up. Just run the command again and it should work.
DO NOT edit the schema or any code while migrating.


## Resetting the DB

It is important to reset the database before migrating as the new version of the database may conflict with any existing data.
In order to ensure that your data is not entirely lost, add the dataset to the relevant seed file.  This will be added into the database after it has reset.

If you do not wish to seed data after the reset (i.e. you require a 100% full reset), remove the following from the package.json file:
```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```
Now, to reset the database, run the following script in the terminal:
```bash
npm run reset
```
OR the following command:
```bash
npx prisma reset dev --force
```
Both these commands will reset the database without additional user input.

You can also run the following command:
```bash
npx prisma reset dev
```
This command will have the terminal prompt the user to enter y/N to continue or cancel the reset request.

If the code from the package.json file was not removed, the API will automatically seed the data from the seed.js file.
However, if the code was removed or seeding does not occur automatically after resetting, you can run the following script:
```bash
npm run seed
```
OR the following command:
```bash
npx prisma db seed
```
The database should then be filled with the seed data.

## Prisma Studio

To open Prisma Studio, you can run the following script in the terminal:
```bash
npm run studio
```
OR the following command:
```bash
npx prisma studio
```
Both do the same thing. Studio will allow you to navigate through and manipulate the database in a more user-friendly format with a neat graphical UI.

## Code Formatting Process

The code is formatted using the Prettier program. Prettier is installed as a devDependency, so it is automatically installed when running the `npm i` command.

A .prettierignore file was made to ensure that important background files are not included in the formatting process. Additionally, a .prettierrc.json file was made to set the standard of formatting.
I used the formatting standards from the s1-23 branch, however I added and changed a couple lines of code.

Here are the formatting standards:
```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "printWidth": 85,
  "singleQuote": false
}
```

To check what files need to be formatted, run the following script:
```bash
npm run check
```
OR the following command
```bash
npx prettier --check .
```
This will display all the files that prettier will format if the user so desires. Any files that you do not wish to be formatted, add to the .prettierrc.json file.

To format the files, run the following script:
```bash
npm run write
```
OR the following command:
```bash
npx prettier --write .
```
Both ways do the same thing.
This will change all the files prettier is allowed to format.
