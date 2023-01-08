const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { profile } = require("console");

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
        },
        {
          name: "id",
          type: "input",
          message: "Manager's ID number: ",
        },
        {
          name: "email",
          type: "input",
          message: "Manager's Email: ",
        },
        {
          name: "officeNummber",
          type: "input",
          message: "Manager's office number: ",
        },
      ])

      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );

        const managerProfile = `<div class="card manager flex-container">
        <div class="card-top">
            <h2>${manager.name()}</h2>
            <h3><i class="list-group-item"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-bottom">
            <p>
            <li class="list-group-item"> ID: #${manager.getId()}<br></li>
            <li class="list-group-item"> Email: #$<a href="mailto:${manager.gerEmail()}">${manager.getEmail()}</a><br></li>
            <li class="list-group-item"> Office: #${
              manager.managerOfficeNumber
            }</li>
            </p>
        </div>
    </div>`;

        managerArray.push(managerProfile);

        newProfile();
      });
  }

  function newProfile() {
    inquirer
      .prompt([
        {
          name: "profile",
          type: "list",
          message: "Select profile type: ",
          choices: ["Engineer", "Intern", "End Here"],
        },
      ])

      .then((choices) => {
        switch (choices.profile) {
          case "Engineer":
            engineerQuestions();
            break;
          case "Intern":
            internQuestions();
            break;
          default:
          //Calling create HTML function
        }
      });
  }

  function engineerQuestions() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Engineer's Name: ",
        },
        {
          name: "id",
          type: "input",
          message: "Engineer's ID number: ",
        },
        {
          name: "email",
          type: "input",
          message: "Engineer's Email: ",
        },
        {
          name: "gitHub",
          type: "input",
          message: "Engineer's gitHub username: ",
        },
      ])

      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );

        const engineerProfile = `<div class="card manager flex-container">
        <div class="card-top">
            <h2>${engineer.name()}</h2>
            <h3><i class="list-group-item"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-bottom">
            <p>
            <li class="list-group-item"> ID: #${engineer.getId()}<br></li>
            <li class="list-group-item"> Email: #$<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br></li>
            <li class="list-group-item"> Office: #${engineer.gitHub}</li>
            </p>
        </div>
    </div>`;
      });
    engineerArray.push(engineerProfile);

    newProfile();
  }
}

appMenu();
