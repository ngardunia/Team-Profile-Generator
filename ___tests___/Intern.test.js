// require Intern
const Intern = require("./Intern");

test("Can set school via constructor", () => {
    const intern = new Intern('Nick', 16231, 'mail@mail.com', 'UCF');
    expect(intern.school).toEqual(expect.any(String));
});

test("Can get school via getSchool()", () => {
    const intern = new Intern('Nick', 16231, 'mail@mail.com', 'UCF');
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("Can get role via getRole()", () => {
    const intern = new Intern('Nick', 16231, 'mail@mail.com', 'UCF');
    expect(intern.getRole()).toEqual('Intern');
});
