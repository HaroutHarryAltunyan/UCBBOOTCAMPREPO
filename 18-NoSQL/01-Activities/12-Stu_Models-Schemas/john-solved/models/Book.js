const mongoose = require("mongoose");

// TODO: Add a comment describing the functionality of the code below
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Add a comment describing the functionality of the code below
const Book = mongoose.model("Book", bookSchema);

const handleError = (err) => console.error(err);

// TODO: Add a comment describing the functionality of the code below
Book.create({
  title: "Diary of Anne Frank",
  author: "Anne Frank",
  publisher: "Scholastic",
  stockCount: 10,
  price: 10,
  inStock: true,
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
Book.create({
  title: "Oh the Places You Will Go!",
  author: "Dr. Seuss",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

// TODO: Add a comment describing the difference between this instance being created
// and the instance that was created above
Book.create({ title: "Harold and the Purple Crayon" })
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

module.exports = Book;
