// =====================================================
// FILE: backend/middleware/rateLimiter.js
// PURPOSE: Prevent abuse with tiered rate limiting
// =====================================================

import rateLimit from "express-rate-limit";

// General API rate limit — 100 requests per 15 minutes per IP
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: "Too many requests. Please try again in 15 minutes.",
    retryAfter: "15 minutes",
  },
  handler: (req, res, next, options) => {
    res.status(429).json(options.message);
  },
});

// Strict chat limiter — 30 messages per 10 minutes per IP
// Prevents chat spam / bot abuse
const chatLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Rate limit by IP + sessionId combo for more precision
    return req.ip + (req.body?.sessionId || "");
  },
  message: {
    success: false,
    error:
      "You've sent too many messages. Please wait a few minutes before continuing.",
    retryAfter: "10 minutes",
  },
  handler: (req, res, next, options) => {
    res.status(429).json(options.message);
  },
  skip: (req) => {
    // Skip rate limiting in development
    return process.env.NODE_ENV === "development" && process.env.DISABLE_RATE_LIMIT === "true";
  },
});

// History fetch limiter — 20 requests per 5 minutes
const historyLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    error: "Too many history requests. Please slow down.",
  },
  handler: (req, res, next, options) => {
    res.status(429).json(options.message);
  },
});

export { generalLimiter, chatLimiter, historyLimiter };