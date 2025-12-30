import React, { useState, useEffect } from "react";

export default function TopBanner() {
  const messages = [
    { text: "Why choose LRX? Better care, better results.", icon: "check" },
    { text: "Online medical support trusted by thousands.", icon: "users" },
    { text: "Fast delivery — right to your doorstep.", icon: "truck" },
    { text: "FDA-approved treatments that really work.", icon: "badge" },
  ];

  const [paused, setPaused] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideBanner(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Icon mapping with blue color
  const Icon = ({ type }) => {
    const iconStyle = {
      width: "16px",
      height: "16px",
      stroke: "#00359E", // Blue color to match theme
      strokeWidth: "2",
      fill: "none",
      marginRight: "8px",
      flexShrink: 0,
    };

    switch (type) {
      case "check":
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        );
      case "users":
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "truck":
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M10 17h4V5H2v12h3m15 0h2v-3.34a1 1 0 0 0-.28-.7l-2-2a1 1 0 0 0-.72-.3H19V7h2" />
            <path d="M17 17h1a2 2 0 0 0 2-2v-4h-4" />
            <circle cx="7.5" cy="17.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
        );
      case "badge":
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M12 2L2 7v10l10 5 10-5V7z" />
            <path d="M12 22V7" />
            <path d="M7 12.5l5 3 5-3" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
          </svg>
        );
    }
  };

  if (hideBanner) return null;

  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .marquee {
            animation: marquee var(--animation-duration, 22s) linear infinite;
          }
          
          .paused {
            animation-play-state: paused;
          }
          
          /* Adjust animation speed based on screen size */
          @media (max-width: 768px) {
            .marquee {
              animation-duration: 18s; /* Faster on mobile */
            }
          }
          
          @media (max-width: 480px) {
            .marquee {
              animation-duration: 15s; /* Even faster on very small screens */
            }
          }
        `}
      </style>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          width: "100%",
          height: "48px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #E5E7EB",
          overflow: "hidden",
          zIndex: 9999,
        }}
      >
        {/* LEFT LABEL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingLeft: "24px",
            paddingRight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              color: "#00359E",
              fontSize: "16px",
              fontWeight: 530,
            }}
          >
            Why LRX?
          </span>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            width: "1px",
            height: "22px",
            backgroundColor: "#00359E",
            opacity: 0.6,
          }}
        />

        {/* SCROLLING TEXT WITH ICONS */}
        <div
          style={{
            position: "relative",
            flex: 1,
            height: "100%",
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            className={`marquee ${paused ? "paused" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              whiteSpace: "nowrap",
            }}
          >
            {[...messages, ...messages].map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "48px",
                }}
              >
                <Icon type={msg.icon} />
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#00359E",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}