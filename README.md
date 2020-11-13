# Team Profile Generator

## Description of the Application
This is a node.js program designed to build a team profile using command line prompts.

<br/>

## Installation
To install necessary dependencies, run the following commands:

```
npm install jest --save-dev
```
```
npm install inquirer
```
```
npm install email-validator
```

## How it Works
* The user will start the program with the following command:
    ```
    node index.js
    ```
* The user will then be asked a series of questions to set up the team manager's profile. They will be asked for the manager's name, ID, email, and office number.
* They will then choose to add additional team members, either Engineers or Interns.
    - Engineers will be prompted for name, ID, email, and GitHub username.
    - Inters will be prompted for name, ID, email, and school.
* Once all team members have been added, the user will select the option for "No more team members to add." At this point, an HTML file will be generated and placed in teh "dist" folder.

<br/>

## Additional App Features
* Checks in place to make sure that information is entered for each prompt to avoid having blank fields in the team members profiles.
  
<br/>

## Link to GitHub Repository
https://github.com/chriswein12/team-profile-generator

<br/>

## How the application works
Click on the following image for a walkthrough video on Youtube.

[![Link to Walkthrough Video](http://img.youtube.com/vi/YgIF8aslJmA/0.jpg)](http://www.youtube.com/watch?v=YgIF8aslJmA "Team Profile Generator with Node.js")

<br/>

## Credits

*Project completed by Chris Wein*