// require Employee
const Employee = require("./Employee");

// write a test to see if you can instantiate an Employee instance
describe("Employee", () => {
    describe("Initialization", () => {
        it("should test to see if an employee can be instantiated.", () => {
            const employee = new Employee('Nick', 16231, 'mail@mail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });
});

// write a test to see if your getter method is working
test("Can get name via getName()", () => {
    const employee = new Employee('Nick', 16231, 'mail@mail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// same for getting the id
test("Can get name via getId()", () => {
    const employee = new Employee('Nick', 16231, 'mail@mail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// same for getting the email
test("Can get name via getEmail()", () => {
    const employee = new Employee('Nick', 16231, 'mail@mail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});
// same for getting the role
test("Can get name via getRole()", () => {
    const employee = new Employee('Nick', 16231, 'mail@mail.com');
    expect(employee.getRole()).toEqual(expect.any(String));
});