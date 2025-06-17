import React from 'react';

const skillsData = [
  { name: 'Penetration Testing' },
  { name: 'Network Security' },
  { name: 'Python' },
  { name: 'Linux' },
  { name: 'Digital Forensics' },
  { name: 'Cloud Security' },
  { name: 'Web Development' },
  { name: 'Cybersecurity' },
  { name: 'Red Teaming' },
  { name: 'Blue Teaming' },
  { name: 'Incident Response' },
  { name: 'Vulnerability Assessment' },
  { name: 'Security Testing' },
  { name: 'Security Audit' },
  { name: 'Security Compliance' },
  { name: 'Security Governance' },
  { name: 'Security Awareness' },
  { name: 'Security Training' },
  { name: 'Security Consulting' },
  { name: 'Security Management' },
  { name: 'Security Operations' },
  { name: 'Security Architecture' },
  { name: 'Cryptography' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-1 bg-black text-gray-300 max-w-5xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>

      <div className="flex flex-wrap gap-2 justify-start">
        {skillsData.map((skill) => (
          <span
            key={skill.name}
            className="text-sm font-medium text-white bg-gray-800 rounded-full px-3 py-2"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
