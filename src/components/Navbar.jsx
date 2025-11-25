// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-gray-50 dark:bg-gray-800 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Kyaw Mg Mg Lwin.dev
          </a>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              {isDark ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;