import express from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

import connectDb from "./services/mongo.js";
import booksRouter from "./routes/books.js";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "Simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};
const specs = swaggerJSDoc(options);

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(specs));
app.use("/books", booksRouter);

async function startServer() {
  await connectDb();
  app.listen(3000, () => {
    console.log("server run at port 3000");
  });
}
startServer();
