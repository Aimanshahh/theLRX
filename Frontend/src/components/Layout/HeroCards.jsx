import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import weightloss1 from "../../assets/Herocards/Weightloss1.png";
import weightloss2 from "../../assets/Herocards/Weightloss2.png";
import hair1 from "../../assets/Herocards/hairtreatment.png";
import hair2 from "../../assets/Herocards/hairtreatment2.png";
import skin1 from "../../assets/Herocards/treatment1.png";
import skin2 from "../../assets/Herocards/treatment2.png";
import treat3 from "../../assets/Herocards/treatment3.png";

const palette = {
  grey: "#747578",
  lightGrey: "#8B8D8E",
  blue: "#00359E",
  white: "#fff",
  black: "#000",
};

// Treatment List (Sidebar)
const allTreatments = [
  "Weight Loss",
  "Hair Loss",
  "Skin Treatments",
  "Testosterone Boost",
  "Anxiety",
  "Sleep Issues",
  "Sexual Health",
  "Anti-Aging",
  "Acne Care",
];

const topCards = [
  { title: "Have better sex", desc: "Popular", image: hair1, popular: true, route: "/better-sex" },
  { title: "Lose weight", image: weightloss1, route: "/lose-weight" },
  { title: "Regrow hair", image: hair2, route: "/regrow-hair" },
  { title: "Boost testosterone", image: treat3, route: "/boost-testosterone" }
];

const bottomCards = [
  { title: "Tackle anxiety", image: weightloss2, route: "/tackle-anxiety" },
  { title: "Get smooth skin", image: skin2, route: "/smooth-skin" },
  { title: "Browse all treatments", browse: true }
];

// Updated Menu Data Structure with requested categories
const menuData = {
  "Weight Loss": [
    { title: "Weight Loss Program", route: "/treatment/weight-loss" },
    { title: "Fat Burner Treatments", route: "/treatment/fat-burner" },
    { title: "Metabolism Boost", route: "/treatment/metabolism-boost" },
    { title: "Diet Consultation", route: "/treatment/diet-consultation" },
  ],
  "Mental Health": [
    { title: "Anxiety Treatment", route: "/treatment/anxiety" },
    { title: "Sleep Issues", route: "/treatment/sleep-issues" },
    { title: "Stress Management", route: "/treatment/stress-management" },
    { title: "Depression Support", route: "/treatment/depression" },
  ],
  "Skin": [
    { title: "Acne Care", route: "/treatment/acne-care" },
    { title: "Anti-Aging Treatments", route: "/treatment/anti-aging" },
    { title: "Skin Rejuvenation", route: "/treatment/skin-rejuvenation" },
    { title: "Hyperpigmentation", route: "/treatment/hyperpigmentation" },
  ],
  "Sexual Health": [
    { title: "Sexual Health Consultation", route: "/treatment/sexual-health" },
    { title: "Testosterone Boost", route: "/treatment/testosterone-boost" },
    { title: "Erectile Dysfunction", route: "/treatment/erectile-dysfunction" },
    { title: "Libido Enhancement", route: "/treatment/libido-enhancement" },
  ],
  "Hair": [
    { title: "Hair Loss Treatment", route: "/treatment/hair-loss" },
    { title: "Hair Regrowth", route: "/treatment/hair-regrowth" },
    { title: "Scalp Treatment", route: "/treatment/scalp-treatment" },
    { title: "Hair Thickening", route: "/treatment/hair-thickening" },
  ]
};

// ---------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------
export default function HeroCards() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverBottomIndex, setHoverBottomIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // Styles...
  const baseCardStyle = {
    borderRadius: "22px",
    padding: isMobile ? "1.5rem 1rem" : "2rem 2rem",
    background: palette.white,
    border: `1px solid rgba(0,0,0,0.08)`,
    color: palette.grey,
    textAlign: "left",
    height: isMobile ? "220px" : "260px",
    width: "100%",
    cursor: "pointer",
    position: "relative",
    transition: "0.35s",
    overflow: "hidden",
    boxSizing: "border-box",
  };

  const bottomCardStyle = {
    borderRadius: "22px",
    padding: isMobile ? "1rem" : "1rem 2rem",
    background: palette.white,
    border: `1px solid rgba(0,0,0,0.08)`,
    color: palette.grey,
    height: isMobile ? "80px" : "90px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "0.35s",
  };

  const iconBase = {
    position: "absolute",
    top: "12px",
    right: "12px",
    fontSize: isMobile ? "1.2rem" : "1.5rem",
  };

  const badgeStyle = {
    ...iconBase,
    background: "rgba(0,0,0,0.05)",
    color: palette.blue,
    fontSize: isMobile ? "0.6rem" : "0.65rem",
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: "12px",
  };

  return (
    <>
      {/* ================================ */}
      {/* HIMS STYLE MEGA DRAWER OVERLAY */}
      {/* ================================ */}
      {isSidebarOpen && (
        <div
          onClick={() => {
            setActiveCategory(null);
            setIsSidebarOpen(false);
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.45)",
            zIndex: 9998,
          }}
        />
      )}

      {/* ================================ */}
      {/* HIMS STYLE MEGA DRAWER */}
      {/* ================================ */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.35 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: isMobile ? "90%" : "420px",
          background: "#fff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "-5px 0 25px rgba(0, 0, 0, 0.15)",
          willChange: "transform",
        }}
      >
        {/* ================= HEADER ================= */}
        <div
          style={{
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 24px",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <CloseIcon
            onClick={() => setIsSidebarOpen(false)}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: "#000",
              fontWeight: 300,
            }}
          />
        </div>

        {/* ================= BODY ================= */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 20px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {Object.entries(menuData).map(([category, items], i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              
              {/* MAIN CATEGORY HEADING */}
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  marginBottom: "16px",
                  color: "#000",
                  letterSpacing: "-0.2px",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </h4>

              {/* SUB CATEGORIES */}
              {items.map((item, j) => (
                <div
                  key={j}
                  onClick={() => {
                    navigate(item.route);
                    setIsSidebarOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "15px 0",
                    fontSize: "15px",
                    fontWeight: 500,
                    borderBottom: "1px solid #f0f0f0",
                    cursor: "pointer",
                    color: "#333",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f8f8";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#333";
                  }}
                >
                  {item.title}
                  <ChevronRightIcon
                    style={{
                      marginLeft: "auto",
                      fontSize: "20px",
                      color: "#666",
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ----------------------------------- */}
      {/* CARDS SECTION */}
      {/* ----------------------------------- */}
      <Container fluid className="py-4 px-3 px-md-5" style={{ position: "relative", zIndex: 1 }}>
        
        {/* TOP ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallMobile ? "1fr" : isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          {topCards.map((c, i) => {
            const hovered = hoverIndex === i;
            return (
              <motion.div
                key={i}
                style={{
                  ...baseCardStyle,
                  background: hovered ? `linear-gradient(150deg, ${palette.blue}, ${palette.grey})` : "#fff",
                  color: hovered ? "#fff" : palette.grey,
                }}
                whileHover={{ scale: isMobile ? 1.02 : 1.05, y: -4 }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => navigate(c.route)}
              >
                {c.popular ? (
                  <div style={{
                    ...badgeStyle,
                    background: hovered ? "#fff" : "rgba(0,0,0,0.05)",
                    color: hovered ? palette.blue : palette.black,
                  }}>Popular</div>
                ) : (
                  <ChevronRightIcon style={{ ...iconBase, color: hovered ? "#fff" : palette.grey }} />
                )}

                <h5 style={{ fontWeight: 850, fontSize: "1.2rem", marginBottom: "0.5rem" }}>{c.title}</h5>
                {c.desc && !hovered && (
                  <p style={{ fontSize: "0.85rem", margin: 0, opacity: 0.8 }}>{c.desc}</p>
                )}

                {c.image && (
                  <motion.img
                    src={c.image}
                    alt=""
                    animate={{ scale: hovered ? 1.25 : 1 }}
                    transition={{ stiffness: 200, damping: 12 }}
                    style={{
                      width: "95px",
                      height: "95px",
                      objectFit: "contain",
                      position: "absolute",
                      right: "20px",
                      bottom: "10px",
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          {bottomCards.map((c, i) => {
            const hovered = hoverBottomIndex === i;

            return (
              <motion.div
                key={i}
                style={{
                  ...bottomCardStyle,
                  background: hovered ? `linear-gradient(150deg, ${palette.blue}, ${palette.grey})` : "#fff",
                  color: hovered ? "#fff" : palette.grey,
                }}
                whileHover={{ scale: 1.03, y: -3 }}
                onMouseEnter={() => setHoverBottomIndex(i)}
                onMouseLeave={() => setHoverBottomIndex(null)}
                onClick={() =>
                  c.browse ? setIsSidebarOpen(true) : navigate(c.route)
                }
              >
                <h5 style={{ fontWeight: 825, fontSize: "1.05rem" }}>
                  {c.title}
                </h5>

                {c.browse ? (
                  <SearchIcon style={{ 
                    fontSize: "1.5rem", 
                    marginLeft: "auto",
                    color: hovered ? "#fff" : palette.grey 
                  }} />
                ) : (
                  <ChevronRightIcon style={{ 
                    fontSize: "1.5rem", 
                    marginLeft: "auto",
                    color: hovered ? "#fff" : palette.grey 
                  }} />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </>
  );
}