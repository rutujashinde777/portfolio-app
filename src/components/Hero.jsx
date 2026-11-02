import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full text-sm font-semibold">
          Available for Opportunities
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-teal-400">Rutuja Shinde</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl text-slate-400 font-semibold">
          Junior Java Full Stack Developer
        </h2>
        <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
          Passionate about building responsive, modern React frontends and scalable backend APIs using Java and SQL.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-4 py-3 bg-slate-800 hover:text-teal-400 rounded-lg transition-colors font-medium text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-4 py-3 bg-slate-800 hover:text-teal-400 rounded-lg transition-colors font-medium text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;