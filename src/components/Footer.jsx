import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import facebook from '../../public/Facebook.svg';
import instagram from '../../public/Instagram.svg';
import x from '../../public/X.svg';
import linkedin from '../../public/Linkedin.svg';

// Wrapper for scroll + route handling
function SmoothScrollLink({ to, children, className }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // go to home first
      navigate("/");
      // wait a bit so DOM has sections
      setTimeout(() => {
        scroller.scrollTo(to, {
          smooth: true,
          duration: 500,
          offset: -50, // adjust for navbar height
        });
      }, 300);
    } else {
      // already on home → just scroll
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }
  };

  return (
    <a href={`/#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

const data = [
  {
    title: "Company",
    items: [
      { tag: "Home", link: "home" },
      { tag: "What is Closerrr?", link: "about" },
      { tag: "FAQs", link: "faq" },
      { tag: "Download App", link: "download" },
      { tag: "For Creators", link: "create" },
    ],
  },
  {
    title: "Legal",
    items: [
      { tag: "Terms & Condition", link: "/terms-and-conditions" },
      { tag: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
];

const sociallink = [
  { tag: "Instagram", link: "https://www.instagram.com/closerrrtoyou/?hl=en", img: instagram },
  { tag: "x", link: "https://x.com/Closerrr_toyou", img: x },
  { tag: "Linkedin", link: "https://www.linkedin.com/company/closerrr/", img: linkedin },
  { tag: "Facebook", link: "https://www.facebook.com/profile.php?id=61576781024082", img: facebook },
];

function Footer() {
  let androidLink =
    "https://play.google.com/store/apps/details?id=your.android.package";
  let iphoneLink = "https://apps.apple.com/app/id6744296620";

  return (
    <footer className="w-full bg-customPurple-500 text-white py-10 md:py-10 md:mt-0">
      <div className="flex flex-col lg:flex-row lg:justify-center md:items-center lg:items-center gap-5 lg:gap-30 lg:px-[4em] px-4">
        {/* Logo + App buttons + Social */}
        <div className="flex flex-col items-center md:justify-center lg:items-start gap-8 lg:gap-4 w-full lg:w-fit">
          <Link to="/">
          <div className="flex items-center gap-2">
            <img
              className="h-[2.75rem] sm:h-[3rem] lg:h-[3.635rem] object-contain"
              src="/Final_Closerrr_1.png"
              alt="Closerrr Logo"
            />
            <h1 className="text-3xl sm:text-closerrr font-fredoka">Closerrr</h1>
          </div>
            </Link>

          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
            <a href={iphoneLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/light_ios.svg"
                alt="Download on iOS"
                className="h-[2.75rem] sm:h-[3rem]"
              />
            </a>
            <a href={androidLink} target="_blank" rel="noopener noreferrer">
              <img
                src="/light_android.svg"
                alt="Download on Android"
                className="h-[2.75rem] sm:h-[3rem]"
              />
            </a>
          </div>

          <div className="flex flex-col items-start relative right-11 md:right-0 lg:items-start gap-4 ">
            <h2 className="font-hellix-bold text-2xl sm:text-xl">Follow Us:</h2>
            <div className="flex gap-7 sm:gap-6 flex-wrap justify-center">
              {sociallink.map((social) => (
                <a
                  key={social.tag}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  aria-label={social.tag}
                >
                  <img
                    className="h-[2rem] sm:h-[2.5rem]"
                    src={social.img}
                    alt={social.tag}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-auto flex flex-col gap-8 md:gap-8 mt-4 sm:mt-0 lg:gap-0 md:grid md:grid-cols-3 xl:gap-10 font-hellix-medium px-4 md:px-0 i">
          {data.map(({ title, items }) => (
            <div
              key={title}
              className="flex flex-col items-start md:items-start"
            >
              <h3 className="font-hellix-bold text-2xl lg:text-frequently-subheading mb-3">
                {title}
              </h3>
              <ul className="flex flex-col gap-2 text-xl sm:text-subheading-sm text-left md:text-left">
                {items.map(({ tag, link }, i) =>
                  title === "Company" ? (
                    <SmoothScrollLink
                      key={i}
                      to={link}
                      className="cursor-pointer hover:underline"
                    >
                      {tag}
                    </SmoothScrollLink>
                  ) : (
                    <Link
                      key={i}
                      to={link}
                      className="cursor-pointer hover:underline"
                    >
                      {tag}
                    </Link>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col items-start md:items-start">
            <h3 className="font-hellix-bold text-2xl lg:text-frequently-subheading mb-3">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-xl sm:text-subheading-sm text-left md:text-left">
              <li>Need help with something?</li>
              <li>Feel free to email us at:</li>
              <li>
                <a
                  href="mailto:happytohelp@closerrr.com"
                  className="font-hellix-bold text-customPink-500 break-words"
                >
                  hello@closerrr.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
