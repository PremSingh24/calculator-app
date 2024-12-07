import jwt from "jsonwebtoken";
import { Users } from "../model/user.model.js";

export const registerUserHandler = async (req, res) => {
  try {
    const registerUser = req.body;

    const emailTaken = await Users.findOne({ email: registerUser.email });

    if (emailTaken) {
      res.status(409).json({ message: "Email is already Taken" });
    } else {
      const newUser = new Users(registerUser);
      await newUser.save();

      res.status(201).json({ message: "User Registered Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const LoginUserHandler = async (req, res) => {
  try {
    const loginUser = req.body;

    const userExist = await Users.findOne({ email: loginUser.email });

    if (userExist) {
      const passwordMatch = loginUser.password == userExist.password;

      if (passwordMatch) {
        const token = jwt.sign(
          { id: userExist._id, operator: userExist.operator },
          String(process.env.TOKEN_SECRET),
          { expiresIn: "1h" }
        );
        res.status(200).json({ message: "User LoggedIn Successfully", token });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }
    } else {
      res.status(401).json({ message: "Email not Registered" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
