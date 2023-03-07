import cors from "cors";
import morgan from "morgan";
import express from "express";

import productRouter from "./routers/product.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// ====== ROUTER
app.use("/v1", productRouter);

app.listen(3000, () => console.log("server run at port 3000"));
