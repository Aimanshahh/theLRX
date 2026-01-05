// FourCards.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ADD THIS IMPORT
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Drawer,
  IconButton,
  alpha,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BiotechIcon from "@mui/icons-material/Biotech";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import ScienceIcon from "@mui/icons-material/Science";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ShieldIcon from "@mui/icons-material/Shield";

import image1 from "../../assets/images/card12-removebg-preview.png";
import image2 from "../../assets/images/4cardimg.png";
import image3 from "../../assets/images/4cardimg4.png";
import image4 from "../../assets/images/4cardimg3.png";

// Medicine Sidebar Component
const MedicineSidebar = ({ open, onClose }) => {
  const navigate = useNavigate(); // ADD THIS HOOK
  
  const categories = [
    {
      name: "Weight Loss",
      icon: <MonitorWeightIcon />,
      color: "#00359E",
      bgColor: alpha("#00359E", 0.08),
      treatments: [
        { name: "Oral Semaglutide RDT" },
        { name: "Oral Tirzepatide RDT" },
        { name: "Retatrutide Vial" },
        { name: "Semaglutide Injectable" },
        { name: "Tirzepatide Injectable" },
      ],
    },
   
    {
      name: "Precision BioActives",
      icon: <BiotechIcon />,
      color: "#00359E",
      bgColor: alpha("#00359E", 0.08),
      treatments: [
        { name: "BPC-157" },
        { name: "CJC-1295 Ipamorelin" },
        { name: "GHK-CU" },
        { name: "NAD+" },
        { name: "NAD+ Injectable" },
        { name: "PT-141" },
        { name: "Sermorelin 20mg" },
        { name: "Vitamin B12" },
      ],
    },
    {
      name: "Sexual Health",
      icon: <FavoriteIcon />,
      color: "#00359E",
      bgColor: alpha("#00359E", 0.08),
      treatments: [
        { name: "Drive Plus 6" },
        { name: "Drive Plus 12" },
        { name: "Drive Plus 18" },
        { name: "Epiq Chew 30" },
        { name: "Lust 6" },
        { name: "Lust 12" },
        { name: "Lust 18" },
        { name: "Mach 16" },
        { name: "Mach 112" },
        { name: "Mach 118" },
        { name: "Overdrive Plus 6" },
        { name: "Overdrive Plus 12" },
        { name: "Passion 6" },
        { name: "Passion 12" },
        { name: "Passion 18" },
        { name: "Red Pill 6" },
        { name: "Red Pill 12" },
      ],
    },
   
    {
      name: "Labs",
      icon: <ScienceIcon />,
      color: "#00359E",
      bgColor: alpha("#00359E", 0.08),
      treatments: [
        { name: "Lab1" },
        { name: "Lab2" },
      ],
    },
  ];

  // Map treatment names to their correct routes
  const getCorrectRoute = (category, treatmentName) => {
    const routeMappings = {
      "Peptides": {
        "BPC-157": "/peptides/bpc-157",
        "CJC-1295 Ipamorelin": "/peptides/cjc-1295-ipamorelin",
        "GHK-CU": "/peptides/GHKCU",
        "NAD+": "/peptides/NAD",
        "NAD+ Injectable": "/peptides/NADinjectable",
        "PT-141": "/peptides/pt-141",
        "Sermorelin 20mg": "/peptides/sermorelin-20mg",
        "Vitamin B12": "/peptides/vitamin-b12"
      },
      "Sexual Health": {
        "Drive Plus 6": "/sexual-health/drive-plus-6",
        "Drive Plus 12": "/sexual-health/drive-plus-12",
        "Drive Plus 18": "/sexual-health/drive-plus-18",
        "Epiq Chew 30": "/sexual-health/epiq-chew-30",
        "Lust 6": "/sexual-health/lust-6",
        "Lust 12": "/sexual-health/lust-12",
        "Lust 18": "/sexual-health/lust-18",
        "Mach 16": "/sexual-health/mach1-6",
        "Mach 112": "/sexual-health/mach1-12",
        "Mach 118": "/sexual-health/mach1-18",
        "Overdrive Plus 6": "/sexual-health/overdrive-plus-6",
        "Overdrive Plus 12": "/sexual-health/overdrive-plus-12",
        "Passion 6": "/sexual-health/passion-6",
        "Passion 12": "/sexual-health/passion-12",
        "Passion 18": "/sexual-health/passion-18",
        "Red Pill 6": "/sexual-health/redpill-6",
        "Red Pill 12": "/sexual-health/redpill-12"
      },
      "Weight Loss": {
        "Oral Semaglutide RDT": "/weight-loss/oral-semaglutide-rdt",
        "Oral Tirzepatide RDT": "/weight-loss/oral-tirzepatide-rdt",
        "Retatrutide Vial": "/weight-loss/retatrutide-vial",
        "Semaglutide Injectable": "/weight-loss/semaglutide-injectable",
        "Tirzepatide Injectable": "/weight-loss/tirzepatide-injectable"
      },
      "Labs": {
        "Lab1": "/labs/lab1",
        "Lab2": "/labs/lab2"
      }
    };

    return routeMappings[category]?.[treatmentName] || `/${category.toLowerCase().replace(/ /g, '-')}/${treatmentName.toLowerCase().replace(/ /g, '-')}`;
  };

  const handleTreatmentClick = (category, treatmentName) => {
    const route = getCorrectRoute(category, treatmentName);
    console.log("Navigating to:", route); // Debug log
    navigate(route); // CHANGE TO REACT ROUTER NAVIGATION
    onClose();
  };

  const scrollContainerRef = useRef(null);

  // Handle keyboard navigation (PageUp/PageDown)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!open || !scrollContainerRef.current) return;

      const scrollAmount = 300;
      
      if (e.key === 'PageDown') {
        e.preventDefault();
        scrollContainerRef.current.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
        });
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        scrollContainerRef.current.scrollBy({
          top: -scrollAmount,
          behavior: 'smooth'
        });
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollContainerRef.current.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollContainerRef.current.scrollTo({
          top: scrollContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Overlay with modern blur effect */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
              backdropFilter: "blur(0px)",
              WebkitBackdropFilter: "blur(0px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Modern Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "92%", sm: "500px" },
            maxWidth: "100%",
            backgroundColor: "#FFFFFF",
            backgroundImage: "linear-gradient(to bottom, #FFFFFF, #FCFCFC)",
            boxShadow: "-12px 0 48px rgba(0, 0, 0, 0.15)",
            borderLeft: "none",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 10000,
          },
          zIndex: 10000,
        }}
      >
        {/* Modern Header with gradient accent */}
        <Box
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 32px",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            backgroundColor: "#FFFFFF",
            flexShrink: 0,
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #00359E 0%, #003B9D 100%)",
              borderRadius: "3px",
            }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#000000",
              fontSize: "1.5rem",
              letterSpacing: "-0.3px",
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              background: "linear-gradient(135deg, #00359E 0%, #000000 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            All Treatments
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: "#747578",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              backgroundColor: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                color: "#000000",
                transform: "rotate(90deg)",
                borderColor: "#00359E",
              },
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <CloseIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>

        {/* Scrollable Content with keyboard navigation support */}
        <Box
          ref={scrollContainerRef}
          sx={{
            flex: 1,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "linear-gradient(180deg, #F5F5F5 0%, #FAFAFA 100%)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "linear-gradient(180deg, #8B8D8E 0%, #747578 100%)",
              borderRadius: "4px",
              border: "2px solid #F5F5F5",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "linear-gradient(180deg, #747578 0%, #00359E 100%)",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "#8B8D8E #F5F5F5",
          }}
        >
          {/* Main Content with modern spacing */}
          <Box sx={{ p: 4 }}>
            {categories.map((category, index) => (
              <Box key={category.name} sx={{ mb: 5 }}>
                {/* Modern Category Header */}
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 2, 
                  mb: 3.5,
                  p: 2.5,
                  borderRadius: "12px",
                  backgroundColor: "rgba(0, 53, 158, 0.02)",
                  border: "1px solid rgba(0, 53, 158, 0.05)",
                  boxShadow: "0 2px 8px rgba(0, 53, 158, 0.03)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 16px rgba(0, 53, 158, 0.06)",
                    borderColor: "rgba(0, 53, 158, 0.1)",
                  }
                }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, rgba(0, 53, 158, 0.1) 0%, rgba(0, 59, 157, 0.1) 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#00359E",
                      boxShadow: "0 4px 12px rgba(0, 53, 158, 0.08)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#000000",
                        fontSize: "1.2rem",
                        letterSpacing: "-0.2px",
                        fontFamily: "'Inter', sans-serif",
                        mb: 0.5,
                      }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#8B8D8E",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#00359E",
                        }}
                      />
                      {category.treatments.length} treatments available
                    </Typography>
                  </Box>
                </Box>

                {/* Modern Treatments List */}
                <List sx={{ mb: 4 }}>
                  {category.treatments.map((treatment, idx) => (
                    <ListItem
                      key={treatment.name}
                      disablePadding
                      sx={{
                        mb: 1.5,
                        borderRadius: "12px",
                        overflow: "hidden",
                      }}
                    >
                      <ListItemButton
                        onClick={() => handleTreatmentClick(category.name, treatment.name)}
                        sx={{
                          borderRadius: "12px",
                          padding: "14px 18px",
                          backgroundColor: "#FFFFFF",
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            height: "100%",
                            width: "3px",
                            background: "linear-gradient(to bottom, #00359E, #003B9D)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          },
                          "&:hover": {
                            backgroundColor: "rgba(0, 53, 158, 0.02)",
                            borderColor: "#00359E",
                            transform: "translateX(4px)",
                            '&::before': {
                              opacity: 1,
                            },
                            '& .MuiListItemText-primary': {
                              color: "#000000",
                            },
                            '& .treatment-arrow': {
                              color: "#00359E",
                              transform: "translateX(2px)",
                            },
                          },
                          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontWeight: 600,
                                color: "#00359E",
                                fontSize: "0.98rem",
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: "-0.1px",
                                transition: "color 0.25s ease",
                              }}
                            >
                              {treatment.name}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              sx={{
                                color: "#747578",
                                fontSize: "0.8rem",
                                fontWeight: 400,
                                fontFamily: "'Inter', sans-serif",
                                mt: 0.5,
                              }}
                            >
                              Click to view details & pricing
                            </Typography>
                          }
                        />
                        <ChevronRightIcon
                          className="treatment-arrow"
                          sx={{
                            color: "#8B8D8E",
                            fontSize: "1.3rem",
                            transition: "all 0.25s ease",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>

                {/* Modern Gradient Divider */}
                {index < categories.length - 1 && (
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    my: 4,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "linear-gradient(90deg, transparent 0%, rgba(0, 53, 158, 0.2) 50%, transparent 100%)",
                    }
                  }}>
                    <Box
                      sx={{
                        width: "40px",
                        height: "3px",
                        background: "linear-gradient(90deg, #00359E 0%, #003B9D 100%)",
                        borderRadius: "3px",
                        position: "relative",
                        zIndex: 1,
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}

            {/* Modern Elegant Footer */}
            <Box sx={{ 
              mt: 8, 
              mb: 4,
              p: 4,
              backgroundColor: "rgba(0, 53, 158, 0.02)",
              borderRadius: "16px",
              border: "1px solid rgba(0, 53, 158, 0.05)",
              boxShadow: "0 4px 20px rgba(0, 53, 158, 0.03)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, #00359E 50%, transparent 100%)",
              }
            }}>
              {/* Important Notice with icon */}
              <Box sx={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: 2.5,
                mb: 3,
              }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(0, 53, 158, 0.1) 0%, rgba(0, 59, 157, 0.1) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#00359E",
                    flexShrink: 0,
                  }}
                >
                  <LocalHospitalIcon sx={{ fontSize: "1.3rem" }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 700,
                      color: "#000000",
                      fontSize: "1rem",
                      fontFamily: "'Inter', sans-serif",
                      mb: 1.5,
                    }}
                  >
                    Important Medical Information
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#747578",
                      fontSize: "0.85rem",
                      fontWeight: 400,
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.6,
                      display: "block",
                    }}
                  >
                    <Box component="span" sx={{ fontWeight: 600, color: "#000000" }}>
                      Please note:
                    </Box>
                    {" "}Compounded drug products are not FDA-approved. The FDA does not evaluate compounded products for safety, effectiveness, or quality. All prescription products require an online consultation with a licensed healthcare provider who will determine if a prescription is appropriate for your specific needs.
                  </Typography>
                </Box>
              </Box>

              {/* Security & Privacy Info */}
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                mt: 3,
                pt: 3,
                borderTop: "1px solid rgba(0, 53, 158, 0.08)",
              }}>
               
               
              </Box>
            </Box>

            {/* Bottom Spacing for better scrolling */}
            <Box sx={{ height: "32px" }} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

// Main FourCards Component
const cards = [
  {
    subtitle: "Care That Fits",
    title: "Your Schedule",
    cta: "Get Started",
    img: image1,
    path: "/schedule-care",
    category: "schedule-care",
  },
  {
    subtitle: "Prescribed By",
    title: "Licensed Providers",
    cta: "Get Personalized Treatment",
    img: image2,
    path: "/licensed-providers",
    category: "licensed-providers",
  },
  {
    subtitle: "Doctor-Trusted",
    title: "Ingredients",
    cta: "Find My Treatment",
    img: image3,
    path: "/trusted-ingredients",
    category: "trusted-ingredients",
  },
  {
    subtitle: "FDA-regulated",
    title: "Pharmacies",
    cta: "Get personalized treatment",
    img: image4,
    path: "/regulated-pharmacies",
    category: "regulated-pharmacies",
  },
];

export default function FourCards() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stagger = ["0px", "50px", "0px", "50px"];

  const handleButtonClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          py: { xs: 3, md: 8 },
          px: 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: "4px",
            width: "100%",
          }}
        >
          {cards.map((card, idx) => (
            <Card
              key={idx}
              elevation={0}
              sx={{
                width: "100%",
                borderRadius: "22px",
                border: "1px solid #D9D9D9",
                background: "#7D8FACFF",
                p: { xs: 3, md: 5 },
                textAlign: "center",
                transform: { sm: `translateY(${stagger[idx]})` },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: { sm: `translateY(calc(${stagger[idx]} - 10px))` },
                  boxShadow: "0 14px 35px rgba(0,53,158,0.15)",
                  borderColor: "#00359E",
                  backgroundColor: "#F8F9FA",
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#6A6A6A",
                  }}
                >
                  {card.subtitle}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.6rem", md: "1.8rem" },
                    lineHeight: 1.2,
                    mt: 1,
                    color: "#00359E",
                  }}
                >
                  {card.title}
                </Typography>

                <Button
                  variant="contained"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleButtonClick();
                  }}
                  sx={{
                    mt: 3,
                    borderRadius: "999px",
                    px: { xs: 3.5, md: 4 },
                    py: { xs: 1.3, md: 1.5 },
                    fontSize: { xs: "0.8rem", md: "0.9rem" },
                    fontWeight: 700,
                    backgroundColor: "#8B8D8E",
                    textTransform: "none",
                    boxShadow: "0 4px 12px rgba(0, 53, 158, 0.3)",
                    "&:hover": {
                      backgroundColor: "#003B9D",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 16px rgba(0, 53, 158, 0.4)",
                    },
                  }}
                >
                  {card.cta}
                </Button>
              </CardContent>

              <Box 
                sx={{ 
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "auto",
                  minHeight: "220px",
                }}
              >
                <CardMedia
                  component="img"
                  image={card.img}
                  alt={card.title}
                  sx={{
                    width: "155%",
                    maxWidth: "520px",
                    height: "auto",
                    maxHeight: "480px",
                    objectFit: "contain",
                    display: "block",
                    marginLeft: "-27%",
                    marginRight: "-27%",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "scale(1.15)",
                    },
                  }}
                />
              </Box>
            </Card>
          ))}
        </Box>

        {/* FOOTER CONTENT */}
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            mt: { xs: 4, md: 10 },
            px: { xs: 2, md: 4 },
            pb: { xs: 2, md: 4 },
          }}
        >
          <br />
          <br />
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
              fontWeight: { xs: 400, sm: 600 },
              color: "#00359E",
              lineHeight: 1.5,
              fontStyle: "italic",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Compounded drug products are not FDA-approved. FDA does not evaluate 
            compounded products for safety, effectiveness, or quality. Prescription 
            products require an online consultation with a healthcare provider who 
            will determine if a prescription is appropriate.
          </Typography>
        </Box>
      </Box>

      {/* Medicine Sidebar */}
      <MedicineSidebar
        open={sidebarOpen}
        onClose={handleCloseSidebar}
      />
    </>
  );
}