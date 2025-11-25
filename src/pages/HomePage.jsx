// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SoftSkills from '../components/SoftSkills';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;