import React from 'react';

const toolstechData = [
  { name: 'Linux' },
  { name: 'Bash' },
  { name: 'Python' },
  { name: 'Docker' },
  { name: 'Nmap' },
  { name: 'Javascript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'MongoDB' },
  { name: 'PostgreSQL' },
  { name: 'C' },
];

const Tools = () => {
  return (
    <section
      id="tools"
      className="py-2 bg-black text-gray-300 max-w-5xl mx-auto px-6"
    >
      {/* Tools & Technologies Section */}
      <h2 className="text-3xl font-bold mb-10 text-white">Tools & Technologies</h2>
      
      <div className="flex flex-wrap gap-2 justify-start">
        {toolstechData.map((tool) => (
          <span
            key={tool.name}
            className="text-sm font-medium text-white bg-gray-800 rounded-full px-3 py-1"
          >
            {tool.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Tools;
