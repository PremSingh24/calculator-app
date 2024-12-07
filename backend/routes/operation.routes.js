import { Router } from "express";

import { operationHandler } from "../controller/operation.controller.js";
import { authenticateJWT } from "../middleware/auth.js";

const router = Router();

router.route("/calculate").post(authenticateJWT, operationHandler);

export default router;
