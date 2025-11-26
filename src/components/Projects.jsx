// src/components/Projects.jsx
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// --- EDIT THIS ARRAY WITH YOUR PROJECTS ---
const projectsData = [
  {
    title: 'Book selling website',
    description: 'A full-stack web application designed for managing books and orders featuring an intuitive admin dashboard and real-time status updates. The system includes secure authentication, inventory tracking, order management, and responsive UI components to deliver a smooth and efficient experience for both admins and users.',
    key: ["Go to AdminDashboard => /adminDashboard , userName = Test  email = test@gmail.com, password = 123456"],
    tech: ['React', 'Node.js', 'Express', 'Mysql', 'Tailwind CSS'],
    liveUrl: 'http://book.kyawmgmglwin.site',
    repoUrlFe: 'https://github.com/kyawmgmglwin2004/book-web-fe',
    repoUrlBe: 'https://github.com/kyawmgmglwin2004/book-web-be',
  },
  {
    title: 'MyanType (Typing Game)',
    description: 'A bilingual typing game that supports both Myanmar and English. The game includes customizable time modes, player profiles, and a leaderboard system. It is designed to help users improve their typing speed and accuracy while making the experience fun and competitive.',
    tech: ['Node.js', "Express", 'React', 'Tailwind CSS', 'Prisma', 'Mysql', 'Cloud Vps'],
    liveUrl: 'https://myan-type.kyawmgmglwin.site/',
    repoUrlFe: 'https://github.com/one-project-one-month/MyanType-React',
    repoUrlBe: 'https://github.com/one-project-one-month/MyanType-Nodejs',
  },
  {
    title: 'Point of Sale System (POS)',
    description: `OPOM POS is a sleek Next.js-powered Point of Sale system with secure login, smart role-based access, and a fast, responsive UI.
Manager users get full control over products, inventory, reports, staff, and settings, while Cashiers handle quick daily sales with a clean POS interface.
Featuring real-time analytics, streamlined checkout, and intuitive inventory tools, OPOM POS helps businesses run smoother and smarter.`,
    key: ["Manager login => email: manager@pos.com, password: password", "Cashier login => email: cashier@pos.com, password: password"],
    tech: ['Laravel', 'Next.js', 'Tailwind CSS', 'Mysql', 'Vercel', 'Cloud Vps'],
    liveUrl: 'https://opom-pos-nextjs.vercel.app/',
    repoUrlFe: 'https://github.com/one-project-one-month/opom-pos-nextjs',
    repoUrlBe: 'https://github.com/one-project-one-month/opom-pos-laravel',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              {project.key && (
                <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded">
                  <p className="font-semibold mb-1 text-sm">Demo Credentials:</p>
                  {project.key.map((key, i) => (
                    <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{key}</p>
                  ))}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
                
                <a 
                  href={project.repoUrlFe} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
                >
                  <FaGithub size={16} />
                  Frontend
                </a>
                
                <a 
                  href={project.repoUrlBe} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors"
                >
                  <FaGithub size={16} />
                  Backend
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;