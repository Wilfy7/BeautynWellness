import { Request, Response } from "express";
import User from "../models/user.model";
import { securePassword } from "../service/securePassword";

// register user controller
export const registerUser = async (req: Request, res: Response) => {
  try {
    // get info from the request body
    const {
      email,
      fullName,
      username,
      password,
      address,
      city,
      postalCode,
      country,
    } = req.body;

    // check if the user already exists
    const user = await User.findOne({ email });
    if (user as any) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash the password
    const hashedPassword = await securePassword(password);

    // create a new user
    const newUser = new User({
      email,
      fullName,
      username,
      password: hashedPassword,
      address,
      city,
      postalCode,
      country,
    });

    // save the user
    const savedUser = await newUser.save();

    return res.status(200).json({
      message: "User registered successfully",
      data: savedUser,
    });
  } catch (error) {
    console.log(error);
  }
};
