const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({ fullName, location, github, bio, languages }) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>${fullName}</h1>
            <ul>
              <li>Location: ${location}</li>
              <li>Bio: ${bio}</li>
              <li>Github Profile: ${github}</li>
              <li>Favorite Languages: ${languages.join(", ")}
            </ul>
          </div>
        </div>
      </div>
    </header>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
};

const questions = [
  {
    type: "input",
    name: "fullName",
    message: "What is your full name?",
  },
  {
    type: "input",
    name: "location",
    message: "Where are you located?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github profile?",
  },
  {
    type: "input",
    name: "bio",
    message: "Tell us a little about yourself",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What are your favorite languages?",
    choices: ["Javascript", "CSS", "HTML", "Python", "Ruby", "C#", "Java"],
  },
];

const writeToFile = (filename, data) => {
  fs.writeFile(filename, data, (err) => {
    err ? console.log(`Error: ${err}`) : console.log("Success!");
  });
};

const init = () => {
  inquirer.prompt(questions).then(function (response) {
    console.log(response);
    const generatedHTML = generateHTML(response);

    writeToFile("portfolio.html", generatedHTML);
  });
};

init();
