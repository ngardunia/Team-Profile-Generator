// require Engineer
const Engineer = require("./Engineer");
test("Can set GitHub account via constructor"), () => {
    const engineer = new Engineer('Nick', 16231, 'mail@mail.com', 'ngardunia');
    expect(engineer.github).toEqual(expect.any(String));
}

// test your get methods

test("Can get GitHub username via getGitHub()"), () => {
    const engineer = new Engineer('Nick', 16231, 'mail@mail.com', 'ngardunia');
    expect(engineer.getGitHub()).toEqual(expect.any(String));
}

test("Can get role via getRole()"), () => {
    const engineer = new Engineer('Nick', 16231, 'mail@mail.com', 'ngardunia');
    expect(engineer.getRole()).toEqual(expect.any(String));
}