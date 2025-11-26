// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    id: 1,
    degree: "Matriculation",
    school: "High School Ngazun",
    period: "2019-2020",
    details: ["Graduated with honors", "Coursework: Math, Chemistry"]
  },
  {
    id: 2,
    degree: "Programming Basic Course",
    school: "Fairway",
    period: "2024",
    details: ["HTML", "CSS", "Bootstrap", "JavaScript", "Java Basic", "MySQL"]
  },
  {
    id: 3,
    degree: "Programming Professional Course",
    school: "Fairway",
    period: "2024",
    details: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL", "API Integration"]
  },
  {
    id: 4,
    degree: "Turning Programming Training Center",
    school: "Sayar Thet Khaing",
    period: "2025",
    details: ["javaScript", "Node js", "Express js", "React","TypeScript","Next js", "MySQL", "API Integration"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

const Education = () => {
  return (
    <motion.section
      className="py-12"
      id="education"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center text-white dark:text-white"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Education
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((ed) => (
            <motion.article
              key={ed.id}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"
              variants={itemVariants}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{ed.degree}</h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {ed.period}
                </span>
              </div>

              <h3 className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">
                {ed.school}
              </h3>

              <ul className="list-disc list-inside text-sm space-y-1">
                {ed.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;