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
import GavelIcon from "@mui/icons-material/Gavel";
import LanguageIcon from "@mui/icons-material/Language";
import PolicyIcon from "@mui/icons-material/Policy";
import SecurityIcon from "@mui/icons-material/Security";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkIcon from "@mui/icons-material/Link";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LaunchIcon from "@mui/icons-material/Launch";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WarningIcon from "@mui/icons-material/Warning";
import TagIcon from "@mui/icons-material/Tag"; // Replacing TrademarkIcon
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

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

const WarningCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  border: "1px solid rgba(219, 68, 55, 0.2)",
  borderRadius: theme.spacing(1.5),
  background: "rgba(219, 68, 55, 0.03)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(219, 68, 55, 0.1)",
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

export default function TermsAndConditions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedSection, setExpandedSection] = useState("welcome");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("khackbart@silver-squirrel-364425.hostingersite.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:khackbart@silver-squirrel-364425.hostingersite.com?subject=Terms and Conditions Inquiry";
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
              <GavelIcon
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
              Terms and Conditions
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
              Legal Agreement for Using Our Services
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
                By accessing or using our website, you agree to comply with and be bound by these terms and conditions. Please read them carefully.
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
                { id: "welcome", label: "Welcome", icon: <GavelIcon /> },
                { id: "copyrights", label: "Copyrights", icon: <CopyrightIcon /> },
                { id: "trademark", label: "Trademark", icon: <TagIcon /> },
                { id: "conduct", label: "Conduct", icon: <SecurityIcon /> },
                { id: "liability", label: "Liability", icon: <WarningIcon /> },
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

          {/* Important Notice */}
          <WarningCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <WarningIcon sx={{ color: "#DB4437", mr: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: "#DB4437" }}>
                  Important Legal Notice
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#444" }}>
                BY ACCESSING OR USING ANY PART OF THIS WEBSITE, YOU AGREE THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY THIS AGREEMENT FOR ALL PAST, PRESENT AND FUTURE USES BY YOU OF THIS SERVICE. IF YOU DO NOT AGREE TO BE BOUND BY THIS AGREEMENT, DO NOT ACCESS OR USE ANY PART OF THIS WEB SITE.
              </Typography>
            </CardContent>
          </WarningCard>

          {/* Welcome Section */}
          <SectionTitle variant="h4" id="welcome">
            <GavelIcon />
            Welcome & Agreement
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Liquid RX, LLC. relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
          </Typography>

          <Box sx={{ pl: 3, mb: 4 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444" }}>
              <strong>Company:</strong> The term Liquid RX, LLC. or 'us' or 'we' refers to the owner of the website whose registered office is 100 S Bois D Arc.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444" }}>
              <strong>You:</strong> The term 'you' refers to the user or viewer of our website.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444" }}>
              This website makes use of a user-driven product customization and fulfillment web services, which are hosted and operated by Liquid RX, LLC ("Liquid RX, LLC.").
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Copyrights Section */}
          <SectionTitle variant="h4" id="copyrights">
            <CopyrightIcon />
            Copyrights
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Liquid RX, LLC. is, unless otherwise stated, the owner of all copyright and data rights in the service and its contents. Individuals who have posted works to this service are either the copyright owners of the component parts of that work, or are posting the work under license from a copyright owner or his or her agent, or otherwise as permitted by law.
          </Typography>

          <Box sx={{ pl: 3, mb: 4 }}>
            <List dense>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body2">
                  You may not reproduce, distribute, publicly display or perform, or prepare derivative works based on any of the content without the express, written consent of Liquid RX, LLC., or the appropriate owner of copyright in such works.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body2">
                  Liquid RX, LLC. does not claim ownership rights in your works or other materials posted by you to this service ('Your Content').
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0 }}>
                <Typography variant="body2">
                  Ultimately, you are responsible for the content of your images and materials. It is very important that you take the time to research the images and materials that you submit.
                </Typography>
              </ListItem>
            </List>
          </Box>

          {/* Reporting Copyright Violations */}
          <SubSectionTitle variant="h5">
            <SecurityIcon />
            Reporting Copyright Violations
          </SubSectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Liquid RX, LLC. respects the intellectual property rights of others and expects you to do the same. At Liquid RX, LLC. discretion, and in appropriate circumstances, Liquid RX, LLC. may remove Your Content submitted to this service, terminate your account and/or prevent access to this service, if Liquid RX, LLC. believes you may have infringed on the intellectual property rights of others.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Trademark Section */}
          <SectionTitle variant="h4" id="trademark">
            <TagIcon /> {/* Changed from TrademarkIcon */}
            Trademark
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            All brand, product and service names used in this service which identify Liquid RX, LLC., or third parties, and their products and services are proprietary marks of Liquid RX, LLC. and/or the relevant third parties. Nothing in this service shall be deemed to confer on any person, any license or right on the part of Liquid RX, LLC., or any third party with respect to any such image, logo or name.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Privacy Section */}
          <SectionTitle variant="h4">
            <PolicyIcon />
            Privacy
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Liquid RX, LLC. has a firm commitment to safeguarding your privacy. Please review Liquid RX, LLC. Privacy Policy. The terms of Liquid RX, LLC. Privacy Policy are incorporated into, and form a part of, this Agreement.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Conduct Section */}
          <SectionTitle variant="h4" id="conduct">
            <SecurityIcon />
            Conduct
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            You agree that you shall not interfere with or disrupt (or attempt to interfere with or disrupt) this service or servers or networks connected to this website, or to disobey any requirements, procedures, policies or regulations of networks connected to this service; or, provide any information to Liquid RX, LLC. that is false or misleading, that attempts to hide your identity, or that you do not have the right to disclose.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444", fontStyle: "italic" }}>
              Liquid RX, LLC. does not endorse any content placed on the website by third parties, or any opinions or advice, contained in such content.
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Termination Section */}
          <SectionTitle variant="h4">
            <WarningIcon />
            Termination
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            You agree that Liquid RX, LLC., in its sole discretion, may remove and discard any content, for any reason, including and without limitation, the lack of use; or, if Liquid RX, LLC. believes that you have violated, or acted inconsistently, with the Agreement.
          </Typography>

          <Box sx={{ pl: 3, mb: 4 }}>
            <List dense>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body2">
                  Liquid RX, LLC. may also, in its sole discretion and at any time, discontinue providing the service, or any part thereof, with or without notice.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body2">
                  Any termination of your access to the service may be effected without prior notice.
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0 }}>
                <Typography variant="body2">
                  Paid accounts that are terminated for any violation of this agreement will not be refunded.
                </Typography>
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Liability Section */}
          <SectionTitle variant="h4" id="liability">
            <WarningIcon />
            Disclaimer of Warranty and Limitation of Liability
          </SectionTitle>

          <WarningCard>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#444", fontWeight: 600, mb: 2 }}>
                Liquid RX, LLC. MAKES NO REPRESENTATIONS, OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SERVICE, OR THE CONTENT OR PRODUCTS PROVIDED THROUGH THE SERVICE. YOU EXPRESSLY AGREE THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.6, color: "#555" }}>
                Liquid RX, LLC. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT TO THE FULLEST EXTENT PERMITTED BY LAW.
              </Typography>
            </CardContent>
          </WarningCard>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444", mt: 3 }}>
            TO THE FULLEST EXTENT ALLOWED BY LAW, Liquid RX, LLC. SHALL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, EVEN IF Liquid RX, LLC. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </Typography>

          <Box sx={{ pl: 3, mb: 4 }}>
            <Typography variant="body2" sx={{ color: "#555", fontStyle: "italic" }}>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF, OR LIMITATIONS ON, CERTAIN WARRANTIES OR DAMAGES. THEREFORE, SOME OF THE ABOVE EXCLUSIONS, OR LIMITATIONS, MAY NOT APPLY TO YOU.
            </Typography>
          </Box>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* General Legal Terms */}
          <SectionTitle variant="h4">
            <GavelIcon />
            General Legal Terms
          </SectionTitle>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444" }}>
              The Agreement constitutes the whole legal agreement between you and Liquid RX, LLC. and governs your use of this service, and completely replaces any prior agreements between you and Liquid RX, LLC. in relation to this service.
            </Typography>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444" }}>
              <strong>Governing Law:</strong> The Agreement and your relationship with Liquid RX, LLC. under the Agreement shall be governed by the laws of the State of Utah without regard to its conflict of laws provisions.
            </Typography>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444" }}>
              <strong>Jurisdiction:</strong> You and Liquid RX, LLC. agree to submit to the exclusive jurisdiction of the courts located within the county of Grandview, TX, to resolve any legal matter arising from the Agreement.
            </Typography>
          </Box>


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
              Liquid RX, LLC. reserves the right to make changes to this Agreement at any time. Continued use of any part of this website constitutes your acceptance of such changes.
            </Typography>
            <Typography variant="caption" sx={{ color: "#888" }}>
              You should review this Agreement from time to time to become familiar with any changes.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}