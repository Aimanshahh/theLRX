import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

import appPreview from "../../assets/medical experts/img1removed.png";
import logo from "../../assets/LRXLOGOS/LOGO-2.png";

/* ---------------- ROUTE MAPS ---------------- */

const LRX_ROUTES = {
  "About Us": "/about-us",
  "How it Works": "/how-it-works",
  "Medical Experts": "/medical-experts",
  "Frequently Asked Questions": "/faqs",
  "About Our Labs": "/DetailedLab",
};

const POPULAR_ROUTES = {
  "Retatrutide Vial": "/weight-loss/retatrutide-vial",
  "Tirzepetide Injectable": "/weight-loss/tirzepatide-injectable",
  "Vitamin B-12": "/peptides/vitamin-b12",
  "Mach-1": "/sexual-health/mach1-6",
  "Drive Plus": "/sexual-health/drive-plus-6",
  "NAD+Injectable": "/peptides/NADinjectable",
};

/* ---------------- SOCIAL LINKS ---------------- */

const SOCIAL_LINKS = [
  {
    Icon: FaFacebookF,
    url: "https://www.facebook.com/people/Liquid-RX-LLC/61584448391822/",
    label: "Facebook"
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
        pb: 6,
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

          {/* SOCIAL ICONS - Updated with react-icons */}
          <Box sx={{ mt: 2, display: "flex", gap: 1.5 }}>
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
              "Testosterone",
              "Hair Regrowth",
              "Mental Health",
              "Drug Comparisons",
              "Drugs & Medications",
            ]}
          />

          <FooterColumn
            title="Popular"
            items={[
              "Retatrutide Vial",
              "Tirzepetide Injectable",
              "Vitamin B-12",
              "Mach-1",
              "Drive Plus",
              "NAD+Injectable",
            ]}
            routes={POPULAR_ROUTES}
          />

          <FooterColumn
            title="LRX"
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

      {/* LEGAL */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Box sx={{ mt: 4, fontSize: "0.9rem" }}>
          {["Terms & Conditions", "Privacy Policy", "Sitemap"].map((x) => (
            <Box
              key={x}
              component="span"
              sx={{ mx: 2, color: "#000", cursor: "pointer", "&:hover": { color: darkBlue } }}
            >
              {x}
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 3, fontSize: "0.85rem", opacity: 0.8 }}>
          © {new Date().getFullYear()} LiquidRx. All rights reserved.
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