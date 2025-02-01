class Animal {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  nap = function () {
    console.log("Zzzzzzzzz");
  };
}

class Dog extends Animal {
  constructor(name, age, breed, puppies) {
    super(name, age, breed);
    this.puppies = puppies;
  }

  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("Rex", 2, "Bulldog", ["Baxter", "Marley", "Scooby"]);

dog.bark();

console.log(dog);
