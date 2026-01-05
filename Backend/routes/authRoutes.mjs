import express from "express";
import { 
  registerUser, 
  loginUser, 
  getUserProfile,
  updateProfile, 
  changePassword 
} from "../controllers/authController.mjs";
import { protect } from "../middleware/authMiddleware.mjs";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes (require authentication)
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateProfile);
router.put("/password", protect, changePassword);

export default router;