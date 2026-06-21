import AOS from "aos";

import "aos/dist/aos.css";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
import HeartCanvas from "../components/HeartCanvas"
import TechCanvas from '../components/TechCanvas'
import img1 from '../../public/Vector.svg'
import img2 from '../../public/Vector_2.svg'
import img3 from '../../public/Vector_3.svg'
import img4 from '../../public/Vector_4.svg'
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function Download() {
  const floatLeft = (delay = 0) => ({
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay
  }
});
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const ref = useRef();
  const red = useRef();
  const animationRef = useRef();

  const debouncedRefresh = useCallback(
    debounce(() => ScrollTrigger.refresh(), 150),
    []
  );

  useEffect(() => {
    const calculateEnd = () =>
      red.current.offsetTop + red.current.offsetHeight - ref.current.offsetTop;

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: () => `${calculateEnd()} 70%`,
      scrub: 0.8,
      pin: true,
      invalidateOnRefresh: true,
      refreshPriority: -1,
      onUpdate: (self) => {
        if (animationRef.current) {
          animationRef.current.kill();
        }

        const progress = self.progress;
        const opacity = 0.05 + (1 - 0.05) * (1 - progress);

        animationRef.current = gsap.set(ref.current, {
          opacity: opacity,
          scale: 0.98,
          force3D: true,
        });
      },
    });

    const handleResize = () => debouncedRefresh();
    window.addEventListener("resize", handleResize, { passive: true });

    const observer = new ResizeObserver(() => debouncedRefresh());
    if (ref.current) observer.observe(ref.current);
    if (red.current) observer.observe(red.current);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstance.kill();
      observer.disconnect();
      clearTimeout(refreshTimer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [debouncedRefresh]);

  let androidLink =
    "https://play.google.com/store/apps/details?id=your.android.package";
  let iphoneLink = "https://apps.apple.com/app/id6744296620";

  return (
    <div
      className="w-full h-fit flex flex-col relative -mt-10 items-center"
    >
      {/* Top section */}
      <div
  ref={ref}
  className="relative h-screen w-full mb-[13vmax] px-4 md:px-8"
  style={{
    WebkitTransform: "translateZ(0)",
    transform: "translateZ(0)",
    WebkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    willChange: "transform, opacity",
  }}
>
{/* <motion.img src={img1} alt="image" className="absolute top-[10rem] left-[50rem] h-[2rem]" animate={floatLeft(0.3)} />
<motion.img src={img2} alt="image" className="absolute top-[15rem] left-[20rem] h-[1rem]  " animate={floatLeft(0.7)}/>
<motion.img src={img3} alt="image" className="absolute  top-[35rem] left-[45rem] h-[1rem] "animate={floatLeft(0.5)}/>
<motion.img src={img4} alt="image" className="absolute top-[40rem] left-[25rem] h-[4rem] "animate={floatLeft(0.8)} /> */}
{/* <HeartCanvas/> */}
  {/* Canvas in the background */}
  <TechCanvas className="absolute inset-0 w-full h-full mr-2" />

  {/* Heading centered over the canvas */}
  <h1 className="absolute inset-0 flex justify-center items-center text-center lg:text-pinText text-5xl leading-tight font-hellix-bold text-customPurple-500 px-4">
    {/* Desktop View */}
    <span className="hidden md:inline">
      Built with love for you and <br /> your loved ones.
    </span>
    {/* Mobile View */}
    <span className="inline md:hidden">
      Build with love <br /> for you and <br /> your loved one.
    </span>
  </h1>
</div>

      {/* Card with glowing border */}
      <div
        id="download"
        ref={red}
        className="relative max-w-[90%] lg:min-w-[83%] md:max-w-[80%] rounded-[40px] p-[6px] overflow-hidden"
      >
        {/* Moving gradient border */}
        <div 
          className="absolute top-1/2 left-1/2 w-[150vmax] h-[150vmax] bg-[conic-gradient(from_0deg,#E43179,#f472b6,#8b5cf6,#E43179)] animate-moving-border"
          style={{ transformOrigin: 'center center' }}
        />

        {/* Inner content */}
        <div className="relative rounded-[34px] overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#fee9ff] to-white" />

          <div className="relative w-fit lg:w-full flex flex-col lg:items-end items-center lg:flex-row">
            {/* Text content */}
            <div className="max-w-full lg:w-2/3 lg:pl-[4em] lg:py-[9em] pt-[3em] lg:px-0 px-[2em] flex flex-col lg:gap-5 gap-3 md:gap-1 justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className="lg:text-download-subheading text-2xl text-customBrown-500 font-hellix-medium leading-[1.5rem] md:leading-[2.25rem]">
                Some bonds deserve their own space – made for the ones you hold
                closest.
              </h1>
              <h1 className="md:text-download-heading text-[2rem] text-customPurple-500 leading-tight font-hellix-bold">
                Download <span className="font-fredoka">Closerrr</span> today!
              </h1>
              <div className="w-full flex gap-2 justify-center lg:justify-start lg:gap-6 mt-2">
                <a href={iphoneLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/ios.svg"
                    alt="iOS App Store"
                    className="md:w-[11.25rem] w-[9.5rem]"
                  />
                </a>

                <a href={androidLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/android.svg"
                    alt="Android Play Store"
                    className="md:w-[11.25rem] w-[9.5rem]"
                  />
                </a>
              </div>
            </div>

            {/* Phone image */}
            <div
              className="lg:flex lg:w-auto flex items-end justify-center pt-6 md:pt-10"
              data-aos="fade-up"
            >
              <img
                src="/phone.svg"
                alt="Phone preview"
                className="w-[30vmax] lg:max-h-[27.25rem] max-w-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Local glowing border animation */}
      <style>
        {`
          @keyframes spin-gradient {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .animate-moving-border {
            animation: spin-gradient 4s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Download;
