// FourCards.jsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import image1 from "../../assets/images/card12-removebg-preview.png";
import image2 from "../../assets/images/4cardimg.png";
import image3 from "../../assets/images/4cardimg4.png";
import image4 from "../../assets/images/4cardimg3.png";

const cards = [
  {
    subtitle: "Care That Fits",
    title: "Your Schedule",
    cta: "Get Started",
    img: image1,
    path: "/schedule-care",
  },
  {
    subtitle: "Prescribed By",
    title: "Licensed Providers",
    cta: "Get Personalized Treatment",
    img: image2,
    path: "/licensed-providers",
  },
  {
    subtitle: "Doctor-Trusted",
    title: "Ingredients",
    cta: "Find My Treatment",
    img: image3,
    path: "/trusted-ingredients",
  },
  {
    subtitle: "FDA-regulated",
    title: "Pharmacies",
    cta: "Get personalized treatment",
    img: image4,
    path: "/regulated-pharmacies",
  },
];

export default function FourCards() {
  const navigate = useNavigate();
  const stagger = ["0px", "50px", "0px", "50px"];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        py: { xs: 3, md: 8 },
        px: 0,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: "4px", // micro spacing like Hims
          width: "100%",
        }}
      >
        {cards.map((card, idx) => (
    <Card
  key={idx}
  elevation={0}
  sx={{
    width: "100%",
    borderRadius: "22px",
    border: "1px solid #D9D9D9",
    background: "#7D8FACFF",
    p: { xs: 3, md: 5 },
    textAlign: "center",
    transform: { sm: `translateY(${stagger[idx]})` },
    transition: "all 0.3s ease",
    "&:hover": {
      transform: { sm: `translateY(calc(${stagger[idx]} - 10px))` },
      boxShadow: "0 14px 35px rgba(0,53,158,0.15)",
      borderColor: "#00359E",
      backgroundColor: "#F8F9FA",
    },
  }}
>

            <CardContent sx={{ p: 0 }}>
              {/* SUBTITLE — small, tight, elegant */}
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  color: "#6A6A6A",
                }}
              >
                {card.subtitle}
              </Typography>

              {/* TITLE — bigger & stronger */}
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.6rem", md: "1.8rem" },
                  lineHeight: 1.2,
                  mt: 1,
                  color: "#00359E",
                }}
              >
                {card.title}
              </Typography>

              {/* CTA — Larger, more premium */}
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(card.path);
                }}
                sx={{
                  mt: 3,
                  borderRadius: "999px",
                  px: { xs: 3.5, md: 4 },
                  py: { xs: 1.3, md: 1.5 },
                  fontSize: { xs: "0.8rem", md: "0.9rem" },
                  fontWeight: 700,
                  backgroundColor: "#8B8D8E",
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(0, 53, 158, 0.3)",
                  "&:hover": {
                    backgroundColor: "#003B9D",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0, 53, 158, 0.4)",
                  },
                }}
              >
                {card.cta}
              </Button>
            </CardContent>

            {/* ENLARGED IMAGE SECTION - All images made much bigger */}
            <Box 
              sx={{ 
                mt: 2, // Reduced top margin to make more space for image
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // Reduced height to allow images to overflow container
                height: "auto",
                minHeight: "220px", // Minimum height
              }}
            >
              <CardMedia
  component="img"
  image={card.img}
  alt={card.title}
  sx={{
    /* MAKE ALL IMAGES BIG & DOMINANT */
    width: "155%",
    maxWidth: "520px",
    height: "auto",
    maxHeight: "480px",

    objectFit: "contain",
    display: "block",

    /* Strong overflow like your 3rd card */
    marginLeft: "-27%",
    marginRight: "-27%",

    transition: "all 0.35s ease",

    "&:hover": {
      transform: "scale(1.15)",
    },
  }}
/>

            </Box>
          </Card>
        ))}
      </Box>

      {/* FOOTER CONTENT */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mt: { xs: 4, md: 10 },
          px: { xs: 2, md: 4 },
          pb: { xs: 2, md: 4 },

        }}
      >
        <br></br>
        <br></br>
        
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
            fontweight:{xs: 400, sm: 600},
            color: "#00359E",
            lineHeight: 1.5,
            fontStyle: "italic",
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Compounded drug products are not FDA-approved. FDA does not evaluate 
          compounded products for safety, effectiveness, or quality. Prescription 
          products require an online consultation with a healthcare provider who 
          will determine if a prescription is appropriate.
        </Typography>
      </Box>
    </Box>
  );
}