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
            /* SIMPLE FIX: Use grid layout with fixed rows */
            .hero-section { 
              padding: 50px 16px 24px !important; 
            }

            .hero-container {
              max-width: 1100px;
              width: 100%;
              display: grid;
              grid-template-rows: auto auto auto; /* 3 fixed rows */
              gap: 0; /* No gap between rows */
              align-items: start; /* Align to top of each row */
            }

            /* ROW 1: Rotating text */
            .hero-headline {
              color: ${current.color};
              font-size: 2.8rem;
              line-height: 1;
              font-weight: 500;
              margin: 0;
              padding: 0;
              min-height: 3.2rem; /* FIXED HEIGHT */
              display: flex;
              align-items: flex-end; /* Align text to bottom */
              grid-row: 1;
            }

            /* ROW 2: Subtitle */
            .hero-subtitle {
              color: #3B3B3B;
              font-size: 2.4rem;
              font-weight: 600;
              line-height: 1;
              margin: 0;
              padding: 0;
              margin-top: 0.5rem;
              min-height: 2.6rem; /* FIXED HEIGHT */
              display: flex;
              align-items: flex-end; /* Align text to bottom */
              grid-row: 2;
            }

            /* ROW 3: Description */
            .hero-description {
              font-size: 1rem;
              color: #3B3B3B;
              line-height: 1.4;
              margin: 0;
              padding: 0;
              margin-top: 0.75rem;
              min-height: 1.4rem; /* FIXED HEIGHT */
              display: flex;
              align-items: flex-start; /* Align text to top */
              grid-row: 3;
            }

            /* Animation */
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; }
            }

            /* Tablet Styles */
            @media (min-width: 768px) {
              .hero-section { 
                padding: 60px 24px 30px !important; 
              }
              
              .hero-headline { 
                font-size: 3.8rem; 
                min-height: 4rem;
              }
              
              .hero-subtitle { 
                font-size: 3.5rem; 
                min-height: 3.5rem;
                margin-top: 0.5rem;
              }
              
              .hero-description { 
                font-size: 1.05rem; 
                min-height: 1.6rem;
                margin-top: 0.75rem;
              }
            }

            /* Desktop Styles */
            @media (min-width: 1024px) {
              .hero-section { 
                padding: 88px 40px 40px !important; 
              }
              
              .hero-headline { 
                font-size: 4.8rem; 
                min-height: 4.8rem;
              }
              
              .hero-subtitle { 
                font-size: 5.2rem; 
                min-height: 5.2rem;
                margin-top: 0.5rem;
              }
              
              .hero-description { 
                font-size: 1rem; 
                min-height: 1.4rem;
                margin-top: 0.75rem;
              }
            }

            /* Small Mobile Adjustments */
            @media (max-width: 360px) {
              .hero-headline { 
                font-size: 2.5rem; 
                min-height: 2.8rem;
              }
              
              .hero-subtitle { 
                font-size: 2.1rem; 
                min-height: 2.3rem;
              }
            }
          `}
        </style>

        <div className="hero-container">
          <h1 className="hero-headline">
            <span
              style={{
                display: "inline-block",
                animation: visible
                  ? "fadeIn 0.8s ease-out forwards"
                  : "fadeOut 0.8s ease-in forwards",
              }}
            >
              {current.text}
            </span>
          </h1>

          <h2 className="hero-subtitle">Your path to better health</h2>

          <p className="hero-description">Your custom healthcare plan</p>
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