// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center pt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <motion.h1 className="text-5xl md:text-6xl font-extrabold" variants={itemVariants}>
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
        </motion.h1>
        <motion.p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300" variants={itemVariants}>
          I'm a Full-Stack Developer
        </motion.p>
        <motion.p className="mt-2 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
          I build clean, accessible, and performant web applications with modern technologies.
        </motion.p>
        <motion.div className="mt-8 space-x-4" variants={itemVariants}>
          <a href="#projects" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;