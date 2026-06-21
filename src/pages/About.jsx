import { motion } from "framer-motion";
import { useEffect } from "react";
import Highlight from "../components/Highlight";
import AOS from "aos";
import "aos/dist/aos.css";
//animation add
const data = [
  {
    heading: "Why Closerrr Feels Different",
    paragraph:
      "Unlike other platforms built for broadcasts and likes, Closerrr is built for connection. Here, it’s not about reaching millions — it’s about reaching you.",
    imgSrc: "/Highlight_1.svg",
    border: "",
  },
  {
    heading: "What Closerrr Lets You Do",
    paragraph:
      "Closerrr gives you a safe, personal space to message the people you admire, catch exclusive content they don’t share anywhere else, and how they really feel, all without the noise.",
    imgSrc: "/Highlight_2.svg",
    border: "",
  },
  {
    heading: "How Closerrr Brings You Closer",
    paragraph:
      "We keep it real, simple, and personal. No algorithms, No bots, No distractions. Just one safe space built entirely for honest connection and authentic moments.",
    imgSrc: "/Highlight_3.svg",
    border: "",
  },
];

function About() {
  useEffect(() => {
      AOS.init({
        duration: 300,
        once: false,
        easing: "ease-in-out",
      });
    }, []);
  return (
    <section 
      id="about"
      className="w-full h-fit pt-6 md:pt-12 pb-16 flex flex-col gap-12 lg:gap-20 mt-12 md:px-[4rem]"
    >
      <div className="w-full flex justify-center">
        <motion.h1
          className="text-[2.5rem] lg:text-closerrr-lg mt-6 md:mt-10 font-hellix-bold text-customPink-500 text-center"
          data-aos="fade-up"
     data-aos-duration="1000"
        >
          So, What is{" "}
          <span className="font-fredoka text-customPurple-500">Closerrr</span>?
        </motion.h1>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-0 xl:px-[3rem]">
        <div className="w-full md:w-1/2 flex items-center justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-[80%] sm:w-[70%] md:w-[30.625rem] max-w-[450px]"
          >
            <motion.img
              src="/closerrr_1.svg"
              alt="About Closerrr"
              loading="eager"
              className="w-full h-full object-contain"
                animate={{
                rotate: [0, -1.5, 1.5, 0],
                transition: {
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: [0.5, 0, 0.3, 1],
                  
                },
              }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex px-8 md:px-0"
        >
          <p className="text-xl sm:text-xl lg:text-closerrr-detail md:text-subheading-sm text-customBrown-500 text-center md:text-left leading-relaxed lg:leading-[2.25rem] font-hellix-medium">
            <span className="font-fredoka text-customPurple-500">Closerrr</span>{" "}
            is where you can truly connect with the people you admire most and
            not just follow them from afar. Whether it's your favorite creator,
            influencer, actor, athlete, musician, or someone you've always
            looked up to, you can send them personal messages privately and
            securely, see content they don't share anywhere else, and stay
            updated on everything they're doing.{" "}
            <br className="hidden md:block" />
            No noise. No algorithms. Just real connection that brings you a
            little{" "}
            <span className="">
              closer
            </span>{" "}
            every day.
          </p>
        </motion.div>
      </div>

      {/* Card Section */}
      <div className="w-full h-fit mt-20 p-2 flex flex-wrap justify-center gap-8 md:gap-12 xl:gap-16">
        {data.map((obj, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[28%] flex justify-center"
          >
            <Highlight {...obj} order={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
