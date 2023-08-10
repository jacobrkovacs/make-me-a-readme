// TODO: Include packages needed for this application
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
//const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

let title = "";
let description = "";
let installation = "";
let contribute = "";
let testing = "";
let github = "";
let email = "";

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your application?",
    "What is a brief description of your application?",
    "What is the required installation?",
    "What is the usage of your application?",
    "How would you like people to contribute?",
    "What is your method of testing?",
    "What is your github profile name?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('testREADME.md', `${generateMarkdown}`, (err) =>
    err ? console.error(err) : console.log('Success'));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
