// =====================================================
// FILE: backend/data/knowledgeBase.js
// PURPOSE: Dummy Q&A knowledge base for TheLRx chatbot
// Add/edit entries here to expand the bot's knowledge
// =====================================================

const knowledgeBase = [

  // ── GENERAL ──────────────────────────────────────
  {
    id: "gen_001",
    category: "general",
    tags: ["what", "thelrx", "about", "platform", "telehealth"],
    question: "What is TheLRx?",
    answer:
      "TheLRx is a telehealth platform that connects you with licensed healthcare providers from the comfort of your home. We offer virtual consultations, prescription services, and ongoing care management.",
  },
  {
    id: "gen_002",
    category: "general",
    tags: ["how", "works", "process", "start", "begin"],
    question: "How does TheLRx work?",
    answer:
      "It's simple! Create an account, choose your provider or specialty, book an appointment, and meet your doctor via video or chat. Prescriptions can be sent directly to your preferred pharmacy.",
  },
  {
    id: "gen_003",
    category: "general",
    tags: ["available", "hours", "24/7", "time", "open"],
    question: "Is TheLRx available 24/7?",
    answer:
      "Many of our providers are available around the clock. Availability depends on the specialty and provider. You can check real-time availability when booking your appointment.",
  },

  // ── APPOINTMENTS ─────────────────────────────────
  {
    id: "appt_001",
    category: "appointments",
    tags: ["book", "appointment", "schedule", "visit", "consultation"],
    question: "How do I book an appointment?",
    answer:
      "To book an appointment: 1) Log into your TheLRx account, 2) Select a specialty or provider, 3) Choose an available time slot, 4) Confirm your booking. You'll receive a confirmation email with your visit details.",
  },
  {
    id: "appt_002",
    category: "appointments",
    tags: ["cancel", "reschedule", "appointment", "change"],
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes! You can cancel or reschedule up to 2 hours before your appointment at no charge. Go to 'My Appointments' in your dashboard to make changes. Late cancellations may incur a fee.",
  },
  {
    id: "appt_003",
    category: "appointments",
    tags: ["wait", "time", "how long", "queue"],
    question: "How long is the wait time?",
    answer:
      "For scheduled appointments, there is typically no wait. For on-demand visits, wait times range from 5–20 minutes depending on provider availability.",
  },

  // ── PRESCRIPTIONS ────────────────────────────────
  {
    id: "rx_001",
    category: "prescriptions",
    tags: ["prescription", "medication", "rx", "medicine", "drug"],
    question: "Can I get a prescription through TheLRx?",
    answer:
      "Yes! Our licensed providers can prescribe medications when clinically appropriate. Prescriptions are sent electronically to your chosen pharmacy. Note: controlled substances cannot be prescribed via telehealth per federal law.",
  },
  {
    id: "rx_002",
    category: "prescriptions",
    tags: ["refill", "prescription", "renew", "renewal"],
    question: "Can I get a prescription refill?",
    answer:
      "Absolutely. Schedule a follow-up visit with your provider to request a refill. In some cases, providers may approve refills after reviewing your chart without a full visit.",
  },
  {
    id: "rx_003",
    category: "prescriptions",
    tags: ["pharmacy", "send", "pickup", "prescription"],
    question: "Which pharmacies does TheLRx work with?",
    answer:
      "We work with all major pharmacy chains including CVS, Walgreens, Rite Aid, and most independent pharmacies. We also partner with mail-order pharmacies for home delivery.",
  },

  // ── INSURANCE & PAYMENTS ─────────────────────────
  {
    id: "pay_001",
    category: "billing",
    tags: ["insurance", "coverage", "accept", "plan"],
    question: "Does LiquidRX accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. During registration, you can add your insurance information and we'll verify your coverage. Copays vary by plan.",
  },
  {
    id: "pay_002",
    category: "billing",
    tags: ["cost", "price", "how much", "fee", "charge", "pay"],
    question: "How much does a visit cost?",
    answer:
      "Without insurance, visits typically range from $49–$99 depending on the type of consultation. With insurance, you pay your standard copay. We also offer subscription plans for frequent users.",
  },
  {
    id: "pay_003",
    category: "billing",
    tags: ["payment", "method", "card", "credit", "debit", "hsa", "fsa"],
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit/debit cards (Visa, Mastercard, Amex), HSA/FSA cards, and PayPal. All transactions are secured with 256-bit encryption.",
  },

  // ── PRIVACY & SECURITY ───────────────────────────
  {
    id: "priv_001",
    category: "privacy",
    tags: ["hipaa", "privacy", "secure", "data", "information", "safe"],
    question: "Is my information secure and HIPAA compliant?",
    answer:
      "Absolutely. LiquidRX is fully HIPAA compliant. All your health data is encrypted, stored securely, and never sold to third parties. Our platform undergoes regular security audits.",
  },
  {
    id: "priv_002",
    category: "privacy",
    tags: ["delete", "account", "data", "remove"],
    question: "Can I delete my account and data?",
    answer:
      "Yes. You can request account deletion from your profile settings. We will remove your personal data within 30 days in accordance with privacy regulations. Medical records are retained per state law.",
  },

  // ── TECHNICAL ────────────────────────────────────
  {
    id: "tech_001",
    category: "technical",
    tags: ["video", "call", "requirements", "device", "browser"],
    question: "What do I need for a video consultation?",
    answer:
      "You need a device with a camera and microphone (smartphone, tablet, or computer), a stable internet connection (minimum 2 Mbps), and a modern browser (Chrome, Firefox, Safari, or Edge). No special software required.",
  },
  {
    id: "tech_002",
    category: "technical",
    tags: ["app", "mobile", "ios", "android", "download"],
    question: "Is there a mobile app?",
    answer:
      "Yes! The TheLRx app is available for iOS (App Store) and Android (Google Play). The app supports all features including video visits, messaging, and prescription management.",
  },
  {
    id: "tech_003",
    category: "technical",
    tags: ["login", "password", "forgot", "reset", "access"],
    question: "I forgot my password, how do I reset it?",
    answer:
      "Click 'Forgot Password' on the login page, enter your registered email, and we'll send a reset link. The link expires in 30 minutes. If you don't receive it, check your spam folder.",
  },

  // ── SPECIALTIES ──────────────────────────────────
  {
    id: "spec_001",
    category: "specialties",
    tags: ["specialties", "doctor", "type", "what kind", "condition"],
    question: "What specialties are available on TheLRx?",
    answer:
      "We offer consultations in: Primary Care, Mental Health & Therapy, Dermatology, Women's Health, Men's Health, Pediatrics, Urgent Care, Nutrition, and more. New specialties are added regularly.",
  },
  {
    id: "spec_002",
    category: "specialties",
    tags: ["mental health", "therapy", "therapist", "counseling", "anxiety", "depression"],
    question: "Can I see a therapist or counselor?",
    answer:
      "Yes! We have licensed therapists, psychologists, and counselors available for individual therapy, couples counseling, and psychiatric medication management. Sessions are fully confidential.",
  },
  {
    id: "spec_003",
    category: "specialties",
    tags: ["emergency", "urgent", "911", "serious", "emergency room"],
    question: "What if I have a medical emergency?",
    answer:
      "TheLRx is not for medical emergencies. If you are experiencing a life-threatening situation, please call 911 or go to your nearest emergency room immediately. Our platform is designed for non-emergency care.",
  },

  // ── ACCOUNT ──────────────────────────────────────
  {
    id: "acct_001",
    category: "account",
    tags: ["sign up", "register", "create account", "new user"],
    question: "How do I create an account?",
    answer:
      "Click 'Sign Up' on our homepage, enter your name, email, and create a password. You'll verify your email, then complete a short health intake form. The whole process takes under 5 minutes!",
  },
  {
    id: "acct_002",
    category: "account",
    tags: ["profile", "update", "change", "information", "edit"],
    question: "How do I update my profile information?",
    answer:
      "Log in and go to 'My Profile' from the dashboard. You can update your personal details, insurance information, pharmacy preferences, and notification settings at any time.",
  },
  {
    id: "acct_003",
    category: "account",
    tags: ["family", "dependent", "child", "multiple", "add"],
    question: "Can I add family members to my account?",
    answer:
      "Yes! You can add dependents (children, spouses, etc.) to your account under 'Family Members' in your dashboard. Each member has their own health profile and appointment history.",
  },
];

export default knowledgeBase;