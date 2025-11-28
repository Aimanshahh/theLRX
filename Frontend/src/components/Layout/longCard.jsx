import React from "react";
import { Card, CardContent } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LongCard() {
  return (
    <Card
      className="shadow-lg rounded position-relative overflow-hidden"
      sx={{
        width: "100vw",
        backgroundColor: "#00359E",
        height: { xs: "auto", sm: "55rem", md: "50rem", lg: "50rem" }, // responsive height
      }}
    >
      <CardContent
        className="p-0"
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* MAIN FLEX CONTAINER */}
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "3rem 2rem",
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            position: "relative",
            zIndex: 5,
            flexWrap: "wrap", // allows stacking on smaller screens
          }}
        >
          {/* ---------------- LEFT TEXT SECTION ---------------- */}
          <div style={{ flex: "1 1 400px" }}>
            <h1
              className="text-white"
              style={{
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: "700",
                lineHeight: "1.1",
                maxWidth: "600px",
                marginBottom: "1.5rem",
              }}
            >
              Start your personalized treatment today.
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                opacity: 0.9,
                maxWidth: "550px",
                color: "white",
              }}
            >
              Answer a few questions to get matched with treatment designed just
              for you.
            </p>

            {/* BUTTONS */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1.2rem",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  backgroundColor: "#003B9D",
                  color: "white",
                  padding: "15px 32px",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Get Started
              </button>

              <button
                style={{
                  backgroundColor: "white",
                  color: "#00359E",
                  padding: "15px 32px",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  border: "2px solid #8B8D8E",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </div>

            <p
              style={{
                marginTop: "1rem",
                color: "#d6d6d6",
                fontSize: "0.95rem",
                opacity: 0.9,
              }}
            >
              No obligations. Cancel anytime.
            </p>
          </div>

          {/* ---------------- RIGHT CARDS SECTION ---------------- */}
          <div
            style={{
              flex: "1 1 300px",
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexWrap: "wrap", // allows cards to wrap on smaller screens
              gap: "1.5rem",
            }}
          >
            {/* DOOR CARD 1 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#00359E",
                borderRadius: "26px",
                padding: "2rem",
                width: "240px",
                height: "360px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <h4 style={{ fontWeight: "700", marginBottom: "0.6rem" }}>
                Quick Consult
              </h4>
              <p style={{ color: "#747578", fontSize: "1rem" }}>
                Answer a few questions to get started.
              </p>
            </div>

            {/* DOOR CARD 2 */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#00359E",
                borderRadius: "26px",
                padding: "2rem",
                width: "240px",
                height: "360px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <h4 style={{ fontWeight: "700", marginBottom: "0.6rem" }}>
                Personalized Plan
              </h4>
              <p style={{ color: "#747578", fontSize: "1rem" }}>
                A treatment designed for your needs.
              </p>
            </div>

            {/* RECTANGULAR BOTTOM CARD */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                color: "#00359E",
                borderRadius: "26px",
                padding: "2rem",
                width: "500px",
                height: "180px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <h4 style={{ fontWeight: "700", marginBottom: "0.6rem" }}>
                Ongoing Support
              </h4>
              <p style={{ color: "#747578", fontSize: "1rem" }}>
                Message your provider anytime.
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      {/* ---------------- SVG BACKGROUND (UNCHANGED) ---------------- */}
      <svg
        className="position-absolute top-0 end-0 h-100"
        style={{ width: "160%", pointerEvents: "none" }}
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="bluePrimaryShadingGradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#747578" />
            <stop offset="20%" stopColor="#8B8D8E" />
            <stop offset="40%" stopColor="#00359E" />
            <stop offset="100%" stopColor="#003B9D" />
          </linearGradient>
        </defs>

        <path
          d="M1200 120 C1080 20 880 0 700 40 C520 80 420 160 300 220 C180 280 100 300 0 330 L0 600 L1200 600 Z"
          fill="url(#bluePrimaryShadingGradient)"
          opacity="0.95"
        />
      </svg>
    </Card>
  );
}
