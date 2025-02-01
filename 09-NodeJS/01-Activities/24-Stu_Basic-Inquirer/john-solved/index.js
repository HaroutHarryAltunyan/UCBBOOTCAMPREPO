const inquirer = require("inquirer");
const colors = require("colors");

inquirer
  .prompt([
    {
      type: "input",
      message: "What text would you like to log?",
      name: "textToLog",
    },
    {
      type: "list",
      message: "What color do you want?",
      name: "color",
      choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
    },
  ])
  .then(function (response) {
    console.log(colors[response.color](response.textToLog));

    //console.log(colors[response.color](response.textToLog));
  });
