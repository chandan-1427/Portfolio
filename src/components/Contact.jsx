// src/components/Contact.jsx
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fix the errors above." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 7000);
    }
  };

  const ThankYouMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6 flex flex-col items-center text-center space-y-4 p-5 rounded-xl bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700"
    >
      <FaCheckCircle className="text-5xl text-green-500" />
      <h3 className="text-2xl font-semibold text-green-700 dark:text-green-300">
        Message Sent!
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        Thanks for reaching out. I’ll get back to you shortly!
      </p>
    </motion.div>
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950 px-6 py-24 flex items-center justify-center"
    >
      {/* Background visual */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="w-96 h-96 bg-blue-300 blur-3xl opacity-10 rounded-full absolute -top-20 -left-20" />
        <div className="w-80 h-80 bg-purple-300 blur-3xl opacity-10 rounded-full absolute -bottom-20 -right-20" />
      </div>

      <motion.div
        className="w-full max-w-2xl text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Let’s <span className="text-blue-600 dark:text-blue-400">Connect</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Have a project in mind or just want to chat? Send me a message.
        </p>

        {status?.type === "success" ? (
          <ThankYouMessage />
        ) : (
          <form
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6 border border-gray-200 dark:border-gray-700"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none
                ${errors.name ? "border-red-500 border-2" : "border-transparent border"}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none
                ${errors.email ? "border-red-500 border-2" : "border-transparent border"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-4 rounded-lg resize-y bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none
                ${errors.message ? "border-red-500 border-2" : "border-transparent border"}`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 text-left">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 px-6 rounded-xl font-semibold text-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaEnvelope className="text-xl" /> Send Message
                </>
              )}
            </motion.button>

            {status?.type === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 flex items-center justify-center gap-2 text-base mt-3"
              >
                <FaExclamationCircle /> {status.message}
              </motion.p>
            )}
          </form>
        )}

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8 text-4xl">
          <motion.a
            href="https://github.com/chandan-1427"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, color: "#6e5494" }}
            className="text-gray-700 dark:text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/chandan-dakka-805068360"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.25, color: "#0077B5" }}
            className="text-blue-700 dark:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:chandandakka@example.com"
            whileHover={{ scale: 1.25, color: "#D44638" }}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
