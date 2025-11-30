import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Button, Container, Stack, alpha, Grid, Card, Chip, Avatar, IconButton } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock, Users, TrendingUp, Heart, ClipboardList, UserCheck, Package, Zap, Target, Brain, Droplets, ChevronLeft, ChevronRight, Quote, Check } from 'lucide-react';

// Import your background image - make sure to add this to your project
import heroBackground from '../../assets/images/doctor1.jpg';

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

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
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
        
        // Easing function for smooth animation
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
      number: 10000,
      suffix: '+',
      label: 'Patients Treated',
      description: 'Trusted by thousands nationwide',
      color: '#00359E'
    },
    {
      icon: TrendingUp,
      number: 94,
      suffix: '%',
      label: 'Success Rate',
      description: 'Clinical effectiveness proven',
      color: '#003B9D'
    },
    {
      icon: Heart,
      number: 96,
      suffix: '%',
      label: 'Patient Satisfaction',
      description: 'Highest rated treatment program',
      color: '#003B9D'
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        delay: 0.3
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
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${alpha('#00359E', 0.02)} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${alpha('#003B9D', 0.02)} 0%, transparent 50%)`,
          opacity: 0.6
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {/* Section Header */}
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
                Trusted Results
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
                Join thousands who have transformed their health with our proven GLP-1 therapy
              </Typography>
            </motion.div>
          </Box>

          {/* Counter Cards Grid - 3 cards */}
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
                        '&::before': {
                          transform: 'scaleX(1)'
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: `linear-gradient(90deg, ${card.color} 0%, ${alpha(card.color, 0.7)} 100%)`,
                        transform: 'scaleX(0)',
                        transition: 'transform 0.3s ease',
                        borderRadius: '16px 16px 0 0'
                      }
                    }}
                  >
                    {/* Animated Icon */}
                    <motion.div
                      variants={iconVariants}
                      style={{ marginBottom: '1rem' }}
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
                          margin: '0 auto'
                        }}
                      >
                        <card.icon 
                          size={28} 
                          color={card.color}
                        />
                      </Box>
                    </motion.div>

                    {/* Animated Counter */}
                    <Box mb={0.5}>
                      <AnimatedCounter 
                        end={card.number} 
                        suffix={card.suffix}
                        duration={2}
                      />
                    </Box>

                    {/* Label */}
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

                    {/* Description */}
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

          {/* Bottom decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ marginTop: '3rem' }}
          >
            <Box
              sx={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, #00359E 50%, transparent 100%)',
                maxWidth: '200px',
                margin: '0 auto'
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

const GLP1MedicineInfo = () => {
  const features = [
    {
      icon: Target,
      title: 'GLP-1 Receptor Activation',
      description: 'Specifically targets GLP-1 receptors to enhance insulin secretion and suppress glucagon release for optimal blood sugar control.',
      color: '#00359E'
    },
    {
      icon: Brain,
      title: 'Central Appetite Regulation',
      description: 'Acts on brain receptors to reduce hunger signals and increase satiety, leading to natural calorie reduction and sustainable weight loss.',
      color: '#003B9D'
    },
    {
      icon: Droplets,
      title: 'Metabolic Enhancement',
      description: 'Improves insulin sensitivity and promotes glucose utilization while slowing gastric emptying for better metabolic control.',
      color: '#00359E'
    },
    {
      icon: Zap,
      title: 'Rapid Clinical Results',
      description: 'Patients typically experience significant weight loss and improved glycemic control within the first 4-8 weeks of treatment.',
      color: '#00359E'
    }
  ];

  const benefits = [
    '15-20% average weight reduction',
    'HbA1c reduction of 1.0-1.5%',
    'Cardiovascular risk reduction',
    'Once-weekly administration',
    'FDA-approved for chronic weight management',
    'Sustained long-term results'
  ];

  const mechanismItems = [
    {
      title: 'Insulin Secretion',
      description: 'Glucose-dependent insulin release',
      value: 'Enhanced'
    },
    {
      title: 'Glucagon Suppression',
      description: 'Reduces inappropriate glucagon secretion',
      value: 'Suppressed'
    },
    {
      title: 'Gastric Emptying',
      description: 'Slows digestion and nutrient absorption',
      value: 'Delayed'
    },
    {
      title: 'Appetite Control',
      description: 'Reduces hunger and food intake',
      value: 'Improved'
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
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha('#00359E', 0.05)} 0%, transparent 70%)`,
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-15px) scale(1.1)' }
          }
        }}
      />

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
          {/* Section Header */}
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
                GLP-1 Receptor Agonist Therapy
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#747578',
                  fontWeight: 400,
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6
                }}
              >
                Advanced incretin-based therapy that mimics natural GLP-1 hormones to provide comprehensive 
                metabolic benefits and sustainable weight management through multiple physiological pathways
              </Typography>
            </motion.div>
          </Box>

          {/* Mechanism of Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem' }}
          >
            <Card
              sx={{
                p: { xs: 4, md: 6 },
                background: `linear-gradient(135deg, ${alpha('#00359E', 0.03)} 0%, ${alpha('#003B9D', 0.02)} 100%)`,
                border: `1px solid ${alpha('#00359E', 0.1)}`,
                borderRadius: '20px',
                textAlign: 'center',
                mb: 6
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: '#00359E',
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                Mechanism of Action
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {mechanismItems.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          background: 'rgba(255, 255, 255, 0.9)',
                          border: `1px solid ${alpha('#00359E', 0.1)}`,
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(0, 53, 158, 0.08)',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 32px rgba(0, 53, 158, 0.12)',
                          }
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            mb: 2,
                            fontSize: { xs: '1.5rem', md: '1.75rem' }
                          }}
                        >
                          {item.value}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#00359E',
                            fontWeight: 600,
                            mb: 1,
                            fontSize: { xs: '1rem', md: '1.1rem' }
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#747578',
                            lineHeight: 1.4,
                            fontSize: '0.85rem'
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </motion.div>

          {/* Features Grid */}
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
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 16px 48px rgba(0, 53, 158, 0.12)',
                        '& .feature-icon': {
                          transform: 'scale(1.1) rotate(5deg)'
                        }
                      }
                    }}
                  >
                    {/* Animated Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        delay: index * 0.1
                      }}
                      viewport={{ once: true }}
                    >
                      <Box
                        className="feature-icon"
                        sx={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, ${alpha(feature.color, 0.1)} 0%, ${alpha(feature.color, 0.05)} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: `2px solid ${alpha(feature.color, 0.2)}`,
                          marginBottom: 3,
                          transition: 'transform 0.3s ease'
                        }}
                      >
                        <feature.icon size={32} color={feature.color} />
                      </Box>
                    </motion.div>

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

          {/* Clinical Benefits Section */}
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
                Clinical Benefits & Outcomes
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
                        icon={<Check size={16} color="#00359E" />}
                        label={benefit}
                        sx={{
                          background: `linear-gradient(135deg, ${alpha('#00359E', 0.1)} 0%, ${alpha('#003B9D', 0.05)} 100%)`,
                          color: '#000000',
                          fontWeight: 600,
                          py: 2,
                          px: 1,
                          border: `1px solid ${alpha('#00359E', 0.2)}`,
                          '& .MuiChip-icon': {
                            color: '#00359E !important'
                          }
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              {/* Clinical Evidence */}
              <Box
                sx={{
                  p: 3,
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '12px',
                  border: `1px solid ${alpha('#00359E', 0.1)}`,
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: '#747578',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    textAlign: 'center'
                  }}
                >
                  "In clinical trials, GLP-1 receptor agonists demonstrated significant weight reduction 
                  of 15-20% and HbA1c improvements of 1.0-1.5%, establishing a new standard in 
                  metabolic disease management."
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00359E',
                    fontWeight: 600,
                    mt: 2,
                    textAlign: 'center'
                  }}
                >
                  - Based on SURPASS Clinical Trial Data
                </Typography>
              </Box>
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
      label: 'Online Assessment',
      description: 'Complete our secure health questionnaire in just 5 minutes',
      icon: ClipboardList,
      color: '#00359E',
      details: 'Answer questions about your health history, goals, and lifestyle. Our platform is HIPAA-compliant and completely confidential.'
    },
    {
      label: 'Doctor Review',
      description: 'Board-certified physician evaluation within 24 hours',
      icon: UserCheck,
      color: '#003B9D',
      details: 'A licensed healthcare professional reviews your assessment and determines if GLP-1 therapy is right for you.'
    },
    {
      label: 'Personalized Plan',
      description: 'Custom treatment delivered to your door',
      icon: Package,
      color: '#00359E',
      details: 'Receive your personalized treatment plan with medication, dosage instructions, and ongoing support resources.'
    },
    {
      label: 'Ongoing Care',
      description: 'Continuous support and progress monitoring',
      icon: Heart,
      color: '#00359E',
      details: 'Regular check-ins with your care team, dosage adjustments as needed, and unlimited messaging with healthcare providers.'
    }
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
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha('#00359E', 0.03)} 0%, transparent 70%)`,
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' }
          }
        }}
      />

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
          {/* Section Header */}
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
                Simple 4-Step Process
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
                From assessment to treatment, we make getting the care you need straightforward and accessible
              </Typography>
            </motion.div>
          </Box>

          {/* Process Timeline */}
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
                        border: `1px solid ${alpha(step.color, 0.2)}`
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
                      {/* Step Number and Icon */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <motion.div
                          variants={{
                            hidden: { scale: 0, rotate: -180 },
                            visible: {
                              scale: 1,
                              rotate: 0,
                              transition: {
                                type: "spring",
                                stiffness: 100,
                                delay: 0.2
                              }
                            }
                          }}
                        >
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
                        </motion.div>

                        {/* Vertical line for desktop */}
                        {index < steps.length - 1 && (
                          <Box
                            sx={{
                              display: { xs: 'none', md: 'block' },
                              width: '2px',
                              height: '60px',
                              background: `linear-gradient(180deg, ${alpha(step.color, 0.3)} 0%, transparent 100%)`,
                              position: 'absolute',
                              left: '95px',
                              top: '70px',
                              zIndex: 1
                            }}
                          />
                        )}
                      </Box>

                      {/* Content */}
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

                        {/* Progress indicator for mobile */}
                        {index < steps.length - 1 && (
                          <Box
                            sx={{
                              display: { xs: 'flex', md: 'none' },
                              alignItems: 'center',
                              gap: 1,
                              mt: 3,
                              color: step.color
                            }}
                          >
                            <ArrowRight size={16} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              Next: {steps[index + 1].label}
                            </Typography>
                          </Box>
                        )}
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
      name: 'Sarah M.',
      location: 'New York, NY',
      rating: 5,
      content: 'I lost 45 pounds in 4 months with GLP-1 therapy. The program was easy to follow and the medical team was incredibly supportive throughout my journey.',
      weightLoss: '45 lbs',
      duration: '4 months',
      avatarColor: '#747578'
    },
    {
      id: 2,
      name: 'James R.',
      location: 'Chicago, IL',
      rating: 5,
      content: 'After struggling with weight my entire life, GLP-1 therapy finally helped me achieve lasting results. The convenience of telehealth made all the difference.',
      weightLoss: '52 lbs',
      duration: '5 months',
      avatarColor: '#8B8D8E'
    },
    {
      id: 3,
      name: 'Jennifer K.',
      location: 'Austin, TX',
      rating: 5,
      content: 'Not only did I lose weight, but my blood sugar levels normalized for the first time in years. This treatment changed my life completely.',
      weightLoss: '38 lbs',
      duration: '3 months',
      avatarColor: '#747578'
    },
    {
      id: 4,
      name: 'Michael T.',
      location: 'Seattle, WA',
      rating: 5,
      content: 'The medical supervision gave me confidence, and the results exceeded my expectations. I feel like I have my life back.',
      weightLoss: '61 lbs',
      duration: '6 months',
      avatarColor: '#8B8D8E'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${alpha('#747578', 0.02)} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${alpha('#8B8D8E', 0.02)} 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
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
              Real Patient Stories
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
              Discover how our patients transformed their health and regained confidence
            </Typography>
          </Box>

          {/* Carousel Container */}
          <Box sx={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {/* Navigation Arrows */}
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
                '&:hover': {
                  background: '#FAFAFA',
                  border: `1px solid #D1D5DB`,
                  transform: 'translateY(-50%) scale(1.05)'
                },
                transition: 'all 0.2s ease',
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
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
                '&:hover': {
                  background: '#FAFAFA',
                  border: `1px solid #D1D5DB`,
                  transform: 'translateY(-50%) scale(1.05)'
                },
                transition: 'all 0.2s ease',
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                display: { xs: 'none', sm: 'flex' }
              }}
            >
              <ChevronRight size={24} color="#747578" />
            </IconButton>

            {/* Testimonial Cards */}
            <Box sx={{ position: 'relative', height: { xs: 'auto', md: 320 }, minHeight: 320 }}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 400, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 }
                  }}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                  }}
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
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${testimonials[currentIndex].avatarColor}33, ${testimonials[currentIndex].avatarColor})`,
                      }
                    }}
                  >
                    {/* Main Content */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' }, 
                      gap: { xs: 3, md: 4 }, 
                      alignItems: 'center',
                      textAlign: { xs: 'center', md: 'left' }
                    }}>
                      
                      {/* Avatar Section */}
                      <Box sx={{ 
                        textAlign: 'center', 
                        flexShrink: 0,
                        width: { xs: '100%', md: 'auto' }
                      }}>
                        <Avatar
                          sx={{
                            width: { xs: 80, md: 100 },
                            height: { xs: 80, md: 100 },
                            bgcolor: testimonials[currentIndex].avatarColor,
                            margin: '0 auto 1.5rem',
                            fontSize: { xs: '1.75rem', md: '2rem' },
                            fontWeight: 600,
                            boxShadow: `0 8px 20px ${alpha(testimonials[currentIndex].avatarColor, 0.3)}`
                          }}
                        >
                          {testimonials[currentIndex].name.charAt(0)}
                        </Avatar>
                        
                        {/* Rating - Mobile only */}
                        <Box sx={{ 
                          display: { xs: 'flex', md: 'none' }, 
                          justifyContent: 'center', 
                          mb: 2 
                        }}>
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              fill="#FBBF24" 
                              color="#FBBF24" 
                              style={{ margin: '0 2px' }}
                            />
                          ))}
                        </Box>

                        {/* Stats */}
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: 1,
                          alignItems: { xs: 'center', md: 'stretch' }
                        }}>
                          <Chip
                            label={`Lost ${testimonials[currentIndex].weightLoss}`}
                            sx={{
                              background: `linear-gradient(135deg, ${alpha(testimonials[currentIndex].avatarColor, 0.1)} 0%, ${alpha(testimonials[currentIndex].avatarColor, 0.05)} 100%)`,
                              color: testimonials[currentIndex].avatarColor,
                              fontWeight: 600,
                              border: `1px solid ${alpha(testimonials[currentIndex].avatarColor, 0.2)}`,
                              fontSize: { xs: '0.75rem', md: '0.8rem' }
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
                              fontSize: { xs: '0.75rem', md: '0.8rem' }
                            }}
                            size="small"
                          />
                        </Box>
                      </Box>

                      {/* Text Content */}
                      <Box sx={{ 
                        flex: 1, 
                        width: { xs: '100%', md: 'auto' }
                      }}>
                        {/* Quote Icon - Desktop only */}
                        <Box sx={{ 
                          mb: 3, 
                          display: { xs: 'none', md: 'block' } 
                        }}>
                          <Quote 
                            size={32} 
                            color={testimonials[currentIndex].avatarColor}
                            style={{ opacity: 0.8 }}
                          />
                        </Box>

                        {/* Rating - Desktop only */}
                        <Box sx={{ 
                          display: { xs: 'none', md: 'flex' }, 
                          justifyContent: { xs: 'center', md: 'flex-start' }, 
                          mb: 2 
                        }}>
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              fill="#FBBF24" 
                              color="#FBBF24" 
                              style={{ margin: '0 2px' }}
                            />
                          ))}
                        </Box>

                        {/* Testimonial Content */}
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

                        {/* Patient Info */}
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
                            {testimonials[currentIndex].name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#8B8D8E',
                              fontWeight: 500,
                              fontSize: { xs: '0.85rem', md: '0.9rem' }
                            }}
                          >
                            {testimonials[currentIndex].location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </Box>

            {/* Navigation Dots */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 1.5, 
              mt: 4 
            }}>
              {testimonials.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  sx={{
                    width: index === currentIndex ? 28 : 12,
                    height: 12,
                    borderRadius: '6px',
                    background: index === currentIndex ? testimonials[index].avatarColor : '#E5E7EB',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: index === currentIndex ? testimonials[index].avatarColor : '#D1D5DB'
                    }
                  }}
                />
              ))}
            </Box>

            {/* Mobile Navigation Buttons */}
            <Box sx={{ 
              display: { xs: 'flex', sm: 'none' }, 
              justifyContent: 'center', 
              gap: 2, 
              mt: 3 
            }}>
              <IconButton
                onClick={prevTestimonial}
                sx={{
                  background: '#FFFFFF',
                  border: `1px solid #E5E7EB`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    background: '#FAFAFA',
                    border: `1px solid #D1D5DB`
                  },
                  transition: 'all 0.2s ease',
                  width: 44,
                  height: 44
                }}
              >
                <ChevronLeft size={20} color="#747578" />
              </IconButton>
              <IconButton
                onClick={nextTestimonial}
                sx={{
                  background: '#FFFFFF',
                  border: `1px solid #E5E7EB`,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    background: '#FAFAFA',
                    border: `1px solid #D1D5DB`
                  },
                  transition: 'all 0.2s ease',
                  width: 44,
                  height: 44
                }}
              >
                <ChevronRight size={20} color="#747578" />
              </IconButton>
            </Box>

            {/* Progress Indicator */}
            <Box sx={{ 
              textAlign: 'center', 
              mt: 2 
            }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#8B8D8E',
                  fontWeight: 500,
                  fontSize: '0.85rem'
                }}
              >
                {currentIndex + 1} / {testimonials.length}
              </Typography>
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
                  Start Your Treatment Today
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
                  Take the first step toward better health with our proven GLP-1 therapy treatment.
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
                    { icon: Clock, text: '5 Min Assessment' },
                    { icon: Star, text: '4.9/5 Rating' },
                    { icon: Users, text: '10,000+ Patients' }
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

const GLP1 = () => {
  return (
    <Box>
      {/* Hero Banner Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${alpha('#00359E', 0.85)} 0%, ${alpha('#003B9D', 0.75)} 100%), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha('#FFFFFF', 0.1)} 0%, transparent 70%)`,
            animation: 'pulse 6s ease-in-out infinite alternate',
          }}
        />
        
        <Container maxWidth="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <Stack spacing={4}>
              {/* Main Headline */}
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
                  Transform Your Health with
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
                    GLP-1 Therapy
                  </Box>
                </Typography>
              </motion.div>

              {/* Subheadline */}
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
                  Advanced medical weight loss treatment with proven results. 
                  Get personalized care from licensed healthcare professionals.
                </Typography>
              </motion.div>

              {/* Trust Badges */}
              <motion.div variants={fadeInUp}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Shield size={20} color="#FFFFFF" />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      FDA-Approved Treatment
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Star size={20} color="#FFFFFF" />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      4.9/5 Patient Satisfaction
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Clock size={20} color="#FFFFFF" />
                    <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 500 }}>
                      Results in 4-8 Weeks
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>

              {/* CTA Button */}
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
                    onClick={() => {
                      console.log('Start Consultation clicked');
                    }}
                  >
                    Start Consultation
                  </Button>
                </motion.div>
              </motion.div>

              {/* Additional Info */}
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
                  ✓ Free initial assessment • ✓ Insurance verification • ✓ No commitment required
                </Typography>
              </motion.div>
            </Stack>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <Box
            sx={{
              width: '30px',
              height: '50px',
              border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{
                width: '4px',
                height: '12px',
                backgroundColor: '#FFFFFF',
                borderRadius: '2px',
                position: 'absolute',
                top: '10px'
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Counter Cards Section */}
      <CounterCards />

      {/* GLP-1 Medicine Information Section */}
      <GLP1MedicineInfo />

      {/* Process Timeline Section */}
      <ProcessTimeline />

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />

      {/* Final CTA Banner */}
      <FinalCTABanner />
    </Box>
  );
};

export default GLP1;