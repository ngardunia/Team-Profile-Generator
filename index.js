// require all of your classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// require inquirer, path if needed, fs
const fs = require('fs');
const inquirer = require('inquirer');

// require your page template
const generateHTML = require('./src/page-template');

// empty team members array
const teamMembers = [];
// empty id array
const teamId = [];

// function that wraps everything (like an init function)
function init () {
  // function for creating a manager (call this at the bottom of your init function)
  const addManager = () => {
    // inquirer prompt with the manager questions
    inquirer
      .prompt ([

      ])
  
    
    // in your .then - set up a variable for manager that is equal to a new instance of your Manager class passing in the responses you recieved from the user's input
      .then(answers => {
        const manager = new Manager(answers.name, answers.email, answers.officenum)
        const ident = (answers.id)
        // push that variable to your team members array, push the id to the id array
        teamMembers.push(manager);
        teamId.push(ident);
      })
      // call your next function
    };

  // next function should be for creating the team
    // this should ask the user what type of employee they would like to create
    // in your .then, have a conditional or switch case that runs that employee types function based on what they choose
    // or if they select the option that says they are done adding team members, run the function that builds the team


    function buildTeam() {
        // fs.writeFileSync(yourPathToDistFolder, functionFromPageTemplate(teamMembers), 'utf-8');
      }};
  
    
  // make sure call your init function