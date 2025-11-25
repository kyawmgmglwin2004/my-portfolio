// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SoftSkills from '../components/SoftSkills';
import Experience from '../components/Experience';
import Education from '../components/Education';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <SoftSkills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;