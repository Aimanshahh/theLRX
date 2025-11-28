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

// Import images directly (replace with correct images later)
import image1 from "../../assets/Herocards/hairtreatment.png";
import image2 from "../../assets/Herocards/hairtreatment.png";
import image3 from "../../assets/Herocards/hairtreatment.png";
import image4 from "../../assets/Herocards/hairtreatment.png";

const cards = [
  {
    subtitle: "Care that fits",
    title: "your schedule",
    cta: "Get started",
    img: image1,
    path: "/schedule-care"
  },
  {
    subtitle: "Prescribed by",
    title: "licensed providers",
    cta: "Get personalized treatment",
    img: image2,
    path: "/licensed-providers"
  },
  {
    subtitle: "Doctor-trusted",
    title: "ingredients",
    cta: "Find my treatment",
    img: image3,
    path: "/trusted-ingredients"
  },
  {
    subtitle: "FDA-regulated",
    title: "pharmacies",
    cta: "Get personalized treatment",
    img: image4,
    path: "/regulated-pharmacies"
  },
];

export default function FourCards() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
  };

  const stagger = ["0px", "50px", "0px", "50px"];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: { xs: 4, md: 10 },
        px: 2,
        backgroundColor: "#FFFFFF", // Clean white background
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: { xs: 3, sm: 1 },
          maxWidth: { xs: 400, sm: 900 },
        }}
      >
        {cards.map((card, idx) => (
          <Card
            key={idx}
            onClick={() => handleNavigation(card.path)}
            elevation={0}
            sx={{
              width: "100%",
              borderRadius: "22px",
              backgroundColor: "#FFFFFF",
              border: "2px solid #8B8D8E",
              transform: { sm: `translateY(${stagger[idx]})` },
              position: "relative",
              p: 4,
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              '&:hover': {
                transform: { sm: `translateY(calc(${stagger[idx]} - 8px))` },
                boxShadow: "0 12px 30px rgba(0, 53, 158, 0.15)",
                borderColor: "#00359E",
                backgroundColor: "#F8F9FA",
              }
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  color: "#747578",
                  letterSpacing: "0.5px",
                }}
              >
                {card.subtitle}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  lineHeight: 1.2,
                  mt: 0.7,
                  color: "#000000",
                }}
              >
                {card.title}
              </Typography>

              <Button
                variant="contained"
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigation(card.path);
                }}
                sx={{
                  mt: 2,
                  borderRadius: "999px",
                  px: 3,
                  py: 1,
                  fontSize: "0.75rem",
                  backgroundColor: "#00359E",
                  color: "#FFFFFF",
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(0, 53, 158, 0.3)",
                  "&:hover": { 
                    backgroundColor: "#003B9D",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0, 53, 158, 0.4)",
                  },
                  transition: "all 0.3s ease"
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
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  '&:hover': {
                    transform: "scale(1.05)",
                  }
                }}
              />
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}