const Employee = require("./Employee");

class Intern extends Employee {
    // constuctor that takes in name, id, email, school
    constructor(name, id, email, school) {
        // super to get name, id, email
        super(name, id, email)
        this.school = school;
    }

    // method to get role
    getRole() {
        return "Intern";
    }
    // method to get school
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;
