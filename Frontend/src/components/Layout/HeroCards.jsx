import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

/* ================= IMAGES ================= */
import weightloss1 from "../../assets/Herocards/herocard2.png";
import Tackleanxiety from "../../assets/Herocards/MEDICINE1.png";
import Intimicy from "../../assets/Herocards/HeroCards.png";
import hair2 from "../../assets/Herocards/HEROCARD.png";
import skin2 from "../../assets/Herocards/herocard4.png";
import testosterene from "../../assets/Herocards/img1.png";

/* ================= SIDEBAR MENU ================= */
const menuData = {
  "Weight Loss": [
    { title: "Oral Semaglutide RDT", route: "/weight-loss/oral-semaglutide-rdt" },
    { title: "Oral Tirzepatide RDT", route: "/weight-loss/oral-tirzepatide-rdt" },
    { title: "Retatrutide Injectable", route: "/weight-loss/retatrutide-vial" },
    { title: "Semaglutide Injectable", route: "/weight-loss/semaglutide-injectable" },
    { title: "Tirzepatide Injectable", route: "/weight-loss/tirzepatide-injectable" },
  ],

  "Precision BioActives": [
    { title: "BPC-157", route: "/peptides/bpc-157" },
    { title: "CJC-1295 Ipamorelin", route: "/peptides/cjc-1295-ipamorelin" },
    { title: "GHK-CU", route: "/peptides/ghk-cu" },
    { title: "NAD+", route: "/peptides/nad" },
    { title: "NAD+ Injectable", route: "/peptides/NADinjectable" },
    { title: "PT-141", route: "/peptides/pt-141" },
    { title: "Sermorelin", route: "/peptides/sermorelin" },
    { title: "Vitamin B12", route: "/peptides/vitamin-b12" },
  ],

  "Sexual Health": [
    { title: "Drive Plus 6", route: "/sexual-health/drive-plus-6" },
    { title: "Drive Plus 12", route: "/sexual-health/drive-plus-12" },
    { title: "Drive Plus 18", route: "/sexual-health/drive-plus-18" },
    { title: "Epiq Chew 30", route: "/sexual-health/epiq-chew-30" },
    { title: "Lust 6", route: "/sexual-health/lust-6" },
    { title: "Lust 12", route: "/sexual-health/lust-12" },
    { title: "Lust 18", route: "/sexual-health/lust-18" },
    { title: "Mach 6", route: "/sexual-health/mach-6" },
    { title: "Mach 12", route: "/sexual-health/mach-12" },
    { title: "Mach 18", route: "/sexual-health/mach-18" },
    { title: "Overdrive Plus 6", route: "/sexual-health/overdrive-plus-6" },
    { title: "Overdrive Plus 12", route: "/sexual-health/overdrive-plus-12" },
    { title: "Passion 6", route: "/sexual-health/passion-6" },
    { title: "Passion 12", route: "/sexual-health/passion-12" },
    { title: "Passion 18", route: "/sexual-health/passion-18" },
    { title: "Redpill 6", route: "/sexual-health/redpill-6" },
    { title: "Redpill 12", route: "/sexual-health/redpill-12" },
  ],
};

/* ================= COLORS ================= */
const palette = {
  greyDark: "#747578",
  greyLight: "#8B8D8E",
  blueDark: "#00359E",
  white: "#fff",
  black: "#111",
};

/* ================= DATA ================= */
const topCards = [
  { 
    first: "Drop Body", 
    second: "Weight", 
    image: weightloss1, 
    popular: true,
    route: "/weight-loss-program"  // Added route
  },
  { 
    first: "Build Real", 
    second: "Muscle", 
    image: hair2,
    route: "/build-muscle"  // Added route
  },
  { 
    first: "Fix Your", 
    second: "Recovery", 
    image: testosterene,
    route: "/fix-your-recovery"  // Added route
  },
  { 
    first: "Stop Low", 
    second: "Energy", 
    image: Intimicy,
    route: "/stop-low-energy"  // Added route
  },
];

const bottomCards = [
  { 
    first: "Fix Your ", 
    second: "Skin", 
    image: skin2,
    route: "/fix-your-skin"  // Added route
  },
  { 
    first: "Want More", 
    second: "Sex", 
    image: Tackleanxiety,
    route: "/want-more-sex"  // Added route
  },
  { 
    title: "Explore All Treatments", 
    browse: true 
  },
];

export default function HeroCards() {
  const [hoverTop, setHoverTop] = useState(null);
  const [hoverBottom, setHoverBottom] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const topTitleSize = isSmallMobile ? "20px" : "22px";
  const bottomTitleSize = isSmallMobile ? "18px" : "20px";

  const handleCardClick = (card) => {
    if (card.browse) {
      setIsSidebarOpen(true);
    } else if (card.route) {
      navigate(card.route);  // Navigate to the card's route
    }
  };

  return (
    <>
      {/* ================= SIDEBAR OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 9998,
          }}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: isMobile ? "90%" : "420px",
          height: "100vh",
          background: palette.white,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-6px 0 24px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            height: "70px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 24px",
            borderBottom: "1px solid #eee",
          }}
        >
          <CloseIcon
            onClick={() => setIsSidebarOpen(false)}
            style={{ fontSize: "28px", cursor: "pointer", color: palette.black }}
          />
        </div>

        <div style={{ padding: "24px", overflowY: "auto" }}>
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "28px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>
                {category}
              </h4>

              {items.map((item) => (
                <div
                  key={item.title}
                  onClick={() => {
                    navigate(item.route);
                    setIsSidebarOpen(false);
                  }}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid #f0f0f0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.title}
                  <ChevronRightIcon style={{ marginLeft: "auto" }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= CARDS ================= */}
      <Container fluid className="py-4 px-3 px-md-5">
        {/* TOP ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallMobile
              ? "1fr"
              : isMobile
              ? "repeat(2,1fr)"
              : "repeat(4,1fr)",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          {topCards.map((c, i) => {
            const hovered = hoverTop === i;
            const isClickable = c.route || c.browse;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoverTop(i)}
                onMouseLeave={() => setHoverTop(null)}
                onClick={() => handleCardClick(c)}
                whileHover={isClickable ? { y: -6, scale: 1.04 } : {}}
                style={{
                  borderRadius: "22px",
                  padding: "22px",
                  height: isSmallMobile ? "220px" : "260px",
                  position: "relative",
                  cursor: isClickable ? "pointer" : "default",
                  overflow: "hidden",
                  background: hovered && isClickable
                    ? "linear-gradient(150deg, #00359E, #747578)"
                    : "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Top right actions */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "-17px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {c.popular && (
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: "#2DBE60",
                        color: "#fff",
                      }}
                    >
                      Popular
                    </span>
                  )}
                  <ChevronRightIcon
                    style={{
                      fontSize: "22px",
                      color: hovered && isClickable ? "#fff" : palette.greyLight,
                      opacity: isClickable ? 1 : 0,
                    }}
                  />
                </div>

                <motion.h3
                  animate={{ y: hovered && isClickable ? -4 : 0 }}
                  transition={{ stiffness: 220, damping: 18 }}
                  style={{
                    fontSize: topTitleSize,
                    fontWeight: 700,
                    margin: 0,
                    color: hovered && isClickable ? "#fff" : palette.greyDark,
                  }}
                >
                  {c.first}{" "}
                  <span
                    style={{
                      color: hovered && isClickable ? "#fff" : palette.blueDark,
                      fontWeight: 800,
                    }}
                  >
                    {c.second}
                  </span>
                </motion.h3>

                {/* IMAGE — TRUE CENTER */}
                <motion.img
                  src={c.image}
                  alt=""
                  animate={{ 
                    y: hovered && isClickable ? -8 : 0, 
                    scale: hovered && isClickable ? 1.08 : 1 
                  }}
                  transition={{ stiffness: 220, damping: 18 }}
                  style={{
                    width: isSmallMobile ? "120px" : "150px",
                    height: isSmallMobile ? "120px" : "150px",
                    margin: "auto",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM ROW */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(3,1fr)",
            gap: "16px",
          }}
        >
          {bottomCards.map((c, i) => {
            const hovered = hoverBottom === i;
            const isClickable = c.browse || c.route;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoverBottom(i)}
                onMouseLeave={() => setHoverBottom(null)}
                onClick={() => handleCardClick(c)}
                whileHover={isClickable ? { y: -4, scale: 1.03 } : {}}
                style={{
                  borderRadius: "22px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: isClickable ? "pointer" : "default",
                  background: hovered && isClickable
                    ? "linear-gradient(150deg, #00359E, #747578)"
                    : "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {c.image && (
                  <motion.img
                    src={c.image}
                    alt=""
                    animate={{ y: hovered && isClickable ? -6 : 0 }}
                    transition={{ stiffness: 220, damping: 18 }}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "16px",
                      objectFit: "contain",
                    }}
                  />
                )}

                <motion.h4
                  animate={{ y: hovered && isClickable ? -4 : 0 }}
                  transition={{ stiffness: 220, damping: 18 }}
                  style={{
                    fontSize: bottomTitleSize,
                    fontWeight: 700,
                    margin: 0,
                    color: hovered && isClickable ? "#fff" : palette.greyDark,
                  }}
                >
                  {c.first ? (
                    <>
                      {c.first}{" "}
                      <span
                        style={{
                          color: hovered && isClickable ? "#fff" : palette.blueDark,
                          fontWeight: 800,
                        }}
                      >
                        {c.second}
                      </span>
                    </>
                  ) : (
                    c.title
                  )}
                </motion.h4>

                <ChevronRightIcon
                  style={{
                    marginLeft: "auto",
                    fontSize: "24px",
                    color: hovered && isClickable ? "#fff" : palette.greyLight,
                    opacity: isClickable ? 1 : 0,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </>
  );
}