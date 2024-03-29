import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import connectDb from "./Db/connect.js";
import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";
import upload from "./utils/fileUpload.js";

app.use(express.json());

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// Accessing the path module
import path from "path";
// import client build
const __dirname = path.dirname(__filename);

//routes
app.use("/api/auth", authRouter);
app.use("/api/products", upload.single("image"), productRouter);

app.use(express.static(path.join(__dirname, "./client/build")));
// redirect requests to index.html
app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the computer shop.");
});

const start = async () => {
  try {
    await connectDb(process.env.REACT_APP_MONGO_URL);
    app.listen(port, () => {
      console.log(`App is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
