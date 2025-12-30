// Updated MedicalExperts.jsx with Medical Executives section - RESPONSIVE VERSION
import React, { useState, useEffect } from "react";
import { Box, Typography, Drawer, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Star, Circle, Menu, X, Stethoscope, Brain, MessageCircle, Heart, Activity } from "lucide-react"; 
import logo from "../assets/LRXLOGOS/LOGO-3.png";
import doctorImg from "../assets/images/docimg7-removebg-preview.png";
import sampleVideo from "../assets/Videos/WhatsApp Video 2025-12-23 at 10.36.15 PM.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Medical Advisory Board Images
import doc1 from "../assets/images/medicaldoc1-removebg-preview.png";
import doc2 from "../assets/images/medicaldoc2-removebg-preview.png";
import doc3 from "../assets/images/WhatsApp_Image_2025-12-23_at_10.04.09_PM-removebg-preview.png";
import doc4 from "../assets/images/docimg8-removebg-preview.png";

// Medical Executives Images
import exec1 from "../assets/images/doctorimg2.png";
import exec2 from "../assets/images/docimg3-removebg-preview.png";
import exec3 from "../assets/images/docimg6-removebg-preview.png";
import exec4 from "../assets/images/docimg4-removebg-preview.png";

// STEPS
import step1 from "../assets/medical experts/img1removed.png";
import step2 from "../assets/medical experts/imgremoved (1).png";
import step3 from "../assets/medical experts/img1removed.png";
import step4 from "../assets/medical experts/imgremoved4.png";


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
    { label: "About Us", path: "/about-us" },               // Changed from "/AboutUs"
  { label: "FAQs", path: "/faqs" },                       // Changed from "/FAQspage"
  { label: "How It Works", path: "/how-it-works" },       // Changed from "/Howitworks"
  { label: "Blog", path: "/blog" },                       // Changed from "/Blog"
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dotsClass: "slick-dots",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
  };

  // Medical Executives Data
  const medicalExecutives = [
    { 
      name: "Dr. Michael Chen", 
      title: "Chief Medical Officer", 
      bg: "#F8F8F8", 
      mt: 0,
      description: "Leading clinical strategy and medical operations"
    },
    { 
      name: "Sarah Johnson", 
      title: "VP of Medical Affairs", 
      bg: "#F0F0F0", 
      mt: { xs: 0, sm: 4 },
      description: "Overseeing physician network and quality standards"
    },
    { 
      name: "Dr. Robert Martinez", 
      title: "Director of Clinical Innovation", 
      bg: "#F8F8F8", 
      mt: 0,
      description: "Driving telehealth innovation and patient care models"
    },
    { 
      name: "Jennifer Kim", 
      title: "Head of Provider Experience", 
      bg: "#F0F0F0", 
      mt: { xs: 0, sm: 4 },
      description: "Enhancing provider tools and clinical workflows"
    },
  ];

  return (
    <Box sx={{ 
      fontFamily: `"Inter", sans-serif`,
      overflowX: "hidden",
      width: "100%"
    }}>

      {/* NAVBAR */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { 
            xs: "16px", 
            sm: "24px", 
            md: "32px", 
            lg: "48px", 
            xl: "64px" 
          },
          py: { xs: "12px", sm: "16px", md: "20px" },
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          backgroundColor: scrollY > 50 ? "#00359E" : "transparent",
          boxShadow: scrollY > 50 ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
          zIndex: 1100,
        }}
      >
        <Box sx={{ 
          cursor: "pointer", 
          display: "flex", 
          alignItems: "center" 
        }} onClick={handleLogoClick}>
          <Box 
            component="img" 
            src={logo} 
            alt="logo" 
            sx={{ 
              height: { 
                xs: "28px", 
                sm: "32px", 
                md: "36px",
                lg: "40px" 
              } 
            }} 
          />
        </Box>

        {/* DESKTOP NAV LINKS */}
        <Box sx={{ 
          display: { xs: "none", md: "flex" }, 
          gap: { md: "20px", lg: "32px", xl: "40px" }, 
          alignItems: "center" 
        }}>
          {navLinks.map((link) => (
            <Typography
              key={link.label}
              onClick={() => handleNavigation(link.path)}
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                fontSize: { 
                  md: "0.9rem", 
                  lg: "1rem", 
                  xl: "1.05rem" 
                },
                color: scrollY > 50 ? "#FFFFFF" : "#747578",
                position: "relative",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                "&:hover": { 
                  color: scrollY > 50 ? "#FFFFFF" : "#003B9D",
                  transform: "translateY(-2px)"
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: 0,
                  height: "2px",
                  left: 0,
                  bottom: -4,
                  backgroundColor: scrollY > 50 ? "#FFFFFF" : "#8B8D8E",
                  transition: "width 0.3s ease, background-color 0.3s ease",
                },
                "&:hover::after": { 
                  width: "100%", 
                  backgroundColor: scrollY > 50 ? "#FFFFFF" : "#003B9D" 
                },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>

        {/* MOBILE MENU BUTTON */}
        <IconButton 
          sx={{ 
            display: { xs: "flex", md: "none" },
            color: scrollY > 50 ? "#FFFFFF" : "#747578",
            padding: { xs: "6px", sm: "8px" }
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
          display: { xs: "block", md: "none" },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: "280px", sm: "320px" },
            backgroundColor: "#00359E",
            color: "white",
            padding: { xs: "16px", sm: "20px" },
          },
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            mb: { xs: 3, sm: 4 },
            borderBottom: "1px solid rgba(255,255,255,0.2)",
            pb: { xs: 2, sm: 3 }
          }}>
            <Box 
              component="img" 
              src={logo} 
              alt="logo" 
              sx={{ 
                height: { xs: "32px", sm: "36px" } 
              }} 
            />
            <IconButton onClick={toggleMobileMenu} sx={{ color: "white" }}>
              <X size={24} />
            </IconButton>
          </Box>

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: { xs: 2, sm: 3 } 
          }}>
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                onClick={() => handleNavigation(link.path)}
                sx={{
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: { 
                    xs: "1rem", 
                    sm: "1.1rem" 
                  },
                  color: "white",
                  py: { xs: 1.25, sm: 1.5 },
                  px: { xs: 1.5, sm: 2 },
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  border: "1px solid transparent",
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
          flexDirection: { 
            xs: "column", 
            md: "row" 
          },
          alignItems: { 
            xs: "center", 
            md: "flex-start" 
          },
          justifyContent: "space-between",
          px: { 
            xs: "16px", 
            sm: "24px", 
            md: "32px", 
            lg: "48px", 
            xl: "64px" 
          },
          py: { 
            xs: "40px", 
            sm: "60px", 
            md: "80px", 
            lg: "100px" 
          },
          gap: { 
            xs: "32px", 
            sm: "48px", 
            md: "32px", 
            lg: "48px" 
          },
        }}
      >
        <Box sx={{ 
          flex: 1, 
          width: "100%",
          maxWidth: { 
            xs: "100%", 
            sm: "100%", 
            md: "50%" 
          }
        }}>
          <Typography sx={{ 
            fontSize: { 
              xs: "1.75rem", 
              sm: "2rem", 
              md: "2.5rem", 
              lg: "2.8rem", 
              xl: "3rem" 
            }, 
            fontWeight: 700, 
            mb: { xs: 3, md: 4 },
            textAlign: { xs: "center", md: "left" },
            lineHeight: { 
              xs: 1.2, 
              sm: 1.3, 
              md: 1.35 
            }
          }}>
            The providers are in
          </Typography>
          <Typography sx={{ 
            fontSize: { 
              xs: "1rem", 
              sm: "1.05rem", 
              md: "1.1rem", 
              lg: "1.2rem" 
            }, 
            mb: { xs: 4, md: 5 }, 
            lineHeight: 1.6, 
            color: "#2A2A2A",
            textAlign: { xs: "center", md: "left" }
          }}>
            Meet the team of industry-leading, board-licensed physician advisors and healthcare providers offering safe, high-quality treatment.
          </Typography>

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: { xs: 2, md: 3 } 
          }}>
            {[
              "Licensed medical providers in all 50 states & DC",
              "Network of professionals providing men's healthcare",
              "Average consult rating: 4.7 out of 5"
            ].map((text, index) => (
              <Box key={index} sx={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: { xs: 2, md: 3 } 
              }}>
                {index === 2 ? 
                  <Star color="#8B8D8E" size={24} /> : 
                  <CheckCircle color="#8B8D8E" size={24} />
                }
                <Typography sx={{ 
                  color: "#2A2A2A", 
                  fontSize: { 
                    xs: "0.95rem", 
                    sm: "1rem", 
                    md: "1.05rem" 
                  },
                  lineHeight: 1.5
                }}>
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
          width: "100%",
          maxWidth: { 
            xs: "100%", 
            sm: "100%", 
            md: "50%" 
          }
        }}>
          <Box 
            component="img" 
            src={doctorImg} 
            alt="Doctors" 
            sx={{ 
              width: "100%", 
              maxWidth: { 
                xs: "300px", 
                sm: "400px", 
                md: "100%", 
                lg: "500px", 
                xl: "550px" 
              },
              height: "auto",
              borderRadius: { 
                xs: "16px", 
                sm: "20px", 
                md: "24px" 
              },
              objectFit: "cover"
            }} 
          />
        </Box>
      </Box>

      {/* VIDEO SECTION */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F4F5F6",
          borderTopLeftRadius: { 
            xs: "32px", 
            sm: "48px", 
            md: "64px", 
            lg: "80px" 
          },
          borderTopRightRadius: { 
            xs: "32px", 
            sm: "48px", 
            md: "64px", 
            lg: "80px" 
          },
          mt: { xs: -6, sm: -8, md: -12, lg: -16 },
          px: { 
            xs: "16px", 
            sm: "24px", 
            md: "32px", 
            lg: "48px", 
            xl: "64px" 
          },
          py: { 
            xs: "48px", 
            sm: "64px", 
            md: "80px", 
            lg: "96px" 
          },
          display: "flex",
          flexDirection: { 
            xs: "column-reverse", 
            md: "row" 
          },
          alignItems: "center",
          gap: { 
            xs: "32px", 
            sm: "48px", 
            md: "64px", 
            lg: "80px" 
          },
          position: "relative",
        }}
      >
        <Box sx={{ 
          flex: 1, 
          color: "#2A2A2A",
          textAlign: { xs: "center", md: "left" }
        }}>
          <Typography sx={{ 
            fontSize: { 
              xs: "1.5rem", 
              sm: "1.8rem", 
              md: "2rem", 
              lg: "2.3rem", 
              xl: "2.5rem" 
            }, 
            fontWeight: 700, 
            mb: { xs: 2, md: 3 } 
          }}>
            Committed to your results
          </Typography>
          <Typography sx={{ 
            fontSize: { 
              xs: "1.1rem", 
              sm: "1.2rem", 
              md: "1.3rem", 
              lg: "1.5rem" 
            }, 
            fontWeight: 500, 
            mb: { xs: 4, md: 5 } 
          }}>
            Best providers, best outcomes
          </Typography>

          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: { xs: 2.5, md: 3 } 
          }}>
            {[
              "Rigorous vetting process to onboard new providers",
              "Potential providers reviewed individually by an internal team",
              "Licensing verification, sanction checks, and ongoing training"
            ].map((text, index) => (
              <Box key={index} sx={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: { xs: 2, md: 3 } 
              }}>
                <Circle 
                  color="#00359E" 
                  size={20} 
                  style={{ 
                    minWidth: "20px", 
                    marginTop: "4px" 
                  }} 
                />
                <Typography sx={{ 
                  textAlign: "left", 
                  fontSize: { 
                    xs: "0.95rem", 
                    sm: "1rem", 
                    md: "1.05rem" 
                  },
                  lineHeight: 1.5
                }}>
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
            sx={{
              width: "100%",
              maxWidth: { 
                xs: "280px", 
                sm: "320px", 
                md: "300px", 
                lg: "320px", 
                xl: "340px" 
              },
              borderRadius: { 
                xs: "20px", 
                sm: "24px", 
                md: "32px", 
                lg: "40px" 
              },
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
              sx={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover" 
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* THE LXR BY THE NUMBERS SECTION - UPDATED WITH ICONS */}
      <Box sx={{ 
        width: "100%", 
        py: { 
          xs: "48px", 
          sm: "64px", 
          md: "80px", 
          lg: "96px" 
        }, 
        px: { 
          xs: "16px", 
          sm: "24px", 
          md: "32px", 
          lg: "48px", 
          xl: "64px" 
        }, 
        backgroundColor: "white" 
      }}>
        <Typography sx={{ 
          fontSize: { 
            xs: "1.3rem", 
            sm: "1.4rem", 
            md: "1.5rem", 
            lg: "1.6rem" 
          }, 
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
            gridTemplateColumns: { 
              xs: "1fr", 
              sm: "1fr", 
              md: "1fr 1fr" 
            },
            gap: { 
              xs: "24px", 
              sm: "32px", 
              md: "40px", 
              lg: "48px" 
            },
          }}
        >
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: { 
              xs: "20px", 
              sm: "24px", 
              md: "28px" 
            } 
          }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: { 
                  xs: "12px", 
                  sm: "16px", 
                  md: "20px" 
                },
                p: { 
                  xs: "20px", 
                  sm: "24px", 
                  md: "28px", 
                  lg: "32px" 
                },
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ 
                fontSize: { 
                  xs: "0.95rem", 
                  sm: "1rem", 
                  md: "1.05rem" 
                }, 
                mb: 2 
              }}>
                Average consultation rating <span style={{ color: "#C28B00" }}>4.7/5 stars</span>
              </Typography>
              <Box sx={{ 
                display: "flex", 
                gap: 1, 
                mt: 2, 
                justifyContent: { 
                  xs: "center", 
                  sm: "flex-start" 
                } 
              }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    fill="#C28B00" 
                    stroke="#C28B00" 
                    size={24} 
                  />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: { 
                  xs: "12px", 
                  sm: "16px", 
                  md: "20px" 
                },
                p: { 
                  xs: "20px", 
                  sm: "24px", 
                  md: "28px", 
                  lg: "32px" 
                },
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ 
                fontSize: { 
                  xs: "0.95rem", 
                  sm: "1rem", 
                  md: "1.05rem" 
                }, 
                mb: 2 
              }}>
                5 million consultations and counting*
              </Typography>
              <Typography sx={{ 
                fontSize: { 
                  xs: "0.8rem", 
                  sm: "0.85rem" 
                }, 
                color: "#6A6A6A",
                lineHeight: 1.4
              }}>
                * As defined by the creation of a consultation ID in the theLXR system as of Feb. 2022
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: { 
                xs: "12px", 
                sm: "16px", 
                md: "20px" 
              },
              p: { 
                xs: "20px", 
                sm: "24px", 
                md: "28px", 
                lg: "32px" 
              },
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Typography sx={{ 
              fontSize: { 
                xs: "0.95rem", 
                sm: "1rem", 
                md: "1.05rem" 
              }, 
              mb: 3,
              fontWeight: 600
            }}>
              Network of board‑licensed providers across:
            </Typography>

            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: { 
                xs: "16px", 
                sm: "18px" 
              } 
            }}>
              {[
                { specialty: "Dermatology", Icon: Activity, color: "#FF6B6B" },
                { specialty: "Urology", Icon: Heart, color: "#4ECDC4" },
                { specialty: "Psychiatry", Icon: Brain, color: "#45B7D1" },
                { specialty: "Therapy", Icon: MessageCircle, color: "#96CEB4" },
                { specialty: "Primary Care", Icon: Stethoscope, color: "#FFEAA7" }
              ].map((item) => (
                <Box 
                  key={item.specialty} 
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: { xs: 2, sm: 3 },
                    padding: "10px 12px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(0, 53, 158, 0.03)",
                    border: "1px solid rgba(0, 53, 158, 0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0, 53, 158, 0.05)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                    }
                  }}
                >
                  <Box sx={{ 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: "36px", sm: "40px" },
                    height: { xs: "36px", sm: "40px" },
                    borderRadius: "10px",
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    padding: "8px"
                  }}>
                    <item.Icon size={20} strokeWidth={2.5} />
                  </Box>
                  <Typography sx={{ 
                    fontSize: { 
                      xs: "0.95rem", 
                      sm: "1rem", 
                      md: "1.05rem" 
                    },
                    fontWeight: 600,
                    color: "#2A2A2A"
                  }}>
                    {item.specialty}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* MEDICAL ADVISORY BOARD SECTION */}
      <Box
        sx={{
          width: "100%",
          px: {
            xs: "16px",
            sm: "24px",
            md: "32px",
            lg: "48px",
            xl: "64px"
          },
          py: {
            xs: "48px",
            sm: "64px",
            md: "80px",
            lg: "112px"
          },
          backgroundColor: "white",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          gap: {
            xs: "40px",
            sm: "56px",
            md: "64px",
            lg: "80px"
          },
        }}
      >
        <Box sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" }
        }}>
          <Typography sx={{
            fontSize: {
              xs: "1.875rem",
              sm: "2.25rem",
              md: "2.75rem",
              lg: "3rem",
              xl: "3.25rem"
            },
            fontWeight: 800,
            mb: { xs: 3, md: 4 },
            color: "#000",
            letterSpacing: "-0.02em",
            lineHeight: 1.2
          }}>
            Our medical <Box component="span" sx={{ color: "#00359E" }}>advisory</Box> 
            <br></br>
            board
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.05rem",
                sm: "1.15rem",
                md: "1.2rem",
                lg: "1.25rem"
              },
              color: "#2D3748",
              lineHeight: 1.7,
              mb: { xs: 4, md: 5 },
              maxWidth: "480px",
              mx: { xs: "auto", md: 0 },
              fontWeight: 500
            }}
          >
            Hims was built with real doctors. Our board features advisors from Ivy League institutions,
            department heads, and researchers who are on the cutting-edge of:
          </Typography>

          <Box
            component="ul"
            sx={{
              color: "#4E4E4E",
              fontSize: {
                xs: "1.15rem",
                sm: "1.25rem",
                md: "1.35rem",
                lg: "1.4rem"
              },
              lineHeight: 1.9,
              pl: { xs: 3, md: 4 },
              textAlign: "left",
              display: "inline-block",
              mx: { xs: "auto", md: 0 },
              fontWeight: 600,
              listStylePosition: "inside",
              "& li": {
                mb: { xs: 2, sm: 2.5, md: 3 },
                paddingLeft: "8px",
                position: "relative"
              }
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
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr"
            },
            gap: {
              xs: "20px",
              sm: "16px",
              md: "20px",
              lg: "24px"
            },
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
                borderRadius: {
                  xs: "12px",
                  sm: "16px",
                  md: "20px"
                },
                p: {
                  xs: "20px",
                  sm: "24px",
                  md: "28px"
                },
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                height: {
                  xs: "300px",
                  sm: "320px",
                  md: "340px",
                  lg: "360px"
                },
                mt: doctor.mt,
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
                }
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography fontWeight={700} sx={{
                  mb: 1,
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.15rem",
                    md: "1.2rem"
                  },
                  color: "#000"
                }}>
                  {doctor.name}
                </Typography>
                <Typography sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem"
                  },
                  color: "#00359E", // CHANGED FROM #666 TO #00359E
                  fontWeight: 600 // CHANGED FROM 500 TO 600
                }}>
                  {doctor.title}
                </Typography>
              </Box>
              <Box
                component="img"
                src={index === 0 ? doc1 : index === 1 ? doc2 : index === 2 ? doc3 : doc4}
                alt={`doctor ${index + 1}`}
                sx={{
                  width: "100%",
                  borderRadius: {
                    xs: "8px",
                    sm: "12px",
                    md: "16px"
                  },
                  height: {
                    xs: "200px",
                    sm: "220px",
                    md: "240px"
                  },
                  objectFit: "cover",
                  flex: 1,
                  display: "block"
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
          px: {
            xs: "16px",
            sm: "24px",
            md: "32px",
            lg: "48px",
            xl: "64px"
          },
          py: {
            xs: "48px",
            sm: "64px",
            md: "80px",
            lg: "112px"
          },
          backgroundColor: "#F8F9FA",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          gap: {
            xs: "40px",
            sm: "56px",
            md: "64px",
            lg: "80px"
          },
        }}
      >
        <Box sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" }
        }}>
          <Typography sx={{
            fontSize: {
              xs: "1.875rem",
              sm: "2.25rem",
              md: "2.75rem",
              lg: "3rem",
              xl: "3.25rem"
            },
            fontWeight: 800,
            mb: { xs: 3, md: 4 },
            color: "#000",
            letterSpacing: "-0.02em",
            lineHeight: 1.2
          }}>
            Our medical <Box component="span" sx={{ color: "#00359E" }}>executives</Box>
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.05rem",
                sm: "1.15rem",
                md: "1.2rem",
                lg: "1.25rem"
              },
              color: "#2D3748",
              lineHeight: 1.7,
              mb: { xs: 4, md: 5 },
              maxWidth: "480px",
              mx: { xs: "auto", md: 0 },
              fontWeight: 400
            }}
          >
            Our leadership team brings decades of healthcare experience and innovation to drive the future of telemedicine and patient care.
          </Typography>

          <Box
            component="ul"
            sx={{
              color: "#4E4E4E",
              fontSize: {
                xs: "1.15rem",
                sm: "1.25rem",
                md: "1.35rem",
                lg: "1.4rem"
              },
              lineHeight: 1.9,
              pl: { xs: 3, md: 4 },
              textAlign: "left",
              display: "inline-block",
              mx: { xs: "auto", md: 0 },
              fontWeight: 600,
              listStylePosition: "inside",
              "& li": {
                mb: { xs: 2, sm: 2.5, md: 3 },
                paddingLeft: "8px",
                position: "relative"
              }
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
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr"
            },
            gap: {
              xs: "20px",
              sm: "16px",
              md: "20px",
              lg: "24px"
            },
            position: "relative",
          }}
        >
          {medicalExecutives.map((executive, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? "#F8F8F8" : "#F0F0F0",
                borderRadius: {
                  xs: "12px",
                  sm: "16px",
                  md: "20px"
                },
                p: {
                  xs: "20px",
                  sm: "24px",
                  md: "28px"
                },
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                height: {
                  xs: "300px",
                  sm: "320px",
                  md: "340px",
                  lg: "360px"
                },
                mt: executive.mt,
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
                }
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography fontWeight={700} sx={{
                  mb: 1,
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.15rem",
                    md: "1.2rem"
                  },
                  color: "#000"
                }}>
                  {executive.name}
                </Typography>
                <Typography sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                    md: "1rem"
                  },
                  color: "#00359E",
                  fontWeight: 600
                }}>
                  {executive.title}
                </Typography>
              </Box>
              <Box
                component="img"
                src={index === 0 ? exec1 : index === 1 ? exec2 : index === 2 ? exec3 : exec4}
                alt={`executive ${index + 1}`}
                sx={{
                  width: "100%",
                  borderRadius: {
                    xs: "8px",
                    sm: "12px",
                    md: "16px"
                  },
                  height: {
                    xs: "200px",
                    sm: "220px",
                    md: "240px"
                  },
                  objectFit: "cover",
                  flex: 1,
                  display: "block"
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
          py: { 
            xs: "48px", 
            sm: "64px", 
            md: "80px", 
            lg: "112px" 
          },
          px: { 
            xs: "16px", 
            sm: "24px", 
            md: "32px", 
            lg: "48px", 
            xl: "64px" 
          },
          textAlign: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: { 
              xs: "1.75rem", 
              sm: "2rem", 
              md: "2.3rem", 
              lg: "2.6rem", 
              xl: "2.8rem" 
            },
            lineHeight: 1.2,
            fontWeight: 700,
            mb: 3,
          }}
        >
          Real love from real customers
        </Typography>

        <Typography
          sx={{
            fontSize: { 
              xs: "0.8rem", 
              sm: "0.85rem", 
              md: "0.9rem" 
            },
            color: "#8A8A8A",
            mb: { 
              xs: "48px", 
              sm: "64px", 
              md: "80px" 
            },
          }}
        >
          Customer results have not been independently verified. Individual results will vary.
        </Typography>

        {/* ⭐ Slider */}
        <Box sx={{ 
          maxWidth: { 
            xs: "100%", 
            sm: "90%", 
            md: "80%", 
            lg: "70%" 
          },
          mx: "auto"
        }}>
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <Box sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "1.1rem", 
                      sm: "1.2rem", 
                      md: "1.4rem", 
                      lg: "1.6rem", 
                      xl: "1.7rem" 
                    },
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    color: "#2E2E2E",
                    mb: 4,
                    px: { xs: 1, sm: 2 }
                  }}
                >
                  "I thought about buying retinol from one of the major skincare companies,
                  but it was anything but affordable. Then one day I realized Hims offers a
                  tretinoin-based Rx anti-aging solution at a fraction of the cost, all from
                  the comfort of my couch, on my phone."
                </Typography>

                <Typography sx={{ 
                  fontWeight: 700, 
                  fontSize: { 
                    xs: "1rem", 
                    sm: "1.1rem" 
                  }, 
                  mb: 0.5 
                }}>
                  Aaron, 32
                </Typography>

                <Typography sx={{ 
                  fontSize: { 
                    xs: "0.8rem", 
                    sm: "0.85rem" 
                  }, 
                  color: "#777" 
                }}>
                  Verified Hims Skin review
                </Typography>
              </Box>
            </Box>

            {/* Slide 2 */}
            <Box sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "1.1rem", 
                      sm: "1.2rem", 
                      md: "1.4rem", 
                      lg: "1.6rem", 
                      xl: "1.7rem" 
                    },
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    color: "#2E2E2E",
                    mb: 4,
                    px: { xs: 1, sm: 2 }
                  }}
                >
                  "The process was super easy and actually enjoyable.
                  The treatment results were better than I expected.
                  Would absolutely recommend it."
                </Typography>

                <Typography sx={{ 
                  fontWeight: 700, 
                  fontSize: { 
                    xs: "1rem", 
                    sm: "1.1rem" 
                  }, 
                  mb: 0.5 
                }}>
                  Michael, 29
                </Typography>

                <Typography sx={{ 
                  fontSize: { 
                    xs: "0.8rem", 
                    sm: "0.85rem" 
                  }, 
                  color: "#777" 
                }}>
                  Verified Review
                </Typography>
              </Box>
            </Box>

            {/* Slide 3 */}
            <Box sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "1.1rem", 
                      sm: "1.2rem", 
                      md: "1.4rem", 
                      lg: "1.6rem", 
                      xl: "1.7rem" 
                    },
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    color: "#2E2E2E",
                    mb: 4,
                    px: { xs: 1, sm: 2 }
                  }}
                >
                  "Affordable, effective, and convenient.
                  I've tried other brands but this is the only one that worked consistently for me."
                </Typography>

                <Typography sx={{ 
                  fontWeight: 700, 
                  fontSize: { 
                    xs: "1rem", 
                    sm: "1.1rem" 
                  }, 
                  mb: 0.5 
                }}>
                  David, 41
                </Typography>

                <Typography sx={{ 
                  fontSize: { 
                    xs: "0.8rem", 
                    sm: "0.85rem" 
                  }, 
                  color: "#777" 
                }}>
                  Verified Customer
                </Typography>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Box>

      {/* ⭐ Pixel Perfect Hims "Better healthcare" Section */}
      <Box
        sx={{
          width: "100%",
          py: { 
            xs: "48px", 
            sm: "64px", 
            md: "80px", 
            lg: "96px" 
          },
          textAlign: "center",
          bgcolor: "#ffffff",
          px: { 
            xs: "16px", 
            sm: "24px", 
            md: "32px" 
          },
        }}
      >
        {/* 🔥 Title */}
        <Typography
          sx={{
            fontSize: { 
              xs: "1.75rem", 
              sm: "2rem", 
              md: "2.3rem", 
              lg: "2.6rem", 
              xl: "2.8rem" 
            },
            fontWeight: 500,
            color: "#222222",
            mb: { 
              xs: "48px", 
              sm: "64px", 
              md: "80px" 
            },
            lineHeight: 1.2
          }}
        >
          Better healthcare{" "}
          <span style={{ 
            fontWeight: 300, 
            color: "#555555" 
          }}>
            made simple
          </span>
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
            gap: { 
              xs: "48px", 
              sm: "40px", 
              md: "32px", 
              lg: "40px" 
            },
            maxWidth: "1150px",
            mx: "auto",
          }}
        >
          {[step1, step2, step3, step4].map((img, idx) => (
            <Box 
              key={idx} 
              sx={{ 
                textAlign: "center", 
                position: "relative" 
              }}
            >
              <Box
                sx={{
                  width: { 
                    xs: "180px", 
                    sm: "200px", 
                    md: "215px" 
                  },
                  height: { 
                    xs: "180px", 
                    sm: "200px", 
                    md: "215px" 
                  },
                  borderRadius: "50%",
                  background: "#F2F6FA",
                  mx: "auto",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "visible",
                }}
              >
                <Box
                  component="img"
                  src={img}
                  sx={{
                    width: { 
                      xs: "130%", 
                      sm: "140%", 
                      md: "150%" 
                    },
                    maxWidth: { 
                      xs: "220px", 
                      sm: "240px", 
                      md: "260px" 
                    },
                    position: "relative",
                    top: { 
                      xs: "-5%", 
                      sm: "-8%", 
                      md: "-10%" 
                    },
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>

              <Typography sx={{ 
                fontSize: { 
                  xs: "1rem", 
                  sm: "1.05rem", 
                  md: "1.1rem", 
                  lg: "1.15rem" 
                }, 
                fontWeight: 600, 
                color: "#1C1C1C", 
                mb: 1.5 
              }}>
                {idx === 0 ? "Answer a few questions" : 
                 idx === 1 ? "Get a personalized treatment plan" : 
                 idx === 2 ? "Free shipping" : "Free ongoing care"}
              </Typography>

              <Typography
                sx={{
                  fontSize: { 
                    xs: "0.9rem", 
                    sm: "0.95rem", 
                    md: "1rem" 
                  },
                  color: "#6E6E6E",
                  maxWidth: "210px",
                  mx: "auto",
                  lineHeight: 1.5
                }}
              >
                {idx === 0
                  ? "Tell us about your health and goals"
                  : idx === 1
                  ? "A licensed provider will review your info and recommend the best"
                  : idx === 2
                  ? "All prescription treatment ships free, if prescribed"
                  : "All ongoing visits are free, anytime"}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
}