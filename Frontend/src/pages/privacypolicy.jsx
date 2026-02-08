import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
  Collapse,
  Card,
  CardContent,
  Link,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import SecurityIcon from "@mui/icons-material/Security";
import CookieIcon from "@mui/icons-material/Cookie";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LaunchIcon from "@mui/icons-material/Launch";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(4, 0),
  borderRadius: theme.spacing(3),
  background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
  boxShadow: "0 8px 40px rgba(0, 53, 158, 0.08)",
  border: "1px solid rgba(0, 53, 158, 0.05)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#00359E",
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(5),
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -12,
    left: 0,
    width: 80,
    height: 4,
    background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
    borderRadius: 2,
  },
}));

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  color: "#00359E",
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const DefinitionCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: "1px solid rgba(0, 53, 158, 0.1)",
  borderRadius: theme.spacing(1.5),
  background: "rgba(0, 53, 158, 0.02)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(0, 53, 158, 0.1)",
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: "white",
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
  border: "1px solid rgba(0, 53, 158, 0.1)",
  boxShadow: "0px 12px 48px rgba(0, 53, 158, 0.08)",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
  },
}));

const EmailButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  borderRadius: "12px",
  background: "linear-gradient(135deg, #00359E 0%, #4CC9F0 100%)",
  color: "white",
  fontWeight: 600,
  textTransform: "none",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0, 53, 158, 0.2)",
  },
}));

export default function PrivacyPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedSection, setExpandedSection] = useState("interpretation");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("support@thelrx.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:support@thelrx.com?subject=Privacy Policy Inquiry";
  };

  const handleSectionToggle = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
   <Box
  sx={{
    textAlign: "center",
    mb: { xs: 6, md: 10 },
    position: "relative",
    overflow: "hidden",
    py: { xs: 4, md: 6 },
    px: { xs: 2, sm: 0 },
  }}
>
  {/* Background Gradient */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(248, 250, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)",
      zIndex: 0,
    }}
  />
  
  {/* Floating Gradient Orbs */}
  <Box
    sx={{
      position: "absolute",
      top: "10%",
      right: "5%",
      width: { xs: 120, md: 200 },
      height: { xs: 120, md: 200 },
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(0, 53, 158, 0.08) 0%, rgba(76, 201, 240, 0.08) 100%)",
      filter: "blur(40px)",
      zIndex: 0,
      animation: "float 6s ease-in-out infinite",
      "@keyframes float": {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
    }}
  />
  <Box
    sx={{
      position: "absolute",
      bottom: "15%",
      left: "5%",
      width: { xs: 100, md: 180 },
      height: { xs: 100, md: 180 },
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08) 0%, rgba(0, 53, 158, 0.08) 100%)",
      filter: "blur(40px)",
      zIndex: 0,
      animation: "float 8s ease-in-out infinite 1s",
    }}
  />

  {/* Main Content */}
  <Box sx={{ position: "relative", zIndex: 1 }}>
    {/* Icon Circle */}
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: 80, md: 100 },
        height: { xs: 80, md: 100 },
        borderRadius: "50%",
        background: "linear-gradient(135deg, #00359E 0%, #4CC9F0 100%)",
        mb: { xs: 3, md: 4 },
        boxShadow: "0 16px 32px rgba(0, 53, 158, 0.15)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 20px 40px rgba(0, 53, 158, 0.2)",
        },
      }}
    >
      <PrivacyTipIcon
        sx={{
          fontSize: { xs: 36, md: 48 },
          color: "white",
        }}
      />
    </Box>

    {/* Main Title */}
    <Typography
      variant="h1"
      sx={{
        fontWeight: 800,
        background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        mb: 2,
        lineHeight: 1.1,
        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
        letterSpacing: "-0.5px",
      }}
    >
      Privacy Policy
    </Typography>

    {/* Subtitle */}
    <Typography
      variant="h4"
      sx={{
        color: "#00359E",
        fontWeight: 600,
        mb: 3,
        fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
        opacity: 0.9,
      }}
    >
      Protecting Your Data, Respecting Your Privacy
    </Typography>

    {/* Updated Badge */}
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1.5,
        px: 3,
        py: 1,
        bgcolor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "50px",
        border: "1px solid rgba(0, 53, 158, 0.15)",
        mb: 4,
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 24px rgba(0, 53, 158, 0.08)",
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#4CC9F0",
          animation: "pulse 2s ease-in-out infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.5 },
          },
        }}
      />
      <Typography
        sx={{
          color: "#00359E",
          fontWeight: 600,
          fontSize: "0.875rem",
        }}
      >
        Last Updated: February 2026
      </Typography>
    </Box>

    {/* Description */}
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#4A5568",
          fontWeight: 400,
          lineHeight: 1.7,
          fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
          mb: 3,
          px: { xs: 2, sm: 0 },
        }}
      >
        Your privacy matters. This document outlines how we collect, use, and protect your personal information when you interact with our services.
      </Typography>
    </Box>

    {/* Decorative Line */}
    <Box
      sx={{
        width: 120,
        height: 4,
        background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
        mx: "auto",
        mt: 5,
        borderRadius: 2,
      }}
    />
  </Box>
</Box>
        <StyledPaper elevation={0}>
          {/* Quick Navigation */}
          <Box
            sx={{
              mb: 6,
              p: 3,
              bgcolor: "rgba(0, 53, 158, 0.02)",
              borderRadius: 3,
              border: "1px solid rgba(0, 53, 158, 0.05)",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#00359E" }}>
              Quick Navigation
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {[
                { id: "interpretation", label: "Definitions", icon: <LanguageIcon /> },
                { id: "data-collection", label: "Data Collection", icon: <DataUsageIcon /> },
                { id: "cookies", label: "Cookies", icon: <CookieIcon /> },
                { id: "data-use", label: "Data Use", icon: <DataUsageIcon /> },
                { id: "security", label: "Security", icon: <SecurityIcon /> },
                { id: "contact", label: "Contact", icon: <ContactMailIcon /> },
              ].map((item) => (
                <Button
                  key={item.id}
                  startIcon={item.icon}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderRadius: 2,
                    borderColor: "rgba(0, 53, 158, 0.2)",
                    color: "#00359E",
                    "&:hover": {
                      borderColor: "#00359E",
                      bgcolor: "rgba(0, 53, 158, 0.05)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Introduction */}
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                mb: 3,
                fontSize: "1.1rem",
                color: "#444",
              }}
            >
              Welcome to LiquidRX's Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </Typography>
          </Box>

          {/* Interpretation and Definitions */}
          <SectionTitle variant="h4" id="interpretation">
            <LanguageIcon />
            Interpretation and Definitions
          </SectionTitle>

          <Accordion
            expanded={expandedSection === "interpretation"}
            onChange={() => handleSectionToggle("interpretation")}
            sx={{
              mb: 3,
              borderRadius: "12px !important",
              overflow: "hidden",
              border: "1px solid rgba(0, 53, 158, 0.1)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#00359E" }}>
                Key Definitions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ pl: 2 }}>
                {[
                  { term: "Account", definition: "A unique account created for You to access our Service or parts of our Service." },
                  { term: "Affiliate", definition: "An entity that controls, is controlled by or is under common control with a party." },
                  { term: "Company", definition: "LiquidRX(referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement)." },
                  { term: "Cookies", definition: "Small files placed on Your device containing details of Your browsing history." },
                  { term: "Country", definition: "United States" },
                  { term: "Device", definition: "Any device that can access the Service such as a computer, cellphone or digital tablet." },
                  { term: "Personal Data", definition: "Any information that relates to an identified or identifiable individual." },
                  { term: "Service", definition: "The Website." },
                  { term: "Service Provider", definition: "Third-party companies or individuals employed by the Company to facilitate the Service." },
                  { term: "Usage Data", definition: "Data collected automatically, generated by the use of the Service." },
                  { term: "Website", definition: "https://thelrx.com/" },
                  { term: "You", definition: "The individual accessing or using the Service." },
                ].map((item, index) => (
                  <DefinitionCard key={index}>
                    <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#00359E", mb: 1 }}>
                        {item.term}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
                        {item.definition}
                      </Typography>
                    </CardContent>
                  </DefinitionCard>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Collecting and Using Your Personal Data */}
          <SectionTitle variant="h4" id="data-collection">
            <DataUsageIcon />
            Collecting and Using Your Personal Data
          </SectionTitle>

          <SubSectionTitle variant="h5">
            Types of Data We Collect
          </SubSectionTitle>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#00359E", display: "flex", alignItems: "center", gap: 1 }}>
                <SecurityIcon fontSize="small" />
                Personal Data
              </Typography>
              <Box sx={{ pl: { xs: 2, sm: 3 } }}>
                <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444" }}>
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information:
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 2,
                    mb: 3,
                  }}
                >
                  {[
                    "Email address",
                    "First and last name",
                    "Phone number",
                    "Address information",
                    "Usage Data",
                    "Payment information",
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 2,
                        bgcolor: "rgba(0, 53, 158, 0.03)",
                        borderRadius: 2,
                        border: "1px solid rgba(0, 53, 158, 0.05)",
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#00359E",
                        }}
                      />
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: "#00359E", display: "flex", alignItems: "center", gap: 1 }}>
                <DataUsageIcon fontSize="small" />
                Usage Data
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444", pl: { xs: 2, sm: 3 } }}>
                We automatically collect certain information when you visit our Service, including:
              </Typography>
              <Box sx={{ pl: { xs: 2, sm: 3 } }}>
                <List dense>
                  {[
                    "Internet Protocol (IP) address",
                    "Browser type and version",
                    "Pages visited and time spent",
                    "Device identifiers",
                    "Operating system information",
                    "Diagnostic data",
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ pl: 0, mb: 0.5 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: "#4CC9F0",
                          }}
                        />
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

          <SubSectionTitle variant="h5" id="cookies">
            <CookieIcon />
            Tracking Technologies and Cookies
          </SubSectionTitle>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
              We use Cookies and similar tracking technologies to enhance your experience and analyze Service usage.
            </Typography>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4 }}>
              {[
                {
                  title: "Essential Cookies",
                  type: "Session Cookies",
                  purpose: "Required for website functionality and security",
                },
                {
                  title: "Preference Cookies",
                  type: "Persistent Cookies",
                  purpose: "Remember your settings and preferences",
                },
                {
                  title: "Analytics Cookies",
                  type: "Persistent Cookies",
                  purpose: "Help us understand how visitors use our site",
                },
                {
                  title: "Marketing Cookies",
                  type: "Persistent Cookies",
                  purpose: "Track visitors across websites to display relevant ads",
                },
              ].map((cookie, index) => (
                <Card key={index} sx={{ borderRadius: 3, border: "1px solid rgba(0, 53, 158, 0.1)" }}>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#00359E", mb: 1 }}>
                      {cookie.title}
                    </Typography>
                    <Chip
                      label={cookie.type}
                      size="small"
                      sx={{
                        bgcolor: "rgba(0, 53, 158, 0.1)",
                        color: "#00359E",
                        fontWeight: 500,
                        mb: 2,
                      }}
                    />
                    <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
                      {cookie.purpose}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Use of Your Personal Data */}
          <SectionTitle variant="h4" id="data-use">
            <DataUsageIcon />
            Use of Your Personal Data
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            We use your information for various purposes:
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3, mb: 4 }}>
            {[
              { title: "Service Delivery", desc: "Provide and maintain our Service" },
              { title: "Account Management", desc: "Manage your registration and access" },
              { title: "Communication", desc: "Contact you with updates and information" },
              { title: "Security", desc: "Protect against fraud and unauthorized access" },
              { title: "Improvement", desc: "Analyze usage to improve our Service" },
              { title: "Legal Compliance", desc: "Meet our legal obligations" },
            ].map((use, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  bgcolor: "rgba(0, 53, 158, 0.02)",
                  borderRadius: 3,
                  border: "1px solid rgba(0, 53, 158, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    bgcolor: "rgba(0, 53, 158, 0.05)",
                  },
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#00359E", mb: 1 }}>
                  {use.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
                  {use.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Security Section */}
          <SectionTitle variant="h4" id="security">
            <SecurityIcon />
            Security of Your Data
          </SectionTitle>

          <Card
            sx={{
              bgcolor: "rgba(0, 53, 158, 0.03)",
              border: "1px solid rgba(0, 53, 158, 0.1)",
              borderRadius: 3,
              p: 4,
              mb: 4,
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444", fontSize: "1.1rem" }}>
                We implement appropriate technical and organizational security measures designed to protect your personal data. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Chip label="Encryption" color="primary" variant="outlined" />
                <Chip label="Access Controls" color="primary" variant="outlined" />
                <Chip label="Regular Audits" color="primary" variant="outlined" />
                <Chip label="Secure Servers" color="primary" variant="outlined" />
              </Box>
            </CardContent>
          </Card>

          {/* Contact Us Section */}
          <ContactCard id="contact">
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #00359E 0%, #4CC9F0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <ContactMailIcon sx={{ fontSize: 28, color: "white" }} />
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: "#1A1A2E", mb: 1 }}>
                  Contact Our Privacy Team
                </Typography>
                <Typography variant="body1" sx={{ color: "#666" }}>
                  Questions about our privacy practices? We're here to help.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
                mb: 4,
              }}
            >
              {/* Primary Email Contact */}
              <Box
                sx={{
                  p: 3,
                  background: "rgba(0, 53, 158, 0.02)",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 53, 158, 0.08)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <EmailIcon sx={{ color: "#00359E", mr: 1.5 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#1A1A2E" }}>
                    Email Support
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2,
                      p: 2,
                      background: "white",
                      borderRadius: "12px",
                      border: "1px solid rgba(0, 53, 158, 0.1)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#00359E",
                        fontWeight: 500,
                        fontSize: "1.1rem",
                      }}
                    >
                      support@thelrx.com
                    </Typography>
                    <IconButton
                      onClick={handleCopyEmail}
                      size="small"
                      sx={{
                        background: copiedEmail ? "#10B981" : "rgba(0, 53, 158, 0.08)",
                        color: copiedEmail ? "white" : "#00359E",
                        "&:hover": {
                          background: copiedEmail ? "#10B981" : "rgba(0, 53, 158, 0.12)",
                        },
                      }}
                    >
                      {copiedEmail ? <CheckIcon /> : <ContentCopyIcon />}
                    </IconButton>
                  </Box>
                  
                  <Typography variant="caption" sx={{ color: "#888", display: "block", mb: 3 }}>
                    Click copy or use the button below to send an email directly
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <EmailButton
                    onClick={handleEmailClick}
                    endIcon={<LaunchIcon />}
                    fullWidth={isMobile}
                  >
                    Send Email
                  </EmailButton>
                </Box>
              </Box>

              {/* Additional Contact Info */}
              <Box
                sx={{
                  p: 3,
                  background: "rgba(76, 201, 240, 0.02)",
                  borderRadius: "16px",
                  border: "1px solid rgba(76, 201, 240, 0.08)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <LanguageIcon sx={{ color: "#4CC9F0", mr: 1.5 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#1A1A2E" }}>
                    Additional Information
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                    <strong>Response Time:</strong> 24-48 hours during business days
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                    <strong>Office Hours:</strong> Mon-Fri, 9AM-6PM GMT
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    <strong>Location:</strong> United States
                  </Typography>
                </Box>

                <Button
                  variant="text"
                  href="https://thelrx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "#4CC9F0",
                    fontWeight: 500,
                    textTransform: "none",
                    "&:hover": {
                      background: "rgba(76, 201, 240, 0.08)",
                    },
                  }}
                >
                  Visit Our Website
                </Button>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ color: "#888", textAlign: "center", fontStyle: "italic" }}>
              We typically respond to inquiries within 24-48 hours during business days.
            </Typography>
          </ContactCard>

          {/* Footer Note */}
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: "1px solid rgba(0, 53, 158, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
              This Privacy Policy is effective as of February 7, 2026
            </Typography>
            <Typography variant="caption" sx={{ color: "#888" }}>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}