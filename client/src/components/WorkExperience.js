import React from 'react';

const workExperienceData = [
  {
    company: 'Cryptogen Nepal Pvt. Ltd.',
    role: 'Chief Technology Officer',
    badges: ['Co-founder', 'Full-time'],
    startYear: 2019,
    endYear: 'Present',
    logoUrl: '/work/cryptogen.png',
  },
  {
    company: 'Softwarica College of IT & E-commerce',
    role: 'Lecturer',
    badges: ['Part-time'],
    startYear: 2022,
    endYear: 'Present',
    logoUrl: '/work/softwarica.png',
  },
  {
    company: 'Pentester Nepal',
    role: 'Community Leader',
    badges: [],
    startYear: 2017,
    endYear: 'Present',
    logoUrl: '/work/pentester.png',
  },
  {
    company: 'OWASP Nepal',
    role: 'Community Leader',
    badges: ['Former'],
    startYear: 2021,
    endYear: 2024,
    logoUrl: '/work/owasp.png',
  },
  {
    company: 'Emirates NBD',
    role: 'Senior Security Researcher',
    badges: [],
    startYear: 2016,
    endYear: 2019,
    logoUrl: '/work/enbd.png',
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 bg-black text-gray-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-white">Work Experience</h2>
        <ul className="space-y-8">
          {workExperienceData.map((work) => (
            <li key={work.company} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={work.logoUrl}
                  alt={work.company}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{work.company}</h3>
                  <p className="text-gray-400">{work.role}</p>
                  <div className="flex space-x-2 mt-1">
                    {work.badges.map((badge) => (
                      <span
                        key={badge}
                        className="bg-gray-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-gray-400">
                {work.startYear} - {work.endYear}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
