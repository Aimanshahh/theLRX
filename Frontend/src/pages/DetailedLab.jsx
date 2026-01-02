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
import stripCard5 from "../assets/detailedpages/img2.png";
import stripCard6 from "../assets/detailedpages/img2.png";
import stripCard7 from "../assets/detailedpages/img2.png";
import stripCard8 from "../assets/detailedpages/img2.png";

/* IMAGE-ONLY CARDS - USE DIFFERENT IMAGES OR SAME ONES */
import imageOnly1 from "../assets/detailedpages/img2.png";
import imageOnly2 from "../assets/detailedpages/img13.jpeg";
import imageOnly3 from "../assets/detailedpages/img2.png";
import imageOnly4 from "../assets/detailedpages/img2.png";

/* IMAGE-ONLY CARDS - USE DIFFERENT IMAGES OR SAME ONES */
import labsVerticalImg from "../assets/detailedpages/full1.jpeg"; // your full image

// below section jsx/* ADD THESE IMPORTS AT THE TOP WITH YOUR OTHER IMPORTS */
import trustCardImg1 from "../assets/detailedpages/WhatsApp Image 2026-01-02 at 2.56.00 AM.jpeg"; // your image for card 3 (image-only)
import trustCardImg2 from "../assets/detailedpages/img14.png"; // your image for card 5

// FULL WIDTH IMAGE AND TALL
import fullWidthTallImg from "../assets/detailedpages/fullwidthimage.jpeg";

// Add this import at the top with your other imports
import yourImage from "../assets/detailedpages/Black and Orange Modern Gradient Online Meeting Zoom Virtual Background (1500 x 800 px) (20).png";
// Add this import at the top
import card2Image from "../assets/detailedpages/img4.png";
import card3Image from "../assets/detailedpages/card3.png"; // Change path as needed
import card4Image from "../assets/detailedpages/card4.jpeg"; 

/* ================= CARD (ONLY FIXED PART) ================= */
const HimsCard = ({ img, title, desc, wide, bottomCentered }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: wide
          ? { xs: "360px", md: "420px" }
          : { xs: "300px", md: "360px" },
        borderRadius: wide ? "32px" : "28px",
        backgroundColor: "#ECEEEF",
        overflow: "hidden",
        p: { xs: 3, md: 4 },
      }}
    >
      {/* TEXT */}
      <Box sx={{ zIndex: 2, maxWidth: wide ? "55%" : "70%" }}>
        <Typography
          sx={{
            fontSize: { xs: "22px", md: "26px" },
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
            fontSize: "16px",
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
          bottom: bottomCentered ? "-70px" : 0,
          left: bottomCentered ? "50%" : wide ? "60%" : "50%",
          transform: "translateX(-50%)",
          height: bottomCentered
            ? wide
              ? "420px"
              : "340px"
            : wide
            ? "320px"
            : "230px",
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
        width: "380px",
        minWidth: "380px", // Force minimum
        height: "460px",
        minHeight: "460px", // Force minimum
        borderRadius: "28px",
        overflow: "hidden",
        flexShrink: 0,
        display: "block",
        /* We remove the backgroundImage from here */
        /* Add this to fix alignment issues */
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
          top: -23,
          left: -80,
          width: "150%",
          height: "110%",
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
          p: "28px",
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
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.05,
              mb: "10px",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: 1.5,
              opacity: 0.95,
              maxWidth: "280px",
            }}
          >
            {desc}
          </Typography>
        </Box>

        {/* BOTTOM */}
        <Box>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              opacity: 0.9,
              mb: "10px",
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
                      px: "12px",
                      py: "6px",
                      fontSize: "12px",
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

  // Use the same images as before
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

  // Card data for the strip
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

  // Touch events for mobile
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
        "&:active": {
          cursor: "grabbing",
        },
        // Hide scrollbar
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "8px", // MINIMAL SPACING
          paddingLeft: { xs: "48px", md: "120px" },
          paddingRight: "400px", // Right breathing room
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
            img={stripImages[index]} // Use the same images as before
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

  // Images for the image-only cards
  const imageOnlyCards = [
    imageOnly1,
    imageOnly2,
    imageOnly3,
    imageOnly4,
  ];

  // Text for below each card
  const cardTexts = [
    {
      title: "Advanced Analytics",
    },
    {
      title: "Personalized Insights",
    },
    {
      title: "Progress Tracking",
    },
    {
      title: "Expert Guidance",
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

  // Touch events for mobile
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
          "&:active": {
            cursor: "grabbing",
          },
          // Hide scrollbar
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "8px", // MINIMAL SPACING
            paddingLeft: { xs: "48px", md: "120px" },
            paddingRight: "400px", // Right breathing room
            width: "max-content",
            pb: 2,
          }}
        >
          {imageOnlyCards.map((imgSrc, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column", width: "380px", flexShrink: 0 }}>
              {/* CARD CONTAINER */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "460px",
                  borderRadius: "28px",
                  overflow: "hidden",
                  backgroundColor: "#cbb7a0",
                  mb: 2, // Space between card and text below
                }}
              >
                {/* PURE IMAGE - NO TEXT, NO OVERLAY */}
                <Box
                  component="img"
                  src={imgSrc}
                  alt={`Health visualization ${index + 1}`}
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>

              {/* TEXT BELOW CARD */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 1,
                    color: "#00359E",
                  }}
                >
                  {cardTexts[index].title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: 1.5,
                    color: "rgba(0,0,0,0.75)",
                  }}
                >
                  {cardTexts[index].desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      
      {/* CENTERED DISCLAIMER TEXT BELOW THE CARD STRIP */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Typography
          sx={{
            fontSize: "12px",
            color: "rgba(0,0,0,0.6)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
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

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          width: "100vw",
          height: { xs: "600px", sm: "650px", md: "520px", lg: "570px" },
          position: "relative",
          left: "50%",
          ml: "-50vw",
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          overflow: "hidden",
        }}
      >
        {/* Background */}
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

        {/* Foreground */}
    <Box
  sx={{
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    mx: "auto",
    height: "100%",
    px: { xs: 3, sm: 4, md: 6 },
    display: "grid",
    gridTemplateColumns: { md: "1fr 1.1fr" },
    alignItems: "stretch",
    gap: { md: 6 },
    pt: { xs: "120px", md: "80px" },
    height: "100%",
  }}
>
  {/* LEFT TEXT — MUCH HIGHER */}
  <Box 
    sx={{ 
      maxWidth: "520px", 
      color: "#fff",
      alignSelf: "flex-start",
      mt: { md: "100px" },
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: "34px", md: "62px" },
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
        fontSize: "15px",
        opacity: 0.9,
        lineHeight: 1.7,
        maxWidth: "460px",
      }}
    >
      Annual lab test of 130+ biomarkers, checking for indicators of
      1,000+ conditions*—all for just $499 per year.
    </Typography>
  </Box>

  {/* RIGHT GLASS CARDS — MUCH LOWER AT BOTTOM */}
  <Stack
    direction="row"
    spacing={2}
    sx={{
      display: { xs: "none", md: "flex" },
      justifyContent: "flex-end",
      pr: 2,
      alignSelf: "flex-end",
      mb: { md: "80px" },
      position: "relative",
      top: "60px",
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
          width: "200px",
          height: "145px",
          p: 2.5,
          borderRadius: "20px",

          /* 🔵 BLUE GLASSMORPHISM */
          background:
            "linear-gradient(180deg, rgba(80,160,200,0.35), rgba(40,120,160,0.25))",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.18)",

          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            opacity: 0.85,
            lineHeight: 1.4,
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
        sx={{ py: { xs: 6, md: 8 }, display: "flex", justifyContent: "center" }}
      >
        <Typography
          sx={{
            maxWidth: "980px",
            textAlign: "center",
            fontSize: { xs: "36px", md: "84px" },
            fontWeight: 530,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
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
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 3, pb: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: "6px",
            mb: "6px",
          }}
        >
          {/* CARD 1 → bottom-centered + bigger */}
          <HimsCard {...cardData[0]} bottomCentered />

          {/* CARD 2 → unchanged */}
          <HimsCard {...cardData[1]} />
        </Box>

        {/* CARD 3 → unchanged */}
        <HimsCard {...cardData[2]} wide />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: "6px",
            mt: "6px",
          }}
        >
          {/* CARD 4 → bottom-centered + bigger */}
          <HimsCard {...cardData[3]} bottomCentered />

          {/* CARD 5 → bottom-centered + bigger */}
          <HimsCard {...cardData[4]} bottomCentered />
        </Box>
      </Box>

      {/* ================= SECTION BELOW CARDS ================= */}
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
            columnGap: "88px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "44px", sm: "60px", md: "90px" },
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
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

          <Box sx={{ mt: { md: "88px" }, maxWidth: "460px" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 650, mb: 0 }}>
              Measure what matters.
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
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
        <Box sx={{ mt: { xs: 6, md: 7 }, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              gap: "8px",
              padding: "6px",
              backgroundColor: "#E6E7E8",
              borderRadius: "999px",
            }}
          >
            {pillsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  px: "16px",
                  py: "7px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  backgroundColor: index === 0 ? "#fff" : "transparent",
                  color: index === 0 ? "#000" : "rgba(0,0,0,0.8)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <br />
        <br />
        <br />

        {/* ================= FIRST SECTION: 8 CARDS WITH TEXT INSIDE (MINIMAL SPACING) ================= */}
        <ScrollableCardStrip />
      </Box>

      {/* ================= ANOTHER SECTION BELOW CARDS ================= */}
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 10, md: 14 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
            columnGap: "88px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "44px", sm: "60px", md: "90px" },
              fontWeight: 500,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
            }}
          >
            Unlock Your{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#8B8D8E 0%,#00359E 65%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Biological Age
            </Box>
          </Typography>

          <Box sx={{ mt: { md: "35px" }, maxWidth: "460px" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 600, mb: 0 }}>
              Know more to live more.
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: 1.2,
                color: "rgba(0,0,0,0.75)",
              }}
            >
              Your Biological Age reveals how fast your body is aging from what the calendar shows. Improving key markers linked to longevity could help you get aging on lock.
            </Typography>
          </Box>
        </Box>

        <br />
        <br />
        <br />

        {/* ================= SECOND SECTION: 4 CARDS WITH TEXT BELOW (MINIMAL SPACING) ================= */}
        <ImageOnlyCardStrip />
      </Box>

      {/* ================= NEW CENTERED HEADING SECTION ================= */}
<Box sx={{ display: "flex", justifyContent: "center", py: { xs: 8, md: 12 } }}>
  <Box sx={{ textAlign: "center", maxWidth: "900px", px: 3 }}>
    {/* FIRST LINE: "See what Labs" */}
    <Typography
      sx={{
        fontSize: { xs: "44px", sm: "60px", md: "90px" },
        fontWeight: 500,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
      }}
    >
      See what Labs
    </Typography>
    
    {/* SECOND LINE: "can reveal" with gradient */}
    <Typography
      sx={{
        fontSize: { xs: "44px", sm: "60px", md: "90px" },
        fontWeight: 500,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        mb: 3,
        background: "linear-gradient(90deg, #8B8D8E 0%, #00359E 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      can reveal
    </Typography>
    
    {/* THIRD LINE: "Labs for every part of life." - BLACK BOLD */}
    <Typography
      sx={{
        fontSize: "22px",
        fontWeight: 700,
        lineHeight: 1.3,
        mb: 2,
      }}
    >
      Labs for every part of life.
    </Typography>
    
    {/* FOURTH LINE: Normal text */}
    <Typography
      sx={{
        fontSize: "18px",
        lineHeight: 1.4,
        color: "rgba(0,0,0,0.75)",
        maxWidth: "600px",
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
    px: { xs: 3, md: 6 },
    pb: { xs: 10, md: 14 },
  }}
>
  <Box
    sx={{
      width: "100%",
      height: {
        xs: "520px",
        sm: "620px",
        md: "720px",
        lg: "820px",
      },
      borderRadius: "28px",
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
<Box sx={{ py: { xs: 10, md: 14 }, display: "flex", justifyContent: "center", bgcolor: "#fff" }}>
  <Box sx={{ textAlign: "center", maxWidth: "1000px", px: { xs: 3, md: 6 } }}>
    {/* FIRST LINE: "Holistic care" with your custom gradient */}
    <Typography
      sx={{
        fontSize: { xs: "32px", sm: "50px", md: "80px", lg: "100px" },
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

    {/* SECOND LINE: "happens here" - solid dark color */}
    <Typography
      sx={{
        fontSize: { xs: "42px", sm: "60px", md: "90px", lg: "110px" },
        fontWeight: 500,
        lineHeight: 1.0,
        letterSpacing: "-0.03em",
        color: "#000",
        mt: { xs: -2, md: -3 },
      }}
    >
      happens here
    </Typography>

    {/* SUBTEXT */}
    <Typography
      sx={{
        fontSize: { xs: "18px", md: "24px" },
        lineHeight: 1.0,
        color: "rgba(0,0,0,0.75)",
        maxWidth: "780px",
        mx: "auto",
        mt: { xs: 4, md: 6 },
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
    px: { xs: 2.5, md: 5 },
    py: { xs: 3, md: 5 },
    display: "grid",
    position: "relative",
  }}
>
  {/* TOP ROW – SMALLER WIDTH CARDS */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: "2px",
      position: "relative",
      zIndex: 2,
      mb: { xs: "-40px", md: "-70px" },
      width: { xs: "100%", md: "90%" },
      mx: "auto",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#eceeef",
        borderRadius: "20px",
        aspectRatio: "3 / 2",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        px: 1.5,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 18, md: 38 },
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
          fontSize: { xs: 12, md: 16 },
          fontWeight: 600,
          color: "#00359E",
          maxWidth: 160,
          mx: "auto",
        }}
      >
        customers trust care through LiquidRX<sup>1</sup>
      </Typography>
    </Box>

    <Box
      sx={{
        backgroundColor: "#eceeef",
        borderRadius: "20px",
        aspectRatio: "3 / 2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 1.5,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 18, md: 38 },
          fontWeight: 800,
          lineHeight: 1.1,
          color: "#00359E",
        }}
      >
        Doctor-trusted
        <br />
        treatment plans
      </Typography>
    </Box>
  </Box>

  {/* CENTER CARD - Also reduced width to match */}
  <Box
    sx={{
      width: { xs: "100%", md: "90%" },
      aspectRatio: "3 / 1.1",
      borderRadius: "20px",
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
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: "2px",
      position: "relative",
      zIndex: 2,
      mt: { xs: "-40px", md: "-70px" },
      width: { xs: "100%", md: "90%" },
      mx: "auto",
    }}
  >
    <Box
      sx={{
        backgroundColor: "#eceeef",
        borderRadius: "20px",
        aspectRatio: "3 / 2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 1.5,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 18, md: 38 },
          fontWeight: 800,
          lineHeight: 1.1,
          color: "#00359E",
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
        borderRadius: "20px",
        aspectRatio: "3 / 2",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        px: { xs: 3, md: 4 },
        pt: { xs: 3, md: 4 },
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
            fontSize: { xs: 20, md: 48 },
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
          height: "200%",
          width: "70%",
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
      mt: { xs: 4, md: 6 },
      textAlign: "center",
      px: { xs: 2, md: 3 },
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: 10, md: 12 },
        color: "#666",
        lineHeight: 1.4,
        maxWidth: "800px",
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
      xs: "70vh",
      sm: "80vh",
      md: "100vh",
      lg: "120vh",
    },
    position: "relative",
    left: "50%",
    marginLeft: "-50vw",
    overflow: "hidden",
    borderRadius: { xs: "0px", md: "32px" },
    mt: { xs: 8, md: 12 },
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
    py: { xs: 12, md: 16 },
    display: "flex",
    justifyContent: "center",
    bgcolor: "#fff",
  }}
>
  <Box sx={{ textAlign: "center", maxWidth: "1100px", px: { xs: 3, md: 6 } }}>
    
    {/* MAIN HEADLINE - "Get your Action Plan" */}
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "52px", sm: "70px", md: "100px", lg: "80px" },
        fontWeight: 600,
        lineHeight: 1.0,
        letterSpacing: "-0.03em",
        background: "linear-gradient(to right, #747578, #8B8D8E, #00359E, #003B9D)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        mb: { xs: 2, md: 3 },
      }}
    >
      Get your Action Plan
    </Typography>

    {/* SUBHEADLINE - "developed by doctors" */}
    <Typography
      sx={{
        fontSize: { xs: "38px", sm: "50px", md: "70px", lg: "60px" },
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

{/* 5 CARDs IMAGE */}
<Box
  sx={{
    width: "100%",
    maxWidth: "1000px",
    mx: "auto",
    px: { xs: 2, md: 3 },
  }}
>
  {/* TOP TALL CARD */}
  <Box
    sx={{
      width: "100%",
      height: "750px",
      maxWidth: "1000px",
      mx: "auto",
      borderRadius: "20px",
      backgroundColor: "#ECEEEF",
      overflow: "hidden",
      position: "relative",
      mb: 0.5,
    }}
  >
    {/* MUCH LARGER, BOTTOM-STARTING IMAGE */}
    <Box
      component="img"
      src={yourImage}
      alt=""
      sx={{
        position: "absolute",
        bottom: "-90px",
        left: "50%",
        transform: "translateX(-50%)",
        height: "900px",
        width: "auto",
        maxWidth: "1380px",
        objectFit: "contain",
      }}
    />
  </Box>

  {/* BOTTOM 2x2 GRID WITH INCREASED HEIGHT */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 0.5,
      maxWidth: "1000px",
      mx: "auto",
    }}
  >
    {/* CARD 1 - LEFT TOP CARD WITH TEXT */}
    <Box
      sx={{
        width: "100%",
        height: "550px",
        borderRadius: "16px",
        backgroundColor: "#ECEEEF",
        overflow: "hidden",
        position: "relative",
        p: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* FIRST LINE WITH GRADIENT */}
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "42px" },
          fontWeight: 770,
          lineHeight: 1,
          mb: 3,
          background: "linear-gradient(90deg, #8B8D8E 0%, #00359E 50%, #003B9D 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Your personalized action plan
      </Typography>

      {/* REST OF TEXT IN BLACK */}
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: 1,
          color: "#000",
          mb: 2,
        }}
      >
        helps guide next steps.
      </Typography>

      <Typography
        sx={{
          fontSize: "28px",
          lineHeight: 1,
          color: "#000",
          mb: 2,
        }}
      >
        Access lifestyle guidance and, if eligible, doctor-reviewed treatment options.
      </Typography>

      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: 1,
          color: "#000",
        }}
      >
        Support your progress ahead of your next test.
      </Typography>
    </Box>

    {/* CARD 2 - RIGHT TOP CARD WITH CENTERED IMAGE */}
    <Box
      sx={{
        width: "100%",
        height: "550px",
        borderRadius: "16px",
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
          height: "400px",
          width: "auto",
          maxWidth: "80%",
          objectFit: "contain",
        }}
      />

      {/* Left-aligned text container */}
      <Box
        sx={{
          position: "absolute",
          bottom: "24px",
          left: "24px",
          right: "24px",
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
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
            fontSize: "19px",
            lineHeight: 1.3,
            color: "#000",
          }}
        >
          Spot the top areas of your health that need attention, including markers that could improve with treatment plans, if eligible.
        </Typography>
      </Box>
    </Box>

    {/* CARD 3 - FULL HEIGHT IMAGE COVERING WHOLE CARD */}
    <Box
      sx={{
        width: "100%",
        height: "550px",
        borderRadius: "16px",
        backgroundColor: "#ECEEEF",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* FULL HEIGHT IMAGE THAT COVERS WHOLE CARD */}
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

    {/* CARD 4 - FULL HEIGHT IMAGE COVERING WHOLE CARD */}
    <Box
      sx={{
        width: "100%",
        height: "550px",
        borderRadius: "16px",
        backgroundColor: "#ECEEEF",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* FULL HEIGHT IMAGE THAT COVERS WHOLE CARD */}
      <Box
        component="img"
        src={card4Image}
        alt=""
        sx={{
          position: "absolute",
          top: -20,
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
    px: { xs: 3, md: 6 },
    py: { xs: 10, md: 14 },
  }}
>
  {/* HEADING WITH GRADIENT */}
  <Typography
    sx={{
      fontSize: { xs: "44px", sm: "60px", md: "70px" },
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

  {/* SUBTITLE */}
  <Typography
    sx={{
      fontSize: "18px",
      lineHeight: 1.5,
      color: "rgba(0,0,0,0.75)",
      textAlign: "center",
      maxWidth: "600px",
      mx: "auto",
      mb: 6,
    }}
  >
    Understanding how comprehensive health insights work and how to prepare for optimal wellness tracking.
  </Typography>

  {/* ACCORDION CONTAINER */}
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
          borderRadius: "12px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "#00359E",
            boxShadow: "0 4px 12px rgba(0, 53, 158, 0.1)",
          },
        }}
      >
        {/* QUESTION */}
        <Box
          sx={{
            p: 3,
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
              fontSize: "18px",
              fontWeight: 600,
              color: "#00359E",
              pr: 2,
            }}
          >
            {faq.question}
          </Typography>
          <Box
            sx={{
              fontSize: "24px",
              color: "#00359E",
              fontWeight: 300,
              transition: "transform 0.3s ease",
            }}
          >
            +
          </Box>
        </Box>

        {/* ANSWER - Hidden by default */}
        <Box
          id={`faq-${index}`}
          sx={{
            p: 3,
            display: "none",
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #E6E7E8",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
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

  {/* FOOTNOTE */}
  <Box sx={{ mt: 6, textAlign: "center" }}>
    <Typography
      sx={{
        fontSize: "14px",
        color: "#747578",
        fontStyle: "italic",
        maxWidth: "700px",
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