import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS'] },
    { title: 'Backend & Database', skills: ['Java', 'SQL', 'RESTful APIs'] },
    { title: 'Tools & Workflows', skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'npm'] },
  ];

  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Technical <span className="text-teal-400">Skills</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-slate-800/60 p-6 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold text-teal-400 mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-900 text-slate-300 border border-slate-700 text-sm px-3 py-1.5 rounded-lg font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;