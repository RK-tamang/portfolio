import React from 'react';

const projectsData = [
  {
    title: 'Vulnerability Scanner',
    description: 'A tool to scan networks and identify vulnerabilities.',
    imageUrl: '/projects/vulnerability-scanner.png',
    projectUrl: '#',
  },
  {
    title: 'Exploit Development',
    description: 'Custom exploits developed for penetration testing.',
    imageUrl: '/projects/exploit-development.png',
    projectUrl: '#',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-gray-300 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project) => (
          <div key={project.title} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
