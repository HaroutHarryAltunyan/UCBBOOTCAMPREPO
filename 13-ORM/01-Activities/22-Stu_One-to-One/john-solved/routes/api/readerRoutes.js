const router = require("express").Router();
const { Reader, LibraryCard } = require("../../models");

// GET all readers
router.get("/", async (req, res) => {
  try {
    const readerData = await Reader.findAll({
      // TODO: Add a comment describing the functionality of this property
      include: [{ model: LibraryCard }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single reader
router.get("/:id", async (req, res) => {
  try {
    const readerData = await Reader.findByPk(req.params.id);

    if (!readerData) {
      res.status(404).json({ message: "No reader found with that id!" });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post("/", async (req, res) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete("/:id", async (req, res) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: "No reader found with that id!" });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
