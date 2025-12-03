import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import TopBanner from "../components/Layout/TopBanner";
import Navbar from "../components/Layout/Navbar";
import HeroBanner from "../components/Layout/HeroBanner";
import Footer from "../components/Layout/Footer";

// Main Pages
import AboutUs from "../pages/AboutUs";
import FAQspage from "../pages/FAQspage";
import Howitworks from "../pages/Howitworks";
import Blog from "../pages/Blog";
import Medicalexperts from "../pages/Medicalexperts";
import Signin from "../pages/Signin";
import Register from "../pages/Registration";
import Browsealltreatments from "../pages/Browsealltreatments";

// FAQ Category Pages
import TheBasics from "../components/FAQscategories/TheBasics";
import AboutYourVisits from "../components/FAQsCategories/AboutYourVisits";
import Medicalcare from "../components/FAQsCategories/Medicalcare";
import Shipping from "../components/FAQsCategories/Shipping";
import Troubleshooting from "../components/FAQsCategories/Troubleshooting";
import PrivacyAndSecurity from "../components/FAQscategories/PrivacyAndSecurity";

/* ------------------- EXPLORE PAGES (NEW IMPORTS) ------------------- */

// Labs
import Lab1 from "../components/Medicines/Lab1";
import Lab2 from "../components/Medicines/Lab2";

// Weight Loss
import GLP1 from "../components/Medicines/GLP-1";
import Oralmedication from "../components/Medicines/Oralmedication";
import Ozempic from "../components/Medicines/Ozempic";
import Genericliraglutide from "../components/Medicines/Genericliraglutide";
import Zepbound from "../components/Medicines/Zepbound";
import Mounjaro from "../components/Medicines/Mounjaro";

// Hair Regrowth
import Minoxidilspray from "../components/Medicines/Minoxidilspray";
import Oralfinasterider from "../components/Medicines/Oralfinasterider";
import Hairhybrids from "../components/Medicines/Hairhybrids";

// Sexual Health
import Hardmints from "../components/Medicines/Hardmints";
import Viagra from "../components/Medicines/Viagra";
import Genericforcialis from "../components/Medicines/genericforcialis";
import Valacyclovis from "../components/Medicines/valacylovis";

// Testosterone
import Enclomiphene from "../components/Medicines/enclomiphene";
import Tadalafil from "../components/Medicines/tadalafil";

// Mental Health
import Anxiety from "../components/Medicines/Anxiety";
import Stress from "../components/Medicines/Stress";
import Depression from "../components/Medicines/Depression";
import TroubleSleeping from "../components/Medicines/TroubleSleeping";

// Skin
import AntiAgingcream from "../components/Medicines/AntiAgingcream";
import Acnecream from "../components/Medicines/Acnecream";
import Coldsore from "../components/Medicines/Coldsore";
import Hightidecleanser from "../components/Medicines/hightidecleanser";

function LayoutWithFooter({ children }) {
  const { pathname } = useLocation();

  // Hide Footer on Signin & Register
  const hideFooter = pathname === "/signin" || pathname === "/register";

  return (
    <>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <LayoutWithFooter>
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <TopBanner />
                <Navbar />
                <HeroBanner />
              </>
            }
          />

          {/* AUTH PAGES */}
          <Route path="/Signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />

          {/* PAGES */}
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/FAQspage" element={<FAQspage />} />
          <Route path="/Howitworks" element={<Howitworks />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Medicalexperts" element={<Medicalexperts />} />
          <Route path="/Browsealltreatments" element={<Browsealltreatments/>} />

          {/* FAQ CATEGORY PAGES */}
          <Route path="/TheBasics" element={<TheBasics />} />
          <Route path="/AboutYourVisits" element={<AboutYourVisits />} />
          <Route path="/Medicalcare" element={<Medicalcare />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/Troubleshooting" element={<Troubleshooting />} />
          <Route path="/PrivacyAndSecurity" element={<PrivacyAndSecurity />} />

          {/* ---------------- EXPLORE ROUTES ---------------- */}

          {/* Labs */}
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />

          {/* Weight Loss */}
          <Route path="/GLP-1" element={<GLP1 />} />
          <Route path="/Oralmedication" element={<Oralmedication />} />
          <Route path="/Ozempic" element={<Ozempic />} />
          <Route path="/Genericliraglutide" element={<Genericliraglutide />} />
          <Route path="/Zepbound" element={<Zepbound />} />
          <Route path="/Mounjaro" element={<Mounjaro />} />

          {/* Hair */}
          <Route path="/Minoxidilspray" element={<Minoxidilspray />} />
          <Route path="/Oralfinasterider" element={<Oralfinasterider />} />
          <Route path="/Hairhybrids" element={<Hairhybrids />} />

          {/* Sexual Health */}
          <Route path="/Hardmints" element={<Hardmints />} />
          <Route path="/Viagra" element={<Viagra />} />
          <Route path="/genericforcialis" element={<Genericforcialis />} />
          <Route path="/Valacyclovis" element={<Valacyclovis />} />

          {/* Testosterone */}
          <Route path="/enclomiphene" element={<Enclomiphene />} />
          <Route path="/tadalafil" element={<Tadalafil />} />

          {/* Mental Health */}
          <Route path="/Anxiety" element={<Anxiety />} />
          <Route path="/Stress" element={<Stress />} />
          <Route path="/Depression" element={<Depression />} />
          <Route path="/TroubleSleeping" element={<TroubleSleeping />} />

          {/* Skin */}
          <Route path="/AntiAgingcream" element={<AntiAgingcream />} />
          <Route path="/Acnecream" element={<Acnecream />} />
          <Route path="/Coldsore" element={<Coldsore />} />
          <Route path="/Hightidecleanser" element={<Hightidecleanser />} />

          {/* 404 PAGE */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </LayoutWithFooter>
    </Router>
  );
}
