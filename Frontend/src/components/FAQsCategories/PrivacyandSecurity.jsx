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
    question: "How is my medical information protected under HIPAA regulations?",
    answer: "We maintain full HIPAA compliance with end-to-end encryption, secure data storage, and strict access controls. All electronic protected health information (ePHI) is encrypted at rest and in transit using AES-256 encryption, with regular security audits and vulnerability assessments." 
  },
  { 
    id: 2, 
    question: "What security measures protect my telemedicine data and prescriptions?",
    answer: "We implement multi-layered security including TLS 1.3 encryption, secure cloud infrastructure with SOC 2 Type II certification, regular penetration testing, and strict authentication protocols. Prescription data is additionally protected under DEA and state pharmacy board regulations." 
  },
  { 
    id: 3, 
    question: "Is patient data ever sold to third parties or advertisers?",
    answer: "Absolutely not. We adhere to strict healthcare privacy laws and never sell, rent, or share identifiable patient health information. Data is only used for treatment, payment, and healthcare operations as permitted by HIPAA, with explicit patient consent required for any other uses." 
  },
  { 
    id: 4, 
    question: "How secure are telemedicine payment transactions?",
    answer: "Payment processing utilizes PCI DSS Level 1 compliant systems with tokenization and encryption. We partner with healthcare-specific payment processors that understand HIPAA requirements for handling protected health information during billing processes." 
  },
  { 
    id: 5, 
    question: "Can patients permanently delete their telemedicine records?",
    answer: "Patients can request account deletion, but healthcare regulations require retention of medical records for 6-10 years depending on state laws. We comply with medical record retention requirements while allowing control over marketing communications." 
  },
  { 
    id: 6, 
    question: "Who has access to my telemedicine consultation records?",
    answer: "Access is strictly limited to your treating healthcare providers, clinical support staff with role-based permissions, and necessary administrative personnel. All access is logged and audited regularly to prevent unauthorized viewing." 
  },
  { 
    id: 7, 
    question: "What encryption standards protect telemedicine communications?",
    answer: "All telemedicine communications use military-grade encryption with Perfect Forward Secrecy. Video consultations employ WebRTC with SRTP encryption, while messaging uses TLS 1.3 with AES-256-GCM encryption, exceeding healthcare industry security standards." 
  },
  { 
    id: 8, 
    question: "How do you ensure compliance with healthcare privacy regulations?",
    answer: "We maintain a comprehensive compliance program covering HIPAA, HITECH, state telehealth laws, and FDA digital health guidelines. Our dedicated privacy officer conducts regular training, risk assessments, and compliance audits with third-party verification." 
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
          aria-label={isOpen ? "Collapse security information" : "Expand security information"}
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

const PrivacyandSecurity = () => {
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
      aria-label="Telemedicine Privacy and Security FAQ"
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
          HIPAA-Compliant Telemedicine Security
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
          Healthcare Security & Compliance
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem" },
            lineHeight: 1.7,
            color: "grey.700",
          }}
        >
          Protecting patient privacy and securing medical data is our highest priority. Our platform exceeds healthcare industry security standards with military-grade encryption, strict access controls, and comprehensive HIPAA, HITECH, and FDA compliance. We maintain SOC 2 Type II certification, PCI DSS Level 1 compliance, and regular third-party security audits to ensure your health information remains confidential and protected.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyandSecurity;