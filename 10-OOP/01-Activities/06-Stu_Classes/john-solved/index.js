// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }
}

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.

class Comment {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} with ${this.text}`
    );
  }
}

// TODO: Create a new object using the Comment class constructor.
const johnComment = new Comment(
  "John Young",
  "Way to go!",
  "2024-10-07 19:21:00"
);

// TODO: Create a new object using the BlogPost class constructor.
const aNewBlogPost = new BlogPost(
  "Greg Gregerson",
  "We won the game",
  "Game was great. We won.",
  "2024-10-05 08:00:00"
);

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
aNewBlogPost.addComment(johnComment);

aNewBlogPost.addComment(
  new Comment("Thomas", "Can we have multiple comments?", "2024-10-07 19:28:00")
);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
aNewBlogPost.printMetaData();
aNewBlogPost.authorName = "Jeff Jefferson";
aNewBlogPost.printMetaData();

aNewBlogPost.comments.forEach((comment) => comment.printMetaData());
