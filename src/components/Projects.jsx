// src/components/Projects.jsx
import { motion } from 'framer-motion';
import React from 'react';

// --- EDIT THIS ARRAY WITH YOUR PROJECTS ---
const projectsData = [
  {
    title: 'Project One',
    description: 'A full-stack web application for task management with user authentication and real-time updates.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://your-live-project-url.com', // <-- YOUR LIVE DEMO URL
    repoUrl: 'https://github.com/your-username/your-repo', // <-- YOUR GITHUB REPO URL
  },
  {
    title: 'Project Two',
    description: 'A responsive e-commerce frontend built with Next.js, featuring product filtering and a shopping cart.',
    tech: ['Next.js', 'Tailwind CSS', 'Redux Toolkit'],
    liveUrl: 'https://your-live-project-url-2.com', // <-- YOUR LIVE DEMO URL
    repoUrl: 'https://github.com/your-username/your-repo-2', // <-- YOUR GITHUB REPO URL
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard that fetches data from a public API and displays it using interactive charts.',
    tech: ['Vue.js', 'D3.js', 'FastAPI'],
    liveUrl: 'https://your-live-project-url-3.com', // <-- YOUR LIVE DEMO URL
    repoUrl: 'https://github.com/your-username/your-repo-3', // <-- YOUR GITHUB REPO URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="card flex flex-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            layout
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs font-semibold bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 mt-auto">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                Live Demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;