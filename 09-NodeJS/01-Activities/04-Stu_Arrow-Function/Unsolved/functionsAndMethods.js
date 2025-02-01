// this is a function declaration/definition
function myFunc(a, b) {
  return a + b;
}

// here is a function call
myFunc(3, 5);

// here is an object
const person = {
  name: "John Young",
  // here is a "method". A "method" is a function attached to an object
  sayName: function () {
    console.log(this.name);
  },
};

// This calls the method
console.log(person.sayName());
