const Employee = require("./Employee");

class Engineer extends Employee {
    // constuctor that takes in name, id, email, github
    constructor(name, id, email, github) {
        // super to get name, id, email
        super(name, id, email);
        this.github = github;
    }

    // method to get role
    getRole() {
        return "Engineer";
    }
    // method to get github
    getGitHub() {
        return this.github;
    }

}

module.exports = Engineer;