const Manager = require("../lib/manager");
const manager = new Manager("Archie", "987", "archie@work.com", "001");

describe("manager", () => {
  it("object validation test", () => {
    expect(manager.name).toBe("Archie");
    expect(manager.id).toBe("987");
    expect(manager.email).toBe("archie@work.com");
    expect(manager.officeNumber).toBe("001");
  });
});
