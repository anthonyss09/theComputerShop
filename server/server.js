import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import connectDb from "./Db/connect.js";
import authRouter from "./routes/authRouter.js";

app.use(express.json());

//middleware

//routes
app.use("/api/auth", authRouter);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to the computer shop.");
});

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`App is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
