import jwt from "jsonwebtoken";
import User from "../models/User.mjs";

export const protect = async (req, res, next) => {
  let token;

  // Check if authorization header exists and starts with Bearer
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from header (format: "Bearer TOKEN")
      token = req.headers.authorization.split(" ")[1];

      console.log("🔐 Verifying token...");

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("✅ Token verified, user ID:", decoded.id);

      // Get user from token and attach to request (exclude password)
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        console.log("❌ User not found");
        return res.status(401).json({ message: "Not authorized, user not found" });
      }

      next();
    } catch (error) {
      console.error("❌ Token verification failed:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({ message: "Not authorized, no token provided" });
  }
};