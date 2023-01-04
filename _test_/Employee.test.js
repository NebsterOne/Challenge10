const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

//Employee, Manager, Engineer, and Intern classes.
