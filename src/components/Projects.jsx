// src/components/Projects.jsx
import { motion } from 'framer-motion';
import React from 'react';

// --- EDIT THIS ARRAY WITH YOUR PROJECTS ---
const projectsData = [
  {
    title: 'Book selling website',
    description: 'A full-stack web application designed for managing books and orders featuring an intuitive admin dashboard and real-time status updates. The system includes secure authentication, inventory tracking, order management, and responsive UI components to deliver a smooth and efficient experience for both admins and users.',
    tech: ['React', 'Node.js', 'Express', 'Mysql', 'Tailwind CSS'],
    liveUrl: 'http://book.kyawmgmglwin.site', // <-- YOUR LIVE DEMO URL
    repoUrlFe: 'https://github.com/kyawmgmglwin2004/book-web-fe',
    repoUrlBe: 'https://github.com/kyawmgmglwin2004/book-web-be', // <-- YOUR GITHUB REPO URL
  },
  {
    title: 'Project Two',
    description: 'A responsive e-commerce frontend built with Next.js, featuring product filtering and a shopping cart.',
    tech: ['Next.js', 'Tailwind CSS', 'Redux Toolkit'],
    liveUrl: 'https://your-live-project-url-2.com', // <-- YOUR LIVE DEMO URL
    repoUrlFe: 'https://github.com/your-username/your-repo-2', // <-- YOUR GITHUB REPO URL
    repoUrlBe: 'https://github.com/your-username/your-repo-2', // <-- YOUR GITHUB REPO URL
  },
  {
    title: 'Project Three',
    description: 'A data visualization dashboard that fetches data from a public API and displays it using interactive charts.',
    tech: ['Vue.js', 'D3.js', 'FastAPI'],
    liveUrl: 'https://your-live-project-url-3.com', // <-- YOUR LIVE DEMO URL
    repoUrlFe: 'https://github.com/your-username/your-repo-3', // <-- YOUR GITHUB REPO URL
    repoUrlBe: 'https://github.com/your-username/your-repo-3', // <-- YOUR GITHUB REPO URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1  gap-8">
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
            
              <a href={project.repoUrlFe} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                View Frontend Code
              </a>
              <a href={project.repoUrlBe} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                View Backend Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;