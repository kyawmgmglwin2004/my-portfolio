// src/components/About.jsx
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="about-hero max-w-4xl mx-auto rounded-lg overflow-hidden relative">
        <div className="about-bg absolute inset-0" aria-hidden="true" />
        <div className="about-overlay absolute inset-0" aria-hidden="true" />

        <div className="about-content relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/cv.png"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <div className="card bg-transparent text-white">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer with a knack for turning complex problems into simple, beautiful, and intuitive solutions. My journey in tech started a few years ago, and I've been hooked ever since. I love the constant learning and the creativity involved in building things that live on the web.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              When I'm not coding, you'll find me exploring new technologies, or enjoying photography and traveling. I'm always excited to connect with like-minded people and explore new opportunities.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;