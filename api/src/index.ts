import express from "express";
import morgan from "morgan";
import serverport from "./config/index";
import chalk from "chalk";
import cors from "cors";
import connectDB from "./config/connectDB";

const app = express();

// middleware
app.use(express.json()); // in order to use req.body
app.use(express.urlencoded({ extended: true })); // in order to use req.body
app.use(morgan("dev")); // in order to log requests
app.use(cors());

const port = serverport.dev.port;

// routes

app.listen(port, async () => {
  try {
    console.log(chalk.yellow(`Server is listening on port ${port}`));
    await connectDB();
  } catch (error) {
    console.log(chalk.red(error));
  }
});
