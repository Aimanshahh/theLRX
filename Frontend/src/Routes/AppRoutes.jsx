import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout Components
import TopBanner from "../components/Layout/TopBanner";
import Navbar from "../components/Layout/Navbar";
import HeroBanner from "../components/Layout/HeroBanner";
import Footer from "../components/Layout/Footer";

// Loader
import { LoaderProvider, useLoader } from "../contexts/LoadingContext";
import Loader from "../components/Loader/Loader";

// Pages
import AboutUs from "../pages/AboutUs";
import FAQspage from "../pages/FAQspage";
import Howitworks from "../pages/Howitworks";
import Blog from "../pages/Blog";
import Medicalexperts from "../pages/Medicalexperts";
import Signin from "../pages/Signin";
import Register from "../pages/Registration";

// FAQ Categories
import TheBasics from "../components/FAQscategories/TheBasics";
import AboutYourVisits from "../components/FAQsCategories/AboutYourVisits";
import Medicalcare from "../components/FAQsCategories/Medicalcare";
import Shipping from "../components/FAQsCategories/Shipping";
import Troubleshooting from "../components/FAQsCategories/Troubleshooting";
import PrivacyAndSecurity from "../components/FAQscategories/PrivacyAndSecurity";

// Medicines
import Lab1 from "../components/Medicines/Lab1";
import Lab2 from "../components/Medicines/Lab2";
import GLP1 from "../components/Medicines/GLP-1";
import Oralmedication from "../components/Medicines/Oralmedication";
import Ozempic from "../components/Medicines/Ozempic";
import Genericliraglutide from "../components/Medicines/Genericliraglutide";
import Zepbound from "../components/Medicines/Zepbound";
import Mounjaro from "../components/Medicines/Mounjaro";
import Minoxidilspray from "../components/Medicines/Minoxidilspray";
import Oralfinasterider from "../components/Medicines/Oralfinasterider";
import Hairhybrids from "../components/Medicines/Hairhybrids";
import Hardmints from "../components/Medicines/Hardmints";
import Viagra from "../components/Medicines/Viagra";
import Genericforcialis from "../components/Medicines/genericforcialis";
import Valacyclovis from "../components/Medicines/valacylovis";
import Enclomiphene from "../components/Medicines/enclomiphene";
import Tadalafil from "../components/Medicines/tadalafil";
import Anxiety from "../components/Medicines/Anxiety";
import Stress from "../components/Medicines/Stress";
import Depression from "../components/Medicines/Depression";
import TroubleSleeping from "../components/Medicines/TroubleSleeping";
import AntiAgingcream from "../components/Medicines/AntiAgingcream";
import Acnecream from "../components/Medicines/Acnecream";
import Coldsore from "../components/Medicines/Coldsore";
import Hightidecleanser from "../components/Medicines/hightidecleanser";

// ------------------- Layout with footer -------------------
function LayoutWithFooter({ children }) {
  const { pathname } = useLocation();

  // Only show header on Home page
  const showHeader = pathname === "/";

  // Hide footer on Signin & Register
  const hideFooter = pathname === "/signin" || pathname === "/register";

  return (
    <>
      {showHeader && (
        <>
          <TopBanner />
          <Navbar />
        </>
      )}

      {children}

      {!hideFooter && <Footer />}
    </>
  );
}

// ------------------- Route Loader -------------------
function RouteLoaderWrapper({ children }) {
  const location = useLocation();
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loader duration in ms

    return () => clearTimeout(t);
  }, [location.pathname, setLoading]);

  // Block page until loader finishes
  if (loading) return <Loader />;

  return <>{children}</>;
}

// ------------------- AppRoutes -------------------
export default function AppRoutes() {
  return (
    <LoaderProvider>
      <Router>
        <RouteLoaderWrapper>
          <LayoutWithFooter>
            <Routes>
              {/* HOME */}
              <Route path="/" element={<HeroBanner />} />

              {/* AUTH */}
              <Route path="/Signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />

              {/* PAGES */}
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/FAQspage" element={<FAQspage />} />
              <Route path="/Howitworks" element={<Howitworks />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Medicalexperts" element={<Medicalexperts />} />

              {/* FAQ Categories */}
              <Route path="/TheBasics" element={<TheBasics />} />
              <Route path="/AboutYourVisits" element={<AboutYourVisits />} />
              <Route path="/Medicalcare" element={<Medicalcare />} />
              <Route path="/Shipping" element={<Shipping />} />
              <Route path="/Troubleshooting" element={<Troubleshooting />} />
              <Route path="/PrivacyAndSecurity" element={<PrivacyAndSecurity />} />

              {/* Medicines */}
              <Route path="/Lab1" element={<Lab1 />} />
              <Route path="/Lab2" element={<Lab2 />} />
              <Route path="/GLP-1" element={<GLP1 />} />
              <Route path="/Oralmedication" element={<Oralmedication />} />
              <Route path="/Ozempic" element={<Ozempic />} />
              <Route path="/Genericliraglutide" element={<Genericliraglutide />} />
              <Route path="/Zepbound" element={<Zepbound />} />
              <Route path="/Mounjaro" element={<Mounjaro />} />
              <Route path="/Minoxidilspray" element={<Minoxidilspray />} />
              <Route path="/Oralfinasterider" element={<Oralfinasterider />} />
              <Route path="/Hairhybrids" element={<Hairhybrids />} />
              <Route path="/Hardmints" element={<Hardmints />} />
              <Route path="/Viagra" element={<Viagra />} />
              <Route path="/genericforcialis" element={<Genericforcialis />} />
              <Route path="/Valacyclovis" element={<Valacyclovis />} />
              <Route path="/enclomiphene" element={<Enclomiphene />} />
              <Route path="/tadalafil" element={<Tadalafil />} />
              <Route path="/Anxiety" element={<Anxiety />} />
              <Route path="/Stress" element={<Stress />} />
              <Route path="/Depression" element={<Depression />} />
              <Route path="/TroubleSleeping" element={<TroubleSleeping />} />
              <Route path="/AntiAgingcream" element={<AntiAgingcream />} />
              <Route path="/Acnecream" element={<Acnecream />} />
              <Route path="/Coldsore" element={<Coldsore />} />
              <Route path="/Hightidecleanser" element={<Hightidecleanser />} />

              {/* 404 */}
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </LayoutWithFooter>
        </RouteLoaderWrapper>
      </Router>
    </LoaderProvider>
  );
}
