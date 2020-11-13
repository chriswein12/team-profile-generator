const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const htmlGenerator = require('./src/html-generator')
const validator = require("email-validator");

const team = []

init = () => {
    console.log('You will use this app to build a team starting with a manager');

    addManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'mName',
                message: "What is the manager's name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter manager's name.";
                  }
            },
            {
                type: 'input',
                name: 'mId',
                message: "What is the manager's ID number?",
                validate: answer => {
                    if (isNaN(answer) || answer === "") {
                      return "Please enter numeric ID.";
                    }
                    return true;
                  }
            },
            {
                type: 'input',
                name: 'mEmail',
                message: "What is the manager's email address?",
                validate: answer => {
                    if (validator.validate(answer)) {
                      return true;
                    }
                    return "Please enter email.";
                  }
            },
            {
                type: 'input',
                name: 'mOfficeNumber',
                message: "What is the manager's office number?",
                validate: answer => {
                    if (isNaN(answer) || answer === "") {
                      return "Please enter numeric office number.";
                    }
                    return true;
                  }               
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
                   createHtml(team);
                }
            })

    }
    

    addEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'eName',
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter engineer's name.";
                  }
            },
            {
                type: 'number',
                name: 'eId',
                message: "What is the engineer's ID?",
                validate: answer => {
                    if (isNaN(answer) || answer === "") {
                      return "Please enter numeric ID.";
                    }
                    return true;
                  }
            },
            {
                type: 'input',
                name: 'eEmail',
                message: "What is the engineer's email address?",
                validate: answer => {
                    if (validator.validate(answer)) {
                      return true;
                    }
                    return "Please enter email.";
                  }
            },
            {
                type: 'input',
                name: 'eGithub',
                message: "What is the engineer's GitHub profile name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter GitHub profile name.";
                  }
            },
        ])
            .then(responses => {
                const engineer = new Engineer(responses.eId, responses.eName, responses.eEmail, responses.eGithub);

                team.push(engineer);
                addTeamMember();
            });
    }

    addIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'iName',
                message: "What is the intern's name?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter intern's name.";
                  }
            },
            {
                type: 'input',
                name: 'iId',
                message: "What is the intern's ID?",
                validate: answer => {
                    if (isNaN(answer) || answer === "") {
                      return "Please enter numeric ID.";
                    }
                    return true;
                  }
            },
            {
                type: 'input',
                name: 'iEmail',
                message: "What is the intern's email address?",
                validate: answer => {
                    if (validator.validate(answer)) {
                      return true;
                    }
                    return "Please enter email.";
                  }
            },
            {
                type: 'input',
                name: 'iSchool',
                message: "What is the intern's school?",
                validate: answer => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter school.";
                  }
            },
        ])
            .then(responses => {
                const intern = new Intern(responses.iId, responses.iName, responses.iEmail, responses.iSchool);
 
                team.push(intern);
                addTeamMember();
            });
    }

    createHtml = data => {
        fs.writeFile('./dist/index.html', htmlGenerator(data), err => {
            if (err) throw new Error(err);
        })
        console.log(`
            ==========
            HTML has been created.
            ==========
            `)
    }


    addManager();

}


init();