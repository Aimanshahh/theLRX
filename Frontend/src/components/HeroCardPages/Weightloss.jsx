import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { TrendingDown, Users, Award, ArrowRight } from "lucide-react";
import bannerVideo from "../../assets/Videos/motion2Fast_Premium_pharmaceutical_showcase_video_featuring_mu_0.mp4";

// PRODUCT IMAGES
import wegovyPill from "../../assets/medicines/herocard4.jpeg";
import zepboundVial from "../../assets/medicines/B12.png";
import ozempicPen from "../../assets/medicines/B12.png";
import wegovyPen from "../../assets/medicines/B12.png";
import zepboundPen from "../../assets/medicines/B12.png";
import semaglutideVial from "../../assets/medicines/B12.png";

export default function Weightloss() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <>
      {/* ================= VIDEO BANNER SECTION ================= */}
      <Box sx={{
        minHeight: "100vh",
        bgcolor: "#000000",
        position: "relative",
      }}>
        {/* Full Width Video Banner - No rounded corners */}
        <Box sx={{
          position: "relative",
          width: "100%",
          height: { 
            xs: "calc(100vh - 120px)", 
            sm: "calc(100vh - 100px)", 
            md: "calc(100vh - 80px)", 
            lg: "calc(100vh - 60px)" 
          },
          minHeight: { xs: "500px", sm: "550px", md: "600px" },
          maxHeight: { xs: "700px", sm: "750px", md: "700px", lg: "800px" },
          overflow: "hidden",
        }}>
          {/* Video Background */}
          <Box
            component="video"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={bannerVideo} type="video/mp4" />
          </Box>

          {/* Enhanced Overlay Gradient for better text visibility */}
          <Box sx={{
            position: "absolute",
            inset: 0,
            background: { 
              xs: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
              sm: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)",
              md: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            },
          }} />

          {/* Enhanced Content Container */}
          <Box sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: { xs: "center", md: "space-between" },
            px: { xs: 2.5, sm: 3.5, md: 4, lg: 6 },
            py: { xs: 4, sm: 6, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}>
            
            {/* Enhanced Left Side - Text Content */}
            <Box sx={{
              flex: 1,
              maxWidth: { xs: "100%", sm: "90%", md: isLargeScreen ? "70%" : "65%" },
              mx: { xs: "auto", md: 0 },
              mt: { xs: 8, sm: 10, md: 0 },
              mb: { xs: 6, sm: 8, md: 0 },
              "& > *:not(:last-child)": { 
                mb: { xs: 3.5, sm: 4, md: 4 } 
              },
            }}>
              {/* Enhanced Typography with better mobile spacing */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { 
                    xs: "2rem", 
                    sm: "2.5rem", 
                    md: "3rem", 
                    lg: "3.75rem" 
                  },
                  fontWeight: { xs: 800, sm: 800, md: 700, lg: 700 },
                  color: "#FFFFFF",
                  lineHeight: { xs: 1.15, sm: 1.2, md: 1.2 },
                  letterSpacing: { xs: "-0.02em", sm: "-0.01em", md: "normal" },
                  mb: 0,
                  textShadow: { 
                    xs: "0 2px 4px rgba(0,0,0,0.5)",
                    sm: "0 2px 8px rgba(0,0,0,0.5)" 
                  },
                }}
              >
                Transform Your Body,
                <Box 
                  component="span" 
                  sx={{
                    display: "block",
                    background: "linear-gradient(to right, #00359E, #003B9D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    mt: { xs: 1, sm: 1, md: 1 },
                    fontWeight: { xs: 800, sm: 800, md: 700 },
                    fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem", lg: "3.75rem" },
                  }}
                >
                  Reclaim Your Life
                </Box>
              </Typography>
              
              {/* Enhanced Button for mobile/medium screens */}
              <Button
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1.5, md: 1 },
                  px: { xs: 4.5, sm: 5, md: 5 },
                  py: { xs: 1.75, sm: 1.75, md: 1.5 },
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1.5px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "999px",
                  color: "#FFFFFF",
                  fontWeight: { xs: 600, sm: 600, md: 500 },
                  textTransform: "none",
                  fontSize: { xs: "1rem", sm: "1.05rem", md: "1rem" },
                  minWidth: { xs: "220px", sm: "240px" },
                  minHeight: { xs: "48px", sm: "52px" },
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.25)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    transform: { xs: "translateY(-2px)", sm: "translateY(-2px)" },
                  },
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  mt: { xs: 3, sm: 4, md: 0 },
                  boxShadow: { 
                    xs: "0 4px 20px rgba(0, 53, 158, 0.3)",
                    sm: "0 6px 25px rgba(0, 53, 158, 0.4)" 
                  },
                }}
              >
                <span>Start Your Journey</span>
                <ArrowRight sx={{
                  width: { xs: "1rem", sm: "1.1rem", md: "1rem" },
                  height: { xs: "1rem", sm: "1.1rem", md: "1rem" },
                  transition: "transform 0.3s ease",
                }} />
              </Button>
            </Box>

            {/* Enhanced Right Side - Stat Icon Cards */}
            <Box sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              gap: { xs: 2, sm: 3, md: 2, lg: 3 },
              width: { xs: "100%", md: "auto" },
              mt: { xs: 0, md: isLargeScreen ? 55 : "auto" },
              mb: { xs: 3, sm: 4, md: "auto" },
              alignSelf: { md: isLargeScreen ? "flex-start" : "flex-end" },
              position: { xs: "relative", md: isLargeScreen ? "relative" : "absolute" },
              bottom: { md: isLargeScreen ? "auto" : 40 },
              right: { md: isLargeScreen ? "auto" : 40 },
            }}>
              {/* Card 1 - Enhanced for mobile */}
              <Box sx={{
                backdropFilter: "blur(15px)",
                bgcolor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "16px",
                p: { xs: 1.5, sm: 2, md: 1.75, lg: 2 },
                width: { xs: "72px", sm: "80px", md: "60px", lg: "64px" },
                height: { xs: "72px", sm: "80px", md: "60px", lg: "64px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  transform: { xs: "scale(1.05)", md: "scale(1.05)" },
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: { 
                  xs: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  sm: "0 6px 20px rgba(0, 0, 0, 0.4)" 
                },
              }}>
                <TrendingDown style={{ 
                  width: { xs: "28px", sm: "32px", md: "26px", lg: "28px" }, 
                  height: { xs: "28px", sm: "32px", md: "26px", lg: "28px" }, 
                  color: "#FFFFFF", 
                  strokeWidth: { xs: 2.5, sm: 2.5, md: 2 }
                }} />
              </Box>

              {/* Card 2 */}
              <Box sx={{
                backdropFilter: "blur(15px)",
                bgcolor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "16px",
                p: { xs: 1.5, sm: 2, md: 1.75, lg: 2 },
                width: { xs: "72px", sm: "80px", md: "60px", lg: "64px" },
                height: { xs: "72px", sm: "80px", md: "60px", lg: "64px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  transform: { xs: "scale(1.05)", md: "scale(1.05)" },
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: { 
                  xs: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  sm: "0 6px 20px rgba(0, 0, 0, 0.4)" 
                },
              }}>
                <Users style={{ 
                  width: { xs: "28px", sm: "32px", md: "26px", lg: "28px" }, 
                  height: { xs: "28px", sm: "32px", md: "26px", lg: "28px" }, 
                  color: "#FFFFFF", 
                  strokeWidth: { xs: 2.5, sm: 2.5, md: 2 }
                }} />
              </Box>

              {/* Card 3 */}
              <Box sx={{
                backdropFilter: "blur(15px)",
                bgcolor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "16px",
                p: { xs: 1.5, sm: 2, md: 1.75, lg: 2 },
                width: { xs: "72px", sm: "80px", md: "60px", lg: "64px" },
                height: { xs: "72px", sm: "80px", md: "60px", lg: "64px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  transform: { xs: "scale(1.05)", md: "scale(1.05)" },
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: { 
                  xs: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  sm: "0 6px 20px rgba(0, 0, 0, 0.4)" 
                },
              }}>
                <Award style={{ 
                  width: { xs: "28px", sm: "32px", md: "26px", lg: "28px" }, 
                  height: { xs: "28px", sm: "32px", md: "26px", lg: "28px" }, 
                  color: "#FFFFFF", 
                  strokeWidth: { xs: 2.5, sm: 2.5, md: 2 }
                }} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Enhanced Disclaimer - Overlay on Video */}
        <Box sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          py: { xs: 2, sm: 2.5, md: 2 },
          zIndex: 10,
          background: { 
            xs: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
            sm: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)" 
          },
        }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { 
                xs: "0.7rem", 
                sm: "0.8rem", 
                md: "0.8125rem", 
                lg: "0.875rem" 
              },
              fontWeight: { xs: 400, sm: 400, md: 400 },
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
              maxWidth: { xs: "100%", sm: "95%", md: "900px" },
              mx: "auto",
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)",
              letterSpacing: { xs: "0.01em", sm: "0.005em" },
            }}
          >
            * These statements have not been evaluated by the Food and Drug Administration.  
            Individual results may vary. Consult with a healthcare professional before starting any weight loss program.
          </Typography>
        </Box>
      </Box>
      {/* ================= END VIDEO BANNER SECTION ================= */}

{/* ================= PRODUCTS GRID SECTION ================= */}
<Box
  sx={{
    bgcolor: "#F7F7F7",
    py: { xs: 6, sm: 8, md: 10 },
    px: { xs: 2, sm: 3, md: 6 },
  }}
>
  <Box
    sx={{
      maxWidth: "1440px",
      mx: "auto",
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(6, 1fr)",
      },
      gap: { xs: 3, sm: 4 },
    }}
  >
    {[
      { img: wegovyPill, name: "Wegovy® pill", sub: "semaglutide" },
      { img: zepboundVial, name: "Zepbound® vials", sub: "tirzepatide" },
      { img: ozempicPen, name: "Ozempic®", sub: "semaglutide" },
      { img: wegovyPen, name: "Wegovy® pen", sub: "semaglutide" },
      { img: zepboundPen, name: "Zepbound®", sub: "tirzepatide" },
      { img: semaglutideVial, name: "Semaglutide", sub: "injection" },
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* IMAGE — FREE, SQUARE, NO CONTAINER */}
        <Box
          component="img"
          src={item.img}
          alt={item.name}
          sx={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "contain",
            display: "block",
            mb: 1.5,
          }}
        />

        {/* SUPPLY */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.75 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "#22C55E",
            }}
          />
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#22C55E",
              fontWeight: 500,
            }}
          >
            Supply available
          </Typography>
        </Box>

        {/* PRODUCT NAME */}
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#111827",
            lineHeight: 1.3,
          }}
        >
          {item.name}
        </Typography>

        {/* SUB NAME */}
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#6B7280",
            mb: 1.5,
          }}
        >
          {item.sub}
        </Typography>

        {/* BUTTON */}
        <Button
          sx={{
            alignSelf: "flex-start",
            borderRadius: "999px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            px: 3,
            py: 0.75,
            bgcolor: "#111827",
            color: "#FFFFFF",
            "&:hover": {
              bgcolor: "#000000",
            },
          }}
        >
          Buy now
        </Button>
      </Box>
    ))}
  </Box>
</Box>
{/* ================= END PRODUCTS GRID ================= */}


    </>
  );
}