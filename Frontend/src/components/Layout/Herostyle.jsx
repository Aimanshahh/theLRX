import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../../assets/images/section.png";
import cardImage1 from "../../assets/images/card-removebg-preview.png";
import cardImage2 from "../../assets/medical experts/imgremoved4.png";

export default function HeroSection() {
  return (
    <Box
      sx={{
        mt: 4,
        width: "100%",
        borderRadius: 7,
        background:
          "linear-gradient(135deg,#00359E,#003B9D 30%,#8B8D8E 70%,#747578 100%)",
        position: "relative",
        // Reduced bottom padding to eliminate extra space
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
          Testosterone By LiquidRX
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
            Get started
          </Button>

          <Button
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
            Do I have low T?
          </Button>
        </Box>
      </Box>

      {/* ===== UPDATED INFO CARDS SECTION ===== */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          // Reduced top margin to eliminate extra space
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
          {/* CARD 1 */}
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
                Doctor-guided care
              </Typography>

              <Typography
                sx={{
                  color: "#A0C6FF",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  maxWidth: "85%",
                  lineHeight: 1.4,
                }}
              >
                Personalized testosterone therapy designed by licensed clinicians.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                mt: 2,
                mb: "-24px",
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
                  alt="Doctor-guided care"
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
                mt: 6,
              }}
            >
              <Button
                variant="contained"
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

          {/* CARD 2 */}
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
                Delivered to you
              </Typography>

              <Typography
                sx={{
                  color: "#A0C6FF",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  maxWidth: "85%",
                  lineHeight: 1.4,
                }}
              >
                Discreet shipping, automatic refills, no clinic visits required.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                mt: 2,
                mb: "-24px",
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
                  alt="Delivered to you"
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
                mt: 6,
              }}
            >
              <Button
                variant="contained"
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
                Get Started
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
          // Reduced top margin to eliminate extra space
          mt: { xs: 4, sm: 6, md: 8 },
          // Equal horizontal spacing using padding
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
          Image is for illustrative purposes only. Individual lab results may vary. 
          Compounded products are not approved nor evaluated for safety, effectiveness, 
          or quality by the FDA.
        </Typography>
      </Box>
    </Box>
  );
}