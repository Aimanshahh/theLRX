// Herostyle.jsx — Enhanced top card only
import React from "react";
import { Box, Grid, Card, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import phoneMock from "../../assets/Herocards/Treatment1.png";
import bioAgeImg from "../../assets/Herocards/Treatment1.png";
import biomarkersImg from "../../assets/Herocards/Treatment1.png";

export default function Herostyle() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1400px" }}>

        {/* NAV PILLS */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2, md: 3 },
              px: { xs: 2, sm: 3, md: 4 },
              py: 1.5,
              bgcolor: "#FFFFFF",
              borderRadius: 10,
              boxShadow: "0 3px 10px rgba(116,117,120,0.15)",
              fontWeight: 600,
              flexWrap: { xs: "wrap", sm: "nowrap" },
              justifyContent: "center",
              border: "1px solid #8B8D8E",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, color: "#747578" }}>
              Boost testosterone
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, color: "#747578" }}>
              Tackle anxiety
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" }, color: "#747578" }}>
              Get smooth skin
            </Typography>
            <Typography 
              variant="body2" 
              onClick={() => handleNavigation('/treatments')}
              sx={{ 
                fontSize: { xs: "0.75rem", sm: "0.875rem" }, 
                color: "#00359E", 
                fontWeight: 700,
                cursor: 'pointer',
                '&:hover': { color: "#003B9D" }
              }}
            >
              Browse all treatments
            </Typography>
          </Box>
        </Box>

        {/* MAIN HERO */}
        <Box
          sx={{
            width: "100%",
            borderRadius: 4,
            mt: 4,
            position: "relative",
            background: "linear-gradient(135deg, #00359E 0%, #003B9D 30%, #8B8D8E 70%, #747578 100%)",
            pt: { xs: 8, md: 12 },
            pb: { xs: 8, md: 12 },
            px: { xs: 2, sm: 3, md: 5 },
            overflow: "hidden",
            minHeight: "800px",
          }}
        >

          {/* TITLE */}
          <Box 
            sx={{ 
              textAlign: "center", 
              mb: 4,
              position: "relative",
              zIndex: 3
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                lineHeight: 1.2,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Get your labs.
              <br /> Go for your optimal.
            </Typography>
          </Box>

          {/* CTA BUTTONS */}
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              position: "relative",
              zIndex: 3
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleNavigation('/start-labs')}
              sx={{
                bgcolor: "#FFFFFF",
                color: "#00359E",
                borderRadius: 5,
                px: 3,
                py: 1,
                fontWeight: 700,
                width: { xs: "200px", sm: "auto" },
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                "&:hover": {
                  bgcolor: "#f0f0f0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                  color: "#003B9D"
                },
                transition: "all 0.3s ease"
              }}
            >
              Start my labs
            </Button>

            <Button
              variant="outlined"
              onClick={() => handleNavigation('/learn-more')}
              sx={{
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                borderRadius: 5,
                px: 3,
                py: 1,
                fontWeight: 700,
                width: { xs: "200px", sm: "auto" },
                borderWidth: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderColor: "#FFFFFF",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease"
              }}
            >
              Learn more
            </Button>
          </Box>

          {/* CARDS SECTION */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              position: "relative",
              zIndex: 3
            }}
          >
            {/* BIG CENTER CARD */}
            <Card
              onClick={() => handleNavigation('/baseline')}
              sx={{
                width: { xs: "100%", md: "1000px" },
                maxWidth: "95%",
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(15px)",
                mb: 1,
                minHeight: { xs: "250px", md: "300px" },
                display: "flex",
                alignItems: "center",
                border: "2px solid rgba(255,255,255,0.3)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                  bgcolor: "rgba(255,255,255,0.25)",
                },
                transition: "all 0.4s ease"
              }}
            >
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Typography sx={{ 
                    fontWeight: 900, 
                    color: "#fff", 
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    mb: 1
                  }}>
                    Find your baseline
                  </Typography>
                  <Typography sx={{ 
                    color: "#ffe9e2", 
                    opacity: 0.95, 
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 600,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)"
                  }}>
                    Understand where you stand.
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                  <Box 
                    component="img" 
                    src={phoneMock} 
                    sx={{ 
                      width: { xs: "130px", sm: "160px", md: "180px" },
                      maxWidth: "100%",
                      height: "auto",
                      filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      }
                    }} 
                  />
                </Grid>

                <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" }, mt: { xs: 2, md: 0 } }}>
                  <Typography sx={{ 
                    fontWeight: 900, 
                    color: "#fff", 
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    mb: 1
                  }}>
                    Plan your breakthrough
                  </Typography>
                  <Typography sx={{ 
                    color: "#ffe9e2", 
                    opacity: 0.95, 
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    fontWeight: 600,
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)"
                  }}>
                    Doctor-reviewed improvements.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation('/treatment-plan');
                    }}
                    sx={{
                      mt: 1.5,
                      bgcolor: "#FFFFFF",
                      color: "#00359E",
                      borderRadius: 5,
                      px: 3,
                      py: 1,
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                      "&:hover": {
                        bgcolor: "#f0f0f0",
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                        color: "#003B9D"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    Explore the plan
                  </Button>
                </Grid>
              </Grid>
            </Card>

            {/* TWO LOWER CARDS */}
            <Grid
              container
              spacing={3}
              sx={{
                maxWidth: "1000px",
                width: "95%",
                justifyContent: "center",
              }}
            >
              {/* LEFT CARD */}
              <Grid item xs={12} md={6}>
                <Card
                  onClick={() => handleNavigation('/biological-age')}
                  sx={{
                    height: { xs: "420px", md: "500px" },
                    p: { xs: 4, md: 8 },
                    borderRadius: 4,
                    bgcolor: "rgba(0,0,0,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                    backdropFilter: "blur(8px)",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  <Box>
                    <Typography sx={{ 
                      fontSize: { xs: 24, md: 28 }, 
                      fontWeight: 900, 
                      color: "white",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)"
                    }}>
                      Unlock your
                    </Typography>

                    <Typography sx={{ 
                      color: "white", 
                      opacity: 0.9, 
                      fontSize: { xs: "1rem", md: "1.125rem" },
                      fontWeight: 600,
                      textShadow: "0 1px 4px rgba(0,0,0,0.4)"
                    }}>
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
                      flexGrow: 1,
                      objectFit: "cover",
                      maxHeight: { xs: "220px", md: "280px" },
                      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                      border: "2px solid rgba(255,255,255,0.1)"
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 3,
                      gap: 2
                    }}
                  >
                    <Button 
                      size="small" 
                      variant="contained"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation('/science');
                      }}
                      sx={{ 
                        borderRadius: 5,
                        fontWeight: 700,
                        bgcolor: "#00359E",
                        color: "#FFFFFF",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        "&:hover": {
                          bgcolor: "#003B9D",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Get the science
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation('/learn-biological-age');
                      }}
                      sx={{
                        borderRadius: 5,
                        color: "white",
                        borderColor: "white",
                        borderWidth: 2,
                        fontWeight: 700,
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.1)",
                          borderColor: "white",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Card>
              </Grid>

              {/* RIGHT CARD */}
              <Grid item xs={12} md={6}>
                <Card
                  onClick={() => handleNavigation('/biomarkers')}
                  sx={{
                    height: { xs: "420px", md: "500px" },
                    p: { xs: 4, md: 8 },
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.25)",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                    backdropFilter: "blur(8px)",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  <Box>
                    <Typography sx={{ 
                      fontWeight: 900, 
                      color: "#FFFFFF", 
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                    }}>
                      Test up to 120 biomarkers
                    </Typography>

                    <Typography sx={{ 
                      color: "#FFFFFF", 
                      opacity: 0.9, 
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      fontWeight: 600,
                      textShadow: "0 1px 4px rgba(0,0,0,0.4)"
                    }}>
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
                      flexGrow: 1,
                      objectFit: "cover",
                      maxHeight: { xs: "220px", md: "280px" },
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                      border: "2px solid rgba(255,255,255,0.2)"
                    }}
                  />

                  <Box sx={{ textAlign: "right", mt: 3 }}>
                    <Button 
                      size="small" 
                      variant="contained"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation('/biomarkers-info');
                      }}
                      sx={{ 
                        borderRadius: 5,
                        fontWeight: 700,
                        bgcolor: "#FFFFFF",
                        color: "#00359E",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        "&:hover": {
                          bgcolor: "#f0f0f0",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
                          color: "#003B9D"
                        },
                        transition: "all 0.3s ease"
                      }}
                    >
                      Meet the markers
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