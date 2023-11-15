# Environment Setup
After cloning the repository, open the repo in an IDE (VSCode is recommended here).

In a terminal, run the following command

```console
npm i
```

These commands will install the necessary extensions and applications for running the website. If you are working in VSCode or an IDE that has this function, ensure autosave is on while working.

Lastly, the web service needs to be redeployed. Follow the instructions sent to your email for this.

# Running Locally
To run the ARC website locally, in the terminal run the following command

```console
npm start
```

Here is the link to the web service. The react site takes a while to get the data. Opening the web service (which the front end here uses as its base url) will trigger the react site to realize that the DB has data.

https://id607001-mintep1-project.onrender.com/ 

# Code Formatting

The code is formatted using Prettier. The following scripts check what files need formatting, and format the files:

```console
npm run check
npm run write
```
