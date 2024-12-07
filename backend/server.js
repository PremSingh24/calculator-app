import express from "express";
import { connectDB } from "./database/index.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log("Database Connection Error ", err);
  });

app.get("/", (req, res) => {
  res.send("working");
});

import authRouter from "./routes/auth.routes.js";
import operationRouter from "./routes/operation.routes.js";

app.use("/api/user", authRouter);
app.use("/api/operations", operationRouter);
