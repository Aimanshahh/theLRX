import express from "express";
import { subscribeGuide } from "../controllers/guideController.mjs";

const router = express.Router();

router.post("/subscribe", subscribeGuide);

export default router;
