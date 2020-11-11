const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');

const team = []

init = () => {
    console.log('You will use this app to build a team starting with a manager');

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
                addTeamMember();
            });
    };

    addTeamMember = () => {
        inquirer.prompt(
            {
            type: "list",
            name: "chooseTeam",
            message: "Would you like to add a team member? Select option.",
            choices: [
                "Engineer",
                "Intern",
                "No more team members to add"
            ]
            }
        )
        .then(selection => {
            if (selection.chooseTeam === "Engineer") {
                addEngineer();
            }
            else if (selection.chooseTeam === "Intern") {
                addIntern();
            }
            else {
                createHTML();
            }
        });
    }

    addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'eName',
                message: "What is the engineer's name?"
            },
            {
                type: 'number',
                name: 'eId',
                message: "What is the engineer's ID?"
            },
            {
                type: 'input',
                name: 'eEmail',
                message: "What is the engineer's email address?"
            },
            {
                type: 'input',
                name: 'eGithub',
                message: "What is the engineer's github profile name?"
            },
        ])
            .then(responses => {
                const engineer = new Engineer(responses.eId, responses.eName, responses.eEmail, responses.eGithub);
                console.log(engineer);

                team.push(engineer);
                addTeamMember();
            });
    }

    addIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'iName',
                message: "What is the intern's name?"
            },
            {
                type: 'number',
                name: 'iId',
                message: "What is the intern's ID?"
            },
            {
                type: 'input',
                name: 'iEmail',
                message: "What is the intern's email address?"
            },
            {
                type: 'input',
                name: 'iSchool',
                message: "What is the intern's school?"
            },
        ])
            .then(responses => {
                const intern = new Intern(responses.iId, responses.iName, responses.iEmail, responses.iSchool);
                console.log(intern);

                team.push(intern);
                addTeamMember();
            });
        }

    createHTML = () => {
        console.log(team);
    }

    addManager();

}


init();