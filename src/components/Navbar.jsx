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


// Smooth scroll navigation component
const SmoothScrollLink = ({ to, children, className, onClick, style }) => {
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
    <a href={`/#${to}`} onClick={handleClick} className={className} style={style}>
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
const MobileMenu = ({ isOpen, onClose, onLogoClick }) => (
  <div 
    className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
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
      className="absolute inset-0 bg-black/40 backdrop-blur-[3px] transition-opacity duration-300"
      onClick={onClose}
    />
    
    {/* Slide-in Menu */}
    <div 
      className={`relative z-10 text-customPurple-500 float-right h-full w-80 max-w-[85%] bg-white/90 backdrop-blur-xl border-l border-purple-100/50 shadow-[0_0_50px_rgba(75,22,76,0.15)] transform transition-transform duration-300 ease-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between p-6 border-b border-purple-50 bg-white/50 backdrop-blur-sm flex-shrink-0">
        <div 
          onClick={() => {
            onLogoClick();
            onClose();
          }}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <img
            className="h-10 transition-transform duration-300 group-hover:scale-105"
            src="/Final_Closerrr_1.png"
            alt="Closerrr Logo"
          />
          <h2 className="text-3xl font-fredoka text-customPurple-500 transition-colors group-hover:text-customPink-500">
            Closerrr
          </h2>
        </div>
        <button 
          onClick={onClose}
          className="p-2 text-customPurple-500 hover:text-customPink-500 hover:bg-purple-50/50 rounded-full transition-all duration-200"
        >
          <X size={24} />
        </button>
      </div>
      
      {/* Scrollable Menu Content */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {NAVIGATION_ITEMS.map((item, index) => (
          <SmoothScrollLink
            key={item.target}
            to={item.target}
            className="block px-5 py-4 text-2xl text-customPurple-500 hover:text-customPink-500 hover:bg-purple-50/30 rounded-xl transition-all duration-200 font-hellix-bold"
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
          className="block px-5 py-4 text-2xl text-customPurple-500 hover:text-customPink-500 hover:bg-purple-50/30 rounded-xl transition-all duration-200 font-hellix-bold"
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
      <div className="p-6 border-t border-purple-50 bg-white/50 backdrop-blur-sm flex-shrink-0 flex justify-center">
        <SmoothScrollLink
          to="download"
          onClick={onClose}
          className="w-full flex justify-center"
          style={{ 
            transitionDelay: `${(NAVIGATION_ITEMS.length + 1) * 50}ms`,
            transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: isOpen ? 1 : 0
          }}
        >
          <GradientButton width="w-full" height="h-14" textSize="text-xl">
            Download App
          </GradientButton>
        </SmoothScrollLink>
      </div>
    </div>
  </div>
);

// Desktop action links component
const DesktopActions = ({ isCreatorsRoute }) => (
  <div className="ml-auto hidden lg:flex items-center gap-4 ">
    <>
      <SmoothScrollLink
        to="faq"
        className="text-customPink-500 transition-colors duration-200 font-hellix-bold relative right-8 text-2xl"
      >
        FAQs
      </SmoothScrollLink>
<GradientButton>
      <SmoothScrollLink
        to="download"
        className="text-white px-4 py-2 hover:text-customPurple-600 transition-colors duration-200 font-hellix-bold text-xl"
      >
        Download App
      </SmoothScrollLink>
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
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
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
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        onLogoClick={handleLogoClick}
      />
    </div>
  );
};

export default Navbar;