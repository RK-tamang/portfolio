import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaRss } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'; 

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash on page load or route change
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        // Scroll to the target element with a smooth behavior
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white shadow-md z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Home */}
        <div className="text-xl font-bold flex items-center space-x-2">
          <RouterLink to="/" className="flex items-center space-x-2 text-white">
            <FaHome />
            <span>rk tmg</span>
          </RouterLink>
        </div>

        {/* Navigation + Socials */}
        <ul className="flex space-x-4 items-center text-white">
          {/* Nav Links */}
          <li className="flex items-center space-x-1">
            <ScrollLink to="about" smooth={true} duration={500} className="flex items-center space-x-1 text-white cursor-pointer">
              <FaUser />
              <span>About</span>
            </ScrollLink>
          </li>
          <li className="flex items-center space-x-1">
            <ScrollLink to="skills" smooth={true} duration={500} className="flex items-center space-x-1 text-white cursor-pointer">
              <FaTools />
              <span>Skills</span>
            </ScrollLink>
          </li>
          <li className="flex items-center space-x-1">
            <ScrollLink to="projects" smooth={true} duration={500} className="flex items-center space-x-1 text-white cursor-pointer">
              <FaProjectDiagram />
              <span>Projects</span>
            </ScrollLink>
          </li>
          <li className="flex items-center space-x-1">
            <ScrollLink to="contact" smooth={true} duration={500} className="flex items-center space-x-1 text-white cursor-pointer">
              <FaEnvelope />
              <span>Contact</span>
            </ScrollLink>
          </li>
          <span className="border-l-2 border-gray-600 h-8 mx-2"></span>

          {/* Social Media Icons with dividers */}
          <li className="flex items-center space-x-2">
            <a href="https://github.com/RK-tamang" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaGithub size={20} />
            </a>
          </li>

          <li className="flex items-center space-x-2">
            <a href="https://linkedin.com/in/rk-tmg" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin size={20} />
            </a>
          </li>

          <li className="flex items-center space-x-2">
            <a href="https://twitter.com/rktmg" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaTwitter size={20} />
            </a>
          </li>

          <li>
            <a href="mailto:tmgroshan2004@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaEnvelope size={20} />
            </a>
          </li>
          <span className="border-l-2 border-gray-600 h-8 mx-2"></span>
          <li className="flex items-center space-x-2">
            <RouterLink to="/blogs" className="flex items-center space-x-2 text-white">
              <FaRss />
              <span>Blogs</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
