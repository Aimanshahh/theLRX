import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Grid, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Bed, Brain, Shield, CheckCircle, Star, Clock, Users, Award, ChevronLeft, ChevronRight, ArrowRight, Sparkles, Cloud, Zap, Sunrise, Coffee } from "lucide-react";
import sleepBanner from "../../assets/images/troublesleeping.jpg";
import sleepPill from "../../assets/images/medicine.jpg";

const TroubleSleeping = () => {
  const palette = {
    blue: "#00359E",
    darkBlue: "#002A7A",
    white: "#FFFFFF",
    grey: "#747578",
    lightBlue: "#E8F0FE",
    gold: "#FFD700",
  };

  const features = [
    { icon: Moon, title: "Sleep Cycle Regulation", description: "Natural rhythm restoration" },
    { icon: Bed, title: "Deep Sleep Support", description: "Improve sleep quality" },
    { icon: Brain, title: "Calm Mind", description: "Reduce racing thoughts" },
    { icon: Shield, title: "Safe & Non-Habit Forming", description: "Medical supervision" },
  ];

  const treatmentProcess = [
    {
      step: "01",
      title: "Sleep Pattern Analysis",
      description: "We begin with a detailed assessment of your sleep habits, environment, and challenges."
    },
    {
      step: "02",
      title: "Personalized Sleep Plan",
      description: "Create a customized approach combining behavioral changes and natural supplements."
    },
    {
      step: "03",
      title: "Sleep Environment Optimization",
      description: "Guidance on creating the ideal sleep environment and bedtime routine."
    },
    {
      step: "04",
      title: "Ongoing Sleep Monitoring",
      description: "Continuous tracking and adjustment to ensure lasting sleep improvement."
    },
  ];

  const pillBenefits = [
    { icon: CheckCircle, text: "Clinically Tested & Safe", color: "#10B981" },
    { icon: Moon, text: "Promotes Natural Sleep", color: "#8B5CF6" },
    { icon: Cloud, text: "Reduces Nighttime Awakenings", color: "#3B82F6" },
    { icon: Brain, text: "Calms Restless Mind", color: "#6366F1" },
    { icon: Sunrise, text: "Improves Morning Energy", color: "#F59E0B" },
    { icon: Shield, text: "Non-Habit Forming", color: "#6366F1" },
  ];

  const pillStats = [
    { value: "94%", label: "Sleep Improvement", icon: Award },
    { value: "24/7", label: "Sleep Support", icon: Users },
    { value: "30 min", label: "Faster Sleep Onset", icon: Clock },
    { value: "4.8/5", label: "Patient Rating", icon: Star },
  ];

  // Testimonial data
  const testimonials = [
    { name: "Michael T.", text: "After years of insomnia, I now sleep through the night. Life-changing.", rating: 5 },
    { name: "Sarah L.", text: "No more tossing and turning. I wake up refreshed and energized.", rating: 5 },
    { name: "James P.", text: "Gentle, effective, and safe. Finally found sleep relief.", rating: 4 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "90vh", md: "100vh" },
          backgroundImage: `url(${sleepBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 12 },
          overflow: "hidden",
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
            zIndex: 1,
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6} alignItems="stretch">
            {/* Left Text Section */}
            <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center" }}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 600,
                      color: palette.white,
                      mb: 2,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      opacity: 0.85,
                    }}
                  >
                    Restful Nights Await
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "32px", md: "44px" },
                      fontWeight: 900,
                      color: palette.darkBlue,
                      lineHeight: 1.1,
                      mb: 3,
                    }}
                  >
                    Professional Sleep Solutions{" "}
                    <Box component="span" sx={{ color: palette.white }}>
                      That Work
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "22px",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: 1.6,
                    }}
                  >
                    Science-backed treatments to help you achieve deep, restorative sleep naturally.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            {/* Right Card Section - Moved more to the right */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                position: "relative",
                left: { md: "-60px" },
                 top: { md: "75px" },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: "100%", maxWidth: "600px" }}
              >
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${palette.blue} 0%, ${palette.darkBlue} 100%)`,
                    p: { xs: 3, md: 5 },
                    borderRadius: "24px",
                    height: "100%",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    maxHeight: { md: "600px" },
                    transform: { md: "translateX(20px)" },
                  }}
                >
                  <Box>
                    {/* Badge */}
                    <Typography
                      sx={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: palette.white,
                        mb: 3,
                        display: "inline-block",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        px: 2.5,
                        py: 1,
                        borderRadius: "20px",
                      }}
                    >
                      Sleep Wellness
                    </Typography>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontSize: { xs: "28px", md: "34px" },
                        fontWeight: 800,
                        color: palette.white,
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      Sleep <Box component="span">Treatment</Box>
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.9)",
                        mb: 3,
                        fontWeight: 500,
                      }}
                    >
                      Find rest. Wake refreshed. Live energized.
                    </Typography>

                    {/* Features Grid */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 2,
                        mb: 4,
                      }}
                    >
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              p: 2,
                              borderRadius: "14px",
                              backgroundColor: "rgba(255,255,255,0.08)",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.15)",
                                transform: "translateY(-3px)",
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: "42px",
                                height: "42px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "rgba(255,255,255,0.2)",
                              }}
                            >
                              <feature.icon size={20} color={palette.white} strokeWidth={2.5} />
                            </Box>

                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: palette.white,
                                  mb: 0.3,
                                }}
                              >
                                {feature.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "11px",
                                  color: "rgba(255,255,255,0.8)",
                                }}
                              >
                                {feature.description}
                              </Typography>
                            </Box>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>

                  {/* CTA and Trust */}
                  <Box>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        sx={{
                          backgroundColor: palette.white,
                          color: palette.blue,
                          width: "100%",
                          py: 1.8,
                          fontWeight: 700,
                          borderRadius: "50px",
                          fontSize: "14px",
                          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.95)",
                            boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
                          },
                        }}
                      >
                        Start Your Sleep Journey
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 1 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.7)",
                          mt: 3,
                          textAlign: "center",
                        }}
                      >
                        Confidential & HIPAA compliant • Sleep specialists
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Simple How We Help Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: "#FFFFFF" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: 600,
                  color: palette.blue,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Our Process
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "32px", md: "42px" },
                  fontWeight: 800,
                  color: palette.darkBlue,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                How We Help You Sleep Better
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  color: palette.grey,
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                A structured approach to help you achieve deep, restorative sleep and wake up refreshed
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4}>
            {treatmentProcess.map((step, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: 4,
                      backgroundColor: palette.white,
                      borderRadius: "16px",
                      border: "1px solid rgba(0, 53, 158, 0.1)",
                      boxShadow: "0 8px 30px rgba(0, 53, 158, 0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 40px rgba(0, 53, 158, 0.1)",
                        borderColor: palette.blue,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        backgroundColor: `${palette.blue}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: 800,
                          color: palette.blue,
                        }}
                      >
                        {step.step}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: palette.darkBlue,
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: palette.grey,
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Simple CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box sx={{ textAlign: "center", mt: 8 }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: palette.blue,
                  color: palette.blue,
                  py: 1.5,
                  px: 6,
                  fontWeight: 700,
                  borderRadius: "50px",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: `${palette.blue}08`,
                    borderColor: palette.darkBlue,
                  },
                }}
              >
                Learn More About Sleep Science
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Enhanced Sleep Aid Section */}
      <Box sx={{ py: { xs: 10, md: 16 }, backgroundColor: palette.lightBlue }}>
        <Container>
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "15px" },
                  fontWeight: 700,
                  color: palette.blue,
                  mb: 1.5,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Featured Treatment
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "26px", md: "36px" },
                  fontWeight: 900,
                  color: palette.darkBlue,
                  mb: 2,
                  lineHeight: 1.08,
                }}
              >
                Natural Sleep Aid
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  color: palette.grey,
                  maxWidth: "720px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Scientifically formulated to support natural sleep onset, improve sleep quality, and promote morning freshness.
              </Typography>
            </motion.div>
          </Box>

          {/* Main Content */}
          <Grid container spacing={8} alignItems="center">
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: `radial-gradient(circle at 30% 20%, ${palette.blue}15 0%, transparent 70%)`,
                      borderRadius: "24px",
                      zIndex: 0,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={sleepPill}
                    alt="Natural Sleep Aid"
                    sx={{
                      width: "100%",
                      maxWidth: "500px",
                      display: "block",
                      mx: "auto",
                      borderRadius: "20px",
                      boxShadow: "0 25px 60px rgba(3, 18, 64, 0.15)",
                      border: "1px solid rgba(0, 53, 158, 0.1)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: -20,
                        right: { xs: 20, md: 40 },
                        backgroundColor: palette.white,
                        px: 3,
                        py: 1.5,
                        borderRadius: "50px",
                        boxShadow: "0 10px 30px rgba(0, 53, 158, 0.15)",
                        border: `2px solid ${palette.blue}20`,
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CheckCircle size={18} color={palette.blue} />
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 800,
                          color: palette.darkBlue,
                        }}
                      >
                        Non-Habit Forming
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>

            {/* Details Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {/* Main Description */}
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "20px",
                      background: `linear-gradient(135deg, ${palette.white}, #F8FAFF)`,
                      boxShadow: "0 15px 40px rgba(3, 18, 64, 0.08)",
                      border: `1px solid rgba(0, 53, 158, 0.08)`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: palette.darkBlue,
                        fontWeight: 900,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Moon size={24} color={palette.blue} />
                      How It Works
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: palette.grey,
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      Our natural formula combines clinically-studied ingredients that support your body's sleep-wake cycle, promote relaxation, and improve sleep quality without morning grogginess.
                    </Typography>
                    
                    {/* Key Benefits */}
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, mt: 3 }}>
                      {pillBenefits.slice(0, 4).map((benefit, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            p: 1.5,
                            backgroundColor: `${benefit.color}10`,
                            borderRadius: "10px",
                          }}
                        >
                          <Box
                            sx={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "8px",
                              backgroundColor: `${benefit.color}20`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <benefit.icon size={16} color={benefit.color} />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: 700,
                              color: palette.darkBlue,
                            }}
                          >
                            {benefit.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Usage Instructions */}
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: palette.white,
                      borderRadius: "16px",
                      border: `2px dashed ${palette.blue}30`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: palette.darkBlue,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Clock size={20} color={palette.blue} />
                      Recommended Usage
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: palette.grey,
                        lineHeight: 1.6,
                      }}
                    >
                      Take one capsule 30 minutes before bedtime. Best results observed with consistent use. Consult your healthcare provider before starting any new sleep aid.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonial Carousel Section */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.white }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Typography 
              sx={{ 
                fontSize: "14px", 
                fontWeight: 800, 
                color: palette.blue, 
                letterSpacing: "2px",
                textTransform: "uppercase"
              }}
            >
              TESTIMONIALS
            </Typography>
            <Typography 
              sx={{ 
                fontSize: { xs: "28px", md: "40px" }, 
                fontWeight: 900, 
                color: palette.darkBlue,
                mt: 1
              }}
            >
              What Our Patients Say
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 820, mx: "auto", position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    backgroundColor: palette.lightBlue,
                    borderRadius: "24px",
                    p: { xs: 4, md: 6 },
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 2 }}>
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} fill={palette.blue} color={palette.blue} size={18} />
                    ))}
                  </Box>

                  <Typography 
                    sx={{ 
                      fontSize: { xs: "16px", md: "18px" }, 
                      color: palette.darkBlue, 
                      mb: 3,
                      fontStyle: "italic",
                      lineHeight: 1.6
                    }}
                  >
                    "{testimonials[index].text}"
                  </Typography>

                  <Typography 
                    sx={{ 
                      fontSize: "15px", 
                      fontWeight: 800, 
                      color: palette.blue 
                    }}
                  >
                    {testimonials[index].name}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                transform: "translateY(-50%)",
                px: { xs: 2, md: 0 },
              }}
            >
              <IconButton 
                onClick={() => setIndex(index === 0 ? testimonials.length - 1 : index - 1)}
                sx={{
                  backgroundColor: palette.white,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  "&:hover": {
                    backgroundColor: palette.lightBlue
                  }
                }}
              >
                <ChevronLeft color={palette.blue} />
              </IconButton>
              <IconButton 
                onClick={() => setIndex((index + 1) % testimonials.length)}
                sx={{
                  backgroundColor: palette.white,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  "&:hover": {
                    backgroundColor: palette.lightBlue
                  }
                }}
              >
                <ChevronRight color={palette.blue} />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, gap: 1 }}>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  cursor: "pointer",
                  backgroundColor: i === index ? palette.blue : "#C7D5F5",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: palette.blue,
                    transform: "scale(1.2)"
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Modern CTA Banner Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background: "linear-gradient(135deg, #00359E 0%, #003B9D 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #00359E 0%, #003B9D 100%)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: -120,
              right: -120,
              width: 420,
              height: 420,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -160,
              left: -160,
              width: 520,
              height: 520,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            },
          }}
        />

        {/* Floating Sparkles */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ position: "absolute", top: "30%", left: "15%", zIndex: 1 }}
        >
          <Sparkles size={24} color="rgba(255,255,255,0.35)" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ position: "absolute", bottom: "25%", right: "20%", zIndex: 1 }}
        >
          <Sparkles size={28} color="rgba(255,255,255,0.35)" />
        </motion.div>

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", color: "#FFFFFF" }}>
              {/* Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: "rgba(255,255,255,0.14)",
                  px: 3,
                  py: 1,
                  borderRadius: 999,
                  mb: 4,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <CheckCircle size={16} color="#FFFFFF" />
                <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                  LIMITED SPOTS AVAILABLE
                </Typography>
              </Box>

              {/* Main Heading */}
              <Typography
                sx={{
                  fontSize: { xs: 32, md: 52 },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  mb: 3,
                  color: "#FFFFFF",
                }}
              >
                Begin Your Journey to
                <Box component="span" sx={{ color: "#8B8D8E", ml: 1 }}>
                  Better Sleep Today
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: 17, md: 22 },
                  color: "#E5E7EB",
                  mb: 5,
                  maxWidth: 620,
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Join thousands who have reclaimed their nights with our proven sleep improvement program.
              </Typography>

              {/* Stats */}
              <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
                {[
                  { value: "3,200+", label: "Patients Sleeping Better" },
                  { value: "94%", label: "Sleep Improvement Rate" },
                  { value: "4.8/5", label: "Patient Rating" },
                ].map((stat, i) => (
                  <Grid item key={i}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2,
                        minWidth: 150,
                        backgroundColor: "rgba(255,255,255,0.12)",
                        borderRadius: 14,
                        border: "1px solid rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Typography sx={{ fontSize: 30, fontWeight: 900, color: "#FFFFFF" }}>
                        {stat.value}
                      </Typography>
                      <Typography sx={{ fontSize: 14, color: "#8B8D8E", fontWeight: 600 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* CTA Button */}
              <Button
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#00359E",
                  py: 2.2,
                  px: 8,
                  fontWeight: 900,
                  fontSize: 18,
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                  "&:hover": {
                    backgroundColor: "#F0F2F5",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                START SLEEPING BETTER
              </Button>

              {/* Trust Badges */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  mt: 4,
                  flexWrap: "wrap",
                  color: "#E5E7EB",
                }}
              >
                {[{ icon: Shield, text: "100% Confidential" }, { icon: Users, text: "Sleep Specialists" }, { icon: CheckCircle, text: "HIPAA Compliant" }].map(
                  (badge, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <badge.icon size={16} />
                      <Typography sx={{ fontSize: 14 }}>{badge.text}</Typography>
                    </Box>
                  )
                )}
              </Box>

              {/* Footer Note */}
              <Typography sx={{ fontSize: 13, color: "#8B8D8E", mt: 3 }}>
                Limited spots available for new patients this month.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default TroubleSleeping;