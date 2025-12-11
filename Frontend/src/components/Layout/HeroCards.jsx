import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Corrected images
import weightloss1 from "../../assets/Herocards/pillremoved.png";
import Tackleanxiety from "../../assets/Herocards/virusremoved.png";
import Intimicy from "../../assets/Herocards/testtube.png";
import hair2 from "../../assets/Herocards/hairtreatment.png";
import skin2 from "../../assets/Herocards/skincare.png";
import testosterene from "../../assets/Herocards/bluepill.png";

// Menu data
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

const palette = {
  grey: "#747578",
  blue: "#00359E",
  white: "#fff",
  black: "#000",
};

const topCards = [
  { title: "Have better sex", desc: "Popular", image: Intimicy, popular: true, route: "/better-sex" },
  { title: "Lose weight", image: weightloss1, route: "/lose-weight" },
  { title: "Regrow hair", image: hair2, route: "/regrow-hair" },
  { title: "Boost testosterone", image: testosterene, route: "/boost-testosterone" }
];

const bottomCards = [
  { title: "Tackle anxiety", image: Tackleanxiety, route: "/tackle-anxiety" },
  { title: "Get smooth skin", image: skin2, route: "/smooth-skin" },
  { title: "Browse all treatments", browse: true }
];

export default function HeroCards() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverBottomIndex, setHoverBottomIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

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
    overflow: "hidden",
    boxSizing: "border-box",
  };

  const bottomCardStyle = {
    borderRadius: "22px",
    padding: isMobile ? "1rem" : "1rem 2rem",
    background: palette.white,
    border: `1px solid rgba(0,0,0,0.08)`,
    color: palette.grey,
    height: isMobile ? "130px" : "150px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "0.35s",
    position: "relative",
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
      {/* ================= SIDEBAR OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
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

      {/* ================= SIDEBAR ================= */}
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
        }}
      >
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
            style={{ cursor: "pointer", fontSize: "28px", color: "#000" }}
          />
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 20px" }}>
          {Object.entries(menuData).map(([category, items], i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  marginBottom: "16px",
                  color: "#000",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </h4>
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
                  <ChevronRightIcon style={{ marginLeft: "auto", fontSize: "20px", color: "#666" }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= CARDS ================= */}
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
                      width: "140px",
                      height: "140px",
                      objectFit: "contain",
                      position: "absolute",
                      right: "15px",
                      bottom: "15px",
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
                {c.image && (
                  <motion.img
                    src={c.image}
                    alt=""
                    animate={{ scale: hovered ? 1.1 : 1 }}
                    transition={{ stiffness: 200, damping: 12 }}
                    style={{
                      width: "110px",
                      height: "110px",
                      objectFit: "contain",
                      marginRight: "15px",
                      borderRadius: "12px",
                    }}
                  />
                )}

                <h5 style={{ fontWeight: 825, fontSize: "1.05rem" }}>
                  {c.title}
                </h5>

                {c.browse ? (
                  <SearchIcon style={{ fontSize: "1.7rem", marginLeft: "auto", color: hovered ? "#fff" : palette.grey }} />
                ) : (
                  <ChevronRightIcon style={{ fontSize: "1.7rem", marginLeft: "auto", color: hovered ? "#fff" : palette.grey }} />
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
