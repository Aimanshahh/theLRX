// =====================================================
// FILE: backend/models/Conversation.js
// PURPOSE: MongoDB schema to store chat sessions & history
// =====================================================

import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      enum: ["user", "bot"],
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    matchedQuestionId: {
      type: String,
      default: null, // tracks which KB entry answered this
    },
    score: {
      type: Number,
      default: null, // fuzzy match score (0-1)
    },
    isFallback: {
      type: Boolean,
      default: false,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: true }
);

const ConversationSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    // Optional: link to a real user if logged in
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    messages: [MessageSchema],
    // Metadata
    messageCount: {
      type: Number,
      default: 0,
    },
    fallbackCount: {
      type: Number,
      default: 0,
    },
    resolvedCount: {
      type: Number,
      default: 0,
    },
    // Track what topics were discussed
    categoriesDiscussed: {
      type: [String],
      default: [],
    },
    ipAddress: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

// Update lastActivity and counts before saving
ConversationSchema.pre("save", function (next) {
  this.lastActivity = new Date();
  this.messageCount = this.messages.length;
  this.fallbackCount = this.messages.filter((m) => m.isFallback).length;
  this.resolvedCount = this.messages.filter(
    (m) => m.sender === "bot" && !m.isFallback
  ).length;

  // Track unique categories discussed
  const categories = this.messages
    .filter((m) => m.sender === "bot" && m.matchedQuestionId)
    .map((m) => m.matchedQuestionId?.split("_")[0])
    .filter(Boolean);
  this.categoriesDiscussed = [...new Set(categories)];

  next();
});

export default mongoose.model("Conversation", ConversationSchema);