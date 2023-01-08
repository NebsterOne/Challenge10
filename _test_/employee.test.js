const Employee = require("../lib/employee");
const employee = new Employee("Jack", "987", "jack@work.com");

describe("employee", () => {
  it("object validation test", () => {
    expect(employee.name).toBe("Jack");
    expect(employee.id).toBe("987");
    expect(employee.email).toBe("jack@work.com");
  });
});
