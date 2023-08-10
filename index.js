// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your application?",
    "What is a brief description of your application?",
    "What is the required installation?",
    "What is the usage of your application?",
    "How would you like people to contribute?",
    "Who can you give credit to in your application?",
    "What is your github profile user name?",
    "What is your email address?",
    "What license are you using?"
];

function writeToFile(){
    inquirer.prompt([
        {    
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {    
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {    
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {    
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {    
            type: 'input',
            message: questions[4],
            name: 'contribute',
        },
        {    
            type: 'input',
            message: questions[5],
            name: 'credit',
        },
        {    
            type: 'input',
            message: questions[6],
            name: 'github',
        },
        {    
            type: 'input',
            message: questions[7],
            name: 'email',
        },
        {    
            type: 'checkbox',
            message: questions[8],
            name: 'license',
            choices: ["MIT", "Unlicensed", "supercoollicense"]
            
        },
    ])
    .then((response) => {
        JSON.stringify(response)
        fs.writeFile('testREADME.md', generateMarkdown(response), (err) =>
        err ? console.error(err) : console.log('Success'));
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
