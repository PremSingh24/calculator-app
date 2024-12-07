import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  operator: {
    type: String,
    enum: ["+", "-", "/", "*"],
  },
});

export const Users = mongoose.model("Users", UserSchema);
