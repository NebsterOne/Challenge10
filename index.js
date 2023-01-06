const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const employeeList = [];
const idArray = [];

const managerQuestions = [
{
    name: "name",
    type: "input",
    message: "Manager's Name: ";
}
   
]
