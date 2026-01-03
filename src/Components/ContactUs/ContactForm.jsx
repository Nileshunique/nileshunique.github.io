import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { handleCall, handleOpenMail } from "../../utils";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.description
    ) {
      setStatus("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus("Email service is not configured. Please contact admin.");
        setIsLoading(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.description,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", description: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-black flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="ContactMe"
            className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4"
          >
            Get In Touch
          </h1>
          <p className="text-gray-500 text-lg">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          className="mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-xl font-semibold text-white mb-4 text-center"
            variants={itemVariants}
          >
            Quick Contact
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Email */}
            <motion.div
              onClick={handleOpenMail}
              className="group cursor-pointer flex items-center bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-amber-500 hover:to-yellow-500 p-4 rounded-xl min-w-max sm:w-auto justify-center gap-3 border border-zinc-600 hover:border-amber-400 shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-xl text-amber-400 group-hover:text-black transition-colors duration-300" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 group-hover:text-black/70">
                  Email
                </span>
                <span className="text-white group-hover:text-black font-medium">
                  nilesh.document1@gmail.com
                </span>
              </div>
            </motion.div>
            {/* Phone */}
            <motion.div
              onClick={handleCall}
              className="group cursor-pointer flex items-center bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-amber-500 hover:to-yellow-500 p-4 rounded-xl min-w-max sm:w-auto justify-center gap-3 border border-zinc-600 hover:border-amber-400 shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt className="text-xl text-amber-400 group-hover:text-black transition-colors duration-300" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 group-hover:text-black/70">
                  Phone
                </span>
                <span className="text-white group-hover:text-black font-medium">
                  (+91) 9911148122
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div className="text-center mt-4" variants={itemVariants}>
            <p className="text-gray-500 text-sm">
              Or fill out the form below for detailed inquiries
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nilesh.document1@gmail.com"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400"
                  required
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400"
                  required
                />
              </motion.div>

              {/* Description Field */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-amber-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell me more about your project..."
                  rows="6"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-400 resize-vertical"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold py-4 px-6 rounded-lg shadow-md hover:from-amber-500 hover:to-yellow-600 focus:ring-2 focus:ring-amber-400 disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>

          {/* Status Message */}
          {status && (
            <motion.div
              className={`mt-6 p-4 rounded-lg ${
                status.includes("successfully")
                  ? "bg-green-800 border border-green-600 text-green-200"
                  : "bg-red-800 border border-red-600 text-red-200"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {status}
            </motion.div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="bg-zinc-800 bg-opacity-50 px-8 py-4 border-t border-zinc-700 mt-6 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Your information is secure and never shared</span>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Encrypted
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactForm;
