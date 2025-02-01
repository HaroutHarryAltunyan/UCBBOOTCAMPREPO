// create the Stack class with two methods to remove and add an element
class Stack {
  // store data in an array
  constructor(data = []) {
    this.container = data;
  }

  addToStack(item) {
    this.container.push(item);
  }

  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
