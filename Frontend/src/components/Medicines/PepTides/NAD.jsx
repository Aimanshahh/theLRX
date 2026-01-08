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
  Brain,
  Zap as Lightning,
  RefreshCw,
  Cloud,
  Droplet,
  Eye,
  Clock,
} from "lucide-react";

// Import your images and videos for NAD+ Nasal Spray
import nadNasalImage from "../../../assets/medicines/NAD1-removebg-preview.png";
import nadScienceVideo from "../../../assets/Videos/peptide.mp4";
import nadNasalProductImage from "../../../assets/medicines/NAD1-removebg-preview.png";

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

const NADNasalSprayPage = () => {
 
     const rimioUrl = "https://try.thelrx.com/intake/gh-0ce9zd";

  const handleCtaClick = () => {
    window.open(rimioUrl, "_blank", "noopener,noreferrer");
  };

  // Extracted and structured product data from the URL
  const productInfo = {
    name: "NAD+ Nasal Spray",
    price: "$149.00",
    description: "NAD+ Nasal Spray is a fast-acting vitality booster designed to support mental clarity, sustained energy, and cellular repair—perfect for on-the-go rejuvenation.",
    detailedDescription: "NAD+ Nasal Spray is a fast-acting vitality booster designed to support mental clarity, sustained energy, and cellular repair—perfect for on-the-go rejuvenation. Delivered intranasally for rapid absorption, it helps promote focus, resilience, and overall cognitive performance while supporting healthy cellular function. This formula stacks exceptionally well with oral metabolic therapies, GHK-Cu, and CJC-1295/Ipamorelin, making it an ideal daily addition for comprehensive brain-and-body enhancement and optimized performance.",
    rating: "4.8/5.0",
    reviewCount: "2,300+ Reviews",
    features: [
      "Cellular process research",
      "Nasal delivery studies", 
      "Compound research ongoing"
    ],
    benefits: [
      "Being studied for cellular energy processes",
      "Research on DNA repair mechanisms continues",
      "Cellular communication studies ongoing",
      "Mitochondrial function research",
      "Nasal delivery methods under investigation",
      "Cellular process research continues"
    ],
    kitIncludes: [
      "30ml NAD+ Nasal Spray (300mg total, 10mg/ml concentration)",
      "Medical-grade glass bottle with precision nasal sprayer",
      "Pharmaceutical-grade NAD+ (Nicotinamide Adenine Dinucleotide)",
      "Preservative-free, isotonic solution for research use",
      "Comprehensive usage guide for research purposes",
      "Travel case for convenient transport",
      "Access to research support resources"
    ],
    specifications: [
      { label: "Active Ingredient", value: "NAD+" },
      { label: "Strength", value: "10 mg/ml" },
      { label: "Total NAD+", value: "300 mg" },
      { label: "Administration", value: "Nasal Spray" }
    ],
    ctaText: "Start Research - $149.00",
    disclaimer: "NAD+ nasal spray is a compound being studied for research purposes. May cause mild nasal irritation in some individuals. Discontinue use if adverse reactions occur. Not for use by pregnant or nursing women. Research outcomes continue to be studied and individual experiences may vary."
  };

  const compactBenefits = [
    {
      icon: Brain,
      title: "Cellular Research",
      description: "Cellular process studies ongoing",
      color: palette.darkBlue,
    },
    {
      icon: Lightning,
      title: "Energy Studies",
      description: "Cellular energy research",
      color: palette.lightBlue,
    },
    {
      icon: RefreshCw,
      title: "Cellular Processes",
      description: "Cellular mechanism research",
      color: palette.darkBlue,
    },
    {
      icon: Shield,
      title: "Research Focus",
      description: "Ongoing scientific studies",
      color: palette.darkBlue,
    },
  ];

  const stats = [
    { value: "Nasal", label: "Delivery Method" },
    { value: "Research", label: "Ongoing Studies" },
    { value: "Non-Invasive", label: "Administration" },
  ];

  const finalFeatures = [
    { text: "300mg NAD+ Total" },
    { text: "Precision Nasal Sprayer" },
    { text: "Pharmaceutical Grade" },
    { text: "Research Documentation" },
  ];
 
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
        {/* Background elements remain the same */}
        <Box sx={{ position: "absolute", top: -100, right: -80, width: "60%", height: "50%", background: palette.white, borderBottomLeftRadius: "50% 50%", transform: "rotate(-10deg)", zIndex: 1, opacity: 0.9 }} />
        <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${palette.darkBlue} 0%, ${palette.lightBlue} 100%)`, zIndex: 0 }} />

        <Box sx={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 2, gap: { xs: 6, md: 8 } }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} style={{ maxWidth: "550px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} color={palette.yellow} fill={palette.yellow} />
              ))}
              <Typography sx={{ color: palette.white, ml: 1.5, fontSize: "15px", fontWeight: 600 }}>
                {productInfo.rating} • {productInfo.reviewCount}
              </Typography>
            </Box>

            <Typography sx={{ fontSize: { xs: "38px", md: "48px" }, fontWeight: 900, color: palette.white, lineHeight: 1.05, mb: 2 }}>
              {productInfo.name}
              <br />
              <Box component="span" sx={{ color: palette.white, fontSize: { xs: "42px", md: "52px" } }}>{productInfo.price}</Box>
            </Typography>

            <Typography sx={{ mt: 1.5, fontSize: { xs: "16px", md: "18px" }, color: palette.white, lineHeight: 1.6, mb: 3 }}>
              {productInfo.description}
            </Typography>

            <Box sx={{ mt: 2.5, mb: 4 }}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                {productInfo.features.map((t, i) => (
                  <Box key={i} sx={{ px: 3, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.12)", color: palette.white, fontWeight: 700, fontSize: 14 }}>
                    {t}
                  </Box>
                ))}
              </Box>
            </Box>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button onClick={handleCtaClick} variant="contained" sx={{ px: 4.5, py: 1.6, bgcolor: palette.white, color: palette.darkBlue, borderRadius: "28px", fontSize: "18px", fontWeight: 700 }}>
                Explore Formulations - $149
              </Button>
            </motion.div>

            <Typography sx={{ color: palette.white, mt: 3, fontSize: 14, opacity: 0.9, display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle size={14} color={palette.white} /> Pharmaceutical Grade • Research Focus • Non-Invasive
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ position: "relative", maxWidth: "480px", width: "100%" }}>
            <Box sx={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}>
              <img src={nadNasalImage} alt={productInfo.name} style={{ width: "100%", height: "auto", display: "block" }} />
            </Box>
            <Box sx={{ position: "absolute", top: 20, right: 20, px: 2, py: 1, borderRadius: 20, bgcolor: "rgba(255,255,255,0.95)", fontWeight: 700, color: palette.darkBlue }}>
              Research Compound
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ================= SCIENCE SECTION ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9fafc" }}>
        <Container>
          <Grid container spacing={6} alignItems="stretch" direction={{ xs: "column", md: "row" }} wrap={{ xs: "wrap", md: "nowrap" }}>
            <Grid item xs={12} md={6} display="flex" flexDirection="column">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ flex: 1 }}>
                <Typography sx={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, color: palette.darkBlue, mb: 2, fontWeight: 700, display: "inline-block", backgroundColor: `${palette.darkBlue}15`, px: 2, py: 0.5, borderRadius: "20px" }}>
                  How It Works
                </Typography>

                <Typography variant="h2" sx={{ fontSize: { xs: "32px", md: "42px" }, fontWeight: 800, color: palette.black, mb: 3, lineHeight: 1.2 }}>
                  The Science of{" "}
                  <Box component="span" sx={{ color: palette.darkBlue }}>{productInfo.name}</Box>
                </Typography>

                <Typography sx={{ fontSize: 16, color: palette.darkGrey, mb: 4, lineHeight: 1.8 }}>
                  {productInfo.detailedDescription}
                </Typography>

                <Box sx={{ mb: 5 }}>
                  {productInfo.benefits.map((benefit, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2.5 }}>
                        <CheckCircleIcon sx={{ color: palette.darkBlue, fontSize: 22, mr: 2, mt: 0.2 }} />
                        <Typography sx={{ fontSize: 16, color: palette.black, fontWeight: 500 }}>{benefit}</Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} display="flex" justifyContent={{ md: "flex-end", xs: "center" }}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ width: "100%", height: "100%" }}>
                <Box sx={{ position: "relative", width: "100%", height: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
                  <video src={nadScienceVideo} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= COMPACT BENEFITS SECTION ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.white, position: "relative" }}>
        <Container>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: palette.darkBlue, mb: 1.5, display: "inline-block" }}>
                Potential Benefits Being Studied
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "36px" }, mb: 2, color: palette.black, lineHeight: 1.2 }}>
                Research on{" "}<Box component="span" sx={{ color: palette.darkBlue }}>{productInfo.name}</Box>
              </Typography>
              <Typography sx={{ fontSize: "16px", color: palette.darkGrey, lineHeight: 1.6, maxWidth: "600px", mx: "auto" }}>
                Ongoing research continues to explore potential applications of this compound
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3} justifyContent="center">
            {compactBenefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", p: 3, borderRadius: "16px", backgroundColor: palette.white, border: `1px solid ${palette.darkBlue}10`, boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)", transition: "all 0.2s ease", height: "100%", "&:hover": { boxShadow: "0 6px 20px rgba(0, 53, 158, 0.08)", borderColor: `${palette.darkBlue}20` } }}>
                    <Box sx={{ width: "56px", height: "56px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: `${benefit.color}08`, mb: 2.5 }}>
                      <benefit.icon size={24} color={benefit.color} strokeWidth={2} />
                    </Box>
                    <Typography sx={{ fontSize: "16px", fontWeight: 700, color: palette.black, mb: 1 }}>{benefit.title}</Typography>
                    <Typography sx={{ fontSize: "13px", color: palette.darkGrey, lineHeight: 1.5 }}>{benefit.description}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Box sx={{ mt: 8, p: { xs: 3, md: 4 }, textAlign: "center", maxWidth: "800px", mx: "auto", display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "center", alignItems: "center", gap: { xs: 3, sm: 6 } }}>
              {stats.map((stat, index) => (
                <Box key={index}>
                  <Typography sx={{ fontSize: { xs: "28px", md: "32px" }, fontWeight: 800, color: palette.darkBlue, lineHeight: 1, mb: 0.5 }}>{stat.value}</Typography>
                  <Typography sx={{ fontSize: "13px", color: palette.darkGrey, fontWeight: 500 }}>{stat.label}</Typography>
                </Box>
              ))}
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: palette.darkBlue, mb: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Ready to Research?</Typography>
              <Typography sx={{ fontSize: "15px", color: palette.darkGrey, mb: 4, maxWidth: "400px", mx: "auto" }}>Explore NAD+ formulations</Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ================= PRODUCT SHOWCASE SECTION ================= */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9fafc", position: "relative" }}>
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "120px", background: `linear-gradient(to bottom, ${palette.darkBlue}05, transparent)`, zIndex: 0 }} />
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Grid container spacing={6} alignItems="flex-start">
              <Grid item xs={12} md={6}>
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <Box sx={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 40px rgba(0, 53, 158, 0.1)", border: `1px solid ${palette.darkBlue}15`, maxWidth: "500px", mx: { xs: "auto", md: "0" }, ml: { md: "auto" }, mr: { md: "0" }, backgroundColor: palette.white, p: 2 }}>
                    <Box component="img" src={nadNasalProductImage} alt={productInfo.name} sx={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
                    <Box sx={{ position: "absolute", top: 16, left: 16, backgroundColor: palette.darkBlue, color: palette.white, px: 2, py: 0.5, borderRadius: "6px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
                      Pharmaceutical Grade
                    </Box>
                    <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: palette.white, borderTop: `1px solid ${palette.darkBlue}15`, py: 3, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 800, fontSize: { xs: "18px", md: "22px" }, color: palette.darkBlue }}>
                      {productInfo.price}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                  <Box>
                    <Typography sx={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: palette.darkBlue, mb: 2, display: "inline-block" }}>Research Formulation Kit</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "34px" }, mb: 3, color: palette.black, lineHeight: 1.2 }}>
                      The{" "}<Box component="span" sx={{ color: palette.darkBlue }}>{productInfo.name}</Box> Kit
                    </Typography>
                    <Box sx={{ mb: 4 }}>
                      {productInfo.kitIncludes.map((feature, index) => (
                        <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                          <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                            <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: palette.darkBlue, mt: 1, mr: 2, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "15px", color: palette.black, fontWeight: 500, lineHeight: 1.5 }}>{feature}</Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>

            <Box sx={{ mt: { xs: 6, md: 8 } }}>
              <Typography sx={{ fontSize: "15px", color: palette.darkGrey, lineHeight: 1.7, mb: 3, maxWidth: "800px", mx: "auto", textAlign: "center" }}>
                Our NAD+ Nasal Spray is formulated following established quality standards for research purposes. Each spray delivers a consistent dose for research applications.
              </Typography>
              <Typography sx={{ fontSize: "15px", color: palette.darkGrey, lineHeight: 1.7, mb: 5, maxWidth: "800px", mx: "auto", textAlign: "center" }}>
                Manufactured following established quality standards for research formulations.
              </Typography>
              <Box sx={{ backgroundColor: `${palette.darkBlue}05`, borderRadius: "12px", p: 3, border: `1px solid ${palette.darkBlue}10`, width: "100%", mt: 4 }}>
                <Grid container spacing={2}>
                  {productInfo.specifications.map((spec, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Box>
                        <Typography sx={{ fontSize: "12px", fontWeight: 600, color: palette.darkBlue, textTransform: "uppercase", letterSpacing: "0.5px", mb: 0.5 }}>{spec.label}</Typography>
                        <Typography sx={{ fontSize: "15px", fontWeight: 700, color: palette.black }}>{spec.value}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ================= FINAL CTA SECTION ================= */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.darkBlue, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: -100, right: -100, width: "300px", height: "300px", background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
        <Box sx={{ position: "absolute", bottom: -150, left: -150, width: "400px", height: "400px", background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: palette.white, mb: 3, display: "inline-block", backgroundColor: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(10px)", px: 3, py: 1, borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  Begin Your Research
                </Typography>
              </motion.div>

              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, mb: 3, color: palette.white, lineHeight: 1.2 }}>
                Ready to Study <Box component="span" sx={{ color: palette.white, ml: 2, opacity: 0.9 }}>Cellular Processes?</Box>
              </Typography>

              <Typography sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.6, mb: 5, maxWidth: "600px", mx: "auto" }}>
                Access {productInfo.name} for {productInfo.price} for research purposes. Includes comprehensive formulation details and research guidance.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", alignItems: "center", mb: 5 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Button onClick={handleCtaClick} sx={{ backgroundColor: palette.white, color: palette.darkBlue, px: 5, py: 1.8, fontSize: "15px", fontWeight: 700, borderRadius: "50px", textTransform: "none", minWidth: "200px", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.95)", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)" } }}>
                    {productInfo.ctaText}
                  </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "rgba(255, 255, 255, 0.85)", px: 4, py: 1.2, borderRadius: "50px", display: "inline-block", cursor: "pointer", transition: "all 0.2s ease", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)", color: palette.white } }}>
                    Access research protocols and formulation details
                  </Typography>
                </motion.div>
              </Box>

              <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                {finalFeatures.map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
                        <Box sx={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "rgba(255, 255, 255, 0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: palette.white }} />
                        </Box>
                        <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "rgba(255, 255, 255, 0.85)" }}>{feature.text}</Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
                <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <Typography sx={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.7)", mb: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Important Information</Typography>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 4, justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: 1 }}>
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>Research Compound
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: 1 }}>
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>For Research Purposes
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: 1 }}>
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>Medical Guidance Recommended
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.6)", mt: 2, fontStyle: "italic", maxWidth: "600px", mx: "auto" }}>
                    {productInfo.disclaimer}
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

export default NADNasalSprayPage;