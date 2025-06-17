import React from 'react';

const tags = [
  { id: 1, name: 'ethical hacker' },
  { id: 2, name: 'cyber-security' },
  { id: 4, name: 'Red teamer' },
  { id: 6, name: 'pentester' },
  { id: 7, name: 'Security Enthusiast' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center bg-black text-white py-10 px-6 max-w-5xl mx-auto"
    >
      <div className="md:w-3/4">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm RK tmg <span role="img" aria-label="waving hand">👋</span>
        </h1>
        <p className="text-xl mb-4">
          Building Secure Digital Futures with Ethical Hacking
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-start gap-2 md:justify-start mt-2">
          {tags.map((tag) => (
            <h3
              key={tag.id}
              className="text-xs font-medium text-white bg-gray-800 rounded-full px-3 py-1"
            >
              {tag.name}
            </h3>
          ))}
        </div>
      </div>

      <div className="md:w-1/4 flex justify-center md:justify-end">
        <img
          src="/profile.jpeg"
          alt="rk-tmg"
          className="rounded-full w-40 h-40 object-cover border-5 border-gray-800"
        />
      </div>
    </section>
  );
};

export default Hero;
