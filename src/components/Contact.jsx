// src/components/Contact.jsx
import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
      <div className="card max-w-2xl mx-auto text-center">
        <p className="text-lg mb-6">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com" // <-- CHANGE THIS TO YOUR EMAIL
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Send Me an Email
        </a>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400">LinkedIn</a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;