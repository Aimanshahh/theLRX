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

// IMAGES
import weightLossImg from "../../assets/Carousal/img1.jpg";
import fitnessImg from "../../assets/Carousal/img2.jpg";
import recedingHairImg from "../../assets/Carousal/img3.jpg";

// CAROUSEL DATA
const carouselData = [
  { title: "Learn more about weight loss", image: weightLossImg },
  { title: "How long does Minoxidil take to work?", image: fitnessImg },
  { title: "Hair regrowth that works", image: recedingHairImg },
];

// ISSUES CARDS
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
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const scrollSpeed = 30; // pixels per second for continuous motion

  // Responsive carousel settings
  const settings = {
    infinite: true,
    slidesToShow: isMobile ? 1.1 : isTablet ? 2.2 : 2.8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: scrollSpeed * 1000,
    cssEase: "linear",
    arrows: false,
    swipe: true,
    pauseOnHover: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 600, // Small mobile
        settings: {
          slidesToShow: 1.05,
        }
      },
      {
        breakpoint: 900, // Tablet
        settings: {
          slidesToShow: 1.8,
        }
      }
    ]
  };

  return (
    <Box sx={{ width: "100%", mt: 0, px: { xs: 1, sm: 2 } }}>
      {/* ---------------- HERO CAROUSEL ---------------- */}
      <Box sx={{ position: 'relative', mb: { xs: 2, sm: 3 } }}>
        <Slider {...settings}>
          {carouselData.concat(carouselData).map((item, idx) => (
            <Box key={idx} sx={{ px: { xs: 0.5, sm: 1 } }}>
              <Card
                sx={{
                  height: { xs: 180, sm: 250, md: 300, lg: 340 },
                  width: "100%",
                  borderRadius: { xs: "12px", sm: "16px" },
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    '&:hover': {
                      transform: "scale(1.05)"
                    }
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
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.25))",
                  }}
                />

                {/* Heading */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: { xs: 12, sm: 16 },
                    left: { xs: 12, sm: 16 },
                    fontSize: { 
                      xs: "0.9rem", 
                      sm: "1.1rem", 
                      md: "1.3rem", 
                      lg: "1.6rem" 
                    },
                    fontWeight: 700,
                    color: "#fff",
                    width: { xs: "70%", sm: "60%" },
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Explore Button */}
                <Button
                  sx={{
                    position: "absolute",
                    bottom: { xs: 12, sm: 16 },
                    right: { xs: 12, sm: 16 },
                    backgroundColor: "#fff",
                    textTransform: "none",
                    borderRadius: "50px",
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    px: { xs: 2, sm: 2.5 },
                    py: { xs: 0.5, sm: 1 },
                    fontWeight: 600,
                    minWidth: "auto",
                    "&:hover": { 
                      backgroundColor: "#f4f4f4",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore
                </Button>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* ---------------- GRADIENT TILES AUTO-SCROLL ---------------- */}
      <Box
        sx={{
          mt: 0,
          overflowX: "hidden",
          position: "relative",
          py: 0,
          px: { xs: 0.5, sm: 1 },
          '&:hover .scroll-tiles': {
            animationPlayState: 'paused'
          }
        }}
      >
        <Box
          className="scroll-tiles"
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 1.5 },
            animation: `scrollTiles ${scrollSpeed * 2}s linear infinite`,
            width: "max-content",
          }}
        >
          {issuesData.concat(issuesData).map((issue, i) => (
            <Card
              key={i}
              sx={{
                minWidth: { xs: 140, sm: 180, md: 200 },
                height: { xs: 70, sm: 90, md: 110 },
                borderRadius: { xs: "12px", sm: "16px", md: "18px" },
                display: "flex",
                alignItems: "flex-end",
                p: { xs: 1.5, sm: 2 },
                flexShrink: 0,
                background: `linear-gradient(120deg,
                  ${["#A43BFF", "#FF6F3C", "#A43BFF", "#8A39E1", "#E4537A"][i % 5]},
                  ${["#692BC7", "#D44724", "#692BC7", "#5B21B6", "#B02C5A"][i % 5]})`,
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                "&:hover": { 
                  transform: { xs: "translateY(-3px)", sm: "translateY(-6px)" },
                  boxShadow: "0 8px 16px rgba(0,0,0,0.3)"
                },
              }}
            >
              <Typography sx={{ 
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" }, 
                fontWeight: 800, 
                lineHeight: 1.2 
              }}>
                {issue.title}
              </Typography>
            </Card>
          ))}
        </Box>

        {/* Scroll Animation */}
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