// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SoftSkills from '../components/SoftSkills';
import Education from '../components/Education';
import Experience from '../components/Experience';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <SoftSkills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;