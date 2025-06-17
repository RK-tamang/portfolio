import React from 'react';
import './global.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Languages from './components/Languages';
import Tools from './components/Tools';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Languages />
      {/* <WorkExperience /> */}
      <Skills />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
