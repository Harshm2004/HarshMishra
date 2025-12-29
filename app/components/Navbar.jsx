"use client";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    "home",
    "about",
    "skills",
    "projects",
    "certifications",
    "contact",
  ];

  const NAVBAR_HEIGHT = 80;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 1;
      for (let item of menuItems) {
        const el = document.getElementById(item);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(item);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/80 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Left */}
        <div
          onClick={() => scroll.scrollToTop({ offset: -NAVBAR_HEIGHT })}
          className="text-2xl md:text-3xl font-bold cursor-pointer
          bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400
          animate-textGlow hover:scale-105 transition-transform duration-300"
        >
          Harsh Mishra
        </div>

        {/* Right-aligned Menu + Icons Container */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* Set 1: Menu Items */}
          <div className="flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-NAVBAR_HEIGHT}
                className={`relative cursor-pointer text-gray-200 font-medium px-1
                  before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
                  before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-cyan-400
                  before:transition-all before:duration-500 hover:before:w-full transition-colors duration-300
                  ${active === item ? "text-purple-400 before:w-full" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          {/* Set 2: Social Icons - End/Right Corner */}
          <div className="flex items-center gap-2 ml-6">
            <a
              href="https://github.com/Harshm2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl p-2 rounded-full hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              title="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harshkmishra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl p-2 rounded-full hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu + Icons */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="https://github.com/Harshm2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl p-2 rounded-full hover:text-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            title="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshkmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl p-2 rounded-full hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-purple-400"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-900/90 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            offset={-NAVBAR_HEIGHT}
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-2 text-gray-200 font-medium relative
              before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5
              before:rounded-full before:bg-gradient-to-r before:from-purple-500 before:via-pink-500 before:to-cyan-400
              before:transition-all before:duration-500 hover:before:w-full transition-colors duration-300
              ${active === item ? "text-purple-400 before:w-full" : ""}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes textGlow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-textGlow {
          background-size: 200% 200%;
          animation: textGlow 5s linear infinite;
        }
      `}</style>
    </nav>
  );
}
