import { useRef, useEffect } from "react";
import { motion, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";

const data = [
  "Private Chats",
  "Real Moments",
  "Unfiltered",
  "No Noise",
  "Unscripted",
];

function Feature() {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const velocityRef = useRef(0.6);
  const widthRef = useRef(0);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      velocityRef.current = 0.6;
    }

    const updateWidth = () => {
      if (containerRef.current) {
        const firstChild = containerRef.current.firstElementChild;
        if (firstChild) {
          widthRef.current = firstChild.offsetWidth;
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
        
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const transformX = useTransform(x, (value) => {
    if (widthRef.current === 0) return '0px';
    return `${-(value % widthRef.current)}px`;
  });

  useAnimationFrame(() => {
    x.set(x.get() + velocityRef.current);
  });

  const renderContent = () =>
    data.map((text, i) => (
      <div 
        key={i} 
        className="flex items-center gap-6 sm:gap-10 md:gap-16 md:py-4 flex-shrink-0"
        style={{
          minWidth: 'max-content',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <h1 
          className="text-white font-bold lg:text-feature text-[1.2rem] leading-none select-none whitespace-nowrap"
          style={{
            flexShrink: 0,
            minWidth: 'max-content',
            display: 'block',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          {text}
        </h1>
        <span 
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: '1.5rem',
            height: '1.5rem',
            minWidth: '1.5rem',
            minHeight: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src="/Feature_vector.svg"
            alt=""
            className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
            style={{
              WebkitTransform: "translateZ(0)",
              transform: "translateZ(0)",
              imageRendering: "crisp-edges",
              display: 'block',
              flexShrink: 0
            }}
          />
        </span>
      </div>
    ));

  return (
    <div className="w-full overflow-hidden bg-customPurple-500 py-4 sm:py-6 md:py-0 flex justify-center items-center md:h-24">
      <motion.div
        ref={containerRef}
        style={{
          x: transformX,
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
          contain: "layout style paint",
          display: 'flex',
          alignItems: 'center',
          minWidth: 'max-content'
        }}
        className="flex items-center gap-6 sm:gap-10 md:gap-16 whitespace-nowrap"
      >
        <div 
          className="flex items-center gap-6 sm:gap-10 md:gap-16"
          style={{ minWidth: 'max-content' }}
        >
          {renderContent()}
        </div>
        <div 
          className="flex items-center gap-6 sm:gap-10 md:gap-16"
          style={{ minWidth: 'max-content' }}
        >
          {renderContent()}
        </div>
        <div 
          className="flex items-center gap-6 sm:gap-10 md:gap-16"
          style={{ minWidth: 'max-content' }}
        >
          {renderContent()}
        </div>
      </motion.div>
    </div>
  );
}

export default Feature;