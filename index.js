// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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

const idName = [
    "title",
    "description",
    "installation",
    "usage",
    "contribute",
    "credit",
    "github",
    "email"
]

const answers = [];
async function writeToFile() {
    for(let i = 0; i < questions.length - 1; i++) {
    const response = await inquirer.prompt([
        {    
            type: 'input',
            message: questions[i],
            name: idName[i],
        }
        ])
        answers.push(response)
    }
    await inquirer.prompt([
        {
            type: 'checkbox',
            message: questions[8],
            name: 'license',
            choices: ["MIT", "Apache", "Unlicensed"]
        }
    ])
    .then((response) => {
        answers.push(response)
        console.log(answers)
        fs.writeFile('testREADME.md', generateMarkdown(answers), (err) =>
        err ? console.error(err) : console.log('Success'));
    })
}
// TODO: Create a function to initialize app
function init() {
    writeToFile();
}
// Function call to initialize app
init();
