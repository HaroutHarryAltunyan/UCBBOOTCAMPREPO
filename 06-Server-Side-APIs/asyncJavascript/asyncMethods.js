///////////////////////////////////////////////////////////////////////////
// 3 methods of handling asynchronous javascript
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
// 1. The callback

// guessMyName is an asynchronous function. The setTimeout will not finish until way after
// guessMyName completes its execution
function guessMyName(myName, cb, errCb) {
  setTimeout(function () {
    if (myName === "john") {
      cb("you got it!");
    } else {
      errCb("nope! that's not it");
    }
  }, 5000);

  console.log("After starting timer in guessMyName");
}

guessMyName(
  "jimmy",
  function (result) {
    console.log("This was a name guess", result);
  },
  function (err) {
    console.log("There was an error guessing my name", err);
  }
);

//////////////////////////////////////////////////////////////////////////////////////////
// 2. the Promise - this is the preferred way. Added to javascript in ES2015
// Async function calls often depend on the result of another async function call. To do
// this, callbacks end up becoming nested (e.g., a callback that takes a callback that takes a
// callback...and so on). This is called callback hell.
//
// Promises fix this by chaining

/*
From MDN:
Here we are fetching a JSON file across the network and printing it to the console. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.
*/

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=78c022ae7b87430bbaabb56f3fd651a0"
)
  .then(function (response) {
    // fetch resolves here regardless of HTTP status. As long as a Request gets to the server
    // which then sends back any Response, fetch will resolve here.

    // The Response object. It has a body property. That body hasn't been downloaded yet, though.
    // A body can be large and may come in different formats. That is why the body represents
    // a stream of data rather than the actual data. We need to hook up to that stream an process
    // the data byte by byte. Since we know that the data is formatted as JSON, we use a method
    // on the Response object to convert the data from that stream into a concrete JavaScript object
    // This is an async operation...we don't know how long this will take: Response.json() returns a Promise...
    return response.json();
  })
  .then(function (data) {
    // ...which resolves here with a completely downloaded and parsed JavaScript object.
    console.log(data);
  })
  .catch(function (err) {
    // the only errors caught here are network errors, e.g., your internet dropped or you are not
    // connected to a network
    console.error(err);
  });

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. async/await which is really just syntacic sugar for a promise. Added to Javascript in ES2017
// This doesn't work for callbacks, just for functions that return a Promise.

// a function that uses async calls needs to have "async" before its definition
(async function () {
  // in order to catch errors, we wrap the async calls in a try/catch block
  try {
    // the actual asynchronous call is prefaced by "await". This makes the code appear to be more synchronous
    const response1 = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=78c022ae7b87430bbaabb56f3fd651a0"
    );

    const response1Data = await response1.json();

    // This will not execute until line 90 is finished
    const response2 = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${rresponse1Data.coord.lat}&lon=${response1Data.coord.lon}&appid=78c022ae7b87430bbaabb56f3fd651a0`
    );

    const response2Data = await response2.json();

    console.log(response2Data.current);
  } catch (err) {
    console.log("Error: " + err);
  }
})();

// This is an IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Hi there");
})();
