import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
import Creators from "./pages/Creators";
import ScrollToTop from "./components/ScrollToTop";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import CreatorTAndC from "./pages/CreatorTAndC";
import CreatorPrivacyAndPolicy from "./pages/CreatorPrivacyAndPolicy";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Third from "./pages/Third";
import About from "./pages/About";
import Family from "./pages/Family";
import Download from "./pages/Download";
import Create from "./pages/Create";
import FAQs from "./pages/FAQs";
import Layout from "./Layout";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  //  only creator legal pages are standalone
  const isStandalonePage = [
    "/creator/termsandconditions",
    "/creator/privacyandpolicy",
  ].includes(location.pathname);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <ScrollToTop />

      {isStandalonePage ? (
        <Routes>
          <Route path="/creator/termsandconditions" element={<CreatorTAndC />} />
          <Route
            path="/creator/privacyandpolicy"
            element={<CreatorPrivacyAndPolicy />}
          />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />} />
            <Route path="/creator" element={<Creators />} />

            {/* Normal legal pages */}
            <Route
              path="/legal/kreznor-vortex-823slf"
              element={<TermsAndCondition />}
            />
            <Route
              path="/legal/xyntrax-morvulon-999tfb"
              element={<PrivacyAndPolicy />}
            />

            {/* Extra accessible paths */}
            <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
            <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy />} />
          </Routes>
          <Footer />
          <Rights />
        </>
      )}
    </div>
  );
};

export default App;
