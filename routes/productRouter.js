import express from "express";
const router = express.Router();
import {
  createProduct,
  getProduct,
  getProducts,
  searchProducts,
} from "../controllers/productController.js";

router.route("/add-product").post(createProduct);
router.route("/laptops").get(getProducts);
router.route("/desktops").get(getProducts);
router.route("/all-products").get(getProducts);
router.route("/gaming").get(getProducts);
router.route("/devices").get(getProducts);
router.route("/accessories").get(getProducts);
router.route("/search").get(searchProducts);
router.route("/:id").get(getProduct);

export default router;
