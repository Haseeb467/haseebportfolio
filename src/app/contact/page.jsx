"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ConfettiButton } from "@/components/lightswind/confetti-button";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  
  const form = useRef();
  const textRef = useRef();
  const formRef = useRef();
  const isTextInView = useInView(textRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const firstLine = "Let's";
  const secondLine = "Connect";

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("user_message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setSuccess(true);
        form.current.reset();
      } else {
        setError(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Popup animation variants
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const handleClosePopup = () => {
    setSuccess(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col gap-12 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-5 xl:px-28 py-8">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center pt-10 justify-center relative">
          <motion.div
            ref={textRef}
            className="text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div className="mb-8">
              <div className="block">
                {firstLine.split("").map((letter, index) => (
                  <motion.span
                    key={`first-${index}`}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={isTextInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.1, color: "#ec4899", transition: { duration: 0.2 } }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
              <div className="block">
                {secondLine.split("").map((letter, index) => (
                  <motion.span
                    key={`second-${index}`}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={isTextInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
                    transition={{
                      duration: 0.8,
                      delay: (firstLine.length * 0.1) + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.1, color: "#8b5cf6", transition: { duration: 0.2 } }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="text-6xl mb-8"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.div>
            <motion.p
              className="text-gray-600 text-xl md:text-2xl font-light mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ready to bring your ideas to life? Let's start a conversation!
            </motion.p>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-2xl">📧</span>
                <span className="text-gray-700 font-medium">haseebdev786@gmail.com</span>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-2xl">🌍</span>
                <span className="text-gray-700 font-medium">Available Worldwide</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          ref={formRef}
          className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center p-4"
          initial={{ opacity: 0, x: 100 }}
          animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.form
            onSubmit={sendEmail}
            ref={form}
            className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-3xl"></div>
            <motion.div
              className="relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="text-center mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-600">I'd love to hear from you!</p>
              </motion.div>
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 text-gray-800"
                    placeholder="Enter your full name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 text-gray-800"
                    placeholder="your.email@example.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 text-gray-800"
                    placeholder="What's this about?"
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    rows={5}
                    name="user_message"
                    className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 resize-none text-gray-800"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="pt-4">
                  <ConfettiButton
                    type="submit"
                    disabled={isLoading}
                    confettiOptions={{
                      particleCount: 120,
                      spread: 80,
                      origin: { y: 0.6 }
                    }}
                    className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <motion.div
                            className="w-5 h-10 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            ✈️
                          </motion.span>
                        </>
                      )}
                    </span>
                  </ConfettiButton>
                </motion.div>
                <motion.div variants={itemVariants} className="text-center">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded-2xl flex items-center justify-center gap-2"
                    >
                      <span>❌</span>
                      <span className="font-medium">{error}</span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.form>
        </motion.div>
      </div>

      {/* Success Popup */}
      {success && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleClosePopup}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 max-w-md text-center shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            variants={popupVariants}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: 1, ease: "easeOut" }}
              >
                🎉
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
            <p className="text-gray-200 mb-4">Message sent successfully! I'll get back to you soon.</p>
            <motion.button
              onClick={handleClosePopup}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactPage;