// TODO: Add a comment describing what kind of function this is
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

BlogPost.prototype.sharedComments = [];

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
BlogPost.prototype.addComment = function (comment) {
  this.comments.push(comment);
};

BlogPost.prototype.addSharedComment = function (comment) {
  BlogPost.prototype.sharedComments.push(comment);
};

const post = new BlogPost(
  "John Doe",
  "My Second Post",
  "Cats are super cute!",
  "12/16/2021"
);

const post2 = new BlogPost(
  "John Human",
  "Totally different",
  "Dogs are super cute!",
  "12/16/2022"
);

post.addComment("Nice post, I like it!");
post.addSharedComment("Hi there");

// TODO: Add a comment describing what you expect to see printed in the console
console.log(post.comments);

post.addComment("Nice. Could be better");
console.log(post.comments);
console.log(post.sharedComments);

console.log("post 2 comments" + post2.comments);
console.log(post2.sharedComments);
