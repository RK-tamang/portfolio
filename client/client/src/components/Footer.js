import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <p>© {new Date().getFullYear()} rk tmg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
