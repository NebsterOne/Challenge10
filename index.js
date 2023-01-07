const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const managerArray = [];
const engineerArray = [];
const internArray = [];


console.log("Team profile Generator");

const managerQuestions = [
{
    name: "name",
    type: "input",
    message: "Manager's Name: ";
}
   
]
