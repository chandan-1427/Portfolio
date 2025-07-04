import { motion } from "framer-motion";
// You might want to import icons for GitHub and external link for demo links
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15, // Stagger delay for individual project cards
    },
  },
};

// Animation variants for individual project cards
const projectCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03, // Slightly more pronounced hover effect
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)", // More prominent shadow
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const projects = [
  {
    title: "Amazon Clone",
    description:
      "A fully responsive e-commerce frontend inspired by Amazon with product listings, navigation, and clean design.",
    story:
      "Built this clone to strengthen frontend development skills. It helped me practice responsive layouts and simulate real-world e-commerce UIs.",
    github: "https://github.com/chandan-1427/amazon-clone-project", // Replace with actual GitHub if different
    demo: "https://amazon-clone-project-three.vercel.app/",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    title: "To-Do List App",
    description:
      "A minimal to-do app with localStorage persistence and responsive design using TailwindCSS.",
    story:
      "This project helped me learn Tailwind and apply JavaScript to manage DOM events and browser storage.",
    github: "https://github.com/chandan-1427/todo-list", // Replace with actual GitHub if different
    demo: "https://todo-list-three-beta-31.vercel.app/",
    tech: ["HTML", "TailwindCSS", "JavaScript", "Vercel"],
  },
  {
    title: "Rock Paper Scissors Game",
    description:
      "Classic RPS game built for the browser with real-time score tracking and UI feedback.",
    story:
      "Built this as a fun exercise to understand JavaScript logic flow and implement interactive UI behavior.",
    github: "https://github.com/chandan-1427/rock-paper-scissors-game", // Replace with actual GitHub if different
    demo: "https://rock-paper-scissors-game-gamma-swart.vercel.app/",
    tech: ["HTML", "TailwindCSS", "JavaScript", "Vercel"],
  },
  {
    title: "JobFinder Platform (In Progress)",
    description:
      "Full-stack job portal featuring resume builder, employer dashboard, and admin panel.",
    story:
      "This is my capstone full-stack project where I implemented multi-role auth, resume generation, and used ChatGPT as my co-planner.",
    github: "https://github.com/chandan-1427/Job-Finder", // Replace with actual GitHub
    demo: "#", // Still in progress
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Audio Router App (In Progress)",
    description:
      "Native desktop app that allows users to route audio per application, built with Electron and C++ addons.",
    story:
      "Solves a personal pain point by giving control over app-specific audio outputs using WASAPI and native bindings.",
    github: "https://github.com/chandan-1427/audio-router", // Replace with actual GitHub
    demo: "#", // Still in progress
    tech: ["ElectronJS", "C++", "Node Addons", "WASAPI"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 px-6 py-24 flex flex-col items-center justify-center" // Enhanced background
    >
      {/* Subtle background overlay/pattern for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-gray-300 dark:text-gray-700" />
        </svg>
      </div>

      <motion.div
        className="max-w-6xl mx-auto text-center relative z-10" // Ensure content is above background
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Increased amount for better trigger
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-lg">
          My <motion.span
            className="text-blue-600 dark:text-blue-400 inline-block"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
          >
            Portfolio
          </motion.span> of Work
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          From full-stack applications to data visualization and AI, these projects showcase my passion for building impactful software. Each one tells a story of problem-solving and growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"> {/* Adjusted gap */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-7 transition-all duration-300 ease-out border border-gray-200 dark:border-gray-700 overflow-hidden relative" // Added border, overflow-hidden
              variants={projectCardVariants}
              whileHover="hover"
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-3 flex-grow"> {/* flex-grow to push footer to bottom */}
                {project.description}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-5 leading-relaxed">
                {project.story}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6"> {/* Increased bottom margin */}
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-blue-100 dark:hover:bg-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4 mt-auto"> {/* mt-auto for sticky footer */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 px-5 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md"
                  >
                    <FaExternalLinkAlt className="text-xs" /> {/* Smaller icon */}
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-5 py-2.5 rounded-full cursor-not-allowed opacity-80"
                    title="Demo not available yet"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>No Demo</span>
                  </span>
                )}
              </div>

              {/* Optional: Read full story link - ensure these routes exist */}
              {/* This assumes you'll have dynamic routes like /projects/job-finder-portal */}
              <div className="text-center mt-6">
                <a
                  href={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-sm font-medium text-blue-500 hover:underline hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Read full story <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;