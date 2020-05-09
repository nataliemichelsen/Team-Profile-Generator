// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

const questions = [
    {
        type: 'list',
        message: 'What type of employee are you?',
        choices: ['Manager', 'Intern', 'Engineer']
        name: 'role'
    }
    {
        message: 'What id your name?',
        name: 'name'
    }
    {
        message: 'What is your employee ID?',
        name: 'id'
    }
    {
        message: 'What is your email?',
        name: 'email'
    }
]

const init = async () => {
    const { newEmployee } = await inquirer.prompt({
        type: 'confirm',
        message: 'Would you like to add this team member?'
        name: 'newEmployee'
    })

    if (newEmployee) {
        initEmployee();
    } else {
        if (employees.length > 0) {
            if (fs.existsSync(OUTPUT_DIR)) {
                return fs.writeFileSync(outputPath, render(employees), )
            } else {
                return fs.mkdir(OUTPUT_DIR, err => {
                    if(err) throw err;
    
                    return fs.writeFileSync(outputPath, render(employees))
                })
            }
        }
    }
}

const initEmployee = async () => {
    const { role, name, id, email } = await inquirer, prompt(questions);

    switch (role) {
        case 'Manager':
            const { officeNumber } = await inquirer.prompt({
                message: 'Office Number?',
                name: 'officeNumber'
            })
            employees.push(new Manager(name, id, email, officeNumber))
            break;
        case 'Intern':
            const { school } = awaitinquirer.prompt({
                message: 'School?',
                name: 'school'
            })
            employees.push(new Intern(name, id, email, school))
            break;
        case 'Engineer':
            const { github } = awaitinquirer.prompt({
                message: 'GitHub?',
                name: 'github'
            })
            employees.push(new Engineer(name, id, email, github))
            break;
        default:
            console.log("No Default")
    }
    init();
}