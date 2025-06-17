import React from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRss,
} from 'react-icons/fa';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-md z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Home */}
        <div
          className="text-xl font-bold cursor-pointer flex items-center space-x-2"
          onClick={() => scrollToSection('hero')}
        >
          <FaHome />
          <span>rk tmg</span>
        </div>

        {/* Navigation + Socials */}
        <ul className="flex space-x-4 items-center">
          {/* Nav Links */}
          <li
            className="cursor-pointer hover:text-blue-500 flex items-center space-x-1"
            onClick={() => scrollToSection('about')}
          >
            <FaUser />
            <span>About</span>
          </li>
          <li
            className="cursor-pointer hover:text-blue-500 flex items-center space-x-1"
            onClick={() => scrollToSection('skills')}
          >
            <FaTools />
            <span>Skills</span>
          </li>
          <li
            className="cursor-pointer hover:text-blue-500 flex items-center space-x-1"
            onClick={() => scrollToSection('projects')}
          >
            <FaProjectDiagram />
            <span>Projects</span>
          </li>
          <li
            className="cursor-pointer hover:text-blue-500 flex items-center space-x-1"
            onClick={() => scrollToSection('contact')}
          >
            <FaEnvelope />
            <span>Contact</span>
          </li>
           <span className="border-l-2   border-gray-600 h-8 mx-2"></span>

          {/* Social Media Icons with dividers */}
          <li className="flex items-center space-x-2">
            <a
              href="https://github.com/RK-tamang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            
          </li>

          <li className="flex items-center space-x-2">
            <a
              href="https://linkedin.com/in/rk-tmg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </li>

          <li className="flex items-center space-x-2">
            <a
              href="https://twitter.com/rktmg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
          </li>

          <li>
            <a
              href="mailto:tmgroshan2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope size={20} />
            </a>
            
          </li>
          <span className="border-l-2   border-gray-600 h-8 mx-2"></span>
          <li
            className="cursor-pointer hover:text-blue-500 flex items-center space-x-2"
          >
            <FaRss />
            <span>Blogs</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
