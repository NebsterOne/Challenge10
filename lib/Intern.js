const Intern = reqiure("./employee");

class Intern {
  constructor(name, id, email) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
