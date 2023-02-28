import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  updateUser,
  getStripeSecret,
} from "../controllers/authController.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update-user").post(updateUser);
router.route("/v1/stripe-secret").post(getStripeSecret);
// router.route("/fetch-user-data").get(fetchUserData);

export default router;
