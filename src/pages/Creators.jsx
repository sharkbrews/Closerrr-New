import { useEffect } from "react";
import { motion } from "framer-motion";
import Form from "../components/Form";

function Creators() {
  useEffect(() => {
    document.title = "Join Closerrr";
    return () => {
      document.title = "Closerrr";
    };
  }, []);

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="flex-1 min-h-screen scroll-smooth hide-scrollbar">
      <div className="w-full min-h-screen flex flex-col ">
        <motion.div
          className="w-full min-h-screen flex flex-col items-center justify-center pt-16 md:pt-24 pb-36 md:pb-0 gap-[3.3vmax]"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="flex flex-col items-center justify-center text-center text-customPink-500 lg:text-create-heading-lg text-5xl font-hellix-bold mb-0 leading-tight"
            variants={fadeInUp}
          >
            <span>Join Our</span>
            <span className="text-customPurple-500 relative flex items-center justify-center gap-1">
              Creator Family
              <motion.span
                className="relative -top-2 md:-top-3"
                initial={{ rotate: 0, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
              >
                <img
                  className="w-[1.6vmax] md:w-5 object-contain"
                  src="/Vector_2.svg"
                  alt=""
                />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="w-[85%] md:max-w-[70%] lg:max-w-[71%] lg:leading-[2rem] text-center text-lg md:text-lg lg:text-creator-subheading font-hellix-medium text-[#4B164C]" 
            // style={{ textShadow: "4px 2px 4px rgba(0, 0, 0, 0.25)" }}
            variants={fadeInUp}
          >
            If you believe in meaningful connections and creating something real
            with your audience,  <span className="font-fredoka text-customPurple-500">Closerrr</span> might just be the space you've been
            looking for. Please fill out the{" "}
            <strong className="font-hellix-bold">query form</strong> below to
            tell us a little about yourself — and we'll take it from there.{" "}
            <br /> Before you begin, please take a moment to read the{" "}
            <span className="font-hellix-bold">"Before You Apply"</span> section
            as it shares a little insight into the kind of creators we hope to
            welcome to <span className="font-fredoka text-customPurple-500">Closerrr</span>.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full h-fit px-6 md:px-[5em] pb-10 lg:text-subheading-md text-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            className="text-customPurple-500 text-start lg:text-apply-heading-md sm:text-apply-heading-md md:text-3xl text-3xl font-hellix-bold mb-6"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Before You Apply:
          </motion.h1>

          <motion.p
            className="text-customBrown-500 font-hellix-medium mb-2 px-1"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
             <span className="text-customPurple-500 font-fredoka">Closerrr</span> is a space for creators who value meaningful conversations
            — the kind that go beyond numbers, noise, and likes. We believe in
            fostering genuine connections, and we're so glad you're considering
            joining our family of creators.
          </motion.p>

          <motion.p
            className="text-customBrown-500 font-hellix-medium mb-2 px-1"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Before you apply, please take a moment to go through a few{" "}
            <span className="font-hellix-bold">important notes:</span>
          </motion.p>

          <motion.ul
            className="list-disc px-[2em] text-customBrown-500 flex flex-col items-center font-hellix-medium space-y-4"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.li variants={listItem}>
              <strong>
                We're currently welcoming creators based in{" "}
                <span className="font-hellix-bold">India only</span>.
              </strong>{" "}
              We hope to open our doors to more countries soon and help spark
              deeper, more heartfelt connections across the world.
            </motion.li>
            <motion.li variants={listItem}>
              To maintain the authenticity of every interaction, we only work
              with creators who are{" "}
              <strong className="font-hellix-bold">
                18 years of age or older.
              </strong>{" "}
               <span className="font-fredoka text-customPurple-500">Closerrr</span> is a space for real, personal conversations — ones meant
              to be handled directly by you, not by a guardian or
              representative.
            </motion.li>
            <motion.li variants={listItem}>
              <span className="font-hellix-bold">We do not accept</span>{" "}
              creators involved in{" "}
              <span className="font-hellix-bold">adult or NSFW content</span>,
              or anyone promoting{" "}
              <span className="font-hellix-bold">
                hate, discrimination, or harmful material
              </span>
              . Our community thrives on respect, warmth, and kindness.
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="w-full flex items-center flex-col gap-[2vmax] mt-[5vmax] mb-[5vmax]"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1
            className="flex flex-wrap justify-center text-center text-customPink-500 lg:text-create-heading-lg text-5xl font-hellix-bold mb-0 leading-tight px-4 md:px-0"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
            viewport={{ once: true }}
          >
            Let's Get You&nbsp;
            <motion.span
              className="text-customPurple-500 font-fredoka"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Closerrr
            </motion.span>
            ...
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Form />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full min-h-[10vw] flex justify-center pb-16"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.img
          className="md:w-fit md:h-fit mt-3  w-[30vw]"
          src="/Group-end.svg"
          alt=""
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </div>
  );
}

export default Creators;
