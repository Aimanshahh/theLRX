// =====================================================
// FILE: backend/controllers/chatController.mjs
// PURPOSE: Fuzzy search KB → matched answer OR fallback
//          No third-party AI involved.
// =====================================================

import Fuse from "fuse.js";
import Conversation from "../models/Conversation.mjs";
import knowledgeBase from "../Data/KnowledgeBase.mjs";

// ── Fuse.js Setup ───────────────────────────────────
const fuseOptions = {
  keys: [
    { name: "question", weight: 0.6 },
    { name: "tags",     weight: 0.3 },
    { name: "answer",   weight: 0.1 },
  ],
  threshold: 0.45,
  includeScore: true,
  minMatchCharLength: 2,
  ignoreLocation: true,
  shouldSort: true,
};

const fuse = new Fuse(knowledgeBase, fuseOptions);

// ── Fallback Message ────────────────────────────────
const FALLBACK_MESSAGE =
  "I'm sorry, I couldn't find information on that. Please contact our support team at support@thelrx.com for personalized assistance.";

// ── Keyword Normalization Map ────────────────────────
const KEYWORD_MAP = {
  "buk": "book", "bok": "book", "appoinment": "appointment",
  "apointment": "appointment", "appointmnt": "appointment",
  "appt": "appointment", "schedul": "schedule", "shedule": "schedule",
  "reschedul": "reschedule", "cancl": "cancel",
  "perscription": "prescription", "preescription": "prescription",
  "presciption": "prescription", "prescripion": "prescription",
  "rx": "prescription", "meds": "medication", "med": "medication",
  "mediicne": "medicine", "medicne": "medicine", "refil": "refill",
  "insuranse": "insurance", "insurence": "insurance",
  "paymnt": "payment", "cosr": "cost", "pric": "price",
  "acount": "account", "acct": "account", "pasword": "password",
  "passward": "password", "login": "sign in", "signin": "sign in",
  "signup": "sign up", "registr": "register",
  "hw": "how", "wht": "what", "cn": "can", "hv": "have",
  "ur": "your", "u": "you", "plz": "please", "pls": "please",
  "wanna": "want to", "gonna": "going to", "cud": "could",
  "shud": "should", "wud": "would", "dnt": "do not", "dont": "do not",
  "isnt": "is not", "cant": "cannot", "wont": "will not",
  "doc": "doctor", "dr": "doctor", "tele": "telehealth",
  "pharm": "pharmacy", "pharamcy": "pharmacy",
  "therapst": "therapist", "councelor": "counselor",
};

// ── Normalize Query ──────────────────────────────────
const normalizeQuery = (query) => {
  let normalized = query.toLowerCase().trim();
  Object.entries(KEYWORD_MAP).forEach(([typo, correct]) => {
    const regex = new RegExp(`\\b${typo}\\b`, "gi");
    normalized = normalized.replace(regex, correct);
  });
  return normalized;
};

// ── Search Knowledge Base (3-pass) ──────────────────
const searchKnowledgeBase = (query) => {
  const attempts = [
    query,
    normalizeQuery(query),
    normalizeQuery(query)
      .replace(/\b(i|do|how|can|what|is|the|a|an|my|me|to|for|in|on|at|of|and|or|with|get|want|need)\b/gi, "")
      .trim(),
  ].filter((q, index, arr) => q.length > 0 && arr.indexOf(q) === index);

  let bestResult = null;
  let bestScore = 0;

  for (const attempt of attempts) {
    const results = fuse.search(attempt);
    if (!results.length) continue;
    const score = parseFloat((1 - results[0].score).toFixed(3));
    if (score > bestScore) {
      bestScore = score;
      bestResult = results[0].item;
    }
    if (bestScore >= 0.75) break;
  }

  if (!bestResult || bestScore < 0.40) {
    return { match: null, score: bestScore, isFallback: true };
  }
  return { match: bestResult, score: bestScore, isFallback: false };
};

// ── POST /api/chat/message ───────────────────────────
const sendMessage = async (req, res) => {
  const { message, sessionId, userId } = req.body;
  try {
    let conversation = await Conversation.findOne({ sessionId });
    if (!conversation) {
      conversation = new Conversation({
        sessionId,
        userId: userId || null,
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"] || null,
        messages: [],
      });
    }

    conversation.messages.push({ sender: "user", text: message });

    const { match, score, isFallback } = searchKnowledgeBase(message);
    const botReply  = isFallback ? FALLBACK_MESSAGE : match.answer;
    const matchedId = isFallback ? null : match.id;
    const category  = isFallback ? null : match.category;

    conversation.messages.push({
      sender: "bot",
      text: botReply,
      matchedQuestionId: matchedId,
      score,
      isFallback,
    });

    await conversation.save();

    return res.status(200).json({
      success: true,
      data: {
        reply: botReply,
        sessionId,
        meta: { matchedQuestionId: matchedId, score, isFallback, category, totalMessages: conversation.messageCount },
      },
    });
  } catch (err) {
    console.error("[sendMessage Error]", err);
    return res.status(500).json({ success: false, error: "Internal server error. Please try again." });
  }
};

// ── GET /api/chat/history/:sessionId ────────────────
const getHistory = async (req, res) => {
  const { sessionId } = req.params;
  try {
    const conversation = await Conversation.findOne({ sessionId }).select(
      "messages sessionId messageCount createdAt lastActivity"
    );
    if (!conversation) {
      return res.status(200).json({ success: true, data: { sessionId, messages: [], messageCount: 0 } });
    }
    const messages = conversation.messages.map((m) => ({
      sender: m.sender, text: m.text, timestamp: m.timestamp,
    }));
    return res.status(200).json({
      success: true,
      data: { sessionId, messages, messageCount: conversation.messageCount, createdAt: conversation.createdAt, lastActivity: conversation.lastActivity },
    });
  } catch (err) {
    console.error("[getHistory Error]", err);
    return res.status(500).json({ success: false, error: "Failed to retrieve conversation history." });
  }
};

// ── DELETE /api/chat/history/:sessionId ─────────────
const clearHistory = async (req, res) => {
  const { sessionId } = req.params;
  try {
    await Conversation.findOneAndDelete({ sessionId });
    return res.status(200).json({ success: true, message: "Conversation cleared." });
  } catch (err) {
    console.error("[clearHistory Error]", err);
    return res.status(500).json({ success: false, error: "Failed to clear history." });
  }
};

// ── GET /api/chat/stats ──────────────────────────────
const getStats = async (req, res) => {
  try {
    const totalConversations = await Conversation.countDocuments();
    const [stats] = await Conversation.aggregate([
      { $group: { _id: null, totalMessages: { $sum: "$messageCount" }, totalFallbacks: { $sum: "$fallbackCount" }, avgMessagesPerSession: { $avg: "$messageCount" } } },
    ]);
    return res.status(200).json({
      success: true,
      data: {
        totalConversations,
        totalMessages: stats?.totalMessages || 0,
        totalFallbacks: stats?.totalFallbacks || 0,
        avgMessagesPerSession: parseFloat((stats?.avgMessagesPerSession || 0).toFixed(2)),
        knowledgeBaseSize: knowledgeBase.length,
      },
    });
  } catch (err) {
    console.error("[getStats Error]", err);
    return res.status(500).json({ success: false, error: "Failed to get stats." });
  }
};

export { sendMessage, getHistory, clearHistory, getStats };