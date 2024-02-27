const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./src/page-template");

const teamMembers = [];

// Function to gather information about the team manager
function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number:",
        },
    ]);
}

// Function to prompt for engineer's information
function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:",
        },
    ]);
}

// Function to prompt for intern's information
function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:",
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:",
        },
    ]);
}

// Function to prompt for next action
function promptNextAction() {
    return inquirer.prompt({
        type: "list",
        name: "action",
        message: "Choose an option:",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    });
}

// Function to add a manager to the team
async function addManager() {
    console.log("Please enter the team manager's information:");
    const managerData = await promptManager();
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    teamMembers.push(manager);
    console.log("Team manager added successfully!\n");
}

// Function to add an engineer to the team
async function addEngineer() {
    console.log("Please enter the engineer's information:");
    const engineerData = await promptEngineer();
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    teamMembers.push(engineer);
    console.log("Engineer added successfully!\n");
}

// Function to add an intern to the team
async function addIntern() {
    console.log("Please enter the intern's information:");
    const internData = await promptIntern();
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
    teamMembers.push(intern);
    console.log("Intern added successfully!\n");
}

// Function to gather information about the team
async function gatherTeamInfo() {
    await addManager();

    let nextAction = await promptNextAction();

    while (nextAction.action !== "Finish building the team") {
        switch (nextAction.action) {
            case "Add an engineer":
                await addEngineer();
                break;
            case "Add an intern":
                await addIntern();
                break;
        }
        nextAction = await promptNextAction();
    }

    // Generate HTML using the render function
    const html = render(teamMembers);

    // Write HTML to team.html file
    const outputPath = "./output/team.html";
    fs.writeFileSync(outputPath, html);

    console.log(`\nTeam information has been successfully written to ${outputPath}`);
}

// Call the function to start gathering team information
gatherTeamInfo();
