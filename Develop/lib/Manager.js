// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    Manager.prototype.getSchool = function () {
        return this.school;
    }

    Manager.prototype.getRole = function () {
        return "Manager";
    }
}

module.exports = Manager