// src/components/Skills.jsx
import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git', icon: '📦' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="card flex items-center space-x-2 px-4 py-2 hover:shadow-xl hover:-translate-y-1"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;