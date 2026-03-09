import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Backdrop from "@mui/material/Backdrop";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme, useMediaQuery } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../assets/LRXLOGOS/LOGO-2.png";
import treatment1 from "../../assets/medicines/weightloss1.png";
import treatment2 from "../../assets/medicines/terzipied.png";
import treatment3 from "../../assets/medicines/BPC-removebg-preview.png";
import treatment4 from "../../assets/medicines/GHK-CU.png";
import treatment5 from "../../assets/medicines/CJC-1295.png";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [bannerHidden, setBannerHidden] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const profileMenuOpen = Boolean(anchorEl);

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  // Handle scroll to hide TopBanner only on homepage
  useEffect(() => {
    const handleScroll = () => {
      setBannerHidden(window.scrollY > 50);
    };
    
    // Only add scroll listener if we're on homepage
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      // On medicine pages, always set bannerHidden to true
      setBannerHidden(true);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleProfileMenuClose();
    setLogoutDialogOpen(true);
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setLogoutDialogOpen(false);
    navigate("/");
  };

  const handleProfileClick = () => {
    handleProfileMenuClose();
    navigate("/profile");
  };

  const handleOrdersClick = () => {
    handleProfileMenuClose();
    navigate("/orders");
  };

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const treatmentPaths = {
  "Retatrutide Vial": "/weight-loss/retatrutide-vial",
  "Tirzepadtide Vial": "/weight-loss/tirzepatide-injectable",
  "BPC-157": "/peptides/bpc-157",
  "CJC-1295/Ipamorelin": "/peptides/cjc-1295-ipamorelin",
  "GHK-cu": "/peptides/GHKCU"
}; 

  const exploreItems = [
    {
      label: "Labs", 
      subsections: [
        { label: "Functional Blood Test", path: "/labs/Functional-Blood-Test" },
      ]
    },
    { 
      label: "Weight Loss", 
      subsections: [
        { label: "Retatrutide Injectable", path: "/weight-loss/retatrutide-vial" },
        { label: "Oral Tirzepatide RDT", path: "/weight-loss/oral-tirzepatide-rdt" },
        { label: "Oral Semaglutide RDT", path: "/weight-loss/oral-semaglutide-rdt" },
        { label: "Tirzepatide Injectable", path: "/weight-loss/tirzepatide-injectable" },
        { label: "Semaglutide Injectable", path: "/weight-loss/semaglutide-injectable" },
      ]
    },
    { 
      label: "Precision BioActives",
      subsections: [
        { label: "Vitamin B12 Injection", path: "/peptides/vitamin-b12" },
        { label: "Sermolin", path: "/peptides/sermorelin" },
        { label: "Pt-141", path: "/peptides/pt-141" },
        { label: "CJC-1295/Iparmorelin Blend", path: "/peptides/cjc-1295-ipamorelin" },
        { label: "GHK-CU", path: "/peptides/GHKCU" },
        { label: "BPC-157 Injectable", path: "/peptides/bpc-157" },
        { label: "NAD+Nasal Spray", path: "/peptides/NAD" },
        { label: "NAD+Injectable", path: "/peptides/NADinjectable" },
      ]
    },
    { 
      label: "Hair, Skin & Nails",
      subsections: [
        { label: "GHK-CU", path: "/peptides/GHKCU" },
      ]
    },
    { 
      label: "Sexual Health & libido", 
      subsections: [
        { label: "Passion-6 Tablets", path: "/sexual-health/passion-6" },
        { label: "Passion-12 Tablets", path: "/sexual-health/passion-12" },
        { label: "Passion-18 Tablets", path: "/sexual-health/passion-18" },
        { label: "Lust-6 Tablets", path: "/sexual-health/lust-6" } ,   
        { label: "Lust-12 Tablets", path: "/sexual-health/lust-12" },
        { label: "Lust-18 Tablets", path: "/sexual-health/lust-18" },
        { label: "OverDrive Plus-6 Tablets", path: "/sexual-health/overdrive-plus-6" },
        { label: "OverDrive Plus-12 Tablets", path: "/sexual-health/overdrive-plus-12" },
        { label: "RedPill-6 Tablets", path: "/sexual-health/redpill-6" },
        { label: "RedPill-12 Tablets", path: "/sexual-health/redpill-12" },
        { label: "Mach1-6 Tablets", path: "/sexual-health/mach1-6" },
        { label: "Mach1-12 Tablets", path: "/sexual-health/mach1-12" },
        { label: "Mach1-18 Tablets", path: "/sexual-health/mach1-18" },
        { label: "Epiq Chew-30 Tablets", path: "/sexual-health/epiq-chew-30" },
        { label: "Drive Pluse-6 Tablets", path: "/sexual-health/drive-plus-6" },
        { label: "Drive Pluse-12 Tablets", path: "/sexual-health/drive-plus-12" },
        { label: "Drive Pluse-18 Tablets", path: "/sexual-health/drive-plus-18" },
      ]
    },
  ];

  const meetLRXLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "FAQs", path: "/faqs" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Medical Experts", path: "/medical-experts" },
  ];

  const getDropdownWidth = () => {
    if (isMobile) return "100vw";
    if (isTablet) return "80vw";
    return "430px";
  };

  const getResponsivePadding = () => {
    if (isMobile) return "16px";
    if (isTablet) return "20px";
    return "28px";
  };

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

  const handleSignInNavigation = () => {
    navigate("/signin");
    setExpandedIndex(null);
    setExpandedItems({});
  };

  return (
    <>
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
          top: location.pathname === "/" ? (bannerHidden ? 0 : 50) : 0,
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
                onClick={handleSignInNavigation}
                sx={{
                  background: "linear-gradient(135deg ,#00359E, #003B9D)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: isMobile ? "0.75rem" : "0.875rem",
                  padding: isMobile ? "2px 6px" : "2px 8px",
                  borderRadius: "20px",
                  "&:hover": {
                    background: "linear-gradient(135deg,  #747578, #8B8D8E)"
                  },
                }}
              >
                Login
              </Button>
            ) : (
              <IconButton
                onClick={handleProfileMenuOpen}
                sx={{
                  color: "black",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  }
                }}
              >
                <PersonIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
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

      {/* Profile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={profileMenuOpen}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
            mt: 1.5,
            minWidth: 180,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfileClick} sx={{ py: 1.5 }}>
          <ListItemIcon>
            <PersonIcon fontSize="small" sx={{ color: "#00359E" }} />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogoutClick} sx={{ py: 1.5, color: "#d32f2f" }}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" sx={{ color: "#d32f2f" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={logoutDialogOpen}
        onClose={handleLogoutCancel}
        aria-labelledby="logout-dialog-title"
        aria-describedby="logout-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: "12px",
            padding: "8px",
          }
        }}
      >
        <DialogTitle id="logout-dialog-title" sx={{ fontWeight: 600 }}>
          Confirm Logout
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="logout-dialog-description">
            Are you sure you want to log out? You'll need to sign in again to access your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "8px 16px 16px" }}>
          <Button 
            onClick={handleLogoutCancel}
            sx={{
              color: "#555",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)"
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleLogoutConfirm}
            variant="contained"
            sx={{
              backgroundColor: "#d32f2f",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#b71c1c"
              }
            }}
            autoFocus
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>

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
              {isLoggedIn ? (
                <IconButton 
                  sx={{ color: "black", padding: isMobile ? "8px" : "12px" }}
                  onClick={handleProfileClick}
                >
                  <PersonIcon fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              ) : (
                <IconButton 
                  sx={{ color: "black", padding: isMobile ? "8px" : "12px" }}
                  onClick={handleSignInNavigation}
                >
                  <PersonIcon fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
              )}
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

                {expandedItems[index] && (
                  <div
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderLeft: `3px solid #00359E`,
                      animation: "fadeIn 0.3s ease-in",
                    }}
                  >
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
  {[
    { img: treatment1, title: "Retatrutide Vial" },
    { img: treatment2, title: "Tirzepadtide Vial" },
    { img: treatment3, title: "BPC-157" },
    { img: treatment4, title: "GHK-cu" },
    { img: treatment5, title: "CJC-1295/Ipamorelin" },
  ].map(({ img, title }, index) => (
    <div
      key={index}
      onClick={() => navigate(treatmentPaths[title])}
      style={{
        minWidth: isMobile ? "140px" : "170px",
        height: isMobile ? "210px" : "240px",
        borderRadius: "18px",
        border: "1px solid #ececec",
        padding: isMobile ? "10px" : "14px",
        cursor: "pointer",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        transition: "transform 0.2s, box-shadow 0.2s",
        // Optional hover effect
        ...(!isMobile && {
          ':hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }
        })
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "11px",
          fontWeight: 600,
          padding: "3px 7px",
          borderRadius: "6px",
          backgroundColor: "#f2f2f2",
          color: "#111",
          lineHeight: 1,
        }}
      >
        Rx
      </div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "65px",
          fontSize: "11px",
          fontWeight: 600,
          padding: "3px 8px",
          borderRadius: "999px",
          backgroundColor: "#1bb978",
          color: "#fff",
          lineHeight: 1,
        }}
      >
        Popular
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "22px",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            maxHeight: isMobile ? "95px" : "115px",
            objectFit: "contain",
          }}
        />
      </div>
      <p
        style={{
          fontWeight: 500,
          fontSize: isMobile ? "12px" : "14px",
          marginTop: "10px",
          marginBottom: "4px",
          textAlign: "left",
          color: "#111",
        }}
      >
        {title}
      </p>
    </div>
  ))}
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