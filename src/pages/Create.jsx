import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Create() {

useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      id="create"
      className="w-full h-fit mt-24 md:mt-[12vmax] flex flex-col px-[1rem] items-center gap-12 md:px-[5rem]"
    >
      <div className="w-full flex justify-center text-center">
        <h1 className="text-customPink-500 text-4xl lg:text-create-heading-lg font-hellix-bold leading-tight"
       data-aos="fade-up"
       data-aos-anchor-placement="top-bottom">
          {/* Desktop View */}
          <span className="hidden md:inline">
            <span className="text-customPurple-500">For Creators</span> Ready to Start <br />
            Something Real on{" "}
            <span className="text-customPurple-500 font-fredoka">Closerrr</span>...
          </span>
          {/* Mobile View */}
          <span className="inline md:hidden">
            <span className="text-customPurple-500">For Creators</span> Ready <br />
            to Start <br />
            Something Real on <br />
            <span className="text-customPurple-500 font-fredoka">Closerrr</span>...
          </span>
        </h1>
      </div>

      <div className="text-center text-lg text-customBrown-500 font-hellix-medium lg:text-subheading-md px-4 lg:px-0 leading-[1.6rem] mt-16  lg:leading-[2.625rem]">
        <p>
          If you've ever craved a deeper way to connect... one that feels personal,
          intentional, and free from algorithms? <br />
          Well, good news, cause your search ends here.  <span className="text-customPurple-500 font-fredoka">Closerrr</span> has everything you've been
          looking for. <br />
          Here, it's not about being seen by everyone. It's about being truly felt by those who
          care most. <br />
          We'd love to welcome creators who value real bonds and meaningful conversations. If that
          sounds like you, <br /> we’d love to welcome you on  <span className="text-customPurple-500 font-fredoka">Closerrr</span>.
        </p>
      </div>
    </section>
  );
}

export default Create;
