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
    
    if (onClick) onClick();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 350);
    } else {
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }, 150);
    }
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
const MobileMenu = ({ isOpen, onClose, onLogoClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoTap = () => {
    // Close menu first
    onClose();
    // Then navigate after a tiny delay so scroll-lock clears
    setTimeout(() => {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  const handleNavClick = (target) => {
    // Close menu first
    onClose();
    // Then scroll after scroll-lock clears
    setTimeout(() => {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo(target, {
            smooth: true,
            duration: 500,
            offset: -50,
          });
        }, 350);
      } else {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -50,
        });
      }
    }, 50);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{
        overflow: 'hidden',
        height: '100dvh',
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
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />
      
      {/* Slide-in Menu */}
      <div 
        className={`relative z-10 float-right w-80 max-w-[85%] bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: '100dvh' }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <div 
            onClick={handleLogoTap}
            className="flex gap-2 items-center cursor-pointer"
          >
            <img
              className="h-9"
              src="/Final_Closerrr_1.png"
              alt="Closerrr Logo"
            />
            <h2 className="text-2xl font-fredoka text-customPurple-500">
              Closerrr
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-customPurple-500 rounded-full transition-colors"
          >
            <X size={22} />
          </button>
        </div>
        
        {/* Menu Links */}
        <div className="flex-1 overflow-y-auto">
          <nav className="py-4 px-3">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.target}
                href={`/#${item.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.target);
                }}
                className="flex items-center gap-3 px-5 py-4 text-customPurple-500 font-hellix-bold text-lg rounded-xl active:bg-gray-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <a
              href="/#faq"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("faq");
              }}
              className="flex items-center gap-3 px-5 py-4 text-customPurple-500 font-hellix-bold text-lg rounded-xl active:bg-gray-50 transition-colors"
            >
              FAQs
            </a>
          </nav>
        </div>

        {/* Download Button - always visible at bottom */}
        <div
          className="px-5 pt-4 border-t border-gray-100 flex-shrink-0"
          style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <a
            href="/#download"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("download");
            }}
            className="block w-full"
          >
            <GradientButton width="w-full" height="h-12" textSize="text-lg">
              Download App
            </GradientButton>
          </a>
        </div>
      </div>
    </div>
  );
};

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
    const html = document.documentElement;
    const body = document.body;
    if (isMobileMenuOpen) {
      body.style.overflow = 'hidden';
      html.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
      html.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
      html.style.overflow = '';
    };
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