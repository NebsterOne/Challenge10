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
            <h2>${manager.getName()}</h2>
            <h3><i class="list-group-item"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-bottom">
            <p>
            <li class="list-group-item"> ID: #${manager.getId()}<br></li>
            <li class="list-group-item"> Email: #$<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br></li>
            <li class="list-group-item"> Office: #${
              manager.getManagerOfficeNumber
            }</li>
            </p>
        </div>
    </div>`;

        managerArray.push(managerProfile);

        newProfile();
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
            <h2>${engineer.getName()}</h2>
            <h3><i class="list-group-item"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-bottom">
            <p>
            <li class="list-group-item"> ID: #${engineer.getId()}<br></li>
            <li class="list-group-item"> Email: #$<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br></li>
            <li class="list-group-item"> GitHub: #${engineer.getGitHub()}</li>
            </p>
        </div>
    </div>`;

        engineerArray.push(engineerProfile);
        console.log(engineerArray);
        newProfile();
      });
  }

  function internQuestions() {
    inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "Intern's Name: ",
        },
        {
          name: "id",
          type: "input",
          message: "Intern's ID number: ",
        },
        {
          name: "email",
          type: "input",
          message: "Intenr's Email: ",
        },
        {
          name: "school",
          type: "input",
          message: "Intern's School: ",
        },
      ])

      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );

        const internProfile = `<div class="card manager flex-container">
        <div class="card-top">
            <h2>${intern.getName()}</h2>
            <h3><i class="list-group-item"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-bottom">
            <p>
            <li class="list-group-item"> ID: #${intern.getId()}<br></li>
            <li class="list-group-item"> Email: #$<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br></li>
            <li class="list-group-item"> Office: #${intern.getSchool()}</li>
            </p>
        </div>
    </div>`;

        internArray.push(internProfile);

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

  managerQuestions();
}

appMenu();
