const Intern = require("../lib/intern");
const intern = new Intern("Mike", "987", "mike@work.com", "AdelaideUniBC");

describe("intern", () => {
  it("object validation test", () => {
    expect(intern.name).toBe("Mike");
    expect(intern.id).toBe("987");
    expect(intern.email).toBe("mike@work.com");
    expect(intern.school).toBe("AdelaideUniBC");
  });
});
