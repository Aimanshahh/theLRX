import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card,
  useMediaQuery,
  useTheme 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/medicines/COT Vial.png";
import phoneMock from "../../assets/Herocards/virusremoved.png";
import bioAgeImg from "../../assets/Herocards/virusremoved.png";
import biomarkersImg from "../../assets/Herocards/virusremoved.png";

// Sidebar menu data
const menuData = {
  "Weight Loss": [
    { title: "Weight Loss Program", route: "/treatment/weight-loss" },
    { title: "Fat Burner Treatments", route: "/treatment/fat-burner" },
    { title: "Metabolism Boost", route: "/treatment/metabolism-boost" },
    { title: "Diet Consultation", route: "/treatment/diet-consultation" },
  ],
  "Mental Health": [
    { title: "Anxiety Treatment", route: "/treatment/anxiety" },
    { title: "Sleep Issues", route: "/treatment/sleep-issues" },
    { title: "Stress Management", route: "/treatment/stress-management" },
    { title: "Depression Support", route: "/treatment/depression" },
  ],
  "Skin": [
    { title: "Acne Care", route: "/treatment/acne-care" },
    { title: "Anti-Aging Treatments", route: "/treatment/anti-aging" },
    { title: "Skin Rejuvenation", route: "/treatment/skin-rejuvenation" },
    { title: "Hyperpigmentation", route: "/treatment/hyperpigmentation" },
  ],
  "Sexual Health": [
    { title: "Sexual Health Consultation", route: "/treatment/sexual-health" },
    { title: "Testosterone Boost", route: "/treatment/testosterone-boost" },
    { title: "Erectile Dysfunction", route: "/treatment/erectile-dysfunction" },
    { title: "Libido Enhancement", route: "/treatment/libido-enhancement" },
  ],
  "Hair": [
    { title: "Hair Loss Treatment", route: "/treatment/hair-loss" },
    { title: "Hair Regrowth", route: "/treatment/hair-regrowth" },
    { title: "Scalp Treatment", route: "/treatment/scalp-treatment" },
    { title: "Hair Thickening", route: "/treatment/hair-thickening" },
  ]
};

export default function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      
      {/* ==================== HERO WITH CARDS ====================== */}
      <Box sx={{ width: "100%", bgcolor: "#fff", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%", maxWidth: "1400px" }}>

          {/* NAV PILLS */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, md: 2 },
                px: 3,
                py: 1.4,
                borderRadius: 10,
                bgcolor: "#fff",
                border: "1px solid #8B8D8E",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                alignItems: "center",
              }}
            >
              {["Boost testosterone", "Tackle anxiety", "Get smooth skin"].map((pill, i) => (
                <Typography key={i} sx={{ color: "#747578", fontSize: "0.9rem", fontWeight: 600 }}>
                  {pill}
                </Typography>
              ))}

              <Typography
                onClick={() => setIsSidebarOpen(true)}
                sx={{
                  color: "#00359E",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  "&:hover": { color: "#002F85" },
                }}
              >
                Browse all treatments
              </Typography>
            </Box>
          </Box>

          {/* SIDEBAR OVERLAY */}
          {isSidebarOpen && (
            <Box
              onClick={() => setIsSidebarOpen(false)}
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                bgcolor: "rgba(0,0,0,0.45)",
                zIndex: 9998,
              }}
            />
          )}

          {/* SIDEBAR */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              right: isSidebarOpen ? 0 : "-100%",
              width: isMobile ? "90%" : "420px",
              height: "100vh",
              bgcolor: "#fff",
              zIndex: 9999,
              boxShadow: "-6px 0 30px rgba(0,0,0,0.15)",
              transition: "right 0.35s ease",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close */}
            <Box sx={{ height: "70px", display: "flex", justifyContent: "flex-end", alignItems: "center", px: 3, borderBottom: "1px solid #e0e0e0" }}>
              <Button onClick={() => setIsSidebarOpen(false)} sx={{ minWidth: 0, p: 1 }}>✕</Button>
            </Box>

            {/* Menu */}
            <Box sx={{ flex: 1, overflowY: "auto", px: 3, py: 2 }}>
              {Object.entries(menuData).map(([category, items]) => (
                <Box key={category} sx={{ mb: 4 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 2, textTransform: "uppercase" }}>
                    {category}
                  </Typography>

                  {items.map((item, j) => (
                    <Box
                      key={j}
                      onClick={() => handleNavigation(item.route)}
                      sx={{
                        py: 1.5,
                        borderBottom: "1px solid #f0f0f0",
                        cursor: "pointer",
                        "&:hover": { bgcolor: "#f8f8f8" },
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "15px",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                      <span>→</span>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>

          {/* =============== MAIN LABS HERO =============== */}
          <Box
            sx={{
              mt: 4,
              borderRadius: 4,
              background: "linear-gradient(135deg,#00359E,#003B9D 30%,#8B8D8E 70%,#747578 100%)",
              px: { xs: 2, md: 5 },
              py: { xs: 8, md: 12 },
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* TITLE */}
            <Typography
              sx={{
                fontWeight: 800,
                color: "#fff",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textShadow: "0 3px 12px rgba(0,0,0,0.45)",
                mb: 3,
              }}
            >
              Get your labs.
              <br />
              Go for your optimal.
            </Typography>

            {/* CTA ROW */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row" },
                mb: 5,
              }}
            >
              <Button
                onClick={() => handleNavigation("/start-labs")}
                sx={{
                  bgcolor: "#fff",
                  color: "#00359E",
                  px: 4,
                  py: 1.2,
                  borderRadius: 5,
                  fontWeight: 800,
                  "&:hover": { 
                    bgcolor: "#f2f2f2",
                    transform: "translateY(-2px)",
                  },
                  transition: "0.3s ease",
                }}
              >
                Start my labs
              </Button>

              {/* Learn More Button - Now Downloads PDF */}
              <Button
                component="a"
                href="/labs-information.pdf" // Path to your PDF in public folder
                download="Labs-Information-Guide.pdf" // Suggested filename for download
                sx={{
                  border: "2px solid #fff",
                  color: "#fff",
                  px: 4,
                  py: 1.2,
                  borderRadius: 5,
                  fontWeight: 800,
                  "&:hover": { 
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "0.3s ease",
                  textDecoration: "none", // Remove underline from link
                }}
              >
                Learn More
              </Button>
            </Box>

            {/* ================== CARDS SIDE BY SIDE ================== */}
            <Grid container spacing={3} sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 0 } }}>
              
              {/* LEFT CARD */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: { xs: "420px", md: "500px" },
                    p: { xs: 4, md: 6 },
                    borderRadius: 4,
                    bgcolor: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "0.35s ease",
                    "&:hover": { 
                      transform: "translateY(-5px)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 900, color: "#fff", fontSize: { xs: 24, md: 28 }, mb: 1 }}>
                      Unlock your
                    </Typography>
                    <Typography sx={{ color: "#fff", opacity: 0.9, fontWeight: 600, fontSize: "1.125rem" }}>
                      Biological Age
                    </Typography>
                  </Box>

                  <Box
                    component="img"
                    src={bioAgeImg}
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      mt: 3,
                      height: "250px",
                      objectFit: "cover",
                      flexGrow: 1,
                    }}
                  />

                  <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, gap: 2 }}>
                    <Button
                      onClick={() => handleNavigation("/science")}
                      sx={{
                        borderRadius: 5,
                        bgcolor: "#00359E",
                        color: "#fff",
                        px: 3,
                        py: 1,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        "&:hover": { 
                          bgcolor: "#003B9D",
                          transform: "translateY(-2px)",
                        },
                        transition: "0.3s ease",
                      }}
                    >
                      Get the science
                    </Button>

                    <Button
                      component="a"
                      href="/biological-age-guide.pdf" // PDF for Biological Age
                      download="Biological-Age-Guide.pdf"
                      variant="outlined"
                      sx={{
                        borderRadius: 5,
                        color: "#fff",
                        border: "2px solid #fff",
                        px: 3,
                        py: 1,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        "&:hover": { 
                          bgcolor: "rgba(255,255,255,0.1)",
                          transform: "translateY(-2px)",
                        },
                        transition: "0.3s ease",
                        textDecoration: "none",
                      }}
                    >
                      Download Guide
                    </Button>
                  </Box>
                </Card>
              </Grid>

              {/* RIGHT CARD */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: { xs: "420px", md: "500px" },
                    p: { xs: 4, md: 6 },
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.25)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "0.35s ease",
                    "&:hover": { 
                      transform: "translateY(-5px)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontWeight: 900, color: "#fff", fontSize: { xs: "1.2rem", md: "1.3rem" }, mb: 1 }}>
                      Test up to 120 biomarkers
                    </Typography>
                    <Typography sx={{ color: "#fff", opacity: 0.9, fontWeight: 600, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                      Deep inside your health.
                    </Typography>
                  </Box>

                  <Box
                    component="img"
                    src={biomarkersImg}
                    sx={{
                      width: "100%",
                      borderRadius: 3,
                      mt: 3,
                      height: "250px",
                      objectFit: "cover",
                      flexGrow: 1,
                    }}
                  />

                  <Box sx={{ textAlign: "right", mt: 3 }}>
                   <Button
                      component="a"
                      href="/biological-age-guide.pdf" // PDF for Biological Age
                      download="Biological-Age-Guide.pdf"
                      variant="outlined"
                      sx={{
                        borderRadius: 5,
                        color: "#fff",
                        border: "2px solid #fff",
                        px: 3,
                        py: 1,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        "&:hover": { 
                          bgcolor: "rgba(255,255,255,0.1)",
                          transform: "translateY(-2px)",
                        },
                        transition: "0.3s ease",
                        textDecoration: "none",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>

            <Typography
              variant="caption"
              sx={{
                mt: 4,
                color: "rgba(255,255,255,0.8)",
                textAlign: "center",
                display: "block",
              }}
            >
              Images are for illustrative purposes only.
            </Typography>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
}