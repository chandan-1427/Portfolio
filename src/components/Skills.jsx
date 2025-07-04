import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt,
  FaDocker, FaGitAlt, FaAws, FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiMysql, SiPostman,
} from "react-icons/si";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const groupHeaderVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Skills Group
const skillGroups = {
  "Frontend": [
    { name: "HTML5", icon: <FaHtml5 />, color: "#f97316", desc: "Standard markup language for web pages." },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#2563eb", desc: "Styling language for creating beautiful web designs." },
    { name: "JavaScript", icon: <SiJavascript />, color: "#facc15", desc: "The core scripting language for interactive web experiences." },
    { name: "React", icon: <FaReact />, color: "#0ea5e9", desc: "Library for building dynamic and efficient UIs." },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#14b8a6", desc: "Utility-first CSS framework for fast UI development." },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs />, color: "#16a34a", desc: "JavaScript runtime for backend development." },
    { name: "Express.js", icon: <SiExpress />, color: "#6b7280", desc: "Minimalist backend framework for Node.js." },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb />, color: "#15803d", desc: "Flexible NoSQL document database." },
    { name: "MySQL", icon: <SiMysql />, color: "#2563eb", desc: "Open-source RDBMS." },
  ],
  "DevOps & Deployment": [
    { name: "Docker", icon: <FaDocker />, color: "#3b82f6", desc: "Containerization platform." },
    { name: "AWS", icon: <FaAws />, color: "#f97316", desc: "Cloud computing service." },
  ],
  "Tools & Testing": [
    { name: "Git", icon: <FaGitAlt />, color: "#ef4444", desc: "Version control system." },
    { name: "GitHub", icon: <FaGithub />, color: "#000000", desc: "Code hosting platform." },
    { name: "Code Editor", icon: <FaCode />, color: "#6b7280", desc: "Development IDE." },
    { name: "Postman", icon: <SiPostman />, color: "#ea580c", desc: "API testing and development tool." },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black px-6 py-24 flex flex-col items-center justify-center"
    >
      {/* Floating background blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="w-80 h-80 bg-sky-400 blur-3xl opacity-20 rounded-full absolute top-10 left-1/4 animate-float-one" />
        <div className="w-64 h-64 bg-fuchsia-500 blur-3xl opacity-20 rounded-full absolute bottom-1/4 right-1/3 animate-float-two" />
        <div className="w-52 h-52 bg-emerald-400 blur-3xl opacity-10 rounded-full absolute top-1/2 left-1/10 animate-float-three" />
        <div className="w-96 h-96 bg-indigo-500 blur-3xl opacity-15 rounded-full absolute -bottom-10 -right-20 animate-float-four" />
        <div className="w-72 h-72 bg-rose-400 blur-3xl opacity-10 rounded-full absolute top-1/5 -right-10 animate-float-five" />
      </div>

      <motion.div
        className="max-w-6xl w-full text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
          My <motion.span
            className="text-sky-500 inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
          >
            Tech Stack
          </motion.span> & Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto sm:text-lg leading-relaxed">
          Technologies and tools I use to build scalable, secure, and stunning full-stack applications.
        </p>

        {Object.entries(skillGroups).map(([group, items]) => (
          <motion.div
            key={group}
            className="mb-16 last:mb-0 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-700 dark:text-white mb-6 border-b-2 border-sky-500 inline-block pb-1 pr-4"
              variants={groupHeaderVariants}
            >
              {group}
            </motion.h3>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6">
              {items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-2xl transition-transform duration-300"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  variants={itemVariants}
                  tabIndex={0}
                  role="button"
                  aria-label={`Skill: ${skill.name}`}
                >
                  <div className="text-4xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-900 dark:text-white text-xs font-semibold mt-2 text-center">
                    {skill.name}
                  </span>

                  {/* Tooltip */}
                  <div className="absolute -bottom-2 translate-y-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 bg-gray-900 text-white text-xs rounded px-3 py-2 shadow-md pointer-events-none z-10 whitespace-nowrap">
                    <strong>{skill.name}:</strong> {skill.desc}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-transparent border-b-4 border-b-gray-900"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
