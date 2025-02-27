const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () {
  const discountedPrice = this.price * 0.5;
  console.log(`${this.title} discount price is ${discountedPrice}`);
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);

// TODO: Create a new instance of the model
const discountedBook = new Book({
  title: "Green Eggs and Ham",
  author: "Dr. Suess",
  price: 6,
});

// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();

module.exports = Book;
