import React from 'react';

const languages = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Nepali', proficiency: 'Mother Tongue' },
  { name: 'Hindi', proficiency: 'Fluent' },
];

const Languages = () => {
  return (
    <section
      id="skills"
      className="py-2 bg-black text-gray-300 max-w-5xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Languages</h2>
      
      <div className="space-y-3">
        {languages.map((language) => (
          <div key={language.name} className="flex items-center space-x-3">
            <span className="text-sm font-semibold text-white">
              {language.name}
            </span>
            <span className="text-xs text-gray-400">
              ({language.proficiency})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
