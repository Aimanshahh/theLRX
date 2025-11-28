import React from "react";
import guideImage from "../../assets/images/guidebanner.png"; // update path as needed

export default function GuideBanner() {
  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(135deg, #00359E 0%, #003B9D 50%, #8B8D8E 100%)",
        padding: "70px 16px 100px", // Increased bottom padding from 70px to 100px
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1100px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(22px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "26px",
          overflow: "hidden",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT TEXT */}
        <div
          style={{
            flex: "1 1 400px",
            padding: "60px 50px",
            color: "#FFFFFF",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "1.25",
              marginBottom: "12px",
              fontFamily: "Inter, sans-serif",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Unlock the free Guide to Protein for Weight Loss
          </h2>

          <p
            style={{
              fontSize: "15px",
              marginBottom: "22px",
              fontFamily: "Inter, sans-serif",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Written by board-certified doctors to support your journey.
          </p>

          <form
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "14px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                flex: "1 1 auto",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #8B8D8E",
                outline: "none",
                fontSize: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                color: "#000000",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#00359E";
                e.target.style.boxShadow = "0 0 0 2px rgba(0, 53, 158, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#8B8D8E";
                e.target.style.boxShadow = "none";
              }}
            />

            <button
              type="submit"
              style={{
                background: "#00359E",
                color: "#FFFFFF",
                padding: "14px 20px",
                borderRadius: "10px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 53, 158, 0.3)",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#003B9D";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(0, 53, 158, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#00359E";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(0, 53, 158, 0.3)";
              }}
            >
              Get the guide
            </button>
          </form>

          <small style={{ fontSize: "10px", opacity: "0.85", color: "rgba(255, 255, 255, 0.8)" }}>
            By providing your email you agree to the{" "}
            <a style={{ color: "#FFFFFF", textDecoration: "underline" }} href="/terms">
              Terms & Conditions
            </a>{" "}
            and acknowledge the{" "}
            <a style={{ color: "#FFFFFF", textDecoration: "underline" }} href="/privacy">
              Privacy Policy
            </a>
            .
          </small>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: "1 1 400px", height: "100%" }}>
          <img
            src={guideImage}
            alt="Smiling person"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}