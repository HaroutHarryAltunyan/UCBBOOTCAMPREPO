// Constructor Arithmetic is imported.
const Arithmetic = require("../arithmetic.js");

// A testing suite for Arithmetic is created.
describe("Arithmetic", () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe("sum", () => {
    it("should take two numbers and add them together", () => {
      // arrange
      const expectedResult = 4;
      const arithmetic = new Arithmetic();

      // act
      const result = arithmetic.sum(2, 2);

      // assert
      expect(result).toEqual(expectedResult);
    });
  });
});
