import Product from "../models/productModel.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";
// import url from "url";

export const createProduct = async (req, res) => {
  const { model, manufactuer, price, type, imageName } = req.body;
  const { isAdmin } = req.headers;

  if (isAdmin === "false") {
    throw new UnauthenticatedError("Invalid credentials.");
  }
  if (!model || !manufactuer || !price || !type) {
    throw new BadRequestError("Please provide all fields.");
  }

  try {
    const newProduct = await Product.create({
      model,
      image: imageName,
      manufactuer,
      price,
      type,
    });
    res.status(StatusCodes.CREATED).json({ newProduct });
    console.log(newProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
export const getProducts = async (req, res) => {
  const param = req.url;
  const productType = param.slice(1);
  if (productType === "all-products") {
    try {
      const products = await Product.find();
      res.status(StatusCodes.OK).send(products);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const products = await Product.find({ type: productType });
      res.status(StatusCodes.OK).send(products);
    } catch (error) {
      console.log(error);
    }
  }
};
export const getProduct = async (req, res) => {
  const param = req.url;
  const productId = param.slice(1);
  try {
    const product = await Product.findOne({ _id: productId });
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.log(error);
  }
};
