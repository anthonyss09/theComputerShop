import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  updateUser,
} from "../controllers/authController.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update-user").post(updateUser);
// router.route("/fetch-user-data").get(fetchUserData);

export default router;
