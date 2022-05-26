// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation steps for your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What is the license of your project?',
        name: 'license',
        choices: ['Apache', 'Creative Commons', 'MIT', 'Mozilla', 'None']
    },
    {
        type: 'input',
        message: 'Who will be contributing to your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the tests for your project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What are the questions for your project?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerAnswers) => {
        console.log('Making your README!');
        writeToFile('README.md', generateMarkdown({...inquirerAnswers}))
    });
};

// Function call to initialize app
init();
