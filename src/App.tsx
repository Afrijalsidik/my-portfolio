import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import ProjectDetail from './components/ProjectDetail';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="text-white cyber-grid">
        <Particles />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;