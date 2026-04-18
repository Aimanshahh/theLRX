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

// Chatbot
// import ChatbotWidget from "../components/chatbot";

// Pages
import AboutUs from "../pages/AboutUs";
import FAQspage from "../pages/FAQspage";
import Howitworks from "../pages/Howitworks";
import Blog from "../pages/Blog";
import Medicalexperts from "../pages/Medicalexperts";
import Signin from "../pages/Signin";
import Register from "../pages/Registration";
import DetailedLab from "../pages/DetailedLab";
import Profile from "../pages/profilepage";

// FAQ Categories
import TheBasics from "../components/FAQscategories/TheBasics";
import AboutYourVisits from "../components/FAQsCategories/AboutYourVisits";
import Medicalcare from "../components/FAQsCategories/Medicalcare";
import Shipping from "../components/FAQsCategories/Shipping";
import Troubleshooting from "../components/FAQsCategories/Troubleshooting";
import PrivacyAndSecurity from "../components/FAQscategories/PrivacyAndSecurity";

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
import Glow from "../components/Medicines/PepTides/Glow.jsx";
import Wolverine from "../components/Medicines/PepTides/Wolverine.jsx";
import TB500 from "../components/Medicines/PepTides/TB-500.jsx";
import Glutathione from "../components/Medicines/PepTides/Glutathione.jsx";

// Sexual Health
import Passion6 from "../components/Medicines/SexualHealth/Passion6";
import Passion12 from "../components/Medicines/SexualHealth/Passion12";
import Passion18 from "../components/Medicines/SexualHealth/Passion18";
import Lust6 from "../components/Medicines/SexualHealth/Lust6";
import Lust12 from "../components/Medicines/SexualHealth/Lust12";
import Lust18 from "../components/Medicines/SexualHealth/Lust18";
import OverdrivePlus6 from "../components/Medicines/SexualHealth/OverdrivePlus6";
import OverdrivePlus12 from "../components/Medicines/SexualHealth/OverdrivePlus12";
import OverdrivePlus18Page from "../components/Medicines/SexualHealth/OverdrivePlus18";
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
import FunctionalBloodTest from "../components/Medicines/Labs/FunctionalBloodTest";
import Lab2 from "../components/Medicines/Labs/Lab2";

// HeroCardsPages
import Buildmuscle from "../components/HeroCardPages/Buildmuscle.jsx";
import Weightloss from "../components/HeroCardPages/Weightloss.jsx";
import Fixyourskin from "../components/HeroCardPages/fixyourskin.jsx";
import Fixyourrecovery from "../components/HeroCardPages/Fixyourrecovery.jsx";
import Wantmoresex from "../components/HeroCardPages/wantmoresex.jsx";
import Stoplowenergy from "../components/HeroCardPages/Stoplowenergy.jsx";

// PrivacyPolicy and Terms&Condition
import PrivacyPolicy from "../pages/privacypolicy.jsx";
import TermsAndConditions from "../pages/termsandcondition.jsx";
import RefundPolicy from "../pages/Refundpolicy.jsx";
import TelehealthConsent from "../pages/Telehealthconsent.jsx";
import PressCenter from "../pages/presscenter.jsx";
import CustomerHelpCenter from "../pages/customerhelpcenter.jsx";
import Professionals from "../pages/professionals.jsx";
import Providers from "../pages/provider.jsx";

/* ------------------- LAYOUT ------------------- */

function LayoutWithFooter({ children }) {
  const { pathname } = useLocation();
  console.log("CURRENT PATH:", pathname);

  const showTopBanner = pathname === "/";

  const showNavbar =
    pathname === "/" ||
    pathname.startsWith("/weight-loss") ||
    pathname.startsWith("/peptides") ||
    pathname.startsWith("/sexual-health") ||
    pathname.startsWith("/labs") ||
    pathname === "/build-muscle" ||
    pathname === "/weight-loss-program" ||
    pathname === "/fix-your-skin" ||
    pathname === "/want-more-sex" ||
    pathname === "/DetailedLab" ||
    pathname === "/stop-low-energy";

  const hideFooter =
    pathname === "/signin" ||
    pathname === "/register" ||
    pathname === "/profile" ||
    pathname.startsWith("/labs");

  return (
    <>
      {showTopBanner && <TopBanner />}
      {showNavbar && <Navbar />}
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
              <Route path="/DetailedLab" element={<DetailedLab />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/faqs/basics" element={<TheBasics />} />
              <Route path="/faqs/visits" element={<AboutYourVisits />} />
              <Route path="/faqs/medical-care" element={<Medicalcare />} />
              <Route path="/faqs/shipping" element={<Shipping />} />
              <Route path="/faqs/troubleshooting" element={<Troubleshooting />} />
              <Route path="/faqs/privacy-security" element={<PrivacyAndSecurity />} />

              <Route path="/labs/Functional-Blood-Test" element={<FunctionalBloodTest />} />

              <Route path="/weight-loss/retatrutide-vial" element={<RetatrutideVial />} />
              <Route path="/weight-loss/oral-tirzepatide-rdt" element={<OralTirzepatideRDT />} />
              <Route path="/weight-loss/oral-semaglutide-rdt" element={<OralSemaglutideRDT />} />
              <Route path="/weight-loss/tirzepatide-injectable" element={<TirzepatideInjectable />} />
              <Route path="/weight-loss/semaglutide-injectable" element={<SemaglutideInjectable />} />

              <Route path="/peptides/vitamin-b12" element={<VitaminB12 />} />
              <Route path="/peptides/sermorelin" element={<Sermorelin20mg />} />
              <Route path="/peptides/pt-141" element={<PT141 />} />
              <Route path="/peptides/cjc-1295-ipamorelin" element={<CJC1295Ipamorelin />} />
              <Route path="/peptides/GHKCU" element={<GHKCU />} />
              <Route path="/peptides/NAD" element={<NAD />} />
              <Route path="/peptides/NADinjectable" element={<NADInjectablePage />} />
              <Route path="/peptides/bpc-157" element={<BPC157 />} />
              <Route path="/peptides/glow" element={<Glow />} />
              <Route path="/peptides/wolverine" element={<Wolverine />} />
              <Route path="/peptides/tb-500" element={<TB500 />} />
              <Route path="/peptides/glutathione" element={<Glutathione />} />

              <Route path="/sexual-health/passion-6" element={<Passion6 />} />
              <Route path="/sexual-health/passion-12" element={<Passion12 />} />
              <Route path="/sexual-health/passion-18" element={<Passion18 />} />
              <Route path="/sexual-health/lust-6" element={<Lust6 />} />
              <Route path="/sexual-health/lust-12" element={<Lust12 />} />
              <Route path="/sexual-health/lust-18" element={<Lust18 />} />
              <Route path="/sexual-health/overdrive-plus-6" element={<OverdrivePlus6 />} />
              <Route path="/sexual-health/overdrive-plus-12" element={<OverdrivePlus12 />} />
              <Route path="/sexual-health/overdrive-plus-18" element={<OverdrivePlus18Page />} />
              <Route path="/sexual-health/redpill-6" element={<Redpill6 />} />
              <Route path="/sexual-health/redpill-12" element={<Redpill12 />} />
              <Route path="/sexual-health/mach1-6" element={<Mach16 />} />
              <Route path="/sexual-health/mach1-12" element={<Mach112 />} />
              <Route path="/sexual-health/mach1-18" element={<Mach118 />} />
              <Route path="/sexual-health/epiq-chew-30" element={<EpiqChew30 />} />
              <Route path="/sexual-health/drive-plus-6" element={<DrivePlus6 />} />
              <Route path="/sexual-health/drive-plus-12" element={<DrivePlus12 />} />
              <Route path="/sexual-health/drive-plus-18" element={<DrivePlus18 />} />

              <Route path="/build-muscle" element={<Buildmuscle />} />
              <Route path="/weight-loss-program" element={<Weightloss />} />
              <Route path="/fix-your-skin" element={<Fixyourskin />} />
              <Route path="/fix-your-recovery" element={<Fixyourrecovery />} />
              <Route path="/want-more-sex" element={<Wantmoresex />} />
              <Route path="/stop-low-energy" element={<Stoplowenergy />} />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/telehealth-consent" element={<TelehealthConsent />} />
              <Route path="/press-center" element={<PressCenter />} />
              <Route path="/customer-help-center" element={<CustomerHelpCenter />} />
              <Route path="/professionals" element={<Professionals />} />
              <Route path="/providers" element={<Providers />} />

              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </LayoutWithFooter>

          {/* ✅ Chatbot — floats on every page, outside routes so it persists */}
          {/* <ChatbotWidget /> */}

        </RouteLoaderWrapper>
      </Router>
    </LoaderProvider>
  );
}