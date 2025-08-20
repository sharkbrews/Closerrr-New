import { useEffect, useRef, useCallback } from "react";
import "../index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);
import HeartCanvas from "../components/HeartCanvas";
import { motion } from "framer-motion";
import img2 from "../../public/Vector_2.svg";




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

const data = [
  {
    heading: ["Your Favorite's", " Personal Messages."],
    paragraph: [
      "Every message. Every moment. From",
      "the heart, made to feel personal.",
    ],
    imgSrc: "/Features_1.webp",
  },
  { imgSrc: "/Frame_feature.svg" },
  {
    heading: ["Exclusive Content,", "Just for You."],
    paragraph: [
      "Stories, videos, memories and lives",
      "that are meant just for you.",
    ],
    imgSrc: "/Features_2.webp",
  },
  { imgSrc: "/Frame_feature.svg" },
  {
    heading: ["Never Miss a Moment,", "Stay in Sync With Them."],
    paragraph: [
      "Catch up on their every story and",
      "update so you're always in the loop.",
    ],
    imgSrc: "/Feature_3.webp",
  },
];

function Third() {
  const ref = useRef(null);
  const red = useRef(null);

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
      scrub: 0.6,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      refreshPriority: -1,
    });

    gsap.to(ref.current, {
      scale: 0.98,
      opacity: 0.0,
      ease: "power2.out",
      force3D: true,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: () => `${calculateEnd()} 70%`,
        scrub: 0.6,
        invalidateOnRefresh: true,
        refreshPriority: -1,
      },
    });

    const handleResize = () => debouncedRefresh();
    window.addEventListener("resize", handleResize, { passive: true });

    const observer = new ResizeObserver(() => debouncedRefresh());
    if (ref.current) observer.observe(ref.current);
    if (red.current) observer.observe(red.current);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTriggerInstance.kill();
      observer.disconnect();
      clearTimeout(refreshTimer);
    };
  }, [debouncedRefresh]);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false, // animate every time on scroll
      easing: "ease-out-cubic",
    });
  }, []);


  const floatLeft = (delay = 0) => ({
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay
  }
});
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top pinned section */}
      <div
        ref={ref}
        className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 safari-optimized"
        style={{
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform, opacity",
        }}
      >
        {/* <motion.img
          src={img2}
          alt="image"
          className="absolute top-[35rem] left-[43rem] h-[2rem]  "
          animate={floatLeft(0.7)}
        /> */}

        <HeartCanvas />
        <h1 className="lg:text-pinText text-5xl text-center font-hellix-bold text-customPink-500 leading-tight">
          The ones you love aren't <br /> far anymore...
        </h1>
      </div>

      {/* Cards with AOS */}
      <div
        ref={red}
        className="w-full flex z-10 flex-wrap justify-center items-center gap-y-12 gap-[1rem]"
      >
        {data.map((obj, index) =>
          obj.heading ? (
            <div
              key={index}
              data-aos="fade-up" // 👈 animate the whole card as one
              data-aos-delay={index * 150} // stagger animations
              className="max-w-[400px] flex flex-col items-center gap-4 px-4"
            >
              <h2 className="text-center text-[1.7rem] md:text-2xl lg:text-subheading font-hellix-bold text-customPurple-500 leading-[2rem]">
                {obj.heading[0]} <br /> {obj.heading[1]}
              </h2>
              <p className="text-center text-lg md:text-lg lg:text-subheading-sm text-customBrown-500 font-hellix-medium leading-[1.5rem]">
                {obj.paragraph[0]} <br /> {obj.paragraph[1]}
              </p>
              <div className="w-fit mt-8 flex justify-center items-center">
                <img
                  className="lg:max-w-[15.9rem] max-w-[250px]"
                  src={obj.imgSrc}
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div
              key={index}
              data-aos="zoom-in" // different animation for separators
              data-aos-delay={index * 150}
              className="hidden md:flex justify-center items-center w-[85%] md:w-auto mt-[7rem]"
            >
              <img
                className="object-contain w-[7vw] max-w-[200px]"
                src={obj.imgSrc}
                loading="lazy"
                alt=""
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Third;
