import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { TrendingDown, Frown  , ShieldBan , ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Added for navigation
import bannerVideo from "../../assets/Videos/fixyourskin.mp4";

// PRODUCT IMAGES
import wegovyPill from "../../assets/Herocardspages/img6.jpeg";



export default function Fixyourskin() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const navigate = useNavigate(); // Hook for navigation

  // Product data with URLs
  const products = [
    { 
      img: wegovyPill, 
      name: "GHK-Cu", 
      sub: "$179.00",
      buyNowUrl: "https://try.thelrx.com/intake/gh-0ce9zd",
      learnMorePath: "/peptides/GHKCU"
    },

  ];

  // Handler for Buy Now button (opens external URL)
  const handleBuyNow = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Handler for Learn More button (navigates internally)
  const handleLearnMore = (path) => {
    navigate(path);
  };



  return (
    <>
      {/* ================= VIDEO BANNER SECTION ================= */}
      <Box sx={{
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
                Nourish Your Skin,
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
                 Feel the Difference
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
                <ArrowRight style={{
                  width: "1rem",
                  height: "1rem",
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
              mb: { xs: 5, sm: 5, md: "auto" },
              alignSelf: { md: isLargeScreen ? "flex-start" : "flex-end" },
              position: { xs: "relative", md: isLargeScreen ? "relative" : "absolute" },
              bottom: { md: isLargeScreen ? "auto" : 40 },
              right: { md: isLargeScreen ? "auto" : 40 },
            }}>
              {/* Card 1 */}
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
                  width: "28px",
                  height: "28px",
                  color: "#FFFFFF", 
                  strokeWidth: 2.5
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
                <Frown style={{ 
                  width: "28px",
                  height: "28px",
                  color: "#FFFFFF", 
                  strokeWidth: 2.5
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
               <ShieldBan style={{ 
                  width: "28px",
                  height: "28px",
                  color: "#FFFFFF", 
                  strokeWidth: 2.5
                }} />
              </Box>
            </Box>

            {/* Disclaimer at bottom */}
            <Box sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              px: { xs: 2, sm: 3, md: 4, lg: 6 },
              py: { xs: 1, sm: 3.5, md: 2 },
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
              *Results may vary from person to person. This product is intended for cosmetic use only to improve the appearance of your skin. Consult with a licensed healthcare or skincare professional if you have any concerns before use.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ================= END VIDEO BANNER SECTION ================= */}
      
      {/* ================= PRODUCTS GRID SECTION ================= */}
      <Box
        sx={{
          bgcolor: "#F7F7F7",
          py: { xs: 8, sm: 10, md: 12 },
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1640px",
            mx: "auto",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            columnGap: { 
              xs: 3,
              sm: 4, 
              md: 5, 
              lg: 6
            },
            rowGap: { 
              xs: 4,
              sm: 5, 
              md: 6, 
              lg: 6
            },
          }}
        >
          {/* Map through products array */}
          {products.map((item, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>

              {/* IMAGE */}
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.06)" },
                  }}
                />
              </Box>

              {/* SUPPLY BADGE WITH DOT */}
              <Box
                sx={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  bgcolor: "#DCFCE7",
                  color: "#16A34A",
                  px: { xs: 1, md: 1.25 },
                  py: "2px",
                  borderRadius: "999px",
                  fontSize: { xs: "0.65rem", md: "0.7rem" },
                  fontWeight: 600,
                  mb: { xs: 0.75, md: 1 },
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#22C55E",
                  }}
                />
                Supply available
              </Box>

              {/* PRODUCT NAME */}
              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.25,
                }}
              >
                {item.name}
              </Typography>

              {/* SUB NAME */}
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem", md: "0.85rem" },
                  color: "#6B7280",
                  mb: { xs: 1.5, md: 2 },
                }}
              >
                {item.sub}
              </Typography>

              {/* BUTTONS */}
              <Box sx={{ 
                display: "flex", 
                gap: { xs: 1, md: 2 },
                mt: "auto"
              }}>
                <Button
                  onClick={() => handleBuyNow(item.buyNowUrl)}
                  disableRipple
                  sx={{
                    flex: 1,
                    height: { xs: 32, md: 36 },
                    minWidth: 0,
                    px: { xs: 2, md: 5 },
                    borderRadius: "999px",
                    fontSize: { xs: "0.75rem", md: "0.85rem" },
                    fontWeight: 600,
                    lineHeight: 1,
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    bgcolor: "#111827",
                    color: "#FFFFFF",
                    "&:hover": { bgcolor: "#000000" },
                  }}
                >
                  Buy now
                </Button>

                <Button
                  onClick={() => handleLearnMore(item.learnMorePath)}
                  disableRipple
                  sx={{
                    flex: 1,
                    height: { xs: 32, md: 36 },
                    minWidth: 0,
                    px: { xs: 2, md: 5 },
                    borderRadius: "999px",
                    fontSize: { xs: "0.75rem", md: "0.85rem" },
                    fontWeight: 600,
                    lineHeight: 1,
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    bgcolor: "#F9FAFB",
                    color: "#111827",
                    border: "1px solid #E5E7EB",
                    "&:hover": {
                      bgcolor: "#F3F4F6",
                      borderColor: "#D1D5DB",
                    },
                  }}
                >
                  Learn more
                </Button>
              </Box>

            </Box>
          ))}
        </Box>
      </Box>
      {/* ================= END PRODUCTS GRID ================= */}
    </>
  );
}