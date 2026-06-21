import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
    "/join-closerrr/termsandconditions",
    "/join-closerrr/privacyandpolicy",
  ].includes(location.pathname);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      <ScrollToTop />

      {isStandalonePage ? (
        <Routes>
          <Route path="/creator/termsandconditions" element={<Navigate to="/join-closerrr/termsandconditions" replace />} />
          <Route path="/join-closerrr/termsandconditions" element={<CreatorTAndC />} />
          <Route path="/creator/privacyandpolicy" element={<Navigate to="/join-closerrr/privacyandpolicy" replace />} />
          <Route
            path="/join-closerrr/privacyandpolicy"
            element={<CreatorPrivacyAndPolicy />}
          />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />} />
            <Route path="/join-closerrr" element={<Creators />} />
            <Route path="/creator" element={<Navigate to="/join-closerrr" replace />} />

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
