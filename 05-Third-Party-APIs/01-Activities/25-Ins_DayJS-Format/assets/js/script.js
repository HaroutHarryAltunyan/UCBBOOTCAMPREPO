// Use Day.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
const today = dayjs();
$("#1a").text(today.format("MMM D, YYYY"));

// Without Day.js this is how to the same thing in vanilla javascript
// const todayjsDate = new Date();
// $("#1a").text(
//   `${todayjsDate.toLocaleString("default", {
//     month: "short",
//   })} ${todayjsDate.getDay()}, ${todayjsDate.getFullYear()}`
// );

// 2. What is the day of the week today?
const dayWeek = today.format("[Today is] dddd");
$("#2a").text(dayWeek);

// Without Day.js this is how to the same thing in vanilla javascript
// $("#2a").text(
//   `${todayjsDate.toLocaleString("default", {
//     weekday: "long",
//   })}`
// );

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14 2010, 3:25:50 pm.
const reformatDate = dayjs("2020-11-03").format("dddd, MMMM D YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
// Dayjs' .diff() method does NOT include partial weeks in its calculation.
const beginningOfYear = dayjs("2024-01-01");
const weekNum = today.diff(beginningOfYear, "week");

// Check for odd week, then assign boolean to variable
let takeOut = weekNum % 2 === 1;
$("#4a").text(`${takeOut}, because it's currently week  ${weekNum}`);
