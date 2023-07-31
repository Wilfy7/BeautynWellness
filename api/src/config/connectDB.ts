import chalk from "chalk";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL!);
    console.log(chalk.green("MongoDB connected"));
  } catch (error) {
    console.log(chalk.red(error));
    console.log(chalk.red("MongoDB connection failed"));
    process.exit(1);
  }
};

export default connectDB;
