import React from 'react';

const About = () => {
  return (
    <section id="contact" className="py-20 bg-black text-gray-300 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Contact</h2>
      <h3 className="text-4xl font-bold mb-10 text-white text-center">Get in Touch</h3>
      <p className="text-center text-white text-lg">
        Want to connect? Go to my{' '}
        <a
          href="https://www.linkedin.com/in/rk-tmg" // ✅ Corrected URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 underline font-bold hover:text-blue-600"
        >
          Linktree Profile
        </a>{' '}
        and find the best way to reach me.
      </p>
    </section>
  );
};

export default About;
