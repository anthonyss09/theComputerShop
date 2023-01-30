import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../Errors/index.js";
import jwt from "jsonwebtoken";

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

// const fetchUserData = async (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) {
//     res.send("");
//     return;
//   }
//   const token = authHeader.split(" ")[1];
//   let userId;

//   jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
//     if (err) {
//       console.log(err);
//       throw new BadRequestError("Invalid credentials");
//     } else {
//       userId = payload.userId;
//     }
//   });
//   try {
//     const userData = await User.findOne({ _id: userId });
//     res.status(StatusCodes.OK).json(userData);
//   } catch (error) {
//     console.log(error);
//     res.status(StatusCodes.BAD_REQUEST).send(error);
//   }
// };

const updateUser = async (req, res) => {
  const { userId, update } = req.body;
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      throw new BadRequestError("Invalid credentials");
    }
  });

  try {
    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new BadRequestError("User does not exist");
    }

    const newCart = user.userCart;
    const cartModels = newCart.map((product) => {
      return product.model;
    });

    if (cartModels.includes(update.model)) {
      const targ = cartModels.indexOf(update.model);
      newCart[targ].count++;
    } else {
      newCart.push(update);
    }

    await User.updateOne({ _id: userId }, { userCart: newCart });
    const updatedUser = await User.findOne({ _id: userId });
    res.status(StatusCodes.OK).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser, updateUser };
