import cors from "cors";
import morgan from "morgan";
import express from "express";

import productRouter from "./routers/product.js";

import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);
const db = new Low(adapter);

const app = express();
app.db = db;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ====== ROUTER
app.use("/v1", productRouter);

app.listen(3000, () => console.log("server run at port 3000"));
