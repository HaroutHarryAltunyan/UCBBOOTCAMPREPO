// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    this.text = text;
  }
}

// TODO: Create a new object using the Comment class constructor.
const johnComment = new Comment("John", "Super cool!", "2024-10-07 20:11:00");

// TODO: Create a new object using the BlogPost class constructor.
const theBlogPost = new BlogPost(
  "Kevin",
  "My new house!",
  "It was great!",
  "2024-09-07 08:00:00"
);

// TODO: Log both newly created BlogPost and Comment to the console.
console.log(johnComment);
console.log(theBlogPost);
