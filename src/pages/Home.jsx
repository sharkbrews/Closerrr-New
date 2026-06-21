import { motion } from "framer-motion";
import GradientButton from "../components/GradientButton";

// Simple fade + slide animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Floating animation for left-side decorations
const floatLeft = (delay = 0) => ({
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay
  }
});

// Slower floating animation for right-side app preview
const floatRight = {
  y: [0, -10, 0],
  transition: {
    duration: 8, // slower
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Slower rotation for right-side app preview
const rotateRight = {
  rotate: [0, -1, 1, 0],
  transition: {
    duration: 20, // slower rotation
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
  }
};

function Home() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let downloadLink = "#";
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    downloadLink = "https://apps.apple.com/app/id6744296620";
  } else if (/android/i.test(userAgent)) {
    downloadLink = "https://play.google.com/store/apps/details?id=your.android.package";
  } else if (/Win/.test(userAgent)) {
    downloadLink = "https://play.google.com/store/apps/details?id=your.android.package";
  } else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
    downloadLink = "https://apps.apple.com/app/id6744296620";
  }

  return (
    <div
      id="home"
      className="overflow-hidden min-h-[100vh] bg-secondary-500 w-full flex flex-col-reverse md:flex-row justify-center items-center gap-12 sm:gap-6 xl:gap-0 py-18 sm:py-16 px-4 sm:px-6 md:gap-12 md:px-[7rem] pt-28 md:pt-36"
    >
      {/* Left Section */}
      <motion.div 
        className="w-full md:max-w-1/2 flex flex-col justify-center relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Floating decorations */}
        <motion.img className="absolute left-[9rem]  -top-8" src="/Vector.svg" alt="" animate={floatLeft(0)} />
        <motion.img className="absolute right-[2rem]  top-[3rem]" src="/Vector_2.svg" alt="" animate={floatLeft(0.3)} />
        <motion.img className="absolute left-[2rem] md:left-[6rem]  -bottom-[10vmin]" src="/Vector_3.svg" alt="" animate={floatLeft(0.6)} />
        <motion.img className="absolute right-[1rem] bottom-[-3rem]" src="/Vector_4.svg" alt="" animate={floatLeft(0.9)} />

        <motion.div 
          className="max-w-full flex flex-col justify-center items-center md:items-start md:pt-10 md:pb-4"
          variants={fadeUp}
        >
          <motion.h1
            variants={fadeUp}
            className="text-[1.75rem] sm:text-[2rem] lg:text-heading text-center md:text-left leading-tight text-customPink-500 font-hellix-bold"
          >
            {/* Desktop View */}
            <span className="hidden md:inline">
              Be <span className="text-customPurple-500 font-fredoka">Closerrr</span> To <br className="hidden md:block" />
              The Ones You <span className="text-customPurple-500">Love</span>.
            </span>
            {/* Mobile View */}
            <span className="inline md:hidden">
              Be <span className="text-customPurple-500 font-fredoka">Closerrr</span> To The Ones <br />
              You <span className="text-customPurple-500">Love</span>.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-xl lg:text-subheading-sm font-light text-center md:text-left mt-3 sm:mt-4 w-[95%] sm:w-[90%] md:w-[80%] leading-[1.5rem] font-hellix-medium text-customBrown-500"
          >
            <span className="text-customPurple-500 font-fredoka">Closerrr</span>{" "}
            lets you connect directly with your favorite celebrities, creators,
            influencers and artists through personal messages and exclusive
            moments. <br /> No noise. No chaos. Just a safe, personal space to
            chat, bond, and stay closer than ever.
          </motion.p>

          <div className="mt-5 font-hellix-bold">
            <a href={downloadLink} target="_blank" rel="noopener noreferrer">
              <GradientButton
                width="w-[224px]"
                height="h-[52px]"
                bgFrom="from-customPurple-500"
                bgTo="to-purple-600"
                textSize="text-2xl"
                rounded="rounded-2xl"
              >
                Download App
              </GradientButton>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="w-full xl:w-1/2 flex items-center justify-center lg:justify-end px-4 sm:px-8 md:px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={fadeUp}
          className="h-[35vmax] sm:h-[20rem] lg:h-[26rem]"
          whileHover={{ scale: 1.03 }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={floatRight}
          >
            <motion.img
              className="object-contain h-full w-full"
              src="/Frame.svg"
              alt="App Preview"
              animate={rotateRight}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
