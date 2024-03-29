import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import { ProductSchema } from "./productModel.js";
import { AdressSchema } from "./adressModel.js";

const UserSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    required: [true, "Please provide name."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide name."],
  },
  email: {
    type: String,
    required: [true, "Please provide email."],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email.",
      unique: true,
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password."],
    minlength: 6,
    select: false,
  },
  userCart: [ProductSchema],
  orderedProducts: [ProductSchema],
  address: {
    type: AdressSchema,
    required: false,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.REACT_APP_JWT_SECRET, {
    expiresIn: process.env.REACT_APP_JWT_LIFETIME,
  });
};
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
export default mongoose.model("User", UserSchema);
