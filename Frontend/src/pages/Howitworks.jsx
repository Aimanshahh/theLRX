import React, { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/LRXLOGOS/LOGO-1.png";
import { CheckCircle, User, Truck } from "lucide-react";

// Your image
import mainImg from "../assets/images/doctor1.jpg";

export default function Howitworks() {
  const navigate = useNavigate();

  // ---------------- Newsletter State ----------------
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleSubscribe = () => {
    if (!email) {
      setSnackbar({ open: true, message: "Please enter your email", severity: "error" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSnackbar({ open: true, message: "Please enter a valid email", severity: "error" });
      return;
    }

    console.log("Subscribed email:", email); // Front-end only for now
    setSnackbar({ open: true, message: "Thank you for subscribing!", severity: "success" });
    setEmail(""); // Reset input
  };

  return (
    <>
      {/* -------------------- TOP NAVBAR -------------------- */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60px", md: "75px" },
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0px 20px", md: "0px 45px" },
          borderBottom: "1px solid #E5E5E5",
        }}
      >
        {/* Logo */}
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" style={{ height: "55px", maxHeight: "100%" }} />
        </Box>

        {/* Navigation Items - Updated */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "15px", md: "30px" } }}>
          {[
            { label: "About Us", path: "/about-us" },
            { label: "FAQs", path: "/faqs" },
            { label: "Blog", path: "/blog" },
            { label: "Medical Experts", path: "/medical-experts" },
          ].map((item) => (
            <Typography
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                cursor: "pointer",
                fontSize: { xs: "12px", md: "15px" },
                fontWeight: 500,
                color: "#747578",
                transition: "0.3s",
                "&:hover": { color: "#003B9D", textDecoration: "underline" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* -------------------- BREADCRUMB -------------------- */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "26px",
          paddingBottom: "8px",
          fontSize: "16px",
          color: "#747578",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#747578", transition: "0.3s" }}
          onMouseOver={(e) => (e.target.style.color = "#003B9D")}
          onMouseOut={(e) => (e.target.style.color = "#747578")}
        >
          Home
        </Link>
        <span style={{ margin: "0 6px" }}>{">"}</span>
        <span style={{ color: "#747578" }}>How it Works</span>
      </div>

      {/* -------------------- HEADING -------------------- */}
      <Box sx={{ width: "100%", textAlign: "center", marginTop: { xs: "25px", md: "40px" }, fontFamily: "'Poppins', sans-serif" }}>
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Typography sx={{ fontSize: { xs: "32px", md: "56px" }, fontWeight: 700, color: "#00359E" }}>
            Easy. Private. Trusted.
          </Typography>
        </motion.div>
        <Typography sx={{ marginTop: "10px", fontSize: { xs: "16px", md: "22px" }, color: "#747578" }}>
          Get lab-grade health results from the comfort of your home
        </Typography>
        <Typography sx={{ marginTop: "1px", fontSize: { xs: "15px", md: "20px" }, color: "#747578" }}>
          Fast, accurate and backed by science
        </Typography>
      </Box>

      {/* -------------------- TWO COLUMN SECTION -------------------- */}
      <Box sx={{ width: "100%", marginTop: { xs: "40px", md: "70px" }, display: "flex", justifyContent: "center", padding: "0px 40px" }}>
        <Box sx={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, alignItems: "center", gap: "60px" }}>
          {/* Left */}
          <Box sx={{ position: "relative" }}>
            <motion.img
              src={mainImg}
              alt="Main visual"
              style={{ width: "100%", borderRadius: "26px", boxShadow: "0 12px 35px rgba(0,0,0,0.12)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                position: "absolute",
                bottom: "-25px",
                right: "-25px",
                background: "#fff",
                padding: "18px 22px",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                width: "230px",
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: 700, color: "#00359E" }}>Test Kits</Typography>
              <Typography sx={{ fontSize: "14px", color: "#666", mt: "6px" }}>
                Fast, accurate, and science-backed solutions.
              </Typography>
            </motion.div>
          </Box>

          {/* Right Steps */}
          <Box>
            {[
              { title: "Choose Your Product", desc: "Select a test kit or health treatment." },
              { title: "Add to Cart", desc: "Simple checkout with secure payment." },
              { title: "Complete Questionnaire", desc: "Quick medical form reviewed by clinicians." },
              { title: "We Process Your Order", desc: "Our medical team reviews and approves safely." },
              { title: "Receive Your Package", desc: "Delivered discreetly to your doorstep." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ display: "flex", gap: "18px", marginBottom: "28px", alignItems: "flex-start" }}
              >
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "#E9F1FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#00359E",
                  }}
                >
                  {index + 1}
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: 600, color: "#00359E" }}>{step.title}</Typography>
                  <Typography sx={{ fontSize: "15px", color: "#555", marginTop: "4px", maxWidth: "300px", lineHeight: 1.5 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>

      {/* -------------------- FULL-WIDTH CTA -------------------- */}
      <Box sx={{ width: "100%", marginTop: { xs: "90px", md: "120px" }, padding: { xs: "60px 20px", md: "100px 40px" }, background: "linear-gradient(135deg, #00359E 0%, #001F60 100%)", display: "flex", justifyContent: "center", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "900px", width: "100%" }}>
          <Typography sx={{ fontSize: { xs: "34px", md: "56px" }, fontWeight: 800, color: "white", lineHeight: 1.2 }}>
            Take control of your health.
          </Typography>
          <Typography sx={{ marginTop: "18px", fontSize: { xs: "16px", md: "20px" }, color: "rgba(255,255,255,0.85)", maxWidth: "700px", marginInline: "auto" }}>
            Get professional guidance, lab-grade testing, and science-backed treatments—delivered discreetly to your doorstep.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} style={{ marginTop: "35px" }}>
            <Box onClick={() => navigate("/")} sx={{ backgroundColor: "#FFFFFF", color: "#00359E", padding: "14px 32px", fontSize: "18px", fontWeight: 700, borderRadius: "12px", cursor: "pointer", display: "inline-block", boxShadow: "0 10px 25px rgba(0,0,0,0.25)", transition: "0.3s", "&:hover": { backgroundColor: "#F0F4FF" } }}>
              Explore
            </Box>
          </motion.div>
        </motion.div>
      </Box>

      {/* -------------------- FEATURE STRIP -------------------- */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: { xs: "60px", md: "90px" }, padding: { xs: "0 10px", md: "0 40px" } }}>
        <Box sx={{ display: "flex", gap: { xs: "16px", md: "40px" }, flexDirection: { xs: "column", md: "row" }, alignItems: "center" }}>
          {[
            { title: "Clinically Proven", icon: <CheckCircle size={50} color="#888888" /> },
            { title: "Expert Doctors", icon: <User size={50} color="#888888" /> },
            { title: "Fast Delivery", icon: <Truck size={50} color="#888888" /> },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Box sx={{ width: { xs: "250px", md: "300px" }, padding: { xs: "30px 20px", md: "36px 24px" }, borderRadius: "20px", backgroundColor: "#FFFFFF", textAlign: "center", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", cursor: "default", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", transition: "0.3s" }}>
                {item.icon}
                <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 700, color: "#00359E" }}>{item.title}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

  {/* -------------------- HOW IT WORKS SUMMARY -------------------- */}
<Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    mt: { xs: "80px", md: "120px" },
    px: { xs: "20px", md: "40px" },
    py: { xs: "60px", md: "80px" },
    background: "linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    style={{ maxWidth: "1100px", width: "100%" }}
  >
    {/* Heading */}
    <Typography
      sx={{
        fontSize: { xs: "28px", md: "36px" },
        fontWeight: 700,
        color: "#00359E",
        textAlign: "center",
      }}
    >
      How It Works
    </Typography>

    <Typography
      sx={{
        fontSize: { xs: "16px", md: "20px" },
        color: "#555555",
        textAlign: "center",
        mt: "12px",
        maxWidth: "700px",
        mx: "auto",
      }}
    >
      A simple, guided process designed to help you move forward with clarity and confidence.
    </Typography>

    {/* Steps */}
    <Box
      sx={{
        mt: "50px",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: "24px",
      }}
    >
      {[
        {
          step: "01",
          title: "Explore",
          desc: "Browse information and understand how our approach works for your needs.",
        },
        {
          step: "02",
          title: "Learn",
          desc: "Get clear, easy-to-understand guidance without complicated steps or jargon.",
        },
        {
          step: "03",
          title: "Take Action",
          desc: "Use the insights to make informed decisions at your own pace.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              p: "30px",
              height: "100%",
              borderRadius: "18px",
              background: "rgba(255, 255, 255, 0.85)",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#00359E",
                mb: "8px",
              }}
            >
              STEP {item.step}
            </Typography>

            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#111",
                mb: "10px",
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#555",
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>

    {/* CTA */}
    {/* <Box sx={{ textAlign: "center", mt: "50px" }}>
      <button
        style={{
          padding: "14px 34px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#00359E",
          color: "#fff",
          fontWeight: 700,
          fontSize: "16px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor = "#00296B")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "#00359E")
        }
      >
        Learn More
      </button>
    </Box> */}
  </motion.div>
</Box>

    </>
  );
}