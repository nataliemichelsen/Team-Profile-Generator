// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// referencing the master Employee category/sheet
const Employee = require("./Employee");

// defining the Manager class & extending it to "Employee"
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

// setting the prototypes outside of the Manager Class so they do not interfere with what is being set above
Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
}

Manager.prototype.getRole = function () {
    return "Manager";
}

// exporting the node module for Manager
module.exports = Manager