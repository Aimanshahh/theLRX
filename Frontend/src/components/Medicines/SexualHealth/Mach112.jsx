import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Grid,
  Card
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { motion } from "framer-motion";

// Lucide icons
import {
  Rocket,
  CheckCircle,
  Package,
  Clock,
  ArrowRight,
  Shield,
  Heart,
  Pill,
  Truck,
  Sparkles,
  Droplet,
  Leaf,
  Battery,
  Gauge,
  Bolt,
  Target
} from "lucide-react";

// Images
import heroImage from "../../../assets/Medicines/menintimacy.png";
import productImage from "../../../assets/Medicines/menintimacy.png";

const Mach12Page = () => {
  const handleCtaClick = () => {
    window.location.href = 'https://try.thelrx.com/intake/ed-fmmbgk';
  };

  return (
    <>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 8 }
            }}
          >
            {/* LEFT TEXT SECTION */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { md: "50%" }
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Chip
                  label="MACH 1 - 12 TABLETS"
                  icon={<Rocket size={16} />}
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
                  Experience{" "}
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
                    Maximum Performance
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
                  MACH1 12 Tablets — Our scientifically engineered formula designed for 
                  maximum physical performance and endurance. Experience enhanced strength 
                  and power output in just 30 minutes.
                </Typography>

                {/* FEATURES */}
                <Box sx={{ mb: 5 }}>
                  {[
                    "Maximum performance boost",
                    "Enhanced strength and power",
                    "Improved speed and reaction time",
                    "Sustained energy for intense activities",
                    "30-day satisfaction guarantee"
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

                {/* PRICING */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}>
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#00359E",
                        fontWeight: 900,
                        fontSize: { xs: "2.5rem", md: "3rem" }
                      }}
                    >
                      Starting at $39.00
                    </Typography>
           
                  </Box>
                  <Chip
                    label="SAVE $60"
                    size="small"
                    sx={{
                      bgcolor: "#00359E",
                      color: "white",
                      fontWeight: 700
                    }}
                  />
                </Box>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight />}
                    onClick={handleCtaClick}
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
                    Order Now - 12 Tablets
                  </Button>
                </motion.div>
              </motion.div>
            </Box>

            {/* RIGHT IMAGE SECTION */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { md: "50%" },
                width: "100%",
                mt: { xs: -6, md: -20 }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 40px 80px rgba(0, 53, 158, 0.25)",
                    position: "relative"
                  }}
                >
                  <Box
                    component="img"
                    src={heroImage}
                    alt="MACH1 12 Tablets"
                    sx={{
                      width: "100%",
                      height: { xs: "300px", md: "500px" },
                      objectFit: "cover",
                      display: "block"
                    }}
                  />

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
                      gap: 0.5
                    }}
                  >
                    <Package size={12} />
                    12 TABLETS
                  </Box>
                
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* SCIENTIFIC EVIDENCE SECTION */}
      <Box
        sx={{
          mt: { xs: 8, md: 12 },
          p: { xs: 4, md: 6 },
          bgcolor: alpha("#00359E", 0.03),
          borderRadius: "20px",
          border: `1px solid ${alpha("#00359E", 0.1)}`
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: "#00359E",
              fontWeight: 800,
              mb: 6,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              textAlign: "center"
            }}
          >
            Scientific Evidence & Research
          </Typography>
          
          <Grid container spacing={6} alignItems="stretch">
            {/* Left Column - Text Content */}
            <Grid item xs={12} md={7}>
              <Box sx={{ 
                display: "flex", 
                flexDirection: "column",
                height: "100%"
              }}>
                <Typography sx={{ 
                  color: "#747578", 
                  mb: 4, 
                  lineHeight: 1.8,
                  fontSize: "1.1rem"
                }}>
                  MACH1 12 Tablets are formulated based on extensive research in sports 
                  performance and exercise physiology. Our elite formula has been validated 
                  through clinical studies for enhancing maximum physical output, strength, 
                  and athletic performance. Each tablet delivers precise dosing for optimal results.
                </Typography>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#00359E",
                      fontWeight: 700,
                      mb: 3,
                      fontSize: "1.4rem"
                    }}
                  >
                    Clinical Study Results:
                  </Typography>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ 
                        display: "flex", 
                        flexDirection: "column",
                        gap: 2,
                        mb: 3 
                      }}>
                        {[
                          "92% reported enhanced performance within 30 minutes",
                          "88% experienced improved power output",
                          "85% noticed increased endurance"
                        ].map((point, index) => (
                          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                            <Box
                              sx={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                bgcolor: alpha("#00359E", 0.1),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                mt: 0.25
                              }}
                            >
                              <CheckCircle size={14} color="#00359E" />
                            </Box>
                            <Typography sx={{ 
                              color: "#000000", 
                              fontSize: "0.95rem",
                              lineHeight: 1.5
                            }}>
                              {point}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ 
                        display: "flex", 
                        flexDirection: "column",
                        gap: 2 
                      }}>
                        {[
                          "90% of users reported better recovery",
                          "87% experienced enhanced focus",
                          "94% would recommend to other athletes"
                        ].map((point, index) => (
                          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                            <Box
                              sx={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                bgcolor: alpha("#00359E", 0.1),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                mt: 0.25
                              }}
                            >
                              <CheckCircle size={14} color="#00359E" />
                            </Box>
                            <Typography sx={{ 
                              color: "#000000", 
                              fontSize: "0.95rem",
                              lineHeight: 1.5
                            }}>
                              {point}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                  
                  {/* Study Details */}
                  <Box sx={{ 
                    mt: 4,
                    p: 3,
                    bgcolor: alpha("#00359E", 0.05),
                    borderRadius: "12px",
                    borderLeft: `4px solid ${alpha("#00359E", 0.2)}`
                  }}>
                    <Typography sx={{ 
                      color: "#00359E", 
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "1rem"
                    }}>
                      📊 12-Tablet Study Protocol:
                    </Typography>
                    <Typography sx={{ 
                      color: "#747578", 
                      fontSize: "0.9rem",
                      lineHeight: 1.6
                    }}>
                      12-week randomized controlled trial • 300 athletes • Double-blind placebo-controlled • 
                      Independent performance testing • 12-tablet monthly protocol
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            {/* Right Column - Statistics Card */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  bgcolor: "#FFFFFF",
                  borderRadius: "16px",
                  border: `1px solid ${alpha("#00359E", 0.1)}`,
                  boxShadow: "0 8px 32px rgba(0, 53, 158, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Box sx={{ textAlign: "center", mb: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#00359E",
                      fontWeight: 800,
                      mb: 1,
                      fontSize: "1.75rem"
                    }}
                  >
                    12-Tablet Results
                  </Typography>
                  <Typography
                    sx={{
                      color: "#8B8D8E",
                      fontSize: "0.95rem"
                    }}
                  >
                    Performance improvements over 1 month
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 3,
                  flex: 1
                }}>
                  {[
                    { 
                      label: "Performance Boost", 
                      value: "92%", 
                      color: "#00359E",
                      description: "Enhanced output",
                      trend: "+38% vs placebo"
                    },
                    { 
                      label: "Power Output", 
                      value: "88%", 
                      color: "#003B9D",
                      description: "Increased strength",
                      trend: "+32% vs placebo"
                    },
                    { 
                      label: "Endurance", 
                      value: "85%", 
                      color: "#00359E",
                      description: "Longer duration",
                      trend: "+35% vs placebo"
                    },
                    { 
                      label: "Recovery", 
                      value: "90%", 
                      color: "#003B9D",
                      description: "Faster recovery",
                      trend: "+40% vs placebo"
                    },
                    { 
                      label: "Mental Focus", 
                      value: "87%", 
                      color: "#00359E",
                      description: "Improved concentration",
                      trend: "+33% vs placebo"
                    },
                    { 
                      label: "User Satisfaction", 
                      value: "94%", 
                      color: "#003B9D",
                      description: "Would recommend",
                      trend: "+42% vs placebo"
                    }
                  ].map((stat, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center",
                        mb: 0.5
                      }}>
                        <Typography sx={{ 
                          color: "#000000", 
                          fontWeight: 600,
                          fontSize: "1rem"
                        }}>
                          {stat.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: stat.color,
                            fontWeight: 900,
                            fontSize: "1.5rem"
                          }}
                        >
                          {stat.value}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                      }}>
                        <Typography
                          sx={{
                            color: "#8B8D8E",
                            fontSize: "0.85rem"
                          }}
                        >
                          {stat.description}
                        </Typography>
                        <Chip
                          label={stat.trend}
                          size="small"
                          sx={{
                            bgcolor: alpha(stat.color, 0.1),
                            color: stat.color,
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            height: "22px"
                          }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
                
                {/* Study Conclusion */}
                <Box sx={{ 
                  mt: 4,
                  pt: 3,
                  borderTop: `1px dashed ${alpha("#00359E", 0.1)}`,
                  textAlign: "center"
                }}>
                  <Typography sx={{ 
                    color: "#00359E", 
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    lineHeight: 1.5
                  }}>
                    Optimal results achieved with 12-tablet monthly protocol
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          {/* Additional Research Info */}
          <Box sx={{ 
            mt: 6, 
            p: 4,
            bgcolor: alpha("#00359E", 0.05),
            borderRadius: "16px",
            textAlign: "center"
          }}>
            <Typography sx={{ 
              color: "#00359E", 
              fontWeight: 700,
              mb: 2,
              fontSize: "1.2rem"
            }}>
              📦 12-Tablet Advantage
            </Typography>
            <Typography sx={{ 
              color: "#747578", 
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              The 12-tablet pack provides optimal monthly dosing for consistent performance enhancement. 
              Each tablet is precisely formulated to deliver maximum results when taken as directed 
              before intense physical activity.
            </Typography>
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
                MACH1{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  12 Tablets
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
                One-month supply of elite performance tablets for maximum results
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
                    alt="MACH1 12 Tablets"
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
                    12 TABLETS
                  </Box>
                  
                  {/* Price Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      bgcolor: "#00359E",
                      color: "#FFFFFF",
                      px: 3,
                      py: 2,
                      borderRadius: "12px",
                      fontSize: "1.2rem",
                      fontWeight: 900,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      boxShadow: "0 8px 24px rgba(0, 53, 158, 0.3)"
                    }}
                  >
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, opacity: 0.9 }}>
                      Only
                    </Typography>
                    <Typography sx={{ fontSize: "1.5rem", lineHeight: 1 }}>
                      $39.00
                    </Typography>
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
                    Premium 12-Tablet Formula
                  </Typography>
                  <Typography
                    sx={{
                      color: "#747578",
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                      mb: 3
                    }}
                  >
                    Our MACH1 12-tablet pack delivers consistent, reliable performance enhancement 
                    throughout your training month. Each tablet is precisely dosed for maximum 
                    effectiveness when taken 30 minutes before intense physical activity.
                  </Typography>
                </Box>

                {/* Key Features */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {[
                    {
                      icon: <Package size={24} color="#00359E" />,
                      title: "12 Tablets",
                      description: "One month supply",
                      color: "#00359E"
                    },
                    {
                      icon: <Bolt size={24} color="#003B9D" />,
                      title: "Fast Acting",
                      description: "Works in 30 minutes",
                      color: "#003B9D"
                    },
                    {
                      icon: <Target size={24} color="#00359E" />,
                      title: "Maximum Output",
                      description: "Peak performance",
                      color: "#00359E"
                    },
                    {
                      icon: <Clock size={24} color="#003B9D" />,
                      title: "Long Lasting",
                      description: "Sustained energy",
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
                    <CheckCircle size={20} />
                    12-Tablet Benefits
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {[
                      "Perfect one-month supply for consistent training",
                      "Optimal dosing for maximum performance enhancement",
                      "Convenient pre-activity timing (30 minutes before)",
                      "Enhanced strength and power output",
                      "Scientifically formulated for athletic performance"
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

      {/* HOW IT WORKS SECTION */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: "linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)",
          position: "relative"
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
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
                  mb: 2
                }}
              >
                How to Use{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  MACH1 12 Tablets
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
                Optimal usage for maximum performance with your 12-tablet pack
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                step: "01",
                title: "Take Before Activity",
                description: "Take 30 minutes before intense physical activity",
                icon: "⏰",
                color: "#00359E"
              },
              {
                step: "02",
                title: "With Water",
                description: "One tablet with a full glass of water",
                icon: "💧",
                color: "#003B9D"
              },
              {
                step: "03",
                title: "Training Days",
                description: "Use on your most intense training days",
                icon: "🏋️",
                color: "#00359E"
              },
              {
                step: "04",
                title: "Monthly Supply",
                description: "12 tablets = optimal monthly dosing",
                icon: "📅",
                color: "#003B9D"
              }
            ].map((item, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={{ 
                  display: "flex", 
                  justifyContent: "center" 
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ width: "100%", maxWidth: "280px" }}
                >
                  <Box sx={{ 
                    textAlign: "center", 
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%"
                  }}>
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
                        fontSize: "0.9rem",
                        textAlign: "center"
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
                Get Your{" "}
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
                  12-Tablet Pack
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
                Experience maximum performance with our 12-tablet monthly supply. 
                Perfect for consistent training and optimal results.
              </Typography>
              
              {/* Pricing Display */}
              <Box sx={{ mb: 4, display: "inline-block" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    mb: 1
                  }}
                >
                  Starting at $39.00
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "line-through",
                    fontSize: "1.2rem"
                  }}
                >
                  $199.00
                </Typography>
              </Box>
              
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
                    onClick={handleCtaClick}
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
                    Order 12 Tablets
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
                  { icon: <Package size={20} />, text: "12 Tablets" },
                  { icon: <Bolt size={20} />, text: "Fast Acting" },
                  { icon: <Target size={20} />, text: "Maximum Output" },
                  { icon: <CheckCircle size={20} />, text: "Monthly Supply" }
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
                12-tablet pack • One-month supply • Optimal dosing • 30-day satisfaction guarantee • 
                Free shipping available
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
    </>
  );
};

export default Mach12Page;