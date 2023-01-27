// require Employee
const Employee = require("./Employee");

// write a test to see if you can instantiate an Employee instance
describe("Employee", () => {
    describe("Initialization", () => {
        it("should test to see if an employee can be instantiated.", () => {
            const employee = new Employee('Nick', 16231, 'nickrhyse@gmail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });
});
//write a test to see if you can set the name as a constructor arguement
//test('Can set name via constructor arguements', () => {
    // variable for name
    //function Employee(name, id, email) {
        employee.name = name
        employee.id = id
        employee.email = email
    //}

    // variable for a new Employee with that name passed in as an argument
    //const Employee1 = new Employee ("Nick", 16231, 'nickrhyse@gmail.com');

    // expect the variable.name the be the variable that you set up for name

//});

// same as above for id

// same as above for email

// write a test to see if your getter method is working
test("Can get name via getName()", () => {
    // variable for the test value
    // variable for the new Employee with that test value passed in
    // expect that when you call that method - to be the test value variable
});

// same for getting the id

// same for getting the email

// same for getting the role