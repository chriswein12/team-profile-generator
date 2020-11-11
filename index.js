const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs = require('fs');

const team = []

init = () => {
    console.log('You will use this app to build a team starting with a manager, and then adding engineers and/or interns');

    addManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'mName',
                message: "What is the manager's name?"
            },
            {
                type: 'number',
                name: 'mId',
                message: "What is the manager's ID?"
            },
            {
                type: 'input',
                name: 'mEmail',
                message: "What is the manager's email address?"
            },
            {
                type: 'number',
                name: 'mOfficeNumber',
                message: "What is the manager's office number?"
            },
        ])
        .then(responses => {
            const manager = new Manager(responses.mId, responses.mName, responses.mEmail, responses.mOfficeNumber);
            console.log(manager);

            team.push(manager);
        }
    };



}


init();