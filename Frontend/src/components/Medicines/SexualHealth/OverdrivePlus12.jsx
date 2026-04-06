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

// Updated Lucide icons for ED/telehealth focus
import {
  CheckCircle,
  Package,
  ArrowRight,
  Heart,
  Shield,
  Users,
  Truck,
  Stethoscope,
  UserCheck,
  Zap
} from "lucide-react";

// Images
import heroImage from "../../../assets/Medicines/menintimacy.png";
import productImage from "../../../assets/Medicines/menintimacy.png";

const OverdrivePlus12Page = () => {
  const rimioUrl = "https://try.thelrx.com/intake/ed-fmmbgk";

  const handleCtaClick = () => {
    window.open(rimioUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* HERO SECTION - UPDATED */}
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
                  label="COMPOUNDED ED MEDICATION - 12 TABLETS"
                  icon={<Package size={16} />}
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
                  Overdrive Plus – 12 Tablets
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
                  Overdrive Plus unites elevated circulation support, desire-enhancing neuroactivation, and antioxidant-fortified blood-flow synergy to create a more responsive, energized, and deeply connected intimate experience.
                  <Box component="span" sx={{ display: 'block', mt: 1, fontWeight: 600, color: "#00359E" }}>
                    (Tadalafil / Bremelanotide / Pycnogenol)
                  </Box>
                </Typography>

                {/* UPDATED FEATURES */}
                <Box sx={{ mb: 5 }}>
                  {[
                    "Designed to help men overcome erectile challenges and restore confidence",
                    "Consultation with a licensed provider",
                    "Personalized treatment plans tailored to your unique needs",
                    "Medications delivered privately and discreetly to your door",
                    "Convenient telehealth platform for easy and ongoing access to care"
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

                {/* UPDATED PRICING */}
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
                    <Typography
                      sx={{
                        color: "#8B8D8E",
                        fontSize: "1rem"
                      }}
                    >
                      12-tablet treatment pack
                    </Typography>
                  </Box>
                  <Chip
                    label="COMPOUNDED"
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
                    Start Your Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </Box>

            {/* RIGHT IMAGE SECTION - UPDATED */}
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
                    alt="Overdrive Plus 12 Tablets"
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
                    <Heart size={12} />
                    ED MEDICATION
                  </Box>

                  {/* UPDATED PRICE BADGE */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      bgcolor: "#00359E",
                      color: "#FFFFFF",
                      px: 2.5,
                      py: 1.5,
                      borderRadius: "12px",
                      fontSize: "1.5rem",
                      fontWeight: 900,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, opacity: 0.9 }}>
                      12 Tablets
                    </Typography>
                    <Typography sx={{ fontSize: "1.5rem", lineHeight: 1 }}>
                      Starting at $39.00
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* TELEHEALTH PROCESS SECTION - REPLACED SCIENTIFIC SECTION */}
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
            ED Treatment in 3 Easy Steps
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
                  LiquidRX makes it simple to access expert care. Our telehealth platform ensures privacy and convenience, allowing you to take charge of your health with confidence. From consultation to treatment, we're here to support you every step of the way.
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
                    Simple. Convenient. Effective.
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
                          "Fill out the medical form online",
                          "Attend your telehealth consultation with a licensed provider",
                          "Start your personalized ED treatment plan"
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
                          "Receive medications discreetly at your door",
                          "Get ongoing support from experienced providers",
                          "Enjoy customized solutions for optimal results"
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

                  {/* Service Details */}
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
                      💊 Treatment Program:
                    </Typography>
                    <Typography sx={{
                      color: "#747578",
                      fontSize: "0.9rem",
                      lineHeight: 1.6
                    }}>
complete ED treatment program • Consultation included • Medications delivered • Ongoing provider support
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Column - Steps Card */}
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
                    Complete Treatment Plan
                  </Typography>
                  <Typography
                    sx={{
                      color: "#8B8D8E",
                      fontSize: "0.95rem"
                    }}
                  >
                    Everything you need for confidence restored
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
                      label: "Telehealth Consultation",
                      value: "Included",
                      color: "#00359E",
                      description: "With licensed provider",
                      icon: "👨‍⚕️"
                    },
                    {
                      label: "Personalized Plan",
                      value: "Custom",
                      color: "#003B9D",
                      description: "Tailored to your needs",
                      icon: "📋"
                    },
                    {
                      label: "Medication Delivery",
                      value: "Discreet",
                      color: "#00359E",
                      description: "To your door",
                      icon: "📦"
                    },
                    {
                      label: "Ongoing Support",
                      value: "24/7",
                      color: "#003B9D",
                      description: "Provider access",
                      icon: "🔄"
                    },
                    {
                      label: "Wellness Profile",
                      value: "Optimized",
                      color: "#00359E",
                      description: "Performance focused",
                      icon: "💪"
                    },
                    {
                      label: "Shipping",
                      value: "All 50 States",
                      color: "#003B9D",
                      description: "Nationwide delivery",
                      icon: "🇺🇸"
                    }
                  ].map((stat, index) => (
                    <Box key={index} sx={{ mb: 2, p: 2, borderRadius: "8px", bgcolor: alpha(stat.color, 0.05) }}>
                      <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 0.5
                      }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Typography sx={{ fontSize: "1.2rem" }}>
                            {stat.icon}
                          </Typography>
                          <Typography sx={{
                            color: "#000000",
                            fontWeight: 600,
                            fontSize: "1rem"
                          }}>
                            {stat.label}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            color: stat.color,
                            fontWeight: 900,
                            fontSize: "1.1rem"
                          }}
                        >
                          {stat.value}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "#8B8D8E",
                          fontSize: "0.85rem",
                          pl: 3
                        }}
                      >
                        {stat.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Service Conclusion */}
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
                    Empowering Men's Health and Wellness
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* Additional Service Info */}
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
              🚚 We Proudly Ship to All 50 States
            </Typography>
            <Typography sx={{
              color: "#747578",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              Order your medications anytime — 24/7/365. Private, discreet packaging with nationwide delivery.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* SERVICE BENEFITS SECTION - REPLACED PRODUCT SHOWCASE */}
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
                Personalized{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  ED Treatment Plans
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
                Liquid Rx provides customized solutions to help you achieve better performance and satisfaction.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={6} alignItems="center">
            {/* Service Image */}
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
                    "&:hover": {
                      transform: "translateY(-5px)",
                      transition: "transform 0.3s ease"
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={productImage}
                    alt="Men's Health Telemedicine Service"
                    sx={{
                      width: "100%",
                      height: { xs: "400px", md: "500px" },
                      objectFit: "cover",
                      display: "block"
                    }}
                  />

                  {/* UPDATED Floating Badges */}
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
                    12-TABLET PACK
                  </Box>

                  {/* UPDATED Info Badge */}
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
                      Best Value
                    </Typography>
                    <Typography sx={{ fontSize: "1.1rem", lineHeight: 1 }}>
                      12 Tablets
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Service Details */}
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
                    Direct Access to Your Health Provider
                  </Typography>
                  <Typography
                    sx={{
                      color: "#747578",
                      lineHeight: 1.7,
                      fontSize: "1.1rem",
                      mb: 3
                    }}
                  >
                    With Liquid Rx, you'll have ongoing support from experienced providers through virtual consultations. We'll be with you every step of the way, ensuring your treatment plan delivers the results you're looking for.
                  </Typography>
                </Box>

                {/* UPDATED Key Features */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                  {[
                    {
                      icon: <UserCheck size={24} color="#00359E" />,
                      title: "Licensed Providers",
                      description: "Experienced medical professionals",
                      color: "#00359E"
                    },
                    {
                      icon: <Shield size={24} color="#003B9D" />,
                      title: "Private & Discreet",
                      description: "Confidential treatment",
                      color: "#003B9D"
                    },
                    {
                      icon: <Stethoscope size={24} color="#00359E" />,
                      title: "Customized Plans",
                      description: "Tailored to your needs",
                      color: "#00359E"
                    },
                    {
                      icon: <Truck size={24} color="#003B9D" />,
                      title: "Doorstep Delivery",
                      description: "Nationwide shipping",
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

                {/* UPDATED Service Benefits */}
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
                    Optimized Performance Stack
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {[
                      "Stacks best with NAD+ Injectable for amplified stamina",
                      "Combines with CJC-1295/Ipamorelin for optimized profile",
                      "Pairs with PT-141 for heightened sensitivity",
                      "Creates fully optimized performance and wellness profile",
                      "Provides elevated circulation with desire-enhancing neuroactivation"
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

      {/* HOW IT WORKS SECTION - UPDATED */}
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
                Confidence{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Restored
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
                Join the growing number of men who trust Liquid Rx to deliver discreet, reliable care that truly works.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                step: "01",
                title: "Complete Medical Form",
                description: "Simple online assessment",
                icon: "📋",
                color: "#00359E"
              },
              {
                step: "02",
                title: "Virtual Consultation",
                description: "With licensed provider",
                icon: "👨‍⚕️",
                color: "#003B9D"
              },
              {
                step: "03",
                title: "Personalized Treatment",
                description: "Customized plan for you",
                icon: "💊",
                color: "#00359E"
              },
              {
                step: "04",
                title: "Discreet Delivery",
                description: "Medications to your door",
                icon: "📦",
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

      {/* FINAL CTA SECTION - UPDATED */}
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
                Life{" "}
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
                  Reimagined
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
                Our ED treatments provide discreet, effective solutions to help men overcome challenges and restore confidence. Designed to improve performance and support overall wellness.
              </Typography>

              {/* UPDATED Pricing Display */}
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
                <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Overdrive Plus 12 Tablets • Telehealth Included • 24/7 Support
                </Typography>
              </Box>

              {/* UPDATED Single Start Now Button */}
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
                    Start Treatment Now
                  </Button>
                </motion.div>
              </Box>

              {/* UPDATED Trust Badges */}
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, md: 4 },
                flexWrap: "wrap",
                mb: 4
              }}>
                {[
                  { icon: <Shield size={20} />, text: "Licensed Providers" },
                  { icon: <Truck size={20} />, text: "50 States Delivery" },
                  { icon: <UserCheck size={20} />, text: "Personalized Plans" },
                  { icon: <Heart size={20} />, text: "Men's Health Focus" },
                  { icon: <Zap size={20} />, text: "Advanced Formula" },
                  { icon: <Package size={20} />, text: "Discreet Packaging" }
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

              {/* UPDATED Additional Info */}
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
                12-tablet pack • Compounded medication (Tadalafil /Bremelanotide /Pycnogenol) • Telehealth consultation required •
                 per month treatment program • Ships to all 50 states • 24/7/365 ordering
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

export default OverdrivePlus12Page;