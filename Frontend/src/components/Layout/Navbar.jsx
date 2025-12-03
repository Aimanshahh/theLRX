import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import logo from "../../assets/LRXLOGOS/LOGO-2.png";
import treatment1 from "../../assets/Carousal/img1.jpg";
import treatment2 from "../../assets/Carousal/img1.jpg";
import treatment3 from "../../assets/Carousal/img1.jpg";
import treatment4 from "../../assets/Carousal/img1.jpg";
import treatment5 from "../../assets/Carousal/img2.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bannerHidden, setBannerHidden] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  // Handle scroll to hide TopBanner
  useEffect(() => {
    const handleScroll = () => {
      setBannerHidden(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setLoginDialogOpen(false);
  };

  const handleLogout = () => setIsLoggedIn(false);

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

 
 // Updated explore items with your exact categories and subsections
const exploreItems = [
  { 
    label: "Labs", 
    subsections: [
      { label: "Lab1", path: "/Lab1" },
      { label: "Lab2", path: "/Lab2" }
    ]
  },
  { 
    label: "Weight Loss", 
    subsections: [
      { label: "GLP-1 Injection", path: "GLP-1" },
      { label: "Oral Medication", path: "/Oralmedication" },
      { label: "Ozempic", path: "Ozempic" },
      { label: "Generic Liraglutide", path: "/Genericliraglutide" },
      { label: "Zepbound", path: "/Zepbound" },
      { label: "Monjaro", path: "/Mounjaro" }
    ]
  },
  { 
    label: "Hair Regrowth", 
    subsections: [
      { label: "Minoxidil Spray", path: "/Minoxidilspray" },
      { label: "Oral Finasteride", path: "/Oralfinasterider" },
      { label: "Hair Hybrid", path: "/Hairhybrids" }
    ]
  },
  { 
    label: "Sexual Health", 
    subsections: [
      { label: "Hard Mints", path: "/Hardmints" },
      { label: "Viagra", path: "/Viagra" },
      { label: "Generic for Cialis", path: "/genericforcialis" },
      { label: "Valacyclovir", path: "/valacyclovis" }
    ]
  },
  { 
    label: "Testosterone", 
    subsections: [
      { label: "Enclomiphene", path: "/enclomiphene" },
      { label: "Tadalafil", path: "/tadalafil" }
    ]
  },
  { 
    label: "Mental Health", 
    subsections: [
      { label: "Anxiety", path: "/Anxiety" },
      { label: "Stress", path: "/Stress" },
      { label: "Depression", path: "/Depression" },
      { label: "Trouble Sleeping", path: "/TroubleSleeping" }
    ]
  },
  { 
    label: "Skin", 
    subsections: [
      { label: "Anti Aging Cream", path: "/AntiAgingcream" },
      { label: "Acne Cream", path: "/Acnecream" },
      { label: "Cold Sore", path: "/Coldsore" },
      { label: "High Tide Cleanser", path: "/Hightidecleanser" }
    ]
  }
];
  const meetLRXLinks = [
    { label: "About Us", path: "/AboutUs" },
    { label: "FAQs", path: "/FAQspage" },
    { label: "How It Works", path: "/Howitworks" },
    { label: "Blog", path: "/Blog" },
     { label: "Medical Experts", path: "/Medicalexperts" },
  ];

  // Responsive dropdown width
  const getDropdownWidth = () => {
    if (isMobile) return "100vw";
    if (isTablet) return "80vw";
    return "430px";
  };

  // Responsive padding
  const getResponsivePadding = () => {
    if (isMobile) return "16px";
    if (isTablet) return "20px";
    return "28px";
  };

  // Responsive font sizes
  const getResponsiveFontSize = (mobile, tablet, desktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };

  const handleNavigation = (path) => {
    navigate(path);
    setExpandedIndex(null);
    setExpandedItems({});
  };

  // Navigate to sign in page
  const handleSignInNavigation = () => {
    navigate("/signin");
    setExpandedIndex(null);
    setExpandedItems({});
  };

  return (
    <>
      {/* Backdrop for dropdown */}
      <Backdrop
        open={expandedIndex === -1}
        onClick={() => {
          setExpandedIndex(null);
          setExpandedItems({});
        }}
        sx={{ zIndex: 9999, backgroundColor: "rgba(0,0,0,0.1)" }}
      />

      <AppBar
        position="fixed"
        sx={{
          top: bannerHidden ? 0 : 50,
          backgroundColor: "white",
          boxShadow: 1,
          transition: "top 0.3s ease-in-out",
          zIndex: 9998,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img
            src={logo}
            alt="TheLRX"
            style={{ 
              height: isMobile ? 40 : 50, 
              cursor: "pointer" 
            }}
            onClick={() => navigate("/")}
          />

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {!isLoggedIn ? (
              <Button
                variant="contained"
                size="small"
                onClick={handleSignInNavigation} // Changed from setLoginDialogOpen to handleSignInNavigation
                sx={{
                  background: "linear-gradient(135deg, #747578, #8B8D8E)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: isMobile ? "0.75rem" : "0.875rem",
                  padding: isMobile ? "2px 6px" : "2px 8px",
                  borderRadius: "20px",
                  "&:hover": {
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                  },
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="small"
                onClick={handleLogout}
                startIcon={<PersonIcon />}
                sx={{
                  color: "#747578",
                  borderColor: "#747578",
                  fontWeight: 600,
                  fontSize: isMobile ? "0.75rem" : "0.875rem",
                  padding: isMobile ? "3px 8px" : "4px 12px",
                  "&:hover": {
                    color: "#00359E",
                    borderColor: "#00359E",
                    backgroundColor: "rgba(0,53,158,0.04)",
                  },
                }}
              >
                Profile
              </Button>
            )}

            <IconButton
              onClick={() =>
                setExpandedIndex(expandedIndex === -1 ? null : -1)
              }
              sx={{
                color: "#747578",
                flexDirection: "column",
                gap: "3px",
              }}
              aria-label="Open menu"
            >
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  backgroundColor: "currentColor",
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  backgroundColor: "currentColor",
                }}
              />
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  backgroundColor: "currentColor",
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Login Dialog - REMOVED since we're navigating to sign in page */}

      {/* Full-screen Dropdown */}
      <Slide
        direction="left"
        in={expandedIndex === -1}
        mountOnEnter
        unmountOnExit
        timeout={350}
      >
        <Paper
          elevation={0}
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            width: getDropdownWidth(),
            height: "100vh",
            backgroundColor: "white",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: `${isMobile ? "16px" : "20px"} ${getResponsivePadding()}`,
              borderBottom: "1px solid #e6e6e6",
            }}
          >
            <h2 style={{ 
              fontSize: getResponsiveFontSize("18px", "20px", "22px"), 
              margin: 0, 
              fontWeight: 600 
            }}>
              Menu
            </h2>
            <div style={{ display: "flex", gap: isMobile ? "12px" : "18px" }}>
              <IconButton 
                sx={{ color: "black", padding: isMobile ? "8px" : "12px" }}
                onClick={handleSignInNavigation} // Changed to navigate to sign in page
              >
                <PersonIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
              <IconButton sx={{ color: "black", padding: isMobile ? "8px" : "12px" }}>
                <ShoppingCartIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
              <IconButton 
                sx={{ color: "black", padding: isMobile ? "8px" : "12px" }} 
                onClick={() => {
                  setExpandedIndex(null);
                  setExpandedItems({});
                }}
              >
                <CloseIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </div>
          </div>

          {/* Scrollable Content */}
          <div style={{ overflowY: "auto", flex: 1, paddingBottom: isMobile ? "60px" : "80px" }}>
            {/* Explore Section */}
            <p
              style={{
                fontSize: "12px",
                color: "#9b9b9b",
                letterSpacing: "1px",
                fontWeight: 600,
                padding: `${isMobile ? "16px" : "20px"} ${getResponsivePadding()} ${isMobile ? "8px" : "10px"}`,
              }}
            >
              EXPLORE
            </p>
            
            {exploreItems.map((item, index) => (
              <div key={index}>
                {/* Main Explore Item - Only expands/collapses, no navigation */}
                <MenuItem
                  onClick={() => toggleExpand(index)}
                  sx={{
                    padding: `${isMobile ? "12px" : "14px"} ${getResponsivePadding()}`,
                    fontSize: getResponsiveFontSize("16px", "17px", "18px"),
                    fontWeight: 500,
                    color: "black",
                    "&:hover": { backgroundColor: "#fafafa" },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                  {expandedItems[index] ? (
                    <ExpandLessIcon sx={{ color: "#555" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "#555" }} />
                  )}
                </MenuItem>

                {/* Subcategories - Only these navigate to pages */}
                {expandedItems[index] && (
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: `3px solid #00359E`,
                      animation: "fadeIn 0.3s ease-in",
                    }}
                  >
                    {/* Subcategories */}
                    {item.subsections.map((subsection, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        onClick={() => handleNavigation(subsection.path)}
                        sx={{
                          padding: `${isMobile ? "10px" : "12px"} ${getResponsivePadding()} ${isMobile ? "10px" : "12px"} ${isMobile ? "32px" : "40px"}`,
                          fontSize: getResponsiveFontSize("14px", "15px", "16px"),
                          fontWeight: 400,
                          color: "#555",
                          "&:hover": { 
                            backgroundColor: "#f0f7ff",
                            color: "#00359E"
                          },
                          borderBottom: subIndex === item.subsections.length - 1 ? "none" : "1px solid #f0f0f0",
                          cursor: "pointer",
                        }}
                      >
                        {subsection.label}
                      </MenuItem>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Top Treatments */}
            <p
              style={{
                fontSize: "12px",
                color: "#9b9b9b",
                letterSpacing: "1px",
                fontWeight: 600,
                padding: `${isMobile ? "20px" : "30px"} ${getResponsivePadding()} ${isMobile ? "8px" : "12px"}`,
              }}
            >
              TOP TREATMENTS
            </p>
            <div
              style={{
                display: "flex",
                gap: isMobile ? "10px" : "14px",
                padding: `0 ${getResponsivePadding()} ${isMobile ? "30px" : "40px"}`,
                overflowX: "auto",
              }}
            >
              {[treatment1, treatment2, treatment3, treatment4, treatment5].map(
                (src, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: isMobile ? "120px" : "150px",
                      borderRadius: "14px",
                      border: "1px solid #ececec",
                      padding: isMobile ? "8px" : "12px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={src}
                      style={{ 
                        width: "100%", 
                        borderRadius: "8px",
                        height: isMobile ? "80px" : "100px",
                        objectFit: "cover"
                      }}
                      alt="Treatment"
                    />
                    <p style={{ 
                      fontWeight: 500, 
                      fontSize: isMobile ? "12px" : "14px", 
                      marginTop: "8px",
                      textAlign: "center"
                    }}>
                      Treatment {index + 1}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Meet LRX */}
            <p
              style={{
                fontSize: "12px",
                color: "#9b9b9b",
                letterSpacing: "1px",
                fontWeight: 600,
                padding: `${isMobile ? "20px" : "30px"} ${getResponsivePadding()} ${isMobile ? "8px" : "12px"}`,
              }}
            >
              MEET LRX
            </p>
            {meetLRXLinks.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setExpandedIndex(null);
                  setExpandedItems({});
                }}
                sx={{
                  padding: `${isMobile ? "12px" : "14px"} ${getResponsivePadding()}`,
                  fontSize: getResponsiveFontSize("16px", "17px", "18px"),
                  fontWeight: 500,
                  color: "black",
                  "&:hover": { backgroundColor: "#fafafa" },
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </div>
        </Paper>
      </Slide>

      {/* Add some CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}