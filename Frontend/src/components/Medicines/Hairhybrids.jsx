import React from "react";
import { Box, Typography, Button, Container, Chip, alpha, Grid, Card } from "@mui/material";
import { ArrowRight, CheckCircle, Zap, Sparkles, Target, Shield, Users, TrendingUp, Heart, Activity, Brain, Layers, Clock, Package, Calendar, Pill, Droplet, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import hairHybridImage from "../../assets/images/hairhybrid.jpg";
import productImage from "../../assets/images/medicine.jpg";

const HairHybrids = () => {
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
                  label="DUAL ACTION FORMULA"
                  icon={<Zap size={16} />}
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
                  The Ultimate{" "}
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
                    Hair Restoration System
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
                  Hair Hybrid combines Minoxidil and DHT-blocking technology in one powerful system. 
                  Attack hair loss from multiple angles for superior results.
                </Typography>

                {/* FEATURES */}
                <Box sx={{ mb: 5 }}>
                  {[
                    "Dual-action formula: Stimulates + Protects",
                    "Minoxidil 5% for hair regrowth",
                    "DHT blockers to prevent further loss",
                    "Enhanced results vs. single treatments"
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
                    Start Hybrid Treatment
                  </Button>
                </motion.div>

                {/* STATS */}
                <Box sx={{ mt: 6, display: "flex", gap: { xs: 2, md: 4 }, flexWrap: "wrap" }}>
                  {[
                    { icon: <Users size={20} color="#00359E" />, value: "18K+", label: "Patients", color: "#00359E" },
                    { icon: <TrendingUp size={20} color="#003B9D" />, value: "94%", label: "Success Rate", color: "#003B9D" },
                    { icon: <Zap size={20} color="#00359E" />, value: "2X", label: "More Effective", color: "#00359E" }
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
                    src={hairHybridImage}
                    alt="Hair Hybrid Treatment System"
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
                    <Zap size={14} />
                    COMPLETE SYSTEM
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
                      text: "Regrowth Stimulant",
                      desc: "Minoxidil 5% formula",
                      color: "#00359E"
                    },
                    {
                      icon: <Shield size={22} color="#003B9D" />,
                      text: "DHT Protection",
                      desc: "Prevents further loss",
                      color: "#003B9D"
                    },
                    {
                      icon: <BrainCircuit size={22} color="#00359E" />,
                      text: "Synergistic Effect",
                      desc: "Enhanced results",
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

      {/* DUAL ACTION SCIENCE SECTION */}
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
                The Power of{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Dual Action
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
                How our hybrid approach attacks hair loss from two angles for maximum effectiveness
              </Typography>
            </motion.div>
          </Box>

          {/* Mechanism Cards */}
          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Stimulate Growth",
                description: "Minoxidil increases blood flow to follicles, promoting new hair growth",
                icon: <Activity size={28} color="#00359E" />,
                color: "#00359E",
                detail: "Activates dormant follicles"
              },
              {
                step: "02",
                title: "Block DHT",
                description: "DHT blockers protect follicles from hormone-induced damage",
                icon: <Shield size={28} color="#003B9D" />,
                color: "#003B9D",
                detail: "Prevents further hair loss"
              },
              {
                step: "03",
                title: "Extend Growth Phase",
                description: "Prolongs active hair growth while shortening resting phase",
                icon: <Clock size={28} color="#00359E" />,
                color: "#00359E",
                detail: "Longer, thicker growth cycles"
              },
              {
                step: "04",
                title: "Synergistic Effect",
                description: "Combination creates a 2X effect better than either treatment alone",
                icon: <BrainCircuit size={28} color="#003B9D" />,
                color: "#003B9D",
                detail: "Enhanced overall results"
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
              Superior Results: Hybrid vs Single Treatments
            </Typography>
            
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Typography sx={{ color: "#747578", mb: 3, lineHeight: 1.7 }}>
                    Clinical studies show combination therapy delivers significantly better outcomes:
                  </Typography>
                  {[
                    "48% greater hair count increase vs Minoxidil alone",
                    "2X more effective at maintaining hair than single treatments",
                    "94% patient satisfaction rate with hybrid approach",
                    "Faster visible results compared to monotherapy"
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
                    12-Month Study Comparison
                  </Typography>
                  
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {[
                      { label: "Hair Count Increase", value: "68%", color: "#00359E", treatment: "Hybrid" },
                      { label: "Hair Count Increase", value: "46%", color: "#747578", treatment: "Minoxidil" },
                      { label: "Hair Loss Prevention", value: "96%", color: "#00359E", treatment: "Hybrid" },
                      { label: "Hair Loss Prevention", value: "90%", color: "#747578", treatment: "Finasteride" }
                    ].map((stat, index) => (
                      <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box>
                          <Typography sx={{ color: "#000000", fontWeight: 500, fontSize: "0.9rem" }}>
                            {stat.label}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#747578" }}>
                            {stat.treatment}
                          </Typography>
                        </Box>
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
                The Complete{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Hair Hybrid System
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
                Everything you need in one comprehensive hair restoration system
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
                    alt="Hair Hybrid Complete System"
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
                    COMPLETE SYSTEM
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
                    DUAL ACTION
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
                    Complete Hair Restoration Kit
                  </Typography>
                  <Typography
                    sx={{
                      color: "#747578",
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                      mb: 3
                    }}
                  >
                    Our comprehensive system includes everything you need for optimal hair restoration: 
                    topical growth stimulant and oral DHT protection in one convenient package.
                  </Typography>
                </Box>

                {/* Key Features */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {[
                    {
                      icon: <Droplet size={24} color="#00359E" />,
                      title: "Minoxidil 5% Spray",
                      description: "Topical growth stimulant",
                      color: "#00359E"
                    },
                    {
                      icon: <Pill size={24} color="#003B9D" />,
                      title: "DHT Blocker Tablets",
                      description: "Oral hair loss prevention",
                      color: "#003B9D"
                    },
                    {
                      icon: <Clock size={24} color="#00359E" />,
                      title: "Twice Daily + Once Daily",
                      description: "Simple combined routine",
                      color: "#00359E"
                    },
                    {
                      icon: <Calendar size={24} color="#003B9D" />,
                      title: "3-4 Months",
                      description: "For optimal results",
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

                {/* System Benefits */}
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
                    <BrainCircuit size={20} />
                    Hybrid System Benefits
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {[
                      "Attacks hair loss from multiple biological angles",
                      "48% better results than single treatments",
                      "Simplified routine - no need to source separate products",
                      "Cost-effective compared to buying treatments separately",
                      "Clinically proven synergistic effect"
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
              Hybrid Treatment{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #00359E, #003B9D)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                Success Stories
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
              See why patients choose the complete hybrid approach over single treatments
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
                  name: "Alex Thompson",
                  age: 34,
                  duration: "8 months",
                  rating: 5,
                  image: "👨‍💼",
                  content: "Tried Minoxidil alone for a year with minimal results. Switched to the Hybrid system and saw dramatic improvement in 3 months.",
                  result: "Dramatic improvement in 3 months"
                },
                {
                  name: "Mark Davis",
                  age: 41,
                  duration: "10 months",
                  rating: 5,
                  image: "👨‍⚕️",
                  content: "The convenience of having both treatments together is amazing. Better results than when I used them separately.",
                  result: "Better than separate treatments"
                },
                {
                  name: "Ryan Wilson",
                  age: 37,
                  duration: "14 months",
                  rating: 5,
                  image: "👨‍💻",
                  content: "My hair is thicker and fuller than ever. Friends ask what I'm doing differently - it's the Hybrid system!",
                  result: "Complete hair transformation"
                },
                {
                  name: "Kevin Miller",
                  age: 45,
                  duration: "12 months",
                  rating: 5,
                  image: "👨‍🏫",
                  content: "Stopped my hair loss and regrew what I'd lost. The dual approach really works better than anything I've tried.",
                  result: "Stopped loss + Regrew hair"
                },
                {
                  name: "Brian Carter",
                  age: 38,
                  duration: "9 months",
                  rating: 5,
                  image: "👨‍🔬",
                  content: "Wish I started with this system sooner. The results speak for themselves - it's the complete solution.",
                  result: "Complete hair solution"
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

      {/* HOW TO USE SECTION - Updated for Hybrid System */}
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
                Use the Hybrid System
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
              Simple daily routine combining topical and oral treatments
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Morning: Apply Topical",
                description: "Apply Minoxidil spray to scalp",
                icon: "🌅",
                color: "#00359E"
              },
              {
                step: "02",
                title: "Evening: Apply Topical",
                description: "Second application of Minoxidil",
                icon: "🌙",
                color: "#003B9D"
              },
              {
                step: "03",
                title: "Take Oral Tablet",
                description: "Take one DHT blocker daily",
                icon: "💊",
                color: "#00359E"
              },
              {
                step: "04",
                title: "Consistency is Key",
                description: "Follow routine daily for best results",
                icon: "🎯",
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

          {/* System Advantage Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card
              sx={{
                mt: 6,
                p: 3,
                bgcolor: alpha("#00359E", 0.05),
                border: `1px solid ${alpha("#00359E", 0.1)}`,
                borderRadius: "16px",
                textAlign: "center"
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#00359E",
                  fontWeight: 700,
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1
                }}
              >
                <BrainCircuit size={20} />
                Why the Hybrid System Works Better
              </Typography>
              <Typography
                sx={{
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  maxWidth: "800px",
                  margin: "0 auto"
                }}
              >
                Minoxidil stimulates hair growth by increasing blood flow to follicles, while DHT blockers protect 
                those follicles from the hormone that causes hair loss. Together, they create a synergistic effect 
                that's 48% more effective than either treatment alone. The combination addresses both the symptom 
                (lack of growth) and the cause (DHT damage) for comprehensive hair restoration.
              </Typography>
            </Card>
          </motion.div>
        </Container>
      </Box>

      {/* FINAL CTA SECTION */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          pb: { xs: 10, md: 12 },
          background: "linear-gradient(135deg, #00359E 0%, #003B9D 100%)",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          mb: 4
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
                Experience the Power of
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
                  Complete Hair Restoration
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
                Get 48% better results with our dual-action Hair Hybrid system. 
                Attack hair loss from every angle for maximum effectiveness.
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
              
              {/* Trust Badges */}
              <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: { xs: 2, md: 4 }, 
                flexWrap: "wrap",
                mb: 4 
              }}>
                {[
                  { icon: <Zap size={20} />, text: "Dual Action" },
                  { icon: <CheckCircle size={20} />, text: "48% Better Results" },
                  { icon: <Package size={20} />, text: "Complete System" },
                  { icon: <BrainCircuit size={20} />, text: "Synergistic Effect" }
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
              
              {/* Additional Info */}
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
                Complete 30-day system • For men only • Results in 3-4 months • Everything included
              </Typography>
            </motion.div>
          </Box>
          
          {/* Background Pattern */}
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

export default HairHybrids;