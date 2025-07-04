import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/chandan-profile.jpg";

const About = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={profilePic}
        alt="Chandan Dakka"
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition duration-1000 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 leading-tight">
            About Me
          </h2>
          <p className="text-blue-300 mb-6 text-xl">
            A developer driven by grit, growth, and coffee-fueled dreams.
          </p>

          <motion.p
            className="text-lg leading-relaxed mb-5 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a self-taught developer with a story shaped by persistence,
            failed experiments, and late-night debugging marathons. From losing
            my first analytics project to building full-stack apps — every
            setback was a setup for growth.
          </motion.p>

          <AnimatePresence>
            {showFullStory && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg text-gray-300 mb-4">
                  I started with zero guidance, struggled through Flask, built a
                  Power BI clone, dived into MERN, and fell in love with clean
                  UI and problem-solving. Every project I take on reflects that
                  journey. Today, I create tools that empower people — from
                  resume builders to audio routing utilities.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setShowFullStory(!showFullStory)}
            className="text-blue-400 hover:underline mb-4 transition font-medium"
          >
            {showFullStory ? "Read Less" : "Read Full Story"}
          </button>

          {/* Highlights */}
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm sm:text-base text-gray-300">
            <div>
              <span className="font-semibold text-white">🛠 Stack:</span>{" "}
              MERN, Tailwind, Framer Motion
            </div>
            <div>
              <span className="font-semibold text-white">🌍 Based in:</span>{" "}
              India
            </div>
            <div>
              <span className="font-semibold text-white">📁 Projects:</span>{" "}
              3+ built, and deployed
            </div>
            <div>
              <span className="font-semibold text-white">🎯 Focus:</span>{" "}
              Clean UI, Robust APIs, Error Handling & Performance
            </div>
          </div>

          {/* Social Links and CTA */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/chandan-1427"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-dakka-805068360/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="#contact"
              className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition-all duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div
          className="hidden md:block relative z-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative group w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src={profilePic}
              alt="Chandan Dakka"
              className="w-full h-full object-cover saturate-150 group-hover:blur-sm transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-500" />
            <div className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
              “Always Building Something.”
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
