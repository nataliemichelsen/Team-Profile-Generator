// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// referencing the master Employee category/sheet
const Employee = require("./Employee");

// defining the Engineer class & extending it to "Employee"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

// setting the prototypes outside of the Engineer Class so they do not interfere with what is being set above
Engineer.prototype.getGithub = function () {
    return this.github;
}

Engineer.prototype.getRole = function () {
    return "Engineer";
}

// exporting the node module for Engineer
module.exports = Engineer