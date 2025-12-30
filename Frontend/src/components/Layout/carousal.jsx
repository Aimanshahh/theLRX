// CarousalWithCards.jsx
import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import weightLossImg from "../../assets/Carousal/img1.jpg";
import fitnessImg from "../../assets/Carousal/img2.jpg";
import recedingHairImg from "../../assets/Carousal/img5.jpg";

const carouselData = [
  { title: "Learn more about weight loss", image: weightLossImg },
  { title: "How long does Minoxidil take to work?", image: fitnessImg },
  { title: "Hair regrowth that works", image: recedingHairImg },
];

const issuesData = [
  { title: "Premature Ejaculation" },
  { title: "Hair Loss" },
  { title: "Erectile Dysfunction" },
  { title: "Delayed Ejaculation" },
  { title: "Low Testosterone" },
];

const CarousalWithCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // SUPER SLOW motion
  const scrollSpeed = 6; // (lower = slower)

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: scrollSpeed * 10000, // ✨ ultra slow glide
    cssEase: "linear",
    arrows: false,
    swipe: true,
    pauseOnHover: true,
    touchMove: true,
  };

  return (
    <Box sx={{ width: "100%", mt: 0, px: 0 }}>
      {/* ---------------- STATIC HEADING LIKE HIMS ---------------- */}
      <Box
        sx={{
          textAlign: "center",
          mb: { xs: 4, sm: 6, md: 8 },
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: {
  xs: "2.2rem",
  sm: "2.8rem",
  md: "3.4rem",
  lg: "4rem",
},
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            display: "inline-block",
          }}
        >
          <Box
            component="span"
            sx={{
              color: "#747578", // Dark grey shade for first half
            }}
          >
            Here's What You&nbsp;
          </Box>
          <br></br>
          <Box
            component="span"
            sx={{
              color: "#00359E", // Darker blue shade for second half
            }}
          >
            Need To Know?
          </Box>
        </Typography>
      </Box>

      {/* ---------------- HERO CAROUSEL ---------------- */}
      <Box sx={{ position: "relative", mb: { xs: 1, sm: 2 } }}>
        <Slider {...settings}>
          {carouselData.concat(carouselData).map((item, idx) => (
            <Box key={idx} sx={{ px: { xs: 0.3, sm: 0.4, md: 0.5 } }}>
              <Card
                sx={{
                  width: "100%",
                  height: {
                    xs: 330,
                    sm: 450,
                    md: 540,
                    lg: 600,
                  },
                  borderRadius: { xs: "12px", sm: "16px" },
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.04)" },
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.45))",
                  }}
                />

                {/* TEXT */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: { xs: 16, sm: 22, md: 30 },
                    left: { xs: 16, sm: 22, md: 30 },
                    fontSize: {
                      xs: "1.35rem",
                      sm: "1.8rem",
                      md: "2.2rem",
                      lg: "2.4rem",
                    },
                    fontWeight: 700,
                    color: "#fff",
                    width: { xs: "78%", sm: "65%", md: "55%" },
                    lineHeight: 1.12,
                    letterSpacing: "-0.5px",
                    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.title}
                </Typography>

                {/* BIGGER BUTTON */}
                <Button
                  sx={{
                    position: "absolute",
                    bottom: { xs: 16, sm: 22, md: 28 },
                    left: { xs: 16, sm: 22, md: 30 },
                    backgroundColor: "#fff",
                    borderRadius: "40px",
                    textTransform: "none",
                    fontSize: { xs: "0.85rem", sm: "1rem", md: "1.05rem" },
                    px: { xs: 3, sm: 3.8, md: 4.5 },
                    py: { xs: 0.9, sm: 1.1 },
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "#f4f4f4",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  Explore
                </Button>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* ---------------- TILES ---------------- */}
      <Box
        sx={{
          mt: 1,
          overflowX: "hidden",
          position: "relative",
          py: 0.5,
          px: { xs: 0.7, sm: 1 },
          "&:hover .scroll-tiles": { animationPlayState: "paused" },
        }}
      >
        <Box
          className="scroll-tiles"
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 1.4 },
            animation: `scrollTiles ${scrollSpeed * 4}s linear infinite`,
            width: "max-content",
          }}
        >
          {issuesData.concat(issuesData).map((issue, i) => (
            <Card
              key={i}
              sx={{
                minWidth: { xs: 145, sm: 175, md: 200 },
                height: { xs: 75, sm: 90, md: 110 },
                borderRadius: { xs: "12px", sm: "16px" },
                display: "flex",
                alignItems: "flex-end",
                p: { xs: 1.4, sm: 2 },
                flexShrink: 0,
                background: `linear-gradient(120deg,
                  ${["#A43BFF", "#FF6F3C", "#A43BFF", "#8A39E1", "#E4537A"][i % 5]},
                  ${["#692BC7", "#D44724", "#692BC7", "#5B21B6", "#B02C5A"][i % 5]}
                )`,
                color: "#fff",
                fontWeight: 700,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  fontWeight: 800,
                }}
              >
                {issue.title}
              </Typography>
            </Card>
          ))}
        </Box>

        <style>
          {`
            @keyframes scrollTiles {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default CarousalWithCards;