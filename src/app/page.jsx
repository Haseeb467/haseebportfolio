"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "WordPress Developer",
];

const roleDescriptions = {
  "Full Stack Developer": {
    desc: "I’m a versatile full-stack developer crafting scalable, user-centric web applications with modern JavaScript frameworks and robust backend solutions. Explore my projects to see my end-to-end expertise in action!",
    tech: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Tailwind CSS", "GraphQL"],
  },
  "MERN Stack Developer": {
    desc: "Specializing in the MERN stack, I build high-performance, dynamic web applications with MongoDB, Express.js, React, and Node.js. Check out my work to see seamless front-to-back solutions!",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Tailwind CSS", "REST API"],
  },
  "WordPress Developer": {
    desc: "As a WordPress developer, I create custom themes, plugins, and optimized websites tailored to your needs. Dive into my portfolio to see my WordPress-powered projects!",
    tech: ["WordPress", "PHP", "MySQL", "Elementor", "WooCommerce", "CSS3", "JavaScript"],
  },
};

const Homepage = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const currentRole = roles[currentRoleIndex];
  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 250);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setCharIndex(0);
        }, 3000);
      }
    } else {
      if (charIndex < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, currentRole.length - charIndex - 1));
          setCharIndex((prev) => prev + 1);
        }, 250);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
        setDisplayedText("");
        setCharIndex(0);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentRoleIndex,  currentRole]);

  // Smooth cursor blink animation
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1]
      }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="w-full max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row  gap-12 lg:gap-16">
          {/* TEXT CONTAINER */}
          <motion.div
            className="flex-1 flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* TITLE */}
            <div className="space-y-4 mt-8">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Hey, I’m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Haseeb
                </span>
                <br />
                <span className="relative inline-block">
                  {displayedText}
                  <motion.span
                      className="absolute  w-0.5 h-16 bg-gray-900 ml-1"
                    variants={cursorVariants}
                    animate="blinking"
                  />
                </span>
              </motion.h1>
            </div>

            {/* DESCRIPTION */}
            <motion.p
              key={roles[currentRoleIndex] + "-desc"}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {roleDescriptions[roles[currentRoleIndex]].desc}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/portfolio">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Projects
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* SKILLS SECTION */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Tech Stack</h2>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {roleDescriptions[roles[currentRoleIndex]].tech.map((skill, index) => (
                  <motion.span
                    key={roles[currentRoleIndex] + skill}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* STATS OR HIGHLIGHTS */}
            <motion.div
              className="flex flex-wrap gap-8 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* IMAGE CONTAINER */}
          <motion.div
            className="flex-1 order-1 lg:order-2 xl:order-2 pt-24 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10 blur-sm"></div>

              {/* Main image container */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="Haseeb - Full Stack Developer"
                  fill
                  className="object-contain p-8"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;