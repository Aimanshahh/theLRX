import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Shield,
  Zap,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  Star,
  Brain,
  Clock,
  TrendingUp,
  Heart,
  Target,
  Activity,
  Droplets,
  Package,
  PhoneCall,
  Stethoscope
} from 'lucide-react';

// Import your assets
import videoSrc from '../../../assets/Videos/motion2Fast_Premium_pharmaceutical_showcase_video_featuring_mu_0.mp4';
import retatrutideVialImg from '../../../assets/Medicines/38.png';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Color scheme
const colors = {
  black: '#000000',
  white: '#FFFFFF',
  darkBlue: '#00359E',
  lightBlue: '#0066CC',
  lightGrey: '#E5E7EB',
  darkGrey: '#4B5563',
  success: '#10B981'
};

// Price configuration
const PRICE = {
  amount: 449.00,
  currency: 'USD',
  display: '$194.00',
  period: 'per month'
};

// Benefits for the "How It Works" section
const pillBenefits = [
  { icon: TrendingUp, text: 'Weight Reduction', color: '#10B981' },
  { icon: Heart, text: 'Cardiovascular Health', color: '#EF4444' },
  { icon: Target, text: 'Blood Sugar Control', color: '#8B5CF6' },
  { icon: Activity, text: 'Metabolic Rate', color: '#F59E0B' },
  { icon: Droplets, text: 'Appetite Suppression', color: '#3B82F6' },
  { icon: ShieldCheck, text: 'Long-term Maintenance', color: '#6366F1' }
];

const RetatrutidePage = () => {
  const rimioUrl = "https://try.thelrx.com/intake/rt-76aoce";

  const handleCtaClick = () => {
    window.open(rimioUrl, "_blank", "noopener,noreferrer");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const videoRef = useRef(null);
  const [controls, setControls] = useState({});

  useEffect(() => {
    // Initialize animation controls
    setControls('visible');
  }, []);

  const handleVideoError = () => {
    console.error('Video failed to load');
    if (videoRef.current && videoRef.current.parentElement) {
      videoRef.current.parentElement.style.background = '#00359E';
    }
  };

  return (
    <Box sx={{ mt: 8 }}> {/* ADDED: This wrapper pushes content below navbar */}
      {/* Hero Section with Video */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '90vh', md: '100vh' },
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Video Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}
        >
          <motion.video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.6)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
          
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `linear-gradient(135deg, 
                ${alpha(colors.black, 0.85)} 0%,
                ${alpha(colors.black, 0.7)} 50%,
                ${alpha(colors.darkBlue, 0.25)} 100%
              )`,
              zIndex: 2
            }}
          />
        </Box>

        {/* Main Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 3,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            py: { xs: 4, md: 0 }
          }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            style={{ width: '100%' }}
          >
            <Grid container spacing={3}>
              {/* Headline Section */}
              <Grid item xs={12}>
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {
                        xs: '2.8rem',
                        sm: '3.5rem',
                        md: '4rem',
                        lg: '4.5rem'
                      },
                      fontWeight: 900,
                      color: colors.white,
                      textTransform: 'uppercase',
                      letterSpacing: { xs: '1px', md: '1.5px' },
                      lineHeight: 1,
                      mb: 2,
                      textShadow: '2px 2px 8px rgba(0,0,0,0.7)'
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: 'block',
                        color: colors.white,
                        fontWeight: 900
                      }}
                    >
                      RETATRUTIDE
                    </Box>

                    <Box
                      component="span"
                      sx={{
                        display: 'block',
                        color: colors.lightBlue,
                        fontWeight: 900,
                        mt: -1
                      }}
                    >
                      TRIPLE AGONIST
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: {
                        xs: '1.1rem',
                        md: '1.3rem'
                      },
                      color: colors.lightGrey,
                      mb: 2,
                      maxWidth: '500px',
                      fontWeight: 400,
                      lineHeight: 1.5
                    }}
                  >
                    Advanced weight management and metabolic health treatment
                  </Typography>
                </motion.div>

                {/* Price Display */}
                <motion.div variants={fadeInUp}>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 3 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        fontWeight: 900,
                        color: colors.white,
                        lineHeight: 1
                      }}
                    >
                      {PRICE.display}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: colors.lightGrey,
                        fontWeight: 400
                      }}
                    >
                      {PRICE.period}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              {/* Icons Section - Benefits */}
              <Grid item xs={12}>
                <motion.div variants={fadeInUp}>
                  <Grid container spacing={2} justifyContent="flex-start">
                    {[
                      {
                        icon: <Shield size={isMobile ? 22 : 26} color={colors.white} />,
                        title: 'Triple Mechanism',
                        delay: 0.1
                      },
                      {
                        icon: <Zap size={isMobile ? 22 : 26} color={colors.white} />,
                        title: 'Effective Weight Loss',
                        delay: 0.2
                      },
                      {
                        icon: <CheckCircle size={isMobile ? 22 : 26} color={colors.white} />,
                        title: 'Metabolic Health',
                        delay: 0.3
                      }
                    ].map((item, index) => (
                      <Grid item xs={12} sm={4} key={index}>
                        <motion.div
                          variants={scaleIn}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: item.delay }}
                          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                          whileHover={{ x: 5 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography
                            variant="body1"
                            sx={{
                              color: colors.white,
                              fontWeight: 600,
                              fontSize: { xs: '0.95rem', md: '1.1rem' }
                            }}
                          >
                            {item.title}
                          </Typography>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>

              {/* CTA Button */}
              <Grid item xs={12}>
                <motion.div
                  variants={fadeInUp}
                  style={{ marginTop: '40px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ChevronRight />}
                    onClick={handleCtaClick}
                    sx={{
                      px: { xs: 3.5, md: 4 },
                      py: { xs: 1.25, md: 1.5 },
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                      borderRadius: '30px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      boxShadow: `0 6px 20px ${alpha(colors.darkBlue, 0.4)}`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        background: `linear-gradient(135deg, ${colors.lightBlue}, ${colors.darkBlue})`,
                        boxShadow: `0 10px 25px ${alpha(colors.darkBlue, 0.6)}`,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Start Treatment Consultation
                  </Button>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  variants={fadeInUp}
                  style={{ marginTop: '20px' }}
                >
                  <Grid container spacing={1} justifyContent="flex-start">
                    {[
                      'GIP, GLP-1 & Glucagon Agonist',
                      'Weight Management',
                      'Blood Sugar Control'
                    ].map((text, index) => (
                      <Grid item key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5
                          }}
                        >
                          <Box
                            sx={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: colors.lightBlue
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{ 
                              color: colors.lightGrey,
                              fontSize: '0.85rem'
                            }}
                          >
                            {text}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3
          }}
        >
          <Box
            sx={{
              width: '30px',
              height: '45px',
              border: `2px solid ${alpha(colors.white, 0.4)}`,
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '8px'
            }}
          >
            <Box
              sx={{
                width: '3px',
                height: '8px',
                backgroundColor: colors.white,
                borderRadius: '1.5px'
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Product Showcase Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background: `radial-gradient(circle at top, ${alpha(colors.lightBlue, 0.12)}, transparent 60%),
                       linear-gradient(135deg, ${alpha(colors.darkBlue, 0.04)}, ${alpha(colors.lightBlue, 0.08)})`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Background Glow */}
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: alpha(colors.lightBlue, 0.18),
            filter: "blur(150px)",
            top: "12%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Box sx={{ textAlign: "center", mb: 7 }}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.darkBlue,
                  fontWeight: 900,
                  letterSpacing: 3.5,
                  mb: 2,
                  display: "block",
                }}
              >
                TRIPLE AGONIST THERAPY
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  color: colors.black,
                  fontSize: { xs: "2.4rem", md: "3.2rem" },
                  lineHeight: 1.1,
                }}
              >
                Retatrutide Treatment
              </Typography>
            </Box>
          </motion.div>

          {/* Product Card with Price */}
          <motion.div
            initial={{ opacity: 0, y: 90, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            animate={{ y: [0, -10, 0] }}
          >
            <Card
              sx={{
                borderRadius: "38px",
                overflow: "hidden",
                background: colors.white,
                maxWidth: 560,
                mx: "auto",
                boxShadow: "0 32px 100px rgba(0,0,0,0.18)",
                transition: "all 0.5s ease",
                "&:hover": {
                  transform: "translateY(-14px) scale(1.02)",
                  boxShadow: `0 45px 130px ${alpha(colors.darkBlue, 0.45)}`,
                },
              }}
            >
              {/* Product Image */}
              <Box
                component="img"
                src={retatrutideVialImg}
                alt="Retatrutide Vial"
                sx={{
                  width: "100%",
                  height: 360,
                  objectFit: "cover",
                }}
              />

              {/* Card Content with Price */}
              <CardContent sx={{ textAlign: "center", py: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    color: colors.black,
                    letterSpacing: 0.6,
                    mb: 2,
                  }}
                >
                  Advanced Weight Management Solution
                </Typography>
                
                {/* Price Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    background: `linear-gradient(135deg, ${alpha(colors.darkBlue, 0.1)} 0%, ${alpha(colors.lightBlue, 0.1)} 100%)`,
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    mb: 2,
                    border: `1px solid ${alpha(colors.darkBlue, 0.2)}`
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 900,
                      color: colors.darkBlue,
                      lineHeight: 1
                    }}
                  >
                    {PRICE.display}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      color: colors.darkGrey,
                      fontWeight: 500
                    }}
                  >
                    {PRICE.period}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: colors.darkGrey,
                    fontSize: '0.9rem',
                    mb: 3
                  }}
                >
                  *Prescription required. Consultation included.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ChevronRight />}
                  onClick={handleCtaClick}
                  sx={{
                    background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                    borderRadius: '30px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Box
              sx={{
                mt: 9,
                maxWidth: 820,
                mx: "auto",
                p: { xs: 4, md: 6 },
                borderRadius: "36px",
                background: `linear-gradient(135deg, ${alpha(colors.white, 0.72)}, ${alpha(colors.white, 0.95)})`,
                backdropFilter: "blur(24px)",
                boxShadow: "0 32px 100px rgba(0,0,0,0.14)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative Top Accent */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 140,
                  height: 4,
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                }}
              />

              {/* Soft Glow */}
              <Box
                sx={{
                  position: "absolute",
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  background: alpha(colors.lightBlue, 0.22),
                  filter: "blur(150px)",
                  top: -100,
                  right: -100,
                }}
              />

              {/* Upper Label */}
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  textAlign: "center",
                  color: colors.darkBlue,
                  letterSpacing: 3.5,
                  fontWeight: 900,
                  mb: 2,
                }}
              >
                OFFICIAL PRODUCT DESCRIPTION
              </Typography>

              {/* Primary Description */}
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  lineHeight: 2.1,
                  color: colors.darkGrey,
                  textAlign: "center",
                  fontWeight: 400,
                }}
              >
                Retatrutide is an investigational peptide-based compound studied for its interaction with multiple metabolic receptor pathways involved in energy balance and glucose regulation.
It may be considered alongside other provider-directed therapies such as NAD+ Injectable, BPC-157, and CJC-1295/Ipamorelin.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* New How It Works Section */}
      <Box sx={{ py: { xs: 12, md: 16 }, backgroundColor: colors.white }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      letterSpacing: 3,
                      fontWeight: 700,
                      color: colors.darkBlue,
                      mb: 2,
                      textTransform: "uppercase",
                    }}
                  >
                    YOUR JOURNEY STARTS HERE
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 800,
                      color: colors.black,
                      mb: 3,
                    }}
                  >
                    Start Your GLP-1 in 2 Easy Steps
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      color: colors.darkGrey,
                      lineHeight: 1.8,
                      mb: 4,
                    }}
                  >
                    Simple. Convenient. Effective.
                  </Typography>

                  {/* Mechanism Points */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {[
                      {
                        icon: <Stethoscope size={28} color={colors.darkBlue} />,
                        title: "1. Fill out the form",
                        description: "Complete a simple online medical form telling your clinician about your health and prior weight loss attempts."
                      },

                      {
                        icon: <Package size={28} color={colors.darkBlue} />,
                        title: "2. Receive Medicine",
                        description: "Receive your regularly scheduled medication in the mail straight from the pharmacy."
                      }
                    ].map((point, index) => (
                      <Box key={index} sx={{ display: "flex", gap: 3, alignItems: "flex-start" }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: "16px",
                            backgroundColor: alpha(colors.darkBlue, 0.1),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {point.icon}
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: "1.1rem",
                              color: colors.black,
                              mb: 1,
                            }}
                          >
                            {point.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.95rem",
                              color: colors.darkGrey,
                              lineHeight: 1.6,
                            }}
                          >
                            {point.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>

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
                      background: `linear-gradient(135deg, ${colors.white}, #FAFAFA)`,
                      boxShadow: "0 15px 40px rgba(3, 18, 64, 0.08)",
                      border: `1px solid rgba(0, 53, 158, 0.08)`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: colors.darkGrey,
                        fontWeight: 900,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Brain size={24} color={colors.darkBlue} />
                      How The Program Works
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: colors.darkGrey,
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      Thoughtfully designed to support elegant, sustainable weight loss while enhancing metabolic well-being and restoring confidence in your daily vitality.
                    </Typography>
                    
                    {/* Key Benefits */}
                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mt: 3 }}>
                      {[
                        { icon: ShieldCheck, text: 'Provider-Crafted Intake', color: '#6366F1' },
                        { icon: Target, text: 'Customized Treatment', color: '#8B5CF6' },
                        { icon: Package, text: 'Discreet Delivery', color: '#F59E0B' },
                        { icon: PhoneCall, text: 'Ongoing Care Team Access', color: '#3B82F6' }
                      ].map((benefit, index) => (
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
                              color: colors.darkGrey,
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
                      backgroundColor: colors.white,
                      borderRadius: "16px",
                      border: `2px dashed ${colors.darkBlue}30`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 800,
                        color: colors.darkGrey,
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Clock size={20} color={colors.darkBlue} />
                      Direct Access to Your Health Provider
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: colors.darkGrey,
                        lineHeight: 1.6,
                      }}
                    >
                      With Liquid Rx, you'll have ongoing support from experienced providers through virtual consultations. We'll be with you every step of the way, ensuring your treatment plan delivers the results you're looking for.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* ================= FINAL CTA SECTION ================= */}
      <Box sx={{ 
        py: { xs: 10, md: 14 }, 
        backgroundColor: colors.darkBlue,
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
                    color: colors.white,
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
                  color: colors.white,
                  lineHeight: 1.2,
                }}
              >
                Ready to Enhance Your{" "}
                <Box component="span" sx={{ 
                  color: "rgba(255,255,255,0.9)",
                  background: "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  Metabolic Health?
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
                Take the first step towards improved weight management, better metabolic control, 
                and enhanced overall health. Our medical team is ready to guide you through a 
                personalized Retatrutide treatment plan.
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
                    onClick={handleCtaClick}
                    sx={{
                      backgroundColor: colors.white,
                      color: colors.darkBlue,
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
                    onClick={handleCtaClick}
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
                        color: colors.white,
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
                              backgroundColor: colors.white,
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
    </Box> // CLOSING the mt:8 wrapper Box
  );
};

// Testimonial Component
const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robert K.',
      age: 58,
      location: 'Austin, TX',
      rating: 5,
      condition: 'Weight Management',
      content: 'Retatrutide has been transformative. I lost 15% body weight and my metabolic health markers improved dramatically.',
      result: 'Lost 15% weight',
      duration: '6 months of treatment',
      avatarColor: '#00359E'
    },
    {
      id: 2,
      name: 'Jennifer M.',
      age: 45,
      location: 'Denver, CO',
      rating: 5,
      condition: 'Metabolic Syndrome',
      content: 'The triple mechanism made all the difference. Better results than any previous treatment I tried.',
      result: 'Improved A1C',
      duration: '4 months of treatment',
      avatarColor: '#003B9D'
    },
    {
      id: 3,
      name: 'William T.',
      age: 62,
      location: 'Phoenix, AZ',
      rating: 5,
      condition: 'Obesity + Diabetes',
      content: 'Significant weight loss and better blood sugar control. The comprehensive approach really works.',
      result: 'Weight: -28 lbs',
      duration: '8 months of treatment',
      avatarColor: '#00359E'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: '#FFFFFF',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                fontWeight: 700,
                color: '#00359E',
                mb: 2
              }}
            >
              Highly Recommended by Patients
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#747578',
                fontWeight: 400,
                maxWidth: '600px',
                margin: '0 auto',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.6
              }}
            >
              Join the growing number of customers who trust Liquid Rx to deliver discreet, reliable care that truly works.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            <IconButton
              onClick={prevTestimonial}
              sx={{
                position: 'absolute',
                left: { xs: -12, md: -16 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                background: '#FFFFFF',
                border: `1px solid #E5E7EB`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                '&:hover': { background: '#FAFAFA' },
                display: { xs: 'none', sm: 'flex' }
              }}
            >
              <ChevronLeft size={24} color="#747578" />
            </IconButton>

            <IconButton
              onClick={nextTestimonial}
              sx={{
                position: 'absolute',
                right: { xs: -12, md: -16 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                background: '#FFFFFF',
                border: `1px solid #E5E7EB`,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                '&:hover': { background: '#FAFAFA' },
                display: { xs: 'none', sm: 'flex' }
              }}
            >
              <ChevronRight size={24} color="#747578" />
            </IconButton>

            <Box sx={{ position: 'relative', height: { xs: 'auto', md: 320 }, minHeight: 320 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Card
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      background: '#FFFFFF',
                      border: '1px solid #F3F4F6',
                      borderRadius: { xs: '16px', md: '20px' },
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' }, 
                      gap: { xs: 3, md: 4 }, 
                      alignItems: 'center',
                      textAlign: { xs: 'center', md: 'left' }
                    }}>
                      <Box sx={{ textAlign: 'center', flexShrink: 0 }}>
                        <Avatar
                          sx={{
                            width: { xs: 80, md: 100 },
                            height: { xs: 80, md: 100 },
                            bgcolor: testimonials[currentIndex].avatarColor,
                            margin: '0 auto 1.5rem',
                            fontSize: { xs: '1.75rem', md: '2rem' },
                            fontWeight: 600,
                          }}
                        >
                          {testimonials[currentIndex].name.charAt(0)}
                        </Avatar>
                        
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Chip
                            label={testimonials[currentIndex].result}
                            sx={{
                              background: `linear-gradient(135deg, ${alpha(testimonials[currentIndex].avatarColor, 0.1)} 0%, ${alpha(testimonials[currentIndex].avatarColor, 0.05)} 100%)`,
                              color: testimonials[currentIndex].avatarColor,
                              fontWeight: 600,
                              border: `1px solid ${alpha(testimonials[currentIndex].avatarColor, 0.2)}`,
                            }}
                            size="small"
                          />
                          <Chip
                            label={testimonials[currentIndex].duration}
                            sx={{
                              background: '#F9FAFB',
                              color: '#8B8D8E',
                              fontWeight: 500,
                              border: '1px solid #F3F4F6',
                            }}
                            size="small"
                          />
                        </Box>
                      </Box>

                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} size={18} fill="#FBBF24" color="#FBBF24" style={{ margin: '0 2px' }} />
                          ))}
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            color: '#000000',
                            fontStyle: 'italic',
                            mb: 3,
                            fontSize: { xs: '0.95rem', md: '1.05rem' },
                            lineHeight: 1.7,
                            fontWeight: 400
                          }}
                        >
                          "{testimonials[currentIndex].content}"
                        </Typography>

                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: '#000000',
                              mb: 0.5,
                              fontSize: { xs: '1rem', md: '1.1rem' }
                            }}
                          >
                            {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#8B8D8E',
                              fontWeight: 500,
                            }}
                          >
                            {testimonials[currentIndex].condition} • {testimonials[currentIndex].location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 4 }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: index === currentIndex ? 28 : 12,
                    height: 12,
                    borderRadius: '6px',
                    background: index === currentIndex ? '#00359E' : '#E5E7EB',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default RetatrutidePage;