// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project..',
    },
    {
        type: 'confirm',
        name: 'install',
        message: 'Does your app need to be installed?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please detail the instructions for installing the project',
        when: ({install})=>{
            if(install)
                return true;
            else 
                return false;            
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would one use your application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to the project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can someone help in testing the project?',
    },
    {
        type:'checkbox',
        name: 'license',
        message: 'Please choose the license that belongs to the project',
        choices: ['Apache License 2.0', 'GNU general Public License v 3.0', 'MIT license',
         'Boost Software License 1.0', 'GNU AGPLv3', 'BSD 3-Clause License'],        
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username so we can generate a link to your profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address so we can generate a link to allow users to email you',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try{
        const answers = await inquirer.prompt(questions);
        const markdowns = generateMarkdown(answers);        
        await writeToFile('README.md', markdowns);
    }catch(err){
        console.log(err);
    }
}

// Function call to initialize app
init();
