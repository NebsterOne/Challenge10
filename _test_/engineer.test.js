const Engineer = require("../lib/engineer");
const engineer = new Engineer("Bob", "987", "bob@work.com", "bobGitHub");

describe("engineer", () => {
  it("object validation test", () => {
    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toBe("987");
    expect(engineer.email).toBe("bob@work.com");
    expect(engineer.gitHub).toBe("bobGitHub");
  });
});
