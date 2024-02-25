const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Write a .prompt function for command line prompts
// .then answers to read the answers to the prompt and render it in the team.html file. Use page-template.js file as the functions for rendering are already provided. - use render function
// Create an output folder to save the team.html file -- use outputPath variable
