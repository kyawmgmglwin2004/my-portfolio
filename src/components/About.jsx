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

        <div className="about-content relative item-center  p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10
">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-36 h-36 md:w-55 md:h-55 rounded-full object-cover border-2 border-white shadow-lg md:my-auto  mx-auto"
          />

            <p className="text-lg leading-relaxed text-white">
              I'm a passionate developer with a knack for turning complex problems into simple, beautiful, and intuitive solutions. My journey in tech started a few years ago, and I've been hooked ever since. I love the constant learning and the creativity involved in building things that live on the web.
              <div><br /></div>
              When I'm not coding, you'll find me exploring new technologies, or enjoying photography and traveling. I'm always excited to connect with like-minded people and explore new opportunities.
            </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;