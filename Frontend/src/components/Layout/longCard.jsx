import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { ClipboardCheck, HeartPulse, MessageCircle } from "lucide-react";

export default function LongCard() {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#f8fafc",
        borderRadius: 0,
        boxShadow: "none",
        overflow: "hidden",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {/* MAIN CONTAINER */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: { xs: "4rem 1.5rem", md: "6rem 2rem", lg: "8rem 2rem" },
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 6, md: 8, lg: 10 },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT TEXT SECTION */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", lg: "520px" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#00359E",
                mb: 3,
                letterSpacing: "-0.02em",
              }}
            >
              Start your personalized treatment today.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                fontWeight: 400,
                color: "#4A5568",
                mb: 4,
                lineHeight: 1.6,
                maxWidth: "500px",
              }}
            >
              Answer a few questions to get matched with a treatment plan designed just for you by board-certified physicians.
            </Typography>

            {/* BUTTONS */}
            <Box sx={{ display: "flex", gap: 2, mb: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#00359E",
                  color: "white",
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(0, 53, 158, 0.2)",
                  "&:hover": {
                    bgcolor: "#002F85",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 16px rgba(0, 53, 158, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: "#00359E",
                  borderWidth: 2,
                  color: "#00359E",
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "rgba(0, 53, 158, 0.05)",
                    borderColor: "#00359E",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Learn More
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#718096",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <span style={{ color: "#10b981", fontSize: "1.1rem" }}>✓</span> 
              No obligations • Cancel anytime • Free consultation
            </Typography>
          </Box>

          {/* RIGHT CARDS SECTION */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", lg: "700px" },
            }}
          >
            {/* TWO CARDS ROW */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
                gap: 3,
                mb: 3,
              }}
            >
              {/* CARD 1 - Online Assessment */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 4,
                  border: "1px solid #e2e8f0",
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
                    borderColor: "#cbd5e1",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      bgcolor: "rgba(0, 53, 158, 0.08)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <ClipboardCheck size={28} color="#00359E" />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 1,
                      fontSize: "1.5rem",
                    }}
                  >
                    Online Assessment
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      color: "#475569",
                      lineHeight: 1.6,
                      fontSize: "1.05rem",
                      mb: 2,
                    }}
                  >
                    Answer a few quick questions so we can understand your needs.
                  </Typography>
                  <Typography
                    sx={{
                      color: "#64748b",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                    }}
                  >
                    Takes just 5-10 minutes
                  </Typography>
                </Box>
              </Box>

              {/* CARD 2 - Personalized Plan */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 4,
                  border: "1px solid #e2e8f0",
                  height: "320px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
                    borderColor: "#cbd5e1",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      bgcolor: "rgba(0, 53, 158, 0.08)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <HeartPulse size={28} color="#00359E" />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1e293b",
                      mb: 1,
                      fontSize: "1.5rem",
                    }}
                  >
                    Personalized Treatment Plan
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      color: "#475569",
                      lineHeight: 1.6,
                      fontSize: "1.05rem",
                      mb: 2,
                    }}
                  >
                    A licensed provider reviews your answers and creates a tailored plan.
                  </Typography>
                 
                </Box>
              </Box>
            </Box>

            {/* WIDE CARD 3 - Support & Follow-ups */}
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: { xs: 4, md: 5 },
                border: "1px solid #e2e8f0",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "flex-start" },
                gap: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
                  borderColor: "#cbd5e1",
                },
              }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <Box
                  sx={{
                    width: "56px",
                    height: "56px",
                    bgcolor: "rgba(0, 53, 158, 0.08)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: 2.5, sm: 0 },
                  }}
                >
                  <MessageCircle size={28} color="#00359E" />
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#1e293b",
                    mb: 1.5,
                    fontSize: "1.5rem",
                  }}
                >
                  Continuous Support
                </Typography>
                <Typography
                  sx={{
                    color: "#475569",
                    lineHeight: 1.6,
                    fontSize: "1.05rem",
                    mb: 2,
                    maxWidth: "600px",
                  }}
                >
                  Stay connected with ongoing check-ins and adjustments. Message your care team anytime you have questions.
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: "rgba(59, 130, 246, 0.1)",
                    color: "#2563eb",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  Ask questions anytime
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}