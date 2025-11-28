import React, { useState, useEffect } from "react";
import HeroCards from "./HeroCards";
import FullWidthBanner from "./FullWidthBanner";
import Herostyle from "./Herostyle";
import Fourcard from "./fourcards";
import Carousal from "./carousal";
import LongCard from "./longCard";
import Accordion from "./FAQs";
import GuideBanner from "./GuideBanner";

const rotatingHeadlines = [
  { text: "Hair Care", color: "#00359E" },
  { text: "Skin Health", color: "#747578" },
  { text: "Sexual Wellness", color: "#003B9D" },
  { text: "Treatments", color: "#8B8D8E" },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingHeadlines.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = rotatingHeadlines[index];

  return (
    <section
      className="w-full bg-[#f7f7f7] flex flex-col items-start justify-center px-6 md:px-20 min-h-screen"
      style={{ paddingTop: "80px" }}
    >
      {/* Hero Headline */}
      <div className="max-w-5xl text-left w-full mb-12" style={{ marginLeft: '3.5rem' }}>
        <h1
          className={`font-black font-sans transition-all duration-700 ease-in-out leading-none ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            color: current.color,
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            lineHeight: 0.9,
            marginBottom: "1rem",
          }}
        >
          {current.text}
        </h1>

        <h2
          className="text-black font-bold mt-6 leading-tight"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
            lineHeight: 0.9,
          }}
        >
          Personalized care starts here.
        </h2>
      </div>

      {/* All Sections */}
      <div className="w-full">
        <HeroCards />
      </div>

      <div className="w-full">
        <FullWidthBanner />
      </div>

      <div className="w-full">
        <Herostyle />
      </div>

      <div className="w-full">
        <Fourcard />
      </div>

      <div className="w-full">
        <Carousal />
      </div>
<br></br>
      <div className="w-full">
        <LongCard />
      </div>

      <div className="w-full">
        <Accordion />
      </div>

      <div className="w-full">
        <GuideBanner />
      </div>
    </section>
  );
}
