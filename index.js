const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('Manager.js');
const Engineer = require('Engineer.js');
const Intern = require('Intern.js');
const generateHTML = require('generateHTML.js');

function showMenu() 
  inquirer.prompt([
    {
  
      type: 'list',
      name: 'selection',
      message: 'Which employee do you wish to add?', 
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Quit"
      ]
    }
  ]);


//  showMenu(); {
//     inquirer
//     .prompt(questions)
  
//     .then((answers) => {
//       const readMe = generateMarkdown(answers);
//   writeToFile('README.md', readMe);
//     });
  
// }
showMenu();
