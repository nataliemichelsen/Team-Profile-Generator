// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// referencing the master Employee category/sheet
const Employee = require("./Employee");

// defining the Intern class & extending it to "Employee"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

// setting the prototypes outside of the Intern Class so they do not interfere with what is being set above
Intern.prototype.getSchool = function () {
    return this.school;
}

Intern.prototype.getRole = function () {
    return "Intern";
}

// exporting the node module for Intern
module.exports = Intern