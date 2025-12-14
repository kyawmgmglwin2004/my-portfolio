// src/components/Skills.jsx
import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  { name: 'PHP', icon: '🐘', category: 'Backend' },
  { name: 'Laravel', icon: '🎨', category: 'Backend' },
  { name: 'Node.js', icon: '🟩', category: 'Backend' },
  { name: 'Express.js', icon: '🚂', category: 'Backend' },
  { name: 'Microservices', icon: '🧩', category: 'Backend' },
  { name: 'Moleculer', icon: '🦔', category: 'Backend' },
  { name: 'REST API', icon: '🔌', category: 'Backend' },
  { name: 'API Integration', icon: '🔗', category: 'Backend' },
  

  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Bootstrap', icon: '🅱️', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'Frontend' },

  { name: 'MySQL', icon: '🐬', category: 'Database' },
  { name: 'Prisma', icon: '🔷', category: 'Database' },


  { name: 'Cloud / VPS', icon: '☁️', category: 'DevOps' },
  { name: 'AWS S3', icon: '📦', category: 'DevOps' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'GitHub', icon: '🐙', category: 'DevOps' },
  { name: 'GitLab', icon: '🦊', category: 'DevOps' },

  { name: 'Ollama', icon: '🦙', category: 'AI' },
  { name: 'Qdrant', icon: '🧠', category: 'AI' },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
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
      <h2 className="text-4xl font-bold text-center mb-10">Skills & Technologies</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl
                       flex items-center space-x-3 px-5 py-3
                       transition-all duration-300 hover:shadow-lg cursor-default"
            variants={itemVariants}
            whileHover={{ scale: 1.07 }}
          >
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <p className="font-semibold">{skill.name}</p>
              <p className="text-sm opacity-60">{skill.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
