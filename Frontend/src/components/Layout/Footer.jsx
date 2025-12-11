import React from "react";
import { Box, Grid, Typography, Link, Container, IconButton } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";
import logo from "../../assets/LRXLOGOS/LOGO-5.png";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(135deg, #00359E 0%, #00257A 100%)",
        color: "#fff",
        pt: 10,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>

          {/* LOGO + BRAND DESCRIPTION */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <img
                src={logo}
                alt="Liquid Rx Logo"
                style={{ width: "170px", display: "block" }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "0.92rem",
                lineHeight: 1.7,
                maxWidth: "320px",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Premium liquid wellness formulas crafted with science,
              medical expertise, and results in mind.
            </Typography>

            {/* SOCIAL ICONS */}
            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    color: "#fff",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.25)",
                    },
                  }}
                >
                  <Icon size={18} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* SHOP */}
          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.3px",
              }}
            >
              Shop
            </Typography>

            {["Weight Loss", "Women's Health", "Men's Health", "Supplements"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: "block",
                    mb: 1.2,
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item}
                </Link>
              )
            )}
          </Grid>

          {/* COMPANY */}
          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.3px",
              }}
            >
              Company
            </Typography>

            {["About Us", "Careers", "Blog", "Medical Team"].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  display: "block",
                  mb: 1.2,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* SUPPORT */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.3px",
              }}
            >
              Support
            </Typography>

            {[
              "Contact Support",
              "FAQs",
              "Shipping & Returns",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                sx={{
                  display: "block",
                  mb: 1.2,
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  "&:hover": { color: "#fff" },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>
        </Grid>

        {/* LEGAL DISCLAIMER */}
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: "1px solid rgba(255,255,255,0.25)",
            color: "rgba(255,255,255,0.65)",
            fontSize: "0.75rem",
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ maxWidth: "900px", mb: 3 }}>
            *These statements have not been evaluated by the FDA. Liquid Rx products are not intended 
            to diagnose, treat, cure, or prevent any disease. Consult your healthcare provider 
            before using any new supplement or medication. Individual results may vary.
          </Typography>

          <Typography sx={{ maxWidth: "900px" }}>
            All medical services are provided by licensed healthcare professionals. By using this 
            website, you agree to our Terms & Conditions and acknowledge reviewing our Privacy Policy.
          </Typography>
        </Box>

        {/* COPYRIGHT BAR */}
        <Box
          sx={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.8rem",
            mt: 4,
          }}
        >
          © {new Date().getFullYear()} Liquid Rx. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
}
