const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Please enter the team Manager's name: ",
        },
        {
            type: "input",
            name: "employeeId",
            message: "Please eneter your Employee ID: ",
        },
        {
            type: "input",
            name: "emailAddress",
            message: "Please eneter your Email Address: ",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please eneter your Office Number: ",
        },
        {
            type: "list",
            name: "chooseOption",
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
            Message: "Please choose an option to take the appropriate next steps",
        }
    ])
    .then((answers) => {
        // console.log(answers.managerName);
        // console.log(answers.employeeId);
        // console.log(answers.emailAddress);
        // console.log(answers.officeNumber);
        if (answers.chooseOption === 'Add an engineer') {
            inquirer.prompt([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Please enter the engineer's name: "
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Please enter the Engineer's ID: ",
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Please enter the Engineer's email: ",
                },
                {
                    type: "input",
                    name: "gitHub",
                    message: "Please enter the Engineer's GitHub Username: ",
                },
            ])
                .then(function (answers) {
                    console.log(answers.engineerName);
                    console.log(answers.engineerId);
                    console.log(answers.engineerEmail);
                    console.log(answers.gitHub);
                })

        }
    })
// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Write a .prompt function for command line prompts
// .then answers to read the answers to the prompt and render it in the team.html file. Use page-template.js file as the functions for rendering are already provided. - use render function
// Create an output folder to save the team.html file -- use outputPath variable
