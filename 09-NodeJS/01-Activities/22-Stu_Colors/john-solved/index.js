const colors = require("colors");

const person = process.argv[2];
const dollars = parseInt(process.argv[3]);

// console.log(colors.bgYellow(person));
// const myColor = "bgYellow";
// colors.bgYellow();
// colors[myColor](person);

// console.log(colors.bgGreen(dollars));
let dollarColor = "bgBrightRed";
if (dollars > 0) {
  dollarColor = "bgBrightGreen";
}

console.log(
  `My name is ${colors["bgYellow"](person)} and I made ${colors[dollarColor](
    dollars
  )} this quarter`
);
