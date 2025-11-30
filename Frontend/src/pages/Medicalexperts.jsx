// Updated MedicalExperts.jsx with Medical Executives section
import React, { useState, useEffect } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Star, Circle, Menu, X } from "lucide-react"; 
import logo from "../assets/LRXLOGOS/LOGO-3.png";
import doctorImg from "../assets/images/doctorimg2.png";
import sampleVideo from "../assets/Videos/medicalexperts.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Medical Advisory Board Images
import doc1 from "../assets/images/doctorimg2.png";
import doc2 from "../assets/images/doctorimg2.png";
import doc3 from "../assets/images/doctorimg2.png";
import doc4 from "../assets/images/doctorimg2.png";

// Medical Executives Images (using same images for now - replace with actual executive images later)
import exec1 from "../assets/images/doctorimg2.png";
import exec2 from "../assets/images/doctorimg2.png";
import exec3 from "../assets/images/doctorimg2.png";
import exec4 from "../assets/images/doctorimg2.png";

// STEPS
import step1 from "../assets/images/step1.png";
import step2 from "../assets/images/step1.png";
import step3 from "../assets/images/step1.png";
import step4 from "../assets/images/step1.png";


export default function MedicalExperts() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => navigate("/");

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/AboutUs" },
    { label: "How It Works", path: "/Howitworks" },
    { label: "FAQs", path: "/FAQspage" },
    { label: "Medical Experts", path: "/Medicalexperts" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Medical Executives Data
  const medicalExecutives = [
    { 
      name: "Dr. Michael Chen", 
      title: "Chief Medical Officer", 
      bg: "#F9F8F7", 
      mt: 0,
      description: "Leading clinical strategy and medical operations"
    },
    { 
      name: "Sarah Johnson", 
      title: "VP of Medical Affairs", 
      bg: "#F0EEE9", 
      mt: { xs: 0, sm: 4 },
      description: "Overseeing physician network and quality standards"
    },
    { 
      name: "Dr. Robert Martinez", 
      title: "Director of Clinical Innovation", 
      bg: "#F9F8F7", 
      mt: 0,
      description: "Driving telehealth innovation and patient care models"
    },
    { 
      name: "Jennifer Kim", 
      title: "Head of Provider Experience", 
      bg: "#F0EEE9", 
      mt: { xs: 0, sm: 4 },
      description: "Enhancing provider tools and clinical workflows"
    },
  ];

  return (
    <Box sx={{ fontFamily: `"Inter", sans-serif` }}>

      {/* NAVBAR */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 1, sm: 1.5 },
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          backgroundColor: scrollY > 50 ? "#00359E" : "transparent",
          boxShadow: scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
          zIndex: 1100,
        }}
      >
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={handleLogoClick}>
          <Box component="img" src={logo} alt="logo" sx={{ height: { xs: 28, sm: 32, md: 36 } }} />
        </Box>

        {/* DESKTOP NAV LINKS */}
        <Box sx={{ 
          display: { xs: "none", sm: "flex" }, 
          gap: { sm: 3, md: 5 }, 
          alignItems: "center" 
        }}>
          {navLinks.map((link) => (
            <Typography
              key={link.label}
              onClick={() => handleNavigation(link.path)}
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: { sm: "0.9rem", md: "1rem" },
                color: scrollY > 50 ? "#FFFFFF" : "#747578",
                position: "relative",
                transition: "all 0.3s ease",
                "&:hover": { color: "#003B9D" },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 0,
                  height: "2px",
                  left: 0,
                  bottom: -2,
                  backgroundColor: "#8B8D8E",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                },
                "&:hover::after": { width: "100%", backgroundColor: "#003B9D" },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>

        {/* MOBILE MENU BUTTON */}
        <IconButton 
          sx={{ 
            display: { xs: "flex", sm: "none" },
            color: scrollY > 50 ? "#FFFFFF" : "#747578",
            padding: "8px"
          }}
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </IconButton>
      </Box>

      {/* MOBILE DRAWER MENU */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: "block", sm: "none" },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: "#00359E",
            color: "white",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            mb: 4,
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            pb: 2
          }}>
            <Box component="img" src={logo} alt="logo" sx={{ height: 32 }} />
            <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }}>
              <X size={24} />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                onClick={() => handleNavigation(link.path)}
                sx={{
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "white",
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    transform: "translateX(8px)"
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* CTA SECTION */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F4F5F6",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 4, md: 12 },
          py: { xs: 6, sm: 8, md: 12 },
          gap: { xs: 4, sm: 6, md: 4 },
        }}
      >
        <Box sx={{ flex: 1, width: "100%" }}>
          <Typography sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.8rem" }, 
            fontWeight: 700, 
            mb: { xs: 2, md: 3 },
            textAlign: { xs: "center", md: "left" }
          }}>
            The providers are in
          </Typography>
          <Typography sx={{ 
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, 
            mb: { xs: 3, md: 4 }, 
            lineHeight: 1.6, 
            color: "#2A2A2A",
            textAlign: { xs: "center", md: "left" }
          }}>
            Meet the team of industry-leading, board-licensed physician advisors and healthcare providers offering safe, high-quality treatment.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "Licensed medical providers in all 50 states & DC",
              "Network of professionals providing men's healthcare",
              "Average consult rating: 4.7 out of 5"
            ].map((text, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {index === 2 ? <Star color="#8B8D8E" size={20} /> : <CheckCircle color="#8B8D8E" size={20} />}
                <Typography sx={{ color: "#2A2A2A", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ 
          flex: 1, 
          display: "flex", 
          justifyContent: "center",
          width: { xs: "100%", md: "auto" }
        }}>
          <Box 
            component="img" 
            src={doctorImg} 
            alt="Doctors" 
            sx={{ 
              width: "100%", 
              maxWidth: { xs: 300, sm: 400, md: 500 },
              borderRadius: 4 
            }} 
          />
        </Box>
      </Box>

      {/* VIDEO SECTION */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F4F5F6",
          borderTopLeftRadius: { xs: 40, md: 80 },
          borderTopRightRadius: { xs: 40, md: 80 },
          mt: { xs: -8, md: -16 },
          px: { xs: 3, sm: 4, md: 12 },
          py: { xs: 6, sm: 8, md: 12 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, sm: 6, md: 8 },
          position: "relative",
        }}
      >
        <Box sx={{ 
          flex: 1, 
          display: "flex", 
          justifyContent: "center",
          width: { xs: "100%", md: "auto" }
        }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: 280, sm: 300, md: 320 },
              borderRadius: { xs: "24px", md: "40px" },
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
              aspectRatio: "9/16",
              backgroundColor: "#000",
            }}
          >
            <Box
              component="video"
              src={sampleVideo}
              controls
              autoPlay
              loop
              muted
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>

        <Box sx={{ 
          flex: 1, 
          color: "#2A2A2A",
          textAlign: { xs: "center", md: "left" }
        }}>
          <Typography sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" }, 
            fontWeight: 700, 
            mb: 2 
          }}>
            Committed to your results
          </Typography>
          <Typography sx={{ 
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.5rem" }, 
            fontWeight: 500, 
            mb: 4 
          }}>
            Best providers, best outcomes
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[
              "Rigorous vetting process to onboard new providers",
              "Potential providers reviewed individually by an internal team",
              "Licensing verification, sanction checks, and ongoing training"
            ].map((text, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Circle color="#00359E" size={16} style={{ minWidth: 16, marginTop: 2 }} />
                <Typography sx={{ textAlign: "left", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* THE LXR BY THE NUMBERS SECTION */}
      <Box sx={{ 
        width: "100%", 
        py: { xs: 8, md: 12 }, 
        px: { xs: 3, sm: 4, md: 12 }, 
        backgroundColor: "white" 
      }}>
        <Typography sx={{ 
          fontSize: { xs: "1.3rem", md: "1.5rem" }, 
          fontWeight: 650, 
          mb: { xs: 4, md: 6 },
          textAlign: { xs: "center", md: "left" }
        }}>
          <span style={{ color: "#000000" }}>the</span>
          <span style={{ color: "#00359E" }}>LXR</span>
          <span style={{ color: "#000000" }}> by the numbers</span>
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, md: 3 } }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, mb: 1 }}>
                Average consultation rating <span style={{ color: "#C28B00" }}>4.7/5 stars</span>
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mt: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} fill="#C28B00" stroke="#C28B00" size={20} />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                p: { xs: 3, md: 4 },
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, mb: 1 }}>
                5 million consultations and counting*
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#6A6A6A" }}>
                * As defined by the creation of a consultation ID in the theLXR system as of Feb. 2022
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Typography sx={{ fontSize: { xs: "0.9rem", md: "1rem" }, mb: 2 }}>
              Network of board‑licensed providers across:
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {["Dermatology", "Urology", "Psychiatry", "Therapy", "Primary Care"].map((specialty) => (
                <Typography key={specialty} sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}>
                  {specialty}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* MEDICAL ADVISORY BOARD SECTION */}
     
      <Box
        sx={{
          width: "100%",
          px: { xs: 3, sm: 4, md: 12 },
          py: { xs: 8, md: 14 },
          backgroundColor: "white",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.6rem" }, 
            fontWeight: 700, 
            mb: 3, 
            color: "#000" 
          }}>
            Our medical advisory board
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1.1rem" },
              color: "#535354",
              lineHeight: 1.7,
              mb: 3,
              maxWidth: 420,
              mx: { xs: "auto", md: 0 }
            }}
          >
            Hims was built with real doctors. Our board features advisors from Ivy League institutions,
            department heads, and researchers who are on the cutting-edge of:
          </Typography>

          <Box
            component="ul"
            sx={{
              color: "#4E4E4E",
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
              lineHeight: 1.8,
              pl: 3,
              textAlign: "left",
              display: "inline-block",
              mx: { xs: "auto", md: 0 }
            }}
          >
            <li>Hair loss</li>
            <li>Sexual wellness</li>
            <li>Skin care</li>
            <li>Mental health</li>
            <li>And more</li>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1.2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 3, sm: 2 },
            position: "relative",
          }}
        >
          {[
            { name: "Lawrence Jenkins", title: "MD, MBA | Urology", bg: "#F8F8F8", mt: 0 },
            { name: "Sandy Skotnicki", title: "MD, FRCPC | Dermatology", bg: "#F0F0F0", mt: { xs: 0, sm: 4 } },
            { name: "Dr. Crystal Broussard", title: "MD | Obesity Medicine", bg: "#F8F8F8", mt: 0 },
            { name: "Sara Perkins", title: "MD | Dermatology", bg: "#F0F0F0", mt: { xs: 0, sm: 4 } },
          ].map((doctor, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: doctor.bg,
                borderRadius: 5,
                p: 3,
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                height: { xs: 280, sm: 300, md: 320 },
                mt: doctor.mt,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography fontWeight={700} sx={{ mb: 0.5, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                  {doctor.name}
                </Typography>
                <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.85rem" }, color: "#666" }}>
                  {doctor.title}
                </Typography>
              </Box>
              <Box
                component="img"
                src={index === 0 ? doc1 : index === 1 ? doc2 : index === 2 ? doc3 : doc4}
                alt={`doctor ${index + 1}`}
                sx={{ 
                  width: "100%", 
                  borderRadius: 4, 
                  height: { xs: 180, sm: 190, md: 220 },
                  objectFit: "cover", 
                  flex: 1 
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* NEW MEDICAL EXECUTIVES SECTION */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 3, sm: 4, md: 12 },
          py: { xs: 8, md: 14 },
          backgroundColor: "#F8F9FA",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography sx={{ 
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.6rem" }, 
            fontWeight: 700, 
            mb: 3, 
            color: "#000" 
          }}>
            Our medical executives
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1.1rem" },
              color: "#535354",
              lineHeight: 1.7,
              mb: 3,
              maxWidth: 420,
              mx: { xs: "auto", md: 0 }
            }}
          >
            Our leadership team brings decades of healthcare experience and innovation to drive the future of telemedicine and patient care.
          </Typography>

          <Box
            component="ul"
            sx={{
              color: "#4E4E4E",
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
              lineHeight: 1.8,
              pl: 3,
              textAlign: "left",
              display: "inline-block",
              mx: { xs: "auto", md: 0 }
            }}
          >
            <li>Clinical strategy and innovation</li>
            <li>Medical operations excellence</li>
            <li>Provider network development</li>
            <li>Quality assurance and standards</li>
            <li>Patient care innovation</li>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1.2,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 3, sm: 2 },
            position: "relative",
          }}
        >
          {medicalExecutives.map((executive, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F8F8F8" : "#F0F0F0",
                borderRadius: 5,
                p: 3,
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                height: { xs: 320, sm: 340, md: 360 },
                mt: executive.mt,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography fontWeight={700} sx={{ mb: 0.5, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                  {executive.name}
                </Typography>
                <Typography sx={{ 
                  fontSize: { xs: "0.8rem", md: "0.85rem" }, 
                  color: "#00359E",
                  fontWeight: 600,
                  mb: 1 
                }}>
                  {executive.title}
                </Typography>
                <Typography sx={{ 
                  fontSize: { xs: "0.75rem", md: "0.8rem" }, 
                  color: "#666",
                  lineHeight: 1.4
                }}>
                  {executive.description}
                </Typography>
              </Box>
              <Box
                component="img"
                src={index === 0 ? exec1 : index === 1 ? exec2 : index === 2 ? exec3 : exec4}
                alt={`executive ${index + 1}`}
                sx={{ 
                  width: "100%", 
                  borderRadius: 4, 
                  height: { xs: 200, sm: 210, md: 230 },
                  objectFit: "cover", 
                  flex: 1 
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      {/* ⭐ Testimonial Section */}
<Box
  sx={{
    width: "100%",
    py: { xs: 10, md: 14 },
    px: { xs: 3, sm: 4, md: 12 },
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  }}
>
  <Typography
    sx={{
      fontSize: { xs: "2rem", md: "2.8rem" },
      lineHeight: 1.2,
      fontWeight: 700,
      mb: 2,
    }}
  >
    Real love from real customers
  </Typography>

  <Typography
    sx={{
      fontSize: { xs: "0.75rem", md: "0.85rem" },
      color: "#8A8A8A",
      mb: 8,
    }}
  >
    Customer results have not been independently verified. Individual results will vary.
  </Typography>

  {/* ⭐ Slider */}
  <Slider
    dots={true}
    infinite={true}
    speed={600}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3500}
    arrows={false}
  >
    {/* Slide 1 */}
    <Box sx={{ px: { xs: 1, md: 10 } }}>
      <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.7rem" },
            lineHeight: 1.6,
            fontStyle: "italic",
            color: "#2E2E2E",
            mb: 4,
          }}
        >
          "I thought about buying retinol from one of the major skincare companies,
          but it was anything but affordable. Then one day I realized Hims offers a
          tretinoin-based Rx anti-aging solution at a fraction of the cost, all from
          the comfort of my couch, on my phone."
        </Typography>

        <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
          Aaron, 32
        </Typography>

        <Typography sx={{ fontSize: "0.85rem", color: "#777" }}>
          Verified Hims Skin review
        </Typography>
      </Box>
    </Box>

    {/* Slide 2 */}
    <Box sx={{ px: { xs: 1, md: 10 } }}>
      <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.7rem" },
            lineHeight: 1.6,
            fontStyle: "italic",
            color: "#2E2E2E",
            mb: 4,
          }}
        >
          "The process was super easy and actually enjoyable.
          The treatment results were better than I expected.
          Would absolutely recommend it."
        </Typography>

        <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
          Michael, 29
        </Typography>

        <Typography sx={{ fontSize: "0.85rem", color: "#777" }}>
          Verified Review
        </Typography>
      </Box>
    </Box>

    {/* Slide 3 */}
    <Box sx={{ px: { xs: 1, md: 10 } }}>
      <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.7rem" },
            lineHeight: 1.6,
            fontStyle: "italic",
            color: "#2E2E2E",
            mb: 4,
          }}
        >
          "Affordable, effective, and convenient.
          I’ve tried other brands but this is the only one that worked consistently for me."
        </Typography>

        <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mb: 0.5 }}>
          David, 41
        </Typography>

        <Typography sx={{ fontSize: "0.85rem", color: "#777" }}>
          Verified Customer
        </Typography>
      </Box>
    </Box>
  </Slider>
</Box>
{/* ⭐ Pixel Perfect Hims “Better healthcare” Section */}
<Box
  sx={{
    width: "100%",
    py: { xs: 8, md: 10 },
    textAlign: "center",
    bgcolor: "#ffffff",
  }}
>
  {/* 🔥 Title */}
  <Typography
    sx={{
      fontSize: { xs: "28px", md: "36px" },
      fontWeight: 500,
      color: "#222222",
      mb: { xs: 6, md: 8 },
    }}
  >
    Better healthcare{" "}
    <span style={{ fontWeight: 300, color: "#555555" }}>made simple</span>
  </Typography>

  {/* 🟣 Circle Cards Grid */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "repeat(4, 1fr)",
      },
      gap: { xs: 6, md: 5 },
      maxWidth: "1150px",
      mx: "auto",
    }}
  >
    {/* 🔵 CARD 1 */}
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: 215,
          height: 215,
          borderRadius: "50%",
          background: "#F2F6FA",
          mx: "auto",
          mb: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="img" src={step1} sx={{ width: "125px" }} />
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#1C1C1C",
          mb: 0.5,
        }}
      >
        Answer a few questions
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#6E6E6E",
          maxWidth: "210px",
          mx: "auto",
        }}
      >
        Tell us about your health and goals
      </Typography>
    </Box>

    {/* 🟣 CARD 2 */}
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: 215,
          height: 215,
          borderRadius: "50%",
          background: "#F2F6FA",
          mx: "auto",
          mb: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="img" src={step2} sx={{ width: "125px" }} />
      </Box>

      <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#1C1C1C", mb: 0.5 }}>
        Get a personalized treatment plan
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#6E6E6E",
          maxWidth: "210px",
          mx: "auto",
        }}
      >
        A licensed provider will review your info and recommend the best
      </Typography>
    </Box>

    {/* 🟡 CARD 3 */}
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: 215,
          height: 215,
          borderRadius: "50%",
          background: "#F2F6FA",
          mx: "auto",
          mb: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="img" src={step3} sx={{ width: "125px" }} />
      </Box>

      <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#1C1C1C", mb: 0.5 }}>
        Free shipping
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#6E6E6E",
          maxWidth: "210px",
          mx: "auto",
        }}
      >
        All prescription treatment ships free, if prescribed
      </Typography>
    </Box>

    {/* 🟢 CARD 4 */}
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: 215,
          height: 215,
          borderRadius: "50%",
          background: "#F2F6FA",
          mx: "auto",
          mb: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="img" src={step4} sx={{ width: "125px" }} />
      </Box>

      <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#1C1C1C", mb: 0.5 }}>
        Free ongoing care
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#6E6E6E",
          maxWidth: "210px",
          mx: "auto",
        }}
      >
        All ongoing visits are free, anytime
      </Typography>
    </Box>
  </Box>
</Box>


    </Box>
  );
}