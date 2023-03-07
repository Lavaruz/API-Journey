import { Router } from "express";
import { body } from "express-validator";

import createProduct from "../controllers/products/createProduct.js";
import deleteProduct from "../controllers/products/deleteProduct.js";
import getAllProducts from "../controllers/products/getAllProducts.js";
import getProductById from "../controllers/products/getProductById.js";
import updateProduct from "../controllers/products/updateProduct.js";

const productRouter = Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", getProductById);
productRouter.post(
  "/product",
  body("name").isLength({ min: 5 }),
  body("price").isNumeric(),
  createProduct
);
productRouter.put(
  "/product/:id",
  body("name").isLength({ min: 5 }),
  body("price").isNumeric(),
  updateProduct
);
productRouter.delete("/product/:id", deleteProduct);

export default productRouter;
