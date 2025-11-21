// src/components/About.jsx
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
      <div className="card max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed">
          I'm a passionate developer with a knack for turning complex problems into simple, beautiful, and intuitive solutions. My journey in tech started a few years ago, and I've been hooked ever since. I love the constant learning and the creativity involved in building things that live on the web.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          When I'm not coding, you'll find me exploring new hiking trails, reading a good sci-fi novel, or trying to perfect my coffee brewing skills.
        </p>
      </div>
    </motion.section>
  );
};

export default About;