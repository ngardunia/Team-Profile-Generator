// require Manager
const Manager = require("./Manager");
// test the see if you can get an office number via constructor
test("Can set office number via constructor", () => {
    const manager = new Manager('Nick', 16231, 'mail@mail.com', 123);

    expect(manager.officenum).toEqual(expect.any(Number));
});
// test your get methods
test("Can get office number via getOfficeNum()", () => {
    const manager = new Manager('Nick', 16231, 'mail@mail.com', 123);

    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});

test("Can get role via getRole()", () => {
    const manager = new Manager('Nick', 16231, 'mail@mail.com', 123);

    expect(manager.getRole()).toEqual('Manager');
});