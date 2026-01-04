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
    question: "How long does prescription medication delivery typically take?",
    answer: "Most FDA-approved prescription deliveries arrive within 2–5 business days to U.S. locations. Shipping times vary based on pharmacy processing, carrier schedules, and geographic location, with expedited options available for time-sensitive medications when medically appropriate." 
  },
  { 
    id: 2, 
    question: "Do I receive prescription shipping tracking information?",
    answer: "Yes, comprehensive tracking information is sent via email and SMS once your medication ships from our licensed pharmacy partners. Tracking includes carrier details, estimated delivery windows, and real-time updates to ensure you're informed throughout the delivery process." 
  },
  { 
    id: 3, 
    question: "Can I update my shipping address for medication delivery?",
    answer: "Shipping addresses can be updated before medication processing begins. For prescription medications, address changes may require additional verification to comply with pharmacy regulations and ensure proper chain-of-custody for controlled substances when applicable." 
  },
  { 
    id: 4, 
    question: "What happens if my prescription package is lost or delayed?",
    answer: "Our support team works directly with licensed pharmacies and carriers to resolve shipping issues. For lost medications, we coordinate with pharmacy partners for replacements following proper protocols for prescription re-dispensing and regulatory compliance." 
  },
  { 
    id: 5, 
    question: "Is international shipping available for prescription medications?",
    answer: "Currently, we only ship within the United States due to FDA regulations, pharmacy licensing requirements, and controlled substance laws. All medications are dispensed from U.S.-licensed pharmacies following state and federal regulations." 
  },
  { 
    id: 6, 
    question: "Does prescription delivery require a signature upon arrival?",
    answer: "Packages are discreet and typically do not require signatures for standard deliveries. However, certain medications or higher-value shipments may require adult signature confirmation per pharmacy policies or state regulations for controlled substances." 
  },
  { 
    id: 7, 
    question: "How are temperature-sensitive medications shipped and stored?",
    answer: "Temperature-controlled medications are shipped with appropriate packaging, ice packs, or thermal insulation as required by FDA stability guidelines. Our pharmacy partners follow proper cold chain protocols to maintain medication integrity during transit and storage." 
  },
  { 
    id: 8, 
    question: "What shipping carriers are used for prescription medication delivery?",
    answer: "We work with reputable carriers including USPS, UPS, and FedEx that understand pharmacy shipping requirements. Carrier selection is based on medication type, shipping speed, and geographic considerations while maintaining compliance with prescription delivery regulations." 
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
          aria-label={isOpen ? "Collapse shipping information" : "Expand shipping information"}
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

const Shipping = () => {
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
      aria-label="Prescription Medication Shipping FAQ"
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
      {/* PERFECT PILL UNDERLINE ONLY UNDER THE TEXT - Same as MedicalCare */}
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
          Prescription Medication Shipping
        </Typography>

        <Box
          sx={{
            height: "12px",
            backgroundColor: "#00359E",
            borderRadius: "999px",
            width: "100%",     // Adjusted for longer title
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

      {/* SEO-rich summary - Same as MedicalCare */}
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
          Secure Prescription Delivery
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            lineHeight: 1.7,
            color: "grey.700",
          }}
        >
          Our prescription medication shipping follows strict pharmacy regulations and FDA guidelines to ensure safe, discreet delivery. We partner with licensed pharmacies that maintain proper chain-of-custody, use temperature-controlled packaging when needed, and provide comprehensive tracking. All shipments comply with state and federal regulations for prescription medication delivery, with support available for any shipping concerns.
        </Typography>
      </Box>
    </Box>
  );
};

export default Shipping;