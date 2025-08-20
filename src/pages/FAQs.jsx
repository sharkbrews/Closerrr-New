import { useEffect } from "react";
import Accordion from '../components/Accordion'
import AOS from "aos";
import "aos/dist/aos.css";
function FAQs() {
   useEffect(() => {
        AOS.init({
          duration: 300,
          once: false,
          easing: "ease-in-out",
        });
      }, []);
  return (
    <section id='faq' className='w-full min-h-screen mt-[11vmax] px-4'>
      <div className='w-full flex justify-center items-center text-center'>
        <h1 className='text-4xl lg:text-frequently-heading text-customPurple-500 font-hellix-bold'
            data-aos="fade-up"
     data-aos-duration="1000">Frequently Asked Questions</h1>
      </div>
      <div className='w-full h-fit '>
        <Accordion  />
      </div>

    </section>
  )
}

export default FAQs




