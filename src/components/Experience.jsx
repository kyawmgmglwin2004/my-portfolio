// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'One Project One Month',
    period: 'In 2024 - Training',
    details: ['Built REST API with Laravel and Node js','Built responsive UIs with React and Tailwind CSS', 'Improved performance and accessibility', 'Collaborated with designers and DevOps engineer']
  },
  {
    role: 'Fullstack Developer',
    company: 'Studio AMK',
    period: 'Auguest 2024 - Present',
    details: ['Built REST API with  Node js Moleculer-framwork','Built responsive UIs with React and Tailwind CSS','AI -Qdrant and Ollama-model', 'Improved performance and accessibility', 'Collaborated with designers and DevOps engineer']
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const Experience = () => {
  return (
    <motion.section className="py-12" id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={container}>
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="text-4xl  text-center font-bold mb-6 text-white dark:text-white" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          Experience
        </motion.h1>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.article key={idx} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm" variants={item} whileHover={{ scale: 1.02 }} transition={{ duration: 0.35 }}>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{exp.role}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">{exp.company}</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;