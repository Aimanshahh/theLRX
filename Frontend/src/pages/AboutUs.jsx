import React, { useState } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import videoFile from "../assets/Videos/motion2Fast_Abstract_pharmaceutical_laboratory_background_vide_0.mp4";

// Import images for mosaic cards
import img1 from "../assets/Aboutus/img4.png";
import img2 from "../assets/Aboutus/img1.png";
import img3 from "../assets/Aboutus/img3.png";
import img4 from "../assets/Aboutus/img5.png";
import img5 from "../assets/Aboutus/img2.png";

// Import your logo images
import logo from "../assets/LRXLOGOS/LOGO-3.png";
import floatingLogo from "../assets/LRXLOGOS/LOGO-1.png"; // Add this import for the floating logo

export default function AboutUs() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Updated CardBlock component with sx prop and imagePosition support
  const CardBlock = ({ title, image, size = "large", sx, imagePosition = "right bottom" }) => {
    const isLarge = size === "large";

    return (
      <Box
        sx={{
          position: "relative",
          borderRadius: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
          overflow: "hidden",
          height: { 
            xs: isLarge ? "280px" : "200px", 
            sm: isLarge ? "350px" : "220px", 
            md: isLarge ? "400px" : "250px", 
            lg: isLarge ? "450px" : "280px" 
          },
          width: "100%",
          backgroundColor: "#B0C4DE",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          margin: 0,
          ...sx, // Spread the sx prop here
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            position: "absolute",
            bottom: 0,
            right: isLarge ? "0" : "-5px",
            height: "100%",
            width: "auto",
            objectFit: "contain",
            objectPosition: imagePosition, // Use the imagePosition prop
            zIndex: 1,
          }}
        />

        {/* TITLE - Enhanced with better font and styling */}
        <Typography
          sx={{
            position: "absolute",
            top: { 
              xs: isLarge ? 20 : 16, 
              sm: isLarge ? 24 : 18, 
              md: isLarge ? 28 : 20, 
              lg: isLarge ? 32 : 22 
            },
            left: { 
              xs: isLarge ? 20 : 16, 
              sm: isLarge ? 24 : 18, 
              md: isLarge ? 28 : 20, 
              lg: isLarge ? 32 : 22 
            },
            fontSize: { 
              xs: isLarge ? "24px" : "20px", 
              sm: isLarge ? "28px" : "22px", 
              md: isLarge ? "32px" : "24px", 
              lg: isLarge ? "36px" : "26px" 
            },
            fontWeight: 900,
            color: "#000000",
            zIndex: 2,
            lineHeight: 1.05,
            maxWidth: { 
              xs: isLarge ? "180px" : "140px", 
              sm: isLarge ? "220px" : "160px", 
              md: isLarge ? "260px" : "180px", 
              lg: isLarge ? "300px" : "200px" 
            },
            fontFamily: `"Montserrat", "Inter", sans-serif`,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            background: "linear-gradient(180deg, #000000 0%, #333333 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ width: "100%", position: "relative", overflowX: "hidden" }}>
      {/* ====== FIXED NAVBAR ====== */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          padding: { xs: "8px 16px", sm: "12px 24px", md: "16px 32px", lg: "16px 40px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 1, sm: 1.5, md: 2 },
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Logo Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.25, md: 1.5 },
            padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px", lg: "10px 20px" },
            borderRadius: { xs: "8px", sm: "10px", md: "12px" },
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            },
          }}
          onClick={handleLogoClick}
        >
          {/* Logo Image */}
          <Box
            component="img"
            src={logo}
            alt="TheLRX Logo"
            sx={{
              height: { xs: "20px", sm: "24px", md: "28px", lg: "30px" },
              width: "auto",
              objectFit: "contain",
            }}
          />

          {/* Explore Tag */}
          <Typography
            sx={{
              fontSize: { xs: "0.5rem", sm: "0.6rem", md: "0.65rem", lg: "0.7rem" },
              fontWeight: "600",
              color: "#FFFFFF",
              backgroundColor: "#00359E",
              padding: { xs: "1px 3px", sm: "2px 5px", md: "3px 6px", lg: "3px 7px" },
              borderRadius: { xs: "4px", sm: "6px", md: "8px" },
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Explore
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: { md: 1.5, lg: 3 },
            padding: { md: "6px 12px", lg: "8px 18px" },
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          {[
            { label: 'Home', path: '/' },
            { label: "FAQs", path: "/faqs" },
            { label: "How It Works", path: "/how-it-works" },
            { label: "Medical Experts", path: "/medical-experts" },
          ].map((link) => (
            <Typography
              key={link.label}
              component="span"
              onClick={() => handleNavigation(link.path)}
              sx={{
                color: "#333333",
                fontSize: { md: "0.75rem", lg: "0.85rem" },
                fontWeight: "500",
                cursor: "pointer",
                position: "relative",
                padding: "4px 6px",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                borderRadius: "6px",
                '&:hover': {
                  color: "#00359E",
                  backgroundColor: "rgba(0, 53, 158, 0.05)",
                  '&::after': {
                    width: "100%",
                  }
                },
                '&::after': {
                  content: '""',
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0%",
                  height: "2px",
                  backgroundColor: "#00359E",
                  transition: "width 0.3s ease",
                }
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            cursor: "pointer",
            padding: { xs: "4px", sm: "6px" },
            borderRadius: "6px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
            color: "#333333",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "scale(1.05)",
            }
          }}
          onClick={toggleMobileMenu}
        >
          <Menu size={20} />
        </IconButton>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", md: "none" },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: 260, sm: 280 },
            backgroundColor: "#FFFFFF",
            color: "#333333",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          {/* Drawer Header */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            mb: { xs: 3, sm: 4 },
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            pb: { xs: 1.5, sm: 2 }
          }}>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.25,
                cursor: "pointer"
              }}
              onClick={() => {
                handleLogoClick();
                toggleMobileMenu();
              }}
            >
              <Box component="img" src={logo} alt="logo" sx={{ height: { xs: 24, sm: 28 } }} />
              <Typography
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem" },
                  fontWeight: "600",
                  color: "#FFFFFF",
                  backgroundColor: "#00359E",
                  padding: { xs: "2px 4px", sm: "3px 6px" },
                  borderRadius: "6px",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                Explore
              </Typography>
            </Box>
            <IconButton onClick={toggleMobileMenu} sx={{ color: "#333333" }}>
              <X size={20} />
            </IconButton>
          </Box>

          {/* Mobile Navigation Links */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2 } }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'How It Works', path: '/how-it-works' },
              { label: 'Medical Experts', path: '/medical-experts' },
              { label: 'Blog', path: '/blog' },
              { label: 'FAQs', path: '/faqs' }
            ].map((link) => (
              <Typography
                key={link.label}
                onClick={() => {
                  handleNavigation(link.path);
                  toggleMobileMenu();
                }}
                sx={{
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "#333333",
                  py: { xs: 1.25, sm: 1.5 },
                  px: { xs: 1.5, sm: 2 },
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  border: "1px solid transparent",
                  "&:hover": {
                    backgroundColor: "rgba(0, 53, 158, 0.05)",
                    color: "#00359E",
                    border: "1px solid rgba(0, 53, 158, 0.1)",
                    transform: "translateX(5px)"
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* Main Content with Top Margin */}
      <Box sx={{ 
        mt: { 
          xs: "52px",  // xs: 0-599px
          sm: "62px",  // sm: 600-899px
          md: "72px",  // md: 900-1199px
          lg: "80px"   // lg: 1200px+
        } 
      }}>
        {/* ====== UPPER BLUE SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            height: { 
              xs: "300px", 
              sm: "380px", 
              md: "480px", 
              lg: "550px",
              xl: "650px" 
            },
            background: "linear-gradient(75deg, #747578, #00359E, #8B8D8E, #003B9D)",
            backgroundSize: "300% 300%",
            animation: "gradientMove 12s ease infinite",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "60px", sm: "-20px", md: "100px", lg: "100px" },
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          {/* ====== STATIC TEXT - POSITIONED MUCH HIGHER ====== */}
          <Typography
            sx={{
              position: "absolute",
              top: { 
                xs: "40px",
                sm: "60px",
                md: "80px",
                lg: "100px",
                xl: "120px"
              },
              left: "50%",
              transform: "translateX(-50%)",
              color: "#FFFFFF",
              fontWeight: 900,
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: { 
                xs: "1px", 
                sm: "1.5px", 
                md: "2px", 
                lg: "2.5px",
                xl: "3px" 
              },
              zIndex: 1050,
              fontSize: { 
                xs: "1.8rem", 
                sm: "2.4rem", 
                md: "3.2rem", 
                lg: "3.8rem",
                xl: "4.4rem" 
              },
              textShadow: "0 4px 8px rgba(0,0,0,0.7), 0 6px 20px rgba(0,0,0,0.5)",
              whiteSpace: { xs: "normal", sm: "nowrap" },
              width: "95%",
              maxWidth: "1200px",
              lineHeight: { xs: 1.2, sm: 1.1 },
              px: { xs: 2, sm: 3 },
              fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
            }}
          >
            Experience the Power of
          </Typography>

          {/* ====== FLOATING LOGO - LARGER AND MORE DOMINANT ====== */}
          <Box
            component="img"
            src={floatingLogo}
            alt="LiquidRX Logo"
            sx={{
              position: "absolute",
              top: { 
                xs: "110px",
                sm: "150px",
                md: "190px",
                lg: "230px",
                xl: "270px"
              },
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1100,
              height: { 
                xs: "80px", 
                sm: "100px", 
                md: "140px", 
                lg: "210px",
                xl: "240px" 
              },
              width: "auto",
              maxWidth: { xs: "85%", sm: "80%", md: "85%", lg: "70%" },
              objectFit: "contain",
              filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))",
              animation: "float 5s ease-in-out infinite",
            }}
          />

          {/* ====== SCROLLING TEXT - ADJUSTED POSITION ====== */}
          <Box
            sx={{
              position: "absolute",
              bottom: { 
                xs: "60px",
                sm: "80px",
                md: "100px",
                lg: "120px",
                xl: "140px"
              },
              left: 0,
              right: 0,
              zIndex: 900,
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                animation: "scrollSmooth 25s linear infinite",
                color: "rgba(255,255,255,0.25)",
                fontSize: { 
                  xs: "14px", 
                  sm: "16px", 
                  md: "20px", 
                  lg: "24px",
                  xl: "28px" 
                },
                fontWeight: { xs: 800, md: 900 },
                letterSpacing: { 
                  xs: "2px", 
                  sm: "3px", 
                  md: "4px", 
                  lg: "6px",
                  xl: "7px" 
                },
                textTransform: "uppercase",
                paddingRight: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
                lineHeight: 1.2,
              }}
            >
              WE CARE ABOUT YOUR HEALTH • WE CARE ABOUT YOUR HEALTH • WE CARE ABOUT YOUR HEALTH •
            </Box>
            
            <Box
              sx={{
                display: "inline-block",
                animation: "scrollSmooth 25s linear infinite",
                color: "rgba(255,255,255,0.25)",
                fontSize: { 
                  xs: "14px", 
                  sm: "16px", 
                  md: "20px", 
                  lg: "24px",
                  xl: "28px" 
                },
                fontWeight: { xs: 800, md: 900 },
                letterSpacing: { 
                  xs: "2px", 
                  sm: "3px", 
                  md: "4px", 
                  lg: "6px",
                  xl: "7px" 
                },
                textTransform: "uppercase",
                paddingRight: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
                lineHeight: 1.2,
              }}
            >
              WE CARE ABOUT YOUR HEALTH • WE CARE ABOUT YOUR HEALTH • WE CARE ABOUT YOUR HEALTH •
            </Box>
          </Box>
        </Box>

        {/* ====== LARGER WHITE CONTENT SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            position: "relative",
            zIndex: 20,
            marginTop: {
              xs: "-30px",
              sm: "-40px",
              md: "-50px",
              lg: "-60px",
              xl: "-70px",
            },
            borderRadius: {
              xs: "30px 30px 0 0",
              sm: "40px 40px 0 0",
              md: "50px 50px 0 0",
              lg: "60px 60px 0 0",
              xl: "70px 70px 0 0",
            },
            boxShadow: "0 -5px 20px rgba(0,0,0,0.1)",
            minHeight: {
              xs: "60vh",
              sm: "70vh",
              md: "80vh",
              lg: "90vh",
              xl: "100vh",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "90%",
                sm: "88%",
                md: "85%",
                lg: "80%",
                xl: "1200px",
              },
              margin: "0 auto",
              padding: {
                xs: "60px 0",
                sm: "80px 0",
                md: "100px 0",
                lg: "120px 0",
                xl: "140px 0",
              },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "100%",
            }}
          >
            <Typography
              component="div"
              sx={{
                color: "#000000",
                fontWeight: { xs: 700, sm: 800, md: 900 },
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.8rem",
                  md: "2.2rem",
                  lg: "2.8rem",
                  xl: "3.2rem",
                },
                lineHeight: { xs: 1.3, sm: 1.4, md: 1.5, lg: 1.6 },
                maxWidth: {
                  xs: "100%",
                  sm: "95%",
                  md: "90%",
                  lg: "85%",
                  xl: "80%",
                },
                margin: "0 auto",
                px: { xs: 1, sm: 2, md: 3 },
                letterSpacing: { xs: "-0.2px", sm: "-0.3px", md: "-0.4px" },
              }}
            >
              Our goal is simple: to help people take control of their health through care
              that feels{" "}
              <Box
                component="span"
                sx={{
                  color: "#00359E",
                  fontWeight: { xs: 800, sm: 900 },
                  display: "inline",
                }}
              >
                personal, accessible, and human
              </Box>{" "}
              — built around real needs, not one-size-fits-all solutions. We focus on
              delivering treatment that{" "}
              <Box
                component="span"
                sx={{
                  color: "#00359E",
                  fontWeight: { xs: 800, sm: 900 },
                  display: "inline",
                }}
              >
                puts you in control
              </Box>{" "}
              and removes the friction from getting care, so improving your health feels{" "}
              <Box
                component="span"
                sx={{
                  color: "#00359E",
                  fontWeight: { xs: 800, sm: 900 },
                  display: "inline",
                }}
              >
                clear, simple, and achievable.
              </Box>
            </Typography>

            <Box
              sx={{
                mt: { xs: 4, sm: 6, md: 8, lg: 10 },
                width: "60px",
                height: "4px",
                backgroundColor: "#00359E",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            />
          </Box>
        </Box>

        {/* ====== VIDEO SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            backgroundColor: "#FFFFFF",
            paddingTop: { xs: "40px", sm: "60px", md: "80px", lg: "100px", xl: "120px" },
            paddingBottom: { xs: "40px", sm: "60px", md: "80px", lg: "100px", xl: "120px" },
          }}
        >
          {/* Video Container */}
          <Box
            sx={{
              width: "100%",
              borderRadius: 0,
              overflow: "hidden",
              position: "relative",
              height: { 
                xs: "250px", 
                sm: "350px", 
                md: "450px", 
                lg: "550px",
                xl: "650px" 
              },
            }}
          >
            {/* Video Element */}
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Text */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                px: { xs: 2, sm: 3 },
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: { xs: 800, sm: 900, md: 900, lg: 900 },
                  fontSize: { 
                    xs: "1.8rem",
                    sm: "2.5rem", 
                    md: "3.2rem", 
                    lg: "4rem",
                    xl: "4.5rem" 
                  },
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: { xs: "1px", sm: "2px", md: "3px", lg: "4px", xl: "5px" },
                  lineHeight: 1,
                  px: { xs: 2, sm: 3, md: 4 },
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.7), 0 6px 20px rgba(0, 0, 0, 0.5)",
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  padding: "12px 20px",
                  borderRadius: "4px",
                }}
              >
                THE{" "}
                <span style={{ color: "#ffffff" }}>LIQUID</span>{" "}
                <span style={{ color: "#FFFFFF" }}>RX</span>{" "}
                WAS BUILT FOR YOU
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ====== HIMS STYLE ABOUT SECTION ====== */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "900px" },
            margin: { 
              xs: "60px auto 80px auto", 
              sm: "80px auto 100px auto", 
              md: "100px auto 120px auto",
              lg: "120px auto 140px auto" 
            },
            px: { xs: 2, sm: 3 },
            fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
          }}
        >
          {/* BIG HEADING */}
          <Typography
            sx={{
              fontSize: { 
                xs: "28px", 
                sm: "36px", 
                md: "48px", 
                lg: "56px",
                xl: "64px" 
              },
              fontWeight: 700,
              lineHeight: { 
                xs: "34px", 
                sm: "42px", 
                md: "56px", 
                lg: "64px",
                xl: "72px" 
              },
              color: "#000",
            }}
          >
            Your health journey is unique.            <br />
            Treatment should be too.          </Typography>

          {/* PARAGRAPH BELOW */}
          <Typography
            sx={{
              mt: { xs: 3, sm: 4, md: 4 },
              fontSize: { 
                xs: "15px", 
                sm: "16px", 
                md: "18px", 
                lg: "19px",
                xl: "20px" 
              },
              fontWeight: { xs: 500, sm: 530 },
              lineHeight: { 
                xs: "22px", 
                sm: "24px", 
                md: "26px", 
                lg: "28px",
                xl: "32px" 
              },
              color: "#2A2A2A",
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%", xl: "740px" },
              mx: "auto",
            }}
          >
            Whether you’re exploring the latest medical options or choosing a reliable, proven solution, LiquidRX helps you get care that’s built around you. We connect you with a licensed healthcare professional in your state who reviews your health background and concerns in a private, one-on-one consultation. Based on that evaluation, your provider designs a treatment plan tailored specifically to your body, lifestyle, and goals. And the support doesn’t end once your order arrives — our Care Team is always available through the platform, giving you access to guidance and answers whenever you need them, at no extra cost.
          </Typography>
        </Box>

        {/* ====== MOSAIC CARDS SECTION WITH PROPER HEIGHT ALIGNMENT ====== */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "1200px", xl: "1500px" },
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "4px",
            px: { xs: 2, sm: 3, md: 4 },
            pb: { xs: 4, sm: 5, md: 6 },
            alignItems: "stretch",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "auto 1fr",
              gap: "4px",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Weight Loss - LARGE card */}
            <CardBlock
              title="Weight Loss"
              image={img1}
              size="large"
              sx={{
                height: { 
                  xs: "280px", 
                  sm: "350px", 
                  md: "400px", 
                  lg: "450px" 
                },
                "& img": {
                  position: "absolute",
                  bottom: { xs: "-30px", sm: "-40px", md: "-50px", lg: "-60px" },
                  left: { xs: "50px", sm: "80px", md: "120px", lg: "150px" },
                  height: "auto",
                  width: { xs: "80%", sm: "85%", md: "90%", lg: "100%" },
                  maxHeight: { xs: "200%", sm: "220%", md: "240%", lg: "250%" },
                  objectFit: "contain",
                  objectPosition: "left bottom",
                  zIndex: 1,
                }
              }}
            />

            {/* This Box wraps Skincare + Mental Health - SMALL cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateRows: "1fr 1fr",
                gap: "4px",
                height: "100%",
              }}
            >
              {/* Skincare - SMALL card */}
              <CardBlock
                title="Skin care"
                image={img3}
                size="small"
                sx={{
                  height: "200px",
                  "& img": {
                    position: "absolute",
                    bottom: { xs: "-30px", sm: "-40px", md: "-45px", lg: "-50px" },
                    left: { xs: "120px", sm: "150px", md: "180px", lg: "230px" },
                    height: { xs: "280px", sm: "320px", md: "350px", lg: "380px" },
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    objectPosition: "left bottom",
                    zIndex: 1,
                  }
                }}
              />

              {/* Sexual function - SMALL card */}
              <CardBlock
                title="Sexual function"
                image={img4}
                size="small"
                sx={{
                  height: "200px",
                  "& img": {
                    position: "absolute",
                    bottom: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
                    left: { xs: "40px", sm: "60px", md: "75px", lg: "90px" },
                    height: { xs: "200px", sm: "220px", md: "240px", lg: "250px" },
                    width: "auto",
                    maxWidth: { xs: "85%", sm: "87%", md: "89%", lg: "90%" },
                    objectFit: "contain",
                    objectPosition: "left bottom",
                    zIndex: 1,
                  }
                }}
              />
            </Box>
          </Box>

          {/* RIGHT COLUMN */}
          <Box
            sx={{
              display: "grid",
              gridTemplateRows: "auto 1fr",
              gap: "4px",
              backgroundColor: "#FFFFFF",
            }}
          >
            {/* Weight Loss - LARGE card */}
            <CardBlock
              title="Precision BioActives"
              image={img2}
              size="large"
              sx={{
                height: { 
                  xs: "280px", 
                  sm: "350px", 
                  md: "400px", 
                  lg: "450px" 
                },
              }}
            />

            {/* Hair Growth - LARGE card */}
            <CardBlock
              title="Hair growth"
              image={img5}
              size="large"
              sx={{
                height: "400px",
                "& img": {
                  position: "absolute",
                  bottom: { xs: "-60px", sm: "-80px", md: "-100px", lg: "-113px" },
                  left: { xs: "0px", sm: "5px", md: "8px", lg: "11px" },
                  height: "auto",
                  width: { xs: "95%", sm: "97%", md: "99%", lg: "100%" },
                  maxHeight: { xs: "150%", sm: "170%", md: "185%", lg: "200%" },
                  objectFit: "contain",
                  objectPosition: "left bottom",
                  zIndex: 1,
                }
              }}
            />
          </Box>
        </Box>

        {/* ====== SUCCESS STANDARD SECTION ====== */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "900px" },
            margin: { 
              xs: "60px auto 80px auto", 
              sm: "80px auto 100px auto", 
              md: "100px auto 120px auto",
              lg: "120px auto 140px auto" 
            },
            px: { xs: 2, sm: 3 },
            fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
          }}
        >
          {/* BIG HEADING */}
          <Typography
            sx={{
              fontSize: { 
                xs: "28px", 
                sm: "36px", 
                md: "48px", 
                lg: "56px",
                xl: "64px" 
              },
              fontWeight: 700,
              lineHeight: { 
                xs: "34px", 
                sm: "42px", 
                md: "56px", 
                lg: "64px",
                xl: "72px" 
              },
              color: "#000",
            }}
          >
            Good results are what we do.
            <br />
            Every single time.
          </Typography>

          {/* PARAGRAPH BELOW */}
          <Typography
            sx={{
              mt: { xs: 3, sm: 4, md: 4 },
              fontSize: { 
                xs: "15px", 
                sm: "16px", 
                md: "18px", 
                lg: "19px",
                xl: "20px" 
              },
              fontWeight: { xs: 500, sm: 530 },
              lineHeight: { 
                xs: "22px", 
                sm: "24px", 
                md: "26px", 
                lg: "28px",
                xl: "32px" 
              },
              color: "#2A2A2A",
              maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%", xl: "740px" },
              mx: "auto",
            }}
          >
            At LiquidRX, we think everyone should get great results. Our treatments work, and our team is here to help you. We make a plan just for you and support you every step of the way. We've already helped thousands of people feel better. Your journey to feeling good starts with us—we use proven methods, new ideas, and real care to help you succeed.
          </Typography>
        </Box>

        {/* ====== REVIEW CARDS SECTION ====== */}
        <Box
          sx={{
            maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "1000px", xl: "1200px" },
            margin: { 
              xs: "40px auto 60px auto", 
              sm: "60px auto 80px auto", 
              md: "70px auto 100px auto",
              lg: "80px auto 120px auto" 
            },
            px: { xs: 2, sm: 3 },
          }}
        >
          {/* Section Header */}
          <Typography
            sx={{
              fontSize: { 
                xs: "24px", 
                sm: "28px", 
                md: "32px", 
                lg: "36px",
                xl: "40px" 
              },
              fontWeight: 700,
              lineHeight: { 
                xs: "30px", 
                sm: "34px", 
                md: "38px", 
                lg: "42px",
                xl: "48px" 
              },
              color: "#000",
              textAlign: "center",
              mb: { xs: 3, sm: 4, md: 5, lg: 6 },
              fontFamily: `"Inter", sans-serif`,
            }}
          >
            What our members say
          </Typography>

          {/* Cards Container */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { 
                xs: "1fr", 
                sm: "1fr", 
                md: "1fr 1fr", 
                lg: "1fr 1fr 1fr" 
              },
              gap: { xs: 2.5, sm: 3, md: 3.5, lg: 4 },
              alignItems: "stretch",
            }}
          >
            {/* Card 1 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: { xs: "12px", sm: "14px", md: "16px" },
                padding: { 
                  xs: "20px", 
                  sm: "24px", 
                  md: "28px", 
                  lg: "32px" 
                },
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                }
              }}
            >
              {/* Review Text */}
              <Typography
                sx={{
                  fontSize: { 
                    xs: "14px", 
                    sm: "15px", 
                    md: "16px", 
                    lg: "17px" 
                  },
                  fontWeight: 400,
                  lineHeight: { 
                    xs: "20px", 
                    sm: "22px", 
                    md: "24px", 
                    lg: "26px" 
                  },
                  color: "#2A2A2A",
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                "LiquidRX made getting treatment so simple. The medical provider really listened to my concerns and the 24/7 care team support is incredible."
              </Typography>

              {/* Reviewer Info */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    fontWeight: 600,
                    color: "#000",
                    mb: 0.5,
                  }}
                >
                  Michael T.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    fontWeight: 400,
                    color: "#666",
                  }}
                >
                  Verified Customer
                </Typography>
              </Box>
            </Box>

            {/* Card 2 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: { xs: "12px", sm: "14px", md: "16px" },
                padding: { 
                  xs: "20px", 
                  sm: "24px", 
                  md: "28px", 
                  lg: "32px" 
                },
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                }
              }}
            >
              {/* Review Text */}
              <Typography
                sx={{
                  fontSize: { 
                    xs: "14px", 
                    sm: "15px", 
                    md: "16px", 
                    lg: "17px" 
                  },
                  fontWeight: 400,
                  lineHeight: { 
                    xs: "20px", 
                    sm: "22px", 
                    md: "24px", 
                    lg: "26px" 
                  },
                  color: "#2A2A2A",
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                "I was skeptical about online healthcare, but LiquidRX proved me wrong. The personalized treatment plan actually worked for my specific needs."
              </Typography>

              {/* Reviewer Info */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    fontWeight: 600,
                    color: "#000",
                    mb: 0.5,
                  }}
                >
                  Sarah M.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    fontWeight: 400,
                    color: "#666",
                  }}
                >
                  Verified Customer
                </Typography>
              </Box>
            </Box>

            {/* Card 3 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: { xs: "12px", sm: "14px", md: "16px" },
                padding: { 
                  xs: "20px", 
                  sm: "24px", 
                  md: "28px", 
                  lg: "32px" 
                },
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                }
              }}
            >
              {/* Review Text */}
              <Typography
                sx={{
                  fontSize: { 
                    xs: "14px", 
                    sm: "15px", 
                    md: "16px", 
                    lg: "17px" 
                  },
                  fontWeight: 400,
                  lineHeight: { 
                    xs: "20px", 
                    sm: "22px", 
                    md: "24px", 
                    lg: "26px" 
                  },
                  color: "#2A2A2A",
                  mb: { xs: 2, sm: 2.5, md: 3 },
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                "The convenience of messaging my care team anytime is game-changing. I feel supported throughout my entire health journey."
              </Typography>

              {/* Reviewer Info */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    fontWeight: 600,
                    color: "#000",
                    mb: 0.5,
                  }}
                >
                  James L.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    fontWeight: 400,
                    color: "#666",
                  }}
                >
                  Verified Customer
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ====== KEYFRAME ANIMATIONS ====== */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes scrollSmooth {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes float {
            0% {
              transform: translateX(-50%) translateY(0px);
            }
            50% {
              transform: translateX(-50%) translateY(-15px);
            }
            100% {
              transform: translateX(-50%) translateY(0px);
            }
          }

          @media (max-width: 600px) {
            @keyframes scrollSmooth {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          }
        `}
      </style>
    </Box>
  );
}