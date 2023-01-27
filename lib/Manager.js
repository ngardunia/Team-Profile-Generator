const Employee = require("./Employee");

class Manager extends Employee {
    // constuctor that takes in name, id, email, office number
    constructor(name, id, email, officenum) {
        // super to get name, id, email
        super(name, id, email);
        this.officenum = officenum;
    }

    // method to get role
    getRole() {
        return "Manager";
    }
    // method to get office number
    getOfficeNum() {
        return this.officenum;
    }
};

module.exports = Manager;
