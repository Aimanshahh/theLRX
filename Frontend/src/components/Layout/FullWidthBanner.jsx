import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Images
import heroMan from "../../assets/images/competent-doctor-posing.jpg";
import pillImg from "../../assets/medicines/COT Vial.png";
import labsImg from "../../assets/medicines/Tirzepatide Vial.png";

export default function FullWidthBanner() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "32px",
        overflow: "hidden",
        mt: { xs: 4, md: 6 },
        mb: { xs: 6, md: 10 },
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E5E5",
      }}
    >
      {/* HERO SPLIT LAYOUT */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 6, md: 10 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* TITLE */}
          <Typography
            sx={{
              fontSize: { xs: "34px", sm: "38px", md: "48px" },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              color: "#000000",
              mb: 3,
            }}
          >
            Get your edge back
            <br />
            with Testosterone by Hims
          </Typography>

          {/* CTA BUTTONS */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="button"
              onClick={() => handleNavigation("/get-started")}
              sx={{
                borderRadius: "999px",
                px: 4,
                py: 1.8,
                fontWeight: 700,
                textTransform: "none",
                backgroundColor: "#00359E",
                color: "#FFFFFF",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#003B9D" },
              }}
            >
              Get started
            </Box>

            <Box
              component="button"
              onClick={() => handleNavigation("/low-t-test")}
              sx={{
                borderRadius: "999px",
                px: 4,
                py: 1.8,
                fontWeight: 700,
                textTransform: "none",
                fontSize: "16px",
                color: "#00359E",
                backgroundColor: "transparent",
                border: "1px solid #00359E",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#F4F6F8" },
              }}
            >
              Do I have low T?
            </Box>
          </Box>

          {/* MINI CARDS — NO BUTTONS */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: { xs: "wrap", md: "nowrap" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {[
              {
                title: "Testosterone Rx",
                desc: "Elevate your T levels safely with a doctor-guided plan.",
                img: pillImg,
              },
              {
                title: "At-home labs",
                desc: "Check your T levels conveniently from home.",
                img: labsImg,
              },
            ].map((card, i) => (
              <Card
                key={i}
                sx={{
                  width: { xs: "100%", sm: 280 },
                  borderRadius: "20px",
                  border: "1px solid #E0E0E0",
                  backgroundColor: "#FFFFFF",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={card.img}
                  sx={{
                    height: 120,
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <CardContent sx={{ px: 1, pb: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "18px",
                      mb: 1,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#8B8D8E",
                    }}
                  >
                    {card.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            overflow: "hidden",
            backgroundColor: "#F8F9FA",
          }}
        >
          <Box
            component="img"
            src={heroMan}
            alt="Hero"
            sx={{
              width: "100%",
              maxWidth: 580,
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
