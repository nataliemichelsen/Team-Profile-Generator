// TODO: Write code to define and export the Employee class
// defining the master class Engineer so it may be extended to the employee types (Manager, Intern, Engineer)
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}


// setting the prototypes outside of the Employee Class so they do not interfere with what is being set above
Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return "Employee";
}

// exporting the node module for Employee
module.exports = Employee;