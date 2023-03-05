import express from "express";
import morgan from "morgan";
import cors from "cors";

import connectDb from "./services/mongo.js";
import booksRouter from "./routes/books.js";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/", booksRouter);

async function startServer() {
  await connectDb();
  app.listen(3000, () => {
    console.log("server run at port 3000");
  });
}
startServer();
