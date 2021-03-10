const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of your project",
        },
        {
            type: "input",
            name: "description",
            message : "Please describe the what, why and how of this project",
        },
        {
            type:"input",
            name: "installation",
            message: "How do you install it"
        },
     

        {
            type: "input",
            name: "usage",
            message: "How do you use the app?",
        },
        {
            type:"input",
            name: "report",
            message: "How do you report issues?",
            
        },
         {
             type:"input",
             name: "contribution",
             message: "How can contributions be made?",
         },
         {
            type:"input",
            name: "username",
            message:"What is your GitHub username?",
        },
            {
            type:"input",
            name:"email",
            message: "What is your email?",
            }   

    ]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();