import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "../utils/ScrollDirection";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { memo } from "react";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton"
// Navigation item configuration
const NAVIGATION_ITEMS = [
  { label: "What is Closerrr?", target: "about" },
  { label: "For Creators", target: "create" },
];
// Platform-specific download links
const DOWNLOAD_LINKS = {
  ios: "https://apps.apple.com/app/id6744296620",
  android: "https://play.google.com/store/apps/details?id=your.android.package",
  default: "https://play.google.com/store/apps/details?id=your.android.package",
};

// Smooth scroll navigation component
const SmoothScrollLink = ({ to, children, className, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 300);
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }
    
    if (onClick) onClick();
  };

  return (
    <a href={`/#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Brand logo component
const BrandLogo = ({ onClick }) => (
  <div
    onClick={onClick}
    className="flex gap-2 items-center cursor-pointer"
  >
    <div className="lg:h-[3.635rem] h-[2rem]">
      <img
        className="w-full h-full object-contain"
        src="/Final_Closerrr_1.png"
        alt="Closerrr Logo"
      />
    </div>
    <h1 className="lg:text-closerrr text-[1.6rem] font-fredoka text-customPurple-500">
      Closerrr
    </h1>
  </div>
);

// Mobile menu component - Full screen slide-in panel
const MobileMenu = ({ isOpen, onClose, isCreatorsRoute, downloadLink }) => (
  <div 
    className={`fixed  inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}
    style={{
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}
  >
    {/* Backdrop */}
    <div 
      className="absolute inset-0 bg-black/60"
      onClick={onClose}
    />
    
    {/* Slide-in Menu */}
    <div 
      className={`relative z-10 text-customPurple-500 float-right h-full w-80 max-w-[85%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-white flex-shrink-0">
       <img
        className=" h-10 "
        src="/Final_Closerrr_1.png"
        alt="Closerrr Logo"
      />
        <h2 className="text-3xl font-fredoka relative right-5 text-customPurple-500">Closerrr</h2>
        <button 
          onClick={onClose}
          className="p-2 text-customPurple-500 hover:text-customPurple-500 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      
      {/* Scrollable Menu Content */}
      <div className="flex-1 overflow-y-auto py-4 px-2 bg-white">
        {NAVIGATION_ITEMS.map((item, index) => (
          <SmoothScrollLink
            key={item.target}
            to={item.target}
            className="block px-4 py-4 text-2xl text-customPink-500  hover:bg-gray-50 rounded-lg transition-all duration-200 font-hellix-bold"
            onClick={onClose}
            style={{ 
              transitionDelay: `${index * 50}ms`,
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            {item.label}
          </SmoothScrollLink>
        ))}
        
        <SmoothScrollLink
          to="faq"
          className="block px-4 py-4 text-2xl text-customPink-500  hover:bg-gray-50 rounded-lg transition-all duration-200 font-hellix-bold"
          onClick={onClose}
          style={{ 
            transitionDelay: `${NAVIGATION_ITEMS.length * 50}ms`,
            transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
            opacity: isOpen ? 1 : 0
          }}
        >
          FAQs
        </SmoothScrollLink>
      </div>

      {/* Fixed Download Button at Bottom */}
      {!isCreatorsRoute && (
        <div className="p-2 border-t border-gray-200 bg-white flex-shrink-0">
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 px-6 hover:bg-customPurple-600 text-white text-center rounded-xl font-hellix-bold text-2xl transition-all duration-200 transform hover:scale-105"
            style={{ 
              transitionDelay: `${(NAVIGATION_ITEMS.length + 1) * 50}ms`,
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
          <GradientButton>
            Download App
            </GradientButton>
          </a>
        </div>
      )}
    </div>
  </div>
);

// Desktop action links component
const DesktopActions = ({ isCreatorsRoute, downloadLink }) => (
  <div className="ml-auto hidden lg:flex items-center gap-4 ">
    <>
      <SmoothScrollLink
        to="faq"
        className="text-customPink-500 transition-colors duration-200 font-hellix-bold relative right-8 text-2xl"
      >
        FAQs
      </SmoothScrollLink>
<GradientButton>
      <a
        href={downloadLink}
        className="text-white px-4 py-2 hover:text-customPurple-600 transition-colors duration-200 font-hellix-bold text-xl"
      >
        Download App
      </a>
  </GradientButton>
    </>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();
  const location = useLocation();

  const isCreatorsRoute = location.pathname === "/join-closerrr";

  // Platform detection for download links
  const getDownloadLink = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return DOWNLOAD_LINKS.ios;
    } else if (/android/i.test(userAgent)) {
      return DOWNLOAD_LINKS.android;
    } else if (/Win/.test(userAgent)) {
      return DOWNLOAD_LINKS.default;
    } else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
      return DOWNLOAD_LINKS.ios;
    }
    
    return DOWNLOAD_LINKS.default;
  };

  const downloadLink = getDownloadLink();

  // Scroll position handler
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on the body
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
      
      return () => {
        // Restore the scroll position when menu is closed
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  // Navigation handlers
  const handleLogoClick = () => navigate("/");
  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  // Dynamic navbar classes - Different for mobile and desktop
  const navbarClasses = [
    // Mobile: full width, no rounded corners, positioned at top
    "fixed lg:top-5 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-5xl",
    "top-0 left-0 w-full lg:w-auto h-16 md:h-24",
    "bg-white/80 backdrop-blur-sm font-hellix-medium shadow-md",
    "flex justify-center items-center px-4 lg:px-6 md:px-10",
    "lg:rounded-full", // Only rounded on desktop
    "transition-transform ease-in-out duration-500 z-50",
    scrollDirection === "down" && !isAtTop ? "-translate-y-32" : "translate-y-0"
  ].filter(Boolean).join(" ");

  return (
    <div className={navbarClasses}>
      {/* Mobile Layout */}
      <div className="flex lg:hidden items-center justify-between w-full px-4">
        <BrandLogo onClick={handleLogoClick} />
        <button
          onClick={handleMobileMenuToggle}
          className="text-customPurple-500 hover:text-customPurple-500 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative items-center justify-between w-full min-w-6xl mx-auto px-20 gap-10">
        {/* Left Navigation Items - Desktop */}
        <div className="flex items-center ml-5 gap-5 flex-1">
          {NAVIGATION_ITEMS.map((item) => (
            <SmoothScrollLink
              key={item.target}
              to={item.target}
              className="text-customPink-500 transition-colors duration-200 font-hellix-bold text-sm md:text-2xl whitespace-nowrap"
            >
              {item.label}
            </SmoothScrollLink>
          ))}
        </div>

        {/* Brand Logo - Centered on desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <BrandLogo onClick={handleLogoClick} />
        </div>

        {/* Right Side - Desktop Actions */}
        <div className="flex items-center mr-14 justify-end flex-1">
          <DesktopActions 
            isCreatorsRoute={isCreatorsRoute}
            downloadLink={downloadLink}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        isCreatorsRoute={isCreatorsRoute}
        downloadLink={downloadLink}
      />
    </div>
  );
};

export default Navbar;