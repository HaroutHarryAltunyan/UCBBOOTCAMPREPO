// TODO: Import the Validate class.
const Validate = require("../validate.js");

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe("Validate", () => {
  describe("isPassword", () => {
    it("should return false when passed an empty string", () => {
      // arrange
      const validate = new Validate();

      // act
      const result = validate.isPassword("");

      // assert
      expect(result).toEqual(false);
    });
  });
});

// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
