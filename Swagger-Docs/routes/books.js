import express from "express";
import { nanoid } from "nanoid";
import Books from "../models/books.js";

const booksRouter = express.Router();

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

booksRouter.post("/", async (req, res) => {
  await Books.create({
    id: nanoid(8),
    ...req.body,
  }).then((result) => {
    res.json(result);
  });
});

booksRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  await Books.findOneAndUpdate(
    {
      id: id,
    },
    {
      name: req.body.name,
    },
    { new: true }
  ).then((result) => {
    res.json(result);
  });
});

export default booksRouter;
