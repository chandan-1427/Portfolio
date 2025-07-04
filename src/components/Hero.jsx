// src/components/Hero.jsx
import { motion } from "framer-motion";
import { BsLightningChargeFill } from "react-icons/bs";

const Hero = () => {
  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6"
    >
      <div className="max-w-3xl text-center">
        {/* Friendly Greeting */}
        <motion.span
          className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-2 block"
          aria-label="Greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hi! I'm
        </motion.span>

        {/* Logo / Name */}
        <motion.div
          className="flex justify-center items-center gap-2 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <BsLightningChargeFill className="text-blue-600 dark:text-blue-400 text-3xl animate-bounce" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-blue-600 dark:text-blue-400">
            CHANDAN
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full-Stack Developer & Tech Explorer
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting seamless digital experiences with code and creativity.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToProjects}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          View Projects
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
