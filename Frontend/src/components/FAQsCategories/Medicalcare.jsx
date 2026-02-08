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

// Import your logo
import logo from "../../assets/LRXLOGOS/LOGO-2.png"; // Update this path to match your logo location

// Smooth fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const questions = [
  { 
    id: 2, 
    question: "Are there any hidden fees for online medical consultations?",
    answer: "No hidden fees. All costs—including medical consultation, provider review, and FDA-approved medications—are displayed upfront before purchase. We comply with healthcare transparency regulations and provide clear billing statements for all telemedicine services." 
  },
  { 
    id: 3, 
    question: "Can I change my prescription treatment plan after starting?",
    answer: "Yes, you can modify your treatment plan after consultation with your healthcare provider. Any changes to FDA-regulated medications require provider approval to ensure safety, proper dosing, and compliance with medical guidelines. Simply message your provider through our secure platform." 
  },
  { 
    id: 4, 
    question: "Do I need health insurance for telemedicine prescriptions?",
    answer: "Health insurance is not required for our telemedicine services. We operate on a transparent cash-pay model, making FDA-approved treatments accessible." 
  },
  { 
    id: 5, 
    question: "Is prescription medication shipping included in treatment costs?",
    answer: "Yes, subscription plans include free discreet shipping of FDA-approved medications to your door. Shipping methods comply with pharmacy regulations and ensure medication integrity. Expedited shipping options are available for additional fees when medically appropriate." 
  },
  { 
    id: 6, 
    question: "Are prescription refills automatic in telemedicine subscriptions?",
    answer: "Yes, subscriptions include automatic refills of FDA-approved medications after provider review. You can pause, modify, or cancel anytime. Providers conduct periodic check-ins to ensure continued safety and appropriateness of treatment per FDA guidelines." 
  },
  { 
    id: 7, 
    question: "How are medication costs determined for online prescriptions?",
    answer: "Pricing reflects FDA-approved medication costs, pharmacy dispensing, provider oversight, and platform services. We work with licensed pharmacies to ensure competitive pricing while maintaining quality standards and regulatory compliance for all prescription medications." 
  },
  { 
    id: 8, 
    question: "What payment methods are accepted for telemedicine treatments?",
    answer: "We accept major credit cards, and digital payment methods. All transactions are secure and HIPAA-compliant." 
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
          aria-label={isOpen ? "Collapse pricing information" : "Expand pricing information"}
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
      component="section"
      aria-label="Telemedicine Pricing and Payment FAQ"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        mt: { xs: 4, sm: 6, md: 8 }, // Reduced top margin for logo
        mb: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        fontFamily: "Roboto, sans-serif",
        position: "relative", // Added for absolute positioning of logo
      }}
    >
      {/* Logo at Top Left */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -12, sm: -16, md: -20 }, // Positioned above content
          left: { xs: 0, sm: 0, md: 0 },
          zIndex: 10,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="LiquidRX Logo"
          sx={{
            height: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
            width: "auto",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => window.location.href = "/"} // Navigate to home page on click
        />
      </Box>

      {/* PERFECT PILL UNDERLINE ONLY UNDER THE TEXT - Same as TheBasics */}
      <Box sx={{ 
        width: "fit-content", 
        mb: { xs: 6, sm: 7, md: 8 },
        pt: { xs: 4, sm: 5, md: 6 } // Added padding to accommodate logo
      }}>
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
          Telemedicine Costs & Payment
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

      <Box 
        component="div"
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: 1, sm: 2 }, 
          mt: 8 
        }}
      >
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
          Transparent Telemedicine Pricing
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            lineHeight: 1.7,
            color: "grey.700",
          }}
        >
          Our telemedicine platform offers clear, upfront pricing for FDA-approved treatments without hidden fees. We provide affordable access to prescription medications through licensed healthcare providers, with transparent costs covering medical consultations, provider oversight, and pharmacy dispensing. All treatments comply with FDA regulations and healthcare transparency standards.
        </Typography>
      </Box>
    </Box>
  );
};

export default MedicalCare;