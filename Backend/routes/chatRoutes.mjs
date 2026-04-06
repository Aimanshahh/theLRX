// =====================================================
// FILE: backend/routes/chatRoutes.js
// PURPOSE: Define all chatbot API endpoints
// =====================================================

import express from "express";
import {
  sendMessage,
  getHistory,
  clearHistory,
  getStats,
} from "../controllers/chatController.mjs";
import { chatLimiter, historyLimiter } from "../Middleware/rateLimiter.mjs";
import {
  validateChatMessage,
  validateSessionId,
  handleValidationErrors,
} from "../middleware/validators.mjs";

const router = express.Router();

// ── POST /api/chat/message ──────────────────────────
// Send a message and get a bot response
router.post(
  "/message",
  chatLimiter,
  validateChatMessage,
  handleValidationErrors,
  sendMessage
);

// ── GET /api/chat/history/:sessionId ───────────────
// Retrieve full conversation history for a session
router.get(
  "/history/:sessionId",
  historyLimiter,
  validateSessionId,
  handleValidationErrors,
  getHistory
);

// ── DELETE /api/chat/history/:sessionId ────────────
// Clear a conversation (used when user closes/resets chat)
router.delete(
  "/history/:sessionId",
  validateSessionId,
  handleValidationErrors,
  clearHistory
);

// ── GET /api/chat/stats ─────────────────────────────
// Admin stats endpoint (protect with auth middleware in production)
router.get("/stats", getStats);

export default router;