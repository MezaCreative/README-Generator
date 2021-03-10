const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
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
            message: "To install this you..."
        },
     

        {
            type: "input",
            name: "usage",
            message: "How do you use the app?",
        },
        {
            type:"input",
            name: "report",
            message: "Issues can be reported by....",
            
        },
         {
             type:"input",
             name: "contribution",
             message: "Contribution can be made by...",
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

    ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : cconsole.log("All done, please checkout your fresh README")
    )
}

// function to initialize program
function init() {
    console.log("Begin README initialization ")
    inquirer.prompt(questions).then((response) => 
    writeToFile("ReadME.md",generateMarkdown(response)));

    
}

// function call to initialize program
init();