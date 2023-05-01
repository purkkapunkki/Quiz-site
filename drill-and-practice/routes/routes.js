import { Router } from "../deps.js";
import * as mainController from "./controllers/mainController.js";
import * as authenticationController from "./controllers/authenticationController.js";

const router = new Router();

router.get("/", mainController.showMain);
router.get("/auth/login", authenticationController.showLogin);
router.post("/auth/login", authenticationController.validateLogin);
router.get("/auth/register", authenticationController.showRegistration);
router.post("/auth/register", authenticationController.validateRegistration);

export { router };
