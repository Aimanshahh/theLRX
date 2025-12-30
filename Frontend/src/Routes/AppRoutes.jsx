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

// Mental / Skin
import Anxiety from "../components/Medicines/Anxiety";
import Stress from "../components/Medicines/Stress";
import Depression from "../components/Medicines/Depression";
import TroubleSleeping from "../components/Medicines/TroubleSleeping";
import AntiAgingcream from "../components/Medicines/AntiAgingcream";
import Acnecream from "../components/Medicines/Acnecream";
import Coldsore from "../components/Medicines/Coldsore";
import Hightidecleanser from "../components/Medicines/hightidecleanser";

// Weight Loss
import RetatrutideVial from "../components/Medicines/Weight-Loss/RetatrutideVial";
import OralTirzepatideRDT from "../components/Medicines/Weight-Loss/OralTirzepatideRDT";
import OralSemaglutideRDT from "../components/Medicines/Weight-Loss/OralSemaglutideRDT";
import TirzepatideInjectable from "../components/Medicines/Weight-Loss/TirzepatideInjectable";
import SemaglutideInjectable from "../components/Medicines/Weight-Loss/SemaglutideInjectable";

// Peptides
import VitaminB12 from "../components/Medicines/PepTides/VitaminB12";
import Sermorelin20mg from "../components/Medicines/PepTides/Sermorelin20mg";
import PT141 from "../components/Medicines/PepTides/PT141";
import CJC1295Ipamorelin from "../components/Medicines/PepTides/CJC1295Ipamorelin";
import BPC157 from "../components/Medicines/PepTides/BPC157";
import GHKCU from "../components/Medicines/PepTides/GHKCU";
import NAD from "../components/Medicines/PepTides/NAD";
import NADInjectablePage from "../components/Medicines/PepTides/NADinjectable";

// Sexual Health
import Passion6 from "../components/Medicines/SexualHealth/Passion6";
import Passion12 from "../components/Medicines/SexualHealth/Passion12";
import Passion18 from "../components/Medicines/SexualHealth/Passion18";
import Lust6 from "../components/Medicines/SexualHealth/Lust6";
import Lust12 from "../components/Medicines/SexualHealth/Lust12";
import Lust18 from "../components/Medicines/SexualHealth/Lust18";
import OverdrivePlus6 from "../components/Medicines/SexualHealth/OverdrivePlus6";
import OverdrivePlus12 from "../components/Medicines/SexualHealth/OverdrivePlus12";
import Redpill6 from "../components/Medicines/SexualHealth/Redpill6";
import Redpill12 from "../components/Medicines/SexualHealth/Redpill12";
import Mach16 from "../components/Medicines/SexualHealth/Mach16";
import Mach112 from "../components/Medicines/SexualHealth/Mach112";
import Mach118 from "../components/Medicines/SexualHealth/Mach118";
import EpiqChew30 from "../components/Medicines/SexualHealth/EpiqChew30";
import DrivePlus6 from "../components/Medicines/SexualHealth/DrivePlus6";
import DrivePlus12 from "../components/Medicines/SexualHealth/DrivePlus12";
import DrivePlus18 from "../components/Medicines/SexualHealth/DrivePlus18";

// Labs
import Lab1 from "../components/Medicines/Labs/Lab1";
import Lab2 from "../components/Medicines/Labs/Lab2";

/* ------------------- LAYOUT ------------------- */

function LayoutWithFooter({ children }) {
  const { pathname } = useLocation();
   console.log("CURRENT PATH:", pathname); 

  const showHeader = pathname === "/";

  const hideFooter =
    pathname === "/signin" ||
    pathname === "/register" ||
    pathname.startsWith("/Labs");

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

/* ------------------- ROUTE LOADER ------------------- */

function RouteLoaderWrapper({ children }) {
  const location = useLocation();
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, [location.pathname, setLoading]);

  if (loading) return <Loader />;

  return <>{children}</>;
}

/* ------------------- ROUTES ------------------- */

export default function AppRoutes() {
  return (
    <LoaderProvider>
      <Router>
        <RouteLoaderWrapper>
          <LayoutWithFooter>
            <Routes>
              <Route path="/" element={<HeroBanner />} />

              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />

              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/faqs" element={<FAQspage />} />
              <Route path="/how-it-works" element={<Howitworks />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/medical-experts" element={<Medicalexperts />} />

              <Route path="/faqs/basics" element={<TheBasics />} />
              <Route path="/faqs/visits" element={<AboutYourVisits />} />
              <Route path="/faqs/medical-care" element={<Medicalcare />} />
              <Route path="/faqs/shipping" element={<Shipping />} />
              <Route path="/faqs/troubleshooting" element={<Troubleshooting />} />
              <Route path="/faqs/privacy-security" element={<PrivacyAndSecurity />} />

              <Route path="/labs/lab1" element={<Lab1 />} />
              <Route path="/labs/lab2" element={<Lab2 />} />

              <Route path="/mental-health/anxiety" element={<Anxiety />} />
              <Route path="/mental-health/stress" element={<Stress />} />
              <Route path="/mental-health/depression" element={<Depression />} />
              <Route path="/mental-health/trouble-sleeping" element={<TroubleSleeping />} />

              <Route path="/skin/anti-aging-cream" element={<AntiAgingcream />} />
              <Route path="/skin/acne-cream" element={<Acnecream />} />
              <Route path="/skin/cold-sore" element={<Coldsore />} />
              <Route path="/skin/hightide-cleanser" element={<Hightidecleanser />} />

              <Route path="/weight-loss/retatrutide-vial" element={<RetatrutideVial />} />
              <Route path="/weight-loss/oral-tirzepatide-rdt" element={<OralTirzepatideRDT />} />
              <Route path="/weight-loss/oral-semaglutide-rdt" element={<OralSemaglutideRDT />} />
              <Route path="/weight-loss/tirzepatide-injectable" element={<TirzepatideInjectable />} />
              <Route path="/weight-loss/semaglutide-injectable" element={<SemaglutideInjectable />} />

              <Route path="/peptides/vitamin-b12" element={<VitaminB12 />} />
              <Route path="/peptides/sermorelin-20mg" element={<Sermorelin20mg />} />
              <Route path="/peptides/pt-141" element={<PT141 />} />
              <Route path="/peptides/cjc-1295-ipamorelin" element={<CJC1295Ipamorelin />} />
              <Route path="/peptides/GHKCU" element={<GHKCU />} />
              <Route path="/peptides/NAD" element={<NAD />} />
              <Route path="/peptides/NADinjectable" element={<NADInjectablePage />} />
              <Route path="/peptides/bpc-157" element={<BPC157 />} />

              <Route path="/sexual-health/passion-6" element={<Passion6 />} />
              <Route path="/sexual-health/passion-12" element={<Passion12 />} />
              <Route path="/sexual-health/passion-18" element={<Passion18 />} />
              <Route path="/sexual-health/lust-6" element={<Lust6 />} />
              <Route path="/sexual-health/lust-12" element={<Lust12 />} />
              <Route path="/sexual-health/lust-18" element={<Lust18 />} />
              <Route path="/sexual-health/overdrive-plus-6" element={<OverdrivePlus6 />} />
              <Route path="/sexual-health/overdrive-plus-12" element={<OverdrivePlus12 />} />
              <Route path="/sexual-health/redpill-6" element={<Redpill6 />} />
              <Route path="/sexual-health/redpill-12" element={<Redpill12 />} />
              <Route path="/sexual-health/mach1-6" element={<Mach16 />} />
              <Route path="/sexual-health/mach1-12" element={<Mach112 />} />
              <Route path="/sexual-health/mach1-18" element={<Mach118 />} />
              <Route path="/sexual-health/epiq-chew-30" element={<EpiqChew30 />} />
              <Route path="/sexual-health/drive-plus-6" element={<DrivePlus6 />} />
              <Route path="/sexual-health/drive-plus-12" element={<DrivePlus12 />} />
              <Route path="/sexual-health/drive-plus-18" element={<DrivePlus18 />} />

              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </LayoutWithFooter>
        </RouteLoaderWrapper>
      </Router>
    </LoaderProvider>
  );
}
