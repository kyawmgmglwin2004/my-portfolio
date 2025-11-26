// src/components/SoftSkills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const defaultSkills = [
  { id: 1, title: 'Communication', desc: "Clear writing and speaking; active listening.", emoji: '🗣️' },
  { id: 2, title: 'Teamwork', desc: 'Collaborating effectively with diverse teams.', emoji: '🤝' },
  { id: 3, title: 'Problem Solving', desc: 'Analytical thinking and creative solutions.', emoji: '🧠' },
  { id: 4, title: 'Adaptability', desc: "Quickly adjust to new tools, teams, and requirements.", emoji: '🌊' },
  { id: 5, title: 'Time Management', desc: 'Prioritizing tasks and meeting deadlines.', emoji: '⏱️' },
  { id: 6, title: 'Creativity', desc: 'Generating ideas and improving UX/code.', emoji: '✨' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 }
};

const SoftSkills = ({ skills = defaultSkills, className = '' }) => {
  return (
    <motion.section id="soft-skills" className={`py-12 ${className}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
      <motion.h3 className="text-4xl font-bold mb-6 text-center" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        Soft Skills
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((s) => (
          <motion.div
            key={s.id || s.title}
            className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow flex items-start gap-4"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <div className="text-3xl leading-none">{s.emoji || '⭐'}</div>
            <div>
              <div className="font-semibold">{s.title}</div>
              {s.desc && (
                <div className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SoftSkills;