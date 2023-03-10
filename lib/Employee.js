class Employee {
    // constructor that takes in name, id ,email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // get method that returns this.name
    getName() {
        return this.name;
    }
    // same for id
    getId() {
        return this.id
    }
    // same for email
    getEmail() {
        return this.email
    }
    // same for role
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;