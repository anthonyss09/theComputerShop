import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, admin, userCart } = req.body;

  const emailInUse = await User.findOne({ email });
  if (emailInUse) {
    throw new BadRequestError("Email already in use.");
  }
  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError("Please provide all fields.");
  }

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      admin,
      userCart,
    });
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values.");
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    const passwordAuthorized = user.comparePassword(password);

    if (!passwordAuthorized) {
      res.StatusCodes(BAD_REQUEST).json({ error: "Invalid credentials." });
      throw new UnauthenticatedError("Invalid credentials.");
    }
    user.password = undefined;
    const token = user.createJWT();

    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

export { registerUser, loginUser };
