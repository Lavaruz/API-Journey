import express from "express";
import { nanoid } from "nanoid";
import Books from "../models/books.js";

const booksRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - id
 *        - name
 *      properties:
 *        id:
 *          type: string
 *          description: auto created uniq id
 *        name:
 *          type: string
 *          description: name of the book
 *      example:
 *        id: jQfu25f8
 *        name: Masbro keliling kota
 */

/**
 * @swagger
 * tags:
 *  name: Books
 *  description: Books managing API
 */

/**
 * @swagger
 * /books:
 *  get:
 *    summary: Return the list of all the books
 *    tags: [Books]
 *    responses:
 *      200:
 *        description: the list of the books
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Book'
 */

booksRouter.get("/", async (req, res) => {
  res.json(await Books.find({}, "-_id"));
});

/**
 * @swagger
 * /books/{id}:
 *  get:
 *    summary: Get book by id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: this is the book id
 *    responses:
 *      200:
 *        description: the book description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: the book not found
 */

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
