import express from "express";
import authControllers from "../controllers/auth";

const router = express.Router();

router.get("/user/:id", authControllers.findUser);
router.post("/user/login", authControllers.login);
router.post("/user/signup", authControllers.signup);

export default router;
