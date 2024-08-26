# Underground Animal 'Sports' Championship - ARC API
Welcome to the README for the official ARC (Animal Radiance Championship) REST API

<img src="https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student/assets/132317396/26162f31-f91d-43d2-98db-d41da3d975b9" width="200" height="200">

To read further on usage and documentation of this API:

### Table Of Contents

> [Postman Documentation](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#postman-documentation)

> [Entity Relationship Diagram](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#entity-relationship-diagram)

> [Environment Setup](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#environment-setup)

> [Running the API Locally](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#running-the-rest-api-locally)

> [Migrating the DB](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#migration)

> [Resetting the DB](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#resetting-the-db)

> [Running Prisma Studio](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#prisma-studio)

> [Code Formatting](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student#code-formatting-process)

## Postman Documentation
Click [here](https://documenter.getpostman.com/view/28760893/2s9YC5yYQ1) to view the full documentation on Postman!

## Entity Relationship Diagram

I have installed a Prisma ERD generator (link to the public GitHub for this code [Here](https://github.com/keonik/prisma-erd-generator) as a dev dependency in order to generate a perfect ERD for the schema.
This can be generated any number of times.

![erd](https://github.com/otago-polytechnic-bit-courses/s2-23-project-mintep1-student/assets/132317396/2f667232-faa9-4589-9c9a-06c92f614e05)

To generate a new ERD, paste the following into the schema.prisma file:
```prisma
generator erd {
  provider = "prisma-erd-generator"  
  includeRelationFromFields = true
  disabled = true
}
```
Then, run the following script:
```bash
npm run erd
```
This will generate an ERD.svg file in the prisma folder. To view the ERD in image format, open the ERD.svg file in your local file management system and open with a browser of your choice.

However, if this doesn't work, you may need to install the generator again.

You can install the Prisma ERD generator using the following command:
```bash
npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
```
Once installed, run the same script again.

If further issues are occurring here, there may be some conflicts with the use of mermaid.js. Consult the [issues tab of the erd extension GitHub here](https://github.com/keonik/prisma-erd-generator#issues)


## Environment Setup
After cloning the repository, open the repo in an IDE ([VSCode](https://code.visualstudio.com/download) is recommended here).

In a terminal, run the following commands
```bash
npm i
npm install @prisma/client@4.16.2
npm install prisma@4.16.2 --save-dev
npm install joi
npm install express-rate-limit
```
These commands will install the necessary extensions and applications for running the API.
If you are working in VSCode or an IDE that has this function, ensure autosave is on while working.
Additionally, it is also recommended to install the prisma extension found on VSCode for readability.

Next, create a .env file, copy the code in the .env.example file and paste it in the .env file. Then, paste in the link to the database inside the double quotes. 
> :bulb: **Tip** Ensure you have autosave on.

Then, run the following script:
```bash
npm run db-reset
npm run migrate
```
OR the following command:
```bash
npx prisma db reset
npx prisma migrate dev
```
Do not enter a name for the migration unless you want to. Just press enter.

If any errors pop up such as something along the lines of "cannot create a shadowbase" or "server connection error" then simply run the script again.

## Running the REST API locally

Firstly, 

In the terminal, run the following command to run the API
```bash
npm run dev
```
And paste this link in your browser of choice: **localhost:3000/**

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
> :warning: **Warning:** DO NOT edit the schema or any code while migrating.


## Resetting the DB

It is important to reset the database before migrating as the new version of the database may conflict with any existing data.


To entirely reset the database, run the following script:
```bash
npm run db-reset
```
OR the following command:
```bash
npx prisma db reset
```

To reset any saved data, run the following script in the terminal:
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
