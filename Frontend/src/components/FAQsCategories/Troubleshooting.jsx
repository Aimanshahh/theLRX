import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  IconButton, 
  Collapse, 
  Divider,
  useTheme,
  useMediaQuery 
} from "@mui/material";
import { keyframes } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Smooth fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const questions = [
  { 
    id: 1, 
    question: "What payment methods are accepted?",
    answer: "All major credit/debit cards and HSA/FSA for eligible treatments." 
  },
  { 
    id: 2, 
    question: "When will I be charged?",
    answer: "You are billed at the time of purchase or at each subscription renewal." 
  },
  { 
    id: 3, 
    question: "Can I pause billing?",
    answer: "Yes, subscriptions can be paused anytime from your account dashboard." 
  },
  { 
    id: 4, 
    question: "How do refunds work?",
    answer: "Refunds vary by product category. Digital medical consultations are non-refundable." 
  },
  { 
    id: 5, 
    question: "Can I get an invoice?",
    answer: "Yes, all invoices are available in your account billing history." 
  },
  { 
    id: 6, 
    question: "Are there late fees?",
    answer: "No late fees — payments that fail simply retry automatically." 
  }
];

const AccordionItem = ({ item, isOpen, onClick, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      sx={{ 
        width: "100%", 
        fontFamily: "Roboto, sans-serif",
        animation: `${fadeIn} 0.6s ease-out ${index * 0.1}s both`,
        opacity: 0,
      }}
    >
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: { xs: 3, sm: 4, md: 4.5 },
          px: { xs: 1, sm: 2 },
          cursor: "pointer",
          transition: "all 0.4s",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "rgba(0, 53, 158, 0.04)",
            transform: "translateY(-2px)",
            "& .icon-button": { bgcolor: "#00359E", color: "white", transform: "scale(1.1)" },
            "& .question-text": { color: "#00359E" }
          },
        }}
      >
        <Typography
          className="question-text"
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.4rem", sm: "1.7rem", md: "1.9rem", lg: "2.1rem" },
            textAlign: "left",
            flex: 1,
            pr: 3,
            transition: "color 0.3s ease",
            lineHeight: 1.3,
          }}
        >
          {item.question}
        </Typography>

        <IconButton
          className="icon-button"
          sx={{
            bgcolor: "grey.100",
            color: "grey.700",
            width: { xs: 44, sm: 52, md: 56 },
            height: { xs: 44, sm: 52, md: 56 },
            transition: "all 0.3s",
            flexShrink: 0,
            "&:hover": { bgcolor: "#00359E", color: "white", transform: "scale(1.1)" },
          }}
        >
          {isOpen ? 
            <RemoveIcon fontSize={isMobile ? "medium" : "large"} /> : 
            <AddIcon fontSize={isMobile ? "medium" : "large"} />
          }
        </IconButton>
      </Box>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Typography
          sx={{
            py: { xs: 2, sm: 3 },
            px: { xs: 1, sm: 2 },
            color: "grey.700",
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem" },
            lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
            textAlign: "left",
            fontWeight: 400,
            animation: isOpen ? `${fadeIn} 0.5s ease-out 0.1s both` : 'none',
          }}
        >
          {item.answer}
        </Typography>
      </Collapse>

      <Divider sx={{ borderColor: "grey.200" }} />
    </Box>
  );
};

const Troubleshooting = () => {
  const [openItems, setOpenItems] = useState([]); // Empty array - no items open by default
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        mt: { xs: 8, sm: 10, md: 12 },
        mb: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* PERFECT PILL UNDERLINE ONLY UNDER THE TEXT - Same as other components */}
      <Box sx={{ width: "fit-content", mb: { xs: 6, sm: 7, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            textAlign: "left",
            fontSize: { xs: "2.5rem", sm: "3.25rem", md: "4rem", lg: "4.5rem" },
            lineHeight: 1.1,
            color: "black",
            animation: `${fadeIn} 0.8s ease-out both`,
            mb: 2,
            display: "inline-block",
          }}
        >
          Troubleshooting
        </Typography>

        <Box
          sx={{
            height: "12px",
            backgroundColor: "#00359E",
            borderRadius: "999px",
            width: "70%",     // Adjusted width to fit "Troubleshooting" text perfectly
            ml: "3px",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, sm: 2 }, mt: 8 }}>
        {questions.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openItems.includes(item.id)}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Troubleshooting;