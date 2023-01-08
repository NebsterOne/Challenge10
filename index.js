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

function appMenu() {
    function managerQuestions() {
        inquirer
          .prompt([

        {
        name: "name",
        type: "input",
        message: "Manager's Name: ",
        }
        {    
        name: "id",
        type: "input",
        message: "Manager's ID number: ",
        }
        {    
        name: "email",
        type: "input",
        message: "Manager's Email: ",
        }
        {
        name: "officeNummber",
        type: "input",
        message: "Manager's office number: ",
        }
   ])
}

.then((answers) => {
    const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber);


        <div class="card manager flex-container">
        <div class="card-top">
            <h2>${manager.name()}</h2>
            <h3><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-bottom">
            <p>
            <i class="list-group-item"></i> ID #${manager.getId()}<br>
            <i class="list-group-item"></i>Email #$<a href="mailto:${manager.gerEmail()}">${manager.getEmail()}</a><br>
            <i class="list-group-item"></i> Office #${manager.managerOfficeNumber}
            </p>
        </div>
    </div>    


    teamMember.push(manager);
    managerArray.push(answers)

})
