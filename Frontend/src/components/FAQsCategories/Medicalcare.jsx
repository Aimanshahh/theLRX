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
    question: "How much do treatments cost?",
    answer: "Pricing varies by category, but many subscriptions start as low as $20–$40 per month." 
  },
  { 
    id: 2, 
    question: "Are there hidden fees?",
    answer: "No. Pricing is transparent and shown before you confirm your purchase." 
  },
  { 
    id: 3, 
    question: "Can I change my treatment?",
    answer: "Yes, you can update or modify treatments anytime after provider approval." 
  },
  { 
    id: 4, 
    question: "Do I need insurance?",
    answer: "No insurance is required. All visits and treatments are cash-pay." 
  },
  { 
    id: 5, 
    question: "Is shipping included?",
    answer: "Most plans include free shipping unless otherwise stated." 
  },
  { 
    id: 6, 
    question: "Are refills automatic?",
    answer: "Subscriptions renew automatically but can be paused or canceled at any time." 
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

const MedicalCare = () => {
const [openItems, setOpenItems] = useState([]);
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
      {/* PERFECT PILL UNDERLINE ONLY UNDER THE TEXT - Same as TheBasics */}
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
          Medical Care
        </Typography>

        <Box
          sx={{
            height: "12px",
            backgroundColor: "#00359E",
            borderRadius: "999px",
            width: "65%",     // perfect pill-size under text
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

export default MedicalCare;