const booksRouter = require("express").Router();
const Books = require("../models/books");

booksRouter.get("/", async (req, res) => {
  res.json(await Books.find());
});

booksRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(
    await Books.find({
      id: id,
    })
  );
});

module.exports = booksRouter;
