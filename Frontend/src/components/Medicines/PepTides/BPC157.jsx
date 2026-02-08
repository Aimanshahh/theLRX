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

  // CORRECTED: Extracted from the actual BPC-157 product page
  const productInfo = {
    name: "BPC-157 Vial",
    price: "$189.00",
    description: "BPC-157 accelerates tissue repair, reduces inflammation, and supports gut health, promoting smoother recovery and greater day-to-day vitality.",
    detailedDescription: "BPC-157 accelerates tissue repair, reduces inflammation, and supports gut health, promoting smoother recovery and greater day-to-day vitality. It pairs effortlessly with Semaglutide, Tirzepatide, NAD+, and CJC-1295/Ipamorelin for enhanced healing and metabolic balance.",
    rating: "4.9/5.0",
    reviewCount: "2,800+ Reviews",
    features: [
      "Accelerates tissue repair",
      "Reduces inflammation", 
      "Supports gut health",
      "Promotes smoother recovery",
      "Enhances day-to-day vitality"
    ],
    benefits: [
      "Being studied for angiogenesis to support blood flow to tissues",
      "Potential collagen synthesis and connective tissue support",
      "Inflammatory cytokine modulation being researched",
      "Tendon, ligament, muscle, and nerve support under investigation",
      "Gastrointestinal lining support being studied",
      "Potential systemic effects when administered via injection"
    ],
    kitIncludes: [
      " of pharmaceutical-grade BPC-157 (Body Protection Compound-157)",
      "Bacteriostatic water for injection included",
      "Sterile insulin syringes with ultra-fine needles",
      "Comprehensive subcutaneous injection guide",
      "Alcohol swabs and sharps container",
      "Personalized dosing protocol under medical supervision",
      "Access to clinical support team for guidance"
    ],
    specifications: [
      { label: "Active Ingredient", value: "BPC-157" },
      { label: "Administration", value: "Subcutaneous" }
    ],
    ctaText: "Start Research - $189.00",
    pepProgram: {
      title: "Precision Energy Program (PEP)",
      price: "189",
      description: "first month - Designed to elevate cellular vitality and metabolic performance, the Precision Energy Program uses targeted peptides to restore balance, enhance recovery, and help you feel effortlessly energized throughout your day."
    },
    disclaimer: "BPC-157 is a research peptide with demonstrated properties in preclinical studies. It is not FDA-approved for human therapeutic use and should be used under medical supervision for research purposes. May interact with certain medications. Not for use by pregnant or nursing women. Discontinue use if adverse reactions occur. Individual results in clinical settings continue to be studied."
  };

  const compactBenefits = [
    {
      icon: HeartPulse,
      title: "Tissue Repair",
      description: "Accelerates healing processes",
      color: palette.darkBlue,
    },
    {
      icon: Shield,
      title: "Inflammation Reduction",
      description: "Reduces inflammatory responses",
      color: palette.lightBlue,
    },
    {
      icon: Bone,
      title: "Gut Health",
      description: "Supports gastrointestinal function",
      color: palette.darkBlue,
    },
    {
      icon: RefreshCw,
      title: "Daily Vitality",
      description: "Promotes smoother recovery",
      color: palette.darkBlue,
    },
  ];

  const stats = [
    { value: "Tissue", label: "Repair Acceleration" },
    { value: "Inflammation", label: "Reduction" },
    { value: "Gut Health", label: "Support" },
  ];

  const finalFeatures = [
    { text: "Medical Assessment Included" },
    { text: " Multi-Dose Vial" },
    { text: "Potential Systemic Effects" },
    { text: "Clinical Support Team Access" },
  ];
  
  // PEP Program Steps
  const pepSteps = [
    { number: "1", title: "Medical Forms", description: "Complete a simple online medical form telling your clinician about your health and prior weight loss attempts." },

    { number: "2", title: "Receive Medicine", description: "Receive your regularly scheduled medication in the mail straight from the pharmacy." },
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

        <Box sx={{ width: "100%", maxWidth: "1200px", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2, gap: { xs: 6, md: 8 } }}>
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
                {productInfo.features.slice(0, 3).map((t, i) => (
                  <Box key={i} sx={{ px: 3, py: 1, borderRadius: 999, bgcolor: "rgba(255,255,255,0.12)", color: palette.white, fontWeight: 700, fontSize: 14 }}>
                    {t}
                  </Box>
                ))}
              </Box>
            </Box>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button onClick={handleCtaClick} variant="contained" sx={{ px: 4.5, py: 1.6, bgcolor: palette.white, color: palette.darkBlue, borderRadius: "28px", fontSize: "18px", fontWeight: 700 }}>
                Support Healing Processes - $189
              </Button>
            </motion.div>

            <Typography sx={{ color: palette.white, mt: 3, fontSize: 14, opacity: 0.9, display: "flex", alignItems: "center", gap: 1 }}>
              <CheckCircle size={14} color={palette.white} /> Pharmaceutical Grade • Research-Backed • Medical Supervision
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} style={{ position: "relative", maxWidth: "480px", width: "100%" }}>
            <Box sx={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}>
              <img src={bpc157Image} alt={productInfo.name} style={{ width: "100%", height: "auto", display: "block" }} />
            </Box>
            <Box sx={{ position: "absolute", top: 20, right: 20, px: 2, py: 1, borderRadius: 20, bgcolor: "rgba(255,255,255,0.95)", fontWeight: 700, color: palette.darkBlue }}>
              Compounded
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
                  <Box component="span" sx={{ color: palette.darkBlue }}>BPC-157</Box>
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
                  <video src={bpc157ScienceVideo} autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
                Key Benefits
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "36px" }, mb: 2, color: palette.black, lineHeight: 1.2 }}>
                Benefits of{" "}
                <Box component="span" sx={{ color: palette.darkBlue }}>BPC-157 Therapy</Box>
              </Typography>
              <Typography sx={{ fontSize: "16px", color: palette.darkGrey, lineHeight: 1.6, maxWidth: "600px", mx: "auto" }}>
                Support your body's natural processes with potential systemic effects
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

          {/* PEP Program Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Box sx={{ mt: 8, backgroundColor: "#F8FAFF", borderRadius: "20px", p: 4, border: `1px solid ${palette.darkBlue}10` }}>
              <Typography sx={{ fontSize: "24px", fontWeight: 800, color: palette.darkBlue, mb: 2, textAlign: "center" }}>
                {productInfo.pepProgram.title}
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: 700, color: palette.black, mb: 1, textAlign: "center" }}>
                ${productInfo.pepProgram.price} {productInfo.pepProgram.description.split(" - ")[0]}
              </Typography>
              <Typography sx={{ fontSize: "14px", color: palette.darkGrey, mb: 4, textAlign: "center" }}>
                {productInfo.pepProgram.description.split(" - ")[1]}
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {[
                  "Begin with our refined, provider-designed intake to tailor your personalized peptide-based product.",
                  "Personalized treatment plans tailored to your unique needs",
                  "Premium therapies delivered privately and discreetly to your door.",
                  "A seamless telehealth platform for effortless and ongoing access to expert support"
                ].map((item, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                      <CheckCircle size={16} color={palette.darkBlue} style={{ marginTop: 2, marginRight: 8 }} />
                      <Typography sx={{ fontSize: "14px", color: palette.darkGrey }}>{item}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Typography sx={{ fontSize: "20px", fontWeight: 700, color: palette.black, mb: 3, textAlign: "center" }}>
                {productInfo.pepProgram.title} in 2 Easy Steps
              </Typography>
              <Typography sx={{ fontSize: "16px", color: palette.darkGrey, mb: 4, textAlign: "center" }}>
                Simple. Convenient. Effective.
              </Typography>
              
              <Grid container spacing={4} justifyContent="center">
                {[
                  { title: "Fill out the form", description: "Complete our comprehensive medical intake form" },
                  { title: "Start Your Precision Energy Program (PEP)", description: "Begin your personalized peptide therapy journey" }
                ].map((step, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box sx={{ textAlign: "center", p: 3, backgroundColor: palette.white, borderRadius: "12px", border: `1px solid ${palette.darkBlue}10` }}>
                      <Typography sx={{ fontSize: "18px", fontWeight: 700, color: palette.darkBlue, mb: 1 }}>{step.title}</Typography>
                      <Typography sx={{ fontSize: "14px", color: palette.darkGrey }}>{step.description}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, color: palette.darkBlue, mb: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Ready to Begin?</Typography>
              <Typography sx={{ fontSize: "15px", color: palette.darkGrey, mb: 4, maxWidth: "400px", mx: "auto" }}>Join others exploring BPC-157 under medical supervision</Typography>
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
                    <Box component="img" src={bpc157ProductImage} alt={`${productInfo.name}`} sx={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
                    <Box sx={{ position: "absolute", top: 16, left: 16, backgroundColor: palette.darkBlue, color: palette.white, px: 2, py: 0.5, borderRadius: "6px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.5px" }}>
                      Compounded
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
                    <Typography sx={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: palette.darkBlue, mb: 2, display: "inline-block" }}>Research Peptide Compound</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: "28px", md: "34px" }, mb: 3, color: palette.black, lineHeight: 1.2 }}>
                      The{" "}
                      <Box component="span" sx={{ color: palette.darkBlue }}>{productInfo.name}</Box>
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
                Our BPC-157 peptide is manufactured to the highest purity standards and is being studied for potential systemic effects. Each vial provides multiple doses for research protocols with potential application for various tissues.
              </Typography>
              
              <Typography sx={{ fontSize: "15px", color: palette.darkGrey, lineHeight: 1.7, mb: 5, maxWidth: "800px", mx: "auto", textAlign: "center" }}>
                Prepared in licensed compounding pharmacies following strict cGMP quality standards.
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

      {/* ================= HOW IT WORKS SECTION ================= */}
      <Box sx={{ width: "100%", py: { xs: 10, md: 16 }, bgcolor: palette.white, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "10%", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: `radial-gradient(circle, ${palette.darkBlue}05 0%, transparent 70%)`, filter: "blur(40px)" }} />
        <Box sx={{ position: "absolute", bottom: "10%", right: "5%", width: "250px", height: "250px", borderRadius: "50%", background: `radial-gradient(circle, ${palette.lightBlue}05 0%, transparent 70%)`, filter: "blur(40px)" }} />

        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
              <Typography sx={{ fontSize: { xs: "13px", md: "15px" }, fontWeight: 700, color: palette.darkBlue, mb: 2, textTransform: "uppercase", letterSpacing: "2px" }}>
                Treatment Process
              </Typography>
              <Typography sx={{ fontSize: { xs: "36px", md: "52px" }, fontWeight: 900, color: palette.black, mb: 3, lineHeight: 1.1 }}>
                Easy as{" "}
                <Box component="span" sx={{ color: palette.darkBlue, ml: 1 }}>1 - 2 - 3</Box>
              </Typography>
              <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, color: palette.darkGrey, maxWidth: "700px", mx: "auto", lineHeight: 1.6 }}>
                LiquidRx makes it easy to get started with our comprehensive peptide therapy program
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: { xs: 6, md: 4 }, mb: { xs: 8, md: 12 } }}>
            {pepSteps.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Box sx={{ p: { xs: 3, md: 4 }, backgroundColor: palette.white, borderRadius: "24px", border: `1px solid ${palette.darkGrey}10`, boxShadow: "0 15px 40px rgba(0, 53, 158, 0.08)", transition: "all 0.4s ease", position: "relative", overflow: "hidden", height: "100%", "&:hover": { transform: { md: "translateY(-8px)" }, boxShadow: "0 25px 60px rgba(0, 53, 158, 0.15)", borderColor: `${palette.darkBlue}40` } }}>
                  <Box sx={{ position: "absolute", top: -20, right: -20, width: "80px", height: "80px", borderRadius: "50%", background: `linear-gradient(135deg, ${palette.darkBlue}20, ${palette.darkBlue}05)`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, border: `2px solid ${palette.darkBlue}30` }}>
                    <Typography sx={{ fontSize: "28px", fontWeight: 900, color: palette.darkBlue }}>{item.number}</Typography>
                  </Box>
                  <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", background: `linear-gradient(135deg, ${palette.darkBlue}20, ${palette.darkBlue}05)`, display: "flex", alignItems: "center", justifyContent: "center", mb: 3, mt: 2, position: "relative", overflow: "hidden", "&::before": { content: '""', position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `linear-gradient(135deg, ${palette.darkBlue}15, transparent)` } }}>
                    {index === 0 && <Box sx={{ fontSize: "32px", fontWeight: 700, color: palette.darkBlue }}>📋</Box>}
                    {index === 1 && <Box sx={{ fontSize: "32px", fontWeight: 700, color: palette.darkBlue }}>👨‍⚕️</Box>}
                    {index === 2 && <Box sx={{ fontSize: "32px", fontWeight: 700, color: palette.darkBlue }}>📦</Box>}
                  </Box>
                  <Typography sx={{ fontSize: { xs: "22px", md: "24px" }, fontWeight: 800, color: palette.black, mb: 2 }}>{item.title}</Typography>
                  <Typography sx={{ fontSize: "16px", color: palette.darkGrey, lineHeight: 1.6 }}>{item.description}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Unlocking Potential Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Box sx={{ mt: { xs: 10, md: 12 }, backgroundColor: "#F8FAFF", borderRadius: "28px", p: { xs: 4, md: 6 }, border: `1px solid ${palette.darkBlue}10`, position: "relative", overflow: "hidden" }}>
              <Typography sx={{ fontSize: { xs: "28px", md: "36px" }, fontWeight: 900, color: palette.black, mb: 4, textAlign: "center" }}>
                Unlocking Your Body's{" "}
                <Box component="span" sx={{ color: palette.darkBlue }}>Peak Energy Potential</Box>
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: 700, color: palette.darkBlue, mb: 2, textAlign: "center" }}>
                Revitalized Function. Renewed Drive.
              </Typography>
              <Typography sx={{ fontSize: "18px", color: palette.darkGrey, lineHeight: 1.6, mb: 6, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
                Liquid Rx provides customized Precision Energy Program solutions to help elevate cellular vitality, metabolic function, and daily performance. Whether you're seeking deeper recovery, enhanced energy, or long-term optimization, our treatments are tailored to your unique wellness goals for truly elevated results.
              </Typography>
              
              <Grid container spacing={4} justifyContent="center">
                {[
                  { title: "Direct Access to Your Health Provider", description: "With Liquid Rx, you'll have ongoing support from experienced providers through virtual consultations. We'll be with you every step of the way, ensuring your treatment plan delivers the results you're looking for.", icon: "👨‍⚕️" },
                  { title: "Highly Recommended by Patients", description: "Join the growing number of patients who trust Liquid Rx to deliver discreet, reliable care that truly works. From the first consultation to ongoing support, we're here to help you succeed.", icon: "⭐" },
                  { title: "Personalized PEP Optimization Plans", description: "Our Precision Energy Program offers a refined, science-driven approach to enhancing cellular energy, metabolic function, and whole-body vitality.", icon: "🎯" }
                ].map((feature, idx) => (
                  <Grid item xs={12} md={4} key={idx}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }}>
                      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", p: 3, backgroundColor: palette.white, borderRadius: "18px", border: `1px solid ${palette.darkBlue}08`, boxShadow: "0 5px 20px rgba(0,0,0,0.03)", height: "100%" }}>
                        <Box sx={{ fontSize: "40px", mb: 2 }}>{feature.icon}</Box>
                        <Typography sx={{ fontWeight: 800, color: palette.black, fontSize: 18, mb: 2 }}>{feature.title}</Typography>
                        <Typography sx={{ color: palette.darkGrey, fontSize: 14, lineHeight: 1.5 }}>{feature.description}</Typography>
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
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: palette.darkBlue, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: -100, right: -100, width: "300px", height: "300px", background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
        <Box sx={{ position: "absolute", bottom: -150, left: -150, width: "400px", height: "400px", background: `radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)`, borderRadius: "50%", zIndex: 0 }} />
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Typography sx={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: palette.white, mb: 3, display: "inline-block", backgroundColor: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(10px)", px: 3, py: 1, borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                  Begin Your Healing Journey
                </Typography>
              </motion.div>

              <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, mb: 3, color: palette.white, lineHeight: 1.2 }}>
                Ready to Support
                <Box component="span" sx={{ color: palette.white, ml: 2, opacity: 0.9 }}>
                  Your Recovery?
                </Box>
              </Typography>

              <Typography sx={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.6, mb: 5, maxWidth: "600px", mx: "auto" }}>
                Access {productInfo.name} for {productInfo.price}. Includes medical consultation, personalized guidance, discreet delivery, and ongoing clinical support.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, justifyContent: "center", alignItems: "center", mb: 5 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Button onClick={handleCtaClick} sx={{ backgroundColor: palette.white, color: palette.darkBlue, px: 5, py: 1.8, fontSize: "15px", fontWeight: 700, borderRadius: "50px", textTransform: "none", minWidth: "200px", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.95)", boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)" } }}>
                    {productInfo.ctaText}
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, color: palette.white, mb: 2 }}>
                    Or explore our comprehensive program:
                  </Typography>
                  <Button onClick={handleCtaClick} sx={{ backgroundColor: palette.lightBlue, color: palette.white, px: 4, py: 1.5, fontSize: "14px", fontWeight: 700, borderRadius: "50px", textTransform: "none", minWidth: "250px", "&:hover": { backgroundColor: `${palette.lightBlue}CC` } }}>
                    Start Precision Energy Program - ${productInfo.pepProgram.price}/month
                  </Button>
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
                  <Typography sx={{ fontSize: "13px", fontWeight: 500, color: "rgba(255, 255, 255, 0.7)", mb: 2, textTransform: "uppercase", letterSpacing: "1px" }}>Important Medical Information</Typography>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 4, justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: 1 }}>
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>
                      Research Compound
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: 1 }}>
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>
                      Not FDA-Approved
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)", display: "flex", alignItems: "center", gap: 1 }}>
                      <Box component="span" sx={{ fontSize: "18px", fontWeight: 700 }}>⚠</Box>
                      Medical Supervision Required
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

export default BPC157Page;