import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  fullName: string;
  username: string;
  password: string;
  isAdmin: boolean;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  isVerified: boolean;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true },
  fullName: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  address: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  postalCode: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
