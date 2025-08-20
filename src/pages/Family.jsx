import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GradientButton from "../components/GradientButton";

function Family() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-fit mt-16 md:mt-20 lg:mt-24 flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-8 md:h-[35vw]"
    >
      {/* Left Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center relative bottom-10 md:bottom-0"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img
          src="/Family.svg"
          alt="Family"
          className="h-[29.375rem] object-contain"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -1.5, 1.5, 0],
          }}
          transition={{
            y: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: [0.5, 0, 0.3, 1] },
            rotate: { duration: 15, repeat: Infinity, repeatType: "reverse", ease: [0.5, 0, 0.3, 1] },
          }}
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="w-full lg:w-[40vw] flex flex-col items-center lg:items-start justify-center text-center md:text-left gap-6 relative bottom-20 md:bottom-0"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="text-customPurple-500 text-left md:text-center lg:text-start lg:text-family-heading text-6xl font-hellix-bold">
        You. Them. <br /> Nothing in <br /> between.
        </h1>

        {/* Gradient Button */}
        <GradientButton
          width="w-[19rem] md:w-sm"
          height="h-[52px]"
          gradientFrom="from-customPink-500"
          gradientTo="to-customPink-500"
          textSize="text-xl md:text-2xl"
          rounded="rounded-2xl"
          className="mt-5 md:mt-0"
        >
          <a
            href="/creator"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-full text-white font-hellix-bold no-underline transition-all duration-150 hover:-translate-y-1 "
          >
            <span className="leading-none">Join Our Creator Family</span>
            <motion.img
              src="/Arrow.svg"
              alt="Arrow"
              className="flex-shrink-0 object-contain"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </a>
        </GradientButton>
      </motion.div>
    </div>
  );
}

export default Family;
