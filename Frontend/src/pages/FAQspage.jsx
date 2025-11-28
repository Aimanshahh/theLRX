import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

// =======================
// IMPORT YOUR CARD IMAGES
// =======================
import basicsImg from "../assets/Carousal/img3.jpg";
import accountImg from "../assets/Carousal/img3.jpg";
import medicalImg from "../assets/Carousal/img3.jpg";
import shippingImg from "../assets/Carousal/img3.jpg";
import privacyImg from "../assets/Carousal/img3.jpg";
import troubleImg from "../assets/Carousal/img3.jpg";
import logo from "../assets/LRXLOGOS/LOGO-3.png";

// ==============================
// LOGO COMPONENT
// ==============================
const Logo = () => (
  <Box 
    sx={{ 
      width: "100%", 
      display: "flex", 
      justifyContent: "flex-start", 
      mt: 4, 
      mb: 4,
      opacity: 0,
      transform: "translateY(-20px)",
      animation: "fadeInDown 0.6s ease-out 0.2s forwards",
      position: "relative",
      zIndex: 1
    }}
  >
    <img
      src={logo}
      alt="logo"
      style={{ height: "55px", marginLeft: "22px", cursor: "pointer" }}
      onClick={() => window.location.href = "/"}
    />
  </Box>
);

// ==============================
// SEARCH BAR COMPONENT
// ==============================
const SearchBar = ({ allQuestions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFiltered([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const searchLower = searchTerm.toLowerCase();
    const results = allQuestions.filter(q => {
      const combinedText = [q.question, q.category, ...(q.keywords || [])].join(" ").toLowerCase();
      return combinedText.includes(searchLower);
    });

    setFiltered(results.slice(0, 6)); // limit to top 6 results
  }, [searchTerm, allQuestions]);

  const handleQuestionClick = (question) => {
    setSearchTerm("");
    setFiltered([]);
    setIsSearching(false);
    navigate(question.route); // navigate directly to question route
  };

  const highlightMatch = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, idx) =>
      regex.test(part) ? <span key={idx} style={{ backgroundColor: "#fffd54" }}>{part}</span> : part
    );
  };

  return (
    <Box 
      sx={{ 
        position: "relative", 
        width: { xs: "90%", sm: "80%", md: "700px" }, 
        mx: "auto", 
        mt: 5, 
        mb: 8,
        opacity: 0,
        transform: "translateY(30px)",
        animation: "fadeInUp 0.8s ease-out 0.6s forwards",
        zIndex: 1000 // High z-index for search container
      }}
    >
      <TextField
        fullWidth
        placeholder="How can we help you?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        variant="standard"
        InputProps={{
          sx: {
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            paddingLeft: "6px",
            "&::after": { borderBottom: "2px solid #000" },
            "&::before": { borderBottom: "1px solid #999" },
            transition: "all 0.3s ease",
            "&:focus-within": {
              transform: "scale(1.02)",
            }
          },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "black", fontSize: { xs: 22, sm: 24, md: 26 } }} />
            </InputAdornment>
          ),
        }}
      />

      {filtered.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "115%",
            left: 0,
            right: 0,
            bgcolor: "white",
            borderRadius: "10px",
            boxShadow: 5,
            overflow: "hidden",
            zIndex: 9999, // Very high z-index to ensure it appears above everything
            animation: "slideInDown 0.3s ease-out",
            border: "1px solid #e0e0e0"
          }}
        >
          {filtered.map((q, idx) => (
            <Box
              key={q.id}
              onClick={() => handleQuestionClick(q)}
              sx={{
                p: 2,
                cursor: "pointer",
                "&:hover": { 
                  bgcolor: "#f5f5f5",
                  transform: "translateX(5px)",
                  transition: "all 0.2s ease"
                },
                borderBottom: idx !== filtered.length - 1 ? "1px solid #eee" : "none",
                opacity: 0,
                animation: `fadeInUp 0.4s ease-out ${idx * 0.1}s forwards`,
                position: "relative",
                zIndex: 9999
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" } }}>
                {highlightMatch(q.question)}
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" }, color: "#555", mt: 0.3 }}>
                {q.category}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

// ==============================
// CATEGORY CARDS GRID
// ==============================
const CategoryCards = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { title: "The Basics", image: basicsImg, route: "/TheBasics" },
    { title: "About Your Visit", image: accountImg, route: "/AboutYourVisits" },
    { title: "Medical Care", image: medicalImg, route: "/Medicalcare" },
    { title: "Shipping", image: shippingImg, route: "/Shipping" },
    { title: "Privacy & Security", image: privacyImg, route: "/PrivacyAndSecurity" },
    { title: "Troubleshooting", image: troubleImg, route: "/Troubleshooting" },
  ];

  return (
    <Box
      sx={{
        mt: 6,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" },
        gap: { xs: "20px", sm: "35px", md: "55px" },
        width: { xs: "95%", sm: "90%", md: "85%" },
        mx: "auto",
        opacity: 0,
        animation: "fadeIn 0.8s ease-out 0.8s forwards",
        position: "relative",
        zIndex: 1 // Lower z-index for cards to stay behind search
      }}
    >
      {cards.map((card, index) => (
        <Box
          key={card.title}
          onClick={() => navigate(card.route)}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          sx={{
            cursor: "pointer",
            textAlign: "center",
            opacity: 0,
            transform: "translateY(40px)",
            animation: `fadeInUp 0.6s ease-out ${0.9 + (index * 0.1)}s forwards`,
            position: "relative",
            zIndex: 1 // Ensure cards stay behind search suggestions
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "250px", sm: "300px", md: "360px" },
              borderRadius: "12px",
              overflow: "hidden",
              transition: "all 0.4s ease",
              transform: hoveredCard === index ? "translateY(-8px) scale(1.05)" : "translateY(0) scale(1)",
              boxShadow: hoveredCard === index ? "0 20px 40px rgba(0,0,0,0.15)" : "0 8px 25px rgba(0,0,0,0.1)",
              "&:hover": {
                "& img": {
                  transform: "scale(1.1)",
                }
              },
              position: "relative",
              zIndex: 1
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                transition: "transform 0.4s ease"
              }}
            />
          </Box>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.45rem" },
              fontWeight: 650,
              color: "#111",
              transition: "all 0.3s ease",
              transform: hoveredCard === index ? "translateY(-2px)" : "translateY(0)",
              position: "relative",
              zIndex: 1
            }}
          >
            {card.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

// ==============================
// MAIN PAGE
// ==============================
export default function FAQspage() {
  const allQuestions = [
    {
      id: 1,
      question: "What is Hims/Hers?",
      category: "The Basics",
      keywords: ["what","hims","hers","definition","explanation","about"],
      route: "/TheBasics"
    },
    {
      id: 2,
      question: "How does consultation work?",
      category: "The Basics",
      keywords: ["how","consultation","process","work","steps"],
      route: "/TheBasics"
    },
    {
      id: 3,
      question: "Who are the providers?",
      category: "My Account",
      keywords: ["providers","doctors","physicians"],
      route: "/AboutYourVisits"
    },
    {
      id: 4,
      question: "Do you require insurance?",
      category: "Medical Care",
      keywords: ["insurance","payment"],
      route: "/Medicalcare"
    },
    {
      id: 5,
      question: "Are pharmacies FDA regulated?",
      category: "Medical Care",
      keywords: ["pharmacy","fda","regulated"],
      route: "/Medicalcare"
    },
    {
      id: 6,
      question: "How do I reset password?",
      category: "Troubleshooting",
      keywords: ["reset","password","forgot"],
      route: "/Troubleshooting"
    },
    {
      id: 7,
      question: "What are shipping options?",
      category: "Shipping",
      keywords: ["shipping","delivery"],
      route: "/Shipping"
    },
    {
      id: 8,
      question: "How to update my profile info?",
      category: "My Account",
      keywords: ["update","profile","edit"],
      route: "/AboutYourVisits"
    },
    {
      id: 9,
      question: "Is my data secure?",
      category: "Privacy & Security",
      keywords: ["data","secure","privacy"],
      route: "/PrivacyAndSecurity"
    },
  ];

  return (
    <Box sx={{ 
      width: "100%", 
      bgcolor: "#fafafa", 
      minHeight: "100vh", 
      pb: 14,
      position: "relative"
    }}>
      <Logo />

      {/* Heading */}
      <Box sx={{ 
        textAlign: "center", 
        mb: { xs: 3, sm: 4, md: 5 },
        opacity: 0,
        transform: "translateY(30px)",
        animation: "fadeInUp 0.8s ease-out 0.4s forwards",
        position: "relative",
        zIndex: 1
      }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
            color: "#000",
            mb: 2,
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 0.8s ease-out 0.5s forwards"
          }}
        >
          Help Center
        </Typography>

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            color: "#4a4a4a",
            opacity: 0,
            transform: "translateY(20px)",
            animation: "fadeInUp 0.8s ease-out 0.6s forwards"
          }}
        >
          Everything you need to know, all in one place.
        </Typography>
      </Box>

      {/* SEARCH BAR */}
      <SearchBar allQuestions={allQuestions} />

      {/* CATEGORY CARDS */}
      <CategoryCards />

      {/* ====== KEYFRAME ANIMATIONS ====== */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3);
            }
            50% {
              opacity: 1;
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Mobile optimizations */
          @media (max-width: 480px) {
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </Box>
  );
}