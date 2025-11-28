import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Dummy FAQ data
const faqData = [
  {
    id: 1,
    question: "What is Hims/Hers?",
    answer:
      "Hims & Hers is a telehealth platform focused on health and wellness. It connects you with licensed medical providers for consultation, diagnosis, and prescription fulfillment.",
  },
  {
    id: 2,
    question: "How does online consultation work?",
    answer:
      "You fill out a questionnaire, a licensed provider reviews it asynchronously, and may send prescriptions or message you for follow-up. Efficient, private care.",
  },
  {
    id: 3,
    question: "Who are the providers?",
    answer:
      "All consultations are done by licensed physicians, nurse practitioners, or physician assistants licensed in your state.",
  },
  {
    id: 4,
    question: "Do Hims/Hers services require insurance?",
    answer:
      "No, most services are direct-pay or subscription-based, affordable without insurance.",
  },
  {
    id: 5,
    question: "Are partner pharmacies FDA regulated?",
    answer:
      "Yes, all partner pharmacies are licensed, regulated, and adhere to strict safety and quality standards.",
  },
];

// Accordion Item
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <Box sx={{ width: "100%", fontFamily: "Roboto, sans-serif" }}>
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: { xs: 4, sm: 4.5 }, // more vertical padding
          px: 1,
          cursor: "pointer",
          transition: "background 0.3s",
          "&:hover": {
            "& .icon-button": {
              bgcolor: "black",
              color: "white",
            },
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "1.75rem" }, // larger question text
          }}
        >
          {item.question}
        </Typography>

        <IconButton
          className="icon-button"
          sx={{
            bgcolor: "gray.300",
            color: "gray.800",
            width: 48,
            height: 48,
            "&:hover": {
              bgcolor: "black",
              color: "white",
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
            color: "gray.700",
            fontSize: { xs: "1.25rem", sm: "1.35rem" }, // larger answer text
            lineHeight: 1.9,
          }}
        >
          {item.answer}
        </Typography>
      </Collapse>

      <Divider sx={{ borderColor: "gray.300" }} />
    </Box>
  );
};

// Main Accordion Component
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
        maxWidth: "1000px", // bigger accordion width
        mx: "auto",
        mt: 12,
        mb: 12,
        px: 2,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 8,
          textAlign: "center",
          fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" }, // bigger FAQ title
        }}
      >
        Frequently Asked Questions
      </Typography>

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
