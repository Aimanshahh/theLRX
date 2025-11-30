import React, { useState } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import manImg from "../assets/images/aboutusimg.png"; 
import videoFile from "../assets/Videos/medicalexperts.mp4";

// Import images for mosaic cards
import img1 from "../assets/images/finalimg1.png";
import img2 from "../assets/images/finalimg2.png";
import img3 from "../assets/images/finalimg3.png";
import img4 from "../assets/images/finalimg4.png";
import img5 from "../assets/images/finalimg5.png";

// Import your logo image
import logo from "../assets/LRXLOGOS/LOGO-3.png";

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

  // CardBlock component
  const CardBlock = ({ title, image, gradient, size = "large" }) => {
    const isLarge = size === "large";

    return (
      <Box
        sx={{
          position: "relative",
          borderRadius: "32px",
          overflow: "hidden",
          height: isLarge ? "360px" : "220px",
          width: "100%",
          background: gradient,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
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
            objectPosition: "right bottom",
            zIndex: 1,
          }}
        />

        {/* TITLE */}
        <Typography
          sx={{
            position: "absolute",
            top: isLarge ? 26 : 18,
            left: isLarge ? 26 : 18,
            fontSize: isLarge ? "32px" : "22px",
            fontWeight: 700,
            color: "#ffffff",
            zIndex: 2,
            lineHeight: 1.05,
            maxWidth: isLarge ? "240px" : "180px",
            textShadow: "0px 3px 6px rgba(0,0,0,0.25)",
            fontFamily: `"Inter", sans-serif`,
          }}
        >
          {title}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {/* ====== FIXED NAVBAR ====== */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          padding: { xs: "8px 20px", sm: "12px 32px", md: "16px 40px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
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
            gap: 1.5,
            padding: { xs: "6px 12px", sm: "8px 16px", md: "10px 20px" },
            borderRadius: "12px",
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
              height: { xs: "22px", sm: "26px", md: "30px" },
              width: "auto",
              objectFit: "contain",
            }}
          />

          {/* Explore Tag */}
          <Typography
            sx={{
              fontSize: { xs: "0.55rem", sm: "0.65rem", md: "0.7rem" },
              fontWeight: "600",
              color: "#FFFFFF",
              backgroundColor: "#00359E",
              padding: { xs: "2px 5px", sm: "3px 7px" },
              borderRadius: "8px",
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
            gap: { md: 2, lg: 3 },
            padding: { md: "6px 14px", lg: "8px 18px" },
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          {[
            { label: 'Home', path: '/' },
            { label: 'How It Works', path: '/Howitworks' },
            { label: 'Medical Experts', path: '/Medicalexperts' },
            { label: 'Blog', path: '/Blog' },
            { label: 'FAQs', path: '/FAQspage' }
          ].map((link) => (
            <Typography
              key={link.label}
              component="span"
              onClick={() => handleNavigation(link.path)}
              sx={{
                color: "#333333",
                fontSize: { md: "0.8rem", lg: "0.85rem" },
                fontWeight: "500",
                cursor: "pointer",
                position: "relative",
                padding: "4px 8px",
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
            padding: "6px",
            borderRadius: "8px",
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
            width: 280,
            backgroundColor: "#FFFFFF",
            color: "#333333",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Drawer Header */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            mb: 4,
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            pb: 2
          }}>
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.5,
                cursor: "pointer"
              }}
              onClick={() => {
                handleLogoClick();
                toggleMobileMenu();
              }}
            >
              <Box component="img" src={logo} alt="logo" sx={{ height: 28 }} />
              <Typography
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  backgroundColor: "#00359E",
                  padding: "3px 6px",
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'How It Works', path: '/Howitworks' },
              { label: 'Medical Experts', path: '/Medicalexperts' },
              { label: 'Blog', path: '/Blog' },
              { label: 'FAQs', path: '/FAQspage' }
            ].map((link) => (
              <Typography
                key={link.label}
                onClick={() => handleNavigation(link.path)}
                sx={{
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "1rem",
                  color: "#333333",
                  py: 1.5,
                  px: 2,
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
      <Box sx={{ mt: { xs: "60px", sm: "70px", md: "80px" } }}>
        {/* ====== UPPER BLUE SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 400, sm: 450, md: 550, lg: 650 },
            background: "linear-gradient(75deg, #747578, #00359E, #8B8D8E, #003B9D)",
            backgroundSize: "300% 300%",
            animation: "gradientMove 12s ease infinite",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "80px", md: "100px" },
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          {/* ====== STATIC TEXT - ADJUSTED POSITION ====== */}
          <Typography
            sx={{
              position: "absolute",
              bottom: { 
                xs: 220, 
                sm: 250, 
                md: 300, 
                lg: 380 
              },
              left: "50%",
              transform: "translateX(-50%)",
              color: "#FFFFFF",
              fontWeight: "900",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: { 
                xs: "1px", 
                sm: "1.5px", 
                md: "2px", 
                lg: "3px" 
              },
              zIndex: 950,
              fontSize: { 
                xs: "1.3rem", 
                sm: "1.6rem", 
                md: "2rem", 
                lg: "2.5rem" 
              },
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              whiteSpace: "nowrap",
              width: "95%",
              maxWidth: "1200px",
              lineHeight: { xs: 1.3, md: 1.4 },
            }}
          >
            Experience the Power of
          </Typography>

          {/* ====== SCROLLING TEXT - ADJUSTED POSITION ====== */}
          <Box
            sx={{
              position: "absolute",
              bottom: { 
                xs: 100, 
                sm: 120, 
                md: 140, 
                lg: 160 
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
                  xs: "18px", 
                  sm: "22px", 
                  md: "28px", 
                  lg: "34px" 
                },
                fontWeight: "800",
                letterSpacing: { 
                  xs: "4px", 
                  sm: "6px", 
                  md: "7px", 
                  lg: "8px" 
                },
                textTransform: "uppercase",
                paddingRight: { xs: "30px", md: "50px" },
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
                  xs: "18px", 
                  sm: "22px", 
                  md: "28px", 
                  lg: "34px" 
                },
                fontWeight: "800",
                letterSpacing: { 
                  xs: "4px", 
                  sm: "6px", 
                  md: "7px", 
                  lg: "8px" 
                },
                textTransform: "uppercase",
                paddingRight: { xs: "30px", md: "50px" },
                lineHeight: 1.2,
              }}
            >
              WE CARE ABOUT YOUR HEALTH • WE CARE ABOUT YOUR HEALTH • WE CARE ABOUT YOUR HEALTH •
            </Box>
          </Box>

          {/* ====== MAN IMAGE - ADJUSTED SIZE AND POSITION ====== */}
          <Box
            component="img"
            src={manImg}
            alt="Man"
            sx={{
              position: "absolute",
              bottom: 0,
              height: { 
                xs: 300, 
                sm: 350, 
                md: 420, 
                lg: 500 
              },
              zIndex: 1000,
              pointerEvents: "none",
              userSelect: "none",
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* ====== LARGER WHITE CONTENT SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            position: "relative",
            zIndex: 20,
            marginTop: { xs: "-40px", sm: "-50px", md: "-60px", lg: "-70px" },
            borderRadius: { 
              xs: "40px 40px 0 0", 
              sm: "50px 50px 0 0", 
              md: "60px 60px 0 0",
              lg: "70px 70px 0 0"
            },
            boxShadow: "0 -5px 20px rgba(0,0,0,0.1)",
            minHeight: { xs: "80vh", sm: "85vh", md: "90vh", lg: "100vh" },
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "90%", sm: "85%", md: "80%", lg: "1100px" },
              margin: "0 auto",
              padding: { 
                xs: "100px 0 80px", 
                sm: "120px 0 100px", 
                md: "140px 0 120px", 
                lg: "160px 0 140px" 
              },
              textAlign: "center",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Single Paragraph with Colored Words like Hims */}
            <Typography
              sx={{
                color: "#000000",
                fontWeight: "1000",
                fontSize: { 
                 xs: "1.4rem",      
                 sm: "1.7rem",      
                 md: "2.1rem",      
                 lg: "2.5rem"        
                },
                lineHeight: { xs: 1.6, sm: 1.7, md: 1.8 },
                maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
                margin: "0 auto",
              }}
            >
              We're on a mission to help everyone 
              <Box component="span" sx={{ color: "#00359E", fontWeight: "700" }}> live a healthier, happier life </Box>
              through accessible, personalized healthcare that puts 
              <Box component="span" sx={{ color: "#00359E", fontWeight: "700" }}> you first </Box>
              and makes feeling better 
              <Box component="span" sx={{ color: "#00359E", fontWeight: "700" }}> easier than ever. </Box>
            </Typography>
          </Box>
        </Box>

       

        {/* ====== HIMS STYLE ABOUT SECTION ====== */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "900px",
            margin: { xs: "80px auto 100px auto", md: "120px auto 140px auto" },
            px: 2,
            fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
          }}
        >
          {/* BIG HEADING */}
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "64px" },
              fontWeight: 700,
              lineHeight: { xs: "44px", md: "72px" },
              color: "#000",
            }}
          >
            Your health is personal.
            <br />
            Now, so is your care.
          </Typography>

          {/* PARAGRAPH BELOW */}
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "17px", md: "20px" },
              fontWeight: 530,
              lineHeight: { xs: "26px", md: "32px" },
              color: "#2A2A2A",
              maxWidth: "740px",
              mx: "auto",
            }}
          >
            Whether you're looking for an innovative treatment or a tried-and-true
            generic option, TheLRX connects you with a licensed medical
            provider in your state to assess your symptoms and health history on a
            1-to-1 basis to determine what is right for you. Your provider
            recommends a personalized treatment plan based on your unique needs and
            goals. This customer-centric approach doesn't stop at delivery—through
            our platform you can message your Care Team 24/7 at no
            additional cost.
          </Typography>
        </Box>

         {/* ====== VIDEO SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            backgroundColor: "#FFFFFF",
            paddingTop: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
            paddingBottom: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
          }}
        >
          {/* Video Container - Full Width */}
          <Box
            sx={{
              width: "100%",
              borderRadius: { xs: "0", sm: "0", md: "0", lg: "0" },
              overflow: "hidden",
              position: "relative",
              height: { xs: "400px", sm: "500px", md: "600px", lg: "700px" },
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

            {/* Overlay Text - Clean like Hims */}
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
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "700",
                  fontSize: { 
                    xs: "1.8rem", 
                    sm: "2.5rem", 
                    md: "3.2rem", 
                    lg: "4rem" 
                  },
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: { xs: "1px", sm: "2px", md: "3px", lg: "4px" },
                  lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
                  padding: { xs: "0 20px", sm: "0 30px", md: "0 40px" },
                }}
              >
                THE LRX WAS BUILT FOR YOU
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ====== MOSAIC CARDS SECTION ====== */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1500px",
            mx: "auto",
            display: "flex",
            gap: 2,
            alignItems: "flex-start",
            px: 2,
            pb: 2,
          }}
        >
          {/* LEFT COLUMN */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            {/* Large top left card */}
            <CardBlock
              title="Sexual performance"
              image={img1}
              gradient="linear-gradient(135deg, #D7E7FF 0%, #F5F7FA 100%)"
              size="large"
            />

            {/* Small Card 1 */}
            <CardBlock
              title="Skin care"
              image={img3}
              gradient="linear-gradient(135deg, #D8F1FF 0%, #F4F8FF 100%)"
              size="small"
            />

            {/* Small Card 2 */}
            <CardBlock
              title="Mental health"
              image={img4}
              gradient="linear-gradient(135deg, #E8DBFF 0%, #F7F5FF 100%)"
              size="small"
            />
          </Box>

          {/* RIGHT COLUMN */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            {/* Large top right card */}
            <CardBlock
              title="Weight loss"
              image={img2}
              gradient="linear-gradient(135deg, #E9DFFF 0%, #F7F7FB 100%)"
              size="large"
            />

            {/* New TALL Hair growth card */}
            <Box
              sx={{
                position: "relative",
                borderRadius: "32px",
                overflow: "hidden",
                height: "444px",
                width: "100%",
                background: "linear-gradient(135deg, #E9DFFF 0%, #F7F7FB 100%)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={img5}
                alt="Hair growth"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: "0",
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  objectPosition: "right bottom",
                  zIndex: 1,
                }}
              />

              {/* TITLE */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 26,
                  left: 26,
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#ffffff",
                  zIndex: 2,
                  lineHeight: 1.05,
                  maxWidth: "240px",
                  textShadow: "0px 3px 6px rgba(0,0,0,0.25)",
                  fontFamily: `"Inter", sans-serif`,
                }}
              >
                Hair growth
              </Typography>
            </Box>
          </Box>
        </Box>



        {/* ====== SUCCESS STANDARD SECTION ====== */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "900px",
            margin: { xs: "80px auto 100px auto", md: "120px auto 140px auto" },
            px: 2,
            fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
          }}
        >
          {/* BIG HEADING */}
          <Typography
            sx={{
              fontSize: { xs: "36px", md: "64px" },
              fontWeight: 700,
              lineHeight: { xs: "44px", md: "72px" },
              color: "#000",
            }}
          >
            Success is the standard.
            <br />
            Not the exception.
          </Typography>

          {/* PARAGRAPH BELOW */}
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "17px", md: "20px" },
              fontWeight: 530,
              lineHeight: { xs: "26px", md: "32px" },
              color: "#2A2A2A",
              maxWidth: "740px",
              mx: "auto",
            }}
          >
            At TheLRX, we believe exceptional results should be accessible to everyone. 
            Our proven treatments and dedicated care teams work together to deliver 
            consistent, measurable outcomes. With personalized plans tailored to your 
            specific needs and continuous support from our medical professionals, 
            we've helped thousands achieve their health goals. Your success story 
            starts here—backed by science, powered by innovation, and delivered with care.
          </Typography>
        </Box>

        {/* ====== REVIEW CARDS SECTION ====== */}
        <Box
          sx={{
            maxWidth: "1200px",
            margin: { xs: "60px auto 80px auto", md: "80px auto 120px auto" },
            px: 2,
          }}
        >
          {/* Section Header */}
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "40px" },
              fontWeight: 700,
              lineHeight: { xs: "36px", md: "48px" },
              color: "#000",
              textAlign: "center",
              mb: { xs: 4, md: 6 },
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
                md: "1fr 1fr 1fr" 
              },
              gap: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            {/* Card 1 */}
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: { xs: "24px", md: "32px" },
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
                  fontSize: { xs: "16px", md: "17px" },
                  fontWeight: 400,
                  lineHeight: { xs: "24px", md: "26px" },
                  color: "#2A2A2A",
                  mb: 3,
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                "TheLRX made getting treatment so simple. The medical provider really listened to my concerns and the 24/7 care team support is incredible."
              </Typography>

              {/* Reviewer Info */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    mb: 0.5,
                  }}
                >
                  Michael T.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
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
                borderRadius: "16px",
                padding: { xs: "24px", md: "32px" },
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
                  fontSize: { xs: "16px", md: "17px" },
                  fontWeight: 400,
                  lineHeight: { xs: "24px", md: "26px" },
                  color: "#2A2A2A",
                  mb: 3,
                  flex: 1,
                  fontStyle: "italic",
                }}
              >
                "I was skeptical about online healthcare, but TheLRX proved me wrong. The personalized treatment plan actually worked for my specific needs."
              </Typography>

              {/* Reviewer Info */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    mb: 0.5,
                  }}
                >
                  Sarah M.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
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
                borderRadius: "16px",
                padding: { xs: "24px", md: "32px" },
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
                  fontSize: { xs: "16px", md: "17px" },
                  fontWeight: 400,
                  lineHeight: { xs: "24px", md: "26px" },
                  color: "#2A2A2A",
                  mb: 3,
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
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    mb: 0.5,
                  }}
                >
                  James L.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
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
        `}
      </style>
    </Box>
  );
}