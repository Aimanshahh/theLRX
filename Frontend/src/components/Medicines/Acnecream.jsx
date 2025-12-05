// AcneCream.jsx
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Sparkles,
  Star,
  Activity,
  Droplets,
  Eye,
  Award,
  Shield,
  Zap,
  Target,
  Brain,
  TrendingUp
} from "lucide-react";

import creamImg from "../../assets/images/medicineremovedbg.png";

const QuickBenefit = ({ Icon, title, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-start",
      gap: 2,
      p: { xs: 2.5, md: 3 },
      borderRadius: 2,
      bgcolor: "transparent",
      minHeight: 96,
    }}
  >
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid rgba(0,0,0,0.06)",
        background: "linear-gradient(180deg, rgba(0,53,158,0.04), rgba(0,53,158,0.02))",
        flexShrink: 0,
      }}
    >
      <Icon size={22} color={"#00359E"} />
    </Box>

    <Box>
      <Typography sx={{ fontWeight: 800, fontSize: 16, color: "#000000" }}>{title}</Typography>
      <Typography sx={{ mt: 0.5, color: "#747578", fontSize: 14 }}>{text}</Typography>
    </Box>
  </Box>
);

const AcneCream = () => {
  return (
    <>
      {/* HERO */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          bgcolor: "#00359E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
          px: { xs: 3, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -80,
            width: "60%",
            height: "50%",
            background: "#FFFFFF",
            borderBottomLeftRadius: "50% 50%",
            transform: "rotate(-10deg)",
            zIndex: 1,
            opacity: 0.9,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #00359E 0%, #003B9D 100%)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
            gap: { xs: 6, md: 8 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: "550px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} color="#FFD700" fill="#FFD700" />
              ))}
              <Typography sx={{ color: "#FFFFFF", ml: 1.5, fontSize: "15px", fontWeight: 600 }}>
                4.8/5.0 • 3,200+ Reviews
              </Typography>
            </Box>

            <Typography sx={{ fontSize: { xs: "38px", md: "48px" }, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, mb: 2 }}>
              Clear Skin,
              <br />
              Confidence Restored
            </Typography>

            <Typography sx={{ mt: 1.5, fontSize: { xs: "16px", md: "18px" }, color: "#FFFFFF", lineHeight: 1.6, mb: 3 }}>
              Our <Box component="span" sx={{ color: "#FFFFFF", fontWeight: 600 }}>advanced acne-fighting formula</Box> targets breakouts, reduces inflammation and prevents future blemishes.
            </Typography>

            <Box sx={{ mt: 2.5, mb: 4 }}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {[
                  "Targets acne-causing bacteria",
                  "Reduces redness & swelling",
                  "Non-drying formula",
                ].map((t, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 999,
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {t}
                  </Box>
                ))}
              </Box>
            </Box>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="contained"
                sx={{
                  px: 4.5,
                  py: 1.6,
                  bgcolor: "#FFFFFF",
                  color: "#00359E",
                  borderRadius: "28px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Get Clear Skin Now
              </Button>
            </motion.div>

            <Typography sx={{ color: "#FFFFFF", mt: 3, fontSize: 14, opacity: 0.9 }}>
              <CheckCircle size={14} color="#FFFFFF" /> Recommended by dermatologists
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", maxWidth: "480px", width: "100%" }}
          >
            <Box sx={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}>
              <img src={creamImg} alt="Acne cream" style={{ width: "100%", display: "block" }} />
            </Box>

            <Box sx={{ position: "absolute", top: 20, right: 20, px: 2, py: 1, borderRadius: 20, bgcolor: "rgba(255,255,255,0.95)", fontWeight: 700, color: "#00359E" }}>
              #1 Acne Solution
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* HOW IT WORKS SECTION */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 10, md: 16 },
          bgcolor: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "15px" },
                  fontWeight: 700,
                  color: "#00359E",
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                The Clear Skin Protocol
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "36px", md: "52px" },
                  fontWeight: 900,
                  color: "#000000",
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Your Journey to
                <Box component="span" sx={{ color: "#00359E", ml: 1 }}>
                  Clear Skin
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  color: "#747578",
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                A targeted approach that addresses acne at every level for lasting results
              </Typography>
            </Box>
          </motion.div>

          {/* Step Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
              gap: { xs: 6, md: 4 },
              mb: { xs: 8, md: 12 },
            }}
          >
            {[
              {
                step: 1,
                icon: Target,
                title: "Acne Assessment",
                description: "Comprehensive analysis of your skin type, acne severity, and trigger factors",
                color: "#00359E",
              },
              {
                step: 2,
                icon: Zap,
                title: "Targeted Treatment",
                description: "Custom formula designed to attack acne-causing bacteria and reduce inflammation",
                color: "#003B9D",
              },
              {
                step: 3,
                icon: Shield,
                title: "Barrier Protection",
                description: "Strengthens skin barrier while fighting breakouts to prevent future acne",
                color: "#00359E",
              },
              {
                step: 4,
                icon: TrendingUp,
                title: "Lasting Results",
                description: "Visible reduction in breakouts and improved skin texture within weeks",
                color: "#003B9D",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    backgroundColor: "#FFFFFF",
                    borderRadius: "24px",
                    border: "1px solid rgba(139, 141, 142, 0.1)",
                    boxShadow: "0 15px 40px rgba(0, 53, 158, 0.08)",
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    "&:hover": {
                      transform: { md: "translateY(-8px)" },
                      boxShadow: "0 25px 60px rgba(0, 53, 158, 0.15)",
                      borderColor: `${item.color}40`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                      border: `2px solid ${item.color}30`,
                    }}
                  >
                    <Typography sx={{ fontSize: "28px", fontWeight: 900, color: item.color }}>
                      {item.step}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "20px",
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      mt: 2,
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${item.color}15, transparent)`,
                      },
                    }}
                  >
                    <item.icon size={36} color={item.color} />
                  </Box>

                  <Typography sx={{ fontSize: { xs: "22px", md: "24px" }, fontWeight: 800, color: "#000000", mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", color: "#747578", lineHeight: 1.6 }}>{item.description}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Results / Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box
              sx={{
                mt: { xs: 10, md: 12 },
                backgroundColor: "#F8FAFF",
                borderRadius: "28px",
                p: { xs: 4, md: 6 },
                border: "1px solid rgba(0, 53, 158, 0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Grid container spacing={4} alignItems="flex-start">
                {/* Left Milestones */}
                <Grid item xs={12} md={6}>
                  <Typography sx={{ fontSize: { xs: "28px", md: "36px" }, fontWeight: 900, color: "#000000", mb: 3 }}>
                    Visible Improvement
                    <Box component="span" sx={{ color: "#00359E" }}>
                      {" "}in 30 Days
                    </Box>
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: "#747578", lineHeight: 1.6, mb: 4 }}>
                    Most users experience significant improvements in their skin within the first month:
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    {[
                      { time: "Week 1", improvement: "Reduced inflammation & redness", icon: Activity, color: "#00359E" },
                      { time: "Week 2", improvement: "Fewer active breakouts", icon: Eye, color: "#003B9D" },
                      { time: "Week 3", improvement: "Clearer skin texture", icon: Droplets, color: "#00359E" },
                      { time: "Week 4", improvement: "Prevented new breakouts", icon: Shield, color: "#003B9D" },
                    ].map((milestone, idx) => (
                      <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 3, backgroundColor: "#FFFFFF", borderRadius: "18px", border: "1px solid rgba(0,53,158,0.08)", boxShadow: "0 5px 20px rgba(0,0,0,0.03)" }}>
                          <Box sx={{ minWidth: 60, minHeight: 60, borderRadius: 2, backgroundColor: `${milestone.color}10`, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${milestone.color}30` }}>
                            <milestone.icon size={24} color={milestone.color} />
                          </Box>
                          <Box>
                            <Typography sx={{ fontWeight: 800, color: "#000000", fontSize: 16 }}>{milestone.time}</Typography>
                            <Typography sx={{ color: "#747578", fontSize: 15 }}>{milestone.improvement}</Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* COMPACT HORIZONTAL BENEFITS SECTION */}
      <Box sx={{ 
        py: { xs: 8, md: 10 }, 
        bgcolor: "#FFFFFF",
        position: "relative"
      }}>
        <Container maxWidth="lg">
          {/* Section Header - Minimal */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography 
                sx={{ 
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#00359E",
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Acne Solution Benefits
              </Typography>
              
              <Typography 
                sx={{ 
                  fontSize: { xs: "24px", md: "32px" }, 
                  fontWeight: 800, 
                  color: "#000000", 
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Why It Works Better
              </Typography>
            </Box>
          </motion.div>

          {/* Horizontal Benefits Row */}
          <Box sx={{ 
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "center",
            gap: { xs: 3, md: 2 },
            px: { xs: 0, md: 2 }
          }}>
            {/* Connecting line for desktop */}
            <Box sx={{ 
              display: { xs: "none", md: "block" },
              position: "absolute", 
              top: "50%", 
              left: "10%", 
              right: "10%",
              height: 1,
              background: "linear-gradient(90deg, transparent, #00359E15, transparent)",
              transform: "translateY(-50%)",
              zIndex: 0
            }} />
            
            {[
              {
                Icon: Target,
                title: "Targeted",
                text: "Attacks acne-causing bacteria directly",
                color: "#00359E",
                index: 1
              },
              {
                Icon: Shield,
                title: "Protective",
                text: "Strengthens skin barrier function",
                color: "#003B9D",
                index: 2
              },
              {
                Icon: Zap,
                title: "Fast-Acting",
                text: "Visible results within 1-2 weeks",
                color: "#00359E",
                index: 3
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ flex: 1, maxWidth: { md: "300px" } }}
              >
                <Box sx={{ 
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: { xs: "flex-start", md: "center" },
                  textAlign: { xs: "left", md: "center" },
                  gap: { xs: 3, md: 4 },
                  p: { xs: 3, md: 4 },
                  borderRadius: "16px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(139, 141, 142, 0.05)",
                  height: "100%",
                  position: "relative",
                  zIndex: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: { md: "translateY(-2px)" },
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                    borderColor: "rgba(0, 53, 158, 0.1)"
                  }
                }}>
                  {/* Number indicator */}
                  <Box sx={{ 
                    position: { xs: "static", md: "absolute" },
                    top: { md: "-12px" },
                    left: { md: "50%" },
                    transform: { md: "translateX(-50%)" },
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: benefit.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <Typography sx={{ 
                      fontSize: "12px", 
                      fontWeight: 700, 
                      color: "#FFFFFF" 
                    }}>
                      {benefit.index}
                    </Typography>
                  </Box>

                  {/* Icon */}
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${benefit.color}10`,
                    flexShrink: 0
                  }}>
                    <benefit.Icon size={22} color={benefit.color} />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ 
                      fontSize: "18px", 
                      fontWeight: 700, 
                      color: "#000000", 
                      mb: 1
                    }}>
                      {benefit.title}
                    </Typography>
                    
                    <Typography sx={{ 
                      fontSize: "14px", 
                      color: "#747578", 
                      lineHeight: 1.5
                    }}>
                      {benefit.text}
                    </Typography>
                  </Box>

                  {/* Mobile arrow */}
                  {index < 2 && (
                    <Box sx={{ 
                      display: { xs: "block", md: "none" },
                      position: "absolute",
                      bottom: "-16px",
                      left: "50%",
                      transform: "translateX(-50%)"
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M8 13L5 10M8 13L11 10" stroke="#8B8D8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                  )}
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Minimal Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box sx={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: { xs: 3, md: 6 }, 
              mt: 6,
              flexWrap: "wrap"
            }}>
              {[
                { value: "89%", label: "Clearer Skin" },
                { value: "7 Days", label: "First Results" },
                { value: "4.2K+", label: "Happy Users" }
              ].map((stat, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Typography sx={{ 
                    fontSize: { xs: "24px", md: "28px" },
                    fontWeight: 800,
                    color: "#00359E",
                    lineHeight: 1
                  }}>
                    {stat.value}
                  </Typography>
                  <Typography sx={{ 
                    fontSize: "13px", 
                    color: "#747578", 
                    mt: 0.5,
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* SIMPLE CTA */}
      <Box sx={{ width: "100%", py: { xs: 8, md: 12 }, bgcolor: "#F8FAFF" }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Box sx={{ textAlign: "center", maxWidth: 800, mx: "auto" }}>
              <Typography sx={{ fontSize: { xs: "22px", md: "30px" }, fontWeight: 900, color: "#000000", mb: 1 }}>
                Ready for clear, confident skin?
              </Typography>
              <Typography sx={{ color: "#747578", fontSize: 15, mb: 4 }}>
                Start your acne-free journey with a personalized treatment plan.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    sx={{
                      px: 5,
                      py: 1.6,
                      bgcolor: "#00359E",
                      color: "#FFFFFF",
                      fontSize: 16,
                      fontWeight: 700,
                      borderRadius: 999,
                      boxShadow: "none",
                      textTransform: "none",
                      '&:hover': { bgcolor: '#003B9D' }
                    }}
                  >
                    Start Treatment Now
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default AcneCream;