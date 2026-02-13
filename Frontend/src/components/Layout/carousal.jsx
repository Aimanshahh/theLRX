import React from "react";
import { Box, Typography } from "@mui/material";

// Your original images
import weightLossImg from "../../assets/Carousal/img4.jpg";
import fitnessImg from "../../assets/Carousal/img2.jpg";
import recedingHairImg from "../../assets/Carousal/img5.jpg";

// Brand colours – exactly as used in AboutUs
const brand = {
  darkBlue: "#00359E",
  midBlue: "#003B9D",
  grey: "#747578",
  lightGrey: "#8B8D8E",
  offWhite: "#FAFAF8",
  white: "#FFFFFF",
  black: "#000000",
  cardBg: "#B0C4DE", // ← your mosaic card background
};

const topics = [
  {
    id: 1,
    title: "Weight Loss",
    description: "Personalized GLP‑1 protocols. Compounded for your biology.",
    image: weightLossImg,
  },
  {
    id: 2,
    title: "Minoxidil & Hair Regrowth",
    description: "Formulated with azelaic acid for enhanced follicular delivery.",
    image: fitnessImg,
  },
  {
    id: 3,
    title: "Hair Regrowth That Works",
    description: "Multi‑pathway approach: topical + oral + peptide support.",
    image: recedingHairImg,
  },
];

const HealthMonographGrid = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundColor: brand.offWhite,
        position: "relative",
        overflow: "hidden",

        // ---------- DIAGONAL STRIPES (brand signature) ----------
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${brand.darkBlue}03 0px,
            ${brand.darkBlue}03 1px,
            transparent 1px,
            transparent 12px
          )`,
          zIndex: 1,
        },

        // ---------- DOTTED DIAGONAL (brand signature) ----------
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${brand.darkBlue}08 0px,
            ${brand.darkBlue}08 1px,
            transparent 1px,
            transparent 24px
          )`,
          backgroundSize: "20px 20px",
          zIndex: 1,
        },
      }}
    >
      {/* ---------- HEADLINE – EXACTLY AS IN ABOUT US ---------- */}
      <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", mb: { xs: 6, md: 10 } }}>
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
            textTransform: "uppercase",
          }}
        >
          <Box component="span" sx={{ color: brand.grey }}>
            Here's What You&nbsp;
          </Box>
          <br />
          <Box
            component="span"
            sx={{
              color: brand.darkBlue,
              background: `linear-gradient(180deg, ${brand.darkBlue} 0%, ${brand.midBlue} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Need To Know?
          </Box>
        </Typography>
        <Typography
          sx={{
            fontFamily: `"Inter", sans-serif`,
            fontSize: "1rem",
            color: brand.lightGrey,
            mt: 2,
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          From the Formulator's Bench
        </Typography>
      </Box>

      {/* ---------- MONOGRAPH GRID – MATCHES YOUR MOSAIC CARDS ---------- */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          gap: "4px", // exactly like your mosaic gap
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {topics.map((topic) => (
          <Box
            key={topic.id}
            sx={{
              position: "relative",
              borderRadius: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
              overflow: "hidden",
              height: { xs: "280px", sm: "350px", md: "400px", lg: "450px" },
              width: "100%",
              backgroundColor: brand.cardBg, // ← your mosaic blue
              margin: 0,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: `0 12px 24px ${brand.darkBlue}20`,
              },
            }}
          >
            {/* ---------- IMAGE – BOTTOM RIGHT (EXACT MATCH) ---------- */}
            <Box
              component="img"
              src={topic.image}
              alt={topic.title}
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: "100%",
                width: "auto",
                objectFit: "contain",
                objectPosition: "right bottom",
                zIndex: 1,
              }}
            />

            {/* ---------- NUMBER – TOP LEFT (MONOGRAPH SIGNATURE) ---------- */}
            <Typography
              sx={{
                position: "absolute",
                top: { xs: 16, sm: 20, md: 24, lg: 28 },
                left: { xs: 16, sm: 20, md: 24, lg: 28 },
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                fontWeight: 900,
                color: brand.white,
                zIndex: 3,
                lineHeight: 1,
                textShadow: `0 2px 8px ${brand.darkBlue}40`,
                opacity: 0.9,
                fontFamily: `"Cormorant Garamond", serif`,
              }}
            >
              {String(topic.id).padStart(2, "0")}
            </Typography>

            {/* ---------- TITLE – GRADIENT TEXT (YOUR STYLE) ---------- */}
            <Typography
              sx={{
                position: "absolute",
                top: { xs: 70, sm: 80, md: 90, lg: 100 },
                left: { xs: 16, sm: 20, md: 24, lg: 28 },
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem", lg: "2.2rem" },
                fontWeight: 900,
                color: brand.black,
                zIndex: 2,
                lineHeight: 1.05,
                maxWidth: { xs: "70%", sm: "65%", md: "60%" },
                fontFamily: `"Montserrat", "Inter", sans-serif`,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                background: `linear-gradient(180deg, ${brand.black} 0%, #333333 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {topic.title}
            </Typography>

            {/* ---------- DESCRIPTION – SUBTLE, UNDER TITLE ---------- */}
            <Typography
              sx={{
                position: "absolute",
                top: { xs: 140, sm: 160, md: 180, lg: 200 },
                left: { xs: 16, sm: 20, md: 24, lg: 28 },
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" },
                fontWeight: 600,
                color: brand.darkBlue,
                zIndex: 2,
                maxWidth: { xs: "70%", sm: "65%", md: "60%" },
                fontFamily: `"Inter", sans-serif`,
                lineHeight: 1.4,
                textShadow: `0 1px 2px rgba(255,255,255,0.5)`,
              }}
            >
              {topic.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* ---------- TYPOGRAPHIC COLOPHON – BRAND SIGNATURE ---------- */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          mt: { xs: 6, md: 10 },
          maxWidth: "600px",
          mx: "auto",
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "0.85rem",
            fontWeight: 600,
            fontFamily: `"Inter", sans-serif`,
            color: brand.lightGrey,
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderTop: `1px solid ${brand.darkBlue}15`,
            pt: 4,
          }}
        >
          Compounded for you, by LiquidRX
        </Typography>
      </Box>
    </Box>
  );
};

export default HealthMonographGrid;