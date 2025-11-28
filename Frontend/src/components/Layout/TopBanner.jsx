import React, { useState, useEffect, useRef } from "react";

export default function TopBanner() {
  const messages = [
    "Why choose LRX? Better care, better results.",
    "Online medical support trusted by thousands.",
    "Fast delivery — right to your doorstep.",
    "FDA-approved treatments that really work."
  ];

  const [paused, setPaused] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHideBanner(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (hideBanner) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="w-full overflow-hidden cursor-pointer flex items-center"
      style={{
        background: "linear-gradient(90deg, #FFFFFF, #8B8D8E)",
        height: "50px",
        zIndex: 9999,
      }}
    >
      {/* LEFT FIXED LABEL */}
      <div ref={labelRef} className="flex items-center h-full pl-5 pr-4">
        <span
          className="text-[#00359E] text-lg whitespace-nowrap"
          style={{ fontWeight: 600 }}
        >
          Why LRX?
        </span>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          width: "2px",
          height: "26px",
          backgroundColor: "#00359E",
          opacity: 0.8,
        }}
      />

      {/* SCROLLING TEXT CONTAINER */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "50px",
          width: "100%",
        }}
      >
        {/* SCROLLING TEXT */}
        <div
          className={`flex items-center animate-marquee ${paused ? "animation-paused" : ""}`}
          style={{ height: "50px", whiteSpace: "nowrap" }}
        >
          {[...messages, ...messages].map((msg, i) => (
            <p
              key={i}
              className="text-[#00359E] text-lg font-semibold"
              style={{
                lineHeight: "30px", // Reduced from 50px to 40px
                marginRight: "80px",
                paddingLeft: "40px",
                paddingTop: "13px", // Added padding to push text down
              }}
            >
              {msg}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}