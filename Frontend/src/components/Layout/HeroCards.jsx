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
import hair2 from "../../assets/Herocards/herocard3.png";
import skin2 from "../../assets/Herocards/herocard4.png";
import testosterene from "../../assets/Herocards/Herocard1.png";

/* ================= SIDEBAR MENU ================= */
const menuData = {
  "Weight Loss": [
    { title: "Oral Semaglutide RDT", route: "/weight-loss/oral-semaglutide-rdt" },
    { title: "Oral Tirzepatide RDT", route: "/weight-loss/oral-tirzepatide-rdt" },
    { title: "Retatrutide Vial", route: "/weight-loss/retatrutide-vial" },
    { title: "Semaglutide Injectable", route: "/weight-loss/semaglutide-injectable" },
    { title: "Tirzepatide Injectable", route: "/weight-loss/tirzepatide-injectable" },
  ],

  "Peptides": [
    { title: "BPC-157", route: "/peptides/bpc-157" },
    { title: "CJC-1295 Ipamorelin", route: "/peptides/cjc-1295-ipamorelin" },
    { title: "GHK-CU", route: "/peptides/ghk-cu" },
    { title: "NAD+", route: "/peptides/nad" },
    { title: "NAD+ Injectable", route: "/peptides/nad-injectable" },
    { title: "PT-141", route: "/peptides/pt-141" },
    { title: "Sermorelin 20mg", route: "/peptides/sermorelin-20mg" },
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

/* ================= RIMO FORM URLs ================= */
const rimoUrls = {
  // Top cards URLs
  "Have better sex": "https://try.thelrx.com/intake/ed-fmmbgk", // Replace with actual URL
  "Lose weight": "https://try.thelrx.com/intake/wm-ltaaov", // Replace with actual URL
  "Regrow hair": "https://try.thelrx.com/intake/gh-0ce9zd", // Replace with actual URL
  "Boost testosterone": "https://try.thelrx.com/intake/cj-r201jp", // Your provided URL
  
  // Bottom cards URLs
  "Tackle anxiety": "https://try.thelrx.com/intake/mb-qdl7pe", // Replace with actual URL
  "Get smooth skin": "https://try.thelrx.com/intake/na-a4kt74", // Your provided URL
};

/* ================= OPEN RIMO FORM ================= */
const openRimoForm = (cardTitle) => {
  const url = rimoUrls[cardTitle];
  if (url) {
    // Open in new tab
    window.open(url, "_blank", "noopener,noreferrer");
    
    // OR open in popup window (uncomment if preferred)
    /*
    const width = 500;
    const height = 700;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    window.open(
      url,
      "RimoForm",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
    */
  }
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
    first: "Have better", 
    second: "sex", 
    image: Intimicy, 
    route: "/better-sex",
    fullTitle: "Have better sex"
  },
  { 
    first: "Lose", 
    second: "weight", 
    image: weightloss1, 
    route: "/lose-weight", 
    popular: true,
    fullTitle: "Lose weight"
  },
  { 
    first: "Regrow", 
    second: "hair", 
    image: hair2, 
    route: "/regrow-hair",
    fullTitle: "Regrow hair"
  },
  { 
    first: "Boost", 
    second: "testosterone", 
    image: testosterene, 
    route: "/boost-testosterone",
    fullTitle: "Boost testosterone"
  },
];

const bottomCards = [
  { 
    first: "Tackle", 
    second: "anxiety", 
    image: Tackleanxiety, 
    route: "/tackle-anxiety",
    fullTitle: "Tackle anxiety"
  },
  { 
    first: "Get smooth", 
    second: "skin", 
    image: skin2, 
    route: "/smooth-skin",
    fullTitle: "Get smooth skin"
  },
  { 
    title: "Browse all treatments", 
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
    } else {
      // Open specific Rimo form for each card
      openRimoForm(card.fullTitle);
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

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoverTop(i)}
                onMouseLeave={() => setHoverTop(null)}
                onClick={() => handleCardClick(c)}
                whileHover={{ y: -6, scale: 1.04 }}
                style={{
                  borderRadius: "22px",
                  padding: "22px",
                  height: isSmallMobile ? "220px" : "260px",
                  position: "relative",
                  cursor: "pointer",
                  overflow: "hidden",
                  background: hovered
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
                    right: "16px",
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
                        padding: "4px 8px",
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
                      color: hovered ? "#fff" : palette.greyLight,
                    }}
                  />
                </div>

                <motion.h3
                  animate={{ y: hovered ? -4 : 0 }}
                  transition={{ stiffness: 220, damping: 18 }}
                  style={{
                    fontSize: topTitleSize,
                    fontWeight: 700,
                    margin: 0,
                    color: hovered ? "#fff" : palette.greyDark,
                  }}
                >
                  {c.first}{" "}
                  <span
                    style={{
                      color: hovered ? "#fff" : palette.blueDark,
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
                  animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.08 : 1 }}
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

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setHoverBottom(i)}
                onMouseLeave={() => setHoverBottom(null)}
                onClick={() => handleCardClick(c)}
                whileHover={{ y: -4, scale: 1.03 }}
                style={{
                  borderRadius: "22px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  background: hovered
                    ? "linear-gradient(150deg, #00359E, #747578)"
                    : "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {c.image && (
                  <motion.img
                    src={c.image}
                    alt=""
                    animate={{ y: hovered ? -6 : 0 }}
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
                  animate={{ y: hovered ? -4 : 0 }}
                  transition={{ stiffness: 220, damping: 18 }}
                  style={{
                    fontSize: bottomTitleSize,
                    fontWeight: 700,
                    margin: 0,
                    color: hovered ? "#fff" : palette.greyDark,
                  }}
                >
                  {c.first ? (
                    <>
                      {c.first}{" "}
                      <span
                        style={{
                          color: hovered ? "#fff" : palette.blueDark,
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
                    color: hovered ? "#fff" : palette.greyLight,
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