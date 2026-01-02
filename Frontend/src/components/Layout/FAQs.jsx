import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

/* ===== COLOR PALETTE ===== */
const palette = {
  greyDark: "#747578",
  greyLight: "#8B8D8E",
  blueDark: "#00359E",
  blueLight: "#003B9D",
  charcoal: "#36454F ",
};

/* ===== FAQ DATA ===== */
const faqData = [
  {
    id: 1,
    question: "How does the online consultation process work?",
    answer:
      "Our streamlined process begins with a detailed health assessment questionnaire reviewed by licensed medical providers. Following evaluation, you may receive personalized treatment recommendations, prescription fulfillment when clinically appropriate, and continuous support through our secure messaging platform for efficient, confidential care management.",
  },
  {
    id: 2,
    question: "Who are the healthcare providers on the platform?",
    answer:
      "All medical consultations are conducted by board-certified physicians, licensed nurse practitioners, and physician assistants who maintain active state licensure. Our providers specialize in preventive health, hormone optimization, metabolic health, and comprehensive wellness management, ensuring clinical excellence in every interaction.",
  },
  {
    id: 3,
    question: "Are services covered by insurance?",
    answer:
      "Our platform operates primarily on a direct-pay model with transparent, subscription-based pricing, making high-quality healthcare accessible without insurance barriers. Some lab testing services may be eligible for insurance reimbursement, and our team can provide documentation to support potential claims.",
  },
  {
    id: 4,
    question: "How are medication quality and safety ensured?",
    answer:
      "All partner pharmacies and compounding facilities maintain full state licensure, adhere to FDA guidelines, and follow rigorous quality control standards. We partner exclusively with facilities that implement strict sterility testing, potency verification, and comprehensive quality assurance protocols.",
  },
  {
    id: 5,
    question: "What types of health conditions do you address?",
    answer:
      "We focus on preventive health, chronic condition management, hormone balance, metabolic health, sexual wellness, and overall wellness optimization. Our approach combines evidence-based medicine with personalized treatment plans tailored to individual health goals and needs.",
  },
  {
    id: 6,
    question: "How does LiquidRX ensure patient privacy and data security?",
    answer:
      "We implement HIPAA-compliant encryption protocols, secure data storage, and strict access controls to protect patient information. All consultations and communications occur through our encrypted platform, ensuring complete confidentiality and compliance with healthcare privacy regulations.",
  },
  {
    id: 7,
    question: "What is the typical timeframe for treatment plan development?",
    answer:
      "Initial consultations are typically reviewed within 24-48 hours. Comprehensive treatment plans that require lab analysis may take 3-5 business days. Our providers prioritize thorough evaluation to ensure safe, effective recommendations based on complete health assessment.",
  },
  {
    id: 8,
    question: "Can I continue seeing my primary care physician while using your services?",
    answer:
      "Absolutely. Our services are designed to complement, not replace, your existing healthcare relationships. We encourage coordination with your primary care provider and can share relevant health information with your consent to ensure comprehensive, integrated care.",
  },
];

/* ===== ACCORDION ITEM ===== */
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <Box sx={{ width: "100%", fontFamily: "Roboto, sans-serif" }}>
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: { xs: 4, sm: 4.5 },
          px: 1,
          cursor: "pointer",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" },
            color: isOpen ? palette.greyDark : palette.blueDark,
            transition: "color 0.3s ease",
          }}
        >
          {item.question}
        </Typography>

        <IconButton
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `2px solid ${
              isOpen ? palette.greyLight : palette.blueDark
            }`,
            color: isOpen ? palette.greyLight : palette.blueDark,
            bgcolor: isOpen ? palette.greyLight : "transparent",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: isOpen ? palette.greyLight : palette.blueLight,
              color: "#fff",
              borderColor: isOpen ? palette.greyLight : palette.blueLight,
            },
          }}
        >
          {isOpen ? <RemoveIcon fontSize="large" /> : <AddIcon fontSize="large" />}
        </IconButton>
      </Box>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Typography
          sx={{
            py: 2,
            color: palette.greyDark,
            fontSize: { xs: "1.25rem", sm: "1.35rem" },
            lineHeight: 1.9,
          }}
        >
          {item.answer}
        </Typography>
      </Collapse>

      <Divider sx={{ borderColor: palette.greyLight }} />
    </Box>
  );
};

/* ===== MAIN ACCORDION ===== */
const Accordion = () => {
  const [openItems, setOpenItems] = useState([]);

  const handleToggle = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        mx: "auto",
        mt: 2,
        mb: 12,
        px: 2,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {faqData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onClick={() => handleToggle(item.id)}
        />
      ))}
    </Box>
  );
};

export default Accordion;