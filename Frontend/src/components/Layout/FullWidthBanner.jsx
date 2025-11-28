import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Images
import heroMan from "../../assets/images/guidebanner.png";
import pillImg from "../../assets/Herocards/Treatment1.png";
import labsImg from "../../assets/Herocards/Treatment1.png";

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
        // Animated gradient background
        background: "linear-gradient(270deg, #00359E, #003B9D, #8B8D8E, #747578)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 8s ease infinite",
        position: "relative",
        '&::before': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
          zIndex: 1,
        }
      }}
    >
      {/* HERO SECTION - REDUCED HEIGHT FROM TOP */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "auto", md: "600px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-end" },
          justifyContent: "space-between",
          position: "relative",
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 0 },
          px: { xs: 2, md: 4 },
          zIndex: 2, // Ensure content is above the gradient overlay
        }}
      >
        {/* LEFT CONTENT SECTION */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            zIndex: 10,
            maxWidth: { md: "45%" },
            mb: { xs: 4, md: 6 },
            justifyContent: "center",
          }}
        >
          {/* TITLE - Changed to white for better contrast */}
          <Typography
            sx={{
              fontSize: { xs: "26px", sm: "30px", md: "38px" },
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              color: "#FFFFFF", // Changed to white
              mb: 2,
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Get your edge back with <br />
            Testosterone by Hims
          </Typography>

          {/* BUTTONS - Updated for better visibility */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: { xs: 3, md: 4 },
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleNavigation('/get-started')}
              sx={{
                borderRadius: "28px",
                px: 4,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                backgroundColor: "#FFFFFF",
                color: "#00359E",
                fontSize: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                "&:hover": { 
                  backgroundColor: "#F0F0F0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.4)",
                  color: "#003B9D",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get started
            </Button>

            <Button
              variant="outlined"
              onClick={() => handleNavigation('/low-t-test')}
              sx={{
                borderRadius: "28px",
                px: 4,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                fontSize: "15px",
                borderWidth: 2,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                "&:hover": { 
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "#FFFFFF",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Do I have low T?
            </Button>
          </Box>

          {/* CARDS - Reduced size and spacing */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: { xs: "wrap", md: "nowrap" },
              width: "100%",
            }}
          >
            {[
              {
                title: "Testosterone Rx",
                desc: "to elevate your T",
                img: pillImg,
                btn: "Learn more",
                variant: "outlined",
                route: "/testosterone-treatment"
              },
              {
                title: "At-home labs",
                desc: "to check your T-levels",
                img: labsImg,
                btn: "Start testing",
                variant: "contained",
                route: "/home-labs"
              },
            ].map((card, i) => (
              <Card
                key={i}
                onClick={() => handleNavigation(card.route)}
                sx={{
                  width: { xs: "100%", sm: "260px" },
                  maxWidth: 260,
                  height: 300,
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.3)",
                  background: `
                    linear-gradient(
                      180deg,
                      #FFFFFF 0%,
                      #8B8D8E 15%,
                      #FFFFFF 100%
                  )`,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(139, 141, 142, 0.2)",
                  '&:hover': {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 16px 35px rgba(0, 53, 158, 0.4)",
                    borderColor: "#00359E",
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={card.img}
                  sx={{
                    height: 140,
                    objectFit: "contain",
                    objectPosition: "center",
                    mt: 1.5,
                    mb: 1,
                    padding: 1,
                  }}
                />

                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 2,
                    pt: 0,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: 1.2,
                        letterSpacing: "-0.3px",
                        mb: 1,
                        color: "#000000",
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#8B8D8E",
                        lineHeight: 1.35,
                      }}
                    >
                      {card.desc}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant={card.variant}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation(card.route);
                      }}
                      sx={{
                        borderRadius: "999px",
                        px: 2.5,
                        py: 0.6,
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "12px",
                        transition: "all 0.2s ease",
                        minWidth: "auto",

                        ...(card.variant === "outlined"
                          ? { 
                              borderColor: "#00359E", 
                              color: "#00359E",
                              '&:hover': {
                                backgroundColor: "rgba(0, 53, 158, 0.1)",
                                borderColor: "#003B9D",
                                color: "#003B9D"
                              }
                            }
                          : {
                              backgroundColor: "#00359E",
                              color: "#FFFFFF",
                              '&:hover': { 
                                backgroundColor: "#003B9D",
                                transform: "scale(1.05)"
                              },
                            }),
                      }}
                    >
                      {card.btn}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* RIGHT IMAGE SECTION - Adjusted height */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            zIndex: 5,
            maxWidth: { md: "50%" },
            mt: { xs: 4, md: 0 },
            height: { md: "100%" },
            minHeight: { md: "600px" },
          }}
        >
          <Box
            component="img"
            src={heroMan}
            alt="Hero"
            sx={{
              width: "100%",
              maxWidth: "550px",
              height: "auto",
              maxHeight: { md: "85%" },
              objectFit: "contain",
              objectPosition: "bottom",
              borderRadius: "16px",
              filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))",
            }}
          />
        </Box>
      </Box>

      {/* Keyframes for gradient animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}
      </style>
    </Box>
  );
}