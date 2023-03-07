import { Router } from "express";
import createProduct from "../controllers/products/createProduct.js";
import deleteProduct from "../controllers/products/deleteProduct.js";
import getAllProducts from "../controllers/products/getAllProducts.js";
import getProductById from "../controllers/products/getProductById.js";
import updateProduct from "../controllers/products/updateProduct.js";

const productRouter = Router();

productRouter.get("/products", getAllProducts);
productRouter.get("/product/:id", getProductById);
productRouter.post("/product", createProduct);
productRouter.put("/product/:id", updateProduct);
productRouter.delete("/product/:id", deleteProduct);

export default productRouter;
