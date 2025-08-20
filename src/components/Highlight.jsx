import { useEffect, useRef } from "react";

function Highlight({ imgSrc, heading, paragraph, order = 0 }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const initialShakenRef = useRef(false);
  // Responsive stagger: shorter on small screens, longer on desktop
  const baseStagger = (() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia && window.matchMedia("(max-width: 640px)").matches) {
        return 450; // 0.45s per card on small screens
      }
      if (window.matchMedia && window.matchMedia("(max-width: 1024px)").matches) {
        return 650; // 0.65s per card on tablets
      }
    }
    return 800; // 0.8s per card on desktop
  })();
  const offsetMs = Math.max(0, Number(order) || 0) * baseStagger;

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const onEnter = () => {
      if (!initialShakenRef.current) {
        // Stagger initial one-time shake by order-based delay
        const startInitial = () => {
          // Initial shake when the section comes into view
          img.style.animation = `shake-in 520ms cubic-bezier(0.22, 1, 0.36, 1) 0ms 1 both`;
          const afterShake = () => {
            // Start repeating every 5s; first repeat occurs 5s AFTER the initial shake, plus stagger
            const initialRepeatDelay = 5000 + offsetMs; // ensure next shake is 5s later
            img.style.animation = `shake-interval 5s ease-in-out ${initialRepeatDelay}ms infinite`;
            img.style.animationPlayState = "running";
            initialShakenRef.current = true;
          };
          img.addEventListener("animationend", afterShake, { once: true });
        };
        if (offsetMs > 0) {
          setTimeout(startInitial, offsetMs);
        } else {
          startInitial();
        }
      } else {
        // On every subsequent enter: do a quick shake, then repeat every 5s with stagger
        img.style.animation = `shake-in 520ms cubic-bezier(0.22, 1, 0.36, 1) 0ms 1 both`;
        const afterShake = () => {
          const initialRepeatDelay = 5000 + offsetMs;
          img.style.animation = `shake-interval 5s ease-in-out ${initialRepeatDelay}ms infinite`;
          img.style.animationPlayState = "running";
        };
        img.addEventListener("animationend", afterShake, { once: true });
      }
    };

    const onExit = () => {
      // Pause interval when not visible
      img.style.animationPlayState = "paused";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onEnter();
          else onExit();
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -15% 0px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const highlightCloserrr = (text, isParagraph = false) =>
    text.split(/(Closerrr)/i).map((part, index) =>
      part.toLowerCase() === "closerrr" ? (
        <span
          key={index}
          className={"font-fredoka text-customPurple-500"}
        >
          {part}
        </span>
      ) : (
        part
      )
    );

  return (
  <>
    <div ref={cardRef} className="group relative w-full max-w-[26.5rem] rounded-2xl md:border border-customPink-500/50  transition-all duration-300 hover:shadow-lg flex flex-col min-h-[25rem]">
      <div className="p-6 md:py-12 md:px-8 flex flex-col items-center text-center gap-4 flex-1">
        <img
          ref={imgRef}
          className="h-28 md:h-32 object-contain"
          src={imgSrc}
          alt=""
          style={{ willChange: "transform" }}
        />

        <h2 className="font-hellix-bold text-[1.6rem] md:text-2xl tracking-tight text-customPink-500">
          {highlightCloserrr(heading)}
        </h2>

        <p className="text-base md:text-[1.05rem] font-hellix-medium leading-relaxed text-customBrown-500">
          {highlightCloserrr(paragraph, true)}
        </p>
      </div>
      <div className="mt-auto w-full px-6 md:px-8">
        {/* <div className="h-px w-full relative bottom-10 bg-customPurple-500/15"></div> */}
      </div>
    </div>

  </>
  );
}

export default Highlight;