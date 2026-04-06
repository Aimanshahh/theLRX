// =====================================================
// FILE: backend/middleware/validators.js
// PURPOSE: Validate & sanitize all incoming chat input
// =====================================================

import { body, param, validationResult } from "express-validator";

// ── Sanitization helpers ────────────────────────────

/**
 * Strip HTML tags and dangerous characters from a string
 */
const sanitizeText = (text) => {
  if (typeof text !== "string") return "";
  return text
    .replace(/<[^>]*>/g, "")           // remove HTML tags
    .replace(/[<>'"`;]/g, "")          // remove XSS-prone chars
    .replace(/javascript:/gi, "")      // remove JS protocol
    .replace(/on\w+\s*=/gi, "")        // remove event handlers
    .trim();
};

// ── Validation chains ───────────────────────────────

/**
 * Validate POST /api/chat/message
 */
const validateChatMessage = [
  body("message")
    .exists({ checkFalsy: true })
    .withMessage("Message is required")
    .isString()
    .withMessage("Message must be a string")
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage("Message must be between 1 and 500 characters")
    .customSanitizer((value) => sanitizeText(value)),

  body("sessionId")
    .exists({ checkFalsy: true })
    .withMessage("Session ID is required")
    .isString()
    .withMessage("Session ID must be a string")
    .isUUID()
    .withMessage("Session ID must be a valid UUID")
    .trim(),

  body("userId")
    .optional()
    .isMongoId()
    .withMessage("User ID must be a valid MongoDB ObjectId"),
];

/**
 * Validate GET /api/chat/history/:sessionId
 */
const validateSessionId = [
  param("sessionId")
    .isUUID()
    .withMessage("Session ID must be a valid UUID")
    .trim(),
];

// ── Result handler middleware ───────────────────────

/**
 * Middleware: Check validation results and return 422 if any errors
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      error: "Invalid input",
      details: errors.array().map((e) => ({
        field: e.path,
        message: e.msg,
      })),
    });
  }
  next();
};

export {
  validateChatMessage,
  validateSessionId,
  handleValidationErrors,
  sanitizeText,
};