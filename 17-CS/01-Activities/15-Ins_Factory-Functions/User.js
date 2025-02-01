/**
 * This is a User as a class rather than using the factory function
 */
class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  introduceSelf() {
    // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
    return console.log(
      `Hi my name is ${this.name} and I am currently ${this.age} years old!`
    );
  }

  location() {
    return console.log(`${this.name} is located in ${this.city}`);
  }
}

const john = new User("john", 54, "Poulsbo");
console.log(john.name);
