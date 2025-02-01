const BlogPost = require("../blogPost.js");

describe("BlogPost", () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it("should throw an error when the authorName provided is less than 2 characters long", () => {
    // arrange
    const cb = () => new BlogPost("G");
    const expectedResult = new Error(
      "Author must be at least 2 characters long."
    );

    // act and the assert
    expect(cb).toThrow(expectedResult);
  });

  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  it("should throw an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.", () => {
    // arrange
    const cb = () => new BlogPost("$$$$");
    const expectedResult = new Error(
      "Author must only contain letters, numbers, dashes, and underscores."
    );

    // act and assert
    expect(cb).toThrow(expectedResult);
  });
});
