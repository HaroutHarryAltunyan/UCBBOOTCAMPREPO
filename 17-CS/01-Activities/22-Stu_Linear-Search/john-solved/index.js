const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.

// Step 1. Create a function that accepts an array and an element.
const linearSearch = (array, element) => {
  //   //  Step 2. Loop through each element in the given array.
  for (let i = 0; i < array.length; i++) {
    // Step 3. Check to see if the index of the array we are looping through is equal to the element.
    if (array[i] === element) {
      // Step 4. Return the index of the matching element.
      return i;
    }
  }

  // Step 5. Return negative one if no matching element is found in the array.
  return -1;
};

module.exports = { linearSearch };
