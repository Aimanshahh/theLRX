import React, { useState, useEffect } from "react";
import HeroCards from "./HeroCards";
import FullWidthBanner from "./FullWidthBanner";
import Herostyle from "./Herostyle";
import Fourcard from "./fourcards";
import Carousal from "./carousal";
import LongCard from "./longCard";
import Accordion from "./FAQs";
import GuideBanner from "./GuideBanner";
import TallBackgroundSection from "./section3";

const rotatingHeadlines = [
  { text: "Hair Care", color: "#003B9D" },
  { text: "Skin Health", color: "#747578" },
  { text: "Sexual Wellness", color: "#00359E" },
  { text: "Treatments", color: "#8B8D8E" },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % rotatingHeadlines.length);
        setVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = rotatingHeadlines[index];

  return (
    <>
      <section className="w-full bg-white hero-section">
        <style>
          {`
            @keyframes slideInUp {
              0% { opacity: 0; transform: translateY(100%); }
              50% { opacity: 1; transform: translateY(10%); }
              100% { opacity: 1; transform: translateY(0%); }
            }

            @keyframes slideOutUp {
              0% { opacity: 1; transform: translateY(0%); }
              50% { opacity: 0.5; transform: translateY(-40%); }
              100% { opacity: 0; transform: translateY(-100%); }
            }

            /* Mobile First Styles - KEEP EXISTING PADDING */
            .hero-section { padding: 50px 16px 24px !important; }

            .hero-headline {
              color: ${current.color};
              font-size: 2.8rem;
              line-height: 1.1;
              font-weight: 500;
              overflow: hidden;
              position: relative;
              height: 3.2rem;
              margin: 0;
              /* Add only margin-top to push it down */
              margin-top: 20px !important; /* This pushes just the rotating text down */
            }

            .hero-subtitle {
              color: #3B3B3B;
              font-size: 2.4rem;
              font-weight: 600;
              margin-top: 12px;
              line-height: 1.2;
              word-wrap: break-word;
              overflow-wrap: break-word;
              white-space: normal;
            }

            .hero-description {
              margin-top: 16px;
              font-size: 1rem;
              color: #3B3B3B;
              line-height: 1.4;
            }

            .hero-container {
              max-width: 1100px;
              width: 100%;
            }

            /* Tablet Styles - MINIMAL CHANGES */
            @media (min-width: 768px) {
              .hero-section { padding: 60px 24px 30px !important; }
              .hero-headline { 
                font-size: 3.8rem; 
                height: 4rem; 
                line-height: 1;
                margin-top: 25px !important; /* Slightly more on tablet */
              }
              .hero-subtitle { font-size: 3.5rem; margin-top: 16px; white-space: nowrap; }
              .hero-description { margin-top: 20px; font-size: 1.05rem; }
            }

            /* Desktop Styles - MINIMAL CHANGES */
            @media (min-width: 1024px) {
              .hero-section { padding: 88px 40px 40px !important; }
              
              /* Push text tightly to left */
              .hero-container {
                max-width: 1100px;
                margin: 0;
                padding-left: 0;
              }
              
              .hero-headline { 
                font-size: 4.8rem; 
                height: 4.8rem; 
                line-height: 0.96;
                margin-top: 30px !important; /* More on desktop */
              }
              .hero-subtitle { font-size: 5.2rem; margin-top: 4px; }
              .hero-description { margin-top: 10px; font-size: 1rem; }
            }

            /* Large Desktop */
            @media (min-width: 1200px) {
              .hero-container {
                max-width: 1100px;
                margin: 0;
                padding-left: 0;
              }
              .hero-headline {
                margin-top: 35px !important;
              }
            }

            /* Extra Large Desktop */
            @media (min-width: 1440px) {
              .hero-container {
                max-width: 1100px;
                margin: 0;
                padding-left: 0;
              }
              .hero-headline {
                margin-top: 40px !important;
              }
            }

            /* Small Mobile Adjustments */
            @media (max-width: 360px) {
              .hero-headline { 
                font-size: 2.5rem; 
                height: 2.8rem; 
                margin-top: 15px !important;
              }
              .hero-subtitle { font-size: 2.1rem; }
            }
          `}
        </style>

        <div className="hero-container">
          <h1 className="hero-headline">
            <span
              style={{
                display: "inline-block",
                animation: visible
                  ? "slideInUp 1s ease-out forwards"
                  : "slideOutUp 1s ease-in forwards",
              }}
            >
              {current.text}
            </span>
          </h1>

          <h2 className="hero-subtitle">Personalized care starts here</h2>

          <p className="hero-description">Customized care starts here</p>
        </div>
      </section>

      <HeroCards />
      <br></br>
      <FullWidthBanner />
      <Herostyle />
       <br></br>
      <TallBackgroundSection />
      <Fourcard />
      <Carousal /> 
      <br></br>
       <br></br>
        <br></br>
        <br></br>
        <br></br>
      <LongCard />
      
      <Accordion />
      <GuideBanner />
    </>
  );
}