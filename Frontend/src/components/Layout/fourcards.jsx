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

import image1 from "../../assets/medicines/Tirzepatide Pills.png";
import image2 from "../../assets/medicines/Tirzepatide Pills.png";
import image3 from "../../assets/medicines/Tirzepatide Pills.png";
import image4 from "../../assets/medicines/Tirzepatide Pills.png";

const cards = [
  {
    subtitle: "Care that fits",
    title: "your schedule",
    cta: "Get started",
    img: image1,
    path: "/schedule-care",
  },
  {
    subtitle: "Prescribed by",
    title: "licensed providers",
    cta: "Get personalized treatment",
    img: image2,
    path: "/licensed-providers",
  },
  {
    subtitle: "Doctor-trusted",
    title: "ingredients",
    cta: "Find my treatment",
    img: image3,
    path: "/trusted-ingredients",
  },
  {
    subtitle: "FDA-regulated",
    title: "pharmacies",
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
            onClick={() => navigate(card.path)}
            sx={{
              width: "100%",
              borderRadius: "22px",
              border: "1px solid #D9D9D9",
              background: "#FFFFFF",
              p: { xs: 3, md: 5 },
              cursor: "pointer",
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
                  color: "#000",
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
                  backgroundColor: "#00359E",
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

            <Box sx={{ mt: 3 }}>
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{
                  width: "70%",
                  mx: "auto",
                  transition: "0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
