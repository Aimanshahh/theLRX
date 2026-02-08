import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/section.png";
import cardImage1 from "../../assets/images/card-removebg-preview.png";
import cardImage2 from "../../assets/medical experts/imgremoved4.png";

/* ================= SIDEBAR MENU DATA ================= */
const menuData = {
  // "Weight Loss": [
  //   { title: "Oral Semaglutide RDT", route: "/weight-loss/oral-semaglutide-rdt" },
  //   { title: "Oral Tirzepatide RDT", route: "/weight-loss/oral-tirzepatide-rdt" },
  //   { title: "Retatrutide Vial", route: "/weight-loss/retatrutide-vial" },
  //   { title: "Semaglutide Injectable", route: "/weight-loss/semaglutide-injectable" },
  //   { title: "Tirzepatide Injectable", route: "/weight-loss/tirzepatide-injectable" },
  // ],

  "Precision BioActives": [
    { title: "BPC-157", route: "/peptides/bpc-157" },
    { title: "CJC-1295 Ipamorelin", route: "/peptides/cjc-1295-ipamorelin" },
    { title: "GHK-CU", route: "/peptides/ghk-cu" },
    { title: "NAD+", route: "/peptides/nad" },
    { title: "NAD+ Injectable", route: "/peptides/nad-injectable" },
    { title: "PT-141", route: "/peptides/pt-141" },
    { title: "Sermorelin", route: "/peptides/sermorelin" },
    { title: "Vitamin B12", route: "/peptides/vitamin-b12" },
  ],

  // "Sexual Health": [
  //   { title: "Drive Plus 6", route: "/sexual-health/drive-plus-6" },
  //   { title: "Drive Plus 12", route: "/sexual-health/drive-plus-12" },
  //   { title: "Drive Plus 18", route: "/sexual-health/drive-plus-18" },
  //   { title: "Epiq Chew 30", route: "/sexual-health/epiq-chew-30" },
  //   { title: "Lust 6", route: "/sexual-health/lust-6" },
  //   { title: "Lust 12", route: "/sexual-health/lust-12" },
  //   { title: "Lust 18", route: "/sexual-health/lust-18" },
  //   { title: "Mach 6", route: "/sexual-health/mach-6" },
  //   { title: "Mach 12", route: "/sexual-health/mach-12" },
  //   { title: "Mach 18", route: "/sexual-health/mach-18" },
  //   { title: "Overdrive Plus 6", route: "/sexual-health/overdrive-plus-6" },
  //   { title: "Overdrive Plus 12", route: "/sexual-health/overdrive-plus-12" },
  //   { title: "Passion 6", route: "/sexual-health/passion-6" },
  //   { title: "Passion 12", route: "/sexual-health/passion-12" },
  //   { title: "Passion 18", route: "/sexual-health/passion-18" },
  //   { title: "Redpill 6", route: "/sexual-health/redpill-6" },
  //   { title: "Redpill 12", route: "/sexual-health/redpill-12" },
  // ],
};

/* ================= COLORS ================= */
const palette = {
  greyDark: "#747578",
  greyLight: "#8B8D8E",
  blueDark: "#00359E",
  white: "#fff",
  black: "#111",
};

export default function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleExternalNavigation = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInternalNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* ================= SIDEBAR OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 9998,
          }}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: isMobile ? "90%" : "420px",
          height: "100vh",
          background: palette.white,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-6px 0 24px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            height: "70px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 24px",
            borderBottom: "1px solid #eee",
          }}
        >
          <CloseIcon
            onClick={() => setIsSidebarOpen(false)}
            style={{ fontSize: "28px", cursor: "pointer", color: palette.black }}
          />
        </div>

        <div style={{ padding: "24px", overflowY: "auto" }}>
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "28px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>
                {category}
              </h4>

              {items.map((item) => (
                <div
                  key={item.title}
                  onClick={() => {
                    navigate(item.route);
                    setIsSidebarOpen(false);
                  }}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid #f0f0f0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.title}
                  <ChevronRightIcon style={{ marginLeft: "auto" }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= MAIN HERO SECTION ================= */}
      <Box
        sx={{
          mt: 4,
          width: "100%",
          borderRadius: 7,
          background:
            "linear-gradient(135deg,#00359E,#003B9D 30%,#8B8D8E 70%,#747578 100%)",
          position: "relative",
          pb: { xs: 4, sm: 6, md: 8 },
        }}
      >
        {/* ===== TEXT SECTION ===== */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            pt: { xs: 2, sm: 4, md: 6 },
            px: 2,
            maxWidth: "820px",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: {
                xs: "2rem",
                sm: "2.4rem",
                md: "2.8rem",
                lg: "3.1rem",
              },
              letterSpacing: "-0.02em",
              textShadow: "0 4px 14px rgba(0,0,0,0.25)",
            }}
          >
            Get Your Edge Back With
            <br />
            Precision BioActives By LiquidRX
          </Typography>
        </Box>

        {/* ===== IMAGE SECTION ===== */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "450px",
              sm: "550px",
              md: "700px",
              lg: "850px",
              xl: "950px",
            },
            mt: { xs: -25, sm: -30, md: -35 },
            mb: 2,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            mx: "auto",
            zIndex: 2,
          }}
        >
          {/* ===== BUTTONS ===== */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 32, sm: 48, md: 60 },
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 2,
              zIndex: 3,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => handleExternalNavigation("https://try.thelrx.com/intake/bp-8xpx3w")}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.4, sm: 1.6 },
                borderRadius: "999px",
                backgroundColor: "#00359E",
                color: "#f2f2f2",
                fontWeight: 600,
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                "&:hover": {
                  backgroundColor: "#8B8D8E",
                },
                whiteSpace: "nowrap",
              }}
            >
              Get Started with BPC-157
            </Button>

            <Button
              onClick={() => handleInternalNavigation("/peptides/sermorelin")}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1.4, sm: 1.6 },
                borderRadius: "999px",
                backgroundColor: "#747578",
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                backdropFilter: "blur(8px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "#00359E",
                },
                whiteSpace: "nowrap",
              }}
            >
              View Sermolin
            </Button>
          </Box>
        </Box>

        {/* ===== UPDATED INFO CARDS SECTION ===== */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            mt: { xs: 0, sm: 2, md: -8 },
            display: "flex",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
              maxWidth: "1200px",
              width: "100%",
              "& > *": {
                minHeight: {
                  xs: "500px",
                  sm: "550px",
                  md: "600px",
                },
              },
            }}
          >
            {/* CARD 1 - PRECISION BIOACTIVES - MODIFIED BUTTON */}
            <Box
              sx={{
                borderRadius: 3,
                backgroundColor: "#0A1A3A",
                p: 3,
                boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "hidden",
                height: { xs: "420px", sm: "460px", md: "500px" },
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.25)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                    mb: 1.5,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Precision BioActives Collection
                </Typography>

                <Typography
                  sx={{
                    color: "#A0C6FF",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    maxWidth: "85%",
                    lineHeight: 1.4,
                  }}
                >
                  Premium bioactive compounds including Vitamin B12 Injection, Sermolin, Pt-141, and more.
                </Typography>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  mt: 2,
                  mb: { xs: "-8px", sm: "-12px", md: "-24px" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "260px", sm: "300px", md: "340px" },
                    borderRadius: "22px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    p: 0,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={cardImage1}
                    alt="Precision BioActives"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: { xs: 2, sm: 3, md: 6 },
                  mb: { xs: 1, sm: 1, md: 0 },
                }}
              >
                {/* MODIFIED BUTTON - NOW OPENS SIDEBAR */}
                <Button
                  variant="contained"
                  onClick={() => setIsSidebarOpen(true)}  // Changed to open sidebar
                  sx={{
                    backgroundColor: "#4A90E2",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    px: { xs: 3, sm: 3.5 },
                    py: { xs: 1.2, sm: 1.4 },
                    borderRadius: "999px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#357ABD",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(74,144,226,0.3)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    minWidth: "140px",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>

            {/* CARD 2 - MEDICAL EXPERTISE - UNCHANGED */}
            <Box
              sx={{
                borderRadius: 3,
                backgroundColor: "#0A1A3A",
                p: 3,
                boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "hidden",
                height: { xs: "420px", sm: "460px", md: "500px" },
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.25)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" },
                    mb: 1.5,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Medical Expert Formulations
                </Typography>

                <Typography
                  sx={{
                    color: "#A0C6FF",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    maxWidth: "85%",
                    lineHeight: 1.4,
                  }}
                >
                  Pharmaceutical-grade bioactive compounds designed by licensed medical professionals for optimal results.
                </Typography>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  mt: 2,
                  mb: { xs: "-8px", sm: "-12px", md: "-24px" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "260px", sm: "300px", md: "340px" },
                    borderRadius: "22px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    p: 0,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={cardImage2}
                    alt="Medical expertise"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: { xs: 2, sm: 3, md: 6 },
                  mb: { xs: 1, sm: 1, md: 0 },
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleExternalNavigation("https://try.thelrx.com/intake/bp-8xpx3w")}
                  sx={{
                    backgroundColor: "#4A90E2",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    px: { xs: 3, sm: 3.5 },
                    py: { xs: 1.2, sm: 1.4 },
                    borderRadius: "999px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#357ABD",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(74,144,226,0.3)",
                    },
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    minWidth: "140px",
                  }}
                >
                  Get Started with BPC-157
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ===== FOOTER TEXT SECTION WITH EQUAL SPACING ===== */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            textAlign: "center",
            mt: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: "900px",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#003B9D",
              fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
              lineHeight: 1.5,
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            Pharmaceutical-grade bioactive compounds including Vitamin B12 Injection, Sermolin, 
            Pt-141, CJC-1295/Ipamorelin Blend, GHK-CU, BPC-157 Injectable, NAD+ Nasal Spray, 
            and NAD+ Injectable. Individual results may vary. Consult with a healthcare provider 
            before starting any new supplement regimen.
          </Typography>
        </Box>
      </Box>
    </>
  );
}