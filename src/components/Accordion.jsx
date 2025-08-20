import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    question: "What is Closerrr?",
    answer:
      "Closerrr is a quiet, personal space where you can connect with your favorite celebrities, creators, influencers, public figures, and artists you love — through heartfelt messages and moments they don't share anywhere else.",
  },
  {
    question: "How does Closerrr work?",
    answer:
      "Closerrr keeps things simple and meaningful. Once you download the app, you can explore and connect with the people you admire — from creators and influencers to artists and public figures. Subscribe to the ones you love, send them personal messages, view exclusive content, and stay in sync with their updates — all in one safe, private space built just for real connection.",
  },
  {
    question: "Who can I connect with on Closerrr?",
    answer:
      "You can connect with the people you've always admired. From your favorite creators, influencers, and artists to public figures across different fields — Closerrr brings them all to one quiet place where real connection happens. If they're on Closerrr, you're just a message away from them.",
  },
  {
    question: "Is Closerrr safe and private?",
    answer:
      "Absolutely. Closerrr is built to be a safe, private space — where your messages stay just between you and the ones you admire. No public comments, no algorithms, no noise. Just a quiet, personal space for you and them.",
  },
  {
    question: "Is Closerrr free to download?",
    answer:
      "Yes, Closerrr is completely free to download. You can explore the app, discover creators, and decide who you want to get closerrr to — all at your own pace. When you're ready to connect, simply subscribe to the ones who matter most and enjoy sending personal messages, seeing moments they don't share anywhere else, and being part of their world in a more meaningful way.",
  },
  {
    question: "Where can I download Closerrr?",
    answer:
      "Closerrr is available on both the Apple App Store and Google Play Store. Just search for “Closerrr,” download it for free, and you're all set to start exploring. Or simply scroll down and tap the download button in the footer to get it directly from your app store.",
  },
  {
    question: "Can I message my favorite people directly?",
    answer:
      "Yes, you can — that's what Closerrr is all about. Once you've subscribed to someone on Closerrr, you can send them personal messages in a space that's just for the two of you. No noise, no public comments — just a direct, meaningful way to stay closerrr to the people you admire.",
  },
  {
    question: "I'm a creator. How can I join Closerrr?",
    answer:
      'If you\'re a creator looking for a deeper, more heartfelt way to connect with your audience, we\'d love for you to join us. Just head to the "For Creators Ready to Start Something Real on Closerrr" section and tap the "Join Our Creator Family" button. From there, a brief form awaits, inviting you to share a little about yourself. Once we review your submission, we\'ll reach out to you personally via your provided email address as soon as we can.',
  },
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once: true, margin: "-50px" });

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      ref={wrapperRef}
      className="w-[92%] sm:w-[90%] md:w-[70%] mx-auto mt-[6vmax] space-y-8 md:space-y-12"
    >
      {faqs.map((item, index) => (
        <motion.div
          key={index}
          className="faq-item border-b border-customPink-500 cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-customPurple-500 text-2xl sm:text-xl md:text-2xl lg:text-frequently-subheading flex justify-between items-center gap-3 font-hellix-medium cursor-pointer py-3 pr-2 sm:pr-3 md:pr-4"
          >
            <h1 className="text-left pb-[0.5em] leading-snug">
              {item.question.split(/(Closerrr)/gi).map((part, idx) =>
                /Closerrr/i.test(part) ? (
                  <span key={idx} className="font-fredoka ">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
            </h1>
            <span
              className={`w-6 sm:w-7 md:w-6 lg:w-[1.5vw] h-6 sm:h-7 md:h-6 flex items-center justify-center shrink-0 transform transition-transform duration-300 relative left-3 md:left-5 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              <img
                src="/Arrow_1.svg"
                alt="toggle"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
              />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === index && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-[2.5em] pt-[1rem] text-customBrown-500 text-base sm:text-lg md:text-lg lg:text-subheading-sm leading-relaxed font-hellix-medium w-[95%] md:w-[80%]">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

       <motion.div
        className="w-full min-h-0 md:min-h-[14vw] flex justify-center pb-16"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.img
          className="w-40 sm:w-56 md:w-fit md:h-fit mt-16"
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

export default Accordion;
