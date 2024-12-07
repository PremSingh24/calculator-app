import { Router } from "express";

import {
  registerUserHandler,
  LoginUserHandler,
} from "../controller/auth.controller.js";

const router = Router();

router.route("/register").post(registerUserHandler);
router.route("/login").post(LoginUserHandler);

export default router;
