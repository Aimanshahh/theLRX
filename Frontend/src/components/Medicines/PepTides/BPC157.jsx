import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  Star,
  CheckCircle,
  Activity,
  TrendingUp,
  Flame,
  Heart,
  Zap,
  Sparkles,
  Moon,
  Shield,
  Target,
  Thermometer,
  CheckCircle as CheckCircleIcon,
  HeartPulse,
  Bone,
  Brain,
  Droplets,
  RefreshCw,
  Bandage,
} from "lucide-react";

// Import your images and videos for BPC-157
import bpc157Image from "../../../assets/medicines/BPC-removebg-preview.png";
import bpc157ScienceVideo from "../../../assets/Videos/peptide.mp4";
import bpc157ProductImage from "../../../assets/medicines/BPC-removebg-preview.png";

// Define your theme color palette (same as PT-141)
const palette = {
  darkGrey: "#747578",
  lightGrey: "#8B8D8E",
  darkBlue: "#00359E",
  lightBlue: "#003B9D",
  white: "#FFFFFF",
  black: "#000000",
  yellow: "#FFD700", // Added yellow for stars
};

const BPC157Page = () => {
  
    const rimioUrl = "https://try.thelrx.com/intake/bp-8xpx3w";

  const handleCtaClick = () => {
    window.open(rimioUrl, "_blank", "noopener,noreferrer");
  };

  
  
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          bgcolor: palette.darkBlue,
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
            background: palette.white,
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
            background: `linear-gradient(135deg, ${palette.darkBlue} 0%, ${palette.lightBlue} 100%)`,
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
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
                <Star key={i} size={18} color={palette.yellow} fill={palette.yellow} />
              ))}
              <Typography sx={{ color: palette.white, ml: 1.5, fontSize: "15px", fontWeight: 600 }}>
                4.9/5.0 • 2,800+ Reviews
              </Typography>
            </Box>

            <Typography sx={{ fontSize: { xs: "38px", md: "48px" }, fontWeight: 900, color: palette.white, lineHeight: 1.05, mb: 2 }}>
              BPC-157 5mg
              <br />
              <Box component="span" sx={{ color: palette.white, fontSize: { xs: "42px", md: "52px" } }}>$189.00</Box>
            </Typography>

            <Typography sx={{ mt: 1.5, fontSize: { xs: "16px", md: "18px" }, color: palette.white, lineHeight: 1.6, mb: 3 }}>
              Our <Box component="span" sx={{ color: palette.white, fontWeight: 600 }}>pharmaceutical-grade BPC-157 (Body Protection Compound-157)</Box> is a peptide compound being studied for its potential to support healing processes, modulate inflammation, and support tissue repair throughout the body.
            </Typography>

            <Box sx={{ mt: 2.5, mb: 4 }}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {[
                  "Potential tissue healing support",
                  "Inflammation modulation being studied",
                  "Gut & joint health support",
                ].map((t, i) => (
                  <Box
                    key={i}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 999,
                      bgcolor: "rgba(255,255,255,0.12)",
                      color: palette.white,
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
              onClick={handleCtaClick}
                variant="contained"
                sx={{
                  px: 4.5,
                  py: 1.6,
                  bgcolor: palette.white,
                  color: palette.darkBlue,
                  borderRadius: "28px",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Support Healing Processes - $189
              </Button>
            </motion.div>

            <Typography sx={{ color: palette.white, mt: 3, fontSize: 14, opacity: 0.9, display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle size={14} color={palette.white} /> Pharmaceutical Grade • Research-Backed • Medical Supervision
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", maxWidth: "480px", width: "100%" }}
          >
            <Box sx={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}>
              <img src={bpc157Image} alt="BPC-157 5mg" style={{ width: "100%", height: "auto", display: "block" }} />
            </Box>

            <Box sx={{ position: "absolute", top: 20, right: 20, px: 2, py: 1, borderRadius: 20, bgcolor: "rgba(255,255,255,0.95)", fontWeight: 700, color: palette.darkBlue }}>
              Potential Systemic Effects
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ================= SCIENCE SECTION ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9fafc" }}>
        <Container>
          <Grid
            container
            spacing={6}
            alignItems="stretch"
            direction={{ xs: "column", md: "row" }}
            wrap={{ xs: "wrap", md: "nowrap" }}
          >
            <Grid item xs={12} md={6} display="flex" flexDirection="column">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1 }}
              >
                <Typography
                  sx={{
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    color: palette.darkBlue,
                    mb: 2,
                    fontWeight: 700,
                    display: "inline-block",
                    backgroundColor: `${palette.darkBlue}15`,
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                  }}
                >
                  How It Works
                </Typography>

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
                  The Science of{" "}
                  <Box component="span" sx={{ color: palette.darkBlue }}>
                    BPC-157
                  </Box>
                </Typography>

                <Typography sx={{ fontSize: 16, color: palette.darkGrey, mb: 4, lineHeight: 1.8 }}>
                  BPC-157 is a synthetic peptide derived from a protective protein found in human gastric juice. Clinical studies continue to investigate its potential to support healing through multiple mechanisms including angiogenesis (formation of new blood vessels), collagen synthesis, and modulation of growth factor expression. Unlike localized treatments, BPC-157 is being studied for potential systemic effects throughout the body.
                </Typography>

                <Box sx={{ mb: 5 }}>
                  {[
                    "Being studied for angiogenesis to support blood flow to tissues",
                    "Potential collagen synthesis and connective tissue support",
                    "Inflammatory cytokine modulation being researched",
                    "Tendon, ligament, muscle, and nerve support under investigation",
                    "Gastrointestinal lining support being studied",
                    "Potential systemic effects when administered via injection"
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2.5 }}>
                        <CheckCircleIcon sx={{ color: palette.darkBlue, fontSize: 22, mr: 2, mt: 0.2 }} />
                        <Typography sx={{ fontSize: 16, color: palette.black, fontWeight: 500 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

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
                    src={bpc157ScienceVideo}
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
        backgroundColor: palette.white,
        position: "relative"
      }}>
        <Container>
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
                  color: palette.darkBlue,
                  mb: 1.5,
                  display: "inline-block",
                }}
              >
                Potential Benefits
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
                Potential Benefits of{" "}
                <Box component="span" sx={{ color: palette.darkBlue }}>
                  BPC-157 Therapy
                </Box>
              </Typography>
              
              <Typography
                sx={{
                  fontSize: "16px",
                  color: palette.darkGrey,
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Support your body's natural processes with potential systemic effects
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3} justifyContent="center">
            {[
              {
                icon: HeartPulse,
                title: "Tissue Support",
                description: "May support tendons & ligaments",
                color: palette.darkBlue,
              },
              {
                icon: Shield,
                title: "Inflammation Modulation",
                description: "Inflammation support being studied",
                color: palette.lightBlue,
              },
              {
                icon: Bone,
                title: "Joint Support",
                description: "May support cartilage & joint health",
                color: palette.darkBlue,
              },
              {
                icon: Brain,
                title: "Gut-Brain Axis",
                description: "Gastrointestinal support being studied",
                color: palette.darkBlue,
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
                      backgroundColor: palette.white,
                      border: `1px solid ${palette.darkBlue}10`,
                      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
                      transition: "all 0.2s ease",
                      height: "100%",
                      "&:hover": {
                        boxShadow: "0 6px 20px rgba(0, 53, 158, 0.08)",
                        borderColor: `${palette.darkBlue}20`,
                      },
                    }}
                  >
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
                      <benefit.icon size={24} color={benefit.color} strokeWidth={2} />
                    </Box>

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

                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: palette.darkGrey,
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
                { value: "Systemic", label: "Whole Body Effects Being Studied" },
                { value: "Angiogenesis", label: "Blood Vessel Formation Research" },
                { value: "Versatile", label: "Multiple Pathways Under Study" },
              ].map((stat, index) => (
                <Box key={index}>
                  <Typography
                    sx={{
                      fontSize: { xs: "28px", md: "32px" },
                      fontWeight: 800,
                      color: palette.darkBlue,
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: palette.darkGrey,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>

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
                  color: palette.darkBlue,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Ready to Begin?
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: palette.darkGrey,
                  mb: 4,
                  maxWidth: "400px",
                  mx: "auto",
                }}
              >
                Join others exploring BPC-157 under medical supervision
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ================= PRODUCT SHOWCASE SECTION ================= */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: "#f9fafc",
        position: "relative"
      }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "120px",
            background: `linear-gradient(to bottom, ${palette.darkBlue}05, transparent)`,
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
            {/* SIDE BY SIDE SECTION - Product Card and Bullet Points */}
            <Grid container spacing={6} alignItems="flex-start">
              {/* LEFT SIDE - Product Image Card */}
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
                      border: `1px solid ${palette.darkBlue}15`,
                      maxWidth: "500px",
                      mx: { xs: "auto", md: "0" },
                      ml: { md: "auto" },
                      mr: { md: "0" },
                      backgroundColor: palette.white,
                      p: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={bpc157ProductImage}
                      alt="BPC-157 5mg Vial"
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "12px",
                        display: "block",
                      }}
                    />
                    
                    <Box
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        backgroundColor: palette.darkBlue,
                        color: palette.white,
                        px: 2,
                        py: 0.5,
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Research-Grade
                    </Box>

                    {/* Price Bar at Bottom */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        backgroundColor: palette.white,
                        borderTop: `1px solid ${palette.darkBlue}15`,
                        py: 3,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: 800,
                        fontSize: { xs: "18px", md: "22px" },
                        color: palette.darkBlue,
                      }}
                    >
                      $189.00
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* RIGHT SIDE - Text Content (ONLY BULLET POINTS) */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: palette.darkBlue,
                        mb: 2,
                        display: "inline-block",
                      }}
                    >
                      Research Peptide Compound
                    </Typography>

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
                      <Box component="span" sx={{ color: palette.darkBlue }}>
                        BPC-157 5mg
                      </Box>{" "}
                      Vial
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      {[
                        "5mg of pharmaceutical-grade BPC-157 (Body Protection Compound-157)",
                        "Bacteriostatic water for injection included",
                        "Sterile insulin syringes with ultra-fine needles",
                        "Comprehensive subcutaneous injection guide",
                        "Alcohol swabs and sharps container",
                        "Personalized dosing protocol under medical supervision",
                        "Access to clinical support team for guidance"
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
                                backgroundColor: palette.darkBlue,
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
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            {/* BELOW CARD SECTION - Paragraphs and Spec Table */}
            <Box sx={{ mt: { xs: 6, md: 8 } }}>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: palette.darkGrey,
                  lineHeight: 1.7,
                  mb: 3,
                  maxWidth: "800px",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                Our BPC-157 peptide is manufactured to the highest purity standards and is being studied for potential systemic effects. Each 5mg vial provides multiple doses for research protocols with potential application for various tissues.
              </Typography>
              
              <Typography
                sx={{
                  fontSize: "15px",
                  color: palette.darkGrey,
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: "800px",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                Prepared in licensed compounding pharmacies following strict cGMP quality standards.
              </Typography>

              <Box
                sx={{
                  backgroundColor: `${palette.darkBlue}05`,
                  borderRadius: "12px",
                  p: 3,
                  border: `1px solid ${palette.darkBlue}10`,
                  width: "100%",
                  mt: 4,
                }}
              >
                <Grid container spacing={2}>
                  {[
                    { label: "Active Ingredient", value: "BPC-157 (15 amino acids)" },
                    { label: "Strength", value: "5 mg" },
                    { label: "Typical Research Dose", value: "200-300 mcg" },
                    { label: "Administration", value: "Subcutaneous" },
                  ].map((spec, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: palette.darkBlue,
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
        </Container>
      </Box>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 10, md: 16 },
          bgcolor: palette.white,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${palette.darkBlue}05 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${palette.lightBlue}05 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        <Container maxWidth="lg">
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
                  color: palette.darkBlue,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                Research Protocol
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "36px", md: "52px" },
                  fontWeight: 900,
                  color: palette.black,
                  mb: 3,
                  lineHeight: 1.1,
                }}
                >
                Your Path to{" "}
                <Box component="span" sx={{ color: palette.darkBlue, ml: 1 }}>
                  Potential Recovery Support
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  color: palette.darkGrey,
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Support your recovery journey through our physician-guided BPC-157 research protocol
              </Typography>
            </Box>
          </motion.div>

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
                icon: Shield,
                title: "Medical Assessment",
                description: "Evaluation under medical supervision",
                color: palette.darkBlue,
              },
              {
                step: 2,
                icon: Target,
                title: "Personalized Protocol",
                description: "Customized BPC-157 dosing for research",
                color: palette.lightBlue,
              },
              {
                step: 3,
                icon: Droplets,
                title: "Daily Administration",
                description: "Subcutaneous injection as studied",
                color: palette.darkBlue,
              },
              {
                step: 4,
                icon: RefreshCw,
                title: "Potential Recovery Support",
                description: "May support tissue repair processes under medical supervision",
                color: palette.lightBlue,
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
                    backgroundColor: palette.white,
                    borderRadius: "24px",
                    border: `1px solid ${palette.darkGrey}10`,
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

                  <Typography sx={{ fontSize: { xs: "22px", md: "24px" }, fontWeight: 800, color: palette.black, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "16px", color: palette.darkGrey, lineHeight: 1.6 }}>{item.description}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* HORIZONTAL "Healing Timeline" Section */}
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
                border: `1px solid ${palette.darkBlue}10`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Typography sx={{ fontSize: { xs: "28px", md: "36px" }, fontWeight: 900, color: palette.black, mb: 4, textAlign: "center" }}>
                Potential Timeline with{" "}
                <Box component="span" sx={{ color: palette.darkBlue }}>
                  BPC-157
                </Box>
              </Typography>
              
              <Typography sx={{ fontSize: "18px", color: palette.darkGrey, lineHeight: 1.6, mb: 6, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
                BPC-157's potential timeline is being studied in research settings:
              </Typography>

              <Grid container spacing={4} justifyContent="center">
                {[
                  { time: "Within 1-2 weeks", improvement: "Potential inflammation modulation", icon: Bandage, color: palette.darkBlue },
                  { time: "2-4 weeks", improvement: "Potential mobility support", icon: Activity, color: palette.lightBlue },
                  { time: "4-8 weeks", improvement: "Potential tissue support", icon: Bone, color: palette.darkBlue},
                  { time: "8-12 weeks", improvement: "Potential ongoing support", icon: HeartPulse, color: palette.lightBlue },
                ].map((milestone, idx) => (
                  <Grid item xs={12} sm={6} md={3} key={idx}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <Box sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        textAlign: "center",
                        p: 3, 
                        backgroundColor: palette.white, 
                        borderRadius: "18px", 
                        border: `1px solid ${palette.darkBlue}08`, 
                        boxShadow: "0 5px 20px rgba(0,0,0,0.03)",
                        height: "100%",
                      }}>
                        <Box sx={{ 
                          minWidth: 60, 
                          minHeight: 60, 
                          borderRadius: 2, 
                          backgroundColor: `${milestone.color}10`, 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          border: `1px solid ${milestone.color}30`,
                          mb: 2
                        }}>
                          <milestone.icon size={24} color={milestone.color} />
                        </Box>
                        <Typography sx={{ fontWeight: 800, color: palette.black, fontSize: 16, mb: 1 }}>
                          {milestone.time}
                        </Typography>
                        <Typography sx={{ color: palette.darkGrey, fontSize: 14, lineHeight: 1.4 }}>
                          {milestone.improvement}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ================= FINAL CTA SECTION ================= */}
      <Box sx={{ 
        py: { xs: 10, md: 14 }, 
        backgroundColor: palette.darkBlue,
        position: "relative",
        overflow: "hidden"
      }}>
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
                  Begin Your Research Journey
                </Typography>
              </motion.div>

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
                Ready to Support
                <Box component="span" sx={{ 
                  color: palette.white,
                  ml: 2,
                  opacity: 0.9
                }}>
                  Your Recovery Journey?
                </Box>
              </Typography>

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
                Access BPC-157 5mg peptide compound for $189.00. Includes medical consultation, 
                personalized guidance, discreet delivery, and ongoing clinical support.
              </Typography>

              <Box sx={{ 
                display: "flex", 
                flexDirection: "column",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
                mb: 5
              }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button
                  onClick={handleCtaClick}
                    sx={{
                      backgroundColor: palette.white,
                      color: palette.darkBlue,
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
                    Start Research - $189.00
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Typography
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
                    Schedule a consultation with our research specialists
                  </Typography>
                </motion.div>
              </Box>

              <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                {[
                  { text: "Medical Assessment Included" },
                  { text: "5mg Multi-Dose Vial" },
                  { text: "Potential Systemic Effects" },
                  { text: "Clinical Support Team Access" },
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
                    Important Medical Information
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
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>
                      Research Compound
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
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>
                       FDA-Approved
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
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>
                      Medical Supervision Required
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.6)",
                      mt: 2,
                      fontStyle: "italic",
                      maxWidth: "600px",
                      mx: "auto",
                    }}
                  >
                    BPC-157 is a research peptide with demonstrated properties in preclinical studies. It is not FDA-approved for human therapeutic use and should be used under medical supervision for research purposes. May interact with certain medications. Not for use by pregnant or nursing women. Discontinue use if adverse reactions occur. Individual results in clinical settings continue to be studied.
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default BPC157Page;