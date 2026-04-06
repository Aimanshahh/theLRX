import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.mjs";

// Routes
import guideRoutes from "./routes/guideRoute.mjs";
import authRoutes from "./routes/authRoutes.mjs";
import chatRoutes from "./routes/chatRoutes.mjs";

dotenv.config();

const app = express();

// Middleware - FIXED CORS FOR VITE (port 5173)
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // ✅ Support both React and Vite
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Debug logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log("Request body:", req.body);
  next();
});

// Test route
app.get("/", (req, res) => res.send("✅ Backend running successfully!"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

// Connect Database
connectDB();

// API Routes
app.use("/api/guides", guideRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ 
    message: "Server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));