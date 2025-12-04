import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Zap, Dumbbell, Heart, Brain } from 'lucide-react';

import bannerImg from "../../assets/images/beforeafter.jpg";
import encloVideo from "../../assets/Videos/medicalexperts.mp4";
import productImage  from "../../assets/images/medicine.jpg";

const Enclomiphene = () => {
  const palette = {
    blue: "#00359E",
    grey: "#747578",
    lightGrey: "#8B8D8E",
    white: "#FFFFFF",
    black: "#000000",
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "75vh", md: "90vh" },
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
            zIndex: 1,
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                maxWidth: 520,
                p: { xs: 3, md: 4 },
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Typography sx={{ fontSize: 12, letterSpacing: 2, color: "#fff" }}>
                Hormone Optimization
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 32, md: 40 },
                  fontWeight: 900,
                  color: "#00359E",
                  mb: 1,
                }}
              >
                Enclomiphene
              </Typography>

              <Typography sx={{ color: "#E0E0E0", mb: 2 }}>
                Restore balance. Enhance performance.
              </Typography>

              <Typography sx={{ color: "#fff", mb: 3 }}>
                Clinically trusted to support natural testosterone production and
                optimize hormonal health with precision and safety.
              </Typography>

              <Button
                sx={{
                  backgroundColor: palette.blue,
                  color: "#fff",
                  px: 5,
                  py: 1.5,
                  borderRadius: "50px",
                  fontWeight: 700,
                }}
              >
                Start Now
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ================= TEXT LEFT — VIDEO RIGHT ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9fafc" }}>
        <Container>
          <Grid
            container
            spacing={6}
            alignItems="stretch"
            direction={{ xs: "column", md: "row" }}
            wrap={{ xs: "wrap", md: "nowrap" }}
          >
            {/* LEFT SIDE TEXT */}
            <Grid item xs={12} md={6} display="flex" flexDirection="column">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1 }}
              >
                {/* Section Badge */}
                <Typography
                  sx={{
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: palette.blue,
                    mb: 2,
                    fontWeight: 700,
                    display: "inline-block",
                    backgroundColor: `${palette.blue}15`,
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                  }}
                >
                  Science Backed
                </Typography>

                {/* Main Heading */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "32px", md: "42px" },
                    fontWeight: 800,
                    color: palette.black,
                    mb: 3,
                    lineHeight: 1.2,
                  }}
                >
                  The Science Behind{" "}
                  <Box component="span" sx={{ color: palette.blue }}>
                    Enclomiphene
                  </Box>
                </Typography>

                {/* Description */}
                <Typography sx={{ fontSize: 16, color: palette.grey, mb: 4, lineHeight: 1.8 }}>
                  Enclomiphene is a selective estrogen receptor modulator (SERM) 
                  that works by blocking estrogen receptors in the hypothalamus, 
                  leading to increased production of gonadotropin-releasing hormone 
                  (GnRH). This stimulates the pituitary gland to release more 
                  luteinizing hormone (LH) and follicle-stimulating hormone (FSH), 
                  which in turn signal the testes to produce more testosterone.
                </Typography>

                {/* Benefits List */}
                <Box sx={{ mb: 5 }}>
                  {[
                    "Increases natural testosterone production",
                    "Improves muscle mass and strength",
                    "Enhances libido and sexual performance",
                    "Boosts energy levels and vitality",
                    "Supports bone density and health",
                    "Improves mood and cognitive function"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2.5 }}>
                        <CheckCircleIcon sx={{ color: palette.blue, fontSize: 22, mr: 2, mt: 0.2 }} />
                        <Typography sx={{ fontSize: 16, color: palette.black, fontWeight: 500 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* RIGHT SIDE VIDEO */}
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent={{ md: "flex-end", xs: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                >
                  <video
                    src={encloVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

{/* ================= COMPACT BENEFITS SECTION ================= */}
<Box sx={{ 
  py: { xs: 8, md: 12 }, 
  backgroundColor: "#fff",
  position: "relative"
}}>
  <Container>
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ 
        textAlign: "center", 
        mb: { xs: 5, md: 7 }
      }}>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: palette.blue,
            mb: 1.5,
            display: "inline-block",
          }}
        >
          Key Benefits
        </Typography>
        
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "28px", md: "36px" },
            mb: 2,
            color: palette.black,
            lineHeight: 1.2,
          }}
        >
          Why Choose{" "}
          <Box component="span" sx={{ color: palette.blue }}>
            Enclomiphene
          </Box>
        </Typography>
        
        <Typography
          sx={{
            fontSize: "16px",
            color: palette.grey,
            lineHeight: 1.6,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Experience comprehensive hormonal optimization through science-backed benefits
        </Typography>
      </Box>
    </motion.div>

    {/* Compact Benefits Grid */}
    <Grid container spacing={3} justifyContent="center">
      {[
        {
          icon: "Zap",
          title: "Energy Boost",
          description: "Enhanced daily energy and vitality",
          color: "#FF6B35",
        },
        {
          icon: "Dumbbell",
          title: "Muscle Strength",
          description: "Improved muscle mass and strength",
          color: "#00359E",
        },
        {
          icon: "Heart",
          title: "Sexual Health",
          description: "Enhanced libido and performance",
          color: "#E91E63",
        },
        {
          icon: "Brain",
          title: "Mental Clarity",
          description: "Better focus and cognitive function",
          color: "#673AB7",
        },
      ].map((benefit, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2 }
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                borderRadius: "16px",
                backgroundColor: "#fff",
                border: `1px solid ${palette.blue}10`,
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
                transition: "all 0.2s ease",
                height: "100%",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0, 53, 158, 0.08)",
                  borderColor: `${palette.blue}20`,
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: `${benefit.color}08`,
                  mb: 2.5,
                }}
              >
                {benefit.icon === "Zap" && <Zap size={24} color={benefit.color} strokeWidth={2} />}
                {benefit.icon === "Dumbbell" && <Dumbbell size={24} color={benefit.color} strokeWidth={2} />}
                {benefit.icon === "Heart" && <Heart size={24} color={benefit.color} strokeWidth={2} />}
                {benefit.icon === "Brain" && <Brain size={24} color={benefit.color} strokeWidth={2} />}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: palette.black,
                  mb: 1,
                }}
              >
                {benefit.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "13px",
                  color: palette.grey,
                  lineHeight: 1.5,
                }}
              >
                {benefit.description}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>

    {/* Mini Stats */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Box
        sx={{
          mt: 8,
          p: { xs: 3, md: 4 },
          textAlign: "center",
          maxWidth: "800px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        {[
          { value: "94%", label: "Energy Improvement" },
          { value: "87%", label: "Mental Clarity" },
          { value: "91%", label: "Physical Performance" },
        ].map((stat, index) => (
          <Box key={index}>
            <Typography
              sx={{
                fontSize: { xs: "28px", md: "32px" },
                fontWeight: 800,
                color: palette.blue,
                lineHeight: 1,
                mb: 0.5,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                color: palette.grey,
                fontWeight: 500,
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </motion.div>

    {/* Compact CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Box sx={{ 
        textAlign: "center", 
        mt: 6 
      }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 600,
            color: palette.blue,
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Ready to Start Your Journey?
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            color: palette.grey,
            mb: 4,
            maxWidth: "400px",
            mx: "auto",
          }}
        >
          Join thousands who have transformed their health with Enclomiphene
        </Typography>
      </Box>
    </motion.div>
    
  </Container>
{/* ================= PRODUCT SHOWCASE SECTION ================= */}
<Box sx={{ 
  py: { xs: 8, md: 12 }, 
  backgroundColor: "#f9fafc",
  position: "relative"
}}>
  {/* Decorative background element */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "120px",
      background: `linear-gradient(to bottom, ${palette.blue}05, transparent)`,
      zIndex: 0,
    }}
  />

  <Container sx={{ position: "relative", zIndex: 1 }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0, 53, 158, 0.1)",
                border: `1px solid ${palette.blue}15`,
                maxWidth: "500px",
                mx: "auto",
                backgroundColor: "#fff",
                p: 2,
              }}
            >
              {/* Product image - Replace this import with your actual image */}
              {/* Example: import productImage from "../../assets/images/enclomiphene-product.jpg"; */}
              <Box
                component="img"
                src={productImage} // Your imported image variable goes here
                alt="Enclomiphene Product"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  display: "block",
                }}
              />
              
              {/* Product label */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  backgroundColor: palette.blue,
                  color: palette.white,
                  px: 2,
                  py: 0.5,
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                Advanced Formula
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Product Description */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box>
              {/* Section Badge */}
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: palette.blue,
                  mb: 2,
                  display: "inline-block",
                }}
              >
                Precision Medicine
              </Typography>

              {/* Heading */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "28px", md: "34px" },
                  mb: 3,
                  color: palette.black,
                  lineHeight: 1.2,
                }}
              >
                The{" "}
                <Box component="span" sx={{ color: palette.blue }}>
                  Enclomiphene
                </Box>{" "}
                Formulation
              </Typography>

              {/* Product Features */}
              <Box sx={{ mb: 4 }}>
                {[
                  "Precision-dosed for optimal hormonal response",
                  "Pharmaceutical-grade purity and consistency",
                  "Designed for gradual, sustainable results",
                  "Third-party tested for quality assurance",
                  "Customizable dosing based on individual needs",
                  "Proven safety profile in clinical studies"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: palette.blue,
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "15px",
                          color: palette.black,
                          fontWeight: 500,
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Product Description */}
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: palette.grey,
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  Our Enclomiphene formulation represents the pinnacle of hormone optimization therapy. 
                  Each batch undergoes rigorous testing to ensure purity, potency, and consistency, 
                  providing you with a reliable solution for testosterone enhancement.
                </Typography>
                
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: palette.grey,
                    lineHeight: 1.7,
                  }}
                >
                  Developed in FDA-registered facilities and backed by clinical research, 
                  our formula delivers predictable results while prioritizing safety and 
                  long-term health outcomes.
                </Typography>
              </Box>

              {/* Specifications */}
              <Box
                sx={{
                  backgroundColor: `${palette.blue}05`,
                  borderRadius: "12px",
                  p: 3,
                  border: `1px solid ${palette.blue}10`,
                }}
              >
                <Grid container spacing={2}>
                  {[
                    { label: "Form", value: "Oral Tablet" },
                    { label: "Purity", value: ">99%" },
                    { label: "Storage", value: "Room Temperature" },
                    { label: "Shelf Life", value: "24 Months" },
                  ].map((spec, index) => (
                    <Grid item xs={6} key={index}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: palette.blue,
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            mb: 0.5,
                          }}
                        >
                          {spec.label}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: palette.black,
                          }}
                        >
                          {spec.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  </Container>
</Box>
{/* ================= FINAL CTA SECTION ================= */}
<Box sx={{ 
  py: { xs: 10, md: 14 }, 
  backgroundColor: palette.blue,
  position: "relative",
  overflow: "hidden"
}}>
  {/* Background decorative elements */}
  <Box
    sx={{
      position: "absolute",
      top: -100,
      right: -100,
      width: "300px",
      height: "300px",
      background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`,
      borderRadius: "50%",
      zIndex: 0,
    }}
  />
  <Box
    sx={{
      position: "absolute",
      bottom: -150,
      left: -150,
      width: "400px",
      height: "400px",
      background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)`,
      borderRadius: "50%",
      zIndex: 0,
    }}
  />

  <Container sx={{ position: "relative", zIndex: 2 }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ 
        textAlign: "center", 
        maxWidth: "800px",
        mx: "auto"
      }}>
        {/* Badge/Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: palette.white,
              mb: 3,
              display: "inline-block",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              px: 3,
              py: 1,
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Start Your Transformation
          </Typography>
        </motion.div>

        {/* Main Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "32px", md: "44px" },
            mb: 3,
            color: palette.white,
            lineHeight: 1.2,
          }}
        >
          Ready to Optimize Your{" "}
          <Box component="span" sx={{ 
            color: "rgba(255,255,255,0.9)",
            background: "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Hormonal Health?
          </Box>
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.85)",
            lineHeight: 1.6,
            mb: 5,
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Take the first step towards balanced hormones, enhanced vitality, and 
          improved performance. Our medical team is ready to guide you through 
          a personalized treatment plan.
        </Typography>

        {/* Single CTA Button */}
        <Box sx={{ 
          display: "flex", 
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          mb: 5
        }}>
          {/* Primary CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              onClick={() => navigate("/consultation")}
              sx={{
                backgroundColor: palette.white,
                color: palette.blue,
                px: 5,
                py: 1.8,
                fontSize: "15px",
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                minWidth: "200px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Begin Your Consultation
            </Button>
          </motion.div>

          {/* Text link in pill shape */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Typography
              onClick={() => navigate("/plans")}
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.85)",
                px: 4,
                py: 1.2,
                borderRadius: "50px",
                display: "inline-block",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: palette.white,
                },
              }}
            >
              Or explore our treatment plans
            </Typography>
          </motion.div>
        </Box>

        {/* Features/Guarantees */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {[
            { text: "Free Initial Consultation" },
            { text: "Personalized Treatment Plan" },
            { text: "Discreet & Secure Delivery" },
            { text: "Ongoing Medical Support" },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5
                }}>
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: palette.white,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ 
            mt: 6, 
            pt: 4,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.7)",
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Trusted & Secure
            </Typography>
            <Box sx={{ 
              display: "flex", 
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                }}
              >
                <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>✓</Box>
                HIPAA Compliant
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                }}
              >
                <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>✓</Box>
                Licensed Physicians
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                }}
              >
                <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>✓</Box>
                Secure Payments
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  </Container>
</Box>
</Box>
    </>
  );
};

export default Enclomiphene;