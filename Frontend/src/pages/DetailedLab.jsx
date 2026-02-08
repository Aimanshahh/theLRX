import { Box, Typography, Stack } from "@mui/material";
import { useRef, useState } from "react";

/* HERO IMAGE */
import backgroundImage from "../assets/detailedpages/img11.jpeg";

/* MAIN CARD IMAGES */
import cardImg1 from "../assets/detailedpages/img1.png";
import cardImg2 from "../assets/detailedpages/img2.png";
import cardImgWide from "../assets/detailedpages/img3.png";
import cardImg3 from "../assets/detailedpages/img4.png";
import cardImg4 from "../assets/detailedpages/img5.png";

/* USE THE SAME IMAGES AS BEFORE */
import stripCard1 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.44 PM1.jpeg";
import stripCard2 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.44 PM.jpeg";
import stripCard3 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.56 PM1.jpeg";
import stripCard4 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.56 PM.jpeg";
import stripCard5 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.44 PM1.jpeg";
import stripCard6 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.44 PM.jpeg";
import stripCard7 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.56 PM1.jpeg";
import stripCard8 from "../assets/detailedpages/WhatsApp Image 2026-01-01 at 9.27.56 PM.jpeg";

/* IMAGE-ONLY CARDS */
import imageOnly1 from "../assets/detailedpages/WhatsApp Image 2026-01-03 at 5.05.31 PM.jpeg";
import imageOnly2 from "../assets/detailedpages/WhatsApp Image 2026-01-03 at 5.05.46 PM.jpeg";
import imageOnly3 from "../assets/detailedpages/WhatsApp Image 2026-01-03 at 5.05.31 PM.jpeg";
import imageOnly4 from "../assets/detailedpages/WhatsApp Image 2026-01-03 at 5.05.46 PM.jpeg";

/* IMAGE-ONLY CARDS */
import labsVerticalImg from "../assets/detailedpages/full1.jpeg";

import trustCardImg1 from "../assets/detailedpages/img15.jpeg";
import trustCardImg2 from "../assets/detailedpages/img14.png";

import fullWidthTallImg from "../assets/detailedpages/img16.jpeg";

import yourImage from "../assets/detailedpages/Black and Orange Modern Gradient Online Meeting Zoom Virtual Background (1500 x 800 px) (20).png";
import card2Image from "../assets/detailedpages/img4.png";
import card3Image from "../assets/detailedpages/card3.png";
import card4Image from "../assets/detailedpages/card4.jpeg";

/* ================= CARD (ONLY FIXED PART) ================= */
const HimsCard = ({ img, title, desc, wide, bottomCentered }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: wide
          ? { xs: "280px", sm: "320px", md: "380px", lg: "420px" }
          : { xs: "240px", sm: "280px", md: "320px", lg: "360px" },
        borderRadius: wide ? { xs: "20px", md: "28px", lg: "32px" } : { xs: "18px", md: "24px", lg: "28px" },
        backgroundColor: "#ECEEEF",
        overflow: "hidden",
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* TEXT */}
      <Box sx={{ 
        zIndex: 2, 
        maxWidth: wide ? { xs: "70%", md: "55%" } : { xs: "80%", md: "70%" } 
      }}>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "26px" },
            fontWeight: 700,
            lineHeight: 1.15,
            mb: 1,
            color: "#00359E",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: 1.55,
            color: "rgba(0,0,0,0.75)",
          }}
        >
          {desc}
        </Typography>
      </Box>

      {/* IMAGE — BOTTOM DOMINANT */}
      <Box
        component="img"
        src={img}
        alt=""
        sx={{
          position: "absolute",
          bottom: bottomCentered 
            ? { xs: "-40px", sm: "-50px", md: "-60px", lg: "-70px" } 
            : 0,
          left: bottomCentered ? "50%" : wide ? { xs: "55%", md: "60%" } : "50%",
          transform: "translateX(-50%)",
          height: bottomCentered
            ? wide
              ? { xs: "280px", sm: "320px", md: "380px", lg: "420px" }
              : { xs: "220px", sm: "260px", md: "300px", lg: "340px" }
            : wide
            ? { xs: "220px", sm: "260px", md: "300px", lg: "320px" }
            : { xs: "160px", sm: "190px", md: "210px", lg: "230px" },
          maxWidth: "none",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

/* ================= HIMS STYLE CARD COMPONENT ================= */
const HimsStyleCard = ({ title, desc, pills, img }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "280px", sm: "320px", md: "360px", lg: "380px" },
        minWidth: { xs: "280px", sm: "320px", md: "360px", lg: "380px" },
        height: { xs: "350px", sm: "400px", md: "430px", lg: "460px" },
        minHeight: { xs: "350px", sm: "400px", md: "430px", lg: "460px" },
        borderRadius: { xs: "20px", md: "24px", lg: "28px" },
        overflow: "hidden",
        flexShrink: 0,
        display: "block",
        alignSelf: "flex-start",
      }}
    >
      {/* BACKGROUND IMAGE AS ABSOLUTE POSITIONED IMG */}
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          position: "absolute",
          top: { xs: -10, md: -15, lg: -23 },
          left: { xs: -40, md: -60, lg: -80 },
          width: { xs: "140%", md: "145%", lg: "150%" },
          height: { xs: "105%", md: "108%", lg: "110%" },
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />

      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* CONTENT */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          p: { xs: "20px", sm: "24px", lg: "28px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        {/* TOP TEXT */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", lg: "36px" },
              fontWeight: 700,
              lineHeight: 1.05,
              mb: "8px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "15px", lg: "16px" },
              lineHeight: 1.5,
              opacity: 0.95,
              maxWidth: { xs: "240px", sm: "260px", lg: "280px" },
            }}
          >
            {desc}
          </Typography>
        </Box>

        {/* BOTTOM */}
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "13px" },
              fontWeight: 600,
              opacity: 0.9,
              mb: "8px",
            }}
          >
            Includes {pills.length} biomarkers
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[pills.slice(0, 2), pills.slice(2, 4)].map((row, i) => (
              <Box key={i} sx={{ display: "flex", gap: "6px" }}>
                {row.map((pill, j) => (
                  <Box
                    key={j}
                    sx={{
                      px: { xs: "10px", sm: "12px" },
                      py: { xs: "5px", sm: "6px" },
                      fontSize: { xs: "11px", sm: "12px" },
                      fontWeight: 600,
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.22)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {pill}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

/* ================= SCROLLABLE CARD STRIP COMPONENT ================= */
const ScrollableCardStrip = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const stripImages = [
    stripCard1,
    stripCard2,
    stripCard3,
    stripCard4,
    stripCard5,
    stripCard6,
    stripCard7,
    stripCard8,
  ];

  const cardData = [
    {
      title: "Liver",
      desc: "Check liver enzymes to assess how well it's working for digestion and detoxification.",
      pills: ["Albumin", "ALT", "Alkaline Phosphatase", "Total Protein"],
    },
    {
      title: "Immune Defense",
      desc: "Get a read on your body's readiness to fight infections and recover.",
      pills: ["WBC", "Basophils", "Eosinophils", "Lymphocytes"],
    },
    {
      title: "Nutrients",
      desc: "See if your nutrient levels are what they should be for your overall health.",
      pills: ["Vitamin D", "Iron", "Magnesium", "Potassium"],
    },
    {
      title: "Heart",
      desc: "Track cholesterol, triglycerides, and other markers of cardiovascular health.",
      pills: ["Cholesterol", "Triglycerides", "HDL", "LDL"],
    },
    {
      title: "Metabolism",
      desc: "Monitor blood sugar, insulin, and other metabolic function indicators.",
      pills: ["Glucose", "Insulin", "HbA1c", "C-Peptide"],
    },
    {
      title: "Hormones",
      desc: "Check testosterone, estrogen, cortisol, and thyroid hormone levels.",
      pills: ["Testosterone", "Estrogen", "Cortisol", "TSH"],
    },
    {
      title: "Inflammation & Stress",
      desc: "Measure markers of inflammation and oxidative stress in your body.",
      pills: ["CRP", "Homocysteine", "Fibrinogen", "ESR"],
    },
    {
      title: "Thyroid",
      desc: "Assess thyroid function with comprehensive thyroid panel testing.",
      pills: ["TSH", "T3", "T4", "Thyroid Antibodies"],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    e.currentTarget.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50vw",
        overflowX: "auto",
        overflowY: "hidden",
        cursor: "grab",
        userSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        "&:active": { cursor: "grabbing" },
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: "8px", sm: "4px", md: "2px" },
          paddingLeft: { xs: "16px", sm: "24px", md: "48px", lg: "120px" },
          paddingRight: { xs: "16px", sm: "24px", md: "200px", lg: "400px" },
          width: "max-content",
          pb: 2,
        }}
      >
        {cardData.map((card, index) => (
          <HimsStyleCard
            key={index}
            title={card.title}
            desc={card.desc}
            pills={card.pills}
            img={stripImages[index]}
          />
        ))}
      </Box>
    </Box>
  );
};

/* ================= IMAGE-ONLY SCROLLABLE CARD STRIP WITH TEXT BELOW ================= */
const ImageOnlyCardStrip = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const imageOnlyCards = [imageOnly1, imageOnly2, imageOnly3, imageOnly4];

  const cardTexts = [
    { title: "Advanced Analytics" },
    { title: "Personalized Insights" },
    { title: "Progress Tracking" },
    { title: "Expert Guidance" },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    e.currentTarget.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Box>
      <Box
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          marginLeft: "-50vw",
          overflowX: "auto",
          overflowY: "hidden",
          cursor: "grab",
          userSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
          "&:active": { cursor: "grabbing" },
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "12px", sm: "10px", md: "8px" },
            paddingLeft: { xs: "16px", sm: "24px", md: "48px", lg: "120px" },
            paddingRight: { xs: "16px", sm: "24px", md: "200px", lg: "400px" },
            width: "max-content",
            pb: 2,
          }}
        >
          {imageOnlyCards.map((imgSrc, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "280px", sm: "320px", md: "360px", lg: "380px" },
                flexShrink: 0,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  minHeight: { xs: "280px", sm: "320px", md: "360px", lg: "400px" },
                  borderRadius: { xs: "20px", md: "24px", lg: "28px" },
                  overflow: "hidden",
                  backgroundColor: "#cbb7a0",
                  mb: { xs: 1.5, md: 2 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={imgSrc}
                  alt={`Health visualization ${index + 1}`}
                  sx={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "120%",
                    maxHeight: { xs: "320px", sm: "380px", md: "420px", lg: "460px" },
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "center", width: "100%" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "20px", lg: "22px" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 1,
                    color: "#00359E",
                  }}
                >
                  {cardTexts[index].title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "11px", lg: "12px" },
            color: "rgba(0,0,0,0.6)",
            textAlign: "center",
            maxWidth: { xs: "300px", sm: "500px", md: "700px", lg: "800px" },
            lineHeight: 1.4,
            px: 2,
          }}
        >
          Images for illustrative purposes only.
          <br />
          Estimate for informational purposes only. Calculation is an approximation of current aging status and should not be used as a diagnostic tool and does not determine treatment plan eligibility.
        </Typography>
      </Box>
    </Box>
  );
};

const FullWidthCurvedBackground = () => {
  const cardData = [
    {
      img: cardImg1,
      title: "Personalized plan",
      desc: "Receive actionable steps tailored to your unique biomarkers and goals.",
    },
    {
      img: cardImg2,
      title: "Expert insights",
      desc: "Get clear explanations from medical experts about what your results mean.",
    },
    {
      img: cardImgWide,
      title: "Comprehensive health tracking",
      desc: "Monitor 130+ biomarkers including hormones, nutrients, and metabolic health indicators.",
      wide: true,
    },
    {
      img: cardImg3,
      title: "Progress dashboard",
      desc: "Visualize improvements over time with easy-to-understand charts and metrics.",
    },
    {
      img: cardImg4,
      title: "24/7 support",
      desc: "Access to healthcare professionals whenever you have questions.",
    },
  ];

  const pillsData = [
    "Heart",
    "Metabolism",
    "Hormones",
    "Inflammation & Stress",
    "Thyroid",
    "Kidney",
    "Liver",
    "Immune Defense",
    "Nutrients",
    "Blood",
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
    {/* ================= HERO ================= */}
<Box
  sx={{
    width: "100vw",
    height: { xs: "500px", sm: "550px", md: "520px", lg: "570px" },
    position: "relative",
    left: "50%",
    ml: "-50vw",
    borderBottomLeftRadius: { xs: "24px", md: "32px", lg: "40px" },
    borderBottomRightRadius: { xs: "24px", md: "32px", lg: "40px" },
    overflow: "hidden",
  }}
>
  <Box
    component="img"
    src={backgroundImage}
    alt=""
    sx={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <Box
    sx={{
      position: "relative",
      zIndex: 2,
      maxWidth: "1200px",
      mx: "auto",
      height: "100%",
      px: { xs: 2, sm: 3, md: 4, lg: 6 },
      display: "grid",
      gridTemplateColumns: { xs: "1fr", lg: "1fr 1.1fr" },
      alignItems: { xs: "center", lg: "stretch" },
      gap: { lg: 6 },
      pt: { xs: "100px", sm: "110px", lg: "80px" },
    }}
  >
    <Box 
      sx={{ 
        maxWidth: { xs: "100%", lg: "520px" }, 
        color: "#fff",
        alignSelf: { xs: "center", lg: "flex-start" },
        mt: { xs: 0, lg: "100px" },
        textAlign: { xs: "center", lg: "left" },
        px: { xs: 1, sm: 0 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "28px", sm: "32px", md: "48px", lg: "62px" },
          fontWeight: 750,
          lineHeight: 1.0,
          mb: 2,
          letterSpacing: "-0.6px",
        }}
      >
        Advanced insights
        <br />
        for better health
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "15px" },
          opacity: 0.9,
          lineHeight: 1.7,
          maxWidth: { xs: "100%", sm: "90%", lg: "460px" },
          mx: { xs: "auto", lg: 0 },
          px: { xs: 1, sm: 0 },
        }}
      >
        Annual lab test of 130+ biomarkers, checking for indicators of
        1,000+ conditions*—all for just $499 per year.
      </Typography>
    </Box>

    <Stack
      direction={{ xs: "row", md: "row", lg: "row" }}
      spacing={{ xs: 1.5, sm: 2, md: 2, lg: 2 }}
      sx={{
        display: "flex",
        justifyContent: { xs: "center", lg: "flex-end" },
        alignSelf: { xs: "center", lg: "flex-end" },
        mb: { xs: "40px", sm: "40px", lg: "80px" },
        position: "relative",
        top: { xs: "0", lg: "60px" },
        width: { xs: "100%", lg: "auto" },
        maxWidth: { xs: "500px", sm: "600px", md: "700px", lg: "none" },
        flexWrap: { xs: "wrap", md: "nowrap" },
        gap: { xs: 1.5, sm: 2, md: 2, lg: 2 },
      }}
    >
      {[
        {
          title: "130+ lab tests",
          desc: "Check indicators of 1,000+ conditions*",
        },
        { title: "2x per year", desc: "Track progress over time" },
        { title: "No insurance", desc: "Clear, upfront costs" },
      ].map((item, i) => (
        <Box
          key={i}
          sx={{
            // Small screens: square cards
            width: { 
              xs: "110px", 
              sm: "120px", 
              md: "180px", 
              lg: "200px" 
            },
            height: { 
              xs: "110px", 
              sm: "120px", 
              md: "130px", 
              lg: "145px" 
            },
            p: { 
              xs: 1.5, 
              sm: 2, 
              md: 2, 
              lg: 2.5 
            },
            borderRadius: { 
              xs: "14px", 
              sm: "16px", 
              md: "16px", 
              lg: "20px" 
            },
            background:
              "linear-gradient(180deg, rgba(80,160,200,0.35), rgba(40,120,160,0.25))",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { 
                xs: "13px", 
                sm: "14px", 
                md: "15px", 
                lg: "16px" 
              },
              lineHeight: 1.2,
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              fontSize: { 
                xs: "11px", 
                sm: "12px", 
                md: "12px", 
                lg: "13px" 
              },
              opacity: 0.85,
              lineHeight: 1.4,
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            {item.desc}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
</Box>

      {/* ================= SNAPSHOT HEADLINE ================= */}
      <Box
        sx={{ 
          py: { xs: 4, sm: 5, md: 6, lg: 8 }, 
          display: "flex", 
          justifyContent: "center",
          px: 2 
        }}
      >
        <Typography
          sx={{
            maxWidth: "980px",
            textAlign: "center",
            fontSize: { xs: "28px", sm: "36px", md: "52px", lg: "84px" },
            fontWeight: 530,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            px: 2,
          }}
        >
          A snapshot of your
          <br />
          health,{" "}
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(90deg,#747578 0%,#8B8D8E 35%,#00359E 70%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            plus the power to change it
          </Box>
        </Typography>
      </Box>

      {/* ================= CARD GRID ================= */}
      <Box sx={{ 
        maxWidth: "1200px", 
        mx: "auto", 
        px: { xs: 2, sm: 3, md: 4 }, 
        pb: { xs: 4, sm: 6, md: 8, lg: 10 } 
      }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: "6px" },
            mb: { xs: 3, md: "6px" },
          }}
        >
          <HimsCard {...cardData[0]} bottomCentered />
          <HimsCard {...cardData[1]} />
        </Box>

        <HimsCard {...cardData[2]} wide />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
            gap: { xs: 3, md: "6px" },
            mt: { xs: 3, md: "6px" },
          }}
        >
          <HimsCard {...cardData[3]} bottomCentered />
          <HimsCard {...cardData[4]} bottomCentered />
        </Box>
      </Box>

      {/* ================= SECTION BELOW CARDS ================= */}
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 6, sm: 8, md: 10, lg: 14 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
            columnGap: { xs: "24px", md: "60px", lg: "88px" },
            rowGap: { xs: "24px", md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "60px", lg: "90px" },
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Gain insights into{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#8B8D8E 0%,#00359E 65%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              10 vital areas
            </Box>{" "}
            of your health
          </Typography>

          <Box sx={{ 
            mt: { xs: 0, md: "88px" }, 
            maxWidth: "460px",
            textAlign: { xs: "center", md: "left" } 
          }}>
            <Typography sx={{ 
              fontSize: { xs: "16px", md: "18px" }, 
              fontWeight: 650, 
              mb: 0.5 
            }}>
              Measure what matters.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.2,
                color: "rgba(0,0,0,0.75)",
              }}
            >
              Gain a holistic, in-depth view of how your heart, metabolism, and
              vital systems work together.Together we create peaceful Future.
            </Typography>
          </Box>
        </Box>

        {/* PILLS — FIXED */}
        <Box sx={{ 
          mt: { xs: 4, sm: 5, md: 6, lg: 7 }, 
          display: "flex", 
          justifyContent: "center",
          overflowX: "auto",
          width: "100%",
          py: 1,
          "&::-webkit-scrollbar": { 
            height: "4px",
            display: "block" 
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "10px"
          },
        }}>
          <Box
            sx={{
              display: "inline-flex",
              gap: "8px",
              padding: "6px",
              backgroundColor: "#E6E7E8",
              borderRadius: "999px",
              flexWrap: { xs: "nowrap", sm: "wrap" },
              justifyContent: "center",
            }}
          >
            {pillsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  px: "12px",
                  py: { xs: "6px", md: "7px" },
                  borderRadius: "999px",
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  fontWeight: 600,
                  backgroundColor: index === 0 ? "#fff" : "transparent",
                  color: index === 0 ? "#000" : "rgba(0,0,0,0.8)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 8, sm: 10, md: 12, lg: 14 } }}>
          <ScrollableCardStrip />
        </Box>
      </Box>

      {/* ================= ANOTHER SECTION BELOW CARDS ================= */}
   <Box
  sx={{
    maxWidth: "1320px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 5, lg: 6 },
    py: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 }
  }}
>
  {/* Grid container - unchanged structure */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
      columnGap: { xs: 3, sm: 4, md: 6, lg: 8, xl: 10 },
      rowGap: { xs: 4, sm: 5, md: 0 },
      alignItems: { md: "start" }
    }}
  >
    {/* Main heading */}
    <Typography
      sx={{
        fontSize: {
          xs: "28px",
          sm: "36px",
          md: "48px",
          lg: "64px",
          xl: "80px",
          xxl: "90px"
        },
        fontWeight: 500,
        lineHeight: {
          xs: 1.1,
          sm: 1.08,
          md: 1.06
        },
        letterSpacing: "-0.03em",
        textAlign: { xs: "center", md: "left" },
        wordBreak: "break-word",
        overflowWrap: "break-word",
        hyphens: "auto"
      }}
    >
      Unlock Your{" "}
      <Box
        component="span"
        sx={{
          background: "linear-gradient(90deg,#8B8D8E 0%,#00359E 65%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline",
          backgroundSize: "100%",
          backgroundRepeat: "repeat"
        }}
      >
        Biological Age
      </Box>
    </Typography>

    {/* Description box */}
    <Box sx={{ 
      mt: { xs: 0, md: "35px" },
      maxWidth: { xs: "100%", md: "460px" },
      textAlign: { xs: "center", md: "left" },
      justifySelf: { xs: "center", md: "start" },
      width: "100%"
    }}>
      <Typography sx={{ 
        fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" }, 
        fontWeight: 600, 
        mb: { xs: 1, sm: 1.5 },
        color: "#000"
      }}>
        Know more to live more.
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "17px", md: "18px" },
          lineHeight: { xs: 1.4, sm: 1.5 },
          color: "rgba(0,0,0,0.75)",
          wordBreak: "break-word"
        }}
      >
        Your Biological Age reveals how fast your body is aging from what the calendar shows. Improving key markers linked to longevity could help you get aging on lock.
      </Typography>
    </Box>
  </Box>

  {/* Card strip with proper spacing */}
  <Box sx={{ 
    mt: { xs: 6, sm: 8, md: 10, lg: 12, xl: 14 },
    width: "100%",
    overflow: "hidden"
  }}>
    <ImageOnlyCardStrip />
  </Box>
</Box>

      {/* ================= NEW CENTERED HEADING SECTION ================= */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "center", 
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        px: 2 
      }}>
        <Box sx={{ 
          textAlign: "center", 
          maxWidth: "900px", 
          px: { xs: 2, sm: 3 } 
        }}>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "60px", lg: "90px" },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            See what Labs
          </Typography>
          
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "60px", lg: "90px" },
              fontWeight: 500,
              lineHeight: 1.05,
              mb: 3,
              background: "linear-gradient(90deg, #8B8D8E 0%, #00359E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            can reveal
          </Typography>
          
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px", lg: "22px" },
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            Labs for every part of life.
          </Typography>
          
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "17px", lg: "18px" },
              lineHeight: 1.4,
              color: "rgba(0,0,0,0.75)",
              maxWidth: { xs: "100%", sm: "500px", md: "600px" },
              mx: "auto",
            }}
          >
            Whether seeking answers, aiming to optimize, or looking ahead, Labs is your roadmap for better health.
          </Typography>
        </Box>
      </Box>

      {/* ================= SINGLE VERTICAL CURVED IMAGE CARD ================= */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          pb: { xs: 6, sm: 8, md: 10, lg: 14 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "320px",
              sm: "420px",
              md: "520px",
              lg: "620px",
              xl: "720px",
            },
            borderRadius: { xs: "20px", md: "24px", lg: "28px" },
            overflow: "hidden",
            backgroundColor: "#ECEEEF",
          }}
        >
          <Box
            component="img"
            src={labsVerticalImg}
            alt="Labs overview"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>

      {/* ================= HOLISTIC CARE HEADLINE SECTION ================= */}
      <Box sx={{ 
        py: { xs: 6, sm: 8, md: 10, lg: 14 }, 
        display: "flex", 
        justifyContent: "center", 
        bgcolor: "#fff",
        px: 2 
      }}>
        <Box sx={{ 
          textAlign: "center", 
          maxWidth: "1000px", 
          px: { xs: 2, sm: 3, md: 4, lg: 6 } 
        }}>
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "50px", lg: "70px", xl: "80px" },
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              background: "linear-gradient(90deg, #747578 0%, #8B8D8E 30%, #003B9D 60%, #00359E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Holistic care
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "42px", md: "60px", lg: "80px", xl: "90px" },
              fontWeight: 500,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#000",
              mt: { xs: -1, sm: -2, md: -3 },
            }}
          >
            happens here
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
              lineHeight: 1.0,
              color: "rgba(0,0,0,0.75)",
              maxWidth: { xs: "100%", sm: "500px", md: "650px", lg: "780px" },
              mx: "auto",
              mt: { xs: 3, sm: 4, md: 5, lg: 6 },
            }}
          >
            Join the over 2 million strong achieving better health through LRX-day to day, test to test.
          </Typography>
        </Box>
      </Box>

      {/* STAT CARDS */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
          py: { xs: 2, sm: 3, md: 4, lg: 5 },
          display: "grid",
          position: "relative",
        }}
      >
        {/* TOP ROW – SMALLER WIDTH CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
            gap: { xs: 2, md: "2px" },
            position: "relative",
            zIndex: 2,
            mb: { xs: "-20px", sm: "-30px", md: "-50px", lg: "-70px" },
            width: { xs: "100%", sm: "95%", md: "90%" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#eceeef",
              borderRadius: { xs: "16px", md: "18px", lg: "20px" },
              aspectRatio: "3 / 2",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              px: { xs: 1, sm: 1.5 },
              py: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 20, md: 28, lg: 38 },
                fontWeight: 800,
                lineHeight: 1,
                color: "#00359E",
                mb: 0.3,
              }}
            >
              2.4 million+
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 12, md: 14, lg: 16 },
                fontWeight: 600,
                color: "#00359E",
                maxWidth: { xs: 120, sm: 140, md: 160 },
                mx: "auto",
              }}
            >
              customers trust care through LiquidRX<sup>1</sup>
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#eceeef",
              borderRadius: { xs: "16px", md: "18px", lg: "20px" },
              aspectRatio: "3 / 2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: { xs: 1, sm: 1.5 },
              py: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18, md: 24, lg: 32 },
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#00359E",
                px: 1,
              }}
            >
              Doctor-trusted
              <br />
              treatment plans
            </Typography>
          </Box>
        </Box>

        {/* CENTER CARD */}
        <Box
          sx={{
            width: { xs: "100%", sm: "95%", md: "90%" },
            aspectRatio: { xs: "3 / 2", sm: "3 / 1.5", md: "3 / 1.1" },
            borderRadius: { xs: "16px", md: "18px", lg: "20px" },
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            mx: "auto",
          }}
        >
          <Box
            component="img"
            src={trustCardImg1}
            alt="Customer testimonial"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* BOTTOM ROW – SMALLER WIDTH CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
            gap: { xs: 2, md: "2px" },
            position: "relative",
            zIndex: 2,
            mt: { xs: "-20px", sm: "-30px", md: "-50px", lg: "-70px" },
            width: { xs: "100%", sm: "95%", md: "90%" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#eceeef",
              borderRadius: { xs: "16px", md: "18px", lg: "20px" },
              aspectRatio: "3 / 2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: { xs: 1, sm: 1.5 },
              py: { xs: 2, md: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18, md: 24, lg: 32 },
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#00359E",
                px: 1,
              }}
            >
              Provider
              <br />
              follow-ups
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#eceeef",
              borderRadius: { xs: "16px", md: "18px", lg: "20px" },
              aspectRatio: "3 / 2",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              px: { xs: 2, sm: 3 },
              pt: { xs: 2, sm: 3 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 24, md: 32, lg: 42 },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "#00359E",
                  textAlign: "left",
                }}
                >
                In-app
                <br />
                content
              </Typography>
            </Box>

            <Box
              component="img"
              src={trustCardImg2}
              alt="In-app content"
              sx={{
                position: "absolute",
                right: "0%",
                bottom: "0%",
                height: { xs: "180%", md: "200%" },
                width: { xs: "65%", md: "70%" },
                objectFit: "contain",
                objectPosition: "right bottom",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          </Box>
        </Box>

        {/* DISCLAIMER TEXT - CENTERED */}
        <Box
          sx={{
            width: "100%",
            mt: { xs: 3, sm: 4, md: 5, lg: 6 },
            textAlign: "center",
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 9, sm: 10, md: 11, lg: 12 },
              color: "#666",
              lineHeight: 1.4,
              maxWidth: { xs: "280px", sm: "400px", md: "600px", lg: "800px" },
              mx: "auto",
            }}
          >
            Compounded products are not approved nor evaluated for safety, effectiveness, or quality by the FDA.
          </Typography>
        </Box>

        {/* ================= HUGE FULL-WIDTH TALL IMAGE ================= */}
        <Box
          sx={{
            width: "100vw",
            height: {
              xs: "40vh",
              sm: "50vh",
              md: "70vh",
              lg: "90vh",
              xl: "100vh",
            },
            position: "relative",
            left: "50%",
            marginLeft: "-50vw",
            overflow: "hidden",
            borderRadius: { xs: "0px", sm: "16px", md: "24px", lg: "32px" },
            mt: { xs: 6, sm: 8, md: 10, lg: 12 },
          }}
        >
          <Box
            component="img"
            src={fullWidthTallImg}
            alt="Full width feature"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </Box>

        {/* ================= HIMS-STYLE CENTERED HEADLINE SECTION ================= */}
        <Box
          sx={{
            py: { xs: 8, sm: 10, md: 12, lg: 14, xl: 16 },
            display: "flex",
            justifyContent: "center",
            bgcolor: "#fff",
            px: 2,
          }}
        >
          <Box sx={{ 
            textAlign: "center", 
            maxWidth: "1100px", 
            px: { xs: 2, sm: 3, md: 4, lg: 6 } 
          }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "36px", sm: "44px", md: "60px", lg: "70px", xl: "80px" },
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                background: "linear-gradient(to right, #747578, #8B8D8E, #00359E, #003B9D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: { xs: 1, sm: 2, md: 3 },
              }}
            >
              Get your Action Plan
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "28px", sm: "34px", md: "45px", lg: "52px", xl: "60px" },
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#000",
              }}
            >
              developed by doctors
            </Typography>
          </Box>
        </Box>

        {/* 5 CARDS IMAGE */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            mx: "auto",
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {/* TOP TALL CARD */}
          <Box
            sx={{
              width: "100%",
              height: { xs: "400px", sm: "500px", md: "600px", lg: "700px", xl: "750px" },
              maxWidth: "1000px",
              mx: "auto",
              borderRadius: { xs: "16px", md: "18px", lg: "20px" },
              backgroundColor: "#ECEEEF",
              overflow: "hidden",
              position: "relative",
              mb: { xs: 1, md: 0.5 },
            }}
          >
            <Box
              component="img"
              src={yourImage}
              alt=""
              sx={{
                position: "absolute",
                bottom: { xs: "-40px", sm: "-60px", md: "-80px", lg: "-90px" },
                left: "50%",
                transform: "translateX(-50%)",
                height: { xs: "500px", sm: "650px", md: "800px", lg: "900px" },
                width: "auto",
                maxWidth: { xs: "100%", sm: "90%", md: "1380px" },
                objectFit: "contain",
              }}
            />
          </Box>

          {/* BOTTOM 2x2 GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
              gap: { xs: 1, md: 0.5 },
              maxWidth: "1000px",
              mx: "auto",
              mt: { xs: 1, md: 0.5 },
            }}
          >
            {/* CARD 1 */}
            <Box
              sx={{
                width: "100%",
                height: { xs: "350px", sm: "400px", md: "450px", lg: "500px", xl: "550px" },
                borderRadius: { xs: "14px", md: "16px" },
                backgroundColor: "#ECEEEF",
                overflow: "hidden",
                position: "relative",
                p: { xs: 2, sm: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "22px", sm: "26px", md: "32px", lg: "38px", xl: "42px" },
                  fontWeight: 770,
                  lineHeight: 1,
                  mb: { xs: 2, md: 3 },
                  background: "linear-gradient(90deg, #8B8D8E 0%, #00359E 50%, #003B9D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your personalized action plan
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                  lineHeight: 1,
                  color: "#000",
                  mb: 1.5,
                }}
              >
                helps guide next steps.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "22px", md: "24px", lg: "26px", xl: "28px" },
                  lineHeight: 1,
                  color: "#000",
                  mb: 1.5,
                }}
              >
                Access lifestyle guidance and, if eligible, doctor-reviewed treatment options.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                  lineHeight: 1,
                  color: "#000",
                }}
              >
                Support your progress ahead of your next test.
              </Typography>
            </Box>

            {/* CARD 2 */}
            <Box
              sx={{
                width: "100%",
                height: { xs: "350px", sm: "400px", md: "450px", lg: "500px", xl: "550px" },
                borderRadius: { xs: "14px", md: "16px" },
                backgroundColor: "#ECEEEF",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={card2Image}
                alt=""
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  height: { xs: "250px", sm: "300px", md: "350px", lg: "400px" },
                  width: "auto",
                  maxWidth: { xs: "90%", md: "80%" },
                  objectFit: "contain",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "16px", md: "20px", lg: "24px" },
                  left: { xs: "16px", md: "20px", lg: "24px" },
                  right: { xs: "16px", md: "20px", lg: "24px" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "24px", md: "26px", lg: "28px" },
                    fontWeight: 760,
                    lineHeight: 1,
                    mb: 1,
                    color: "#000",
                  }}
                >
                  Focus areas
                </Typography>
                
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "17px", lg: "19px" },
                    lineHeight: 1.3,
                    color: "#000",
                  }}
                >
                  Spot the top areas of your health that need attention, including markers that could improve with treatment plans, if eligible.
                </Typography>
              </Box>
            </Box>

            {/* CARD 3 */}
            <Box
              sx={{
                width: "100%",
                height: { xs: "350px", sm: "400px", md: "450px", lg: "500px", xl: "550px" },
                borderRadius: { xs: "14px", md: "16px" },
                backgroundColor: "#ECEEEF",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={card3Image}
                alt=""
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "105%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* CARD 4 */}
            <Box
              sx={{
                width: "100%",
                height: { xs: "350px", sm: "400px", md: "450px", lg: "500px", xl: "550px" },
                borderRadius: { xs: "14px", md: "16px" },
                backgroundColor: "#ECEEEF",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={card4Image}
                alt=""
                sx={{
                  position: "absolute",
                  top: { xs: -10, md: -15, lg: -20 },
                  left: 0,
                  width: "110%",
                  height: "110%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* ================= FAQS SECTION ================= */}
        <Box
          sx={{
            maxWidth: "1000px",
            mx: "auto",
            px: { xs: 2, sm: 3, md: 4, lg: 6 },
            py: { xs: 6, sm: 8, md: 10, lg: 14 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "50px", lg: "60px", xl: "70px" },
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textAlign: "center",
              mb: 1,
              background: "linear-gradient(90deg, #747578 0%, #8B8D8E 30%, #00359E 70%, #003B9D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Health Insights & Preparation
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "17px", lg: "18px" },
              lineHeight: 1.5,
              color: "rgba(0,0,0,0.75)",
              textAlign: "center",
              maxWidth: { xs: "100%", sm: "500px", md: "600px" },
              mx: "auto",
              mb: { xs: 4, md: 6 },
            }}
          >
            Understanding how comprehensive health insights work and how to prepare for optimal wellness tracking.
          </Typography>

          <Box
            sx={{
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            {[
              {
                question: "What is the value of comprehensive health biomarker tracking?",
                answer: "Comprehensive biomarker tracking provides a data-driven approach to understanding your body's unique physiology. By monitoring key indicators across metabolic, hormonal, inflammatory, and nutritional domains, you gain actionable insights that go beyond basic health screenings. This holistic view helps identify subtle shifts before they become significant concerns, enabling proactive rather than reactive health management."
              },
              {
                question: "How should I prepare for optimal biomarker analysis?",
                answer: "For the most accurate baseline readings, maintain your regular lifestyle for 2-4 weeks before testing. Avoid extreme dietary changes, new supplements, or intensive exercise regimens during this period. Stay hydrated, get consistent sleep (7-9 hours), and manage stress through established routines. If you have specific health conditions or take medications, continue them as prescribed unless otherwise directed by your healthcare provider."
              },
              {
                question: "What biomarkers provide the most meaningful insights for preventive health?",
                answer: "Key biomarker categories include metabolic markers (fasting glucose, insulin sensitivity, lipid profiles), inflammatory markers (hs-CRP, homocysteine), hormone panels (thyroid function, cortisol rhythm, sex hormones), and nutrient status (vitamin D, B12, iron studies). Each provides different insights: metabolic markers assess energy utilization, inflammatory markers indicate systemic stress response, hormones regulate bodily functions, and nutrient levels reveal dietary adequacy."
              },
              {
                question: "How often should comprehensive health assessments be performed?",
                answer: "For most individuals, baseline testing followed by annual reassessment provides optimal tracking. Those with specific health goals, chronic conditions, or undergoing lifestyle interventions may benefit from quarterly monitoring. The frequency depends on your objectives: establishing baselines requires single testing, monitoring progress suggests 3-6 month intervals, and maintenance tracking typically occurs annually. Consistency in timing and conditions improves trend analysis."
              },
              {
                question: "What lifestyle factors most significantly impact biomarker readings?",
                answer: "Sleep quality and duration (affects cortisol, glucose), dietary patterns (impacts lipids, inflammation), physical activity levels (influences metabolic markers), stress management (affects hormonal balance), and hydration status (impacts kidney function, electrolyte balance) are primary influencers. Additionally, alcohol consumption, caffeine intake, and medication timing can significantly alter specific biomarker readings, emphasizing the importance of consistent pre-test conditions."
              },
              {
                question: "How do I interpret trends in biomarker data over time?",
                answer: "Focus on directional changes rather than single data points. Look for patterns across related biomarkers (e.g., improving insulin sensitivity alongside decreasing inflammatory markers). Consider clinical context—some fluctuations are normal while others may indicate underlying changes. The most valuable insights come from consistent measurement conditions and understanding how lifestyle modifications correlate with biomarker shifts over 3-12 month periods."
              },
              {
                question: "What's the difference between population norms and individual optimal ranges?",
                answer: "Population reference ranges represent statistical averages across broad demographics, while individual optimal ranges consider your unique physiology, genetics, and health objectives. A value within population norms may still be suboptimal for your specific context. The goal is establishing your personal baselines and tracking movement toward your individual health targets, recognizing that optimal wellness often differs from statistical averages."
              }
            ].map((faq, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  border: "1px solid #E6E7E8",
                  borderRadius: { xs: "10px", md: "12px" },
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#00359E",
                    boxShadow: "0 4px 12px rgba(0, 53, 158, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: "#F8F9FA",
                    "&:hover": {
                      backgroundColor: "#F0F2F5",
                    },
                  }}
                  onClick={() => {
                    const accordionId = `faq-${index}`;
                    const content = document.getElementById(accordionId);
                    if (content) {
                      content.style.display = content.style.display === "none" ? "block" : "none";
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "17px", md: "18px" },
                      fontWeight: 600,
                      color: "#00359E",
                      pr: 2,
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Box
                    sx={{
                      fontSize: { xs: "20px", md: "24px" },
                      color: "#00359E",
                      fontWeight: 300,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    +
                  </Box>
                </Box>

                <Box
                  id={`faq-${index}`}
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    display: "none",
                    backgroundColor: "#FFFFFF",
                    borderTop: "1px solid #E6E7E8",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "15px", md: "16px" },
                      lineHeight: 1.6,
                      color: "rgba(0,0,0,0.75)",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "13px", md: "14px" },
                color: "#747578",
                fontStyle: "italic",
                maxWidth: { xs: "100%", sm: "600px", md: "700px" },
                mx: "auto",
                lineHeight: 1.5,
              }}
            >
              Health insights are educational and informational. They are not medical advice, diagnosis, 
              or treatment. Always consult with qualified healthcare professionals for personalized 
              medical guidance. Optimal health involves multiple factors including genetics, lifestyle, 
              and environmental influences.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FullWidthCurvedBackground;