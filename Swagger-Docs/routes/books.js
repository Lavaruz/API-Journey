import express from "express";
import { nanoid } from "nanoid";
import Books from "../models/books.js";

const booksRouter = express.Router();

booksRouter.get("/", async (req, res) => {
  res.json(await Books.find({}, "-_id"));
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
      id: id,
      ...req.body,
    },
    { new: true }
  ).then((result) => {
    res.json(result);
  });
});

booksRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Books.findOneAndDelete({
    id: id,
  }).then((result) => {
    res.json({
      status: `id ${result.id} deleted`,
      result,
    });
  });
});

export default booksRouter;
