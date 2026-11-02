import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Event Hub',
      description: 'A React-based multi-page event management application featuring interactive wishlist functionality, dynamic product search, and custom event pages.',
      tech: ['React', 'JavaScript', 'CSS Modules', 'React Router'],
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      demo: '#',
      github: '#',
    },
    {
      title: 'Chalo Chale',
      description: 'A responsive travel website design featuring structured destination cards and intuitive mobile-first layout design.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
      demo: '#',
      github: '#',
    },
    {
      title: 'AI Genius',
      description: 'An interactive educational platform concept built around artificial intelligence and modern software technologies.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/40 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured <span className="text-teal-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex flex-col justify-between">
              <div>
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-xs bg-slate-800 text-teal-300 px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-4">
                <a href={proj.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-300 hover:text-teal-400">
                  Code
                </a>
                <a href={proj.demo} target="_blank" rel="noreferrer" className="text-sm font-semibold text-teal-400 hover:text-teal-300">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;