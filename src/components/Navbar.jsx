import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = ["Home", "About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Enhanced Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600 dark:text-blue-400 cursor-pointer hover:scale-105 transition">
            CHANDAN
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.toLowerCase()}
              smooth={true}
              spy={true}
              offset={-80}
              duration={500}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium relative group"
            >
              {link}
              <span className="block h-0.5 w-0 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
            title="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
            title="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-3xl text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 px-6 pt-4 pb-8"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.toLowerCase()}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
