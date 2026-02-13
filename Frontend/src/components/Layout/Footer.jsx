import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTiktok, 
  FaYoutube,
  FaTwitter,
  FaInstagram 
} from "react-icons/fa";

import appPreview from "../../assets/medical experts/img1removed.png";
import logo from "../../assets/LRXLOGOS/LOGO-2.png";
import legitScriptLogo from "../../assets/images/legitscript.png";

/* ---------------- ROUTE MAPS ---------------- */

const LRX_ROUTES = {
  "About Us": "/about-us",
  "How it Works": "/how-it-works",
  "Medical Experts": "/medical-experts",
  "Frequently Asked Questions": "/faqs",
  "About Our Labs": "/DetailedLab",
};

const POPULAR_ROUTES = {
  "Retatrutide Injectable": "/weight-loss/retatrutide-vial",
  "Tirzepetide Injectable": "/weight-loss/tirzepatide-injectable",
  "Vitamin B-12": "/peptides/vitamin-b12",
  "Mach-1": "/sexual-health/mach1-6",
  "Drive Plus": "/sexual-health/drive-plus-6",
  "NAD+Injectable": "/peptides/NADinjectable",
};

// Add routes for legal pages
const LEGAL_ROUTES = {
  "Terms & Conditions": "/terms-and-conditions",
  "Privacy Policy": "/privacy-policy",
  "Refund Policy": "/refund-policy",
  "TeleHealth Consent": "/telehealth-consent",
};

/* ---------------- SOCIAL LINKS ---------------- */

const SOCIAL_LINKS = [
  {
    Icon: FaFacebookF,
    url: "https://www.facebook.com/people/Liquid-RX-LLC/61584448391822/",
    label: "Facebook"
  },
  {
    Icon: FaTwitter,
    url: "https://x.com/LiquidRXLLC",
    label: "Twitter"
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/liquidrxllc/",
    label: "Instagram"
  },
  {
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/liquid-rx-llc-4171503a0/",
    label: "LinkedIn"
  },
  {
    Icon: FaYoutube,
    url: "https://www.youtube.com/@LiquidRXLLC",
    label: "YouTube"
  },
  {
    Icon: FaTiktok,
    url: "https://www.tiktok.com/@liquidrxllc",
    label: "TikTok"
  }
];

/* ---------------- FOOTER ---------------- */

export default function Footer() {
  const darkBlue = "#00359E";
  const lightBlue = "#003B9D";
  const offWhite = "#f5f5f5";

  return (
    <Box
      component="footer"
      sx={{
        background: offWhite,
        pt: { xs: 6, md: 9 },
        pb: 4,
        px: { xs: 2, md: 4 },
      }}
    >
      {/* TOP SECTION */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: 6,
          maxWidth: "1300px",
          mx: "auto",
        }}
      >
        {/* LEFT CARD */}
        <Box
          sx={{
            background: lightBlue,
            width: { xs: "100%", lg: "400px" },
            borderRadius: "32px",
            p: 3,
            textAlign: "center",
            flexShrink: 0,
            boxShadow: "0 6px 24px rgba(0, 59, 157, 0.18)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: { xs: "auto", lg: 0 },
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              mb: 2,
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              p: 2,
              width: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={logo}
              alt="LRX Logo"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </Box>

          <Typography sx={{ fontSize: "1.05rem", mb: 2, color: offWhite, fontWeight: 600 }}>
            Get Your Personal Health Companion
          </Typography>

          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.9rem", md: "2.1rem" },
              mb: 2.5,
              color: "#fff",
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            COMPLETE CARE
            <br />
            REINVENTED
          </Typography>

          <Typography
            sx={{
              fontSize: "0.95rem",
              mb: 2.5,
              color: offWhite,
              fontStyle: "italic",
              px: 1,
            }}
          >
            Your health journey, simplified and personalized
          </Typography>

          <img
            src={appPreview}
            alt="LRX App Preview"
            style={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "16px",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          />

          {/* SOCIAL ICONS - Now with 6 icons */}
          <Box sx={{ 
            mt: 2, 
            display: "flex", 
            gap: 1.5,
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {SOCIAL_LINKS.map((social, i) => (
              <IconButton
                key={i}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#fff",
                  background: "rgba(255,255,255,0.15)",
                  "&:hover": {
                    background: "rgba(255,255,255,0.25)",
                    transform: "scale(1.1)",
                  },
                }}
                aria-label={social.label}
              >
                <social.Icon size={18} />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* RIGHT LINKS */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            maxWidth: "900px",
          }}
        >
          <FooterColumn
            title="Learn"
            items={[
              "Labs",
              "Weight Loss",
              "Sexual Health",
              "Hair Regrowth",
              "Drug Comparisons",
              "Drugs & Medications",
            ]}
          />

          <FooterColumn
            title="Popular"
            items={[
              "Retatrutide Injectable",
              "Tirzepetide Injectable",
              "Vitamin B-12",
              "Mach-1",
              "Drive Plus",
              "NAD+Injectable",
            ]}
            routes={POPULAR_ROUTES}
          />

          <FooterColumn
            title="LiquidRX"
            items={[
              "About Us",
              "How it Works",
              "Medical Experts",
              "Frequently Asked Questions",
              "About Our Labs"
            ]}
            routes={LRX_ROUTES}
          />

          <FooterColumn title="Careers" items={["Professionals", "Providers"]} />
          <FooterColumn title="Connect" items={["Customer Help Center", "Press Center"]} />
        </Box>
      </Box>

      {/* BOTTOM SECTION - ADDRESS & LEGAL */}
      <Box 
        sx={{ 
          maxWidth: "1300px", 
          mx: "auto", 
          mt: 8,
          pt: 4,
          borderTop: "1px solid rgba(0,0,0,0.1)"
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {/* Address */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography 
                sx={{ 
                  fontWeight: 600, 
                  color: darkBlue,
                  fontSize: "1rem",
                  mb: 0.5
                }}
              >
                LiquidRX Headquarters
              </Typography>
              <Typography 
                sx={{ 
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: 1.5
                }}
              >
                P.O Box 17
                <br />
                Grandview, Texas 76050
              </Typography>
            </Box>
          </Grid>

          {/* Legal Links - IMPROVED RESPONSIVE DESIGN */}
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                display: "flex", 
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 1.5, sm: 2 },
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              {Object.entries(LEGAL_ROUTES).map(([label, path], index, array) => (
                <React.Fragment key={label}>
                  <Box
                    component={RouterLink}
                    to={path}
                    sx={{
                      color: "#444",
                      textDecoration: "none",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      px: { xs: 0.5, sm: 1 },
                      py: 0.5,
                      "&:hover": { 
                        color: darkBlue,
                        textDecoration: "underline" 
                      },
                    }}
                  >
                    {label}
                  </Box>
                  {index < array.length - 1 && (
                    <Typography 
                      sx={{ 
                        color: "#999", 
                        display: { xs: "none", sm: "inline" },
                        fontSize: "0.9rem"
                      }}
                    >
                      •
                    </Typography>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Grid>

          {/* LegitScript Logo */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              display: "flex", 
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center"
            }}>
              <img 
                src={legitScriptLogo} 
                alt="LegitScript Certified" 
                style={{ 
                  height: "80px",
                  width: "auto",
                  opacity: 0.9 
                }} 
              />
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ 
          mt: 4, 
          pt: 3,
          textAlign: "center",
          borderTop: "1px solid rgba(0,0,0,0.05)"
        }}>
          <Typography sx={{ fontSize: "0.85rem", color: "#777" }}>
            © {new Date().getFullYear()} LiquidRx. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* ---------------- FOOTER COLUMN ---------------- */

function FooterColumn({ title, items, routes = {} }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "1.25rem", md: "1.4rem" },
          mb: 2,
          color: "#00359E",
        }}
      >
        {title}
      </Typography>

      {items.map((item) => {
        const to = routes[item];

        return (
          <Box
            key={item}
            component={to ? RouterLink : "span"}
            to={to}
            sx={{
              display: "block",
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 2,
              color: "#747578",
              mb: 1.2,
              fontWeight: 600,
              textDecoration: "none",
              cursor: to ? "pointer" : "default",
              "&:hover": { color: to ? "#003B9D" : "#000" },
            }}
          >
            {item}
          </Box>
        );
      })}
    </Box>
  );
}