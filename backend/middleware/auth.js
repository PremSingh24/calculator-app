import jwt from "jsonwebtoken";

export const authenticateJWT = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (token) {
      const decodedToken = jwt.verify(token, String(process.env.TOKEN_SECRET));

      if (decodedToken) {
        req.headers["operator"] = decodedToken.operator;
        next();
      } else {
        res.status(401).json({ message: "Failed to authenticate" });
      }
    } else {
      res.status(401).json({ message: "Failed to authenticate" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
