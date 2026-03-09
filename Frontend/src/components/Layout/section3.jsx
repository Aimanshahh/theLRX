import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/section/img2.png";
import phoneImg from "../../assets/medical experts/img1removed.png";
import foodImg from "../../assets/images/card6-removebg-preview.png";
import myVideo from '../../assets/Videos/video2.mp4';

/* ================= SIMPLE WEIGHT LOSS SIDEBAR MENU ================= */
const weightLossMenuData = [
  { title: "Oral Semaglutide RDT", route: "/weight-loss/oral-semaglutide-rdt" },
  { title: "Oral Tirzepatide RDT", route: "/weight-loss/oral-tirzepatide-rdt" },
  { title: "Retatrutide Injectable", route: "/weight-loss/retatrutide-vial" },
  { title: "Semaglutide Injectable", route: "/weight-loss/semaglutide-injectable" },
  { title: "Tirzepatide Injectable", route: "/weight-loss/tirzepatide-injectable" },
];

export default function HeroTextSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* ================= SIDEBAR OVERLAY ================= */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 9998,
          }}
        />
      )}

      {/* ================= SIMPLE SIDEBAR ================= */}
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
          background: "#fff",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-6px 0 24px rgba(0,0,0,0.15)",
        }}
      >
        {/* Sidebar Header */}
        <div
          style={{
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
            borderBottom: "1px solid #eee",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111",
            }}
          >
            Weight Loss Treatments
          </Typography>
          <CloseIcon
            onClick={closeSidebar}
            style={{ 
              fontSize: "28px", 
              cursor: "pointer", 
              color: "#111",
            }}
          />
        </div>

        {/* Sidebar Content */}
        <div style={{ padding: "24px", overflowY: "auto" }}>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#747578",
              marginBottom: "24px",
              lineHeight: 1.5,
            }}
          >
            Browse our FDA-compliant weight loss treatments. All require medical evaluation.
          </Typography>

          {weightLossMenuData.map((item, index) => (
            <div
              key={item.title}
              onClick={() => {
                navigate(item.route);
                closeSidebar();
              }}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid #f0f0f0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: "#333",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              {item.title}
              <ChevronRightIcon style={{ marginLeft: "auto", color: "#8B8D8E" }} />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          width: "100%",
          minHeight: "auto",
          backgroundColor: "#1F2F4A",
          display: "flex",
          borderRadius: 7,
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 2, sm: 3, md: 4, lg: 6 },
          textAlign: "center",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* TEXT SECTION */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            mt: { xs: "-5px", sm: "-8px", md: "-10px", lg: "-12px" },
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: { 
                xs: "22px", 
                sm: "28px", 
                md: "36px", 
                lg: "48px" 
              },
              fontWeight: { xs: 500, md: 500 },
              lineHeight: { xs: 1.1, md: 1.2 },
              maxWidth: { xs: "90%", sm: "85%", md: "800px" },
              px: { xs: 2, sm: 3 },
              mx: "auto",
              position: "relative",
              mb: { xs: 2, sm: 3, md: 4, lg: 5 },
            }}
          >
            Access FDA-Compliant
            <br />
            Doctor-Prescribed Weight Loss Solutions
          </Typography>
        </Box>

        {/* HERO IMAGE */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            mt: { xs: 0, sm: -2, md: -4, lg: -6 },
          }}
        >
          <Box
            component="img"
            src={heroImage}
            alt="Weight loss medication"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "95%", md: "1200px" },
              maxHeight: { 
                xs: "280px", 
                sm: "350px", 
                md: "440px", 
                lg: "560px" 
              },
              objectFit: "contain",
              px: { xs: 1, sm: 2 },
            }}
          />
        </Box>

        {/* BUTTONS - ALL MODIFIED TO OPEN SIDEBAR */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 2 },
            mt: { xs: -6, sm: -8, md: -10, lg: -14 },
            zIndex: 4,
            px: { xs: 2, sm: 3 },
            width: { xs: "90%", sm: "auto" },
            position: "relative",
          }}
        >
          <Button
            onClick={openSidebar}
            sx={{
              px: { xs: 3, sm: 4, md: 4 },
              py: { xs: 1, sm: 1.25, md: 1.5 },
              borderRadius: "999px",
              backgroundColor: "#8B8D8E",
              color: "#f2f2f2",
              fontWeight: 700,
              textTransform: "none",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.22)"},
            }}
          >
            Start Your Journey
          </Button>
          <Button
            onClick={openSidebar}
            sx={{
              px: { xs: 3, sm: 4, md: 4 },
              py: { xs: 1, sm: 1.25, md: 1.5 },
              borderRadius: "999px",
              color: "#ffffff",
              fontWeight: 500,
              textTransform: "none",
              background: "#8B8D8E",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              "&:hover": { background: "rgba(255, 255, 255, 0.22)" },
            }}
          >
            Explore Treatments
          </Button>
        </Box>

        {/* CARDS SECTION */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { 
              xs: "95%", 
              sm: "90%", 
              md: "100%", 
              lg: "1100px" 
            },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, sm: 3, md: 2, lg: 1.5 },
            mt: { xs: 2, sm: 3, md: 4, lg: 0.5 },
            px: { xs: 2, sm: 3, md: 4, lg: 0 },
            zIndex: 2,
            position: "relative",
          }}
        >
          {/* CARD 1 */}
          <Box
            sx={{
              flex: 1,
              minHeight: { 
                xs: "420px", 
                sm: "480px", 
                md: "550px", 
                lg: "650px" 
              },
              borderRadius: { xs: "16px", sm: "18px", md: "20px" },
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              pt: { xs: 2, sm: 2.5, md: 3 },
              px: { xs: 1.5, sm: 2, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontSize: { 
                  xs: "32px", 
                  sm: "38px", 
                  md: "46px", 
                  lg: "64px" 
                },
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 0.95,
                textAlign: "center",
              }}
            >
              Personalized Medical
            </Typography>

            <Box
              component="img"
              src={phoneImg}
              alt="telemedicine consultation"
              sx={{
                width: { 
                  xs: "250px", 
                  sm: "280px", 
                  md: "350px", 
                  lg: "420px" 
                },
                mt: { 
                  xs: "-20px", 
                  sm: "-25px", 
                  md: "-30px", 
                  lg: "-95px" 
                },
                objectFit: "contain",
              }}
            />

            <Typography
              sx={{
                fontSize: { 
                  xs: "32px", 
                  sm: "38px", 
                  md: "42px", 
                  lg: "54px" 
                },
                fontWeight: 550,
                color: "#8B8D8E",
                lineHeight: 1,
                mt: { xs: 1.5, sm: 2, md: 2.5, lg: -4 },
                textAlign: "center",
              }}
            >
              Weight Loss Plans
            </Typography>

            <Typography
              sx={{
                mt: { xs: 1.5, sm: 2, md: 2.5 },
                fontSize: { 
                  xs: "12px", 
                  sm: "13px", 
                  md: "14px", 
                  lg: "16px" 
                },
                maxWidth: { xs: "90%", sm: "85%", md: "360px" },
                lineHeight: 1.5,
                textAlign: "center",
                color: "#ffffff",
                px: { xs: 1, sm: 0 },
              }}
            >
              Receive a customized medical weight loss plan developed by licensed healthcare providers, with FDA-approved medications and continuous provider monitoring.
            </Typography>

            <Button
              onClick={openSidebar}
              sx={{
                px: { xs: 3, sm: 3.5, md: 4 },
                py: { xs: 1, sm: 1.2, md: 1.3 },
                borderRadius: "999px",
                backgroundColor: "#8B8D8E",
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "none",
                mt: { xs: 2, sm: 2.5, md: 2 },
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
                "&:hover": { backgroundColor: "#003B9D" },
                zIndex: 2,
              }}
            >
              Begin Medical Assessment
            </Button>
          </Box>

          {/* CARD 2 */}
          <Box
            sx={{
              flex: 1,
              minHeight: { 
                xs: "400px", 
                sm: "450px", 
                md: "520px", 
                lg: "600px" 
              },
              borderRadius: { xs: "16px", sm: "18px", md: "20px" },
              background: "rgba(255, 255, 255, 0.12)",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden",
              pt: { xs: 3, sm: 3.5, md: 4, lg: 6 },
              px: { xs: 1.5, sm: 2, md: 2 },
            }}
          >
            <Typography
              sx={{
                fontSize: { 
                  xs: "22px", 
                  sm: "24px", 
                  md: "28px", 
                  lg: "48px" 
                },
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.05,
              }}
            >
              Comprehensive
            </Typography>

            <Typography
              sx={{
                fontSize: { 
                  xs: "28px", 
                  sm: "32px", 
                  md: "36px", 
                  lg: "38px" 
                },
                fontWeight: 600,
                color: "#8B8D8E",
                lineHeight: 1.25,
                mt: { xs: -0.25, sm: -0.5 },
              }}
            >
              Wellness Support
            </Typography>

            <Typography
              sx={{
                mt: { xs: 1.5, sm: 1.75, md: 2 },
                fontSize: { 
                  xs: "13px", 
                  sm: "14px", 
                  md: "15px", 
                  lg: "17px" 
                },
                maxWidth: { xs: "90%", sm: "85%", md: "360px" },
                lineHeight: 1.4,
                textAlign: "center",
                px: { xs: 1, sm: 0 },
              }}
            >
              <Box component="span" sx={{ color: "#FFFFFF" }}>
                Access nutritional guidance, healthy recipes, and lifestyle coaching
              </Box>{" "}
              <Box component="span" sx={{ color: "#8B8D8E" }}>
                alongside your medical treatment for holistic weight management.
              </Box>
            </Typography>

            <Button
              onClick={openSidebar}
              sx={{
                px: { xs: 3, sm: 3.5, md: 4 },
                py: { xs: 1, sm: 1.2, md: 1.3 },
                borderRadius: "999px",
                backgroundColor: "#8B8D8E",
                color: "#ffffff",
                fontWeight: 500,
                textTransform: "none",
                mt: { xs: 2, sm: 2.5, md: 3 },
                fontSize: { xs: "13px", sm: "14px", md: "15px" },
                "&:hover": { backgroundColor: "#003B9D" },
                zIndex: 2,
              }}
            >
              Start Wellness Program
            </Button>

            <Box
              component="img"
              src={foodImg}
              alt="healthy nutrition"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mt: { xs: 2, sm: 2.5, md: 3 },
                flex: 1,
                position: "relative",
              }}
            />
          </Box>
        </Box>

        {/* HUGE ROUND-CORNERED CARD */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { 
              xs: "95%", 
              sm: "90%", 
              md: "95%", 
              lg: "1100px" 
            },
            minHeight: { 
              xs: "500px", 
              sm: "600px", 
              md: "750px", 
              lg: "900px" 
            },
            borderRadius: { xs: "20px", sm: "24px", md: "28px", lg: "30px" },
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            mt: { xs: 3, sm: 4, md: 5, lg: 1 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            px: { xs: 2, sm: 3, md: 4, lg: 3 },
            py: { xs: 3, sm: 3.5, md: 4, lg: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: { 
                xs: "20px", 
                sm: "24px", 
                md: "36px", 
                lg: "53px" 
              },
              fontWeight: 600,
              color: "#7D8FACFF",
              textAlign: "center",
              mb: { xs: 1.5, sm: 2, md: 2 },
              mt: { xs: 0, sm: 1, md: 2, lg: 4 },
            }}
          >
            Medical-Grade Telemedicine
          </Typography>

          {/* VIDEO PLAYER */}
          <Box
            component="video"
            src={myVideo}
            alt="Medical telemedicine consultation"
            autoPlay
            muted
            loop
            playsInline
            sx={{
              width: { 
                xs: "95%", 
                sm: "90%", 
                md: "80%", 
                lg: "60%" 
              },
              height: "auto",
              borderRadius: { xs: "12px", sm: "16px", md: "20px" },
              mt: { xs: -0.5, sm: -1, md: -1.5, lg: -2 },
              display: "block",
            }}
          />

          <Typography
            sx={{
              fontSize: { 
                xs: "20px", 
                sm: "24px", 
                md: "36px", 
                lg: "55px" 
              },
              fontWeight: 700,
              color: "#7D8FACFF",
              textAlign: "center",
             mt: { xs: 0.5, sm: 0.5, md: 0.5, lg: 0.5 }
            }}
          >
            Personalized Care
          </Typography>

          <Typography
            sx={{
              fontSize: { 
                xs: "12px", 
                sm: "14px", 
                md: "18px", 
                lg: "24px" 
            },
              lineHeight: 1.5,
              textAlign: "center",
              mt: { xs: 1.5, sm: 2, md: 2.5, lg: 2 },
              maxWidth: { xs: "100%", sm: "90%", md: "85%", lg: "700px" },
              px: { xs: 1, sm: 0 },
            }}
          >
            <Box component="span" sx={{ color: "#ffffff" }}>
              A licensed healthcare provider will review your medical profile and create a comprehensive treatment plan including
            </Box>{" "}
            <Box component="span" sx={{ color: "#7D8FACFF" }}>
              FDA-approved medications, nutritional guidance, activity plans
            </Box>
            <Box component="span" sx={{ color: "#ffffff" }}>
              , and ongoing medical supervision tailored to your health needs.
            </Box>
          </Typography>

          {/* CTA BUTTON */}
          <Button
            onClick={openSidebar}
            sx={{
              px: { xs: 4, sm: 5, md: 5.5, lg: 6 },
              py: { xs: 1.2, sm: 1.5, md: 1.6, lg: 1.8 },
              borderRadius: "999px",
              backgroundColor: "#7D8FACFF",
              color: "#ffffff",
              fontWeight: { xs: 500, sm: 550, md: 600 },
              textTransform: "none",
              mt: { xs: 3, sm: 3.5, md: 4, lg: 4 },
              fontSize: { xs: "14px", sm: "15px", md: "17px", lg: "18px" },
              "&:hover": {
                backgroundColor: "#00359E",
              },
            }}
          >
            Begin Medical Consultation
          </Button>
        </Box>

        {/* FOOTER TEXT */}
        <Typography
          sx={{
            fontSize: { 
              xs: "10px", 
              sm: "11px", 
              md: "14px", 
              lg: "16px" 
            },
            color: "#ffffff",
            textAlign: "center",
            mt: { xs: 4, sm: 5, md: 5.5, lg: 6 },
            mb: { xs: 3, sm: 3.5, md: 4, lg: 4 },
            px: { xs: 2, sm: 3, md: 4, lg: 2 },
            maxWidth: { xs: "95%", sm: "90%", md: "85%", lg: "900px" },
            lineHeight: 1.4,
          }}
        >
          Compounded drug products are not approved or evaluated for safety, effectiveness, or quality by the FDA.<br/>
          Prescription medications require provider evaluation and medical approval. Telemedicine services available where permitted by law.
        </Typography>
        
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </>
  );
}