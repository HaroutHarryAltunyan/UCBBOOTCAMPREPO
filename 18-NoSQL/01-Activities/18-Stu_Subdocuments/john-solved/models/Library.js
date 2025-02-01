const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments
const bookData = [
  { title: "Green Eggs and Ham", price: 6 },
  { title: "Blue Eggs and Ham", price: 8 },
  { title: "Yellow Eggs and Ham", price: 10 },
];

Library.create({
  name: "City Main Library",
  books: bookData,
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = Library;
