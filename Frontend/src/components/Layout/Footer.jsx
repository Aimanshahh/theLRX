import React from "react";
import { Box, Grid, Typography, Link, IconButton, Container } from "@mui/material";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import logo from "../../assets/LRXLOGOS/LOGO-2.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #00359E 0%, #00257A 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.08) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ py: 8, position: "relative", zIndex: 1 }}>
          
          {/* LEFT — LOGO + TEXT */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" gap={3}>
              {/* Logo with white background for visibility */}
              <Box 
                sx={{ 
                  display: "inline-flex",
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  width: "fit-content"
                }}
              >
                <img 
                  src={logo} 
                  alt="Liquid Rx Logo" 
                  style={{ 
                    width: "200px",
                    filter: "brightness(1.1) contrast(1.1)"
                  }} 
                />
              </Box>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  fontWeight: 300
                }}
              >
                Premium liquid wellness and Rx solutions built with <Box component="span" sx={{ fontWeight: 600 }}>science + care</Box>.
              </Typography>

              {/* Social Media - Mobile */}
              <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1, mt: 2 }}>
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      "&:hover": { 
                        color: "#fff", 
                        background: "rgba(255, 255, 255, 0.2)",
                        transform: "translateY(-2px)"
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon size={20} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* CENTER — QUICK LINKS */}
          <Grid item xs={6} md={3}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                fontWeight: "bold",
                fontSize: "1.1rem",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: 30,
                  height: 2,
                  background: "linear-gradient(90deg, #fff, transparent)",
                  borderRadius: 2
                }
              }}
            >
              Quick Links
            </Typography>
            {["Home", "Treatments", "Shop", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontWeight: 300,
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    color: "#fff",
                    transform: "translateX(5px)",
                    "& .arrow": {
                      opacity: 1,
                      transform: "translateX(3px)"
                    }
                  },
                }}
              >
                <ArrowRight 
                  size={16} 
                  className="arrow"
                  style={{ 
                    marginRight: 8, 
                    opacity: 0, 
                    transition: "all 0.3s ease" 
                  }} 
                />
                {item}
              </Link>
            ))}
          </Grid>

          {/* RIGHT — CONTACT */}
          <Grid item xs={6} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 3, 
                fontWeight: "bold",
                fontSize: "1.1rem",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: 30,
                  height: 2,
                  background: "linear-gradient(90deg, #fff, transparent)",
                  borderRadius: 2
                }
              }}
            >
              Get In Touch
            </Typography>

            {[
              { icon: Mail, text: "support@liquidrx.com" },
              { icon: Phone, text: "+92 300 1234567" },
              { icon: MapPin, text: "Islamabad, Pakistan" }
            ].map((item, index) => (
              <Box 
                key={index}
                display="flex" 
                alignItems="center" 
                gap={2} 
                mb={2.5}
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#fff",
                    transform: "translateX(3px)"
                  }
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <item.icon size={18} />
                </Box>
                <Typography sx={{ fontWeight: 300 }}>{item.text}</Typography>
              </Box>
            ))}

            {/* Social Media - Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, mt: 3 }}>
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    "&:hover": { 
                      color: "#fff", 
                      background: "rgba(255, 255, 255, 0.2)",
                      transform: "translateY(-2px)"
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Icon size={20} />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM COPYRIGHT BAR */}
        <Box
          sx={{
            py: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            position: "relative",
            zIndex: 1,
            fontWeight: 300,
            fontSize: "0.9rem",
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.02)",
            borderRadius: "12px 12px 0 0",
          }}
        >
          © {new Date().getFullYear()} Liquid Rx — All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
}