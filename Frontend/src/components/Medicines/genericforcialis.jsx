import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import genericCialisImg from "../../assets/images/medicine.jpg"; // change path if needed
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  alpha, 
  useTheme,
  useMediaQuery,
  Card,
  CardContent
} from '@mui/material';
import { 
  Clock,
  Heart,
  Shield,
  Zap,
  CheckCircle,
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  Activity,
  Sparkles,
  Award,
  Target,
  Users,
  TrendingUp,
  Star,
  Pill,
  Droplet,
  ShieldCheck,
  BatteryCharging,
  Brain,
  Leaf,
  Package
} from 'lucide-react';

// Import video - you can replace this with your own video path
import videoSrc from '../../assets/Videos/medicalexperts.mp4';
// Fallback video URL in case import fails
const fallbackVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-blue-medical-animation-41506-large.mp4';

// Carousel Component defined separately
const CarouselTestimonials = () => {
  const testimonials = [
    { name: "Michael Roberts", role: "Patient, 55", text: "Generic Cialis has been a game-changer. The 36-hour window gives me spontaneous freedom I haven't had in years." },
    { name: "Dr. Sarah Johnson", role: "Urologist", text: "Tadalafil offers extended duration of action, making it a preferred choice for many of my patients seeking flexibility." },
    { name: "James Wilson", role: "Patient, 49", text: "More affordable than brand-name Cialis but just as effective. It's made a huge difference in my relationship." },
    { name: "David Chen", role: "Pharmacist", text: "Consistent quality and reliability. Patients report high satisfaction with the extended effectiveness window." }
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <Box sx={{ position: "relative" }}>
      {testimonials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: index === current ? 1 : 0, x: index === current ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          style={{
            display: index === current ? "block" : "none",
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              p: { xs: 5, md: 6 },
              borderRadius: "30px",
              background: '#FFFFFF',
              boxShadow: `0 28px 80px rgba(0,0,0,0.12)`,
            }}
          >
            <Typography sx={{ fontStyle: "italic", color: '#747578', lineHeight: 1.8, mb: 4 }}>
              "{item.text}"
            </Typography>

            <Typography sx={{ fontWeight: 900, color: '#000000', fontSize: "1.05rem" }}>
              {item.name}
            </Typography>

            <Typography sx={{ fontSize: "0.85rem", color: '#8B8D8E' }}>
              {item.role}
            </Typography>
          </Box>
        </motion.div>
      ))}

      {/* Arrows */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
          px: 2,
        }}
      >
        <Box onClick={prevSlide} sx={{ cursor: "pointer", background: '#FFFFFF', borderRadius: "50%", p: 1.5, boxShadow: `0 4px 15px rgba(0,0,0,0.15)`, "&:hover": { transform: "scale(1.1)" } }}>
          <ArrowLeft size={24} color='#00359E' />
        </Box>
        <Box onClick={nextSlide} sx={{ cursor: "pointer", background: '#FFFFFF', borderRadius: "50%", p: 1.5, boxShadow: `0 4px 15px rgba(0,0,0,0.15)`, "&:hover": { transform: "scale(1.1)" } }}>
          <ArrowRight size={24} color='#00359E' />
        </Box>
      </Box>
    </Box>
  );
};

const genericforcialis = () => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Same color palette as Hardmints
  const colors = {
    darkGrey: '#747578',
    lightGrey: '#8B8D8E',
    darkBlue: '#00359E',
    lightBlue: '#003B9D',
    white: '#FFFFFF',
    black: '#000000'
  };

  // Video error handling
  const handleVideoError = () => {
    console.error('Failed to load video, using fallback');
    if (videoRef.current) {
      videoRef.current.src = fallbackVideoUrl;
    }
  };

  // Initialize animations
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Hero Section */}
   <Box
  sx={{
    position: 'relative',
    width: '100%',
    height: '100vh',
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
      <source src={videoSrc || fallbackVideoUrl} type="video/mp4" />
      <source src={fallbackVideoUrl} type="video/mp4" />
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
                  background: `linear-gradient(135deg, ${colors.white} 30%, ${alpha(colors.white, 0.9)} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                GENERIC
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: `linear-gradient(135deg, ${colors.lightBlue} 0%, ${colors.darkBlue} 100%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  mt: -1
                }}
              >
                CIALIS®
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
                mb: 4,
                maxWidth: '500px',
                fontWeight: 400,
                lineHeight: 1.5
              }}
            >
              Tadalafil tablets offering 36-hour effectiveness for spontaneous intimacy and ED treatment.
            </Typography>
          </motion.div>
        </Grid>

        {/* Icons Section - Benefits */}
        <Grid item xs={12}>
          <motion.div variants={fadeInUp}>
            <Grid container spacing={2} justifyContent="flex-start">
              {[
                {
                  icon: <Clock size={isMobile ? 22 : 26} color={colors.white} />,
                  title: '36-Hour Duration',
                  delay: 0.1
                },
                {
                  icon: <Heart size={isMobile ? 22 : 26} color={colors.white} />,
                  title: 'Spontaneous Freedom',
                  delay: 0.2
                },
                {
                  icon: <Shield size={isMobile ? 22 : 26} color={colors.white} />,
                  title: 'Cost-Effective',
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
                'FDA-Approved Generic',
                'Extended 36-Hour Window',
                'Daily Use Option Available'
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

      {/* Features Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: colors.white,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 20% 80%, ${alpha(colors.darkBlue, 0.03)} 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${alpha(colors.lightBlue, 0.02)} 0%, transparent 50%)`,
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="overline"
                  sx={{
                    color: colors.darkBlue,
                    fontWeight: 700,
                    letterSpacing: 2,
                    mb: 2,
                    display: 'block',
                    fontSize: '0.9rem'
                  }}
                >
                  WHY CHOOSE GENERIC CIALIS
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 900,
                    color: colors.black,
                    mb: 2,
                    lineHeight: 1.1
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    Extended
                  </Box>
                  {' '}Freedom & Flexibility
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.darkGrey,
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  Experience the benefits of tadalafil with extended duration and greater spontaneity
                </Typography>
              </motion.div>
            </Box>
          </motion.div>

          {/* 4 Horizontal Feature Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <Grid container spacing={3} sx={{ mb: { xs: 6, md: 8 } }}>
              {[
                {
                  icon: <Clock size={28} />,
                  title: '36-Hour Effectiveness',
                  description: 'Works up to 36 hours, allowing for spontaneous intimacy without timing pressure.',
                  color: colors.darkBlue,
                  delay: 0.1,
                  gradient: `linear-gradient(135deg, ${alpha(colors.darkBlue, 0.1)}, ${alpha(colors.lightBlue, 0.1)})`
                },
                {
                  icon: <Zap size={28} />,
                  title: 'Daily Dosing Option',
                  description: 'Low-dose daily use available for men who prefer continuous treatment.',
                  color: colors.lightBlue,
                  delay: 0.2,
                  gradient: `linear-gradient(135deg, ${alpha(colors.lightBlue, 0.1)}, ${alpha(colors.darkBlue, 0.1)})`
                },
                {
                  icon: <TrendingUp size={28} />,
                  title: 'Proven Efficacy',
                  description: 'Clinically demonstrated to improve erectile function in most men.',
                  color: '#0066CC',
                  delay: 0.3,
                  gradient: `linear-gradient(135deg, ${alpha('#0066CC', 0.1)}, ${alpha(colors.darkBlue, 0.1)})`
                },
                {
                  icon: <Package size={28} />,
                  title: 'Cost Savings',
                  description: 'Generic version offers significant savings compared to brand-name Cialis.',
                  color: '#4CAF50',
                  delay: 0.4,
                  gradient: `linear-gradient(135deg, ${alpha('#4CAF50', 0.1)}, ${alpha(colors.darkBlue, 0.1)})`
                }
              ].map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                    transition={{ delay: feature.delay }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        border: 'none',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        borderRadius: 3,
                        backgroundColor: colors.white,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: `0 12px 40px ${alpha(colors.darkBlue, 0.15)}`,
                          '& .feature-icon': {
                            transform: 'scale(1.1) rotate(5deg)',
                            boxShadow: `0 8px 25px ${alpha(feature.color, 0.3)}`
                          }
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(90deg, ${feature.color}, ${colors.lightBlue})`,
                          opacity: 0.8
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: { xs: 3, md: 4 },
                          minWidth: { md: '180px' },
                          backgroundColor: feature.gradient,
                          borderRight: { md: `1px solid ${alpha(colors.darkBlue, 0.1)}` }
                        }}
                      >
                        <Box
                          className="feature-icon"
                          sx={{
                            width: 80,
                            height: 80,
                            borderRadius: '20px',
                            backgroundColor: alpha(feature.color, 0.1),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            border: `2px solid ${alpha(feature.color, 0.2)}`
                          }}
                        >
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                        </Box>
                      </Box>
                      <CardContent sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: colors.black,
                            fontSize: { xs: '1.5rem', md: '1.75rem' }
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: colors.darkGrey,
                            lineHeight: 1.7,
                            fontSize: '1.1rem'
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>

        {/* ===================== MEDICINE SHOWCASE ===================== */}
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
                  GENERIC TADALAFIL
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
                  Generic Cialis (Tadalafil)
                </Typography>
              </Box>
            </motion.div>

            {/* Floating Center Medicine Card */}
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
                {/* Medicine Image */}
                <Box
                  component="img"
                  src={genericCialisImg}
                  alt="Generic Cialis Medication"
                  sx={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                  }}
                />

                {/* Card Title Only */}
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 900,
                      color: colors.black,
                      letterSpacing: 0.6,
                    }}
                  >
                    Extended-Duration ED Treatment
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>

            {/* ===================== LUXURY VISUAL DESCRIPTION ===================== */}
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
                  EXTENDED ACTION PROFILE
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
                  Generic Cialis contains tadalafil, which works by relaxing blood vessels and increasing 
                  blood flow to specific areas of the body. Its extended 36-hour window provides greater 
                  flexibility and spontaneity compared to shorter-acting alternatives.
                </Typography>

                {/* Divider */}
                <Box
                  sx={{
                    width: 90,
                    height: 2,
                    background: `linear-gradient(90deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                    borderRadius: 999,
                    mx: "auto",
                    my: 4,
                    opacity: 0.9,
                  }}
                />

                {/* Secondary Description */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    lineHeight: 1.95,
                    color: alpha(colors.black, 0.75),
                    textAlign: "center",
                  }}
                >
                  Available in both as-needed and low-dose daily formulations, Generic Cialis offers 
                  treatment flexibility to match individual lifestyle needs and preferences while 
                  providing significant cost savings versus the brand-name version.
                </Typography>
              </Box>
            </motion.div>
          </Container>
        </Box>
        {/* ===================== END MEDICINE SHOWCASE ===================== */}
        
        {/* ===================== HOW IT WORKS (REFINED) ===================== */}
        <Box sx={{ py: { xs: 8, md: 10 } }}>
          <Container maxWidth="lg">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    letterSpacing: 3,
                    fontWeight: 700,
                    color: colors.darkBlue,
                    mb: 1,
                  }}
                >
                  HOW IT WORKS
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                    fontWeight: 800,
                    color: colors.black,
                  }}
                >
                  Extended Duration Mechanism
                </Typography>
              </Box>
            </motion.div>

            {/* Steps */}
            <Grid container spacing={4}>
              {[
                {
                  icon: <Clock size={22} />,
                  title: "Long-Lasting Effect",
                  text: "Works up to 36 hours after a single dose for extended flexibility.",
                },
                {
                  icon: <Droplet size={22} />,
                  title: "Enhanced Blood Flow",
                  text: "Increases circulation to support erection with sexual stimulation.",
                },
                {
                  icon: <Heart size={22} />,
                  title: "Spontaneous Use",
                  text: "Eliminates the need to time medication with sexual activity.",
                },
                {
                  icon: <ShieldCheck size={22} />,
                  title: "Daily Option",
                  text: "Low-dose daily regimen available for continuous treatment.",
                },
              ].map((item, i) => (
                <Grid item xs={12} md={3} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: 3.5,
                        borderRadius: "18px",
                        height: "100%",
                        border: `1px solid ${alpha(colors.black, 0.06)}`,
                        background: colors.white,
                        transition: "0.35s ease",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          boxShadow: `0 14px 40px ${alpha(colors.darkBlue, 0.2)}`,
                        },
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "10px",
                          mb: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: alpha(colors.darkBlue, 0.08),
                          color: colors.darkBlue,
                        }}
                      >
                        {item.icon}
                      </Box>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          mb: 1,
                          color: colors.black,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Text */}
                      <Typography
                        sx={{
                          fontSize: "0.92rem",
                          lineHeight: 1.7,
                          color: colors.darkGrey,
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        {/* ===================== END HOW IT WORKS ===================== */}
        
        {/* ===================== TESTIMONIAL CAROUSEL ===================== */}
        <Box sx={{ py: { xs: 12, md: 16 }, backgroundColor: alpha(colors.lightBlue, 0.03) }}>
          <Container maxWidth="lg">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ textAlign: "center", mb: 10 }}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    letterSpacing: 3,
                    fontWeight: 700,
                    color: colors.darkBlue,
                    mb: 1,
                  }}
                >
                  PATIENT EXPERIENCES
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "2.6rem" },
                    fontWeight: 900,
                    color: colors.black,
                  }}
                >
                  What Patients Are Saying
                </Typography>
              </Box>
            </motion.div>

            {/* Carousel Component */}
            <CarouselTestimonials />
          </Container>
        </Box>
        {/* ===================== END TESTIMONIAL CAROUSEL ===================== */}
        
        {/* ===================== FINAL CTA BANNER ===================== */}
        <Box
          sx={{
            position: "relative",
            py: { xs: 16, md: 20 },
            background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.lightBlue})`,
            overflow: "hidden",
            textAlign: "center",
            color: colors.white,
          }}
        >
          {/* Decorative Large Glow */}
          <Box
            sx={{
              position: "absolute",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: alpha(colors.white, 0.12),
              filter: "blur(180px)",
              top: "-25%",
              left: "-15%",
              transform: "rotate(45deg)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: alpha(colors.white, 0.1),
              filter: "blur(160px)",
              bottom: "-20%",
              right: "-10%",
              transform: "rotate(-30deg)",
            }}
          />

          {/* Floating Light Particles */}
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: Math.random() * 15 + 8,
                height: Math.random() * 15 + 8,
                background: alpha(colors.white, 0.18),
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(8px)",
                animation: `float${i} 8s ease-in-out infinite alternate`,
              }}
            />
          ))}

          {/* Floating animations keyframes */}
          <style>
            {`
              @keyframes float0 {0% {transform: translateY(0)} 50% {transform: translateY(-12px)} 100% {transform: translateY(0)}}
              @keyframes float1 {0% {transform: translateY(0)} 50% {transform: translateY(-10px)} 100% {transform: translateY(0)}}
              @keyframes float2 {0% {transform: translateY(0)} 50% {transform: translateY(-15px)} 100% {transform: translateY(0)}}
              @keyframes float3 {0% {transform: translateY(0)} 50% {transform: translateY(-8px)} 100% {transform: translateY(0)}}
              @keyframes float4 {0% {transform: translateY(0)} 50% {transform: translateY(-11px)} 100% {transform: translateY(0)}}
              @keyframes float5 {0% {transform: translateY(0)} 50% {transform: translateY(-14px)} 100% {transform: translateY(0)}}
            `}
          </style>

          <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: "2.2rem", md: "3rem" },
                  lineHeight: 1.15,
                  background: `linear-gradient(135deg, ${colors.white}, ${alpha(colors.white, 0.9)})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  px: 1,
                }}
              >
                Experience Extended Freedom
              </Typography>

              <Typography
                sx={{
                  maxWidth: 620,
                  mx: "auto",
                  mb: 6,
                  fontSize: "1.15rem",
                  color: alpha(colors.white, 0.9),
                  lineHeight: 1.85,
                }}
              >
                Get the flexibility and spontaneity you want with Generic Cialis. 
                Consult with a healthcare provider to see if tadalafil is right for you.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  px: { xs: 5, md: 7 },
                  py: { xs: 1.75, md: 2.25 },
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${colors.white}, ${alpha(colors.white, 0.85)})`,
                  color: colors.darkBlue,
                  borderRadius: "40px",
                  textTransform: "uppercase",
                  letterSpacing: "0.75px",
                  boxShadow: `0 12px 40px ${alpha(colors.white, 0.45)}`,
                  transition: "all 0.35s ease",
                  "&:hover": {
                    background: colors.white,
                    transform: "translateY(-3px) scale(1.03)",
                    boxShadow: `0 18px 55px ${alpha(colors.white, 0.55)}`,
                  },
                }}
              >
                Start Your Consultation
              </Button>

              {/* Medical Disclaimer */}
              <Typography
                sx={{
                  mt: 4,
                  fontSize: "0.8rem",
                  color: alpha(colors.white, 0.7),
                  maxWidth: 700,
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                *Generic Cialis (tadalafil) is a prescription medication for erectile dysfunction. 
                Consult a healthcare provider to determine if it's appropriate for you. 
                Results may vary. Use only as directed by your physician.
              </Typography>
            </motion.div>
          </Container>
        </Box>
        {/* ===================== END FINAL CTA BANNER ===================== */}
      </Box>
    </>
  );
};

export default genericforcialis;