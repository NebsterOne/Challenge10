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

function appMenu
    function managerQuestions() {
        inquirer
          .prompt([

        {
        name: "name",
        type: "input",
        message: "Manager's Name: ",
        }
        {    
        name: "managerId",
        type: "input",
        message: "Manager's ID number: ",
        }
        {    
        name: "managerEmail",
        type: "input",
        message: "Manager's Email: ",
        }
        {    
        name: "managerId",
        type: "input",
        message: "Manager's ID number: ",
        }
        {
        name: "managerOfficeNummber",
        type: "input",
        message: "Manager's office number: ",
        }
   
]
