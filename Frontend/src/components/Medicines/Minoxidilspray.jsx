import React from "react";
import { Box, Typography, Button, Container, Chip, alpha, Grid, Card } from "@mui/material";
import { ArrowRight, CheckCircle, Droplet, Sparkles, Target, Shield, Users, TrendingUp, Heart, Activity, Brain, Layers, Clock, Package, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";
import minoxidilSprayImage from "../../assets/images/hair regrowth.jpg";
// Add this import for your product image
import productImage from "../../assets/images/medicine.jpg";

const MinoxidilSpray = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: "linear-gradient(135deg, #ffffff, #f7f9fc)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 }
          }}>
            
            {/* LEFT TEXT SECTION */}
            <Box sx={{ 
              flex: 1,
              maxWidth: { md: "50%" }
            }}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="FDA APPROVED TREATMENT"
                  icon={<CheckCircle size={16} />}
                  sx={{
                    bgcolor: alpha("#00359E", 0.12),
                    color: "#00359E",
                    fontWeight: 700,
                    mb: 3,
                    py: 1.5,
                    px: 2
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.2rem", md: "3.8rem" },
                    fontWeight: 900,
                    mb: 3,
                    lineHeight: 1.1,
                    color: "#000000"
                  }}
                >
                  Regrow Your{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #00359E, #003B9D)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      display: "block"
                    }}
                  >
                    Hair Naturally
                  </Box>
                </Typography>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: "#747578", 
                    mb: 4, 
                    lineHeight: 1.7,
                    fontSize: { xs: "1rem", md: "1.2rem" }
                  }}
                >
                  Minoxidil 5% Spray — clinically proven formula for hair regrowth. 
                  Visible improvement in just 4-6 months.
                </Typography>

                {/* FEATURES */}
                <Box sx={{ mb: 5 }}>
                  {[
                    "FDA-approved 5% Minoxidil formula",
                    "Non-greasy, quick-absorbing spray",
                    "Suitable for both men & women",
                    "Clinically proven hair regrowth"
                  ].map((item, i) => (
                    <Box 
                      key={i} 
                      sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: 2,
                        mb: 2.5 
                      }}
                    >
                      <CheckCircle size={22} color="#00359E" />
                      <Typography sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* BUTTON */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight />}
                    sx={{
                      px: { xs: 3, md: 5 },
                      py: 1.8,
                      fontWeight: 700,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      background: "linear-gradient(135deg, #00359E, #003B9D)",
                      borderRadius: "10px",
                      boxShadow: "0 12px 30px rgba(0, 53, 158, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #003B9D, #00359E)",
                        boxShadow: "0 16px 40px rgba(0, 53, 158, 0.4)"
                      }
                    }}
                  >
                    Start Treatment
                  </Button>
                </motion.div>

                {/* STATS */}
                <Box sx={{ mt: 6, display: "flex", gap: { xs: 2, md: 4 }, flexWrap: "wrap" }}>
                  {[
                    { icon: <Users size={20} color="#00359E" />, value: "12K+", label: "Patients", color: "#00359E" },
                    { icon: <TrendingUp size={20} color="#003B9D" />, value: "85%", label: "Success Rate", color: "#003B9D" },
                    { icon: <Shield size={20} color="#00359E" />, value: "FDA", label: "Approved", color: "#00359E" }
                  ].map((stat, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: "8px", 
                        bgcolor: alpha(stat.color, 0.1), 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center" 
                      }}>
                        {stat.icon}
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ color: stat.color, fontWeight: 800 }}>{stat.value}</Typography>
                        <Typography variant="caption" sx={{ color: "#747578" }}>{stat.label}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>

            {/* RIGHT IMAGE SECTION */}
            <Box sx={{ 
              flex: 1,
              maxWidth: { md: "50%" },
              width: "100%"
            }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* MAIN IMAGE */}
                <Box
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 40px 80px rgba(0, 53, 158, 0.25)",
                    position: "relative",
                    mb: 4
                  }}
                >
                  <Box
                    component="img"
                    src={minoxidilSprayImage}
                    alt="Minoxidil 5% Spray"
                    sx={{
                      width: "100%",
                      height: { xs: "300px", md: "500px" },
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.05)"
                      }
                    }}
                  />
                  
                  {/* BADGE ON IMAGE */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      bgcolor: "#00359E",
                      color: "#FFFFFF",
                      px: 2.5,
                      py: 1,
                      borderRadius: "20px",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Target size={14} />
                    5% MAX STRENGTH
                  </Box>
                </Box>

                {/* ICONS BELOW IMAGE */}
                <Box sx={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: { xs: "wrap", md: "nowrap" }
                }}>
                  {[
                    {
                      icon: <Droplet size={22} color="#00359E" />,
                      text: "Quick Absorption",
                      desc: "Non-greasy formula",
                      color: "#00359E"
                    },
                    {
                      icon: <Sparkles size={22} color="#003B9D" />,
                      text: "Visible Results",
                      desc: "In 4-6 months",
                      color: "#003B9D"
                    },
                    {
                      icon: <Target size={22} color="#00359E" />,
                      text: "5% Strength",
                      desc: "Maximum efficacy",
                      color: "#00359E"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      style={{ flex: 1, minWidth: { xs: "100%", sm: "30%" } }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          p: 2,
                          bgcolor: "white",
                          borderRadius: "12px",
                          border: `1px solid ${alpha(item.color, 0.1)}`,
                          transition: "all 0.3s ease",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                          "&:hover": {
                            bgcolor: alpha(item.color, 0.05),
                            transform: "translateY(-4px)",
                            boxShadow: "0 8px 24px rgba(0, 53, 158, 0.1)"
                          }
                        }}
                      >
                        <Box sx={{ mb: 1 }}>
                          {item.icon}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "#000000",
                            fontSize: "0.9rem",
                            mb: 0.5
                          }}
                        >
                          {item.text}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#8B8D8E",
                            fontSize: "0.75rem"
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SCIENCE BEHIND MINOXIDIL SECTION */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "#FFFFFF",
          position: "relative"
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  fontWeight: 900,
                  color: "#000000",
                  mb: 2
                }}
              >
                The Science Behind{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Minoxidil
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#747578",
                  fontWeight: 400,
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.6
                }}
              >
                How Minoxidil stimulates hair growth through proven biological mechanisms
              </Typography>
            </motion.div>
          </Box>

          {/* Mechanism Cards */}
          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Vasodilation",
                description: "Widens blood vessels to increase blood flow to hair follicles",
                icon: <Heart size={28} color="#00359E" />,
                color: "#00359E",
                detail: "More oxygen & nutrients delivered"
              },
              {
                step: "02",
                title: "Cellular Activation",
                description: "Stimulates cellular activity in dormant follicles",
                icon: <Activity size={28} color="#003B9D" />,
                color: "#003B9D",
                detail: "Activates hair growth phase"
              },
              {
                step: "03",
                title: "Growth Phase Extension",
                description: "Prolongs the active growth (anagen) phase",
                icon: <Brain size={28} color="#00359E" />,
                color: "#00359E",
                detail: "Longer hair growth cycles"
              },
              {
                step: "04",
                title: "Follicle Enlargement",
                description: "Transforms thin hairs into thick terminal hairs",
                icon: <Layers size={28} color="#003B9D" />,
                color: "#003B9D",
                detail: "Thicker, stronger hair strands"
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 4 },
                      bgcolor: "#FFFFFF",
                      border: `1px solid ${alpha(item.color, 0.1)}`,
                      borderRadius: "16px",
                      boxShadow: "0 8px 32px rgba(0, 53, 158, 0.08)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 16px 48px rgba(0, 53, 158, 0.12)",
                        borderColor: alpha(item.color, 0.3)
                      }
                    }}
                  >
                    {/* Step Number */}
                    <Typography
                      sx={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: alpha(item.color, 0.2)
                      }}
                    >
                      {item.step}
                    </Typography>

                    {/* Icon */}
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        bgcolor: alpha(item.color, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        border: `1px solid ${alpha(item.color, 0.2)}`
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: item.color,
                        fontWeight: 800,
                        mb: 2,
                        fontSize: "1.4rem"
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: "#747578",
                        mb: 3,
                        lineHeight: 1.6,
                        fontSize: "0.95rem"
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Detail */}
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        bgcolor: alpha(item.color, 0.05),
                        px: 2,
                        py: 1,
                        borderRadius: "8px"
                      }}
                    >
                      <CheckCircle size={16} color={item.color} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: item.color,
                          fontWeight: 600,
                          fontSize: "0.8rem"
                        }}
                      >
                        {item.detail}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Clinical Evidence Section */}
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              p: { xs: 4, md: 6 },
              bgcolor: alpha("#00359E", 0.03),
              borderRadius: "20px",
              border: `1px solid ${alpha("#00359E", 0.1)}`
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#00359E",
                fontWeight: 800,
                mb: 4,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                textAlign: "center"
              }}
            >
              Clinical Evidence
            </Typography>
            
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Typography sx={{ color: "#747578", mb: 3, lineHeight: 1.7 }}>
                    In multiple clinical trials, 5% Minoxidil has shown significant improvement in hair growth:
                  </Typography>
                  {[
                    "40-45% increase in hair count after 48 weeks",
                    "85% of patients show visible improvement",
                    "Significant increase in hair thickness and density",
                    "Proven safe for long-term use"
                  ].map((point, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          bgcolor: alpha("#00359E", 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        <CheckCircle size={14} color="#00359E" />
                      </Box>
                      <Typography sx={{ color: "#000000", fontSize: "0.95rem" }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 4,
                    bgcolor: "#FFFFFF",
                    borderRadius: "16px",
                    border: `1px solid ${alpha("#00359E", 0.1)}`,
                    boxShadow: "0 8px 32px rgba(0, 53, 158, 0.08)"
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#00359E",
                      fontWeight: 700,
                      mb: 3,
                      textAlign: "center"
                    }}
                  >
                    Study Results Summary
                  </Typography>
                  
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {[
                      { label: "Hair Count Increase", value: "45%", color: "#00359E" },
                      { label: "Patient Satisfaction", value: "85%", color: "#003B9D" },
                      { label: "Hair Thickness", value: "68%", color: "#00359E" },
                      { label: "Treatment Duration", value: "4-6 mo", color: "#003B9D" }
                    ].map((stat, index) => (
                      <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ color: "#000000", fontWeight: 500 }}>
                          {stat.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: stat.color,
                            fontWeight: 800,
                            fontSize: "1.3rem"
                          }}
                        >
                          {stat.value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* PRODUCT SHOWCASE SECTION */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
          position: "relative"
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  fontWeight: 900,
                  color: "#000000",
                  mb: 2
                }}
              >
                The{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Minoxidil 5% Spray
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#747578",
                  fontWeight: 400,
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  lineHeight: 1.6
                }}
              >
                Premium quality formulation designed for optimal hair regrowth
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={6} alignItems="center">
            {/* Product Image */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 40px 80px rgba(0, 53, 158, 0.25)",
                    transform: "perspective(1000px) rotateY(-5deg)",
                    transition: "transform 0.5s ease",
                    "&:hover": {
                      transform: "perspective(1000px) rotateY(0deg)"
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={productImage}
                    alt="Minoxidil 5% Spray Product"
                    sx={{
                      width: "100%",
                      height: { xs: "400px", md: "500px" },
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                  
                  {/* Floating Badges */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      bgcolor: "#FFFFFF",
                      color: "#00359E",
                      px: 2,
                      py: 1,
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <Package size={12} />
                    NEW FORMULA
                  </Box>
                  
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                      bgcolor: "#00359E",
                      color: "#FFFFFF",
                      px: 2,
                      py: 1,
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5
                    }}
                  >
                    <Zap size={12} />
                    5% STRENGTH
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#00359E",
                      fontWeight: 800,
                      mb: 2,
                      fontSize: { xs: "1.8rem", md: "2.5rem" }
                    }}
                  >
                    Premium Minoxidil 5% Solution
                  </Typography>
                  <Typography
                    sx={{
                      color: "#747578",
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                      mb: 3
                    }}
                  >
                    Our advanced formulation combines 5% Minoxidil with nourishing ingredients 
                    to promote healthy hair growth while protecting your scalp.
                  </Typography>
                </Box>

                {/* Key Features */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {[
                    {
                      icon: <Droplet size={24} color="#00359E" />,
                      title: "Quick Absorption",
                      description: "Non-greasy formula absorbs in seconds",
                      color: "#00359E"
                    },
                    {
                      icon: <Clock size={24} color="#003B9D" />,
                      title: "Twice Daily",
                      description: "Morning & evening application",
                      color: "#003B9D"
                    },
                    {
                      icon: <Package size={24} color="#00359E" />,
                      title: "60mL Bottle",
                      description: "1 month supply",
                      color: "#00359E"
                    },
                    {
                      icon: <Calendar size={24} color="#003B9D" />,
                      title: "4-6 Months",
                      description: "For visible results",
                      color: "#003B9D"
                    }
                  ].map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 3 }}>
                          <Box
                            sx={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "12px",
                              bgcolor: alpha(feature.color, 0.1),
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: `1px solid ${alpha(feature.color, 0.2)}`,
                              flexShrink: 0
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ color: "#000000", fontWeight: 700, mb: 0.5 }}>
                              {feature.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#8B8D8E" }}>
                              {feature.description}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                {/* Formula Benefits */}
                <Card
                  sx={{
                    p: 3,
                    mb: 4,
                    bgcolor: alpha("#00359E", 0.03),
                    border: `1px solid ${alpha("#00359E", 0.1)}`,
                    borderRadius: "16px"
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#00359E",
                      fontWeight: 700,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1
                    }}
                  >
                    <Zap size={20} />
                    Advanced Formula Benefits
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {[
                      "5% Minoxidil - Maximum FDA-approved concentration",
                      "Alcohol-free formula reduces scalp irritation",
                      "Added moisturizers for scalp health",
                      "Suitable for all hair types and colors",
                      "Made in FDA-registered facility"
                    ].map((benefit, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <CheckCircle size={18} color="#00359E" />
                        <Typography sx={{ color: "#000000", fontSize: "0.95rem" }}>
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIAL SECTION */}
<Box
  sx={{
    pt: { xs: 4, md: 6 },
    pb: { xs: 8, md: 10 },
    background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
    position: "relative",
    overflow: "hidden"
  }}
>
  <Container maxWidth="lg">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: 900,
          color: "#000000",
          mb: 1,
          textAlign: "center"
        }}
      >
        Real Stories,{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg, #00359E, #003B9D)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Real Results
        </Box>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#747578",
          fontWeight: 400,
          maxWidth: "600px",
          margin: "0 auto 40px",
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.6,
          textAlign: "center"
        }}
      >
        See what our patients have to say about their hair regrowth journey
      </Typography>
    </motion.div>

    {/* Testimonial Carousel */}
    <Box sx={{ position: "relative" }}>
      {/* Carousel Container */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          pb: 2,
          px: 1,
          mx: -1
        }}
      >
        {[
          {
            name: "Michael Rodriguez",
            age: 32,
            duration: "6 months",
            rating: 5,
            image: "👨‍💼",
            content: "After 6 months of consistent use, I've seen incredible regrowth. My hairline is filling in and the texture is much thicker.",
            result: "85% regrowth in crown area"
          },
          {
            name: "Sarah Johnson",
            age: 28,
            duration: "5 months",
            rating: 5,
            image: "👩‍⚕️",
            content: "As a woman with thinning hair, I was skeptical. But within 4 months, I noticed baby hairs growing along my part.",
            result: "Visible improvement in 4 months"
          },
          {
            name: "David Chen",
            age: 45,
            duration: "8 months",
            rating: 4,
            image: "👨‍💻",
            content: "The convenience of the spray format made it easy to stick with the routine. By month 8 the difference was clear.",
            result: "Full coverage achieved"
          },
          {
            name: "Emily Williams",
            age: 35,
            duration: "7 months",
            rating: 5,
            image: "👩‍🏫",
            content: "I tried multiple treatments before this. Minoxidil spray gave me the best results without side effects.",
            result: "95% satisfaction rate"
          },
          {
            name: "James Wilson",
            age: 40,
            duration: "9 months",
            rating: 5,
            image: "👨‍🔬",
            content: "Consistent results after 9 months. The spray is easy to apply and doesn't leave any greasy residue.",
            result: "Complete hairline restoration"
          }
        ].map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 calc(100% - 16px)",
              scrollSnapAlign: "start",
              minWidth: { xs: "85%", sm: "45%", md: "30%" }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  p: 3,
                  bgcolor: "#FFFFFF",
                  border: `1px solid ${alpha("#00359E", 0.1)}`,
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 53, 158, 0.06)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 30px rgba(0, 53, 158, 0.12)",
                    borderColor: alpha("#00359E", 0.2)
                  }
                }}
              >
                {/* User Info */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: alpha("#00359E", 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      mr: 2,
                      border: `2px solid ${alpha("#00359E", 0.2)}`
                    }}
                  >
                    {testimonial.image}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ color: "#000000", fontWeight: 700, fontSize: "1rem" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#747578", fontSize: "0.75rem" }}>
                      {testimonial.age} years • {testimonial.duration} of use
                    </Typography>
                  </Box>
                </Box>

                {/* Rating */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Box
                      key={i}
                      component="span"
                      sx={{
                        color: i < testimonial.rating ? "#FFB800" : "#E0E0E0",
                        fontSize: "1rem",
                        mr: 0.25
                      }}
                    >
                      ★
                    </Box>
                  ))}
                  <Typography variant="caption" sx={{ color: "#747578", ml: 1, fontSize: "0.75rem" }}>
                    {testimonial.rating}/5
                  </Typography>
                </Box>

                {/* Testimonial Content */}
                <Typography
                  sx={{
                    color: "#555",
                    lineHeight: 1.6,
                    mb: 2,
                    fontSize: "0.9rem",
                    minHeight: "80px"
                  }}
                >
                  "{testimonial.content}"
                </Typography>

                {/* Result Badge */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: alpha("#00359E", 0.05),
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "8px",
                    border: `1px solid ${alpha("#00359E", 0.1)}`
                  }}
                >
                  <CheckCircle size={14} color="#00359E" />
                  <Typography variant="caption" sx={{ color: "#00359E", fontWeight: 600, fontSize: "0.75rem" }}>
                    {testimonial.result}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Box>

      {/* Navigation Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }}>
        {[...Array(5)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: index === 0 ? "#00359E" : alpha("#00359E", 0.2),
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                bgcolor: index === 0 ? "#00359E" : alpha("#00359E", 0.4)
              }
            }}
          />
        ))}
      </Box>
    </Box>
  </Container>
</Box>
{/* APPLICATION GUIDE SECTION */}
<Box
  sx={{
    py: { xs: 8, md: 10 },
    background: "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
    position: "relative"
  }}
>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontWeight: 900,
          color: "#000000",
          mb: 2
        }}
      >
        How to{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(135deg, #00359E, #003B9D)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Use Properly
        </Box>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#747578",
          fontWeight: 400,
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.6,
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        Follow these simple steps for optimal results
      </Typography>
    </Box>

    <Grid container spacing={4} alignItems="center">
      {[
        {
          step: "01",
          title: "Clean & Dry",
          description: "Start with a clean, dry scalp",
          icon: "🧴",
          color: "#00359E"
        },
        {
          step: "02",
          title: "Apply Spray",
          description: "Spray directly on affected areas",
          icon: "💨",
          color: "#003B9D"
        },
        {
          step: "03",
          title: "Massage Gently",
          description: "Use fingertips to distribute evenly",
          icon: "👐",
          color: "#00359E"
        },
        {
          step: "04",
          title: "Wait & Dry",
          description: "Allow 4 hours before washing",
          icon: "⏱️",
          color: "#003B9D"
        }
      ].map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Box sx={{ textAlign: "center", p: 3 }}>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  bgcolor: alpha(item.color, 0.1),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  mb: 3,
                  margin: "0 auto",
                  border: `2px solid ${alpha(item.color, 0.2)}`
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: item.color,
                  fontWeight: 700,
                  mb: 1,
                  fontSize: "1.1rem"
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  color: "#747578",
                  fontSize: "0.9rem"
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
{/* FINAL CTA SECTION */}
<Box
  sx={{
    py: { xs: 8, md: 10 },
    pb: { xs: 10, md: 12 }, // Added extra bottom padding
    background: "linear-gradient(135deg, #00359E 0%, #003B9D 100%)",
    color: "#FFFFFF",
    position: "relative",
    overflow: "hidden",
    mb: 4 // Added bottom margin
  }}
>
  <Container maxWidth="md">
    <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 900,
            mb: 3,
            color: "#FFFFFF",
            lineHeight: 1.2
          }}
        >
          Start Your Hair Regrowth
          <Box
            component="span"
            sx={{
              display: "block",
              background: "linear-gradient(135deg, #FFFFFF, rgba(255, 255, 255, 0.9))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            Journey Today
          </Box>
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mb: 5,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          Join thousands of satisfied patients with clinically proven Minoxidil 5% Spray. 
          See visible results in just 4-6 months with consistent use.
        </Typography>
        
        {/* Single Start Now Button */}
        <Box sx={{ mb: 6 }}>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{
                px: { xs: 6, md: 8 },
                py: 2,
                fontWeight: 800,
                fontSize: { xs: "1.1rem", md: "1.2rem" },
                background: "#FFFFFF",
                color: "#00359E",
                borderRadius: "12px",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
                minWidth: "200px",
                "&:hover": {
                  background: "#F5F5F5",
                  boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
                  transform: "translateY(-2px)"
                }
              }}
            >
              Start Now
            </Button>
          </motion.div>
        </Box>
        
        {/* Trust Badges - Updated without yellow */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: { xs: 2, md: 4 }, 
          flexWrap: "wrap",
          mb: 4 
        }}>
          {[
            { icon: <Shield size={20} />, text: "FDA Approved" },
            { icon: <CheckCircle size={20} />, text: "Clinically Proven" },
            { icon: <Package size={20} />, text: "Free Shipping" },
            { icon: <Clock size={20} />, text: "Visible Results" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 1.5,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                px: { xs: 1.5, md: 2 },
                py: 1,
                borderRadius: "8px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}>
                {item.icon}
                <Typography variant="body2" sx={{ 
                  color: "rgba(255, 255, 255, 0.95)", 
                  fontWeight: 500,
                  fontSize: { xs: "0.8rem", md: "0.9rem" }
                }}>
                  {item.text}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
        
        {/* Additional Info - Simplified */}
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.85rem",
            display: "block",
            maxWidth: "500px",
            margin: "0 auto",
            lineHeight: 1.5
          }}
        >
          60mL bottle (1 month supply) • Suitable for men & women • No prescription required
        </Typography>
      </motion.div>
    </Box>
    
    {/* Background Pattern - Subtle */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        opacity: 0.5,
        zIndex: 1
      }}
    />
  </Container>
</Box>
    </Box>
  );
};

export default MinoxidilSpray;