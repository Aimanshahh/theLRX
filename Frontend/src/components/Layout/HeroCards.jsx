import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme, useMediaQuery } from "@mui/material";

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

const topCards = [
  { title: "Have better sex", desc: "Popular", image: hair1, popular: true },
  { title: "Lose weight", image: weightloss1 },
  { title: "Regrow hair", image: hair2 },
  { title: "Boost testosterone", image: treat3 }
];

const bottomCards = [
  { title: "Tackle anxiety", image: weightloss2 },
  { title: "Get smooth skin", image: skin2 },
  { title: "Browse all treatments", browse: true }
];

export default function HeroCards() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverBottomIndex, setHoverBottomIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    textAlign: "left",
    height: isMobile ? "80px" : "90px",
    width: "100%",
    cursor: "pointer",
    position: "relative",
    transition: "0.35s",
    overflow: "hidden",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  };

  const iconBase = {
    position: "absolute",
    top: "12px",
    right: "12px",
    fontSize: isMobile ? "1.2rem" : "1.5rem",
    zIndex: 5,
    transition: "0.25s ease-in-out",
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
    zIndex: 6,
  };

  return (
    <Container fluid className="py-4 px-3 px-md-5">
      {/* TOP ROW - Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallMobile ? "1fr" : isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? "0.75rem" : "1rem",
          marginBottom: isMobile ? "0.75rem" : "0.4rem",
          width: "100%",
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
              whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -4 }}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {c.popular ? (
                <div style={{
                  ...badgeStyle,
                  background: hovered ? "#fff" : "rgba(0,0,0,0.05)",
                  color: hovered ? palette.blue : palette.black,
                }}>
                  Popular
                </div>
              ) : (
                <ChevronRightIcon
                  style={{
                    ...iconBase,
                    color: hovered ? "#fff" : palette.grey,
                  }}
                />
              )}

              <h5 style={{ 
                fontWeight: 850, 
                fontSize: isMobile ? "1rem" : "1.2rem", 
                marginBottom: "0.25rem", 
                maxWidth: isMobile ? "100%" : "65%" 
              }}>
                {c.title}
              </h5>

              {c.desc && (
                <p style={{
                  fontWeight: 650,
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  marginBottom: 0,
                  color: hovered ? "#f1f1f1" : palette.lightGrey,
                  maxWidth: isMobile ? "100%" : "65%",
                }}>
                  {c.desc}
                </p>
              )}

              {c.image && (
                <motion.img
                  src={c.image}
                  alt=""
                  animate={{ scale: hovered ? (isMobile ? 1.1 : 1.25) : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  style={{
                    width: isMobile ? "70px" : "95px",
                    height: isMobile ? "70px" : "95px",
                    objectFit: "contain",
                    position: "absolute",
                    right: isMobile ? "10px" : "20px",
                    bottom: isMobile ? "10px" : "10px",
                    zIndex: 2,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* BOTTOM ROW - Responsive Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isSmallMobile ? "1fr" : "repeat(3, 1fr)",
          gap: isMobile ? "0.75rem" : "1rem",
          width: "100%",
        }}
      >
        {bottomCards.map((c, i) => {
          const hovered = hoverBottomIndex === i;
          const isBrowseCard = i === 2 && c.browse;

          return (
            <motion.div
              key={i}
              style={{
                ...bottomCardStyle,
                background: hovered ? `linear-gradient(150deg, ${palette.blue}, ${palette.grey})` : "#fff",
                color: hovered ? "#fff" : palette.grey,
                minWidth: 0,
                paddingLeft: isBrowseCard && !isMobile ? "1rem" : isMobile ? "1rem" : "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -3 }}
              onMouseEnter={() => setHoverBottomIndex(i)}
              onMouseLeave={() => setHoverBottomIndex(null)}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <h5 style={{ 
                  fontWeight: 825, 
                  fontSize: isMobile ? "0.95rem" : "1.05rem", 
                  marginBottom: "0.2rem" 
                }}>
                  {c.title}
                </h5>

                {!c.browse && (
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: isMobile ? "0.8rem" : "0.85rem",
                      marginBottom: 0,
                      color: hovered ? "#f1f1f1" : palette.lightGrey,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.desc}
                  </p>
                )}
              </div>

              {/* Icon on the right */}
              {isBrowseCard ? (
                <SearchIcon
                  style={{
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                    color: hovered ? "#fff" : palette.grey,
                    marginLeft: "auto",
                  }}
                />
              ) : (
                <ChevronRightIcon
                  style={{
                    fontSize: isMobile ? "1.2rem" : "1.5rem",
                    color: hovered ? "#fff" : palette.grey,
                    marginLeft: "auto",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
}