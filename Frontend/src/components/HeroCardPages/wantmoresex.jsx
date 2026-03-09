import React from "react";
import { Box, Typography, Button, useTheme, useMediaQuery, Chip } from "@mui/material";
import { PillBottle, Users, HandHeart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bannerVideo from "../../assets/Videos/havebettersex.mp4";

// PRODUCT IMAGES (Using existing images for now)
import wegovyPill from "../../assets/Herocardspages/img8.jpeg";
import zepboundVial from "../../assets/Herocardspages/img9.jpeg";
import ozempicPen from "../../assets/Herocardspages/img10.jpeg";
import zepboundPen from "../../assets/Herocardspages/img13.jpeg";
import semaglutideVial from "../../assets/Herocardspages/img12.jpeg";

export default function Wantmoresex() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const navigate = useNavigate();

  // Product data with URLs - Updated with sexual health medicines
  const products = [
    // Female Products
    { 
      img: wegovyPill, 
      name: "Passion – 6 Tablets", 
      sub: "$69.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/passion-6",
      category: "Female"
    },
    { 
      img: zepboundVial, 
      name: "Passion – 18 Tablets", 
      sub: "$189.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/passion-18",
      category: "Female"
    },
    { 
      img: ozempicPen, 
      name: "Passion – 12 Tablets", 
      sub: "$129.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/passion-12",
      category: "Female"
    },
    { 
      img: zepboundPen, 
      name: "Lust – 18 Tablets", 
      sub: "$169.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/lust-18",
      category: "Female"
    },
    { 
      img: semaglutideVial, 
      name: "Lust – 12 Tablets", 
      sub: "$139.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/lust-12",
      category: "Female"
    },
    { 
      img: wegovyPill, 
      name: "Lust – 6 Tablets", 
      sub: "$49.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/lust-6",
      category: "Female"
    },
    // Male Products
    { 
      img: zepboundVial, 
      name: "Overdrive Plus – 6 Tablets", 
      sub: "$79.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/overdrive-plus-6",
      category: "Male"
    },
    { 
      img: ozempicPen, 
      name: "Overdrive Plus – 12 Tablets", 
      sub: "$119.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/overdrive-plus-12",
      category: "Male"
    },
    { 
      img: semaglutideVial, 
      name: "Redpill – 6 Tablets", 
      sub: "$49.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/redpill-6",
      category: "Male"
    },
    { 
      img: wegovyPill, 
      name: "Redpill – 12 Tablets", 
      sub: "$119.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/redpill-12",
      category: "Male"
    },
    { 
      img: ozempicPen, 
      name: "Mach 1 – 18 Tablets", 
      sub: "$199.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/mach1-18",
      category: "Male"
    },
    { 
      img: zepboundPen, 
      name: "Mach 1 – 6 Tablets", 
      sub: "$69.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/mach1-6",
      category: "Male"
    },
    { 
      img: semaglutideVial, 
      name: "Mach 1 – 12 Tablets", 
      sub: "$139.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/mach1-12",
      category: "Male"
    },
    { 
      img: wegovyPill, 
      name: "Epiq Chew – 30 Tablets", 
      sub: "$79.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/epiq-chew-30",
      category: "Male"
    },
    { 
      img: zepboundVial, 
      name: "Drive Plus – 12 Tablets", 
      sub: "$179.99",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/drive-plus-12",
      category: "Male"
    },
    { 
      img: ozempicPen, 
      name: "Drive Plus – 18 Tablets", 
      sub: "$239.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/drive-plus-18",
      category: "Male"
    },
    { 
      img: zepboundPen, 
      name: "Drive Plus – 6 Tablets", 
      sub: "$109.00",
      buyNowUrl: "https://try.thelrx.com/intake/ed-fmmbgk",
      learnMorePath: "/sexual-health/drive-plus-6",
      category: "Male"
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
                Embrace Desire,
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
                  Strengthen Your Bond
                </Box>
              </Typography>
              
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
                * These statements have not been evaluated. Individual results may vary. Consult with a healthcare professional before using any products intended to enhance intimacy or sexual health
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
        {/* Female Products Section Header - ENHANCED */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
              fontWeight: 800,
              color: "#111827",
              textAlign: "center",
              mb: 2,
              letterSpacing: { xs: "-0.02em", sm: "-0.01em" },
              position: "relative",
              "&::after": {
                content: '""',
                display: "block",
                width: { xs: "80px", sm: "100px", md: "120px" },
                height: "4px",
                background: "linear-gradient(90deg, #00359E, #003B9D)",
                borderRadius: "2px",
                mx: "auto",
                mt: { xs: 2, sm: 2.5 },
                mb: 3,
              }
            }}
          >
            Female Products
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              color: "#4B5563",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 500,
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            Specially formulated for women's sexual health and intimacy
          </Typography>
        </Box>

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
            mb: 12,
          }}
        >
          {/* Map through female products */}
          {products
            .filter(product => product.category === "Female")
            .map((item, index) => (
              <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
                {/* IMAGE - Now clickable */}
                <Box
                  onClick={() => handleLearnMore(item.learnMorePath)}
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    mb: { xs: 1.5, md: 2 },
                    cursor: "pointer",
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

                {/* BADGES ROW - Category tag + Supply badge side by side */}
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  gap: 1,
                  mb: { xs: 0.75, md: 1 },
                  flexWrap: "wrap"
                }}>
                  {/* Category Tag */}
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      bgcolor: "#FCE7F3",
                      color: "#9D174D",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: "20px",
                    }}
                  />
                  
                  {/* SUPPLY BADGE WITH DOT */}
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      bgcolor: "#DCFCE7",
                      color: "#16A34A",
                      px: 1,
                      py: "2px",
                      borderRadius: "999px",
                      fontSize: "0.65rem",
                      fontWeight: 600,
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

        {/* Male Products Section Header - ENHANCED */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
              fontWeight: 800,
              color: "#111827",
              textAlign: "center",
              mb: 2,
              letterSpacing: { xs: "-0.02em", sm: "-0.01em" },
              position: "relative",
              "&::after": {
                content: '""',
                display: "block",
                width: { xs: "80px", sm: "100px", md: "120px" },
                height: "4px",
                background: "linear-gradient(90deg, #00359E, #003B9D)",
                borderRadius: "2px",
                mx: "auto",
                mt: { xs: 2, sm: 2.5 },
                mb: 3,
              }
            }}
          >
            Male Products
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              color: "#4B5563",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
              fontWeight: 500,
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            Formulated for men's sexual performance and vitality
          </Typography>
        </Box>

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
          {/* Map through male products */}
          {products
            .filter(product => product.category === "Male")
            .map((item, index) => (
              <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
                {/* IMAGE - Now clickable */}
                <Box
                  onClick={() => handleLearnMore(item.learnMorePath)}
                  sx={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    mb: { xs: 1.5, md: 2 },
                    cursor: "pointer",
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

                {/* BADGES ROW - Category tag + Supply badge side by side */}
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  gap: 1,
                  mb: { xs: 0.75, md: 1 },
                  flexWrap: "wrap"
                }}>
                  {/* Category Tag */}
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      bgcolor: "#E0F2FE",
                      color: "#0369A1",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: "20px",
                    }}
                  />
                  
                  {/* SUPPLY BADGE WITH DOT */}
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      bgcolor: "#DCFCE7",
                      color: "#16A34A",
                      px: 1,
                      py: "2px",
                      borderRadius: "999px",
                      fontSize: "0.65rem",
                      fontWeight: 600,
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