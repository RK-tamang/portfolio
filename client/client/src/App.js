import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import BlogsList from './components/BlogsList';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Languages />
              {/* <WorkExperience /> */}
              <Skills />
              <Tools />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/blogs" element={<BlogsList />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
