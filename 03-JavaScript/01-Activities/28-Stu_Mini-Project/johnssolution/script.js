// State Variables
let ties = 0;
let wins = 0;
let losses = 0;

let userRock = 0;
let userPaper = 0;
let userScissors = 0;

let keepPlaying = true;

// Constants
const options = ["R", "P", "S"];

while (keepPlaying) {
  // ask user for choice
  // user provide a choice (R, P, or S)
  let userChoice = prompt("R, P or S?");

  // normalizing the letter casing
  userChoice = userChoice.toUpperCase();

  // if userChoice is empty or userChoice is not found in options
  // then alert the player and start again
  // if not valid ask again
  if (userChoice && options.includes(userChoice)) {
    if (userChoice === "R") {
      userRock++;
    } else if (userChoice === "P") {
      userPaper++;
    } else {
      userScissors++;
    }

    // computer to choose (R,P, or S)
    // TODO create logic to make computer choice
    let randomIndex = Math.floor(Math.random() * options.length);
    console.log(randomIndex);
    const computerChoice = options[randomIndex];

    alert(`The computer chose ${computerChoice}`);

    // compare the choices
    // if the user and computer choose the same value it is a tie
    if (userChoice === computerChoice) {
      // we have a tie
      ties++;
      alert("You tied!");
    } else if (
      // if the user chooses rock and computer chooses scissor
      //  or user chooses scissors and computer chooses paper
      //  or user chooses paper and computer choose rock
      (userChoice === "R" && computerChoice === "S") ||
      (userChoice === "S" && computerChoice === "P") ||
      (userChoice === "P" && computerChoice === "R")
    ) {
      // we won
      wins++;
      alert("You won!");
    } else {
      // we lost
      losses++;
      alert("You lost!");
    }

    // TODO
    // ask if the user user want to play again
    keepPlaying = confirm("Do you want to play again?");
    // if yes then start over
  } else {
    alert("Please provide a valid choice");
  }
}

// else print the score and end

alert(`
WINS: ${wins}
LOSSES: ${losses}
TIES: ${ties}

Rock: ${userRock}
Paper: ${userPaper}
Scissor: ${userScissors}
`);
