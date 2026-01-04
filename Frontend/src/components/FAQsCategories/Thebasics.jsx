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

// FAQ Data for The Basics
const faqData = [
  { 
    id: 1, 
    question: "What is LiquidRX telemedicine platform?",
    answer: "LiquidRX is a comprehensive telehealth platform providing FDA-compliant medical consultations and prescription services through licensed healthcare providers, offering safe, convenient, and modern healthcare solutions with full regulatory compliance." 
  },
  { 
    id: 2, 
    question: "How does the telemedicine consultation process work?",
    answer: "You complete a detailed medical questionnaire based on FDA guidelines, licensed providers conduct a thorough review following medical protocols, and treatment decisions are made based on comprehensive assessment with adherence to telehealth regulations and patient safety standards." 
  },
  { 
    id: 3, 
    question: "Are your healthcare providers properly licensed and certified?",
    answer: "All providers are board-certified physicians, nurse practitioners, or physician assistants licensed to practice in your state. They maintain current certifications, follow FDA guidelines for telemedicine, and adhere to state-specific telehealth regulations for safe prescription practices." 
  },
  { 
    id: 4, 
    question: "Do I need health insurance for LiquidRX services?",
    answer: "Health insurance is not required. We operate on a transparent direct-pay model making FDA-approved treatments accessible. You can submit receipts to insurance for potential reimbursement, and HSA/FSA funds are accepted for eligible medical expenses." 
  },
  { 
    id: 5, 
    question: "Are partner pharmacies properly licensed and regulated?",
    answer: "All partner pharmacies are fully licensed, DEA-registered facilities that comply with FDA Good Manufacturing Practices, state pharmacy board regulations, and strict safety protocols for medication dispensing and quality assurance." 
  },
  { 
    id: 6, 
    question: "Can I update my medical information and account details?",
    answer: "Yes, you can update personal information, medical history, and health details anytime through your secure patient portal. Maintaining accurate information ensures proper care and compliance with medical record-keeping requirements." 
  },
  { 
    id: 7, 
    question: "What medical conditions does LiquidRX treat through telemedicine?",
    answer: "We treat various FDA-approved conditions suitable for telemedicine, following evidence-based guidelines and state regulations. Conditions must be appropriate for remote diagnosis and treatment with established telemedicine protocols." 
  },
  { 
    id: 8, 
    question: "How does LiquidRX ensure medication safety and quality?",
    answer: "We work exclusively with licensed pharmacies that follow FDA regulations, conduct quality testing, maintain proper storage conditions, and ensure chain-of-custody for all medications dispensed through our platform." 
  }
];

const AccordionItem = ({ item, isOpen, onClick, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      component="article"
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
          component="h2"
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
          aria-label={isOpen ? "Collapse basic information" : "Expand basic information"}
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
          component="div"
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

const TheBasics = () => {
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
      component="section"
      aria-label="Telemedicine Basics FAQ"
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
      {/* PERFECT PILL UNDERLINE ONLY UNDER THE TEXT */}
      <Box sx={{ width: "fit-content", mb: { xs: 6, sm: 7, md: 8 } }}>
        <Typography
          component="h1"
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
          LiquidRX Telemedicine Basics
        </Typography>

        <Box
          sx={{
            height: "12px",
            backgroundColor: "#00359E",
            borderRadius: "999px",
            width: "100%",     // adjusted for longer title
            ml: "3px",
          }}
        />
      </Box>

      <Box 
        component="div"
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: 1, sm: 2 }, 
          mt: 8 
        }}
      >
        {faqData.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            isOpen={openItems.includes(item.id)}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </Box>

      {/* SEO-rich summary */}
      <Box
        component="div"
        sx={{
          mt: 8,
          p: { xs: 3, sm: 4 },
          bgcolor: "rgba(0, 53, 158, 0.03)",
          borderRadius: 3,
          borderLeft: "4px solid #00359E",
          animation: `${fadeIn} 0.8s ease-out 0.5s both`,
          opacity: 0,
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.4rem", sm: "1.6rem" },
            mb: 2,
            color: "#00359E",
          }}
        >
          Comprehensive Telemedicine Solutions
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            lineHeight: 1.7,
            color: "grey.700",
          }}
        >
          LiquidRX provides FDA-compliant telemedicine services through licensed healthcare providers, ensuring safe, regulated access to prescription medications. Our platform follows strict medical protocols, partners with licensed pharmacies, and maintains full compliance with telehealth regulations across all states we serve. We prioritize patient safety, quality care, and transparent healthcare delivery through modern digital solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default TheBasics;