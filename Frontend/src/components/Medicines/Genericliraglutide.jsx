import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Container, Stack, alpha, Grid, Card, Chip, Avatar, IconButton } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, Users, TrendingUp, Heart, ClipboardList, UserCheck, Package, Zap, Target, Brain, Pill, Calendar, CheckCircle, ChevronLeft, ChevronRight, Quote, Syringe, Droplet, Activity, Battery, Scale } from 'lucide-react';

// Import your background image
import liraglutideBackground from '../../assets/images/injection.jpg';
import liraglutidePenImage from '../../assets/images/Medicine.jpg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Counter component with animation
const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const startValue = 0;
      const endValue = end;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + easeOutQuart * (endValue - startValue));
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <Typography
      ref={ref}
      variant="h3"
      component="span"
      sx={{
        fontWeight: 700,
        background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontSize: { xs: '2rem', md: '2.5rem' },
        lineHeight: 1.2
      }}
    >
      {count}{suffix}
    </Typography>
  );
};

const CounterCards = () => {
  const cards = [
    {
      icon: Users,
      number: 8500,
      suffix: '+',
      label: 'Patients Treated',
      description: 'Successfully managing diabetes and weight',
      color: '#00359E'
    },
    {
      icon: TrendingUp,
      number: 1.5,
      suffix: '%',
      label: 'HbA1c Reduction',
      description: 'Average improvement in clinical studies',
      color: '#003B9D'
    },
    {
      icon: Scale,
      number: 6,
      suffix: 'kg',
      label: 'Weight Reduction',
      description: 'Average weight loss at 56 weeks',
      color: '#00359E'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 50%, #F5F7FA 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <Box textAlign="center" mb={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 700,
                  color: '#00359E',
                  mb: 2
                }}
              >
                Proven Results with Generic Liraglutide
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#747578',
                  fontWeight: 400,
                  maxWidth: '500px',
                  margin: '0 auto',
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.5
                }}
              >
                Join thousands managing diabetes and weight effectively
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {cards.map((card, index) => (
              <Grid item xs={12} sm={8} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.8)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0, 53, 158, 0.08)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(0, 53, 158, 0.12)',
                        background: 'rgba(255, 255, 255, 0.95)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        background: `linear-gradient(135deg, ${alpha(card.color, 0.1)} 0%, ${alpha(card.color, 0.05)} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${alpha(card.color, 0.2)}`,
                        margin: '0 auto 1rem'
                      }}
                    >
                      <card.icon size={28} color={card.color} />
                    </Box>

                    <Box mb={0.5}>
                      <AnimatedCounter 
                        end={card.number} 
                        suffix={card.suffix}
                        duration={2}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#00359E',
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                      }}
                    >
                      {card.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#8B8D8E',
                        lineHeight: 1.4,
                        fontSize: '0.85rem'
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

const ProductShowcase = () => {
  const features = [
    {
      icon: CheckCircle,
      text: 'GLP-1 Receptor Agonist',
      color: '#00359E'
    },
    {
      icon: CheckCircle,
      text: 'Once Daily Injection',
      color: '#003B9D'
    },
    {
      icon: CheckCircle,
      text: 'FDA-Approved Generic',
      color: '#00359E'
    },
    {
      icon: CheckCircle,
      text: 'Cardiovascular Benefits',
      color: '#003B9D'
    },
    {
      icon: CheckCircle,
      text: 'Blood Sugar Control',
      color: '#00359E'
    },
    {
      icon: CheckCircle,
      text: 'Weight Management',
      color: '#003B9D'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${alpha('#00359E', 0.1)}`,
                  borderRadius: '24px',
                  boxShadow: '0 20px 60px rgba(0, 53, 158, 0.1)',
                  textAlign: 'center'
                }}
              >
                <Box
                  component="img"
                  src={liraglutidePenImage}
                  alt="Liraglutide Pen"
                  sx={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    borderRadius: '16px',
                    margin: '0 auto',
                    display: 'block',
                    boxShadow: '0 16px 40px rgba(0, 53, 158, 0.15)'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00359E',
                    fontWeight: 600,
                    mt: 3,
                    mb: 1
                  }}
                >
                  Generic Liraglutide Pen
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#747578',
                    fontSize: '0.9rem'
                  }}
                >
                  Pre-filled, multi-dose pen for easy administration
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#00359E',
                  mb: 3
                }}
              >
                Generic Liraglutide Treatment
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  color: '#747578',
                  fontWeight: 400,
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.1rem' }
                }}
              >
                A cost-effective GLP-1 receptor agonist that helps control blood sugar levels 
                in adults with type 2 diabetes and supports weight management when used with 
                diet and exercise.
              </Typography>

              {/* Features Grid */}
              <Grid container spacing={2} mb={4}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box
                          sx={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)} 0%, ${alpha(feature.color, 0.05)} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `1px solid ${alpha(feature.color, 0.2)}`,
                            flexShrink: 0
                          }}
                        >
                          <feature.icon size={16} color={feature.color} />
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#000000',
                            fontWeight: 500,
                            fontSize: '0.95rem'
                          }}
                        >
                          {feature.text}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* Dosage Info */}
              <Card
                sx={{
                  p: 3,
                  background: `linear-gradient(135deg, ${alpha('#00359E', 0.03)} 0%, ${alpha('#003B9D', 0.02)} 100%)`,
                  border: `1px solid ${alpha('#00359E', 0.1)}`,
                  borderRadius: '16px'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#00359E',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Recommended Dosage
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#747578',
                    mb: 2,
                    lineHeight: 1.6
                  }}
                >
                  Start with 0.6 mg daily for at least one week, then increase to 1.2 mg daily. 
                  May increase to 1.8 mg daily if additional glycemic control is needed. 
                  Inject subcutaneously in abdomen, thigh, or upper arm.
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label="Once Daily"
                    size="small"
                    sx={{
                      background: alpha('#00359E', 0.1),
                      color: '#00359E',
                      fontWeight: 600
                    }}
                  />
                  <Chip
                    label="Titration Required"
                    size="small"
                    sx={{
                      background: alpha('#003B9D', 0.1),
                      color: '#003B9D',
                      fontWeight: 600
                    }}
                  />
                  <Chip
                    label="Refrigerate"
                    size="small"
                    sx={{
                      background: alpha('#00359E', 0.1),
                      color: '#00359E',
                      fontWeight: 600
                    }}
                  />
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const MedicineInfo = () => {
  const features = [
    {
      icon: Droplet,
      title: 'Blood Sugar Control',
      description: 'Lowers HbA1c by increasing insulin secretion and decreasing glucagon secretion.',
      color: '#00359E'
    },
    {
      icon: Scale,
      title: 'Weight Management',
      description: 'Reduces appetite and slows gastric emptying, leading to sustainable weight loss.',
      color: '#003B9D'
    },
    {
      icon: Activity,
      title: 'Cardiovascular Benefits',
      description: 'Shown to reduce major adverse cardiovascular events in high-risk patients.',
      color: '#00359E'
    },
    {
      icon: Battery,
      title: 'Long-Lasting Effect',
      description: 'Once-daily dosing provides 24-hour glycemic control with stable blood levels.',
      color: '#003B9D'
    }
  ];

  const benefits = [
    'Once-daily injection convenience',
    'Proven HbA1c reduction of 1-1.5%',
    'Average weight loss of 4-6 kg',
    'Lower risk of hypoglycemia',
    'Cardiovascular protection',
    'Generic cost savings'
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#00359E',
                  mb: 2
                }}
              >
                How Liraglutide Works
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#747578',
                  fontWeight: 400,
                  maxWidth: '700px',
                  margin: '0 auto',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6
                }}
              >
                A GLP-1 receptor agonist that mimics natural hormones to regulate blood sugar and appetite
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} mb={8}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${alpha(feature.color, 0.1)}`,
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0, 53, 158, 0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 16px 48px rgba(0, 53, 158, 0.12)',
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)} 0%, ${alpha(feature.color, 0.05)} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `2px solid ${alpha(feature.color, 0.2)}`,
                        marginBottom: 3
                      }}
                    >
                      <feature.icon size={32} color={feature.color} />
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: feature.color,
                        mb: 2,
                        fontSize: { xs: '1.25rem', md: '1.4rem' }
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#747578',
                        lineHeight: 1.6,
                        fontSize: '1rem'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                background: `linear-gradient(135deg, ${alpha('#00359E', 0.03)} 0%, ${alpha('#003B9D', 0.02)} 100%)`,
                border: `1px solid ${alpha('#00359E', 0.1)}`,
                borderRadius: '20px',
                textAlign: 'center'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#00359E',
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                Key Clinical Benefits
              </Typography>
              
              <Grid container spacing={2} justifyContent="center" mb={4}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Chip
                        icon={<CheckCircle size={16} color="#00359E" />}
                        label={benefit}
                        sx={{
                          background: `linear-gradient(135deg, ${alpha('#00359E', 0.1)} 0%, ${alpha('#003B9D', 0.05)} 100%)`,
                          color: '#000000',
                          fontWeight: 600,
                          py: 2,
                          px: 1,
                          border: `1px solid ${alpha('#00359E', 0.2)}`,
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

const ProcessTimeline = () => {
  const steps = [
    {
      label: 'Medical Assessment',
      description: 'Complete diabetes and health evaluation',
      icon: ClipboardList,
      color: '#00359E',
      details: 'Our healthcare providers review your medical history, current medications, and treatment goals.'
    },
    {
      label: 'Doctor Consultation',
      description: 'Virtual visit with diabetes specialist',
      icon: UserCheck,
      color: '#003B9D',
      details: 'Personalized consultation to determine if liraglutide is right for your diabetes management plan.'
    },
    {
      label: 'Injection Training',
      description: 'Learn proper administration technique',
      icon: Syringe,
      color: '#00359E',
      details: 'Comprehensive video tutorials and live support to ensure comfortable, correct injection technique.'
    },
    {
      label: 'Ongoing Monitoring',
      description: 'Regular check-ins and dose adjustment',
      icon: Calendar,
      color: '#003B9D',
      details: 'Continuous support with regular blood sugar monitoring and dose titration as needed.'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <Box textAlign="center" mb={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  color: '#00359E',
                  mb: 2
                }}
              >
                Start Your Treatment Journey
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#747578',
                  fontWeight: 400,
                  maxWidth: '600px',
                  margin: '0 auto',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6
                }}
              >
                Get comprehensive diabetes care with generic liraglutide in four simple steps
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
            <Stack spacing={4}>
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.8,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <Card
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${alpha(step.color, 0.1)}`,
                      borderRadius: '20px',
                      boxShadow: '0 8px 32px rgba(0, 53, 158, 0.08)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0, 53, 158, 0.12)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: `linear-gradient(135deg, ${step.color} 0%, ${alpha(step.color, 0.7)} 100%)`,
                        borderRadius: '4px 0 0 4px'
                      }
                    }}
                  >
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-start">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '16px',
                            background: `linear-gradient(135deg, ${alpha(step.color, 0.1)} 0%, ${alpha(step.color, 0.05)} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${alpha(step.color, 0.2)}`,
                            position: 'relative'
                          }}
                        >
                          <step.icon size={32} color={step.color} />
                          <Box
                            sx={{
                              position: 'absolute',
                              top: '-8px',
                              right: '-8px',
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              background: `linear-gradient(135deg, ${step.color} 0%, ${alpha(step.color, 0.7)} 100%)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#FFFFFF',
                              fontSize: '0.75rem',
                              fontWeight: 700
                            }}
                          >
                            {index + 1}
                          </Box>
                        </Box>
                      </Box>

                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: step.color,
                            mb: 1,
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                          }}
                        >
                          {step.label}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#00359E',
                            fontWeight: 600,
                            mb: 2,
                            fontSize: { xs: '1rem', md: '1.1rem' }
                          }}
                        >
                          {step.description}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#747578',
                            lineHeight: 1.6,
                            fontSize: '0.95rem'
                          }}
                        >
                          {step.details}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robert K.',
      age: 58,
      location: 'Austin, TX',
      rating: 5,
      condition: 'Type 2 Diabetes',
      content: 'Generic liraglutide has been a game-changer for my diabetes management. My HbA1c went from 8.2% to 6.8% in just 3 months.',
      result: 'HbA1c: 6.8%',
      duration: '6 months of treatment',
      avatarColor: '#00359E'
    },
    {
      id: 2,
      name: 'Jennifer M.',
      age: 45,
      location: 'Denver, CO',
      rating: 5,
      condition: 'Weight Management',
      content: 'Not only has my blood sugar improved, but Ive lost 12 pounds without feeling constantly hungry. The injection is surprisingly easy.',
      result: 'Lost 12 lbs',
      duration: '4 months of treatment',
      avatarColor: '#003B9D'
    },
    {
      id: 3,
      name: 'William T.',
      age: 62,
      location: 'Phoenix, AZ',
      rating: 5,
      condition: 'Diabetes + Heart Health',
      content: 'My doctor recommended liraglutide for both diabetes and heart protection. My energy levels have improved dramatically.',
      result: 'Energy Level: High',
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
              Patient Success Stories
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
              Real patients achieving better diabetes control and weight management
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

const FinalCTABanner = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
                border: 'none',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(0, 53, 158, 0.15)',
                color: '#FFFFFF',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <Box position="relative" zIndex={1}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: '#FFFFFF',
                    mb: 3,
                    fontSize: { xs: '2rem', md: '3rem' },
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}
                >
                  Start Your Diabetes Management Journey
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 400,
                    mb: 6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    lineHeight: 1.6,
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}
                >
                  Take control of your blood sugar and weight with generic liraglutide treatment.
                </Typography>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
                      color: '#00359E',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      py: 2.5,
                      px: 6,
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)',
                      mb: 4,
                      minWidth: '280px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
                        boxShadow: '0 12px 40px rgba(255, 255, 255, 0.3)',
                      }
                    }}
                  >
                    Begin Assessment
                  </Button>
                </motion.div>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mb: 2 }}>
                  {[
                    { icon: Shield, text: 'HIPAA Secure' },
                    { icon: Clock, text: '10 Min Assessment' },
                    { icon: Star, text: '4.8/5 Rating' },
                    { icon: Users, text: '8,500+ Patients' }
                  ].map((badge, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <badge.icon size={16} color="rgba(255, 255, 255, 0.9)" />
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 600,
                        }}
                      >
                        {badge.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

const GenericLiraglutide = () => {
  return (
    <Box>
      {/* Hero Banner Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${alpha('#00359E', 0.85)} 0%, ${alpha('#003B9D', 0.75)} 100%), url(${liraglutideBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Stack spacing={4}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1.1,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    mb: 2
                  }}
                >
                  Generic Liraglutide
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #8B8D8E 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      display: 'block'
                    }}
                  >
                    Advanced Diabetes Treatment
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                    maxWidth: '600px',
                    opacity: 0.9,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    mb: 3
                  }}
                >
                  A cost-effective GLP-1 receptor agonist for type 2 diabetes management 
                  and weight control. Get comprehensive care from licensed healthcare professionals.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Syringe size={20} color="#FFFFFF" />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Once-Daily Injection
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Droplet size={20} color="#FFFFFF" />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Blood Sugar Control
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Scale size={20} color="#FFFFFF" />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Weight Management
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                      background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
                      color: '#FFFFFF',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: '50px',
                      boxShadow: '0 8px 32px rgba(0, 53, 158, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #003B9D 0%, #00359E 100%)',
                        boxShadow: '0 12px 40px rgba(0, 53, 158, 0.6)',
                      },
                      minWidth: { xs: '100%', sm: 'auto' }
                    }}
                  >
                    Start Consultation
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#FFFFFF',
                    opacity: 0.8,
                    fontSize: '0.9rem'
                  }}
                >
                  ✓ Free initial assessment • ✓ Insurance assistance • ✓ Injection training included
                </Typography>
              </motion.div>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Counter Cards Section */}
      <CounterCards />

      {/* New Product Showcase Section */}
      <ProductShowcase />

      {/* Medicine Information Section */}
      <MedicineInfo />

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />

      {/* Final CTA Banner */}
      <FinalCTABanner />
    </Box>
  );
};

export default GenericLiraglutide;