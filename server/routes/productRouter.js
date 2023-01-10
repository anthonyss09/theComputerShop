import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/laptops").get(getProducts);
router.route("/desktops").get(getProducts);
router.route("/all-products").get(getProducts);

export default router;
