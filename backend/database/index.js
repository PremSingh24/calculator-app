import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Error ", error);
  }
};
